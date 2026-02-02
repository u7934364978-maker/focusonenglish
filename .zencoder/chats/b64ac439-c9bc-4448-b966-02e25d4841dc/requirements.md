# Product Requirements Document (PRD) - Duolingo A1 Content Expansion

## 1. Overview
The goal is to expand the existing Duolingo A1 course content to ensure each unit contains exactly **200 exercises**. The expansion must be high quality, following Cambridge A1 (Starters/Movers/CEFR A1) standards, and covering Reading, Listening, Vocabulary, and Grammar.

## 2. Target Audience
Spanish-speaking students learning English at a beginner level (A1).

## 3. Requirements

### 3.1 Content Expansion
- **Total Exercises**: Each unit must reach a total of 200 interaction units (including those embedded in videos).
- **Categories**:
    - **Reading**: Comprehension of short phrases, sentences, and basic dialogues.
    - **Listening**: Identifying spoken words, phrases, and responding to audio prompts.
    - **Vocabulary**: Basic nouns, verbs, adjectives relevant to the unit theme.
    - **Grammar**: Present simple (To Be, basic verbs), pronouns, articles, basic syntax.
- **Language**:
    - **UI/Prompts**: Spanish (`es-ES`).
    - **Target Language**: English (`en`).
- **Quality**: Must reflect the expertise of an official Cambridge teacher.

### 3.2 Technical Requirements
- **Format**: JSON files located in `src/content/cursos/duolingo-a1/unit[1-30].json`.
- **Data Structure**:
    - Interactions must follow the `DuolingoInteraction` interface.
    - IDs must be unique within the unit (e.g., `U[Unit]_B1_I[Number]`).
    - Mastery tags should be used correctly to track learning outcomes.
- **Interactions Types to Include**:
    - `multiple_choice`
    - `matching`
    - `reorder_words`
    - `true_false`
    - `categorization`
    - `transformation`
    - `role_play`
    - `short_writing` (with `validation_regex`)
- **Audio**: Audio placeholders or TTS instructions (`tts_en`) should be provided where applicable for listening exercises.

## 4. Constraints
- Do not change the existing unit themes or learning outcomes.
- Maintain consistency with the existing JSON schema.
- Ensure all IDs are consistent with the current naming convention.

## 5. Success Criteria
- All 30 units have exactly 200 exercises.
- All JSON files pass validation (`npm run validate-exercises` if available).
- Content is pedagogically sound for A1 level.
