# Product Requirements Document (PRD)
## Module 3 - A1 English Course Content

### 1. Overview
Complete Module 3 of the A1 English course with comprehensive exercises, where each exercise contains 20 questions. Module 3 focuses on "Shopping, Food, and Places" and includes 7 lessons with 15 exercises each.

### 2. Current State
- **Existing Structure**: Module 3 structure exists in `lib/course-data-a1.ts` with 7 lessons defined
- **Current Content**: All exercises are placeholders with "// Content will be added in future updates"
- **Reference Pattern**: Modules 1 and 2 have completed content in separate detailed files (e.g., `a1-m1-l1-detailed.ts`, `a1-m2-l1-detailed.ts`)

### 3. Module 3 Lessons Structure

#### Lesson 1: Food and Drinks
- **Grammar Focus**: Countable/Uncountable nouns
- **Exercises**: 15 exercises covering grammar, reading, listening, speaking, writing, pronunciation, vocabulary, and practice exercises

#### Lesson 2: Shopping and Stores
- **Grammar Focus**: Some/Any
- **Exercises**: 15 exercises with the same comprehensive coverage

#### Lesson 3: At the Restaurant
- **Grammar Focus**: Would like
- **Exercises**: 15 exercises with comprehensive coverage

#### Lesson 4: Giving Directions
- **Grammar Focus**: Prepositions of place
- **Exercises**: 15 exercises with comprehensive coverage

#### Lesson 5: Present Continuous
- **Grammar Focus**: Present Continuous tense
- **Exercises**: 15 exercises with comprehensive coverage

#### Lesson 6: Mock Exam - Module 3
- **Focus**: Review all Module 3 topics
- **Exercises**: 15 comprehensive review exercises

#### Lesson 7: Consolidation and Practice
- **Focus**: Practice all Module 3 topics with mixed exercises
- **Exercises**: 15 consolidation exercises

### 4. Requirements per Exercise

#### Question Requirements
- **Quantity**: Each exercise must contain exactly 20 questions
- **Quality**: Questions must be appropriate for CEFR A1 level (beginner)
- **Variety**: Mix of question types based on exercise type:
  - Grammar exercises: multiple-choice, fill-blank, true-false
  - Vocabulary exercises: matching, multiple-choice, fill-blank
  - Reading exercises: comprehension questions (multiple-choice, true-false, short-answer)
  - Other exercise types: appropriate question formats

#### Content Standards
- **Language Level**: Simple vocabulary and structures appropriate for A1
- **Explanations**: Each question must include clear explanation of correct answer
- **Points**: Each question worth 1 point (standard)
- **Examples**: Grammar and vocabulary exercises should include 5+ example sentences
- **Progressive Difficulty**: Questions should progress from easy to medium difficulty

### 5. Exercise Types per Lesson

Each lesson contains these 15 exercise types:
1. Grammar Exercise 1 (Formation and Use)
2. Grammar Exercise 2 (Practice)
3. Reading Exercise
4. Listening Exercise (requires audioUrl)
5. Speaking Exercise
6. Writing Exercise
7. Pronunciation Practice
8. Vocabulary Exercise 1
9. Vocabulary Exercise 2
10. Fill-in-Blanks Exercise
11. Multiple Choice Exercise
12. Matching Exercise
13. Sentence Building Exercise
14. True/False Exercise
15. Dialogue Practice Exercise

### 6. Technical Requirements

#### File Structure
- Create 7 new files: `lib/a1-m3-l1-detailed.ts` through `lib/a1-m3-l7-detailed.ts`
- Each file exports constants for all 15 exercises
- Each file exports a combined array: `A1_M3_LX_ALL_EXERCISES`

#### Type Compliance
- Use existing TypeScript interfaces from `lib/course-data-a1.ts`
- Import `Exercise` type from appropriate module
- Ensure all properties match interface requirements

#### Integration
- Update `lib/course-data-a1.ts` to import the new detailed exercise arrays
- Replace placeholder exercises with detailed content from imports

### 7. Content Guidelines

#### Grammar Content
- Clear explanation of grammar rules
- 5+ example sentences demonstrating usage
- 20 practice questions with varied contexts
- Focus on practical, everyday usage

#### Vocabulary Content
- Word sets relevant to lesson topic (food, shopping, restaurants, directions, etc.)
- Each word with definition and example sentence
- 20 practice questions for reinforcement
- Common A1-level vocabulary only

#### Reading Content
- Text length: 150-250 words
- Simple, clear language
- Relevant to lesson topic
- 20 comprehension questions

#### Listening Content
- Placeholder audioUrl structure: `/audio/a1-m3-lX-listening-Y.mp3`
- Transcript included
- Duration estimate: 60-120 seconds
- 20 comprehension questions

#### Writing Content
- Simple prompts appropriate for A1
- Word limits: 30-50 words minimum, 80-100 words maximum
- Clear rubric with criteria
- Helpful tips for students

#### Speaking Content
- Simple prompts related to lesson topic
- Target text for pronunciation practice
- Model audio placeholder
- Clear evaluation criteria

### 8. Vocabulary Sets by Lesson

#### Lesson 1: Food and Drinks
- Common foods (bread, rice, cheese, apple, banana)
- Drinks (water, milk, juice, tea, coffee)
- Containers (bottle, glass, cup, bowl, plate)
- Countable vs uncountable distinctions

#### Lesson 2: Shopping and Stores
- Store types (supermarket, bakery, pharmacy, bookstore)
- Shopping actions (buy, sell, pay, cost, spend)
- Money and prices
- Common shopping phrases

#### Lesson 3: At the Restaurant
- Menu items (starter, main course, dessert, beverage)
- Restaurant vocabulary (waiter, menu, bill, tip)
- Ordering phrases
- Food preferences

#### Lesson 4: Giving Directions
- Prepositions (in, on, at, next to, opposite, between)
- Places in town (bank, post office, library, park, station)
- Direction verbs (go, turn, walk, cross)
- Left/right, straight ahead

#### Lesson 5: Present Continuous
- Action verbs (eat, drink, walk, talk, read, write, sleep)
- Time expressions (now, at the moment, currently)
- Common activities
- Daily actions in progress

#### Lessons 6 & 7: Review and Consolidation
- Mixed vocabulary from all previous Module 3 lessons
- Integration of grammar points
- Real-world scenarios

### 9. Success Criteria
- ✅ All 7 lessons completed with detailed content
- ✅ Each of 105 total exercises (7 lessons × 15 exercises) contains exactly 20 questions
- ✅ Total of 2,100 questions created across Module 3
- ✅ All content appropriate for CEFR A1 level
- ✅ Consistent format matching Modules 1 and 2
- ✅ TypeScript compilation without errors
- ✅ All exercises properly integrated into course-data-a1.ts

### 10. Assumptions
- Audio files will be generated/recorded separately (placeholders used)
- Writing exercises will be AI-evaluated (rubric structure provided)
- Speaking exercises use existing pronunciation evaluation system
- Following the exact pattern established in Modules 1 and 2
- Questions should be pedagogically sound for progressive learning

### 11. Out of Scope
- Audio file generation/recording
- Translation to Spanish
- Creating new exercise types beyond the existing 15 per lesson
- Database integration
- UI/UX changes
