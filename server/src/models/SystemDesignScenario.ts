import { Schema, model, Types } from 'mongoose';
import { Level } from './Concept';

export interface SystemDesignScenarioDoc {
  _id: Types.ObjectId;
  level: Level;
  title: string;
  prompt: string;
  expectedComponents: string[];
}

const scenarioSchema = new Schema<SystemDesignScenarioDoc>({
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  title: { type: String, required: true },
  prompt: { type: String, required: true },
  expectedComponents: { type: [String], required: true },
});

export const SystemDesignScenario = model<SystemDesignScenarioDoc>('SystemDesignScenario', scenarioSchema);
