# Product Requirements Document (PRD) - Premium Duolingo Unit Flow

## Objective
Enhance the user experience of the Duolingo A1 course by providing a continuous, uninterrupted, and premium exercise flow for each unit. Instead of breaking the unit into discrete blocks accessible via a path, the entire unit should be presented as a single session from start to finish.

## User Experience (UX) Goals
- **Continuity**: No interruptions or returns to a "path" view between blocks.
- **Premium Feel**: Polished transitions and a cohesive UI that feels high-quality.
- **Clarity**: A progress bar that represents the entire unit's exercises.
- **Simplicity**: One-click to start the unit and a single flow to completion.

## Functional Requirements
1. **Unified Session**:
   - Merge all exercises from all `blocks` in a unit into a single sequence.
   - Transitions between what were previously "blocks" should be seamless (e.g., a brief title card or just moving to the next exercise).
2. **Progress Tracking**:
   - The progress bar in the session should account for the total number of exercises across all blocks in the unit.
3. **Unit Entry**:
   - Instead of showing a path of blocks, the unit page should present a "Start Unit" or "Resume" experience.
4. **Completion**:
   - A single completion screen at the end of the entire unit session.

## Non-Functional Requirements
- **Performance**: Ensure that loading a unified session with many exercises doesn't negatively impact performance.
- **Maintainability**: Use existing `FocusedDuolingoSession` logic where possible to avoid duplication.

## Open Questions / Clarifications
1. **Title Cards**: Should we show a brief "Block Title" transition when moving from one block's exercises to the next?
2. **Video Exercises**: How should the video-based blocks be integrated? (Currently they are already part of the `content` array).
3. **Navigation**: Should users be able to jump to specific parts of the unit, or is it strictly linear? (User asked for continuity, suggesting linear).
4. **UI Design**: Does "presenten de distinta manera" imply a specific design change (e.g., dark mode, different animations)?

## Decisions (Assumptions)
- **Linearity**: The flow will be strictly linear to ensure continuity as requested.
- **Block Transitions**: We will add subtle "Chapter" or "Section" indicators when transitioning between blocks to give context without breaking flow.
- **UI Improvements**: We will focus on smoother animations and a cleaner layout for the session view.
