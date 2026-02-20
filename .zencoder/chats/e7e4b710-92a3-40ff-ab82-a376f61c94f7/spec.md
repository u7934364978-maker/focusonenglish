# A2 Narrative Course - Technical Specification

## 1. Technical Context

### 1.1 Project Type & Language
- **Frontend Framework**: Next.js 15 with TypeScript
- **Target Language**: English (en)
- **UI Language**: Spanish (es-ES)
- **Package Manager**: npm
- **Node.js Version**: >= 20.9.0

### 1.2 Relevant Dependencies
- **Data Format**: JSON (no database abstraction needed)
- **Course Engine**: Course engine system located in `/src/lib/course-engine/`
- **Exercise Rendering**: ExerciseRenderer component (`/src/components/ExerciseRenderer`)
- **File Handling**: Static JSON imports from `/src/content/cursos/`

### 1.3 Existing Course Architecture
- **Course Directory Structure**: `/src/content/cursos/ingles-[level]/`
  - `ingles-a1/` (60 units, non-narrative)
  - `ingles-a1-narrative/` (10 units, block-based structure)
  - `ingles-a2/` (60 units, non-narrative)
- **File Format**: One JSON file per unit (`unit1.json`, `unit2.json`, ... `unit60.json`)
- **Route Pattern**: `/debug/[level]-preview/[unitId]` (e.g., `/debug/a2-preview/unit-1`)

---

## 2. Implementation Approach

### 2.1 Reuse Existing Structure

**A1 Narrative JSON Schema** (from `/src/content/cursos/ingles-a1-narrative/unit1.json`):

```json
{
  "course": {
    "unit_id": "unit1",
    "unit_title": "[String]",
    "level": "A2-Narrative",
    "total_duration_minutes": 60,
    "language_ui": "es-ES",
    "target_language": "en"
  },
  "learning_outcomes": ["[String]", ...],
  "blocks": [
    {
      "block_id": "[String]",
      "title": "[String]",
      "duration_minutes": [Number],
      "content": [
        {
          "interaction_id": "[String]",
          "type": "[exercise_type]",
          "prompt_es": "[Spanish prompt]",
          // ... type-specific fields
        },
        ...
      ]
    },
    ...
  ]
}
```

### 2.2 Exercise Types (Direct Replication from A1)

All exercise types from A1 narrative must be supported:

1. **multiple_choice**
   - Fields: `prompt_es`, `options` (array of {id, text}), `correct_answer`, `mastery_tag`
   - Purpose: Grammar, vocabulary, comprehension

2. **fill_in_blanks**
   - Fields: `prompt_es`, `text`, `mastery_tag`
   - Purpose: Production, fill-in answers

3. **matching**
   - Fields: `title`, `instructions_es`, `pairs` (array of {id, word, correctMatch, distractors}), `mastery_tag`
   - Purpose: Vocabulary association

4. **reorder** / **word_order**
   - Fields: `instructions_es`, `sentences`, `correct_order`, `mastery_tag`
   - Purpose: Syntax practice

5. **error_correction**
   - Fields: `instructions_es`, `text`, `errors` (array of {error, correction, explanation_es}), `mastery_tag`
   - Purpose: Accuracy, grammar awareness

6. **reading_comprehension** (optional, based on A1 patterns)
   - Fields: `prompt_es`, `transcript`, `questions`, `mastery_tag`
   - Purpose: Text comprehension

### 2.3 JSON Schema Validation

- **Constraints**:
  - Each unit file must be valid JSON
  - All units must contain 60-70 exercises (matching A1 density)
  - `unit_id` must match filename (e.g., `unit1.json` has `unit_id: "unit1"`)
  - `level` must be `"A2-Narrative"`
  - All prompts must be in Spanish (`prompt_es` fields)
  - All correct answers must be defined
  - All exercises must have unique `interaction_id`

---

## 3. Source Code Structure Changes

### 3.1 Directory Organization

