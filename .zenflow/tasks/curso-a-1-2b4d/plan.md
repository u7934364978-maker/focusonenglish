# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 8a618f68-508c-4929-98af-2ac73381ec75 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 1a4b0742-fcab-4545-85ef-3961c505d929 -->

Create a technical specification based on the PRD in `{@artifacts_path}/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning
<!-- chat-id: 60081a18-0f1f-4700-895f-39b2957138d2 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `{@artifacts_path}/plan.md`.

---

## Implementation Tasks

### Phase 1: Lesson 1 - Food and Drinks (Foundation)

### [x] Task 1.1: Create Lesson 1 detailed file - Grammar and Reading exercises
<!-- chat-id: 19245637-94a8-4622-bc8d-29a46c47997b -->
**File**: `lib/a1-m3-l1-detailed.ts`
**Content**: 
- Grammar Exercise 1 (Countable/Uncountable nouns - Formation) - 20 questions ✓
- Grammar Exercise 2 (Countable/Uncountable nouns - Practice) - 20 questions ✓
- Reading Exercise (Food-related text) - 20 questions ✓

**Verification**: TypeScript types match existing interfaces, question count = 60 ✓

### [x] Task 1.2: Create Lesson 1 - Listening, Speaking, Writing exercises
<!-- chat-id: 0303c974-e3d8-4a0c-846a-b5be5a37ac5c -->
**File**: `lib/a1-m3-l1-detailed.ts` (continuation)
**Content**:
- Listening Exercise (placeholder audio) - 20 questions ✓
- Speaking Exercise - evaluation criteria ✓
- Writing Exercise - rubric and prompts ✓
- Pronunciation Practice - 20 questions ✓

**Verification**: Question count = 40 additional questions (total 100 so far) ✓

### [ ] Task 1.3: Create Lesson 1 - Vocabulary and practice exercises
**File**: `lib/a1-m3-l1-detailed.ts` (continuation)
**Content**:
- Vocabulary Exercise 1 (Food and drinks vocabulary) - 20 questions
- Vocabulary Exercise 2 (Practice) - 20 questions
- Fill-in-Blanks - 20 questions
- Multiple Choice - 20 questions
- Matching - 20 questions
- Sentence Building - 20 questions
- True/False - 20 questions
- Dialogue Practice - 20 questions
- Export `A1_M3_L1_ALL_EXERCISES` array

**Verification**: Question count = 160 additional questions (total 260 for lesson 1)

### [ ] Task 1.4: Integrate Lesson 1 into course-data-a1.ts
**File**: `lib/course-data-a1.ts`
**Changes**:
- Add import for `A1_M3_L1_ALL_EXERCISES`
- Replace placeholder exercises for Lesson 1 with imported array

**Verification**: Run `npm run type-check` - must compile without errors

---

### Phase 2: Lessons 2-5 (Core Content)

### [ ] Task 2.1: Create Lesson 2 - Shopping and Stores (complete)
**File**: `lib/a1-m3-l2-detailed.ts`
**Content**: All 15 exercises (13 with 20 questions each = 260 questions total)
**Grammar Focus**: Some/Any
**Vocabulary**: Shopping vocabulary

**Verification**: TypeScript compiles, question count = 260

### [ ] Task 2.2: Create Lesson 3 - At the Restaurant (complete)
**File**: `lib/a1-m3-l3-detailed.ts`
**Content**: All 15 exercises (13 with 20 questions each = 260 questions total)
**Grammar Focus**: Would like
**Vocabulary**: Restaurant vocabulary

**Verification**: TypeScript compiles, question count = 260

### [ ] Task 2.3: Create Lesson 4 - Giving Directions (complete)
**File**: `lib/a1-m3-l4-detailed.ts`
**Content**: All 15 exercises (13 with 20 questions each = 260 questions total)
**Grammar Focus**: Prepositions of place
**Vocabulary**: Direction and location vocabulary

**Verification**: TypeScript compiles, question count = 260

### [ ] Task 2.4: Create Lesson 5 - Present Continuous (complete)
**File**: `lib/a1-m3-l5-detailed.ts`
**Content**: All 15 exercises (13 with 20 questions each = 260 questions total)
**Grammar Focus**: Present Continuous tense
**Vocabulary**: Action verbs and time expressions

**Verification**: TypeScript compiles, question count = 260

### [ ] Task 2.5: Integrate Lessons 2-5 into course-data-a1.ts
**File**: `lib/course-data-a1.ts`
**Changes**:
- Add imports for `A1_M3_L2_ALL_EXERCISES` through `A1_M3_L5_ALL_EXERCISES`
- Replace placeholder exercises for Lessons 2-5

**Verification**: Run `npm run type-check` - must compile without errors

---

### Phase 3: Lessons 6-7 (Review and Consolidation)

### [ ] Task 3.1: Create Lesson 6 - Mock Exam Module 3 (complete)
**File**: `lib/a1-m3-l6-detailed.ts`
**Content**: All 15 exercises (13 with 20 questions each = 260 questions total)
**Focus**: Comprehensive review of all Module 3 topics
**Mixed content**: Lessons 1-5 grammar and vocabulary

**Verification**: TypeScript compiles, question count = 260

### [ ] Task 3.2: Create Lesson 7 - Consolidation and Practice (complete)
**File**: `lib/a1-m3-l7-detailed.ts`
**Content**: All 15 exercises (13 with 20 questions each = 260 questions total)
**Focus**: Practice and reinforce all Module 3 concepts
**Varied exercises**: Integrated topics from Lessons 1-5

**Verification**: TypeScript compiles, question count = 260

### [ ] Task 3.3: Final integration into course-data-a1.ts
**File**: `lib/course-data-a1.ts`
**Changes**:
- Add imports for `A1_M3_L6_ALL_EXERCISES` and `A1_M3_L7_ALL_EXERCISES`
- Replace placeholder exercises for Lessons 6-7

**Verification**: Run `npm run type-check` - final compilation check, all imports resolve

---

### Final Verification

### [ ] Task 4: Comprehensive verification
**Checks**:
- Total question count: 1,820 questions (7 lessons × 13 question-based exercises × 20 questions)
  Note: Speaking and Writing exercises use evaluation criteria/rubrics, not question arrays
- All question-based exercises have exactly 20 questions
- TypeScript compilation: `npm run type-check` passes
- All exercise IDs are unique
- Content difficulty appropriate for CEFR A1 level
- Pattern consistency with Modules 1 and 2

**Result Documentation**: Record verification results in this plan.md
