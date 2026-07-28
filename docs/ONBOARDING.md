# Recall — an introduction for new builders

## The problem, in plain terms

It's never been easier to *feel* like you understand something. You read an AI-generated
explanation, it makes sense, you move on. But there's a big difference between recognizing a good
explanation when you read it and being able to produce that same explanation yourself, from
memory, under pressure — like in a live interview.

Psychologists call this the gap between **recognition** (understanding something when it's in
front of you) and **recall** (retrieving it from memory with nothing in front of you). Recall the
platform is built entirely around measuring and closing that gap for software engineers.

## What the product actually does

For every topic a user studies, they're tested twice, back to back:

1. **A recognition check** — a multiple-choice question. This confirms they understand the
   concept when they see it.
2. **A recall prompt** — a free-text box with no hints, asking them to explain the concept in
   their own words, the way they'd have to in a real interview.

Both are scored. The interesting number isn't either score alone — it's the **gap between them**.
Someone who aces the multiple-choice question but writes a thin, vague paragraph in the free-text
box has found exactly the kind of weak spot that shows up in interviews and nowhere else. That gap
is the whole point of the product; everything else exists to produce and act on it.

## What a user sees, end to end

- A **course catalog**: right now, Java, Spring Boot, SQL, Redis, Kafka, AWS, Behavioral
  interview prep, and System Design.
- Inside a course, two modes:
  - **Learning** — short explanations and a roadmap, for someone building up understanding.
  - **Testing** — the recognition-then-recall flow described above, with results tracked over
    time so a person can see their own gap shrinking (or not) topic by topic.
- Everything is tagged **Beginner / Intermediate / Advanced**, so a user can focus on the right
  difficulty instead of wading through everything at once.
- **System Design** works differently from the rest, because system design isn't something you
  test with multiple choice — it's something you *draw*. Instead of a quiz, users get a real
  whiteboard where they sketch out an architecture for a prompt (e.g. "design a chat app"), drop
  in labeled boxes for things like load balancers and databases, connect them, and get a rough
  automatic read on how complete their design is.

## How this is meant to grow over time

The product isn't built as eight fixed, hand-coded courses — it's built as **one system that
happens to have eight courses loaded into it today**. Every course, every question, every roadmap
is just content sitting in a data file, not something wired into the app's logic. That distinction
matters a lot for how the team should think about growth:

- **Adding a new course** (say, Python, DevOps, or Frontend interviews) means writing new content
  in the same shape the existing courses use — no rebuilding of the learning flow, the testing
  flow, or the dashboard. The scaffolding is already generic.
- **Adding new difficulty depth** to an existing course is the same story: it's additional content
  at a given level, not a new feature.
- **The grading itself is deliberately swappable.** Today, both the recall-answer grading and the
  system-design whiteboard grading work off a simple, cheap keyword-matching check — good enough
  to prove the product works, not the final word on quality. Both were built so that a smarter
  grader (for example, one that uses an AI model to actually read and judge free-text answers,
  rather than just checking for expected words) can be dropped in later without changing anything
  a user sees or touches. Improving grading quality is a swap, not a rebuild.
- **New practice formats fit the same model.** Anything that can be framed as "show understanding,
  then produce it from memory, then measure the gap" — mock interviews, timed drills, pair
  exercises — extends the same core idea rather than requiring a new product concept.

The short version: the hard part that's already built is the *idea* (recognition vs. recall, and
measuring the gap) and the *shape* the content lives in. Growth from here is mostly about adding
more content and swapping in better grading — not rethinking how the product works.

## Where to go next

- Product/business context and the full feature list: this document plus the top of
  [README.md](README.md).
- Technical setup, architecture, and the API reference: [README.md](README.md).
- If you're picking up engineering work, README.md also lists what's genuinely finished versus
  intentionally simplified for now, and a short list of good first contributions.