```
/src/content/cursos/
└── ingles-a2-narrative/
    ├── unit1.json      (60 exercises)
    ├── unit2.json      (60 exercises)
    ├── ...
    └── unit60.json     (60 exercises)
```

### 3.2 Frontend Routes (No Changes Required)

- **Debug Preview Route**: `/debug/a2-preview/[unitId]`
  - Route file: `/src/app/debug/a2-preview/[unitId]/page.tsx`
  - Logic: Generic unit loader compatible with A2 structure
  - Status: Already implemented (reuses A1 pattern)

### 3.3 Code Changes Required

**File**: `/src/app/debug/a2-preview/[unitId]/page.tsx`

If this file doesn't exist, create it by copying `/src/app/debug/a1-preview/[unitId]/page.tsx` and modifying the import path:

```typescript
// Change from:
module = await import(`@/lib/course/a1/unit-${unitNumber}`);

// To support dynamic course loading:
const courseLevel = 'a2';  // Dynamic parameter
module = await import(`@/content/cursos/ingles-a2-narrative/unit${unitNumber}.json`);
```

However, the current pattern in the repo appears to support **direct JSON imports** from `/src/content/cursos/`, making this change unnecessary if the route is generic.

---

## 4. Data Model / Interface Changes

### 4.1 Exercise Interface (TypeScript)

```typescript
interface Exercise {
  interaction_id: string;
  type: 'multiple_choice' | 'fill_in_blanks' | 'matching' | 'reorder' | 'error_correction' | 'reading_comprehension';
  prompt_es?: string;
  instructions_es?: string;
  mastery_tag: string;
  // Type-specific fields
  options?: Option[];
  correct_answer?: string;
  text?: string;
  pairs?: Pair[];
  sentences?: string[];
  correct_order?: number[];
  errors?: ErrorItem[];
  transcript?: string;
  questions?: Question[];
}

interface Unit {
  course: {
    unit_id: string;
    unit_title: string;
    level: 'A2-Narrative';
    total_duration_minutes: number;
    language_ui: 'es-ES';
    target_language: 'en';
  };
  learning_outcomes: string[];
  blocks: Block[];
}

interface Block {
  block_id: string;
  title: string;
  duration_minutes: number;
  content: Exercise[];
}
```

### 4.2 API / Route Changes

**No API changes required**. The course content is served as static JSON files from the `/src/content/cursos/` directory.

- **Existing Route**: `/debug/a2-preview/[unitId]` (uses client-side JSON import)
- **No Database Changes**: Content is JSON-based, not database-driven
- **No Backend Modifications**: Course engine already supports this pattern

---

## 5. Delivery Phases

### Phase 1: Content Structure & Outline (PRD Phase)
- **Status**: ✅ COMPLETED
- **Deliverable**: Detailed unit themes and learning objectives in `/requirements.md`

### Phase 2: Technical Specification (Current)
- **Status**: 🔄 IN PROGRESS
- **Deliverable**: This document (`spec.md`)
- **Duration**: 1 day
- **Tasks**:
  - [x] Define JSON schema
  - [x] Document exercise types
  - [x] Identify code changes
  - [x] Confirm no database migrations needed

### Phase 3: Detailed Planning
- **Status**: ⏳ PENDING
- **Deliverable**: Granular task breakdown in `/plan.md`
- **Duration**: 1 day
- **Tasks**:
  - [ ] Break down unit creation into batches
  - [ ] Define quality gates per batch
  - [ ] Create validation checklist
  - [ ] Plan testing strategy

### Phase 4: Unit Content Creation
- **Status**: ⏳ PENDING
- **Deliverable**: 60 complete JSON unit files
- **Duration**: 10-15 days (depending on automation/AI generation)
- **Batches**:
  - **Batch 1**: Units 1-10 (Module 1) - with detailed QA
  - **Batch 2**: Units 11-20 (Module 2) - with detailed QA
  - **Batch 3**: Units 21-30 (Module 3) - with detailed QA
  - **Batch 4**: Units 31-40 (Module 4) - with detailed QA
  - **Batch 5**: Units 41-50 (Module 5) - with detailed QA
  - **Batch 6**: Units 51-60 (Module 6) - with detailed QA

