# Technical Specification - TOEFL and Course Audio Generation

## Technical Context
- **Languages**: TypeScript, Node.js.
- **APIs**: ElevenLabs (Primary), OpenAI TTS (Fallback).
- **Dependencies**: `dotenv`, `fs`, `path`, `@supabase/supabase-js` (potentially for data fetching, but currently script uses local TS files).

## Implementation Approach
The implementation will leverage the existing `scripts/generate-course-audio.ts` script.

### 1. Data Source Verification
- Ensure `src/lib/toefl-units/index.ts` correctly exports all units from `b1/`, `b2/`, and `c1/` folders.
- Verify that `TOEFL_COURSES` in `src/lib/toefl-units/index.ts` is fully populated.

### 2. Script Enhancements (if needed)
- The script `scripts/generate-course-audio.ts` already iterates over `TOEFL_COURSES`.
- We need to ensure that the logic for path generation `audio/toefl/${unitId}-${intId}.mp3` matches the expected frontend paths.
- Add logging to identify which specific units/exercises are being processed.

### 3. Execution Pipeline
1. **Environment Setup**: Ensure `.env.local` contains valid API keys.
2. **Pre-flight Check**: Run a small test generation to verify API connectivity.
3. **Full Run**: Execute `npm run generate-audio all` (or equivalent ts-node command).
4. **Resiliency**: The script uses a 500ms delay between calls and a fallback mechanism.

### 4. Verification Approach
- **File System Check**: Verify that the `public/audio/toefl/` directory is populated.
- **Integrity Check**: Run `scripts/analyze-missing-audio.js` (updated to include TOEFL) to confirm zero missing files.

## Source Code Changes
- No major code changes expected to the core logic, mostly configuration and potentially adding missing exports in `src/lib/toefl-units/`.

## Delivery Phases
1. **Phase 1**: Verify TOEFL unit exports and content.
2. **Phase 2**: Run test generation.
3. **Phase 3**: Run full audio generation for TOEFL and missing B2 audios.
4. **Phase 4**: Verification and cleanup.
