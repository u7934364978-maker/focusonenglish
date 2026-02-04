# Product Requirements Document (PRD) - B2 English Course

## 1. Overview
The goal is to create a comprehensive B2 level English course consisting of **60 units**, each containing **100 exercises**. The course will follow the official B2 (CEFR/Cambridge FCE) syllabus and utilize existing exercise types and structures found in the A1, A2, and B1 levels.

## 2. Target Audience
Intermediate learners aiming to reach an upper-intermediate (B2) level of English proficiency.

## 3. Scope
### 3.1. Course Content
- **Level**: B2 (Upper-Intermediate).
- **Structure**: 60 Units (Lessons).
- **Volume**: 100 exercises per unit (Total: 6,000 exercises).
- **Topics**: Based on `B2_TOPICS`, `B2_GRAMMAR`, and `B2_FUNCTIONS` defined in the syllabus.
- **Exercise Types**:
  - Grammar (Multiple choice, Fill in the blanks, Sentence building, etc.)
  - Vocabulary (Word formation, Collocations, etc.)
  - Reading Comprehension
  - Listening Comprehension
  - Writing Analysis
  - Speaking Analysis
  - AI Missions / Lab tasks

### 3.2. Technical Implementation
- Content will be stored in TypeScript files under `src/lib/`, similar to `course-data-a1.ts` and its detailed companions.
- Each unit will be represented as a `Lesson` object.
- Modules will group units (e.g., 6 modules of 10 units each, or 10 modules of 6 units each).

## 4. Requirements
- **Consistency**: The B2 course must maintain the same high quality and exercise typology as the previous levels.
- **Syllabus Coverage**: All core B2 grammar points (Past Perfect, Conditionals, Passive, etc.) and topics (Personal Relationships, Environment, Work, etc.) must be covered across the 60 units.
- **Progression**: Difficulty should increase logically through the units.

## 5. Constraints & Assumptions
- **Scale**: Generating 6,000 exercises is a massive task. I will structure the course data efficiently, possibly breaking it down into multiple files (e.g., `b2-u1-exercises.ts`, `b2-u2-exercises.ts`, etc.) to avoid hitting file size limits.
- **Exercise Definition**: "100 exercises per unit" is interpreted as 100 individual questions or tasks distributed across several categorized exercise blocks within a unit. For example, a unit could have 10 grammar exercises with 10 questions each.

## 6. Next Steps
- Create Technical Specification (`spec.md`).
- Define the mapping of 60 units to B2 syllabus topics and grammar points.
- Implement the structure for the first phase.
