import { TopicDoc } from '../models/Topic';

type SeedTopic = Omit<TopicDoc, '_id'>;

export const seedTopics: SeedTopic[] = [
  {
    key: 'java',
    title: 'Java',
    description: 'Core language internals — memory, collections, concurrency, and exceptions — the foundation most backend interviews probe first.',
    order: 1,
    isWhiteboard: false,
    roadmap: [
      { stage: 'Language fundamentals', description: 'Exceptions, collections, and how the type system shapes error handling.' },
      { stage: 'Memory & performance', description: 'How the heap, garbage collector, and hashing structures actually behave under load.' },
      { stage: 'Concurrency', description: 'Visibility, happens-before, and why locks and volatile solve different problems.' },
    ],
  },
  {
    key: 'spring-boot',
    title: 'Spring Boot',
    description: 'How the container wires your application together — bean lifecycle, DI, transactions, and the auto-configuration magic underneath.',
    order: 2,
    isWhiteboard: false,
    roadmap: [
      { stage: 'Container basics', description: 'Dependency injection styles and how a bean comes to life.' },
      { stage: 'Transactions', description: 'How @Transactional actually manages commits, rollbacks, and propagation.' },
      { stage: 'Auto-configuration', description: 'Why adding a starter dependency "just works" without manual bean wiring.' },
    ],
  },
  {
    key: 'sql',
    title: 'SQL',
    description: 'Indexing, joins, and transaction isolation — the mechanics that separate a query that scales from one that doesn\'t.',
    order: 3,
    isWhiteboard: false,
    roadmap: [
      { stage: 'Reading & writing efficiently', description: 'What an index actually does and what it costs you.' },
      { stage: 'Combining data', description: 'JOIN semantics and how the query planner executes them.' },
      { stage: 'Concurrency & correctness', description: 'ACID guarantees and what each isolation level actually protects against.' },
    ],
  },
  {
    key: 'redis',
    title: 'Redis',
    description: 'In-memory data structures, caching patterns, and the durability trade-offs behind a cache that\'s also sometimes a database.',
    order: 4,
    isWhiteboard: false,
    roadmap: [
      { stage: 'Data structures', description: 'Picking the right structure instead of reimplementing it in application code.' },
      { stage: 'Caching patterns', description: 'Cache-aside vs write-through, and how TTL/eviction keep a cache honest.' },
      { stage: 'Durability', description: 'RDB vs AOF, and what you\'re trading for faster restarts.' },
    ],
  },
  {
    key: 'kafka',
    title: 'Kafka',
    description: 'Partitioned logs, consumer groups, and delivery guarantees — the vocabulary every distributed-systems interview assumes you have.',
    order: 5,
    isWhiteboard: false,
    roadmap: [
      { stage: 'Storage model', description: 'Topics, partitions, and what ordering guarantees do and don\'t hold.' },
      { stage: 'Consumption', description: 'How consumer groups split work and track progress with offsets.' },
      { stage: 'Guarantees', description: 'At-least-once vs exactly-once, and what makes exactly-once hard.' },
    ],
  },
  {
    key: 'aws',
    title: 'AWS',
    description: 'Compute, load balancing, and storage trade-offs — enough cloud vocabulary to reason about a system design out loud.',
    order: 6,
    isWhiteboard: false,
    roadmap: [
      { stage: 'Compute choices', description: 'EC2 vs Lambda and matching workload shape to billing model.' },
      { stage: 'Scaling traffic', description: 'Load balancers, health checks, and auto scaling working together.' },
      { stage: 'Storage', description: 'S3 consistency guarantees and picking a storage class by access pattern.' },
    ],
  },
  {
    key: 'behavioral',
    title: 'Behavioral',
    description: 'Structuring answers about conflict, trade-offs, and past decisions so they read as concrete evidence, not generic filler.',
    order: 7,
    isWhiteboard: false,
    roadmap: [
      { stage: 'Structure', description: 'The STAR method as scaffolding for a concrete, non-rambling answer.' },
      { stage: 'Interpersonal scenarios', description: 'Talking about real conflict without sounding evasive or overly self-critical.' },
      { stage: 'Technical judgment', description: 'Justifying a past decision by naming constraints and trade-offs, not just the outcome.' },
    ],
  },
  {
    key: 'system-design',
    title: 'System Design',
    description: 'Whiteboard real architectures from memory — place components, wire them together, and explain the trade-offs behind every box.',
    order: 8,
    isWhiteboard: true,
    roadmap: [
      { stage: 'Requirements', description: 'Clarify scale, read/write ratio, and consistency needs before drawing anything.' },
      { stage: 'High-level architecture', description: 'Place the core components: clients, load balancer, services, cache, database.' },
      { stage: 'Deep dives & trade-offs', description: 'Justify each component choice and how the design handles failure and scale.' },
    ],
  },
];
