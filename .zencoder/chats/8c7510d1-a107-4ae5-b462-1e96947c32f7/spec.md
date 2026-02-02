# Technical Specification: Duolingo-style Exercise Interface

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Library**: React 19, Framer Motion, Tailwind CSS, Lucide React
- **Data Source**: Supabase (via `ExercisesPanel` data prop)

## Implementation Approach

### 1. New Component: `FocusedExerciseInterface`
A new component in `src/components/course/exercises/FocusedExerciseInterface.tsx` (or integrated into `ExercisesPanel.client.tsx`) that manages the session state.

**State Management**:
- `currentIndex`: Index of the current exercise.
- `isAnswered`: Boolean to track if the current exercise has been checked.
- `isCorrect`: Boolean for the last check result.
- `selectionMade`: Boolean to enable/disable the "Check" button.
- `results`: Array of results for the summary screen.

**Sub-components**:
- **Header**: Progress bar using `@radix-ui/react-progress` or a custom Framer Motion bar.
- **Exercise Container**: Uses `AnimatePresence` for slide-out/slide-in transitions.
- **Feedback Bar**: A bottom-fixed bar that changes color based on `isCorrect`.

### 2. Refactoring `ExerciseRenderer.tsx`
To support the focused view where the "Check" button is external, `ExerciseRenderer` will be updated with a `layout="focused"` prop.

**Changes**:
- When `layout="focused"`, it will hide its internal "Check" buttons and internal feedback messages.
- It will expose an `onSelectionChange` callback to notify the parent when the user has selected an option or typed something.
- It will still handle the logic of "grading" but might wait for an external `triggerCheck` signal.

### 3. Update `ExercisesPanel.client.tsx`
- Replace the `.map()` loop with the `FocusedExerciseInterface`.
- Pass the necessary data and progress callbacks.

## Data Model / Interface Changes
No changes to the database schema. The existing `ExerciseItem` types are sufficient.

## Delivery Phases

### Phase 1: Focused Layout Foundation
- Create the basic shell with Progress Bar and Navigation logic.
- Implement the "Check" and "Continue" flow.

### Phase 2: Refined Animations & Feedback
- Add Framer Motion transitions between exercises.
- Design the professional Feedback Bar (Correct/Incorrect states).

### Phase 3: Renderer Adaptations
- Update `ExerciseRenderer` to support the focused layout (cleaner tiles, hidden internal buttons).

### Phase 4: Summary Screen
- Implement the final screen showing accuracy and a "Finish" button.

## Verification Approach
- **Linting**: `npm run lint`
- **Type-checking**: `npm run type-check`
- **Manual Testing**: Verify each exercise type (Multiple Choice, Drag-Drop, etc.) in the new interface.
- **Responsiveness**: Check mobile vs desktop views.
