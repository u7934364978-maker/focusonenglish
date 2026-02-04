# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e8f802a1-3b36-45eb-8833-a2e5a37a9ed4/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e8f802a1-3b36-45eb-8833-a2e5a37a9ed4/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e8f802a1-3b36-45eb-8833-a2e5a37a9ed4/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e8f802a1-3b36-45eb-8833-a2e5a37a9ed4/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

- [x] **M1 L1**: Add "The Power of Leverage" (Listening) and "Presenting the BATNA" (Speaking) to `src/lib/b2-neg-m1-l1.ts`
- [x] **M1 L2**: Add "Handling a Hostile Opening" (Listening) and "Proposing the Agenda" (Speaking) to `src/lib/b2-neg-m1-l2.ts`
- [x] **M2 L1**: Add "Creative Concessions" (Listening) and "Hypothetical Bargaining" (Speaking) to `src/lib/b2-neg-m2-l1.ts`
- [x] **M3 L1**: Add "The Final Hurdles" (Listening) and "Summarizing the Agreement" (Speaking) to `src/lib/b2-neg-m3-l1.ts`
- [x] **Final Check**: Run `npm run lint` and verify exercise rendering in lesson files.
