import 'dotenv/config';
import mongoose from 'mongoose';
import { Concept } from './models/Concept';
import { Topic } from './models/Topic';
import { SystemDesignScenario } from './models/SystemDesignScenario';
import { seedConcepts } from './data/seedConcepts';
import { seedTopics } from './data/seedTopics';
import { seedScenarios } from './data/seedSystemDesignScenarios';

async function run() {
  const uri = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/recall-platform';
  await mongoose.connect(uri);

  await Concept.deleteMany({});
  await Concept.insertMany(seedConcepts);

  await Topic.deleteMany({});
  await Topic.insertMany(seedTopics);

  await SystemDesignScenario.deleteMany({});
  await SystemDesignScenario.insertMany(seedScenarios);

  console.log(`Seeded ${seedTopics.length} topics, ${seedConcepts.length} concepts, ${seedScenarios.length} system design scenarios.`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
