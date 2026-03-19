# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 19d28a7a-19dc-49cc-8f20-006c8c599548 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Focus on **what** the feature should do and **why**, not **how** it should be built. Do not include technical implementation details, technology choices, or code-level decisions — those belong in the Technical Specification.

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 07556ca3-6435-4d76-9c72-b89291873f41 -->

Create a technical specification based on the PRD in `{@artifacts_path}/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Do not include implementation steps, phases, or task breakdowns — those belong in the Planning step.

Save to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Verification approach using project lint/test commands

### [x] Step: Planning
<!-- chat-id: f301e3c3-be51-4e27-bb89-9c9382e31dd2 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [x] Step: Rewrite curriculum mapping
<!-- chat-id: 2096c59c-02e6-4734-b63f-7938bc323ec6 -->

Rewrite `src/lib/c2-units/curriculum.ts` with the new 10-module × 60-unit thematic structure.

- Replace `C2_CURRICULUM_MAPPING` array (currently 60 entries with old CPE-exam-part-focused modules) with the new 60-entry mapping defined in `spec.md`
- Keep the existing `UnitMapping` interface unchanged (`unit`, `module`, `title`, `grammar`, `topic`, `skills`)
- All 60 units must be present with correct module assignments (M1 → units 1–6, M2 → 7–12, … M10 → 55–60)
- Each entry must have the grammar slug(s) and topic slug from the spec
- Verify: `npx tsc --noEmit` passes on the file

### [x] Step: Update utils.ts with 6-lesson structure
<!-- chat-id: 4fdb8be6-1021-4abf-8d7c-caf123df9504 -->

Update `src/lib/c2-units/utils.ts` to document and expose the 6-lesson-per-unit pattern.

- Add a `C2LessonBlock` interface describing the lesson type (grammar, grammar-context, reading, listening, writing, speaking)
- Add a `LESSON_TYPES` constant array with the 6 named lesson types matching the spec
- Keep `createC2Unit()` and `genC2Id()` signatures unchanged (backward-compatible)
- Verify: `npx tsc --noEmit` passes on the file

### [ ] Step: Update course-data-c2.ts with 10 modules

Update `src/lib/course-data-c2.ts` to replace the 6-module CPE-exam slice structure with 10 thematic modules × 6 units each.

- Replace `C2_MODULES` array from 6 entries (10 units each) to 10 entries (6 units each) with the new module IDs and titles from the spec
- Slices: `slice(0,6)`, `slice(6,12)`, ..., `slice(54,60)`
- Update `C2_FULL_COURSE.title` to `'Inglés C2 Mastery / Proficiency'`
- Verify: `npx tsc --noEmit` passes on the file

### [ ] Step: Update generate-c2-course.ts script

Update `scripts/generate-c2-course.ts` to generate 6 blocks per unit (instead of 10) with lesson-type-aware prompts.

- Change the generation loop from `b <= 10` to `b <= 6`
- Add a `LESSON_TYPE_MAP` that maps block index 1–6 to lesson type: grammar, grammar-context, reading, listening, writing, speaking
- Update the OpenAI prompt per block to reflect the lesson type and use C2-appropriate exercise types per lesson (key-word-transformation / open-cloze / gapped-text for grammar; multiple-matching / multiple-choice-cloze for reading; writing-analysis / paraphrasing for writing; speaking-analysis for speaking)
- Update block `type` field to use the lesson type name instead of `'grammar'`/`'vocabulary'` alternation
- Verify: `npx tsc --noEmit` passes on the script

### [ ] Step: Regenerate all 60 unit files

Run the updated generation script to produce all 60 `src/lib/c2-units/unit-{1..60}.ts` files with the new curriculum.

- Delete existing unit files that need to be regenerated (all 60)
- Run `npx ts-node scripts/generate-c2-course.ts` (or equivalent) with `OPENAI_API_KEY` set to generate all units
- Each unit must export `C2_UNIT_N` (Lesson) with exactly 6 exercise blocks, each block with 10 questions
- Verify: `node scripts/validate-c2-structure.mjs` passes; `ALL_C2_UNITS` length is 60; `C2_MODULES` has 10 entries each with 6 units

### [ ] Step: Final verification

Run full verification suite to confirm correctness.

- `npx tsc --noEmit` — no TypeScript errors across all files
- `npx eslint src/lib/c2-units/ src/lib/course-data-c2.ts scripts/generate-c2-course.ts` — no lint errors
- `node scripts/validate-c2-structure.mjs` — structural validation passes
- Fix any errors found and record results
