# PRD: Complete B2 Course Debug Feature

## Overview
The "Complete B2 Course" debug feature currently only supports 30 units and uses outdated paths for B2 units. The B2 course has been expanded to 60 units, and the units are now stored in `src/lib/b2-units/`. This feature needs to be updated to correctly mark all 60 units as completed.

## Goals
- Update `markFullB2CourseAsCompleted` to handle 60 units.
- Use the correct data source (`B2_UNITS` from `@/lib/b2-units`) for completing the units.
- Update the debug UI to reflect the 60 units.

## Requirements
1. **Functional Requirements**:
   - `markFullB2CourseAsCompleted` must iterate through all 60 units defined in `B2_UNITS`.
   - For each unit, it should gather exercise IDs and call `markUnitAsCompleted`.
   - The UI in `/debug/b2-preview/[unitId]` should show "60 Unidades" in the debug button.
   - The confirmation message in the UI should also mention 60 units.

2. **Technical Requirements**:
   - Import `B2_UNITS` in `src/lib/debug/course-utils.ts`.
   - Ensure the XP transactions and course progress are correctly inserted for each unit.

3. **User Experience**:
   - The user should be able to click "Completar Curso B2 (60 Unidades)" and have their progress updated for all 60 units.
   - A success alert should show the number of units completed.

## Success Criteria
- Clicking the "Completar Curso B2" button successfully marks 60 units as completed in the database.
- The UI correctly displays "60 Unidades".
- No errors are logged during the process.
