import { Router } from 'express';
import { Concept } from '../models/Concept';
import { Attempt } from '../models/Attempt';

export const conceptsRouter = Router();

conceptsRouter.get('/', async (req, res) => {
  const { topic, level } = req.query as { topic?: string; level?: string };
  const filter: Record<string, string> = {};
  if (topic) filter.topic = topic;
  if (level) filter.level = level;

  const concepts = await Concept.find(filter).sort({ title: 1 });
  res.json(concepts);
});

conceptsRouter.get('/:id', async (req, res) => {
  const concept = await Concept.findById(req.params.id);
  if (!concept) {
    res.status(404).json({ error: 'Concept not found' });
    return;
  }
  res.json(concept);
});

conceptsRouter.get('/:id/history', async (req, res) => {
  const attempts = await Attempt.find({ concept: req.params.id }).sort({ createdAt: -1 });
  res.json(attempts);
});
