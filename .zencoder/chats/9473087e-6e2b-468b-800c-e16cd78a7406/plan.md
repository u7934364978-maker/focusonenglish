# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/9473087e-6e2b-468b-800c-e16cd78a7406/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/9473087e-6e2b-468b-800c-e16cd78a7406/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/9473087e-6e2b-468b-800c-e16cd78a7406/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/9473087e-6e2b-468b-800c-e16cd78a7406/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/9473087e-6e2b-468b-800c-e16cd78a7406/plan.md`.

### [ ] Step: Implementation

#### Phase 1: UX Excellence (Component Enhancements)
- [x] **Task 1.1**: Enhance `B2UnitSession.tsx` with granular progress tracking and "Focused Mode" UI.
- [x] **Task 1.2**: Update `B2ExerciseDispatcher.tsx` with streak tracking, XP visual feedback, and enhanced animations.
- [x] **Task 1.3**: Implement `canvas-confetti` celebration on block/unit completion.

#### Phase 2: Content Expansion (200 Exercises)
- [x] **Task 2.1**: Expand `src/lib/b2-neg-m1-l1.ts` to 50 exercises (Total 50).
- [x] **Task 2.2**: Expand `src/lib/b2-neg-m1-l2.ts` to 50 exercises (Total 100).
- [x] **Task 2.3**: Expand `src/lib/b2-neg-m2-l1.ts` to 50 exercises (Total 150).
- [x] **Task 2.4**: Create `src/lib/b2-neg-m3-l1.ts` with 50 exercises (Total 200).
- [x] **Task 2.5**: Update `src/lib/course-data-b2-neg.ts` to link all new exercises.

#### Phase 3: Stability & Fixes
- [x] **Task 3.1**: Resolve "Module not found: Can't resolve 'fs'" error by separating server-only service logic.
- [x] **Task 3.2**: Run `npm run lint` and verify project status.
- [x] **Task 3.3**: Final verification of the user journey and codebase stabilization.
