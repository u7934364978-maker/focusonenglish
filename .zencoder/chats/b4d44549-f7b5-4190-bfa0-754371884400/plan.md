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

### [x] Step: Implementation Tasks

1. [x] Create `NEGOCIACIONES_B2` curriculum structure in `src/lib/curriculum-data.ts`
2. [x] Implement M1 L1: The Preparation Phase (Vocab & Grammar) in `src/lib/b2-neg-m1-l1.ts`
3. [x] Implement M1 L2: Opening the Negotiation (Listening & Speaking) in `src/lib/b2-neg-m1-l2.ts`
4. [x] Implement M2 L1: The Art of Bargaining (Conditionals & Roleplay) in `src/lib/b2-neg-m2-l1.ts`
5. [x] Implement M3 L1: Reaching Agreements & Closing (Writing & Review) in `src/lib/b2-neg-m3-l1.ts`
6. [x] Create course aggregation data in `src/lib/course-data-b2-neg.ts`
7. [x] Implement Course Dashboard at `src/app/curso/negociaciones-b2/page.tsx`
8. [x] Refactor `B2UnitSession` and create Lesson Player at `src/app/curso/negociaciones-b2/[lessonId]/page.tsx`
9. [x] Verify integration and fix type errors in new files
10. [x] Final verification and completion check
11. [x] Troubleshoot CSS/JS loading issues (MIME type mismatch)
    - [x] Update `src/middleware.ts` to include `/curso/` routes
    - [x] Temporarily disable `nosniff` header in `next.config.js` to debug
    - [x] Align `supabase` client usage with existing course pages
12. [x] Add listening exercises and generate audio
    - [x] Add listening exercise to Module 1 Lesson 1
    - [x] Update `scripts/generate-course-audio.ts` to support `listening-comprehension`
    - [x] Execute audio generation (Note: 1/4 generated, remaining pending due to ElevenLabs quota)


