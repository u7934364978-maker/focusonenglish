# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b4d44549-f7b5-4190-bfa0-754371884400/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b4d44549-f7b5-4190-bfa0-754371884400/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b4d44549-f7b5-4190-bfa0-754371884400/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b4d44549-f7b5-4190-bfa0-754371884400/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [ ] Step: Implementation Tasks

1. [ ] Create `NEGOCIACIONES_B2` curriculum structure in `src/lib/curriculum-data.ts`
2. [ ] Implement M1 L1: The Preparation Phase (Vocab & Grammar) in `src/lib/b2-neg-m1-l1.ts`
3. [ ] Implement M1 L2: Opening the Negotiation (Listening & Speaking) in `src/lib/b2-neg-m1-l2.ts`
4. [ ] Implement M2 L1: The Art of Bargaining (Conditionals & Roleplay) in `src/lib/b2-neg-m2-l1.ts`
5. [ ] Implement M3 L1: Reaching Agreements & Closing (Writing & Review) in `src/lib/b2-neg-m3-l1.ts`
6. [ ] Verify curriculum integration and exercise rendering

