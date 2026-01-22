# Technical Specification: Complete Incomplete Exercises

## Task Overview
Complete and integrate all pending exercises in the Focus English B2 course repository. The repository contains a Next.js application for English language learning with multiple course levels (A1, B2, etc.).

## Complexity Assessment
**Difficulty: Medium**

The task involves multiple exercise types across different modules, but follows established patterns in the codebase. The main complexity comes from:
- Multiple file insertions with precise line number placement
- Various exercise formats (Speaking, Grammar, Multiple Choice, etc.)
- Need to maintain TypeScript/ESLint standards
- Integration testing requirements

## Technical Context

### Technology Stack
- **Framework**: Next.js 14+ (React, TypeScript)
- **Language**: TypeScript, Python (for data generation scripts)
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel/Cloudflare

### Key Dependencies
- React 18+
- Next.js
- TypeScript
- Supabase client
- Tailwind CSS

## Problem Analysis

### Incomplete Exercises Identified

#### 1. Speaking Exercises - Module 1 (Lessons 4-6)
**Location**: `lib/speaking-m1-remaining.txt`
**Status**: Content prepared but not integrated
**Content**: 
- M1-L4: Narrative Tenses Review (Speaking Parts 1-4)
- M1-L5: Relative Clauses (Speaking Parts 1-4)
- M1-L6: Advanced Conditionals (Speaking Parts 1-4)

**Integration Target**: `lib/course-data-b2.ts`
- Specific line numbers provided in the text file
- Each lesson requires 4 speaking parts (Interview, Long Turn, Collaborative Task, Discussion)

#### 2. Speaking Exercises - Module 2 (Lessons 2-6)
**Location**: `lib/speaking-m2-remaining.txt`
**Status**: Content prepared but not integrated
**Content**:
- M2-L2: Advanced Passive Voice
- M2-L3: Modals of Deduction
- M2-L4: Reported Speech Advanced
- M2-L5: Relative Clauses (Non-defining)
- M2-L6: Advanced Linking Words

**Integration Target**: `lib/course-data-b2.ts`
- Line numbers specified in file comments