### Phase 5: Platform Integration & Preview
- **Status**: ⏳ PENDING
- **Deliverable**: Course accessible via `/debug/a2-preview/[unitId]`
- **Duration**: 1 day
- **Tasks**:
  - [ ] Create `/src/app/debug/a2-preview/[unitId]/page.tsx` if needed
  - [ ] Test unit loading
  - [ ] Verify exercise rendering
  - [ ] Test navigation

### Phase 6: Quality Assurance & Refinement
- **Status**: ⏳ PENDING
- **Deliverable**: All units pass QA checks
- **Duration**: 3-5 days
- **Tasks**:
  - [ ] Validate JSON structure across all units
  - [ ] Check pedagogical soundness
  - [ ] Verify translation completeness
  - [ ] Test exercise functionality
  - [ ] Validate grammar/vocabulary progression

---

## 6. Verification Approach

### 6.1 Quality Gates

**For Each Unit**:
1. ✅ Valid JSON syntax
2. ✅ Exactly 60-70 exercises per unit
3. ✅ All exercises have unique `interaction_id`
4. ✅ All exercises have `mastery_tag`
5. ✅ All prompts are in Spanish
6. ✅ All correct answers are defined
7. ✅ No trivial exercises (pedagogically sound)
8. ✅ Grammar/vocabulary alignment with A2 level

**For the Course**:
1. ✅ All 60 units created
2. ✅ Progressive difficulty across modules
3. ✅ Grammar topics covered according to A2 syllabus
4. ✅ Vocabulary distribution matches thematic modules
5. ✅ Course accessible via `/debug/a2-preview/unit-1`
6. ✅ All exercises render correctly

### 6.2 Testing Commands

**Validation Script** (to be created):
```bash
# Validate all A2 unit JSON files
npm run validate:a2-units

# Check exercise count per unit
npm run validate:a2-exercise-count

# Verify JSON schema compliance
npm run validate:a2-schema
```

**Lint/Type Check** (existing):
```bash
# Run TypeScript compiler
npm run typecheck

# Run ESLint
npm run lint
```

### 6.3 Manual Testing

- [ ] Load `/debug/a2-preview/unit-1` in browser
- [ ] Verify 60 exercises load correctly
- [ ] Test exercise types (multiple choice, fill blanks, etc.)
- [ ] Test navigation between units
- [ ] Verify Spanish prompts display correctly
- [ ] Check exercise completion flow

---

## 7. Dependencies & External Services

- **No new dependencies required**: Course uses existing Next.js, React, and JSON infrastructure
- **No external APIs**: Content is static JSON
- **No database changes**: Content is file-based

---

## 8. Success Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Total units created | 60 | ⏳ |
| Exercises per unit | 60-70 | ⏳ |
| JSON validation pass rate | 100% | ⏳ |
| Debug preview functional | Yes | ⏳ |
| A2 pedagogical coverage | 100% of syllabus | ⏳ |
| Learner feedback (future) | 4.5+/5.0 | ⏳ |

---

## 9. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|-----------|
| JSON schema inconsistency | Medium | High | Use validation script, templating |
| Exercise quality variability | Medium | High | Peer review, pedagogical checklist |
| File size (60 units × 60 exercises) | Low | Low | JSON minification if needed |
| Route compatibility | Low | Medium | Test with existing preview infrastructure |

---

## 10. Next Steps

1. **Confirm this specification** with user
2. **Create detailed implementation plan** (Phase 3) breaking down unit creation
3. **Start content creation** (Phase 4) with Batch 1 (Units 1-10)
4. **Iterate through remaining batches** with continuous QA
5. **Platform integration** (Phase 5) after all units complete
6. **Final QA & deployment** (Phase 6)
