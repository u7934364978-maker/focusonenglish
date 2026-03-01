# Technical Specification - Unit 32 Exercise Improvements

## Technical Context
- **Language**: JSON (Unit content)
- **Framework**: Next.js 15 App Router (Frontend)
- **Database**: Supabase (Backend/Auth)
- **Content Storage**: `/src/content/cursos/ingles-a1/unit32.json`
- **Audio Assets**: `/public/audio/a1/unit-32/e1.mp3` to `e60.mp3`

## Implementation Approach
1. **Remove Duplicate Metadata**: Correct redundant `concept_tags` in all blocks.
2. **Prune Filler Content**: Delete all interactions with `interaction_id` starting with `U32_FILLER` and the entire "Lesson 5" section.
3. **Redesign Exercises**:
    - **Block 1**: Vocabulary for sports and the "Play vs Go" distinction.
    - **Block 2**: Hobbies and Interests (likes, loves, hates).
    - **Block 3**: Grammar (Gerunds after preference verbs).
    - **Block 4**: Reading & Listening comprehension.
4. **Link Audio Assets**: Use the 60 available audio files (`e1.mp3` to `e60.mp3`) across the exercises, ensuring the correct `/audio/a1/unit-32/` path.
5. **Add Variety**: Use multiple interaction types (`matching`, `fill_blanks`, `multiple_choice`, `reorder_words`, `listening_dictation`, `pronunciation`).

## Source Code Structure Changes
- **File**: `src/content/cursos/ingles-a1/unit32.json`
- **Sections to Update**:
    - `blocks`: Completely rebuild blocks 1-4.
    - `learning_outcomes`: Ensure alignment with updated exercises.

## Data Model / Interface Changes
- No changes to the `interaction` schema, only to the content of `unit32.json`.
- Ensure all fields comply with `src/lib/course-engine/schema.ts`.

## Delivery Phases
1. **Phase 1: Cleanup**: Remove fillers and redundant tags.
2. **Phase 2: Content Addition**: Add new high-quality exercises with correct audio paths.
3. **Phase 3: Validation**: Run linting and check audio path validity.

## Verification Approach
- **Linting**: `npm run lint` (to ensure JSON structure is correct).
- **Manual Verification**: Check a sample of audio paths for existence.
- **Automated Testing**: (To be approved by the user).
