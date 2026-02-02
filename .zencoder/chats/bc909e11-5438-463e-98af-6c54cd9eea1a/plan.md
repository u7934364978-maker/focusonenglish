# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/bc909e11-5438-463e-98af-6c54cd9eea1a/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/bc909e11-5438-463e-98af-6c54cd9eea1a/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/bc909e11-5438-463e-98af-6c54cd9eea1a/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

1.  **Phase 1: Foundation**
    *   [x] Create `isLikelyEnglish` utility function in `src/lib/premium-utils.ts`.
    *   [x] Define `PronunciationButton` component inside `PremiumCourseSession.tsx`.
2.  **Phase 2: Simple Interactions**
    *   [x] Add pronunciation buttons to `multiple_choice`, `odd_one_out`, and `role_play` interactions.
    *   [x] Add pronunciation buttons to `transformation` interactions.
3.  **Phase 3: Complex Interactions**
    *   [x] Add pronunciation buttons to `matching` interactions.
    *   [x] Add pronunciation buttons to `reorder_words` interactions (individual words and full solution).
4.  **Phase 4: Verification**
    *   [x] Test all interaction types in unit 1.
    *   [x] Run `npm run lint`.

### [x] Step: Implementation

Execute the tasks defined in the Planning step.
