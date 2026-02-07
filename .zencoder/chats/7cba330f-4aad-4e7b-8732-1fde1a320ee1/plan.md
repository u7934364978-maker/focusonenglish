# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/7cba330f-4aad-4e7b-8732-1fde1a320ee1/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/7cba330f-4aad-4e7b-8732-1fde1a320ee1/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/7cba330f-4aad-4e7b-8732-1fde1a320ee1/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/7cba330f-4aad-4e7b-8732-1fde1a320ee1/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

1. [x] **Setup**: Create directory `src/content/cursos/ingles-a2/`
2. [x] **Generation Script**: Implement `scripts/generate-a2-final.py` with exercise templates for all topics (replaces previous versions).
3. [x] **Execution**: Generate 60 unit JSON files with 100 exercises each.
4. [x] **Validation**: Run `python3 scripts/validate-a2-course.py` and verify the `/curso/ingles-a2` route.
