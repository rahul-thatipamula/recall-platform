# Recall — for new builders

## What this is

Recall tests whether an engineer can actually **produce** technical knowledge from memory, not
just recognize it when they see it. AI tools have made it easy to understand an explanation the
moment you read it — and much easier to quietly forget it can't be reproduced under interview
pressure. Every concept on the platform is tested twice: a multiple-choice **recognition** check,
and a free-response **recall** prompt graded against a rubric. The gap between those two scores is
the actual product — it's a more honest signal of interview readiness than a quiz percentage.

## Who it's for

Backend engineers prepping for interviews, across Java, Spring Boot, SQL, Redis, Kafka, AWS,
Behavioral, and System Design.

## How someone uses it

1. Pick a course from the sidebar.
2. **Learning** tab: a short tutorial + roadmap per concept, to (re)build recognition.
3. **Testing** tab: recognition MCQ → recall free-response → graded result + gap.
4. **System Design** is different — instead of concepts, it's a full whiteboard (tldraw) per
   scenario, with a component palette, a one-click pre-wired starter layout, and a temporary
   coverage-based "Evaluate" button.

## Shape of the codebase

Two apps, no shared package:

```
client/   Vite + React + TypeScript SPA
server/   Express + Mongoose API, MongoDB
```

Start here to get oriented:
- `client/src/api.ts` — every request the frontend can make, in one file.
- `server/src/models/` — `Topic`, `Concept`, `Attempt`, `SystemDesignScenario`, `SystemDesignAttempt`.
- `server/src/data/` — all seed content (courses, concepts, scenarios) as plain TS arrays.
- `server/src/grading/grader.ts` — the grading logic sits behind a `RecallGrader` interface on
  purpose. The active grader is a keyword-coverage heuristic; it's built to be swapped for a real
  LLM without touching any route.

Full setup steps and the API reference live in [README.md](README.md).

## What's real vs. stubbed right now

Real: the recognition/recall/gap model, the course structure, level filtering, the whiteboard
canvas and autosave. **Stubbed on purpose**: both graders (concept recall and system-design
coverage) are heuristic keyword-matchers standing in for real evaluation, whiteboard state only
persists to the browser's `localStorage`, and there's no auth — everything is single-user.

## Good first contributions

- Add more concepts or system-design scenarios in `server/src/data/` — same shape as what's there.
- Swap `HeuristicRecallGrader` for a real LLM call behind the existing `RecallGrader` interface.
- Persist whiteboard snapshots server-side instead of `localStorage`.
- Anything in the "What's stubbed / not built" section of the README.
