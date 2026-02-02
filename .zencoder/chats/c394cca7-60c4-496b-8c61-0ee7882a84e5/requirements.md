# Product Requirements Document (PRD) - Unit 1: Hello! Introductions

## Overview
The goal is to generate a comprehensive 60-minute Unit 1 for an A1 English course tailored for Spanish speakers. The unit focuses on "Hello! Introductions" and follows a Duolingo-inspired pedagogical approach (microlearning, immediate feedback, spaced repetition).

## Objectives
- **Unit Title**: "Hello! Introductions"
- **Target Audience**: Spanish speakers (es-ES) learning English (A1 level).
- **Key Outcomes**:
  - Saludar y despedirse (Greetings/Farewells).
  - Decir tu nombre (Stating name).
  - Preguntar el nombre (Asking for name).
  - Frases cortas de cortesía (Polite phrases).

## Functional Requirements
- **Structure**: 6 Blocks totaling 60 minutes.
  - Bloque 1: Warm-up (5 min)
  - Bloque 2: Video 1 - Greetings (12 min)
  - Bloque 3: Video 2 - Name (12 min)
  - Bloque 4: Video 3 - Asking Name (10 min)
  - Bloque 5: Guided Practice (11 min)
  - Bloque 6: Mini-test & Recap (10 min)
- **Interactive Videos**:
  - 3 videos total.
  - Must include branching logic (Repair scenes for repeated failures).
  - Checkpoints every 30-90 seconds.
  - Interaction types: MCQ, Listen & Choose, Reorder, Fill in blank, Speaking, Dictation.
- **Pedagogical Rules**:
  - Minimal explanations.
  - Immediate feedback (Correct/Incorrect reasons).
  - Spaced repetition (4-7 times per objective).
  - Incremental difficulty.
- **Output Format**: A single valid JSON file following the specified schema in the master prompt.

## Technical Requirements
- **Language**: es-ES for instructions, English for learning content.
- **Level**: Strict A1 (absolute zero assumptions).
- **Mastery Tags**: Every item must be tagged with a `mastery_tag`.
- **Quality Assurance**: A `qa_report` must be included in the JSON.

## Decisions
1. **Storage Location**: `src/content/cursos/duolingo-a1/unit1.json`.
2. **Goal**: Content generation only (JSON output).
3. **Audio Generation**: Trigger audio generation for the TTS scripts using existing library functions.
4. **Schema**: Use the structure requested in the master prompt, as it is a specialized format for this feature.
