# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d8a644fd-ac88-40a5-a9e7-f60be4a1fb53/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d8a644fd-ac88-40a5-a9e7-f60be4a1fb53/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d8a644fd-ac88-40a5-a9e7-f60be4a1fb53/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

1. **Verify TOEFL Data**: Check `src/lib/toefl-units/` for all B1, B2, C1 units and ensure they are exported in `index.ts`.
2. **Setup Environment**: Verify `.env.local` keys (ElevenLabs, OpenAI).
3. **Run Test Generation**: Execute a single audio generation to ensure setup is correct.
4. **Full Audio Generation**: Run the `generate-course-audio.ts` script for all courses.
5. **Verify Output**: Check `public/audio/toefl/` and other directories for new files.

### [ ] Step: Implementation

- [ ] Task 1: Verify TOEFL Data and Exports
- [ ] Task 2: Environment and API check
- [ ] Task 3: Execute Full Audio Generation
- [ ] Task 4: Final Verification and Report
