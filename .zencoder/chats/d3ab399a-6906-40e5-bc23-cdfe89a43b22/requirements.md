# Product Requirements Document (PRD) - Unit 32 Improvements

## Feature Overview
Improve the quality and configuration of exercises in **Unit 32: Sports & Hobbies** (Inglés A1). The current unit contains many low-quality "filler" exercises, incorrect audio paths, and redundant metadata.

## Target Audience
Spanish speakers learning English at an A1 (Beginner) level.

## Goals
1. **Remove low-quality content**: Delete all exercises labeled as "FILLER" and the repetitive "Lesson 5" exercises.
2. **Correct Audio Paths**: Update `audio_url` to point to the valid directory: `/audio/a1/unit-32/eX.mp3`.
3. **Enhance Educational Value**: Add varied and meaningful exercises focusing on "Sports & Hobbies", "Play vs Go", and "Likes/Interests (-ing forms)".
4. **Clean up Metadata**: Remove duplicate `concept_tags` and ensure consistent `mastery_tag` usage.
5. **Quality Assurance**: Ensure all exercises are well-configured, have proper Spanish prompts, and valid English stimuli/answers.

## Functional Requirements
- **Exercise Variety**: Use at least 4 different interaction types: `matching`, `fill_blanks`, `multiple_choice`, `reorder_words`, and `listening_dictation`.
- **Audio Integration**: Link the 60+ available audio files (`e1.mp3` to `e60.mp3`) to relevant exercises.
- **Thematic Consistency**: All new exercises must align with the unit's learning outcomes:
    - Identify common sports and hobbies.
    - Differentiate between 'play' and 'go' for sports.
    - Express likes and interests using -ing forms.

## User Experience (UX)
- Smooth progression from simple vocabulary to more complex grammar.
- Clear instructions in Spanish.
- Immediate feedback (handled by the engine, but requires correct JSON configuration).

## Success Criteria
- No "FILLER" exercises remain in `unit32.json`.
- All `audio_url` paths are valid and lead to existing files.
- The total number of high-quality exercises is sufficient for a 120-minute unit (approximately 30-40 exercises total).
- Lint/Typecheck passes on the JSON structure.
