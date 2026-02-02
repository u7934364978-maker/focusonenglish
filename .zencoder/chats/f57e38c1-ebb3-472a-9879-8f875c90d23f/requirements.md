# Product Requirements Document (PRD): B1 English Course Refactor

## 1. Introduction
The current B1 English course content is repetitive and lacks pedagogical depth. This project aims to refactor the entire 30-unit course to align with Cambridge B1 (PET) standards, making it more practical, engaging, and representative of real-life English usage.

## 2. Problem Statement
- **Repetitiveness**: Exercises use the same sentences and vocabulary repeatedly within the same unit.
- **Low Cognitive Load**: Many exercises are too simple and don't challenge B1-level students.
- **Lack of Context**: Exercises often lack a narrative or situational context.
- **Static Content**: The current generation logic seems to produce limited variations of the same patterns.

## 3. Goals
- **Pedagogical Alignment**: Refactor exercises to match Cambridge B1 (Preliminary) exam patterns (e.g., Reading Part 1-5, Writing Part 1, Use of English).
- **Practicality**: Focus on real-world scenarios, professional environments, and natural conversational English.
- **Variety**: Ensure a diverse range of exercise types (matching, transformation, multiple choice, gap fill, reordering) without excessive repetition.
- **Increased Complexity**: Introduce nuanced vocabulary and complex grammar structures suitable for B1.

## 4. User Stories
- As a student, I want to practice with exercises that feel like real conversations so that I can apply what I learn in real life.
- As a student, I want to be challenged by different types of questions so that I don't get bored.
- As a teacher, I want the content to follow a logical progression and cover the B1 syllabus comprehensively.

## 5. Functional Requirements
### 5.1. Content Structure
- Each unit must cover:
    - **Vocabulary**: Topic-specific (e.g., Lifestyles, Work, Travel).
    - **Grammar**: B1 level (e.g., Used to, Present Perfect, Conditionals).
    - **Functional Language**: Common expressions and reactions.
- Total units: 30.
- Exercises per unit: Maintain a high volume (approx. 200) but with high variety and minimal duplication.

### 5.2. Exercise Types
- **Multiple Choice**: Contextualized dialogues and reading snippets.
- **Gap Fill (Transformation)**: Focus on "Use of English" (e.g., paraphrasing using a specific word).
- **Matching**: Definitions, synonyms, and split sentences.
- **Reorder Words**: Complex sentences with focus on syntax.
- **True/False**: Reading comprehension based on short texts.

## 6. Non-Functional Requirements
- **Performance**: JSON files should remain manageable in size.
- **Maintainability**: Clear structure in JSON for future updates.
- **Compatibility**: Must work with the existing Next.js frontend rendering logic.

## 7. Success Criteria
- Refactored JSON files for all 30 B1 units.
- Positive feedback on pedagogical quality and variety.
- Zero duplication of exercises within a single unit.
