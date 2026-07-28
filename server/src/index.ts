import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { conceptsRouter } from './routes/concepts';
import { attemptsRouter } from './routes/attempts';
import { topicsRouter } from './routes/topics';
import { systemDesignRouter } from './routes/systemDesign';

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));

app.use('/api/topics', topicsRouter);
app.use('/api/concepts', conceptsRouter);
app.use('/api/attempts', attemptsRouter);
app.use('/api/system-design', systemDesignRouter);

const port = process.env.PORT ?? 4000;
const mongoUri = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/recall-platform';

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });
