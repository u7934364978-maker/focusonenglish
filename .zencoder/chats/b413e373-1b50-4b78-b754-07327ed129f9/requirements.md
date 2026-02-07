# Product Requirements Document (PRD): Remake English A2 Course

## 1. Goal
The objective is to rebuild the English A2 level course using provided didactic material. The course should be dynamic, non-monotonous, and educational, utilizing a wide variety of exercise types and frequently changing vocabulary to keep the student engaged.

## 2. Target Audience
- English learners at A2 level (Pre-Intermediate).
- Native Spanish speakers (prompts and explanations in `es-ES`).

## 3. Core Didactic Material to Incorporate
The material covers the following grammatical and lexical areas:
- **Adjectives**: Position (Adjective + Noun), non-plural rule.
- **-ed vs -ing Adjectives**: Distinguishing between feelings/temporary states (-ed) and qualities/permanent states (-ing).
- **Adjectives vs Adverbs**: Rules for formation (-ly), usage (describing nouns vs verbs), and irregulars (good/well, hard/hard, fast/fast).
- **Adverbs of Frequency**: Position in sentences (before main verb, after 'to be').
- **Connectors**: Usage of `as well as`, `whereas`, `while`, `since`, `as a consequence`, `in contrast`, `unfortunately`, `nonetheless`, etc.
- **Comparatives & Superlatives**: Formation rules, irregulars, and the use of the preposition `in` with superlatives.
- **Advanced Structures**: Superlatives combined with Present Perfect + `ever`.
- **'Enough' Usage**: Correct positioning with nouns (enough + noun) and adjectives (adjective + enough).
- **Common Error Correction**: Addressing typical mistakes made by Spanish speakers (e.g., `childrens`, `much money` in positive sentences, missing `to` in `allow me to`).

## 4. Exercise Types
To ensure dynamism, the following types must be used and intermingled:
- `audio_player`: For listening and introduction.
- `fill_blanks`: For grammar and vocabulary practice.
- `true_false`: For concept validation.
- `matching`: For definitions, translations, or related concepts.
- `dictation_guided`: For spelling and listening.
- `odd_one_out`: For vocabulary distinction.
- `flashcards`: For memorization.
- `writing_task`: For production.
- `speaking_task`: For pronunciation.
- `multiple_matching`: For complex associations.
- `categorization`: For grouping concepts.
- `multiple_choice_cloze`: For reading comprehension.
- `multiple_choice`: For general selection.
- `reorder_words`: For sentence structure.

## 5. Technical Requirements
- **Format**: All content must be in JSON format matching the existing `unitX.json` schema.
- **Structure**: Each unit should follow the `course` metadata and `blocks` structure.
- **Interactions**: Use unique `interaction_id`s within each unit.
- **Mastery Tags**: Assign appropriate tags (`grammar`, `vocabulary`, `listening`, `reading`, `writing`, `speaking`).
- **Syllabus**: Adhere to the 60-unit syllabus defined in `src/content/cursos/ingles-a2/syllabus.md`.

## 6. Success Criteria
- The course covers all the provided material across the relevant units.
- No unit feels repetitive; exercise types change every 1-2 interactions.
- All JSON files are valid and pass the project's validation scripts.
