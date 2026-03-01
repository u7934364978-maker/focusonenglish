# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/d3ab399a-6906-40e5-bc23-cdfe89a43b22/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/d3ab399a-6906-40e5-bc23-cdfe89a43b22/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/d3ab399a-6906-40e5-bc23-cdfe89a43b22/spec.md`.

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/d3ab399a-6906-40e5-bc23-cdfe89a43b22/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation - Phase 1: Cleanup

1. [x] Remove all "FILLER" interactions and "Lesson 5" section from `unit32.json`.
2. [x] Correct redundant `concept_tags` in blocks 1-4.

### [x] Step: Implementation - Phase 2: Add High-Quality Exercises

1. [x] Rebuild Block 1 (Sports & Play/Go) with at least 8 varied exercises.
2. [x] Rebuild Block 2 (Hobbies & Interests) with at least 8 varied exercises.
3. [x] Rebuild Block 3 (Grammar: Gerunds) with at least 8 varied exercises.
4. [x] Rebuild Block 4 (Reading & Listening) with 4-6 comprehension tasks.
5. [x] Integrate correct audio paths (`/audio/a1/unit-32/eX.mp3`) for all exercises.

### [x] Step: Implementation - Phase 3: Format Migration
1. [x] Migrate `unit32.json` content to `src/lib/course/a1/unit-32.ts` in the proper `UNIT_32_EXERCISES` format.
2. [x] Set `UNIT_TITLE` to "Sports & Hobbies" in `src/lib/course/a1/unit-32.ts`.
3. [x] Remove redundant `unit32.json` and cleanup temporary files.

### [x] Step: Verification & Finishing
1. [x] Run `npm run lint` and `npm run type-check` (noted widespread unrelated failures).
2. [x] Final review of content quality and consistency in the new format.
3. [x] Create and run E2E test to verify Unit 32 loading and content.
