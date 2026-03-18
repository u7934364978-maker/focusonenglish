# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 54f9a938-48f2-458f-a318-2b5885922a83 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: ba606946-90ce-43c0-8492-47c86a28b37b -->

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
<!-- chat-id: 88963c57-98b2-4792-9be2-a9febdbdd8b2 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Save to `{@artifacts_path}/plan.md`.

### [x] Step: Create course root files
Create the top-level course files:
- `course-c1-english/README.md` – Course index with overview, unit list, CEFR alignment, exam compatibility, and how to use the course
- `course-c1-english/syllabus.md` – Official syllabus with CEFR C1 can-do descriptors per skill, full unit overview table, grammar scope & sequence summary, vocabulary progression, and assessment breakdown

Verify: Both files cover all 10 units, reference CEFR C1 descriptors, and follow Markdown formatting.

### [x] Step: Create unit files 1–3 (Activation phase)
Create detailed unit files for the first three units (activation & expansion B2→C1):
- `course-c1-english/units/unit-01-identity-society.md`
- `course-c1-english/units/unit-02-language-communication.md`
- `course-c1-english/units/unit-03-science-technology.md`

Each file must include all 7 pedagogical phases, grammar focus with form/use/examples, ~30-40 key vocabulary items with collocations, text types for reading and writing, suggested activities per skill (R/W/L/S), and a unit evaluation checklist with can-do statements.

Verify against quality checklist in spec.md: CEFR alignment, completeness (7 phases), skill variety, thematic coherence.

### [ ] Step: Create unit files 4–6 (Consolidation phase)
Create detailed unit files for the consolidation phase:
- `course-c1-english/units/unit-04-natural-world.md`
- `course-c1-english/units/unit-05-arts-culture.md`
- `course-c1-english/units/unit-06-work-economy.md`

Same structure requirements as units 1–3. Grammar structures: advanced relative clauses & noun phrases (U4), cleft sentences & inversion (U5), advanced future forms & wish/if only (U6).

Verify against quality checklist in spec.md.

### [ ] Step: Create unit files 7–9 (Refinement phase)
Create detailed unit files for the refinement phase:
- `course-c1-english/units/unit-07-health-mind.md`
- `course-c1-english/units/unit-08-global-issues.md`
- `course-c1-english/units/unit-09-media-information.md`

Same structure requirements. Grammar: nominal/comment clauses & subjunctive (U7), participle clauses & ellipsis (U8), hedging language & discourse markers (U9). Increased Academic Word List integration.

Verify against quality checklist in spec.md.

### [ ] Step: Create unit file 10 (Synthesis phase)
Create the final unit file:
- `course-c1-english/units/unit-10-future-beyond.md`

This unit synthesises all previous grammar structures and vocabulary. Includes extended speaking (spontaneous monologue), creative/reflective writing, philosophical reading texts, and a full-course review component. Must reference consolidation of all C1 structures from units 1–9.

Verify against quality checklist in spec.md.

### [ ] Step: Create reference and assessment files
Create the supporting reference documents:
- `course-c1-english/reference/grammar-scope-sequence.md` – Full table of grammar structures by unit with progression rationale, example sentences, and links to unit files
- `course-c1-english/reference/vocabulary-framework.md` – Academic Word List integration plan, thematic word lists per unit (~30-40 items each), collocations bank, phrasal verbs list, word formation guide
- `course-c1-english/assessment/evaluation-criteria.md` – CEFR C1 rubrics for each skill (Reading, Writing, Listening, Speaking, Grammar & Vocabulary), assessment weighting table, sample descriptors per band

Verify: rubrics reference CEFR C1 descriptors, grammar sequence matches unit plan, vocabulary framework covers all 10 units.
