# Product Requirements Document: Duolingo-style Exercise Interface

## Overview
Transform the current exercise list view into a professional, attractive, and focused one-by-one step interface inspired by Duolingo, but without gamification mechanics (lives/hearts). The focus is on a high-quality educational experience for A1 level students.

## User Goals
- Focused learning environment with one exercise at a time.
- Clear sense of progress within a lesson.
- Immediate and professional feedback on answers.
- Modern and attractive UI/UX.

## Functional Requirements
1. **One-by-One Interface**:
   - Instead of a scrollable list, the user sees one exercise at a time.
   - A "Next" or "Check" button at the bottom handles the logic.
   - Smooth transitions between exercises using animations.

2. **Progress Tracking**:
   - A persistent progress bar at the top of the session.
   - Visual indication of current step vs. total steps.

3. **Feedback System**:
   - Bottom feedback bar that appears after an answer is submitted.
   - Professional "Correct" and "Incorrect" states (e.g., green/red with icons).
   - Display explanation/note if available in the exercise data.
   - "Continue" button to move to the next exercise.

4. **Session Management**:
   - Ability to skip or quit the session (optional, but good for UX).
   - Summary screen at the end of the lesson.

5. **Exercise Types Support**:
   - Must support all existing types: `multipleChoice`, `matching`, `drag-drop`, `flashcard`, `fillBlanks`, `reading`, `listening`, etc.

## Non-Functional Requirements
- **Performance**: Transitions must be smooth (60fps).
- **Accessibility**: Ensure buttons and text are accessible.
- **Responsiveness**: Must work perfectly on mobile and desktop.
- **Maintainability**: Use existing `ExerciseRenderer` logic where possible to avoid duplication of core logic.

## UI/UX Design (Inspiration)
- **Cleanliness**: White background with soft borders and consistent spacing.
- **Typography**: Clear, bold headings for questions.
- **Interactivity**: Hover and active states for options (e.g., "tiles" for sentence building).
- **Animations**: Subtle slide-in/out or fade effects for exercises.

## Out of Scope
- Gamification (Hearts, XP, Streaks).
- Sound Effects.
- Real-time multiplayer.
