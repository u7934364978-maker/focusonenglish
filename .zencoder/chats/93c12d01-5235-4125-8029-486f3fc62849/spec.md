# Technical Specification: Remove A1 Flashcards

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **State Management**: React hooks (for debug preview)
- **Data Source**: Hardcoded exercise files (`src/lib/course/a1/*.ts`) and blueprints (`src/lib/course/engine/blueprints.ts`)
- **Database**: Supabase (PostgreSQL)

## Implementation Approach
The goal is to eliminate all exercises of type `flashcard` from the A1 course. This involves:
1.  **Codebase Cleanup**:
    -   Remove any remaining `flashcard` type exercises in `src/lib/course/a1/*.ts` (most seem to be gone, but a full audit is needed).
    -   Remove blueprints with `type: 'flashcard'` from `src/lib/course/engine/blueprints.ts`.
    -   Remove flashcards from `src/lib/a1-visual-exercises.ts`.
2.  **Database Cleanup**:
    -   Identify and delete `flashcard` exercises from the `exercises` table in Supabase for the A1 level.
3.  **Verification**:
    -   Use the debug preview (`/debug/a1-preview/[unitId]`) to ensure no flashcards are displayed.
    -   Run a global search for `type: 'flashcard'` to ensure complete removal.

## Source Code Structure Changes
-   Modified: `src/lib/course/engine/blueprints.ts`
-   Modified: `src/lib/a1-visual-exercises.ts`
-   Modified: `src/lib/course/a1/unit-*.ts` (if any remain)

## Data Model / API / interface changes
-   No schema changes.
-   Data deletion only.

## Verification Approach
-   Manual verification via `/debug/a1-preview/14` (and other units).
-   Automated check via `grep`.
-   User approval required for E2E tests.
