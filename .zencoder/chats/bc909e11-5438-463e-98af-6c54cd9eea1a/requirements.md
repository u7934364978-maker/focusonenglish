# Requirements Document - Pronunciation Feature

## Goal
Implement a Text-to-Speech (TTS) feature in the English A1 course (and other courses using the same session viewer) to allow students to hear the pronunciation of English words and phrases in exercises.

## User Experience
1. A speaker icon (button) should appear near English text in exercises.
2. When the user clicks the button, the system should pronounce the corresponding text.
3. The pronunciation should be clear and use a natural English voice.

## Technical Requirements
1. **TTS Engine**: Use the existing `/api/generate-audio` endpoint which uses OpenAI TTS.
2. **Component**: Modify `PremiumCourseSession.tsx` to include pronunciation buttons in relevant places.
3. **Trigger**: The pronunciation should be triggered manually by the user (on click).
4. **State**: Use the existing `playAudio` function and `audioCache` in `PremiumCourseSession.tsx`.

## Scope
- Applicable to all exercise types in `PremiumCourseSession`.
- Primary focus on English text (stimuli, options, prompts when in English).
- **Pronunciation Scope**: Only English text will be pronounced. Spanish instructions will not have a pronunciation button.
- **Exercise Specifics**:
    - `reorder_words`: Individual words can be pronounced, and the full sentence (solution) can also be pronounced.
    - `multiple_choice`: Only English options will have a pronunciation button.

## Decisions
1. **Language Detection**: Since there is no language metadata per field, we will use a simple heuristic (e.g., presence of common Spanish words or characters, or just applying it to fields known to be English in the schema like `stimulus_en`).
2. **Button UI**: Use the `Volume2` icon from `lucide-react` for the pronunciation button.
