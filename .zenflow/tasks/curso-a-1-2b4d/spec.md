# Technical Specification: Module 3 A1 English Course

## 1. Overview

Complete Module 3 of the A1 English course with fully functional exercises. Each exercise must contain exactly 20 questions. Module 3 consists of 7 lessons with 15 exercises each (105 total exercises, 2,100 total questions).

## 2. Technical Context

### 2.1 Language and Framework
- **Language**: TypeScript
- **Framework**: Next.js (React)
- **Type System**: Strict TypeScript with interfaces defined in `lib/course-data-a1.ts`

### 2.2 Dependencies
- Existing type definitions from `lib/course-data-a1.ts`
- Exercise type interfaces (GrammarExercise, VocabularyExercise, ReadingExercise, etc.)
- Course structure defined in MODULE_3_LESSONS

### 2.3 Current State
- Module 3 structure exists in `lib/course-data-a1.ts` (lines 949-1618)
- All 7 lessons defined with placeholders: `// Content will be added in future updates`
- Exercise IDs and types already defined
- Modules 1 and 2 provide reference patterns for implementation

## 3. Implementation Approach

### 3.1 File Structure Pattern
Following the established pattern from Modules 1 and 2:

**Create 7 new files:**
- `lib/a1-m3-l1-detailed.ts` - Lesson 1: Food and Drinks
- `lib/a1-m3-l2-detailed.ts` - Lesson 2: Shopping and Stores  
- `lib/a1-m3-l3-detailed.ts` - Lesson 3: At the Restaurant
- `lib/a1-m3-l4-detailed.ts` - Lesson 4: Giving Directions
- `lib/a1-m3-l5-detailed.ts` - Lesson 5: Present Continuous
- `lib/a1-m3-l6-detailed.ts` - Lesson 6: Mock Exam - Module 3
- `lib/a1-m3-l7-detailed.ts` - Lesson 7: Consolidation and Practice

### 3.2 Exercise Type Mapping
Based on `lib/course-data-a1.ts` Module 3 structure, each lesson contains these 15 exercise types (in order):

1. **Grammar Exercise 1** - Formation and Use
2. **Grammar Exercise 2** - Practice
3. **Reading Exercise** - Comprehension text with questions
4. **Listening Exercise** - Audio-based (placeholder audioUrl)
5. **Speaking Exercise** - Pronunciation/speaking practice
6. **Writing Exercise** - Writing prompts with rubrics
7. **Pronunciation Practice** - Targeted pronunciation
8. **Vocabulary Exercise 1** - Word sets with definitions
9. **Vocabulary Exercise 2** - Vocabulary practice
10. **Fill-in-Blanks** - Gap-fill exercises
11. **Multiple Choice** - Multiple choice questions
12. **Matching** - Word/meaning matching
13. **Sentence Building** - Sentence construction
14. **True/False** - True/false statements
15. **Dialogue Practice** - Conversational practice

### 3.3 Question Requirements per Exercise Type

#### Grammar Exercises (Types 1-2)
```typescript
{
  id: string;
  type: 'grammar';
  title: string;
  grammarPoint?: string;
  explanation?: string;
  examples: string[]; // 5+ examples
  questions: Question[]; // 20 questions
}
```

#### Vocabulary Exercises (Types 8-9)
```typescript
{
  id: string;
  type: 'vocabulary';
  title: string;
  vocabularySet: { word: string; definition: string; example: string }[];
  questions: Question[]; // 20 questions
}
```

#### Reading Exercise (Type 3)
```typescript
{
  id: string;
  type: 'reading';
  title: string;
  text: string; // 150-250 words
  wordCount: number;
  readingTime: number;
  questions: Question[]; // 20 questions
  vocabularyHelp?: { word: string; definition: string }[];
}
```

#### Listening Exercise (Type 4)
```typescript
{
  id: string;
  type: 'listening';
  audioUrl: string; // /audio/a1-m3-lX-listening-Y.mp3
  transcript?: string;
  duration: number; // 60-120 seconds
  questions: Question[]; // 20 questions
  allowReplay: boolean;
  maxReplays?: number;
}
```

#### Writing Exercise (Type 6)
```typescript
{
  id: string;
  type: 'writing';
  title: string;
  prompt: string;
  wordLimit: { min: number; max: number };
  timeLimit?: number;
  rubric: {
    criteria: string;
    points: number;
    description: string;
  }[];
  tips: string[];
  exampleResponse?: string;
}
```

#### Speaking Exercise (Type 5)
```typescript
{
  id: string;
  type: 'speaking';
  prompt: string;
  targetText?: string;
  timeLimit?: number;
  evaluationCriteria: {
    pronunciation: boolean;
    fluency: boolean;
    grammar: boolean;
    vocabulary: boolean;
  };
  modelAudioUrl?: string;
  hints?: string[];
}
```

