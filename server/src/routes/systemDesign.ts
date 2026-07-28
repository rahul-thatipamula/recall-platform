import { Router } from 'express';
import { SystemDesignScenario } from '../models/SystemDesignScenario';
import { SystemDesignAttempt } from '../models/SystemDesignAttempt';

export const systemDesignRouter = Router();

systemDesignRouter.get('/scenarios', async (_req, res) => {
  const scenarios = await SystemDesignScenario.find().sort({ level: 1, title: 1 });
  res.json(scenarios);
});

systemDesignRouter.get('/scenarios/:id', async (req, res) => {
  const scenario = await SystemDesignScenario.findById(req.params.id);
  if (!scenario) {
    res.status(404).json({ error: 'Scenario not found' });
    return;
  }
  res.json(scenario);
});

// Temporary evaluator: scans the whiteboard snapshot's serialized text for the
// expected component keywords. Good enough to give directional feedback while
// the whiteboard UX settles; swap for a structure-aware or LLM-based grader later.
systemDesignRouter.post('/attempts', async (req, res) => {
  const { scenarioId, snapshot } = req.body as { scenarioId: string; snapshot: unknown };

  const scenario = await SystemDesignScenario.findById(scenarioId);
  if (!scenario) {
    res.status(404).json({ error: 'Scenario not found' });
    return;
  }

  const haystack = JSON.stringify(snapshot).toLowerCase();
  const matched: string[] = [];
  const missed: string[] = [];

  for (const component of scenario.expectedComponents) {
    if (haystack.includes(component.toLowerCase())) {
      matched.push(component);
    } else {
      missed.push(component);
    }
  }

  const score = Math.round((matched.length / scenario.expectedComponents.length) * 100);
  const feedback =
    missed.length === 0
      ? 'All expected components are labeled on your board — nice coverage. Now talk through why each one is there.'
      : `Your board is missing labels for: ${missed.join(', ')}. Add a shape or text for each and explain where it fits.`;

  const attempt = await SystemDesignAttempt.create({
    scenario: scenario._id,
    snapshot,
    score,
    feedback,
    matchedComponents: matched,
    missedComponents: missed,
  });

  res.status(201).json({ attempt, score, feedback, matchedComponents: matched, missedComponents: missed });
});
