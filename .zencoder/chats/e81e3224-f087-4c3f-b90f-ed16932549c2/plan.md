# Implementation Plan: Adaptive Algorithm for English A2 Course (Database-Driven)

## Phase 1: Database & Seed
### [x] Task 1: Create Adaptive Schema Migration
Add `difficulty` to `course_exercises` and create `user_adaptive_state` table.
- File: `supabase/migrations/20260209_adaptive_a2_db.sql`

### [x] Task 2: Seed Exercise Difficulties
Update existing A2 exercises with difficulty levels 1-4 based on module progression.
- File: `supabase/migrations/20260209_seed_a2_difficulties.sql`

## Phase 2: Adaptive Engine
### [x] Task 3: Implement AdaptiveEngine Service
Create the logic to fetch next exercise (SRS or New) and handle progression.
- File: `src/lib/learning/adaptive-engine.ts`

### [x] Task 4: Integrate SRS with Adaptive Engine
Ensure failed exercises are correctly tracked in `user_srs` and prioritized.
- Update: `src/lib/learning/adaptive-engine.ts`

## Phase 3: UI & Verification
### [x] Task 5: Create A2 Adaptive Page
Implement the practice UI for the A2 adaptive course.
- File: `src/app/curso/ingles-a2/practica/page.tsx`

### [x] Task 5b: Link Adaptive Page from Course Page
Update the course home to point to the new adaptive engine.
- Update: `src/app/curso/ingles-a2/page.tsx`

### [x] Task 6: Final Verification
Run lint and typecheck.
- Command: `npm run lint` && `npm run typecheck`
