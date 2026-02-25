# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/be80403f-7250-41a4-afde-be546c54bb9b/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/be80403f-7250-41a4-afde-be546c54bb9b/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/be80403f-7250-41a4-afde-be546c54bb9b/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/be80403f-7250-41a4-afde-be546c54bb9b/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Task: Create Curriculum Parser
- Implement a script to extract vocabulary and grammar objectives from `course-specifications.md`.
- Verify extraction with unit 1 and 2.

### [x] Task: Implement Full Audit Script
- Create `scripts/audit-a1-full.ts` with checks for:
  - Exercise count (75).
  - Vocabulary and grammar coverage.
  - Translation format (`[[English|Spanish]]`).
  - Content quality (pedagogical logic, progressive difficulty, contextualization).

### [ ] Phase: Unit Correction (Unit by Unit)
- **Constraint**: Always work on URL: `https://www.focus-on-english.com/curso-a1/unit-X`
- [x] Task: Correct Unit 1
  - Fix exercise count (target 75).
  - Add missing curriculum vocabulary and grammar.
  - Fix translation format for all exercises.
  - Ensure quality standards (difficulty, context).

- [/] Task: Correct Unit 2
- [ ] Task: Correct Unit 3
... (Repeat for all 60 units)
