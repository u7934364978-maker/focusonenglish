# Technical Specification - Unit 1: Hello! Introductions

## Context
- **Framework**: Next.js 15 (Next.js 15.1.3).
- **Language**: TypeScript / Node.js.
- **Dependencies**: `text-to-speech.ts` (ElevenLabs integration).
- **Target Location**: `src/content/cursos/duolingo-a1/unit1.json`.

## Implementation Approach
1. **JSON Generation**: Manually generate the Unit 1 content following the "master prompt" schema. This will be a large JSON file containing metadata, blocks, interactive videos, and practice activities.
2. **Audio Generation Script**: Create a new script `scripts/generate-duolingo-audio.ts` to automate TTS generation for all English content in the unit.
   - It will iterate through `blocks`, `scenes` (for videos), and `content` (for practice activities).
   - It will extract `tts_en` and `stimulus_en` strings.
   - It will use `src/lib/text-to-speech.ts` to generate `.mp3` files.
   - Audio files will be stored in `public/audio/duolingo-a1/` with descriptive filenames (e.g., `B2-S1-dialogue.mp3`).
3. **Audio Mapping**: Update the generated JSON to include `audioUrl` fields pointing to the generated files.

## Data Model Changes
The JSON structure will follow the "master prompt" exactly:
- `course`: Metadata (title, level, etc.)
- `learning_outcomes`: List of outcomes.
- `mastery_tags`: List of tags.
- `blocks`: Array of 6 blocks.
  - `block_id`, `title`, `duration_minutes`, `content`.
  - `content` can contain `video` or `interaction` objects.
- `qa_report`: Quality metrics.

## Source Code Changes
- `src/content/cursos/duolingo-a1/unit1.json` (New)
- `scripts/generate-duolingo-audio.ts` (New)
- `public/audio/duolingo-a1/*.mp3` (Generated)

## Verification Plan
1. **JSON Validation**: Ensure the JSON is valid and matches the requested structure.
2. **Audio Check**: Verify that all English text fields have corresponding audio files generated.
3. **Path Check**: Ensure all `audioUrl` links in the JSON are correct.
