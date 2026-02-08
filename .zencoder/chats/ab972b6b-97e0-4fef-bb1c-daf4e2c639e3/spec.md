# Technical Specification - English A1 Course Improvements

## 1. Technical Context
- **Language**: TypeScript / React
- **Framework**: Next.js 15 (App Router)
- **State Management**: React `useState`, `useMemo`
- **Data Source**: JSON files in `src/content/cursos/ingles-a1/` and Supabase for progress.

## 2. Implementation Approach

### 2.1. Continuous Exercise Flow
- **Goal**: When a unit ends, automatically or via a "Next" button, transition to the next unit.
- **Mechanism**:
    - Modify `PremiumCourseSession` to accept an optional `nextUnitUrl` prop.
    - If `nextUnitUrl` is provided, the "FINALIZAR" button in the summary screen will redirect to that URL instead of calling the default `onComplete`.
    - Update `src/app/curso/ingles-a1/[unitId]/page.tsx` to determine the next unit in the sequence and pass it to the client component.
    - Update `PracticeClient` (the adaptive mode) to also identify the next unit or simply reload with new exercises from the SRS queue.

### 2.2. Simplified Dashboard
- **File**: `src/app/curso/ingles-a1/page.tsx`
- **Change**: 
    - Remove or comment out the "Learning Path Visualizer" (Mapa de Contenidos) section.
    - Ensure the "Smart Path Hero Card" remains the primary focus.
    - Keep the progress bar as it provides useful feedback without cluttering.

### 2.3. Exercise Explanations
- **File**: `src/components/course/exercises/PremiumSession.tsx`
- **Change**:
    - Inside the `feedback` rendering block (around line 2551), add a new section to display `interaction.explanation`.
    - Use `AnimatePresence` or simple conditional rendering.
    - Style it to be distinct from the encouragement message, perhaps with a "Learn more" or "Explanation" header.
    - Ensure it works for all interaction types (Multiple Choice, Fill Blanks, etc.).

## 3. Source Code Changes

### 3.1. `src/components/course/exercises/PremiumSession.tsx`
- Modify `Props` interface to include `nextUnitAction?: () => void`.
- Update `showSummary` view to use `nextUnitAction` if available.
- Update `feedback` footer to render `interaction.explanation`.

### 3.2. `src/app/curso/ingles-a1/page.tsx`
- Remove the grid rendering the unit list.

### 3.3. `src/app/curso/ingles-a1/[unitId]/page.tsx`
- Calculate the `nextUnitId` by finding the current unit's index in the `allUnits` list and taking `index + 1`.
- Pass this `nextUnitId` to the lesson viewer component.

## 4. Verification Plan
- **Manual Test**: 
    - Start an A1 unit, complete it, and verify that the "Finalizar" button leads to the next unit.
    - Check the A1 course home page and verify the unit list is gone.
    - Answer an exercise and verify the explanation is visible in the footer.
- **Automated Check**:
    - Run `npm run lint` to ensure no regressions in TypeScript/ESLint.
