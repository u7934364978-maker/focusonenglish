# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8c7510d1-a107-4ae5-b462-1e96947c32f7/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8c7510d1-a107-4ae5-b462-1e96947c32f7/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8c7510d1-a107-4ae5-b462-1e96947c32f7/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8c7510d1-a107-4ae5-b462-1e96947c32f7/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [ ] Step: Implementation

#### [x] Task 1: Update `ExerciseRenderer.tsx` for Focused Mode
- Add `layout="focused"` prop.
- Implement `onSelectionChange` and external `triggerCheck`.
- Hide internal feedback and check buttons when in focused mode.
- Verification: Component renders without internal buttons in focused mode.

#### [x] Task 2 & 3: Create `FocusedExerciseInterface.tsx` with Feedback Bar & Animations
- Build the shell with progress bar and navigation controls.
- Implement the "Check" / "Continue" logic flow.
- Create the animated bottom feedback bar (Correct/Incorrect states).
- Add Framer Motion transitions between exercises.
- Verification: Interface shows progress bar and allows navigating through exercises with smooth animations.

#### [x] Task 4: Integration in `ExercisesPanel.client.tsx`
- Replace the current list mapping with `FocusedExerciseInterface`.
- Connect progress tracking and gating logic.
- Verification: Lesson flow works from start to finish.

#### [x] Task 5: Implement Summary Screen
- Create a professional results view at the end of the session.
- Show accuracy and a "Finish" button to return to course view.
- Verification: Summary screen displays correctly after the last exercise.

#### [x] Task 6: Final Verification & Cleanup
- Run `npm run lint` and `npm run type-check`.
- Manual testing of all exercise types in the new interface.
- Verification: All tests pass and UX is consistent.
