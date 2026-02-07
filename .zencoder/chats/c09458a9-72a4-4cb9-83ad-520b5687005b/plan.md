# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/c09458a9-72a4-4cb9-83ad-520b5687005b/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/c09458a9-72a4-4cb9-83ad-520b5687005b/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/c09458a9-72a4-4cb9-83ad-520b5687005b/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/c09458a9-72a4-4cb9-83ad-520b5687005b/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Bug Fix - Audio & System Errors

1. **Identify Missing Audios**: Verify that `correct.mp3` and `wrong.mp3` are missing from `public/audio/`. (COMPLETED)
2. **Generate Missing Audios**: Run the generation script to recreate system audios and any missing expansion audios. (COMPLETED)
3. **Verify Cookiebot Config**: Investigate the domain authorization error for Cookiebot. (COMPLETED)
4. **Final Verification**: Confirm all console errors from the screenshot are resolved. (COMPLETED)
