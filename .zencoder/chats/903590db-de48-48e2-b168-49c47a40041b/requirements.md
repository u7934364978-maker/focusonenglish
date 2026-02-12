# Requirements: B1 Real English Course

## Project Overview
Re-create the English B1 (Intermediate) course with a more comprehensive and "Real English" approach.

## Objectives
- **Course Depth**: 30 units in total.
- **Exercise Volume**: 100 exercises per unit (3,000 total).
- **Delivery Model**: Incremental delivery in batches of 50 exercises per unit.
- **Quality**: Follow the exercise typology established in the A2 course (flashcards, multiple choice, matching, fill-blank, sentence building, speaking analysis).

## Target Audience
Intermediate (B1) students looking for practical, real-world English application.

## Functional Requirements
- Each unit must follow a specific thematic and grammatical focus.
- Explanations and instructions should be primarily in Spanish (as per A2 convention) to assist the learner, while content is in English.
- Exercise IDs must be unique (e.g., `b1-uX-eY`).

## Non-Functional Requirements
- Maintain consistency with the existing `Exercise` interface in `@/lib/exercise-generator`.
- Ensure files are optimized for performance (large arrays of objects).
