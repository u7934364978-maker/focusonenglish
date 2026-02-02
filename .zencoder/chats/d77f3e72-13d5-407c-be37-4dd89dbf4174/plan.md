# Implementation Plan: B1 Randomized Course Sequence

## Phase 1: Database & Service Layer
- [x] Create Supabase migration for `user_interaction_progress` table.
- [x] Create `src/lib/services/premium-course-service.ts` to handle B1 JSON loading and progress tracking.
- [x] Implement `getAllB1Interactions()` to load all interactions from 30 JSON files.
- [x] Implement `getB1Progress(userId: string)` and `saveInteractionProgress(userId: string, interactionId: string)`.

## Phase 2: Component & Page Updates
- [x] Update `src/components/course/exercises/PremiumSession.tsx` to support `onInteractionCorrect` callback.
- [x] Refactor `src/app/curso/ingles-b1/page.tsx` to display a level dashboard instead of a unit list.
- [x] Create `src/app/curso/ingles-b1/practica/page.tsx` for the randomized practice session.

## Phase 3: Randomized Logic & Integration
- [x] Implement the shuffle and filter logic in the practice page.
- [x] Integrate progress saving into the `PremiumCourseSession` flow.
- [x] Ensure "Level Completed" state is handled when no more exercises are left.

## Phase 4: Verification
- [x] Run `npm run lint` and fix any issues.
- [x] Verify randomization: Check that exercises from different units appear in a mixed order.
- [x] Verify persistence: Ensure completed exercises don't reappear after refresh.
- [x] Verify level progress tracking on the dashboard.
