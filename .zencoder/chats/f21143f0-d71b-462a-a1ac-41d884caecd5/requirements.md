# Product Requirements Document (PRD): Focus English A1 Narrative Course

## 1. Overview
Create a 60-unit English A1 course with a narrative-driven structure, featuring 60 exercises per unit with gradually increasing complexity.

## 2. Target Audience
- Adult learners at A1 level (Beginners).
- Users who prefer an immersive, story-led learning experience.

## 3. Narrative Concept: "The London Gap Year"
The course follows **Mateo**, a 22-year-old student from Spain, during his first few months living and working in London. Each unit is a "chapter" or "scene" in his journey.

## 4. Course Structure (60 Units)
Divided into 6 Modules of 10 Units each:

### Module 1: Arrival & Survival (Units 1-10)
- Greetings, numbers (1-100), personal information, essential verb 'to be', basic adjectives.
- **Story Arc**: Arrival at Heathrow, taking the Tube, arriving at the hostel, meeting the roommate.

### Module 2: The New Home (Units 11-20)
- Prepositions of place, household items, colors, family, plural nouns, 'have got'.
- **Story Arc**: Exploring the neighborhood, buying essentials, calling family back home, finding a permanent room.

### Module 3: City Life (Units 21-30)
- Telling the time, days of the week, daily routines, transport vocabulary, 'can' for ability/permission.
- **Story Arc**: Navigating the bus system, visiting landmarks, joining a local gym/library.

### Module 4: Socializing & Flavor (Units 31-40)
- Food and drink, ordering at a cafe/pub, hobbies, likes/dislikes, Present Simple.
- **Story Arc**: First pub night, grocery shopping, weekend at the park, meeting a new group of friends.

### Module 5: The Job Hunt (Units 41-50)
- Skills and abilities, parts of the body (health), Past Simple (was/were), clothes, simple descriptions.
- **Story Arc**: Writing a CV, job interview at a cafe, buying work clothes, first day of work.

### Module 6: Londoner Status (Units 51-60)
- Weather, future intentions (going to), present continuous for current actions, review of all A1 topics.
- **Story Arc**: Planning a weekend trip, handling a busy shift at work, celebrating the first month in London.

## 5. Unit Structure (60 Exercises per Unit)
Each unit follows a consistent flow of increasing complexity:

1.  **The Hook (1-5)**: Visual/Audio introduction to the scene (Matching, sound recognition).
2.  **The Encounter (6-15)**: Recognizing key vocabulary and phrases in the narrative context.
3.  **The Deep Dive (16-30)**: Building blocks of the language (Grammar drills, categorization, pattern matching).
4.  **The Interaction (31-45)**: Simulated dialogue and situational responses (Gap-fills, dialogue ordering).
5.  **The Mastery (46-55)**: Active production (Transcription, translation, sentence building).
6.  **The Cliffhanger (56-60)**: Fast-paced summary and a narrative-driven final challenge.

## 6. Technical Requirements
- Files should be stored in `course_content/` using Markdown/JSON formats compatible with existing parsers.
- Exercises must support existing types: `GapFill`, `Matching`, `Scramble`, `Translation`, `Transcription`, `MultipleChoice`.
- Content must be ready for audio generation via `scripts/generate-course-audio.ts`.

## 7. Success Criteria
- 60 Units fully defined with clear narrative arcs.
- 60 Exercises per unit following the complexity gradient.
- All A1 CEFR topics covered across the course.
