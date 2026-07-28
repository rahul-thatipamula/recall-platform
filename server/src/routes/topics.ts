import { Router } from 'express';
import { Topic } from '../models/Topic';

export const topicsRouter = Router();

topicsRouter.get('/', async (_req, res) => {
  const topics = await Topic.find().sort({ order: 1 });
  res.json(topics);
});

topicsRouter.get('/:key', async (req, res) => {
  const topic = await Topic.findOne({ key: req.params.key });
  if (!topic) {
    res.status(404).json({ error: 'Topic not found' });
    return;
  }
  res.json(topic);
});
