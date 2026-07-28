import { Router } from 'express';
import { Concept } from '../models/Concept';
import { Attempt } from '../models/Attempt';
import { activeGrader } from '../grading/grader';

export const attemptsRouter = Router();

attemptsRouter.post('/', async (req, res) => {
  const { conceptId, recognitionSelectedIndex, recallAnswer } = req.body as {
    conceptId: string;
    recognitionSelectedIndex: number;
    recallAnswer: string;
  };

  const concept = await Concept.findById(conceptId);
  if (!concept) {
    res.status(404).json({ error: 'Concept not found' });
    return;
  }

  const recognitionCorrect = recognitionSelectedIndex === concept.recognition.correctIndex;
  const grade = await activeGrader.grade(recallAnswer, concept.recallPrompt, concept.rubricKeywords);

  const attempt = await Attempt.create({
    concept: concept._id,
    recognitionCorrect,
    recallAnswer,
    recallScore: grade.score,
    recallFeedback: grade.feedback,
    matchedKeywords: grade.matchedKeywords,
    missedKeywords: grade.missedKeywords,
  });

  res.status(201).json({
    attempt,
    recognitionCorrect,
    recallScore: grade.score,
    feedback: grade.feedback,
    matchedKeywords: grade.matchedKeywords,
    missedKeywords: grade.missedKeywords,
  });
});

attemptsRouter.get('/dashboard', async (_req, res) => {
  const concepts = await Concept.find();
  const results = [];

  for (const concept of concepts) {
    const attempts = await Attempt.find({ concept: concept._id }).sort({ createdAt: -1 });
    const latest = attempts[0];
    const recognitionRate = attempts.length
      ? Math.round((attempts.filter((a) => a.recognitionCorrect).length / attempts.length) * 100)
      : null;
    const avgRecallScore = attempts.length
      ? Math.round(attempts.reduce((sum, a) => sum + a.recallScore, 0) / attempts.length)
      : null;

    results.push({
      conceptId: concept._id,
      topic: concept.topic,
      title: concept.title,
      attemptsCount: attempts.length,
      recognitionRate,
      avgRecallScore,
      gap: recognitionRate !== null && avgRecallScore !== null ? recognitionRate - avgRecallScore : null,
      lastAttemptAt: latest?.createdAt ?? null,
    });
  }

  res.json(results);
});