#### 3. Module 2 Lessons 3-6 (Complete Lesson Structure)
**Location**: `scripts/complete-module-2-lessons.ts`
**Status**: Lessons defined but not integrated
**Content**: Full lesson structures with:
- Grammar exercises
- Vocabulary exercises
- Reading exercises
- Writing exercises
- Speaking exercises (some overlap with #2)

**Integration Target**: `lib/course-data-b2.ts`

#### 4. B2 Course Improvements (Per B2_IMPROVEMENTS_STATUS.md)

**Current Status**: 15% complete

**Completed**:
- ✅ Open Cloze Exercises (12 exercises) - 100%
- ✅ Gapped Text (3 of 6) - 50%

**Pending**:
- ⏳ Gapped Text - 3 more exercises needed
- ⏳ Multiple Matching (Part 7 FCE) - 6 exercises needed
- ⏳ Key Word Transformations - Need to improve existing (too simple, A2/B1 level)
- ⏳ Multiple Choice Cloze - Need to improve (obvious options, basic collocations)
- ⏳ Speaking Parts - Restructure to official FCE 4-part format
- ⏳ Writing Types - Add Article, Review, Report types

## Implementation Approach

### Phase 1: Integrate Prepared Content (High Priority)
**Estimated Time**: 4-6 hours

1. **Insert Speaking Exercises M1 L4-6**
   - Read `lib/speaking-m1-remaining.txt`
   - Insert into `lib/course-data-b2.ts` at specified line numbers
   - Verify TypeScript syntax
   - Test compilation

2. **Insert Speaking Exercises M2 L2-6**
   - Read `lib/speaking-m2-remaining.txt`
   - Insert into `lib/course-data-b2.ts` at specified line numbers
   - Handle any overlaps with Module 2 lessons script
   - Verify integration

3. **Integrate Module 2 Lessons 3-6**
   - Extract content from `scripts/complete-module-2-lessons.ts`
   - Merge with speaking exercises (avoid duplication)
   - Insert into appropriate positions in course data
   - Verify lesson structure consistency

### Phase 2: Complete Missing Exercise Types (Medium Priority)
**Estimated Time**: 8-12 hours

1. **Complete Gapped Text Exercises** (3 remaining)
   - Follow pattern from `lib/b2-improvements-part2-gapped-text.ts`
   - Topics: Choose from remaining relevant B2 themes
   - Each exercise: 6 gaps + 1 distractor
   - Add to course data

2. **Create Multiple Matching Exercises** (6 exercises)
   - Format: 10 statements, 4-5 texts (A, B, C, D, E)
   - Topics: Career Advice, Travel, Cultural Events, Environment, Technology, Health
   - Structure per exercise:
     - 4-5 short texts (100-150 words each)
     - 10 matching questions
     - Answer key with explanations

### Phase 3: Improve Existing Exercises (Lower Priority)
**Estimated Time**: 6-10 hours

1. **Enhance Key Word Transformations**
   - Current level: A2/B1 (too simple)
   - Target: B2 authentic
   - Include structures:
     - Passive reporting verbs
     - Causative (have/get something done)
     - Phrasal verbs
     - Conditional structures
     - Inversion after negatives
     - Cleft sentences
   - Create 30+ improved exercises

2. **Improve Multiple Choice Cloze**
   - Current issue: Obvious options, basic collocations
   - Target: B2 subtle distinctions
   - Focus on:
     - Natural collocations
     - Phrasal verb particles
     - Dependent prepositions
     - Adjective-noun combinations
   - Create 20+ improved exercises

### Phase 4: Add Missing Writing and Speaking Types
**Estimated Time**: 6-8 hours

1. **Add Writing Types**
   - Article (140-190 words) - 3-5 prompts
   - Review (140-190 words) - 3-5 prompts
   - Report (140-190 words) - 3-5 prompts
   - Include rubrics, features, structure guides

2. **Restructure Speaking to FCE Format**
   - Part 1: Interview (2 min)
   - Part 2: Long Turn (4 min) 
   - Part 3: Collaborative Task (4 min)
   - Part 4: Discussion (4 min)
   - Create visual prompts/descriptions
   - Sample questions for each part

## Source Code Structure Changes

### Files to Modify

1. **lib/course-data-b2.ts** (Primary)
   - Size: 17,478 lines
   - Multiple insertions at specific line numbers
   - Add speaking exercises for M1 L4-6, M2 L2-6
   - Add Module 2 Lessons 3-6 content
   - Add completed exercise improvements

2. **lib/b2-improvements-part2-gapped-text.ts**
   - Add 3 new gapped text exercises
   - Follow existing pattern

3. **lib/exercise-types.ts** (if needed)
   - May need to add new exercise type definitions
   - Update TypeScript interfaces

### New Files to Create

1. **lib/b2-multiple-matching.ts**
   - 6 Multiple Matching exercises
   - Export in format compatible with course-data-b2.ts

2. **lib/b2-key-word-transformations-improved.ts**
   - 30+ improved key word transformation exercises
   - B2 level structures

3. **lib/b2-multiple-choice-cloze-improved.ts**
   - 20+ improved multiple choice cloze exercises
   - Natural collocations and B2 vocabulary

4. **lib/b2-writing-types.ts**
   - Article prompts and rubrics
   - Review prompts and rubrics
   - Report prompts and rubrics

## Data Model / API / Interface Changes

### Exercise Type Additions

May need to extend existing types in `lib/exercise-types.ts`:

```typescript
// Potential new types
export interface MultipleMatchingExercise {
  id: string;
  type: 'multiple-matching';
  title: string;
  instruction: string;
  texts: Array<{
    letter: 'A' | 'B' | 'C' | 'D' | 'E';
    title: string;
    content: string;
  }>;
  questions: Array<{
    number: number;
    statement: string;
    correctText: 'A' | 'B' | 'C' | 'D' | 'E';
    explanation: string;
  }>;
}

// Extend WritingExercise
export interface WritingExercise {
  // ... existing fields
  writingType: 'essay' | 'article' | 'email' | 'review' | 'report'; // Add new types
  features?: string[]; // Style features for each type
  structure?: Record<string, string>; // For reports
}
```

## Verification Approach

### Testing Strategy

1. **Compilation Checks**
   ```bash
   npm run build
   # Should complete without errors
   ```

2. **Type Checking**
   ```bash
   npm run type-check
   # Or: npx tsc --noEmit
   ```

3. **Linting**
   ```bash
   npm run lint
   # Fix any issues identified
   ```

4. **Manual Verification**
   - Check course data loads correctly
   - Verify exercise count per lesson
   - Test exercise rendering in UI
   - Verify no duplicate IDs

### Validation Checklist

- [ ] All speaking exercises M1 L4-6 integrated
- [ ] All speaking exercises M2 L2-6 integrated  
- [ ] Module 2 Lessons 3-6 fully integrated
- [ ] 3 additional Gapped Text exercises added
- [ ] 6 Multiple Matching exercises created and integrated
- [ ] Key Word Transformations improved (30+ exercises)
- [ ] Multiple Choice Cloze improved (20+ exercises)
- [ ] Writing types added (Article, Review, Report)
- [ ] Speaking restructured to FCE format
- [ ] TypeScript compilation successful
- [ ] No ESLint errors
- [ ] No duplicate exercise IDs
- [ ] All line insertions at correct positions

## Important Implementation Notes

### Critical Considerations

1. **Line Number Accuracy**: 
   - The text files specify exact line numbers for insertions
   - Must verify line numbers are still accurate
   - Course data file may have changed since files were created

2. **TypeScript Syntax**:
   - All inserted content must be valid TypeScript
   - Template literals use backticks correctly
   - Escape quotes properly in strings
   - Close all brackets and braces

3. **Exercise ID Uniqueness**:
   - All exercise IDs must be unique across entire course
   - Pattern: `b2-m{module}-l{lesson}-{type}-{number}`
   - Check for duplicates before inserting

4. **FCE Format Compliance**:
   - Speaking exercises must match official FCE format
   - Part durations must be accurate
   - Question types appropriate for each part

5. **Build Configuration**:
   - Note: TypeScript and ESLint errors are currently ignored in production
   - From `next.config.js:23-27`:
     ```javascript
     typescript: { ignoreBuildErrors: true },
     eslint: { ignoreDuringBuilds: true }
     ```
   - Per MEJORAS_PENDIENTES.md, this should be fixed
   - **Important**: Aim to write code that passes TypeScript/ESLint even if currently ignored

## Risk Assessment

### Potential Issues

1. **Line Number Drift**: Text files specify line numbers that may be outdated
   - **Mitigation**: Search for surrounding context instead of relying solely on line numbers

2. **Duplicate Content**: Overlap between Module 2 lessons script and speaking exercises
   - **Mitigation**: Review both files, merge intelligently, avoid duplication

3. **Large File Size**: course-data-b2.ts is already 17,478 lines
   - **Mitigation**: Consider splitting into multiple modules if it grows significantly

4. **Format Inconsistencies**: Different exercise formats across modules
   - **Mitigation**: Review existing patterns, maintain consistency

## Success Criteria

### Definition of Done

1. All prepared content from text files integrated into course data
2. All missing exercise types created and added
3. All improvement tasks from B2_IMPROVEMENTS_STATUS.md completed
4. TypeScript compilation successful (no errors)
5. ESLint passing (no errors)
6. Manual verification of at least 3 random lessons shows correct structure
7. Exercise count matches expectations per lesson
8. No duplicate exercise IDs in system

### Expected Outcomes

- **Total New Exercises**: 100+ additional exercises integrated
- **Completion Rate**: B2 course moves from 15% to 100% complete
- **Code Quality**: All code passes TypeScript and ESLint checks
- **Documentation**: Updated B2_IMPROVEMENTS_STATUS.md reflects completion

## Time Estimates

- **Phase 1** (Integrate Prepared Content): 4-6 hours
- **Phase 2** (Complete Missing Types): 8-12 hours
- **Phase 3** (Improve Existing): 6-10 hours
- **Phase 4** (Add Writing/Speaking Types): 6-8 hours
- **Testing & Verification**: 2-4 hours

**Total Estimated Time**: 26-40 hours

## Next Steps

1. Begin with Phase 1 - highest priority, lowest risk
2. Validate insertions compile successfully before proceeding
3. Create todo list for implementation tracking
4. Update plan.md after spec completion
