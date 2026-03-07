# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 152e2b26-3245-43cb-8cac-ccb5c694c96d -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 44fb3c6a-de08-40a2-8ba1-76e03bbd3db5 -->

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
<!-- chat-id: db8c5c13-be2e-49f3-9b47-ee9b2426a1f6 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [x] Step: Create unit-4-lesson-1-grammar.ts
<!-- chat-id: b3ab7e8b-f2fb-430b-b10b-c0e7b3aad464 -->
- Read `unit-3-lesson-1-grammar.ts` for exact pattern
- Create `src/lib/course/a1/unit-4-lesson-1-grammar.ts`
- 15 exercises: Ex 1–5 fill-blank, Ex 6–10 multiple-choice, Ex 11–13 sentence-building, Ex 14–15 true-false
- Topic: articles a/an, regular plurals, demonstratives this/that/these/those
- IDs: a1-u4-l1-g1 … a1-u4-l1-g15
- All MC options as single composite tokens; T/F options as [[True|Verdadero]]/[[False|Falso]]; instructions in plain Spanish

### [x] Step: Create unit-4-lesson-2-vocabulary.ts
<!-- chat-id: b3f30fe7-1de6-4e83-9a18-5489a81476ed -->
- Read `unit-3-lesson-2-vocabulary.ts` for exact pattern
- Create `src/lib/course/a1/unit-4-lesson-2-vocabulary.ts`
- 15 exercises: Ex 1–6 multiple-choice, Ex 7–10 matching, Ex 11–13 fill-blank, Ex 14–15 multiple-choice
- Topic: numbers 1–10, classroom objects, basic colors
- IDs: a1-u4-l2-v1 … a1-u4-l2-v15

### [x] Step: Create unit-4-lesson-3-reading.ts
<!-- chat-id: e7f3ccbf-f820-42a1-a77b-71b5a88eb9cd -->
- Read `unit-3-lesson-3-reading.ts` for exact pattern (15 individual exercises, not nested)
- Create `src/lib/course/a1/unit-4-lesson-3-reading.ts`
- Define `READING_TRANSCRIPT` constant (Pablo classroom text, word-by-word [[word|palabra]] tokens)
- 15 individual exercises each with `transcript: READING_TRANSCRIPT`
- Ex 1–8 reading+multiple-choice (4 options), Ex 9–12 reading+true-false, Ex 13–15 reading+multiple-choice synthesis
- IDs: a1-u4-l3-reading-1 … a1-u4-l3-reading-15

### [x] Step: Create unit-4-lesson-4-listening.ts
<!-- chat-id: 16bda2ce-21d7-4a5a-829d-cde2fbed9aac -->
- Read `unit-3-lesson-4-listening.ts` for exact pattern
- Create `src/lib/course/a1/unit-4-lesson-4-listening.ts`
- Define `LISTENING_TRANSCRIPT` constant (Student 1 / Student 2 dialogue, word-by-word tokens)
- 15 individual exercises each with `transcript: LISTENING_TRANSCRIPT` and `// audioUrl: '/audio/a1-u4-l4-listening.mp3'` commented
- Ex 1–8 listening+multiple-choice, Ex 9–12 listening+true-false, Ex 13–15 listening+multiple-choice synthesis
- IDs: a1-u4-l4-listening-1 … a1-u4-l4-listening-15

### [x] Step: Create unit-4-lesson-5-speaking.ts
<!-- chat-id: a55ea459-1422-4f0c-9033-5d0f0c678427 -->
- Read `unit-3-lesson-5-speaking.ts` for exact pattern
- Create `src/lib/course/a1/unit-4-lesson-5-speaking.ts`
- 15 pronunciation exercises: Ex 1–4 repeat, Ex 5–7 read aloud, Ex 8–11 answer questions, Ex 12–15 produce guided phrase
- `instructions` in plain Spanish (no English model phrases); `targetText` word-by-word tokens; `expectedResponse` plain English
- IDs: a1-u4-l5-s1 … a1-u4-l5-s15

### [ ] Step: Create unit-4-lesson-6-writing.ts
- Read `unit-3-lesson-6-writing.ts` for exact pattern
- Create `src/lib/course/a1/unit-4-lesson-6-writing.ts`
- 15 exercises: Ex 1–5 fill-blank, Ex 6–8 sentence-building, Ex 9–12 writing guided (1–3 sentences), Ex 13–15 writing free (4–6 sentences)
- `instructions` plain Spanish (no lone "a"); `prompt` in token format
- IDs: a1-u4-l6-w1 … a1-u4-l6-w15

### [ ] Step: Create unit-4-lessons-index.ts and replace unit-4.ts
- Read `unit-3-lessons-index.ts` and `unit-3.ts` for exact pattern
- Create `src/lib/course/a1/unit-4-lessons-index.ts` exporting `UNIT_4_LESSONS`, `UNIT_4_ALL_LESSONS`, `UNIT_4_ALL_EXERCISES`
- Replace `src/lib/course/a1/unit-4.ts` with new entry point importing from index, exporting `UNIT_TITLE` and `UNIT_4_EXERCISES`

### [ ] Step: Verify type-check and lint
- From `focusonenglish/` run `npm run type-check`
- Run `npm run lint`
- Fix any errors found; confirm 90 total exercises (6 lessons × 15)
