import { SystemDesignScenarioDoc } from '../models/SystemDesignScenario';

type SeedScenario = Omit<SystemDesignScenarioDoc, '_id'>;

export const seedScenarios: SeedScenario[] = [
  {
    level: 'Beginner',
    title: 'Design a URL Shortener',
    prompt:
      'Design a service like bit.ly. It should accept a long URL and return a short code, then redirect the short code to the original URL. Focus on how you\'d generate unique short codes and where reads vs writes happen.',
    expectedComponents: ['load balancer', 'application server', 'database', 'cache', 'hash'],
  },
  {
    level: 'Beginner',
    title: 'Design a Rate Limiter',
    prompt:
      'Design a rate limiter that sits in front of an API and limits each client to N requests per minute. Think about where the limiter lives, what it needs to track per client, and what happens when the limit is exceeded.',
    expectedComponents: ['api gateway', 'rate limiter', 'cache', 'client'],
  },
  {
    level: 'Intermediate',
    title: 'Design a Chat Application',
    prompt:
      'Design a real-time chat app like WhatsApp for one-to-one messaging. Cover how messages are delivered in real time, how they\'re persisted, and how offline users receive missed messages.',
    expectedComponents: ['load balancer', 'websocket server', 'message queue', 'database', 'cache', 'push notification'],
  },
  {
    level: 'Intermediate',
    title: 'Design a News Feed System',
    prompt:
      'Design a social media news feed like Twitter\'s home timeline. Cover how posts are fanned out to followers, how the feed is served quickly, and how you\'d handle a user with millions of followers.',
    expectedComponents: ['load balancer', 'application server', 'cache', 'database', 'message queue', 'cdn'],
  },
  {
    level: 'Advanced',
    title: 'Design a Ride-Hailing Dispatch System',
    prompt:
      'Design the dispatch system for a ride-hailing app like Uber: matching nearby drivers to a rider\'s request in real time. Cover geo-indexing, matching, and how you\'d keep location data fresh at scale.',
    expectedComponents: ['load balancer', 'matching service', 'geo-index', 'database', 'message queue', 'cache', 'notification'],
  },
  {
    level: 'Advanced',
    title: 'Design a Distributed File Storage Service',
    prompt:
      'Design a service like Dropbox or S3: users upload files, which are stored durably and can be retrieved or shared. Cover metadata vs blob storage, replication for durability, and how large files are handled efficiently.',
    expectedComponents: ['load balancer', 'metadata service', 'blob storage', 'database', 'cdn', 'replication'],
  },
];
