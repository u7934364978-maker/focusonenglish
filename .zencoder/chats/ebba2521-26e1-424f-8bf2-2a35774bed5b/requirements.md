# Product Requirements Document (PRD) - 100 Units A1 English Course

## 1. Goal
The objective is to create a comprehensive A1 level English course following the official Cambridge thematic (Key/KET), consisting of 100 units with 50 exercises each. This is intended for an educational gaming platform, ensuring high pedagogical quality and engagement.

## 2. Target Audience
- Beginners (CEFR A1 level).
- Students preparing for Cambridge KET (Key English Test) or similar certifications.
- Users looking for a gamified and professional learning experience.

## 3. Core Features
### 3.1 Course Structure
- **Modules**: 10 modules (a1-m1 to a1-m10).
- **Units (Lessons)**: 10 units per module, totaling 100 units.
- **Exercises**: 50 exercises per unit, totaling 5000 exercises.

### 3.2 Exercise Types
Exercises must be varied and pedagogical, including:
- **Multiple Choice**: Selection from options.
- **Matching**: Linking pairs.
- **Flashcards**: Vocabulary and pronunciation.
- **Fill in the Blanks**: Grammar and spelling.
- **Drag and Drop**: Sentence ordering.
- **Fun/Games**: Interactive elements to maintain interest.

### 3.3 Thematic Content (Cambridge A1)
Topics must cover:
- Introductions, Greetings, Alphabet, Numbers.
- Family, Home, Daily Routines, Hobbies.
- Food, Shopping, Travel, Health.
- Jobs, Places, Weather, Colors, Clothes.
- Basic Grammar: Present Simple, "To Be", Articles, Pronouns, Possessives, Questions, Prepositions.

## 4. Technical Requirements
- **Persistence**: Data stored in Supabase (`course_modules`, `course_lessons`, `course_exercises` tables).
- **Format**: SQL migrations for data insertion.
- **Schema Compliance**: Exercise JSON content must match existing patterns in the codebase.
- **Scalability**: IDs must follow the `a1-mX-lY-exZ` pattern.

## 5. Non-Functional Requirements
- **Pedagogical Quality**: Content must be reviewed for correctness and clarity.
- **Engagement**: Mix of serious learning and "pasatiempos divertidos" (fun activities).
- **Consistency**: Maintain the established tone and technical style of the existing A1 course.

## 6. Success Criteria
- 100 Units successfully inserted into the database.
- Each unit has exactly 50 exercises.
- All exercises are functional and pedagogically sound.
- Course content is aligned with Cambridge A1 standards.
