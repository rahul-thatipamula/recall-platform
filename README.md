# Recall

A technical recall assessment platform for software engineers. Modern AI tools have shifted
learning from **active recall** to **passive recognition** — you understand a concept when you
read an AI-generated explanation, but can you reproduce it from memory in an interview? Recall
measures and strengthens that gap directly, instead of teaching through tutorials or generating
solutions for you.

The core idea is the **Recognition vs Recall** model: every concept is tested twice — once as a
multiple-choice recognition check, once as a free-response recall prompt graded against a rubric.
Tracking the two separately (and the gap between them) is a far more honest signal of interview
readiness than a quiz score or course-completion percentage.

This repo is an early, intentionally scoped-down build — see [What's stubbed / not built](#whats-stubbed--not-built)
before assuming a feature is production-ready.

## Features

- **Course catalog** — Java, Spring Boot, SQL, Redis, Kafka, AWS, Behavioral, and System Design,
  browsable from a w3schools-style sidebar.
- **Learning vs Testing per course** — a short tutorial + roadmap per concept (Learning), and the
  recognition + recall assessment flow (Testing).
- **Levels** — every concept and system design scenario is tagged Beginner / Intermediate /
  Advanced and filterable.
- **Recognition vs Recall dashboard** — per-concept recognition rate, average recall score, and
  the gap between them.
- **System Design whiteboard** — a full [tldraw](https://tldraw.dev) canvas per scenario, a
  component palette (Load Balancer, Cache, DB, Queue, CDN, …), a one-click "insert connected
  starter layout" that drops the scenario's expected components pre-wired with arrows, and a
  temporary coverage-based evaluate button.
- Autosaving whiteboard (to `localStorage`, per scenario), collapsible sidebar nav, and a warm,
  serif-headed visual theme.

## Architecture

A small monorepo, no shared package — two independently run apps:

```
recall-platform/
├── client/   Vite + React + TypeScript SPA
└── server/   Express + Mongoose API backed by MongoDB
```

| Layer    | Stack                                              |
|----------|-----------------------------------------------------|
| Frontend | React 19, React Router, Vite, TypeScript, tldraw     |
| Backend  | Express 5, Mongoose, TypeScript (`ts-node-dev`)      |
| Database | MongoDB (local, no auth, single instance assumed)    |

### Project structure

```
client/src/
├── api.ts                 typed fetch client for the whole backend surface
├── layout/
│   ├── AppLayout.tsx       sidebar + <Outlet/> shell, owns collapse state
│   └── Sidebar.tsx         course nav, fed by /api/topics
└── pages/
    ├── Home.tsx            course grid (all topics)
    ├── CoursePage.tsx       per-topic Learning/Testing tabs, or scenario list for System Design
    ├── Assessment.tsx       recognition (MCQ) → recall (free response) → graded result
    └── Whiteboard.tsx       full-screen tldraw canvas for a System Design scenario

server/src/
├── models/                 Topic, Concept, Attempt, SystemDesignScenario, SystemDesignAttempt
├── data/                   seed content for every topic + scenario
├── grading/grader.ts        pluggable RecallGrader interface (see below)
├── routes/                 topics, concepts, attempts, system-design
├── index.ts                 express app entry
└── seed.ts                  wipes and reseeds Topic/Concept/SystemDesignScenario collections
```

## Getting started

Prerequisites: Node 20+, MongoDB installed locally (`mongod` on your PATH).

```bash
# 1. start MongoDB (leave running in its own terminal, or --fork)
mongod --dbpath ./mongo-data

# 2. backend
cd server
npm install
cp .env.example .env
npm run seed   # populates Topic / Concept / SystemDesignScenario collections
npm run dev    # http://localhost:4000

# 3. frontend (separate terminal)
cd client
npm install
npm run dev    # http://localhost:5173, proxies /api to localhost:4000
```

Open `http://localhost:5173`. `npm run seed` is destructive (it wipes and reinserts) — safe to
rerun any time you want to reset content back to the seed data.

## API reference

| Method & path                              | Purpose                                                        |
|---------------------------------------------|------------------------------------------------------------------|
| `GET /api/topics`                           | List all courses (with roadmap + `isWhiteboard` flag)            |
| `GET /api/topics/:key`                      | One course by slug (`java`, `spring-boot`, `system-design`, …)    |
| `GET /api/concepts?topic=&level=`           | Concepts, optionally filtered by topic/level                     |
| `GET /api/concepts/:id`                     | One concept                                                       |
| `POST /api/attempts`                        | Submit `{conceptId, recognitionSelectedIndex, recallAnswer}`, returns the graded result |
| `GET /api/attempts/dashboard`                | Per-concept aggregate: recognition rate, avg recall score, gap    |
| `GET /api/system-design/scenarios`          | List System Design scenarios                                      |
| `GET /api/system-design/scenarios/:id`      | One scenario                                                       |
| `POST /api/system-design/attempts`          | Submit `{scenarioId, snapshot}` (a tldraw snapshot), returns a coverage score |

## Grading design

Grading is intentionally behind an interface so the current heuristic can be swapped for a real
LLM without touching any route:

- `server/src/grading/grader.ts` exports a `RecallGrader` interface. `HeuristicRecallGrader`
  (the active implementation) scores free-response answers by rubric-keyword coverage.
  `LlmRecallGrader` is a stub next to it — wire up a provider and flip `activeGrader` to use it.
- The System Design evaluator (`server/src/routes/systemDesign.ts`) uses the same philosophy: it
  scans the serialized whiteboard snapshot for the scenario's expected component labels. It's a
  crude stand-in — a structure-aware (or LLM-based) evaluator is a natural next step.

## What's stubbed / not built

- **No auth / multi-user support** — everything is single-user, unauthenticated.
- **Grading is heuristic, not LLM-based** — see above; both graders are designed to be swapped out.
- **Whiteboard state is client-side only** — autosaved to `localStorage` per scenario/browser, not
  persisted server-side (the `SystemDesignAttempt` collection stores a snapshot per *evaluation*,
  not continuous autosave).
- **Content depth is uneven** — Java and Spring Boot have 4 concepts each; SQL/Redis/Kafka/AWS/
  Behavioral have 3 each; System Design has 6 scenarios (2 per level). Good first contribution:
  add more concepts/scenarios following the existing seed data shape.
- **No adaptive revision scheduling, project reflection journal, or spaced-repetition** — these
  are in the original product vision but out of scope for this build.

## Contributing

- Backend: `cd server && npm run dev` (ts-node-dev, restarts on save). Type-check with
  `npx tsc --noEmit`.
- Frontend: `cd client && npm run dev` (Vite HMR). Type-check with `npx tsc -b --noEmit`.
- Keep new grading logic behind the `RecallGrader` interface rather than hardcoding a provider
  into a route.
- Seed data lives in `server/src/data/*.ts` — it's plain TypeScript arrays, easy to extend without
  touching schema code.
- No comments explaining *what* code does — only *why*, where the reasoning isn't obvious from
  the code itself.
