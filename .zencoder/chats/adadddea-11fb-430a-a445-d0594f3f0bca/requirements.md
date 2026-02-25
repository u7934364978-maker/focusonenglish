# Product Requirements Document (PRD) - 5th Lesson Block (English A1)

## 1. Introduction
The objective is to expand the English A1 course by adding a fifth lesson (block) to each unit starting from Unit 30. This lesson will focus specifically on **Listening Comprehension** and **Pronunciation**, providing 15 additional exercises per unit to reinforce the core concepts learned in the previous four blocks.

## 2. Scope
- **Target Units**: Unit 30 to Unit 60 of the English A1 course.
- **Unit 30 (Review Unit)**: Add a new block `B30_2` (since it currently only has `B30`).
- **Standard Units (Unit 31-60)**: Add a new block `B31_5`, `B32_5`, etc.
- **Total Exercises**: 15 interactions per new block.

## 3. Content Requirements
Each new block must contain exactly 15 interactions, balanced as follows:
- **Listening Comprehension (~7-8 exercises)**:
    - Primary type: `listening_dictation`.
    - Content: Short sentences or phrases using the unit's target vocabulary and grammar.
    - Focus: Recognition of spoken English and correct spelling.
- **Pronunciation (~7-8 exercises)**:
    - Primary type: `pronunciation`.
    - Content: Target sentences with phonetic transcriptions and specific pronunciation questions.
    - Focus: Sound recognition, word stress, and phonetic patterns.

### General Standards
- **Translations**: Every English word in prompts, stimuli, options, and transcripts MUST include its Spanish translation using the `[[English|Spanish]]` format.
- **Pedagogical Alignment**: Exercises must strictly follow the unit's objectives as defined in `syllabus.md` and `course-specifications.md`.
- **Progressive Difficulty**: Exercises within the block should move from simple recognition to more complex comprehension.
- **Interaction IDs**: Must follow the pattern `A1_U{UnitNum}_B{UnitNum}_5_I{InteractionNum}` (e.g., `A1_U31_B31_5_I1`). For Unit 30: `A1_U30_B30_2_I1`.

## 4. Technical Requirements
- **JSON Structure**: The new block must be appended to the `blocks` array in the corresponding unit's JSON file.
- **Audio URLs**:
    - Use placeholders following the pattern `/audio/courses/ingles-a1/unit{UnitNum}/lesson5-task-{N}.mp3`.
    - These audios will be generated in a subsequent phase using the project's TTS tools.
- **Phonetic Transcriptions**: Use standard IPA (International Phonetic Alphabet) for pronunciation exercises.

## 5. Interaction Examples

### Type: listening_dictation
```json
{
  "interaction_id": "A1_U31_B31_5_I1",
  "type": "listening_dictation",
  "prompt_es": "Escucha y completa la frase:",
  "audio_url": "/audio/courses/ingles-a1/unit31/lesson5-task-1.mp3",
  "transcript_template": "He [[can|puede]] [[play|tocar]] the [[guitar|guitarra]] [[very well|muy bien]].",
  "correct_answer": "play",
  "mastery_tag": "listening",
  "complexity": 2,
  "concept_tags": ["grammar", "listening"]
}
```

### Type: pronunciation
```json
{
  "interaction_id": "A1_U31_B31_5_I8",
  "type": "pronunciation",
  "title": "Pronunciación de 'Can' y 'Can't'",
  "instructions": "Practica la diferencia de sonido entre la forma afirmativa y negativa.",
  "targetSentences": [
    {
      "text": "I [[can|puedo]] [[swim|nadar]].",
      "phonetic": "/aɪ kən swɪm/",
      "audioUrl": "/audio/courses/ingles-a1/unit31/lesson5-task-8a.mp3"
    },
    {
      "text": "I [[can't|no puedo]] [[swim|nadar]].",
      "phonetic": "/aɪ kɑːnt swɪm/",
      "audioUrl": "/audio/courses/ingles-a1/unit31/lesson5-task-8b.mp3"
    }
  ],
  "questions": [
    {
      "id": "A1_U31_B31_5_I8_Q1",
      "type": "multiple_choice",
      "prompt_es": "¿Cuál de las dos palabras tiene un sonido de vocal más largo y abierto?",
      "options": [
        { "id": "o1", "text": "Can't" },
        { "id": "o2", "text": "Can" }
      ],
      "correct_answer": "o1",
      "mastery_tag": "pronunciation"
    }
  ],
  "mastery_tag": "pronunciation",
  "complexity": 3,
  "concept_tags": ["phonetics", "pronunciation"]
}
```
