# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8bafae04-e4a1-45a5-a941-6075146e78a9/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8bafae04-e4a1-45a5-a941-6075146e78a9/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8bafae04-e4a1-45a5-a941-6075146e78a9/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8bafae04-e4a1-45a5-a941-6075146e78a9/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [ ] Step: Implementation

1. **Task 1: Create Generation Script Boilerplate**
   - Create `scripts/generate-emails-course.ts` with basic Supabase connection and course/module metadata.
   - Verification: Run script with `ts-node` to ensure successful connection.

2. **Task 2: Implement Unit/Lesson Definitions**
   - Define the 15 units (lessons) in the script with titles, descriptions, and objectives.
   - Verification: Verify unit structure in the script code.

3. **Task 3: Create Exercise Generators**
   - Implement helper functions to generate varied content for the 5 exercise types (Reading, Vocabulary, Grammar, Writing Analysis, AI Mission).
   - Verification: Console log sample exercises for each type.

4. **Task 4: Populate and Insert Content**
   - Loop through 15 units and generate 50 exercises for each (750 total).
   - Execute database insertions into `course_modules`, `course_lessons`, and `course_exercises`.
   - Verification: Check Supabase dashboard for 750 new rows in `course_exercises`.

5. **Task 5: Final Verification and Cleanup**
   - Run `npm run lint` and verify course availability in the UI.
   - Verification: Course "Emails for Work" (B1, trabajo) should be visible and playable.
