# PRD - A1 Course Curriculum Alignment Audit

## Introduction
The Focus English A1 course consists of 60 units, each with specific pedagogical objectives defined in `course-specifications.md`. This document outlines the requirements for an automated audit to ensure that each unit's exercises (JSON files) align with these objectives.

## Goals
1. Verify that each unit in `src/content/cursos/ingles-a1/unit*.json` contains the vocabulary specified in `course-specifications.md`.
2. Verify that each unit contains exercises covering the grammar points defined for that unit.
3. Ensure that each unit has the required number of exercises (60).
4. Validate that all English text follows the `[[English|Spanish]]` translation format.
5. Check for "trivial" exercises (where the answer is obvious without reading).

## Scope
- All 60 units of the A1 course.
- Content types: Vocabulary, Grammar, Reading, Listening/Speaking.

## Detailed Requirements

### 1. Curriculum Extraction
- Parse `course-specifications.md` to extract a mapping of `unit_id` to its corresponding Vocabulary and Grammar keywords/concepts.

### 2. Unit Validation
- **Exercise Count**: Each unit JSON must contain exactly 75 exercises (60 standard pedagogical exercises + 15 specialized Listening/Speaking exercises).
- **Vocabulary Coverage**: At least 80% of the specified vocabulary keywords must appear in the unit's exercises.
- **Grammar Coverage**: Exercises must be tagged with relevant `concept_tags` or `mastery_tag` that match the unit's grammar objectives.
- **Translation Completeness**: All `stimulus_en`, `transcript`, and `options` text must use the `[[English|Spanish]]` format for all relevant terms.
- **Content Quality**:
    - **Pedagogical Logic**: Verify that answers are not trivial or guessable without reading.
    - **Progressive Difficulty**: Check that the unit starts with recognition and ends with production.
    - **Contextualization**: Ensure vocabulary is introduced within full sentences.

### 3. Technical Constraints
- The audit should be run as a script (Node.js/TypeScript or Python).
- It should generate a detailed report per unit highlighting missing objectives or formatting errors.

## Success Criteria
- Audit script runs successfully across all 60 units.
- A summary report is generated showing alignment percentage and specific failures.
