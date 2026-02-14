# Technical Specification: Complete B2 Course Debug Feature

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js (App Router)
- **Database**: Supabase
- **Data Source**: `src/lib/b2-units/index.ts`

## Implementation Approach

### 1. Update `course-utils.ts`
- **File**: `src/lib/debug/course-utils.ts`
- **Changes**:
  - Import `B2_UNITS` from `@/lib/b2-units`.
  - Update `markFullB2CourseAsCompleted`:
    - Set `totalUnits = B2_UNITS.length`.
    - Loop through `B2_UNITS`.
    - For each unit, extract exercise IDs from `unit.exercises`.
    - Call `markUnitAsCompleted`.

### 2. Update Preview Page UI
- **File**: `src/app/debug/b2-preview/[unitId]/page.tsx`
- **Changes**:
  - Update `handleCompleteFullCourse` confirmation message to mention `B2_UNITS.length` (or 60).
  - Update the button label in the JSX to say "Completar Curso B2 (60 Unidades)".

## Source Code Structure Changes
No new files or structure changes required. Only modifications to existing files.

## Data Model Changes
No database schema changes. We are using existing `xp_transactions` and `course_progress` tables.

## Verification Approach
- **Manual Verification**: Use the debug panel in `/debug/b2-preview/unit-12` to trigger the "Complete Course" action.
- **Automated Testing**: Create a Playwright test to verify the "Complete Course" button exists and triggers the correct function (mocking the API calls if necessary, or checking the alert).

## Delivery Phases
1. Implement logic in `course-utils.ts`.
2. Update UI in `page.tsx`.
3. Verify with Playwright.
