# Technical Specification - 3-Fail Activity Skip System

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Components**: `FocusedDuolingoSession.tsx`, `PremiumDuolingoSession.tsx`
- **Types**: `DuolingoInteraction` in `src/types/duolingo.ts`

## Implementation Approach

### 1. Unified Identification
We will use a composite key for tracking fails: `interaction.interaction_id || interaction.mastery_tag`. This ensures that even if `interaction_id` is missing, we have a fallback, and if it's present, we are specific to that exercise.

### 2. Update `handleCheckAnswer`
- Increment `failCount` using the composite key.
- If `newFails >= 3`:
    - Generate a "Solution Message" based on the interaction type.
    - Append this solution to the feedback message.
    - Set a `canSkip` flag in the feedback state (or just check `failCount` in the continue handler).

### 3. Update `handleFeedbackContinue`
- Check if `failCount[id] >= 3`.
- If true, even if `!feedback.correct`, call `handleNext()` instead of just clearing feedback.

### 4. Solution Message Generation Logic (Helper function)
A new helper function `getSolutionText(interaction)` will be created:
- `multiple_choice` / `true_false` / `odd_one_out`: Find option text for `correct_answer`.
- `reorder_words`: Join texts of options in `correct_answer` order.
- `matching`: List pairs (e.g., "A -> B, C -> D").
- `transformation`: Show `correct_answer`.
- `categorization`: List items by category.
- `short_writing` / `dictation_guided`: Show `correct_answer_es` or a generic "Check the example".

### 5. Shared Logic
Since `FocusedDuolingoSession` and `PremiumDuolingoSession` have almost identical code, I will apply the changes to both. If possible, I'll extract the shared logic, but for now, the goal is to implement the feature quickly and safely.

## Source Code Changes
- `src/components/course/exercises/FocusedDuolingoSession.tsx`
- `src/components/course/exercises/PremiumDuolingoSession.tsx`

## Verification Plan
1.  Open an exercise.
2.  Fail it 3 times.
3.  Verify the solution is shown in the feedback area.
4.  Verify the "Continue" button moves to the next exercise.
5.  Verify that failing only 1 or 2 times still requires a retry.
