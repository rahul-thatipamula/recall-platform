import { Schema, model, Types } from 'mongoose';

export interface AttemptDoc {
  _id: Types.ObjectId;
  concept: Types.ObjectId;
  recognitionCorrect: boolean;
  recallAnswer: string;
  recallScore: number;
  recallFeedback: string;
  matchedKeywords: string[];
  missedKeywords: string[];
  createdAt: Date;
}

const attemptSchema = new Schema<AttemptDoc>({
  concept: { type: Schema.Types.ObjectId, ref: 'Concept', required: true },
  recognitionCorrect: { type: Boolean, required: true },
  recallAnswer: { type: String, required: true },
  recallScore: { type: Number, required: true },
  recallFeedback: { type: String, required: true },
  matchedKeywords: { type: [String], required: true },
  missedKeywords: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Attempt = model<AttemptDoc>('Attempt', attemptSchema);
