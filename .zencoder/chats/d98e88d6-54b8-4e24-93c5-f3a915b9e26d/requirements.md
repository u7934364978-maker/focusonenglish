# PRD - 3-Fail Activity Skip System

## Objective
Implement a mechanism in the Duolingo A1 course that allows students to see the correct solution and proceed to the next exercise after failing a specific activity 3 times.

## Requirements
1. **Track attempts per activity**: The system must track how many times a user has failed a specific interaction within a session.
2. **Threshold**: The limit for failed attempts is 3.
3. **Show Solution**: On the 3rd failed attempt, the system should display the correct solution to the user.
4. **Allow Progression**: After the 3rd failure and showing the solution, the "Continue" button should move the user to the next exercise, instead of forcing them to try again.
5. **Consistency**: This should apply to both `FocusedDuolingoSession` and `PremiumDuolingoSession`.

## User Experience
- User fails 1st time -> Normal error feedback, "Try again".
- User fails 2nd time -> Normal error feedback, "Try again".
- User fails 3rd time -> Error feedback + **The correct solution is shown**. The "Continue" button now acts as "Skip/Next".

## Technical Considerations
- Use `interaction_id` for more precise tracking of "una actividad" if available, or stick to `mastery_tag` if that's the intended "activity" scope.
- Update `failCount` logic to handle the skip condition.
- Ensure the UI clearly shows the solution on the 3rd fail.

## Open Questions
- Should the "3 fails" be consecutive? (Usually yes in these systems).
- Does the "3 fails" reset if the user gets it right eventually? (Yes).
- Is `mastery_tag` sufficient for identifying an "activity" or should we use `interaction_id`?
