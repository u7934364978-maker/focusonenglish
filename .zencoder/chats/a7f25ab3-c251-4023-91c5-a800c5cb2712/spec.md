# Technical Specification - A1 Course Expansion

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js 15 (App Router)
- **Data Structures**: `Exercise`, `Lesson`, `Module` from `@/lib/exercise-types`.

## Implementation Approach

### 1. New Content Centralization
I will create a new file `src/lib/a1-expansion-content.ts` that exports specialized arrays of exercises for each topic. This prevents existing files from becoming excessively large and makes it easier to manage the new content.

### 2. Data Structure
Each exercise will follow the schema defined in `src/lib/exercise-types.ts`.
- `id`: unique string (e.g., `a1-ext-adj-q1`)
- `type`: `multiple-choice`, `fill-blank`, `sentence-building`, etc.
- `explanation`: Detailed explanation in Spanish based on the user-provided text.
- `questions`: Array of question objects.

### 3. Integration Strategy
Modify `src/lib/course-data-a1.ts` to include the new exercises in the `lessons` of the corresponding `ALL_MODULES`.
- **Module 1 Lesson 4 (Review)**: Add "Common Mistakes" exercises.
- **Module 2 Lesson 1 (Family/Descriptions)**: Add "Adjectives" exercises.
- **Module 2 Lesson 3 (Possession)**: Add "Genitive Saxon" exercises.
- **Module 3 Lesson 1 (Routines)**: Add "Adverbs of Frequency" and "After/Then" exercises.
- **Module 3 Lesson 2 (Time/Dates)**: Add "Dates", "Ordinals", and "Capital Letters" exercises.
- **Module 5 Lesson 1 (Transport)**: Add "Transports" and "Prepositions of Place" exercises.

## Proposed Source Code Changes

### New Files
- `src/lib/a1-expansion-content.ts`: Contains the logic and data for the new exercises.

### Modified Files
- `src/lib/course-data-a1.ts`: To import and append new exercises to the lessons.

## Delivery Phases
1. **Phase 1: Content Creation**: Implement `a1-expansion-content.ts` with all topics.
2. **Phase 2: Integration**: Update `course-data-a1.ts` to use the new content.
3. **Phase 3: Verification**: Run `npm run validate-exercises` (if available) or check for type errors.

## Verification Approach
- **TypeScript Compiler**: Ensure no type mismatches in the new exercise objects.
- **Exercise Validation Script**: Run `npm run validate-exercises` to ensure JSON compatibility and schema compliance.
