# Technical Specification - Course "Negociaciones B2" Excellence & Expansion

## 1. Technical Context
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS.
- **Icons**: Lucide React.
- **Animations**: Framer Motion.
- **UI Components**: Radix UI (via Shadcn UI components in `src/components/ui`).
- **State Management**: React `useState`, `useEffect`.
- **Gamification**: Existing `useGamification` hook.

## 2. UX Excellence Implementation Approach

### 2.1. Celebration Animations
- Integrate `canvas-confetti` (or a similar lightweight solution if available, otherwise use Framer Motion for custom particles).
- Add a `CelebrationOverlay` component to be triggered on block and unit completion.

### 2.2. Enhanced Feedback & Gamification
- **B2ExerciseDispatcher**:
    - Add internal state for `currentStreak` and `earnedXp`.
    - Use `AnimatePresence` for smooth transitions between feedback states.
    - Implement a "Success Popup" or "XP Toast" that appears briefly after each correct answer.
    - Add a "Streak Meter" UI element.
- **B2UnitSession**:
    - Update progress bar to reflect question-level progress (e.g., if a block has 5 questions, the progress bar should increment by 1/total_questions).
    - Add a "Focused Mode" toggle that hides the navigation sidebar/header for deep work.

### 2.3. Audio & Sound
- Implement a utility for playing sound effects (success.mp3, error.mp3).
- Add a volume toggle in the `B2UnitSession` header.

## 3. Content Expansion Approach

### 3.1. Data Structure
- Keep the current structure of exporting `ALL_EXERCISES` arrays.
- To handle 50 practices per unit efficiently, split them into logical sub-files if they grow too large (e.g., `b2-neg-m1-l1-part1.ts`, `b2-neg-m1-l1-part2.ts`).
- Ensure each exercise has a unique `id` for tracking persistence.

### 3.2. Content Generation Strategy
- **Vocabulary**: Focus on advanced business idioms (e.g., "to drive a hard bargain", "to clinch a deal").
- **Grammar**: Heavy focus on Conditionals (Zero, 1st, 2nd, 3rd, Mixed) applied to negotiation scenarios.
- **Reading**: Use `ReadingExercise` or generic `Exercise` with `text` field.
- **Listening**: Ensure placeholder or existing audio URLs are used correctly.

## 4. Source Code Changes
- **Modified Components**:
    - `src/components/course/B2UnitSession.tsx`: Progress logic, animations, Focused Mode.
    - `src/components/course/B2ExerciseDispatcher.tsx`: Feedback logic, streaks, XP UI.
- **Modified Data Files**:
    - `src/lib/course-data-b2-neg.ts`: Add new modules/lessons.
    - `src/lib/b2-neg-m*.ts`: Expand exercises to 50 per unit.

## 5. Verification Plan
- **Linting**: Run `npm run lint` to ensure code quality.
- **Unit Testing**: Run `npm test` if relevant tests exist.
- **Manual QA**:
    - Verify progress bar accuracy.
    - Check streak counting logic.
    - Ensure animations don't lag on mobile.
    - Verify 200 total exercises are correctly registered in the progress service.