#### Question Interface
```typescript
{
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'short-answer' | 'essay';
  question: string;
  options?: string[]; // for multiple-choice
  correctAnswer: string | string[];
  acceptableAnswers?: string[];
  explanation?: string;
  points: number; // Always 1
}
```

### 3.4 Content Standards per Lesson

#### Lesson 1: Food and Drinks
- **Grammar**: Countable/Uncountable nouns
- **Vocabulary**: Common foods (bread, rice, cheese, apple, banana), drinks (water, milk, juice, tea, coffee), containers (bottle, glass, cup, bowl, plate)
- **Context**: Food shopping, describing meals, quantities

#### Lesson 2: Shopping and Stores
- **Grammar**: Some/Any
- **Vocabulary**: Store types (supermarket, bakery, pharmacy, bookstore), shopping actions (buy, sell, pay, cost, spend), money and prices
- **Context**: Shopping activities, asking for items

#### Lesson 3: At the Restaurant
- **Grammar**: Would like
- **Vocabulary**: Menu items (starter, main course, dessert, beverage), restaurant vocabulary (waiter, menu, bill, tip), ordering phrases
- **Context**: Restaurant conversations, ordering food

#### Lesson 4: Giving Directions
- **Grammar**: Prepositions of place
- **Vocabulary**: Prepositions (in, on, at, next to, opposite, between), places (bank, post office, library, park, station), direction verbs (go, turn, walk, cross)
- **Context**: Asking for and giving directions

#### Lesson 5: Present Continuous
- **Grammar**: Present Continuous tense
- **Vocabulary**: Action verbs (eat, drink, walk, talk, read, write, sleep), time expressions (now, at the moment, currently)
- **Context**: Describing actions happening now

#### Lesson 6: Mock Exam - Module 3
- **Focus**: Comprehensive review of all Module 3 topics
- **Content**: Mixed exercises covering Lessons 1-5 grammar and vocabulary

#### Lesson 7: Consolidation and Practice
- **Focus**: Practice and reinforce all Module 3 concepts
- **Content**: Varied exercises integrating all topics

## 4. Source Code Structure Changes

### 4.1 New Files to Create
```
lib/
  ├── a1-m3-l1-detailed.ts  (~1400-2300 lines)
  ├── a1-m3-l2-detailed.ts  (~1400-2300 lines)
  ├── a1-m3-l3-detailed.ts  (~1400-2300 lines)
  ├── a1-m3-l4-detailed.ts  (~1400-2300 lines)
  ├── a1-m3-l5-detailed.ts  (~1400-2300 lines)
  ├── a1-m3-l6-detailed.ts  (~1400-2300 lines)
  └── a1-m3-l7-detailed.ts  (~1400-2300 lines)
```

Each file exports:
- 15 individual exercise constants
- 1 combined array: `A1_M3_LX_ALL_EXERCISES`

### 4.2 File to Modify
**File**: `lib/course-data-a1.ts`

**Changes Required**:
1. Add imports at the top (after line 17):
```typescript
import { A1_M3_L1_ALL_EXERCISES } from './a1-m3-l1-detailed';
import { A1_M3_L2_ALL_EXERCISES } from './a1-m3-l2-detailed';
import { A1_M3_L3_ALL_EXERCISES } from './a1-m3-l3-detailed';
import { A1_M3_L4_ALL_EXERCISES } from './a1-m3-l4-detailed';
import { A1_M3_L5_ALL_EXERCISES } from './a1-m3-l5-detailed';
import { A1_M3_L6_ALL_EXERCISES } from './a1-m3-l6-detailed';
import { A1_M3_L7_ALL_EXERCISES } from './a1-m3-l7-detailed';
```

2. Replace placeholder exercises in MODULE_3_LESSONS (lines 949-1618):
   - Replace `exercises: [...]` for each of 7 lessons
   - Use: `exercises: A1_M3_LX_ALL_EXERCISES`

## 5. Data Model

### 5.1 Exercise Export Pattern
Each detailed file follows this structure:

```typescript
// Individual exercise constants
export const A1_M3_L1_GRAMMAR_1 = { ... };
export const A1_M3_L1_GRAMMAR_2 = { ... };
export const A1_M3_L1_READING = { ... };
// ... 12 more exercises

// Combined export
export const A1_M3_L1_ALL_EXERCISES = [
  A1_M3_L1_GRAMMAR_1,
  A1_M3_L1_GRAMMAR_2,
  A1_M3_L1_READING,
  A1_M3_L1_LISTENING,
  A1_M3_L1_SPEAKING,
  A1_M3_L1_WRITING,
  A1_M3_L1_PRONUNCIATION,
  A1_M3_L1_VOCABULARY_1,
  A1_M3_L1_VOCABULARY_2,
  A1_M3_L1_FILL_BLANKS,
  A1_M3_L1_MULTIPLE_CHOICE,
  A1_M3_L1_MATCHING,
  A1_M3_L1_SENTENCE_BUILDING,
  A1_M3_L1_TRUE_FALSE,
  A1_M3_L1_DIALOGUE
];
```

