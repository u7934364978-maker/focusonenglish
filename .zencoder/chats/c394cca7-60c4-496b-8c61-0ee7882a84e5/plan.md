# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/c394cca7-60c4-496b-8c61-0ee7882a84e5/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/c394cca7-60c4-496b-8c61-0ee7882a84e5/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/c394cca7-60c4-496b-8c61-0ee7882a84e5/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/c394cca7-60c4-496b-8c61-0ee7882a84e5/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/c394cca7-60c4-496b-8c61-0ee7882a84e5/plan.md`.

### [x] Step: Implementation

1. [x] **Task 1: Generate JSON** - Generate Unit 1 content JSON following the master prompt schema.
2. [x] **Task 2: Save JSON** - Create `src/content/cursos/duolingo-a1/unit1.json` and save the content.
3. [x] **Task 3: Create Audio Script** - Create `scripts/generate-duolingo-audio.mjs` for automated TTS generation.
4. [x] **Task 4: Run Audio Script** - Run `scripts/generate-duolingo-audio.mjs` to generate all mp3 files.
5. [x] **Task 5: Update JSON Audio URLs** - Update `unit1.json` with the generated `audioUrl` paths.
6. [x] **Task 6: Verification** - Verify final JSON validity and existence of all audio files.
