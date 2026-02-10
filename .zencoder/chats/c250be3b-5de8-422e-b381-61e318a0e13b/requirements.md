# Product Requirements Document (PRD) - English Course (A1-C2)

## Overview
The goal is to develop and implement a comprehensive English learning course covering all CEFR levels (A1, A2, B1, B2, C1, C2). The focus is on "real pedagogy," ensuring that the content is educational, progressive, and effective for students at all stages.

## Target Audience
- **Beginners (A1-A2)**: Students starting from scratch or with basic knowledge.
- **Intermediate (B1-B2)**: Students looking to solidify their skills and prepare for official exams (FCE, etc.).
- **Advanced (C1-C2)**: Students aiming for near-native proficiency and professional/academic mastery.

## Key Features & Requirements

### 1. Content Structure
- **Levels**: A1 to C2.
- **Modules**: Each level will consist of multiple modules (typically 3-4 per level).
- **Lessons**: Each module will contain several lessons.
- **Components per Lesson**:
  - Theory/Explanation (Grammar, Vocabulary).
  - Practice Exercises (Multiple Choice, Fill-in-the-blanks, etc.).
  - Skills Development (Reading, Listening, Speaking, Writing).
  - Gamification integration (XP, badges, streaks).

### 2. Exercise Types
The course will utilize the existing exercise infrastructure, including but not limited to:
- Multiple Choice
- Fill in the Blanks
- Key Word Transformation (Exam style)
- Reading Comprehension
- Sentence Building
- Speaking Analysis (AI-powered)
- Writing Analysis (AI-powered)
- Vocabulary Match / Flashcards

### 3. Pedagogy
- **Progression**: Logical flow from simple to complex structures.
- **Scaffolding**: Building on previously learned concepts.
- **Real-world Application**: Focus on practical usage in Work, Travel, and Exams.
- **Feedback**: Immediate, detailed feedback for all exercises.

### 4. Technical Implementation
- **Data Storage**: Exercises and content stored as JSON/TypeScript objects in `src/lib/`.
- **Validation**: Ensure all content adheres to the `Exercise` type and passes validation schemas.
- **Rendering**: Use `ExerciseRenderer` for interactive components.
- **Progress Tracking**: Integration with Supabase to save student progress, scores, and SRS (Spaced Repetition System) data.

## User Roles
- **Student**: Consumes content, completes exercises, tracks progress.
- **Admin/Teacher (Optional)**: Views progress, potentially manages content (not strictly required for this phase).

## Success Metrics
- Full coverage of A1-C2 curriculum.
- High engagement and completion rates for exercises.
- Positive feedback on pedagogical quality.

## Assumptions & Dependencies
- Content (exercises, explanations) will be provided by the user to ensure pedagogical quality.
- The existing technical infrastructure (Next.js, Supabase, ExerciseRenderer) is capable of supporting all planned content.