### 5.2 Type Safety
- Use `as const` for string literals where appropriate
- Follow existing type patterns from Modules 1 and 2
- Ensure all required properties are present
- Use type annotations to catch errors early

## 6. Delivery Phases

### Phase 1: Lesson 1 - Food and Drinks
**Goal**: Create and integrate first complete lesson
- Create `lib/a1-m3-l1-detailed.ts` with all 15 exercises (20 questions each)
- Update `lib/course-data-a1.ts` with import and integration
- Verify TypeScript compilation
- Test one complete lesson before proceeding

### Phase 2: Lessons 2-5 - Core Content
**Goal**: Complete main instructional lessons
- Create `lib/a1-m3-l2-detailed.ts` (Shopping and Stores)
- Create `lib/a1-m3-l3-detailed.ts` (At the Restaurant)
- Create `lib/a1-m3-l4-detailed.ts` (Giving Directions)
- Create `lib/a1-m3-l5-detailed.ts` (Present Continuous)
- Update imports and integrations in `course-data-a1.ts`
- Verify TypeScript compilation

### Phase 3: Lessons 6-7 - Review and Consolidation
**Goal**: Complete review lessons with mixed content
- Create `lib/a1-m3-l6-detailed.ts` (Mock Exam)
- Create `lib/a1-m3-l7-detailed.ts` (Consolidation)
- Final integration in `course-data-a1.ts`
- Complete TypeScript compilation check

## 7. Verification Approach

### 7.1 TypeScript Compilation
```bash
npx tsc --noEmit
```
- Must compile without errors
- Check for type mismatches
- Verify all imports resolve correctly

### 7.2 Content Quality Checks
**Manual verification**:
- Each exercise has exactly 20 questions
- Each question has required fields (id, type, question, correctAnswer, explanation, points)
- Grammar exercises have 5+ examples
- Reading texts are 150-250 words
- Vocabulary sets have definitions and examples
- All IDs are unique and follow naming convention

### 7.3 Integration Verification
- Check that exercises render correctly in the application
- Verify exercise navigation works
- Confirm question counting is accurate
- Test that answers can be submitted and checked

### 7.4 Pattern Consistency
- Compare new files against Module 1 and 2 patterns
- Ensure exercise structure matches existing successful implementations
- Verify export patterns are consistent
- Check that content difficulty is appropriate for A1 level

## 8. Success Criteria

- ✅ 7 new detailed TypeScript files created
- ✅ Each file contains 15 complete exercises
- ✅ Each exercise contains exactly 20 questions  
- ✅ Total of 2,100 questions across Module 3
- ✅ TypeScript compiles without errors
- ✅ All exercises integrated into `course-data-a1.ts`
- ✅ Content is pedagogically appropriate for CEFR A1 level
- ✅ Consistent formatting and structure with Modules 1 and 2

## 9. Technical Constraints

### 9.1 Audio Files
- Use placeholder paths: `/audio/a1-m3-lX-listening-Y.mp3`
- Include transcripts for all listening exercises
- Audio generation is out of scope

### 9.2 AI Evaluation
- Writing exercises use rubric-based structure
- Speaking exercises use existing evaluation criteria
- No changes to evaluation system required

### 9.3 Exercise Types
- Use only existing exercise types defined in `ExerciseType` union
- Follow established interfaces for each type
- No new exercise types to be created

### 9.4 Content Language
- Exercise content in English
- UI labels can reference Spanish (already in codebase)
- Focus on English learning content

## 10. Dependencies and Risks

### 10.1 Dependencies
- Existing type definitions in `lib/course-data-a1.ts`
- TypeScript compiler configuration
- Next.js build process

### 10.2 Risks and Mitigations

**Risk**: TypeScript compilation errors
- **Mitigation**: Follow existing patterns exactly, compile after each file

**Risk**: Content quality/difficulty mismatch
- **Mitigation**: Reference CEFR A1 standards, review Module 1-2 examples

**Risk**: Inconsistent question counts
- **Mitigation**: Count questions programmatically before finalizing

**Risk**: Large file sizes causing performance issues
- **Mitigation**: Follow established file size patterns (~1400-2300 lines), use code splitting (already implemented)

## 11. Out of Scope

- Audio file generation or recording
- Translation to Spanish
- UI/UX modifications
- Database schema changes
- New exercise type creation
- Mobile app integration
- Performance optimization beyond current patterns
- User testing or feedback collection
