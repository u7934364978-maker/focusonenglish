# Requirements Document - TOEFL and Course Audio Generation

## Overview
The goal is to complete the audio content generation for the **TOEFL Preparation Course** (B1, B2, C1) and ensure all other courses (B2 Standard, B2 Negative) have their required audio files generated.

## Features
- **Comprehensive Audio Generation**: Scan all TOEFL units and standard course modules to identify missing audio files.
- **Natural Voice Synthesis**: Use ElevenLabs API for high-quality, natural-sounding voices.
- **Robust Fallback**: Automatically use OpenAI TTS as a fallback if ElevenLabs fails or credits are exhausted.
- **Multi-Voice Support**: Assign appropriate voices based on the exercise type (e.g., British Female for listening, American Female for speaking).
- **Automated Path Management**: Ensure audio files are saved in the correct `public/audio/` subdirectories.

## Scope
- **TOEFL Courses**: B1, B2, and C1 preparation units located in `src/lib/toefl-units/`.
- **Standard Courses**: B2 modules in `src/lib/course-data-b2.ts` and `src/lib/course-data-b2-neg.ts`.
- **Audio Types**: Listening exercises, speaking models, instructions, and conversation transcripts.

## Technical Constraints
- Use existing `scripts/generate-course-audio.ts` as the primary execution engine.
- Require `ELEVENLABS_API_KEY` and `OPENAI_API_KEY` in `.env.local`.
- Adhere to the `AudioToGenerate` interface and existing voice mapping.

## Success Criteria
1. All referenced audio files in TOEFL and B2 courses exist in the `public/audio/` directory.
2. The generation script runs to completion without unhandled errors.
3. Audio files are correctly mapped to their corresponding exercises.
