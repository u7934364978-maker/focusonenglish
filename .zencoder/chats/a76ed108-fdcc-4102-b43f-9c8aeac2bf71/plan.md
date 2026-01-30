# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a76ed108-fdcc-4102-b43f-9c8aeac2bf71/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a76ed108-fdcc-4102-b43f-9c8aeac2bf71/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a76ed108-fdcc-4102-b43f-9c8aeac2bf71/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

1. [x] Task: Add new pedagogical content to `microLessons` array in `MicrolearningGamification.tsx`
2. [x] Task: Add new 'Methodology Expert' badge to `badges` array
3. [x] Task: Update UI filters to include 'Methodology' category
4. [x] Task: Implement unlocking logic for methodology lessons and badges
5. [x] Task: Verification and Linting

### [x] Step: Implementation

This step should be replaced with detailed implementation tasks from the Planning step.

If Planning didn't replace this step, execute the tasks in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a76ed108-fdcc-4102-b43f-9c8aeac2bf71/plan.md`, updating checkboxes as you go. Run planned tests/lint and record results in plan.md.
