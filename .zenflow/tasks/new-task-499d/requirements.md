# PRD: Fix Trivial Matching Exercises in Unit 30 (A1 Course)

## Summary

Unit 30 of the A1 English course (`src/lib/course/a1/unit-30.ts`) contains multiple "Matching" vocabulary exercises that are trivially easy because the question text and the correct answer option display the **same English word**. This defeats the learning purpose of the exercise.

## Problem

The bilingual text format `[[English|Spanish]]` renders the first part (English) in English display mode and the second part (Spanish) in Spanish display mode. In the trivial exercises:

- **Question**: `[[Head|Cabeza]]` → displays as "Head"
- **Correct option**: `[[Head|Cabeza]]` → also displays as "Head"

The student simply picks the option that matches the question word exactly — no translation knowledge required.

**Screenshot reference**: Unit 30, Lesson 1/5 — "Match the parts of the body": question "Head" with option A "Head" (correct answer). Trivially obvious.

## Affected Exercises

The following 6 matching exercises in `src/lib/course/a1/unit-30.ts` use the trivial identity-matching pattern:

| Exercise ID | Topic | Questions |
|---|---|---|
| `a1-u30-u30_v1_i1` | Rooms | Kitchen, Living room, Bedroom, Bathroom |
| `a1-u30-u30_v1_i3` | Body parts | Head, Shoulder, Leg, Hand |
| `a1-u30-u30_v1_i5` | Animals | Rabbit, Horse, Lion, Bird |
| `a1-u30-u30_v1_i6` | Clothes | Shoes, Skirt, Jacket, Socks |
| `a1-u30-u30_v1_i8` | Neighborhood places | Pharmacy, Library, Cinema, Bank |
| `a1-u30-u30_v1_i10` | House adjectives | Modern, Traditional, Cozy, Bright |

## Existing Correct Pattern

Later exercises in the same file already implement the correct format. For example, `a1-u30-u30_v2_i1` (More animals):

- **Question**: `[[Cow|Vaca]]` → displays as "Cow" (English stimulus)
- **Options**: `[[Tigre|Tigre]]`, `[[Elefante|Elefante]]`, `[[Pez|Pez]]`, `[[Vaca|Vaca]]` → all display as Spanish words

The student sees "Cow" and must pick "Vaca" from Spanish options — requires actual vocabulary knowledge.

## Required Fix

For each trivial matching exercise, change the **options** from `[[English|Spanish]]` (which shows the English word) to `[[Spanish|Spanish]]` (which shows only the Spanish translation in both language modes).

- **Question stays**: `[[English|Spanish]]` (shows English stimulus to learner)
- **Options change**: `[[English|Spanish]]` → `[[Spanish|Spanish]]` (forces learner to recognize the Spanish equivalent)

### Example transformation

**Before (trivial)**:
```json
{
  "question": "[[Head|Cabeza]]",
  "options": [
    "[[Head|Cabeza]]",
    "[[Leg|Pierna]]",
    "[[Shoulder|Hombro]]",
    "[[Hand|Mano]]"
  ],
  "correctAnswer": 0
}
```

**After (non-trivial)**:
```json
{
  "question": "[[Head|Cabeza]]",
  "options": [
    "[[Cabeza|Cabeza]]",
    "[[Pierna|Pierna]]",
    "[[Hombro|Hombro]]",
    "[[Mano|Mano]]"
  ],
  "correctAnswer": 0
}
```

## Scope

- **File**: `src/lib/course/a1/unit-30.ts` only
- **Change type**: Content data change (no component or logic changes required)
- **No UI changes**: The exercise rendering component already handles this correctly

## Out of Scope

- Other units or courses
- Changing exercise types
- Grammar or reading exercises in Unit 30 (those are acceptable)

## Note on Workflow Complexity

This task is a straightforward data edit in a single TypeScript file. The full SDD workflow (Requirements → Spec → Planning → Implementation) is more than needed. The subsequent steps should be simplified to proceed directly to implementation.
