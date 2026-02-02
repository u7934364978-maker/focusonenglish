# Technical Specification - Premium Duolingo Unit Flow

## Context
- **Language**: TypeScript, React (Next.js 15)
- **UI Libraries**: Framer Motion, Lucide React, Tailwind CSS
- **Data Source**: JSON files in `src/content/cursos/duolingo-a1/`

## Implementation Approach

### 1. Data Transformation
We need to flatten the unit's `blocks` into a single array of exercises (interactions).
- Each exercise will be tagged with its parent block's title to allow for transition cards.
- The total progress will be calculated based on the total number of exercises in the unit.

### 2. New Component: `PremiumDuolingoSession.tsx`
This will be a refactored version of `FocusedDuolingoSession.tsx` with the following enhancements:
- **Unified Exercise Queue**: Accepts a flattened list of exercises from all blocks.
- **Section Transitions**: When moving between exercises from different blocks, show a brief, high-quality animation or title card ("Next: [Block Title]").
- **Enhanced Progress Bar**: Shows progress across the entire unit.
- **Improved Feedback UI**: More polished animations and sounds for correct/incorrect answers.

### 3. Updated Component: `DuolingoUnitViewer.tsx`
Redesign this component to act as a "Unit Dashboard/Start" screen:
- **Hero Section**: Displays Unit Title, Learning Outcomes, and a prominent "START UNIT" button.
- **Curriculum Overview**: Shows a list of what the user will learn (derived from `learning_outcomes` and block titles).
- **Gamification**: Display stats like estimated time and total exercises.
- **Removal of Path**: The winding path of blocks will be replaced by this cohesive dashboard.

## Source Code Structure Changes
- Create `src/components/course/exercises/PremiumDuolingoSession.tsx` (or refactor existing if suitable).
- Modify `src/components/course/DuolingoUnitViewer.tsx` for the new landing experience.

## Delivery Phases

### Phase 1: Data & Component Setup
- Implement the exercise flattening logic.
- Create the basic structure of `PremiumDuolingoSession`.

### Phase 2: Unified Flow Implementation
- Implement the linear progression through all exercises.
- Add block transition cards.

### Phase 3: UI/UX Polishing
- Implement the "Premium" landing page in `DuolingoUnitViewer`.
- Add enhanced animations and progress tracking.

### Phase 4: Verification
- Test with multiple units (u1, u19).
- Ensure all exercise types (matching, multiple choice, etc.) work correctly in the new flow.

## Verification Approach
- **Linting**: `npm run lint`
- **Manual Testing**: Navigate through a full unit in the browser.
- **Types**: `npm run typecheck`
