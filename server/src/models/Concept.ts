import { Schema, model, Types } from 'mongoose';

export interface RecognitionQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
}

export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ConceptDoc {
  _id: Types.ObjectId;
  topic: string;
  level: Level;
  title: string;
  tutorial: string;
  recognition: RecognitionQuestion;
  recallPrompt: string;
  rubricKeywords: string[];
}

const recognitionSchema = new Schema<RecognitionQuestion>(
  {
    prompt: { type: String, required: true },
    options: { type: [String], required: true },
    correctIndex: { type: Number, required: true },
  },
  { _id: false }
);

const conceptSchema = new Schema<ConceptDoc>({
  topic: { type: String, required: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  title: { type: String, required: true },
  tutorial: { type: String, required: true },
  recognition: { type: recognitionSchema, required: true },
  recallPrompt: { type: String, required: true },
  rubricKeywords: { type: [String], required: true },
});

export const Concept = model<ConceptDoc>('Concept', conceptSchema);
