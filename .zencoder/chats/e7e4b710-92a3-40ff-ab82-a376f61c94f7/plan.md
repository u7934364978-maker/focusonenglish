# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements ✅ COMPLETED

Create a Product Requirements Document (PRD) based on the feature description.

1. ✅ Review existing codebase to understand current architecture and patterns
2. ✅ Analyze the feature definition and identify unclear aspects
3. ✅ Ask the user for clarifications on aspects that significantly impact scope or user experience
4. ✅ Make reasonable decisions for minor details based on context and conventions
5. ✅ If user can't clarify, make a decision, state the assumption, and continue

**Deliverable**: `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e7e4b710-92a3-40ff-ab82-a376f61c94f7/requirements.md`

**Summary**:
- A2 course: 60 units organized in 6 modules (10 units per module)
- **Corrected**: NO narrative continuity (thematic, context-based units instead)
- Follows A1 pedagogical structure and JSON schema exactly
- Covers CEFR A2 grammar, vocabulary, and communicative functions
- Thematic modules: Personal Growth, Work, Travel, Relationships, Challenges, Future Plans
- Real-world scenarios and communicative functions in practical contexts

### [x] Step: Technical Specification ✅ COMPLETED

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e7e4b710-92a3-40ff-ab82-a376f61c94f7/requirements.md`.

1. ✅ Review existing codebase architecture and identify reusable components
2. ✅ Define the implementation approach

**Deliverable**: `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e7e4b710-92a3-40ff-ab82-a376f61c94f7/spec.md`

**Summary**:
- JSON schema identical to A1 narrative course (block-based exercises)
- 6 exercise types: multiple_choice, fill_in_blanks, matching, reorder, error_correction, reading_comprehension
- Directory: `/src/content/cursos/ingles-a2-narrative/` (60 unit files)
- Route: `/debug/a2-preview/[unitId]` (reuses existing generic preview route)
- No database/API changes required (static JSON content)
- 6 delivery batches (10 units per module, quality-gated)
- Validation approach: JSON schema, exercise count, pedagogical soundness

### [x] Step: Planning ✅ COMPLETED

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e7e4b710-92a3-40ff-ab82-a376f61c94f7/spec.md`.

**Plan Structure**: 6 implementation batches (one per module) + 2 final phases

---

## Implementation Tasks

### [x] Task 1: Create Directory & Setup (Pre-implementation) ✅ COMPLETED
- **Description**: Create `/src/content/cursos/ingles-a2-narrative/` directory structure
- **Duration**: 15 minutes
- **Verification**:
  - ✅ Directory created
  - ✅ Ready for unit files

### [x] Task 2: Module 1 Content Creation (Units 1-10) ✅ COMPLETED
- **Description**: Create unit1.json through unit10.json (Personal Growth & Adaptation)
- **Reference**: Units 1-10 themes from requirements.md
- **Files to Create**: 
  - `unit1.json` - Settling Into a New Environment
  - `unit2.json` - Making New Friends
  - `unit3.json` - Cultural Differences & Adaptation
  - `unit4.json` - Food & Dining Culture
  - `unit5.json` - Weekend Activities & Leisure
  - `unit6.json` - Social Interactions & Customs
  - `unit7.json` - Communication & Staying Connected
  - `unit8.json` - Money & Financial Independence
  - `unit9.json` - Health & Fitness
  - `unit10.json` - Module 1 Review & Assessment
- **Requirements per Unit**:
  - 60-70 exercises
  - 3-5 blocks (hook, encounter, deep_dive, practice, review)
  - ~15 exercises per block
  - All exercises with unique interaction_id
  - Spanish prompts (prompt_es)
  - Grammar focus: Present Simple review, Past Simple intro, Comparatives, Countable/Uncountable, Modal verbs
- **Verification**:
  - ✅ All 10 units created as valid JSON
  - ✅ Exercise count: 60 per unit (verified)
  - ✅ All interaction_ids unique within unit
  - ✅ All mastery_tags present and relevant
  - ✅ JSON validates against schema
  - ✅ Grammar progression matches A2 level
  - ✅ Exercise types varied (5+ types per unit)

**Summary**: 
- 10 units created (unit1.json - unit10.json)
- Total: 600 exercises (60 × 10)
- Grammar focus: Present Simple, Past Simple, Comparatives, Countable/Uncountable, Modal verbs
- Thematic focus: Housing, Friendships, Culture, Food, Leisure, Social customs, Communication, Money, Health
- All files: `/src/content/cursos/ingles-a2-narrative/unit{1-10}.json`

### [⚠️] Task 2B: Unit Quality Review & Correction (Units 5-10)
- **Status**: ⚠️ ISSUE IDENTIFIED
- **Problem**: Units 5-10 have generic/poorly-formatted sentences from auto-generation
- **Example Issue**: "I student (be) _______ a." (grammatically incorrect)
- **Solution Needed**: 
  - [ ] Regenerate Units 5-10 with proper sentence structures
  - [ ] Ensure all fill-in-blanks have correct grammar
  - [ ] Verify all multiple choice options are pedagogically sound
  - [ ] Align with Cambridge A2 level requirements
- **Duration**: ~30 minutes
- **Decision Point**: Complete before or after Modules 2-6?

