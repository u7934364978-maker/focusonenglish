# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/d1bd7077-1d78-42a2-a801-47aa10c5f46d/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/d1bd7077-1d78-42a2-a801-47aa10c5f46d/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/d1bd7077-1d78-42a2-a801-47aa10c5f46d/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/d1bd7077-1d78-42a2-a801-47aa10c5f46d/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/d1bd7077-1d78-42a2-a801-47aa10c5f46d/plan.md`.

### [x] Step: Implementation

- [x] **Task 1: Update Dashboard Navigation**
  - Modify `src/app/dashboard/courses/page.tsx` to link A1 (Traveler) to `/curso/ingles-a1`.
  - Verification: Click the "Nivel A1" link in the Traveler card and ensure it leads to `/curso/ingles-a1`.

- [x] **Task 2: Refine Server Service**
  - Adjust `src/lib/services/premium-course-service.server.ts` to ensure `getUnits` sorts 60 units correctly.
  - Verify `getUnitData` correctly resolves paths for `ingles-a1`.
  - Verification: Check logs/output to confirm units are loaded in order (1-60).

- [x] **Task 3: Refine A1 Course Index Page**
  - Update `src/app/curso/ingles-a1/page.tsx` to handle the display of 60 units efficiently.
  - Verification: Page loads all units with their titles and progress bars.

- [x] **Task 4: Final Verification**
  - Run `npm run lint` on modified files.
  - Perform an end-to-end check: Dashboard -> A1 Course -> Unit 1 -> Complete Interaction -> Verify Progress.

---

## Phase 2: Refactorización de Ejercicios (Variedad y Vocabulario PDF)

### [x] Step: Requirements (Varied Exercises)

Create a PRD for the new exercise generation logic.
1. [x] Identify the vocabulary (using Cambridge Curriculum and existing scripts as base).
2. [x] Define the new exercise types to implement (Multiple Choice, Matching, True/False, Reorder Words, Short Writing, Transformation).
3. [x] Determine how to integrate this into the existing 60 units.

### [x] Step: Technical Specification (Varied Exercises)

1. [x] Review existing exercise patterns in `unit1.json`.
2. [x] Define the generation logic for "fun and engaging" exercises in a local script.
3. [x] Plan the script `scripts/regenerate-a1-cambridge.py` to regenerate `unit1.json` through `unit60.json`.

### [x] Step: Implementation (Varied Exercises)

1. [x] Implement `scripts/regenerate-a1-cambridge.py` with expanded vocabulary and variety. (Completed via `scripts/regenerate-a1-final-v4.py`)
2. [x] Run the regeneration script for all 60 units.
3. [x] Verify JSON integrity and variety.
4. [x] Fix client-side crash by excluding word-search/crossword without data and adding defensive checks.
5. [x] Final verification and linting.
6. [x] Push changes and provide commit hash.
