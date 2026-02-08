# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/bb2f8875-816c-4ef0-a8db-b1dab7027cb9/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/bb2f8875-816c-4ef0-a8db-b1dab7027cb9/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/bb2f8875-816c-4ef0-a8db-b1dab7027cb9/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/bb2f8875-816c-4ef0-a8db-b1dab7027cb9/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

#### Phase 1: Core Engine & Schemas
- [x] **Task 1.1**: Create `src/lib/course-engine/schema.ts` with Zod schemas for all exercise types.
  - *Verification*: `npx ts-node` test script to validate samples of each type.
- [x] **Task 1.2**: Implement `src/lib/course-engine/index.ts` with `CourseEngine` class (validate/normalize methods).
  - *Verification*: Unit tests for normalization logic.
- [x] **Task 1.3**: Create `scripts/validate-courses.mjs` universal validation tool.
  - *Verification*: Run script on `src/content/cursos/ingles-a1/unit1.json`.

#### Phase 2: Content Standardization
- [x] **Task 2.1**: Run universal validation on all 285+ JSON files and fix schema mismatches.
  - *Verification*: `node scripts/validate-courses.mjs` returns 0 errors.
- [x] **Task 2.2**: Normalize metadata (IDs, titles, trimming) across the entire dataset.
  - *Verification*: Spot check 5 random units for consistency.

#### Phase 3: Service Refactoring
- [x] **Task 3.1**: Integrate `CourseEngine` into `src/lib/services/course-service.ts`.
  - *Verification*: `npm run dev` and navigate to a course unit.
- [x] **Task 3.2**: Refactor `local-course-service.ts` to use the unified engine logic.
  - *Verification*: Ensure level tests still load correctly.
- [x] **Task 3.3**: Final project-wide lint and cleanup.
  - *Verification*: `npm run lint`.

#### Phase 4: Adaptive Learning Algorithm (Duolingo-style)
- [x] **Task 4.1**: Create `src/lib/course-engine/adaptive.ts` with logic to mix exercises and prioritize reviews.
  - *Verification*: `AdaptiveEngine.generateSequence` correctly mixes review and new items.
- [x] **Task 4.2**: Update `user_srs` schema to include `last_quality` and fix `update_srs_item` function.
  - *Verification*: Migration `20260208_improve_srs_adaptive.sql` created.
- [x] **Task 4.3**: Integrate `AdaptiveEngine` into the course player UI.
  - *Verification*: `PremiumUnitViewer` and `PremiumCourseSession` updated to use adaptive sequences and track performance.
- [x] **Task 4.4**: Implement "Smart Mixing" that combines new content with review items.
  - *Verification*: Adaptive queue is now the default mode in `PremiumUnitViewer`.
- [x] **Task 4.5**: Integrate Adaptive Engine into Global Practice ("Práctica Aleatoria").
  - *Verification*: `PracticePage` uses `AdaptiveEngine.generateGlobalSequence` to provide a personalized review session across all units.

#### Phase 5: Pedagogical Review (Cambridge Standards)
- [x] **Task 5.1**: Audit and improve Inglés A1 (Units 1-15) - Focus on grammar accuracy and vocabulary progression.
  - *Verification*: Exercises meet Cambridge A1 descriptors; no pedagogical errors.
- [x] **Task 5.2**: Audit and improve Inglés A1 (Units 16-30).
  - [x] Units 16-30 completed.
  - *Verification*: Consistency in instructional language and task difficulty.
- [x] **Task 5.3**: Audit and improve Inglés A1 (Units 31-40).
  - [x] Units 31-40 completed.
  - *Verification*: Final review of A1 curriculum coherence.
- [x] **Task 5.4**: Audit and improve Inglés A1 (Units 41-50).
  - [x] Units 41-50 completed.
  - *Verification*: Adherence to the 4-block/20-exercise standard.
- [x] **Task 5.5**: Audit and improve Inglés A1 (Units 51-60).
  - [x] Units 51-60 completed.
  - *Verification*: Full curriculum audit for A1 completed.
- [in_progress] **Task 5.6**: Extend review to other courses (Work, Travel, Exams).
  - *Verification*: All repository exercises pass senior teacher audit.
