# Technical Specification - Course Completion Debug Tool

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase
- **Language**: TypeScript
- **Dependencies**: `@supabase/supabase-js`, `lucide-react` (for UI)

## Implementation Approach
We will add a debug control panel to the `B2UnitPreviewPage` and similar preview pages. This panel will contain actions to automate progress.

### 1. Data Access
- For units 1-11, we have `.ts` files in `src/lib/course/b2/`.
- For units 12-30, we have `.json` files in `src/content/cursos/ingles-b2/`.
- The tool needs to be able to load both types or use a unified loader.

### 2. Completion Logic
We will create a helper function `completeUnit(unitId, exercises)` that:
1. Iterates through all `exercises`.
2. Calls `supabase.from('xp_transactions').insert(...)` for each exercise (or uses `completeExercise` logic).
3. Updates `course_progress` table:
   - Sets `completed = true`
   - Sets `score = 100`
   - Populates `exercises_completed` JSONB array with all exercise IDs.

### 3. UI Components
- **DebugPanel**: A floating or sticky component at the bottom of the debug pages.
- **Buttons**:
  - `Complete Current Unit`: Mark all 50 exercises of the current unit as done.
  - `Complete Full B2 Course`: Mark all 30 units as done.

## Source Code Structure Changes
- Modify `src/app/debug/b2-preview/[unitId]/page.tsx` to include the `DebugPanel`.
- Create a new utility `src/lib/debug/course-utils.ts` for the completion logic.

## Verification Approach
- **Manual Verification**: Click the buttons and check the `course_progress` and `xp_transactions` tables in the Supabase dashboard.
- **E2E Test**: Write a Playwright test to verify that clicking "Complete Unit" updates the progress bar and UI state.
