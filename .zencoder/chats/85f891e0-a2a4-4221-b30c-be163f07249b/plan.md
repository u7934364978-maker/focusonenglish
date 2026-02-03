# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/85f891e0-a2a4-4221-b30c-be163f07249b/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/85f891e0-a2a4-4221-b30c-be163f07249b/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/85f891e0-a2a4-4221-b30c-be163f07249b/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/85f891e0-a2a4-4221-b30c-be163f07249b/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/85f891e0-a2a4-4221-b30c-be163f07249b/plan.md`.

### [ ] Step: Implementation

#### Phase 1: Preparation
- [x] Create `src/content/cursos/ingles-a2/syllabus.md`
- [x] Create `unit1.json` as a Golden Master and verify

#### Phase 2: Content Expansion & Alignment (Units 1-10)
- [x] Unidad 1: Greetings & Personal Info (100 ejercicios)
- [x] Unidad 2: Describing Appearance (100 ejercicios)
- [x] Unidad 3: Personality & Character (100 ejercicios)
- [x] Unidad 4: Family & Relationships (100 ejercicios)
- [x] Unidad 5: Daily Routines & Habits (100 ejercicios)
- [x] Unidad 6: Housework & Home Activities (100 ejercicios)
- [x] Unidad 7: Jobs & The Workplace (100 ejercicios)
- [x] Unidad 8: School & University Life (100 ejercicios)
- [x] Unidad 9: Feelings & Emotions (100 ejercicios)
- [x] Unidad 10: Module 1 Review & Assessment (100 ejercicios)
- [x] Align unit titles and content with `syllabus.md`
- [x] Maintain A1 exercise typology (B1: Vocab, B2: Grammar, B3: Communication)

#### Phase 3: Content Batch 2 (Units 11-20)
- [x] Unidad 11: City Life & Places (100 ejercicios)
- [x] Unidad 12: Shopping & Department Stores (100 ejercicios)
- [x] Unidad 13: Food, Cooking & Recipes (100 ejercicios)
- [x] Unidad 14: At the Restaurant (100 ejercicios)
- [x] Unidad 15: Sports & Fitness (100 ejercicios)
- [x] Unidad 16: Health & Common Illnesses (100 ejercicios)
- [x] Unidad 17: The Natural World & Animals (100 ejercicios)
- [x] Unidad 18: Weather & Seasons (100 ejercicios)
- [x] Unidad 19: Clothes, Styles & Materials (100 ejercicios)
- [x] Unidad 20: Module 2 Review & Assessment (100 ejercicios)

#### Phase 4: Content Batch 3 (Units 21-30)
- [ ] Generate and save units 21-30

#### Phase 5: Content Batch 4 (Units 31-40)
- [ ] Generate and save units 31-40

#### Phase 6: Content Batch 5 (Units 41-50)
- [ ] Generate and save units 41-50

#### Phase 7: Content Batch 6 (Units 51-60)
- [ ] Generate and save units 51-60

#### Phase 8: Verification & Cleanup
- [ ] Run `npm run validate-exercises`
- [ ] Spot check units for level consistency
