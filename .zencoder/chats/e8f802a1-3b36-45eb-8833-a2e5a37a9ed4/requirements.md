# PRD: Expansion of 'negociaciones-b2' Course Exercises

## Problem Statement
The 'negociaciones-b2' course currently has limited listening exercises and lacks speaking exercises with AI-driven feedback for pronunciation and tone. To improve the course value and effectiveness, we need to expand the listening content and introduce interactive speaking tasks.

## Objectives
- Increase the variety and quantity of listening exercises across all modules.
- Implement speaking exercises that utilize AI evaluation for pronunciation and tone.
- Ensure exercises are relevant to professional negotiation contexts (B2 level).

## User Requirements
- **Listening Expansion**: Add at least one new listening exercise per lesson or module, focusing on different negotiation stages (Preparation, Opening, Bargaining, Closing).
- **AI speaking evaluation**: Use the `EnhancedSpeakingExercise` component to provide feedback on:
    - Pronunciation
    - Tone (via overall feedback and fluency metrics)
    - Accuracy (transcription and target words)
- **Negotiation Focus**: Exercises must cover:
    - Tone adjustment (e.g., being firm but polite, building rapport vs. hard bargaining).
    - Strategic use of language (e.g., conditionals, concessions).

## Scope
- **Module 1**: Preparation & Openings
- **Module 2**: The Bargaining Phase
- **Module 3**: Agreements & Follow-up

## Functional Requirements
1. **New Listening Exercises**:
    - Scenarios: Initial preparation meeting, setting an agenda, handling aggressive openings.
2. **New Speaking Exercises**:
    - Scenarios: Presenting a BATNA analysis (to colleagues), proposing a trade-off, finalizing a deal.
    - Integration: Add exercises of type `speaking` to the existing lesson files.

## Success Criteria
- Each lesson in `negociaciones-b2` has at least 2 listening exercises.
- Each lesson in `negociaciones-b2` has at least 1 speaking exercise with AI evaluation.
- All new exercises follow the existing data structure and types defined in `exercise-types.ts`.
