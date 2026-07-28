import { Schema, model, Types } from 'mongoose';

export interface RoadmapStage {
  stage: string;
  description: string;
}

export interface TopicDoc {
  _id: Types.ObjectId;
  key: string;
  title: string;
  description: string;
  order: number;
  roadmap: RoadmapStage[];
  isWhiteboard: boolean;
}

const roadmapStageSchema = new Schema<RoadmapStage>(
  {
    stage: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false }
);

const topicSchema = new Schema<TopicDoc>({
  key: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, required: true },
  roadmap: { type: [roadmapStageSchema], required: true },
  isWhiteboard: { type: Boolean, default: false },
});

export const Topic = model<TopicDoc>('Topic', topicSchema);
