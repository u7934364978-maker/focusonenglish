# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/a6b1de98-7035-4b54-be93-30120285ec68/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/a6b1de98-7035-4b54-be93-30120285ec68/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/a6b1de98-7035-4b54-be93-30120285ec68/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/a6b1de98-7035-4b54-be93-30120285ec68/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

#### [x] Task 1: Populate all 30 B2 Units with 50 exercises each
- [x] Migrate Unit 12 (50 exercises)
- [x] Migrate Unit 13 (50 exercises)
- [x] Migrate Unit 14 (50 exercises)
- [x] Migrate Unit 15 (50 exercises)
- [x] Migrate Units 16-20
- [x] Migrate Units 21-25
- [x] Migrate Units 26-30
- **Description**: Ensure `unit-1.ts` through `unit-30.ts` in `src/lib/course/b2/` contain 50 exercises.
- **Verification**: Scripted audit of exercise counts.

#### [x] Task 2: Fix visibility issues after Unit 12
- [x] Update `src/lib/course/b2/index.ts` to include migrated units.
- [x] Verify Units 12-30 are visible in preview.
- **Description**: Debug and fix why `/debug/b2-preview/unit-13`+ shows no content.
- **Verification**: Browser verification.

#### [x] Task 3: Verification with E2E Test
- [x] Create an E2E test to verify the debug feature.
- [x] Verify Units 12-30 have 50 exercises each (verified via script).
- **Description**: Create an E2E test to verify the debug feature.
- **Verification**: Scripted audit and code review.

#### [x] Task 4: Commit and Push
- [x] Commit changes with descriptive message.
- [x] Push to origin.
- **Description**: Finalize the task by pushing changes to the repository.
- **Verification**: Git log check.
