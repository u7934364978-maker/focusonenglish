# Product Requirements Document (PRD) - C2 Proficiency Course

## 1. Overview
The goal is to implement a comprehensive C2 Proficiency (Cambridge CPE) course. This level is the highest in the CEFR scale, requiring near-native mastery of the English language.

## 2. Feature Description
Create a full C2 course consisting of 60 units, where each unit contains 100 exercises (organized as 10 blocks of 10 questions/exercises each).

## 3. Target Audience
Advanced learners aiming for the Cambridge C2 Proficiency (CPE) certification.

## 4. Functional Requirements
- **Course Structure**: 60 Units, each representing a coherent pedagogical goal.
- **Exercise Volume**: 6,000 total exercises/questions (60 units * 10 blocks * 10 questions).
- **Exercise Types**: 
    - Grammar (Fill-in-the-blanks, Multiple choice)
    - Vocabulary (Collocations, Idioms, Phrasal verbs)
    - Use of English (Key Word Transformation, Word Formation, Cloze tests)
    - Reading Comprehension
    - Listening Comprehension
    - Writing Analysis
    - Speaking Analysis
- **AI Integration**: Use AI patterns to generate the massive volume of exercise content while maintaining Cambridge standards.
- **Navigation**: Ability to progress through 60 units within the existing course UI.

## 5. Non-Functional Requirements
- **Performance**: Efficient loading of course data.
- **Consistency**: Content must strictly follow the Cambridge CPE format and difficulty level.
- **Maintainability**: Use the existing unit/block structure seen in B2/C1 courses for uniformity.

## 6. Technical Constraints
- Must follow the existing `createB2Unit` / `genId` pattern (renamed/adapted for C2).
- Content stored in `src/lib/c2-units/`.
- Must align with `CEFRLevel: 'C2'`.

## 7. Delivery Phases
1. **Requirements & Curriculum Definition**: Define the 60 unit topics based on CPE standards.
2. **Technical Setup**: Create directory structure and utility functions for C2.
3. **Content Generation Strategy**: Develop scripts/prompts to generate the 6,000 exercises.
4. **Incremental Implementation**: Populate the 60 unit files.
5. **Verification**: Audit and validation of the generated content.
