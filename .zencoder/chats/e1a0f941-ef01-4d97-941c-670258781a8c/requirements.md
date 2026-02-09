# Requirements - Fix Practica Inteligente Specialized Paths

## Overview
The "Práctica Inteligente" feature allows users to choose a specialized learning path (General, Finance, IT, Emails, Travel). Currently, the system fails to maintain a continuous session, often ending after a single exercise or failing to load relevant content for specific paths.

## Problem Statement
1. **Session Termination**: The session reloads the page after completing the initial exercises, which resets the user's progress and selected path.
2. **Missing Content**: Several specialized courses (Negotiations, TOEFL, Travel) are not included in the `GlobalContentProvider`, limiting the available exercise pool.
3. **Queue Management**: The `PracticaInteligenteClient` does not dynamically update the `PremiumCourseSession` queue as new exercises are fetched.
4. **Specialization Mapping**: The mapping between course levels and specializations is incomplete or incorrect for specialized tracks like "emails-b1".

## Goals
- Ensure a continuous, infinite learning session for any selected path.
- Correctly map all available courses to their respective specializations.
- Fix the logic that causes the session to reset or end prematurely.

## Requirements

### 1. Continuous Session
- Remove `window.location.reload()` from `onComplete`.
- The session should seamlessly transition to new exercises as they are fetched from the API.
- Maintain the user's selected path until they explicitly exit.

### 2. Full Content Integration
- Include all available course levels in `GlobalContentProvider`:
    - `ingles-a1` to `ingles-c2`
    - `emails-b1`
    - `negociaciones-b2`
    - `toefl-b1`, `toefl-b2`, `toefl-c1`
    - `viajes-a1`
- Correctly map these to specializations:
    - `emails-b1` -> `emails`
    - `negociaciones-b2` -> `finance`
    - `viajes-a1` -> `travel`
    - `toefl-*` -> `generic` (or a new `exams` path if requested, but for now `generic` with high complexity).

### 3. Dynamic Queue Updating
- `PracticaInteligenteClient` must update the `sessionData` passed to `PremiumCourseSession` whenever new exercises are added to the queue.
- Ensure `PremiumCourseSession` can handle an growing queue without resetting the `currentIndex` unexpectedly.

### 4. Level & Complexity Logic
- Ensure that `emails-b1` and other specialized paths are correctly handled by the level-based filtering in `GlobalContentProvider`.
- Default to a reasonable level if the course name doesn't follow the standard `ingles-[level]` pattern.

## Constraints
- Must use existing `PremiumCourseSession` component.
- Must follow the established `UltraAdaptiveEngine` architecture.
