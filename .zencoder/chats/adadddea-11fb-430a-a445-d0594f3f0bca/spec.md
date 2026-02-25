# Technical Specification - 5th Lesson Block (English A1)

## 1. Technical Context
- **Framework**: Next.js 15 (App Router).
- **Data Format**: JSON files located in `src/content/cursos/ingles-a1/`.
- **Validation**: `npm run validate-exercises` (based on existing project rules).
- **Phonetics**: IPA (International Phonetic Alphabet).

## 2. Implementation Approach
We will append a new block to each unit's JSON file from Unit 30 to Unit 60. 

### Data Structure Updates
- **Unit 30 (Module 3 Review)**:
    - Current: 1 block (`B30`).
    - Addition: Block `B30_2` with 15 exercises.
- **Units 31-60**:
    - Current: 4 blocks (`B{N}_1` to `B{N}_4`).
    - Addition: Block `B{N}_5` with 15 exercises.

### Interaction Types to Use
1.  **`listening_dictation`**:
    - Requires `audio_url`, `transcript_template`, and `correct_answer`.
    - `transcript_template` must use `[[English|Spanish]]` for all words except the blank.
2.  **`pronunciation`**:
    - Requires `targetSentences` (array of `{text, phonetic, audioUrl}`) and `questions`.
    - `text` must use `[[English|Spanish]]`.
3.  **`audio_player`** (Optional fallback/complement):
    - Simple audio listening followed by another interaction.

### Audio Asset Strategy
Since actual audio files don't exist yet, we will use predictable paths:
`public/audio/courses/ingles-a1/unit{N}/lesson5-task-{M}.mp3`
These will be flagged for generation via a script or manual process later.

## 3. Source Code Changes
- **Files to Modify**: `src/content/cursos/ingles-a1/unit{30..60}.json`.
- **Logic**: No changes to the application logic are required as the renderer handles these interaction types.

## 4. Delivery Phases
1.  **Phase 1**: Implement Block 5 for Unit 30 (Review Unit).
2.  **Phase 2**: Implement Block 5 for Units 31-40 (Module 4).
3.  **Phase 3**: Implement Block 5 for Units 41-50 (Module 5).
4.  **Phase 4**: Implement Block 5 for Units 51-60 (Module 6).

## 5. Verification Approach
- **Schema Validation**: Run `npm run validate-exercises` after each phase.
- **Manual Verification**: Use the `browser` tool to verify the rendering of the new blocks in the development environment.
- **E2E Testing**: Add a Playwright test to ensure the new lesson 5 is accessible and interactive for a sample unit.
