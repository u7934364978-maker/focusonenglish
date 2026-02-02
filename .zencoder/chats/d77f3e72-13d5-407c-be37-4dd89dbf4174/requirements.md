# Product Requirements Document (PRD): B1 Randomized Course Sequence

## Overview
Transform the current unit-based B1 English course into a single, randomized sequence of exercises mixed from all units. This change aims to provide a dynamic and varied learning experience, where users encounter different exercises in a random order every time they session, while maintaining progress tracking to ensure mastery of the entire level.

## User Goals
- Experience a varied learning path that doesn't follow a fixed linear unit structure.
- Complete all exercises in the B1 level to reach mastery.
- Have a clear sense of progress towards completing the entire level.

## Functional Requirements

### 1. Randomized Exercise Pool
- Load all exercises (interactions) from all 30 units of the B1 course.
- On every session start, create a randomized queue of exercises that the user has not yet completed.

### 2. Progress Tracking
- Track completion status of individual exercises (by `interaction_id`).
- Persistent storage of progress (using Supabase).
- Display a progress bar or indicator for the entire B1 level (total exercises vs. completed exercises).

### 3. Session Management
- When a user logs in or starts a session, shuffle the remaining exercises.
- Allow the user to resume their progress, but the order of remaining exercises should be fresh.

### 4. Course Structure Transformation
- Replace the current unit list view at `/curso/ingles-b1` with a single "Enter Level" or "Continue Level" entry point.
- The course will no longer be divided into units for the user; it will be a continuous flow of mixed exercises.

### 5. Mastery and Completion
- Once all exercises in the pool are completed, mark the level as finished.
- Provide a clear "Level Completed" state with the option to restart or move to the next level.

## Non-Functional Requirements
- **Performance**: Shuffling and loading exercises from 30 JSON files should be efficient (ideally server-side or cached).
- **UX**: Maintain the high-quality interactive experience of the `PremiumCourseSession` component.

## Open Questions / Constraints
- How to handle exercises that depend on previous context (e.g., Reading Part 2 profiles)? These should be treated as single units even if shuffled.
- The `interaction_id` must be unique across all units to track progress accurately.
