import { ConceptDoc } from '../models/Concept';

type SeedConcept = Omit<ConceptDoc, '_id'>;

export const seedConcepts: SeedConcept[] = [
  // ---------- Java ----------
  {
    topic: 'Java',
    level: 'Intermediate',
    title: 'Garbage Collection',
    tutorial:
      'The JVM heap is split into generations. Most objects die young, so the young generation is collected often and cheaply (minor GC); objects that survive several collections are promoted to the old generation, which is collected less often but more expensively (major GC). An object becomes eligible for collection once nothing reachable from a GC root still references it.',
    recognition: {
      prompt: 'Which statement about the JVM garbage collector is correct?',
      options: [
        'It reclaims memory used by objects with no reachable references',
        'It runs only when the developer calls System.gc() explicitly',
        'It manages memory for both the heap and the OS file descriptors',
        'It prevents all memory leaks in a Java application',
      ],
      correctIndex: 0,
    },
    recallPrompt:
      'Explain, in your own words, how the JVM decides an object is eligible for garbage collection and how generational GC uses that to stay efficient.',
    rubricKeywords: ['reachability', 'root', 'young generation', 'old generation', 'minor gc', 'major gc', 'heap'],
  },
  {
    topic: 'Java',
    level: 'Intermediate',
    title: 'HashMap Internals',
    tutorial:
      'A HashMap stores entries in buckets chosen by hashCode(). When two keys land in the same bucket (a collision), Java chains them in a linked list, or as a balanced tree once a bucket gets large enough. When the map\'s load factor is exceeded, it resizes by doubling the bucket array and rehashing everything.',
    recognition: {
      prompt: 'What happens inside a HashMap when two keys produce the same hash bucket?',
      options: [
        'The second key silently overwrites the first value',
        'A collision occurs and entries are chained (or tree-ified) in that bucket',
        'The HashMap throws a ConcurrentModificationException',
        'The map automatically resizes to avoid the collision',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Walk through what happens step by step when you call put() on a HashMap, including how collisions and resizing are handled.',
    rubricKeywords: ['hashcode', 'bucket', 'collision', 'linked list', 'treeify', 'load factor', 'resize', 'equals'],
  },
  {
    topic: 'Java',
    level: 'Beginner',
    title: 'Checked vs Unchecked Exceptions',
    tutorial:
      'Checked exceptions (like IOException) extend Exception and must either be caught or declared in a throws clause — the compiler enforces handling. Unchecked exceptions extend RuntimeException and represent programmer errors or conditions you typically don\'t recover from, so the compiler doesn\'t force you to handle them.',
    recognition: {
      prompt: 'Which of these is a checked exception in Java?',
      options: ['NullPointerException', 'IllegalArgumentException', 'IOException', 'ArrayIndexOutOfBoundsException'],
      correctIndex: 2,
    },
    recallPrompt:
      'Explain the difference between checked and unchecked exceptions, and how that difference affects method signatures and error-handling strategy.',
    rubricKeywords: ['compile time', 'runtimeexception', 'throws clause', 'recoverable', 'unchecked', 'checked'],
  },
  {
    topic: 'Java',
    level: 'Advanced',
    title: 'Volatile and the Java Memory Model',
    tutorial:
      'volatile guarantees that a write to a variable is immediately visible to other threads (no stale cached copies) and prevents the compiler/CPU from reordering instructions around that access. It does not make compound operations like increment atomic — for that you still need a lock or an atomic class.',
    recognition: {
      prompt: 'What does the `volatile` keyword guarantee?',
      options: [
        'Atomic compound operations like increment',
        'Visibility of writes across threads and prevention of instruction reordering around it',
        'Mutual exclusion, like a lock',
        'The variable is stored only in CPU cache, never memory',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain what problem `volatile` solves in multithreaded Java code, and why it is not a substitute for synchronization when you need atomicity.',
    rubricKeywords: ['visibility', 'happens-before', 'reordering', 'atomicity', 'thread', 'cache'],
  },

  // ---------- Spring Boot ----------
  {
    topic: 'Spring Boot',
    level: 'Intermediate',
    title: 'Bean Lifecycle',
    tutorial:
      'A Spring bean goes through instantiation, dependency injection (constructor/setter/field), then any @PostConstruct or InitializingBean callback, after which it is ready for use. On shutdown, @PreDestroy or DisposableBean callbacks run. BeanPostProcessors can hook in before and after initialization to wrap or modify beans.',
    recognition: {
      prompt: 'Which order correctly reflects a Spring bean\'s lifecycle?',
      options: [
        'Destroy → Instantiate → Populate properties → Initialize',
        'Instantiate → Populate properties → Initialize → Ready for use → Destroy',
        'Initialize → Instantiate → Populate properties → Destroy',
        'Populate properties → Destroy → Instantiate → Initialize',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Describe the full lifecycle of a Spring bean from container startup to shutdown, naming the extension points (annotations/interfaces) available at each stage.',
    rubricKeywords: [
      'instantiation',
      'dependency injection',
      'postconstruct',
      'initializingbean',
      'predestroy',
      'applicationcontext',
      'beanpostprocessor',
    ],
  },
  {
    topic: 'Spring Boot',
    level: 'Beginner',
    title: 'Dependency Injection Types',
    tutorial:
      'Spring supports constructor, setter, and field injection. Constructor injection is preferred because it lets fields be final (immutable), makes dependencies explicit and easy to unit test without the container, and fails fast at startup if a circular dependency exists rather than at some later runtime point.',
    recognition: {
      prompt: 'Which form of dependency injection does the Spring team recommend for mandatory dependencies?',
      options: ['Field injection', 'Constructor injection', 'Setter injection', 'Static factory injection'],
      correctIndex: 1,
    },
    recallPrompt:
      'Compare constructor, setter, and field injection in Spring, and explain why constructor injection is generally preferred.',
    rubricKeywords: ['immutability', 'testability', 'circular dependency', 'final field', 'autowired', 'mandatory'],
  },
  {
    topic: 'Spring Boot',
    level: 'Advanced',
    title: 'Transactional Propagation',
    tutorial:
      '@Transactional propagation controls how a method\'s transaction relates to a caller\'s existing transaction. REQUIRED (the default) joins the existing transaction if one is present. REQUIRES_NEW suspends the caller\'s transaction and starts an independent one with its own commit/rollback — useful for things like audit logging that must persist even if the outer transaction rolls back.',
    recognition: {
      prompt: 'With `Propagation.REQUIRES_NEW`, what happens when a method is called from within an existing transaction?',
      options: [
        'It joins the existing transaction',
        'It suspends the existing transaction and starts a new, independent one',
        'It throws an exception because nesting isn\'t allowed',
        'It ignores transactionality entirely',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how @Transactional propagation works in Spring, contrasting REQUIRED and REQUIRES_NEW, and give a real scenario where you would choose REQUIRES_NEW.',
    rubricKeywords: ['propagation', 'suspend', 'rollback', 'proxy', 'required', 'requires_new', 'commit'],
  },
  {
    topic: 'Spring Boot',
    level: 'Intermediate',
    title: 'Auto-configuration',
    tutorial:
      'Spring Boot scans AutoConfiguration.imports (or the older spring.factories) for candidate configuration classes, then applies each one conditionally — @ConditionalOnClass, @ConditionalOnMissingBean, and similar annotations decide whether it actually activates based on what\'s on the classpath and what beans you\'ve already defined. That\'s how adding a starter dependency "just works" without manual bean declarations.',
    recognition: {
      prompt: 'How does Spring Boot decide which auto-configuration classes to apply at startup?',
      options: [
        'It applies every configuration class found on the classpath unconditionally',
        'It uses conditional annotations (like @ConditionalOnClass) to enable configs based on what\'s present',
        'It requires every bean to be manually declared in application.properties',
        'It only works with beans annotated @Primary',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how Spring Boot auto-configuration works under the hood, including the role of @Conditional annotations and spring.factories / AutoConfiguration.imports.',
    rubricKeywords: ['conditionalonclass', 'conditionalonmissingbean', 'classpath', 'spring.factories', 'autoconfiguration.imports', 'starter'],
  },

  // ---------- SQL ----------
  {
    topic: 'SQL',
    level: 'Beginner',
    title: 'Indexing',
    tutorial:
      'An index is typically a B-tree structure that lets the database find rows matching a WHERE clause without scanning the whole table. It dramatically speeds up reads on the indexed column(s), but every write (INSERT/UPDATE/DELETE) now has to update the index too, so indexes trade write speed and storage for read speed.',
    recognition: {
      prompt: 'What is the main trade-off of adding an index to a frequently-updated column?',
      options: [
        'Indexes only help SELECT * queries',
        'Faster reads on that column, but slower writes since the index must be maintained',
        'Indexes make writes faster but reads slower',
        'There is no trade-off, indexes are always beneficial',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how a B-tree index speeds up a lookup, and why adding indexes everywhere is not a free performance win.',
    rubricKeywords: ['b-tree', 'lookup', 'write overhead', 'storage', 'read performance', 'maintain'],
  },
  {
    topic: 'SQL',
    level: 'Intermediate',
    title: 'JOIN Types & Execution Plans',
    tutorial:
      'INNER JOIN returns only rows with matches in both tables; LEFT JOIN keeps every row from the left table and fills unmatched right-side columns with NULL. The query planner decides join strategy (nested loop, hash join, merge join) based on table sizes and available indexes — reading an EXPLAIN plan tells you which strategy was chosen and where the cost is going.',
    recognition: {
      prompt: 'If you LEFT JOIN orders to customers and a customer has no orders, what happens to that customer\'s row?',
      options: [
        'It is excluded from the result entirely',
        'It appears once with NULLs in the order columns',
        'The query throws an error',
        'It appears once per column in the orders table',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the difference between INNER JOIN and LEFT JOIN, and describe what an execution plan tells you about how a JOIN was actually performed.',
    rubricKeywords: ['inner join', 'left join', 'null', 'execution plan', 'nested loop', 'hash join', 'index'],
  },
  {
    topic: 'SQL',
    level: 'Advanced',
    title: 'Transactions & Isolation Levels',
    tutorial:
      'ACID transactions guarantee atomicity, consistency, isolation, and durability. Isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) trade consistency guarantees for concurrency — lower isolation allows dirty reads or phantom reads but scales better, while Serializable prevents all of that at the cost of more locking/blocking.',
    recognition: {
      prompt: 'Which isolation level allows a "phantom read" (a query returning different rows on re-execution within the same transaction)?',
      options: ['Serializable', 'Repeatable Read (in most databases) and lower', 'None, phantom reads are impossible in SQL', 'Only Read Uncommitted'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain what ACID means, and walk through how the standard isolation levels differ in what anomalies (dirty read, non-repeatable read, phantom read) they permit.',
    rubricKeywords: ['atomicity', 'consistency', 'isolation', 'durability', 'dirty read', 'phantom read', 'serializable', 'repeatable read'],
  },

  // ---------- Redis ----------
  {
    topic: 'Redis',
    level: 'Beginner',
    title: 'Core Data Structures',
    tutorial:
      'Redis is not just a key-value string store: it natively supports lists, hashes, sets, and sorted sets, each with its own O(1)/O(log n) operations. Picking the right structure (e.g. a sorted set for a leaderboard, a hash for an object\'s fields) avoids re-implementing that logic in application code.',
    recognition: {
      prompt: 'Which Redis data structure would you use to implement a leaderboard ranked by score?',
      options: ['String', 'List', 'Sorted Set', 'Hash'],
      correctIndex: 2,
    },
    recallPrompt:
      'Describe the main Redis data structures and give a realistic use case for each one.',
    rubricKeywords: ['string', 'list', 'hash', 'set', 'sorted set', 'leaderboard', 'o(1)'],
  },
  {
    topic: 'Redis',
    level: 'Intermediate',
    title: 'Caching Strategies',
    tutorial:
      'Cache-aside (lazy loading) has the app check the cache first and populate it on a miss; write-through updates the cache and DB together on every write. TTLs expire stale entries automatically, and eviction policies like LRU decide what to remove when the cache is full. Choosing the wrong strategy causes either stale data or excessive cache misses.',
    recognition: {
      prompt: 'In the cache-aside pattern, what happens on a cache miss?',
      options: [
        'The request fails until the cache is manually refreshed',
        'The app reads from the database, then writes the result into the cache',
        'The cache automatically pulls from the database in the background',
        'The database is bypassed entirely',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Compare cache-aside and write-through caching strategies, and explain what TTL and eviction policy (like LRU) each solve.',
    rubricKeywords: ['cache-aside', 'write-through', 'ttl', 'eviction', 'lru', 'stale', 'cache miss'],
  },
  {
    topic: 'Redis',
    level: 'Advanced',
    title: 'Persistence: RDB vs AOF',
    tutorial:
      'RDB takes point-in-time snapshots of the dataset at intervals — fast to restore but can lose recent writes since the last snapshot. AOF logs every write operation and replays it on restart — more durable, configurable fsync frequency, but a larger file and slightly slower to restore. Production Redis often runs both together.',
    recognition: {
      prompt: 'Which persistence method logs every write operation so it can be replayed on restart?',
      options: ['RDB snapshotting', 'AOF (Append Only File)', 'Neither — Redis is purely in-memory', 'Replication'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the difference between RDB and AOF persistence in Redis, including the durability vs performance trade-off of each.',
    rubricKeywords: ['rdb', 'snapshot', 'aof', 'append only', 'durability', 'fsync', 'restart'],
  },

  // ---------- Kafka ----------
  {
    topic: 'Kafka',
    level: 'Beginner',
    title: 'Topics & Partitions',
    tutorial:
      'A Kafka topic is split into partitions, each an ordered, append-only log. Partitioning is what enables parallelism — different consumers can read different partitions concurrently — but ordering is only guaranteed within a single partition, not across the whole topic.',
    recognition: {
      prompt: 'Within a single Kafka partition, what ordering guarantee does Kafka provide?',
      options: [
        'No ordering guarantee at all',
        'Strict order of messages as they were produced',
        'Ordering only across the entire topic, not per partition',
        'Ordering only if consumers use the same client library',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain what a Kafka partition is, why topics are split into multiple partitions, and what ordering guarantees do and do not hold.',
    rubricKeywords: ['partition', 'ordered log', 'parallelism', 'append-only', 'per-partition order'],
  },
  {
    topic: 'Kafka',
    level: 'Intermediate',
    title: 'Consumer Groups & Offsets',
    tutorial:
      'Each consumer in a consumer group is assigned a subset of a topic\'s partitions, so the group as a whole processes every partition exactly once in parallel. Kafka tracks each group\'s offset (its read position) per partition, so consumers can resume from where they left off after a restart or rebalance.',
    recognition: {
      prompt: 'If two consumers in the same consumer group are subscribed to a topic with 4 partitions, what typically happens?',
      options: [
        'Both consumers read every partition, duplicating all messages',
        'Partitions are split between them so each message is processed once by the group',
        'Only one consumer is allowed to be active at a time',
        'Kafka rejects the second consumer',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how consumer groups divide up partition reads, and what an offset is used for when a consumer restarts or a rebalance happens.',
    rubricKeywords: ['consumer group', 'partition assignment', 'offset', 'rebalance', 'exactly once per group'],
  },
  {
    topic: 'Kafka',
    level: 'Advanced',
    title: 'Delivery Guarantees',
    tutorial:
      'Kafka can be configured for at-most-once, at-least-once, or exactly-once delivery. At-least-once (the common default) means consumers may see duplicate messages if an offset commit happens before processing finishes; exactly-once semantics require idempotent producers and transactional writes across produce-and-commit to eliminate duplicates.',
    recognition: {
      prompt: 'With at-least-once delivery, what can happen to a consumer if it crashes after processing a message but before committing its offset?',
      options: [
        'The message is lost forever',
        'The message may be reprocessed as a duplicate after restart',
        'Kafka automatically deduplicates it',
        'The consumer group is permanently disabled',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the difference between at-most-once, at-least-once, and exactly-once delivery in Kafka, and what mechanisms enable exactly-once semantics.',
    rubricKeywords: ['at-most-once', 'at-least-once', 'exactly-once', 'idempotent producer', 'transactional', 'offset commit', 'duplicate'],
  },

  // ---------- AWS ----------
  {
    topic: 'AWS',
    level: 'Beginner',
    title: 'EC2 vs Lambda',
    tutorial:
      'EC2 gives you a persistent virtual machine you manage and pay for continuously, suited for long-running or stateful workloads. Lambda runs your code on-demand in response to events, scales automatically, and you only pay per invocation/duration — but it\'s stateless and has execution time limits, making it a better fit for short, event-driven tasks.',
    recognition: {
      prompt: 'Which workload is generally a better fit for AWS Lambda than EC2?',
      options: [
        'A long-running stateful game server',
        'A short, event-triggered image-resize function',
        'A workload that needs a persistent local filesystem',
        'A process that must run continuously 24/7 at high, steady load',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Compare EC2 and Lambda in terms of billing model, scaling, and the kinds of workloads each is best suited for.',
    rubricKeywords: ['ec2', 'lambda', 'event-driven', 'pay per invocation', 'stateless', 'scaling', 'persistent'],
  },
  {
    topic: 'AWS',
    level: 'Intermediate',
    title: 'Load Balancing & Auto Scaling',
    tutorial:
      'An Application Load Balancer distributes incoming traffic across healthy instances in a target group, removing unhealthy ones via health checks. Auto Scaling Groups watch metrics (like CPU utilization) and add or remove instances to match demand, so the two work together to keep the app both available and cost-efficient.',
    recognition: {
      prompt: 'What is the role of health checks in an Application Load Balancer setup?',
      options: [
        'They encrypt traffic between the load balancer and instances',
        'They detect and stop routing traffic to unhealthy instances',
        'They automatically scale the number of instances',
        'They are only used for logging, not routing decisions',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how an Application Load Balancer and an Auto Scaling Group work together to handle variable traffic, including the role of health checks and scaling metrics.',
    rubricKeywords: ['load balancer', 'health check', 'target group', 'auto scaling', 'cpu utilization', 'availability'],
  },
  {
    topic: 'AWS',
    level: 'Advanced',
    title: 'S3 Consistency & Storage Classes',
    tutorial:
      'S3 now provides strong read-after-write consistency for all operations. Storage classes (Standard, Infrequent Access, Glacier, etc.) trade retrieval latency and cost for storage price — Glacier is far cheaper per GB but retrieval can take minutes to hours, so choosing a class is about matching access patterns to cost.',
    recognition: {
      prompt: 'Which S3 storage class is best suited for data you rarely access but need retrievable within minutes to hours at low storage cost?',
      options: ['S3 Standard', 'S3 Glacier', 'S3 Intelligent-Tiering only', 'S3 Standard-IA only'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain S3\'s read-after-write consistency guarantee and describe how you would choose between storage classes based on access pattern and cost.',
    rubricKeywords: ['read-after-write', 'consistency', 'storage class', 'glacier', 'infrequent access', 'retrieval cost', 'access pattern'],
  },

  // ---------- Behavioral ----------
  {
    topic: 'Behavioral',
    level: 'Beginner',
    title: 'The STAR Method',
    tutorial:
      'STAR structures a behavioral answer as Situation (context), Task (your responsibility), Action (what you specifically did), and Result (the outcome, ideally with a measurable impact). It keeps answers concrete and prevents rambling into vague generalities that don\'t show what you actually did.',
    recognition: {
      prompt: 'In the STAR method, what does the "A" stand for?',
      options: ['Assessment', 'Action', 'Approach', 'Alignment'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain each part of the STAR method and why interviewers prefer it over a free-form answer to a behavioral question.',
    rubricKeywords: ['situation', 'task', 'action', 'result', 'concrete', 'measurable impact'],
  },
  {
    topic: 'Behavioral',
    level: 'Intermediate',
    title: 'Handling Conflict with a Teammate',
    tutorial:
      'A strong answer here names a specific, real disagreement, focuses on the reasoning and communication used to resolve it (not just "we talked it out"), and is honest about a compromise or a time you were wrong. Vague, conflict-free answers read as either inexperience or an unwillingness to engage with the question.',
    recognition: {
      prompt: 'What tends to make a "describe a conflict with a teammate" answer weak in an interview?',
      options: [
        'Naming a specific, real disagreement and how it was resolved',
        'Being vague about the disagreement or claiming you never have conflicts',
        'Explaining the reasoning behind each side\'s position',
        'Describing the concrete outcome and what you\'d do differently',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Describe how you would structure an answer about a real conflict with a teammate, and what specifically makes such an answer credible versus generic.',
    rubricKeywords: ['specific example', 'resolution', 'compromise', 'communication', 'credible', 'reasoning'],
  },
  {
    topic: 'Behavioral',
    level: 'Advanced',
    title: 'Justifying a Technical Trade-off',
    tutorial:
      'When explaining a design decision, name the alternatives you actually considered, the constraint that drove the choice (latency, cost, team familiarity, deadline), and what you gave up. Interviewers are testing whether you can reason about trade-offs under real constraints, not whether you picked the "textbook correct" answer.',
    recognition: {
      prompt: 'When asked to justify a past technical decision, what is most important to include?',
      options: [
        'Only the final choice, without discussing alternatives',
        'The alternatives considered, the constraint that drove the decision, and what was traded away',
        'A defense that the decision was objectively the only correct one',
        'A list of every technology you know',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how you would structure an answer justifying a past architecture or technology decision, including how you would talk about trade-offs and constraints.',
    rubricKeywords: ['alternatives', 'constraint', 'trade-off', 'reasoning', 'context', 'decision'],
  },
];
