# Product Requirements Document (PRD) - A1 Course Expansion (Duolingo Style)

## 1. Overview
Expand the existing Duolingo-style A1 English course from a single unit to a comprehensive 100-hour curriculum. The course will be aligned with Cambridge A1 (KET) standards and will feature interactive, AI-enhanced exercises.

## 2. Goals
- Provide 100 teaching hours of high-quality A1 English content.
- Maintain the "Duolingo-style" interactive experience (blocks, units, gamification).
- Integrate professional educational systems based on Cambridge standards.
- Ensure content is structured for AI audio generation and interactive feedback.

## 3. Target Audience
- Absolute beginners (A1 level).
- Students preparing for Cambridge KET.
- Users looking for a gamified, interactive learning experience.

## 4. Functional Requirements

### 4.1. Curriculum Structure
- **Total Units**: 100 Units.
- **Duration per Unit**: ~60 minutes of active learning.
- **Total Duration**: 100 teaching hours.
- **Syllabus**: Aligned with Cambridge A1 (Grammar, Vocabulary, Functions).

### 4.2. Unit Format (JSON)
Each unit must follow the existing schema in `unit1.json`:
- `course`: Metadata (level, title, duration).
- `learning_outcomes`: Clear educational goals.
- `mastery_tags`: Tags for tracking student progress.
- `blocks`: Logical sections within a unit (Warm-up, Video, Practice, Test).
- `content`: Interactive interactions (multiple choice, matching, categorization, transformation, role-play, etc.).

### 4.3. Educational Methodology
- **Scaffolding**: Gradual increase in complexity.
- **Repetition**: Spaced repetition of key concepts.
- **Variety**: Mix of input (listening/reading) and output (writing/speaking).
- **Feedback**: Detailed explanations in Spanish for all interactions.

### 4.4. AI & Professional Systems
- **AI-Enhanced Exercises**: Use the existing AI prompt templates for dynamic exercise generation where applicable.
- **Audio Integration**: Content must be compatible with `scripts/generate-duolingo-audio.mjs`.
- **Mastery System**: Tracking progress through `mastery_tags`.

## 5. Proposed Syllabus Breakdown (100 Hours)

### Module 1: Basics & Personal Info (Units 1-10)
- Greetings, Numbers 1-100, Colors, Family, Basic Verbs (to be, to have).

### Module 2: Daily Life (Units 11-25)
- Routines, Time, Food & Drink, Home, Present Simple.

### Module 3: Around Town (Units 26-40)
- Places, Directions, Shopping, Clothes, Prepositions of Place.

### Module 4: Past & Experiences (Units 41-60)
- Past Simple (Regular/Irregular), Biography, Holidays, Weather.

### Module 5: Abilities & Future (Units 61-80)
- Can/Can't, Future with 'going to', Hobbies, Sports.

### Module 6: Advanced A1 & Review (Units 81-100)
- Present Continuous vs Simple, Adverbs of Frequency, Comparative/Superlative (Basic), Final Assessment.

## 6. Technical Constraints
- Content must be stored in `src/content/cursos/duolingo-a1/`.
- UI must be rendered via `DuolingoUnitViewer.tsx`.
- Audio must be generated using the existing OpenAI/ElevenLabs pipeline.

## 7. Open Questions
- Should all 100 units be pre-generated as JSON files, or should a generator script be prioritized? (Assumption: Full syllabus and first 5-10 units + generator).
- Are there specific business/exam topics to include beyond standard Cambridge A1?
