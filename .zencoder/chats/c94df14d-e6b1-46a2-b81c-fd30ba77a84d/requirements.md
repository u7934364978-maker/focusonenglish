# Product Requirements Document (PRD) - B1 Course Redesign

## Overview
Recreate the English B1 course to ensure high-quality, educational, and neutral content. The course will consist of 30 units, each with 50 exercises.

## Goals
1.  **Comprehensive Content**: 30 units covering B1 level English.
2.  **Exercise Density**: 50 exercises per unit.
3.  **Neutral & Educational**: Topics must be suitable for an educational environment, avoiding controversial or non-neutral subjects.
4.  **Enhanced Learning Aids**:
    *   **Word-by-word Translation**: Every English word in exercise prompts, options, and examples must have a translation using the `[[word|translation]]` syntax.
    *   **High-Quality Audio**: All exercises must have "real voice" audio (generated via ElevenLabs with OpenAI fallback).
5.  **Incremental Delivery**: Units will be created and pushed one by one for review.

## Functional Requirements
- **Exercise Types**: Multiple-choice, Fill-in-the-blanks, Sentence building, and Flashcards.
- **Translation Syntax**: `[[English|Spanish]]`.
- **Audio Integration**: Each exercise needs a corresponding audio file path.
- **Progressive Review**: Provide a commit number for each completed unit.

## Technical Constraints
- **Framework**: Next.js 15.
- **Content Storage**: TypeScript files in `src/lib/course/b1/`.
- **Audio Generation**: Use existing `scripts/generate-course-audio.ts` logic, adapted for B1 if necessary.
- **AI Model**: GPT-4o for content generation.

## UI/UX Requirements
- **Underlining**: Words in the UI should be underlined and show translations on hover (already handled by the syntax).
- **Audio Playback**: Easy access to play the "real voice" audio for each exercise.

## Milestones
1.  Unit-by-unit generation (1 to 30).
2.  Audio generation for each unit.
3.  Validation and user review.
