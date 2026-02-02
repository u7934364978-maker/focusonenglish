# PRD - Expanding Duolingo A1 Course Exercises (Units 9-30)

## Overview
The "Duolingo A1" course currently has a discrepancy in the number of exercises across units. While early units (like Unit 8) have approximately 20 interactions, later units (starting from Unit 9) have significantly fewer (around 6). The goal is to expand Units 9 through 30 to reach a consistent depth of approximately 20 exercises per unit.

## Target Audience
Spanish speakers learning English at an A1 (Beginner) level.

## Requirements

### 1. Quantity & Structure
- **Target**: ~20 interactions per unit.
- **Distribution**: 5 blocks per unit, with approximately 4 interactions per block.
- **Unit Range**: Unit 9 to Unit 30.

### 2. Interaction Types
Exercises should use a variety of types available in the platform:
- `matching`: Match terms (e.g., English to Spanish).
- `multiple_choice`: Select the correct option from a list.
- `true_false`: Verify if a statement is correct.
- `reorder_words`: Put words in the correct order to form a sentence or phrase.
- `transformation`: Translate or change a sentence (e.g., "He is a chef" -> "is").
- `odd_one_out`: Identify the item that doesn't belong.
- `short_writing`: Write a short phrase or sentence based on a prompt.
- `gap-fill` (if supported by JSON schema, otherwise use transformation).

### 3. Content Guidelines
- **Thematic Alignment**: Exercises must strictly follow the theme defined in `syllabus.md` for each unit.
- **Language**: Instructions and prompts in Spanish (`prompt_es`, `feedback_correct_es`), learning content in English.
- **Difficulty**: Maintain A1 level complexity.
- **Mastery Tags**: Every interaction must have a `mastery_tag` corresponding to the unit's learning objectives.

### 4. Technical Specifications
- **Format**: JSON files located in `src/content/cursos/duolingo-a1/`.
- **Schema**: Follow the existing structure in `unit8.json` and `unit9.json`.
- **IDs**: Ensure unique `interaction_id` (format: `U{Unit}_B{Block}_I{Interaction}`).

## Success Criteria
- Units 9-30 updated in `src/content/cursos/duolingo-a1/`.
- Each unit contains ~20 interactions.
- All JSON files are valid and follow the established schema.
- Content is pedagogically sound for A1 level.