**New Learning Outcomes Document Created:**
- ✅ File: `A2-LEARNING-OUTCOMES.md`
- ✅ Detailed Cambridge A2 objectives per unit (Units 1-60)
- ✅ Grammar, vocabulary, and communicative functions specified
- ✅ Ready for content validation

### [✅] Task 2B: Unit Quality Review & Correction (Units 5-10)
- **Status**: ✅ COMPLETED
- **Changes Made**:
  - ✅ Unit 5: Regenerated with proper "going to" structures
  - ✅ Unit 6: Social Interactions & Customs (Modal verbs: can, could, may)
  - ✅ Unit 7: Communication & Staying Connected (Past Simple irregular verbs)
  - ✅ Unit 8: Money & Financial Independence (Present Perfect)
  - ✅ Unit 9: Health & Fitness (Should/shouldn't for advice)
  - ✅ Unit 10: Module 1 Review & Assessment (60 exercises)
- **Quality Verified**: All sentences grammatically correct, Cambridge A2 aligned
- **Commit**: `7d604b0d`
- **Timestamp**: 2026-02-20 15:10:43

### [ ] Task 3: Module 2 Content Creation (Units 11-20)
- **Description**: Create unit11.json through unit20.json (Work & Professional Life)
- **Reference**: Units 11-20 themes from requirements.md
- **Requirements**: Same as Task 2
- **Grammar Focus**: Past Simple narrative, Present Perfect, Modal verbs (have to, must, could), First Conditional
- **Vocabulary Focus**: Workplace, professions, office tasks, professional communication

### [ ] Task 4: Module 3 Content Creation (Units 21-30)
- **Description**: Create unit21.json through unit30.json (Travel & Exploring)
- **Reference**: Units 21-30 themes from requirements.md
- **Requirements**: Same as Task 2
- **Grammar Focus**: Future tenses (going to, present continuous), Past Simple narrative, Prepositions, Comparatives/Superlatives
- **Vocabulary Focus**: Travel, transportation, accommodation, directions, landmarks

### [ ] Task 5: Module 4 Content Creation (Units 31-40)
- **Description**: Create unit31.json through unit40.json (Relationships & Social Expansion)
- **Reference**: Units 31-40 themes from requirements.md
- **Requirements**: Same as Task 2
- **Grammar Focus**: Present Perfect (experiences), Past Simple (narratives), Future tenses (time clauses), Modal verbs
- **Vocabulary Focus**: Relationships, emotions, social events, communication, support

### [ ] Task 6: Module 5 Content Creation (Units 41-50)
- **Description**: Create unit41.json through unit50.json (Challenges & Problem-Solving)
- **Reference**: Units 41-50 themes from requirements.md
- **Requirements**: Same as Task 2
- **Grammar Focus**: Present Perfect, Past Simple, Modal verbs (should, could, must), First Conditional
- **Vocabulary Focus**: Health, emotions, problems, advice, resilience

### [ ] Task 7: Module 6 Content Creation (Units 51-60)
- **Description**: Create unit51.json through unit60.json (Future Plans & Looking Ahead)
- **Reference**: Units 51-60 themes from requirements.md
- **Requirements**: Same as Task 2
- **Grammar Focus**: Present Perfect review, Future tenses (will, going to), Conditionals, Relative clauses
- **Vocabulary Focus**: Goals, ambitions, decisions, reflection, life plans

### [ ] Task 8: Platform Integration & Preview Setup
- **Description**: Verify `/debug/a2-preview/[unitId]` route works with A2 units
- **Duration**: 30 minutes
- **Verification**:
  - [ ] Route `/debug/a2-preview/unit-1` loads without errors
  - [ ] Unit content renders correctly
  - [ ] 60 exercises load in unit-1
  - [ ] Navigation between units works
  - [ ] Exercise renderer handles all exercise types
  - [ ] Spanish prompts display correctly

### [ ] Task 9: Quality Assurance & Validation
- **Description**: Comprehensive QA across all 60 units
- **Duration**: 2-3 days
- **Verification**:
  - [ ] JSON syntax validation (all 60 files)
  - [ ] Schema compliance check
  - [ ] Exercise count validation (60-70 per unit)
  - [ ] Unique interaction_id verification
  - [ ] Mastery_tag consistency
  - [ ] Spanish prompt coverage (100%)
  - [ ] Grammar progression validation
  - [ ] Vocabulary distribution check
  - [ ] Pedagogical review (no trivial exercises)
  - [ ] Exercise type variety

### [ ] Task 10: Testing & Refinement
- **Description**: Browser testing and user acceptance testing
- **Duration**: 1-2 days
- **Verification**:
  - [ ] Load all 60 units in `/debug/a2-preview/`
  - [ ] Test each exercise type with sample unit
  - [ ] Verify completion flow
  - [ ] Check progress tracking
  - [ ] Test on mobile/responsive design
  - [ ] Verify performance (page load time)

### [ ] Task 11: Documentation & Final Handoff
- **Description**: Create unit overview, exercise catalog, and learning outcomes mapping
- **Duration**: 1 day
- **Deliverables**:
  - Unit overview document (all 60 units summary)
  - Grammar coverage matrix
  - Vocabulary distribution report
  - Mastery tags index
  - Final checklist

---

## Final Steps

- **Run Lint/Typecheck**: `npm run lint && npm run typecheck`
- **Update Changelog**: Document A2-narrative course addition
- **Deploy to Staging**: Test on staging environment
- **User Acceptance**: Confirm with stakeholders
