# Unit 12 Content Audit (Exercises 11-20)

## Problem
Exercises 11 to 20 in Unit 12 (and other units like 13) are missing options for the student to choose from. They are currently of type `fill-blank` or `vocabulary`, which renders as a text input, but the user expects multiple-choice options.

## Affected Exercises in Unit 12
- **e11**: `fill-blank` -> Needs to be `multiple-choice`. Correct: `is being cleaned`.
- **e12**: `fill-blank` -> Needs to be `multiple-choice`. Correct: `has been updated`.
- **e13**: `fill-blank` -> Needs to be `multiple-choice`. Correct: `is being tested`.
- **e14**: `fill-blank` -> Needs to be `multiple-choice`. Correct: `have been informed`.
- **e15**: `fill-blank` -> Needs to be `multiple-choice`. Correct: `has already been sent`.
- **e16**: `vocabulary` -> Needs to be `multiple-choice`. Correct: `human`.
- **e17**: `vocabulary` -> Needs to be `multiple-choice`. Correct: `manager`.
- **e18**: `vocabulary` -> Needs to be `multiple-choice`. Correct: `intern`.
- **e19**: `vocabulary` -> Needs to be `multiple-choice`. Correct: `consultant`.
- **e20**: `vocabulary` -> Needs to be `multiple-choice`. Correct: `Officer`.

## Proposed Fix for Unit 12
Change the `type` to `multiple-choice` and add an `options` array for each of these exercises.

## Audit for Unit 13
Exercises 11-20 in Unit 13 also have this issue.
- **e11-e20**: `fill-blank` -> Needs to be `multiple-choice`.
- **e21-e30**: `fill-blank` -> Needs to be `multiple-choice`.

## Scope
The user specifically asked for Unit 12 exercises 11-20, but mentioned "desde el ejercicio 11 hasta el 20" which seems to be a recurring pattern in multiple units. I should check units 11-30 for this pattern.

## Plan
1. Fix Unit 12 (11-20).
2. Fix Unit 13 (11-20).
3. Check other units from 11 to 30 and fix if they follow the same pattern of missing options in 11-20.
