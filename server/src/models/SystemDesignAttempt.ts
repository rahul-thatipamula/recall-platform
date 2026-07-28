import { Schema, model, Types } from 'mongoose';

export interface SystemDesignAttemptDoc {
  _id: Types.ObjectId;
  scenario: Types.ObjectId;
  snapshot: unknown;
  score: number;
  feedback: string;
  matchedComponents: string[];
  missedComponents: string[];
  createdAt: Date;
}

const attemptSchema = new Schema<SystemDesignAttemptDoc>({
  scenario: { type: Schema.Types.ObjectId, ref: 'SystemDesignScenario', required: true },
  snapshot: { type: Schema.Types.Mixed, required: true },
  score: { type: Number, required: true },
  feedback: { type: String, required: true },
  matchedComponents: { type: [String], required: true },
  missedComponents: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

export const SystemDesignAttempt = model<SystemDesignAttemptDoc>('SystemDesignAttempt', attemptSchema);
