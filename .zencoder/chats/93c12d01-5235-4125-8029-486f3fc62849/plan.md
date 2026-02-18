# Implementation Plan: Remove A1 Flashcards

## Phase 1: Technical Specification & Approval
- [x] Create technical specification (`spec.md`)
- [x] Obtain user approval for the plan

## Phase 2: Codebase Cleanup
- [x] Audit all `src/lib/course/a1/unit-*.ts` files and remove any remaining flashcards.
- [x] Remove flashcards from `src/lib/course/engine/blueprints.ts`.
- [x] Remove flashcards from `src/lib/a1-visual-exercises.ts`.

## Phase 3: Verification
- [ ] Verify via browser at `/debug/a1-preview/14`.
- [x] Run a global search to confirm no flashcards remain in A1 context.
- [ ] Obtain approval for E2E tests and implement them.
- [ ] Run all tests.
