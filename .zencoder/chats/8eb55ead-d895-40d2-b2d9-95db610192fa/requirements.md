# PRD: Completion and Visibility of 'Banca y Finanzas' Week 1 Exercises

## 1. Overview
The user reported that most exercises for the "Banca y Finanzas" (Banking and Finance) course, specifically for Week 1, are incomplete and some may not be visible on the web.

## 2. Goals
- Ensure all levels (A1, A2, B1, B2, C1) have a complete set of exercises for Week 1 (Semana 01).
- A "complete set" should include diverse task types: Multiple Choice, Fill in the Blanks, Matching, Reading Comprehension, Listening Comprehension, and Writing Task.
- Fix any visibility issues that prevent exercises from being displayed on the platform.

## 3. Analysis of Current State
- **A1 W1**: Complete (all task types present).
- **A2 W1**: Broken visibility due to incorrect key (`exercises` instead of `items`). Also missing Reading, Listening, Matching, and Writing tasks.
- **B1 W1**: Visible but incomplete (only Multiple Choice).
- **B2 W1**: Complete (all task types present).
- **C1 W1**: Visible but incomplete (only Multiple Choice).

## 4. Requirements
- **A2 W1**: 
    - Rename `exercises` key to `items` in `exercises.json`.
    - Add Reading Comprehension task.
    - Add Listening Comprehension task.
    - Add Matching task.
    - Add Writing task.
- **B1 W1**:
    - Add Reading Comprehension task.
    - Add Listening Comprehension task.
    - Add Matching task.
    - Add Writing task.
- **C1 W1**:
    - Add Reading Comprehension task.
    - Add Listening Comprehension task.
    - Add Matching task.
    - Add Writing task.
- **Verification**:
    - Ensure all exercises are correctly parsed by `localCourseService`.
    - Verify that all tasks are visible and functional in the UI.

## 5. Constraints
- Follow existing data structures and naming conventions.
- Maintain the pedagogical level appropriate for each level (A2, B1, C1).
