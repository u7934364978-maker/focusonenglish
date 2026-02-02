# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/f32b220d-8477-415a-9c38-bd8b723cbbf0/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/f32b220d-8477-415a-9c38-bd8b723cbbf0/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/f32b220d-8477-415a-9c38-bd8b723cbbf0/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/f32b220d-8477-415a-9c38-bd8b723cbbf0/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/f32b220d-8477-415a-9c38-bd8b723cbbf0/plan.md`.

### [x] Step: Implementation

1. [x] Create `src/lib/a1-demo-course.ts` with skeleton structure for 7 days.
2. [x] Generate and implement Day 1: Greetings & Introductions.
3. [x] Generate and implement Day 2: Personal Information & Numbers.
4. [x] Generate and implement Day 3: Family & Relationships.
5. [x] Generate and implement Day 4: Daily Routine & Time.
6. [x] Generate and implement Day 5: Food & Ordering.
7. [x] Generate and implement Day 6: Places in Town & Directions.
8. [x] Generate and implement Day 7: Hobbies & Abilities.
9. [x] Run `npm run lint` and validate the course data.
10. [x] Create a preview page `src/app/demo-course/page.tsx` to view the course.


