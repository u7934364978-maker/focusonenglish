# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 22ed7911-bda4-4315-be5a-2b852ec54b7c -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: e6f85e51-483a-44d9-894a-9dced4c26da9 -->

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
<!-- chat-id: bad8eb35-e058-49f1-84f1-cfc762c11317 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [x] Step: Create unit-5-lesson-1-grammar.ts
<!-- chat-id: 2fba2563-536e-4aaf-995a-89cfc3cddcca -->
- File: `src/lib/course/a1/unit-5-lesson-1-grammar.ts`
- Export: `UNIT_5_LESSON_1_GRAMMAR: Exercise[]`
- IDs: `a1-u5-l1-g1` … `a1-u5-l1-g15`
- topic: `'Simple Present'`, topicName: `'Grammar'`
- LESSON_TITLE: `'Present Simple: Everyday Actions'`
- Ex 1–5: `fill-blank` — complete sentence with correct present simple form (I/you/we/they vs he/she/it+-s), single `questions` item, options as tokens, `correctAnswer` = string token
- Ex 6–10: `multiple-choice` — choose correct verb form or correct sentence, 3–4 token options, `correctAnswer` = number index
- Ex 11–13: `sentence-building` — `correctSentence` (token string) + `words` (token array, shuffled); sentences: "He gets up early.", "She studies every day.", "They go to school."
- Ex 14–15: `true-false` — single `questions` item, question = single token, options = `['[[True|Verdadero]]', '[[False|Falso]]']`, `correctAnswer` = `'True'` or `'False'`
- Follow exact code style of `unit-3-lesson-1-grammar.ts` (no block comments at top, use const for LESSON_TITLE and INSTRUCTIONS_*)

### [x] Step: Create unit-5-lesson-2-vocabulary.ts
<!-- chat-id: fe0ca457-609e-4f18-ae33-0c8a2be7d3e3 -->
- File: `src/lib/course/a1/unit-5-lesson-2-vocabulary.ts`
- Export: `UNIT_5_LESSON_2_VOCABULARY: Exercise[]`
- IDs: `a1-u5-l2-v1` … `a1-u5-l2-v15`
- topic: `'Daily Routines'`, topicName: `'Vocabulary'`
- LESSON_TITLE: `'Vocabulario: verbos de rutina'`
- Ex 1–6: `multiple-choice` — definition/context → choose correct verb, 4 token options, `correctAnswer` = index
- Ex 7–10: `matching` — `pairs` array; `left`: `'[[English|Spanish]]'`, `right`: plain Spanish text (no token); 5 pairs each
  - Ex 7: work/study/eat/drink/sleep
  - Ex 8: play/wake up/get up/go/come
  - Ex 9: sentence phrases (I work. / She studies. / etc.)
  - Ex 10: sentence phrases (She eats breakfast. / He drinks coffee. / etc.)
- Ex 11–13: `fill-blank` — sentence with blank, options as tokens, `correctAnswer` = string token
- Ex 14–15: `multiple-choice` — situational context, 4 token options, `correctAnswer` = index

### [x] Step: Create unit-5-lesson-3-reading.ts
<!-- chat-id: 58832973-260f-4d4a-8b21-25e3f61ba055 -->
- File: `src/lib/course/a1/unit-5-lesson-3-reading.ts`
- Export: `UNIT_5_LESSON_3_READING: Exercise[]`
- IDs: `a1-u5-l3-reading-1` … `a1-u5-l3-reading-15`
- topic: `'Daily Routines'`, topicName: `'Reading'`
- LESSON_TITLE: `'Comprensión lectora'`
- Constant `READING_TRANSCRIPT` — paragraph about María, 3rd person present simple, word-by-word token format (per spec section 4)
- Each exercise: `type: 'reading'`, `transcript: READING_TRANSCRIPT`, single `questions` array item
- Ex 1–8: `multiple-choice` comprehension questions about María's routine (questions as short tokens ≤55 EN chars), 4 token options
- Ex 9–12: `true-false` — question = single token statement, options = `['[[True|Verdadero]]', '[[False|Falso]]']`, `correctAnswer` = `'True'` or `'False'`
- Ex 13–15: `multiple-choice` synthesis questions (main topic, -s verbs, best summary)

### [x] Step: Create unit-5-lesson-4-listening.ts
<!-- chat-id: 00ce7983-45fa-436d-b99e-0bf389cffcb5 -->
- File: `src/lib/course/a1/unit-5-lesson-4-listening.ts`
- Export: `UNIT_5_LESSON_4_LISTENING: Exercise[]`
- IDs: `a1-u5-l4-listening-1` … `a1-u5-l4-listening-15`
- topic: `'Daily Routines'`, topicName: `'Listening'`
- LESSON_TITLE: `'Comprensión auditiva'`
- Constant `LISTENING_TRANSCRIPT` — dialogue David/Sara about daily routines, word-by-word token format
- Each exercise: `type: 'listening'`, `transcript: LISTENING_TRANSCRIPT`, commented `// audioUrl: '/audio/a1-u5-l4-listening.mp3'`, single `questions` item
- Ex 1–8: `multiple-choice` comprehension (questions as short tokens), 4 token options
- Ex 9–12: `true-false` — question = single token, options = `['[[True|Verdadero]]', '[[False|Falso]]']`, `correctAnswer` = `'True'` or `'False'`
- Ex 13–15: `multiple-choice` synthesis

### [x] Step: Create unit-5-lesson-5-speaking.ts
<!-- chat-id: c7b51493-6044-471c-9968-893642936751 -->
- File: `src/lib/course/a1/unit-5-lesson-5-speaking.ts`
- Export: `UNIT_5_LESSON_5_SPEAKING: Exercise[]`
- IDs: `a1-u5-l5-s1` … `a1-u5-l5-s15`
- topic: `'Daily Routines'`, topicName: `'Speaking'`
- LESSON_TITLE: `'Expresión oral'`
- type: `'pronunciation'` for all
- content fields: `title`, `instructions` (plain Spanish, no English model sentences), `targetText` (token word-by-word), `expectedResponse` (plain English text)
- Ex 1–4: repeat present simple sentences (1st and 3rd person)
- Ex 5–7: read aloud sentences about routines
- Ex 8–11: answer questions about routines orally (instructions in Spanish, targetText = the question in tokens)
- Ex 12–15: produce guided sentences about own routine (instructions in Spanish, targetText = model with blank)

### [ ] Step: Create unit-5-lesson-6-writing.ts
- File: `src/lib/course/a1/unit-5-lesson-6-writing.ts`
- Export: `UNIT_5_LESSON_6_WRITING: Exercise[]`
- IDs: `a1-u5-l6-w1` … `a1-u5-l6-w15`
- topic: `'Daily Routines'`, topicName: `'Writing'`
- LESSON_TITLE: `'Expresión escrita'`
- Instructions: plain Spanish, no `[[...|...]]` except quoted English verbs; no loose "a" — use "Contesta" instead of "Responde a"
- Ex 1–5: `fill-blank` — single `questions` item, `correctAnswer` = plain English string, `acceptableAnswers` array
  - w1: work, w2: goes, w3: eat, w4: drinks, w5: sleep
- Ex 6–8: `sentence-building` — `correctSentence` (token) + `words` (token array)
  - w6: "She gets up early every day.", w7: "He goes to work at eight.", w8: "They play football in the evening."
- Ex 9–12: `writing` — `prompt` (token format), `minWords`, `maxWords` (1–3 sentences)
- Ex 13–15: `writing` — `prompt` (token format), `minWords: 25+`, `maxWords: 60+` (4–6 sentences free composition)

### [ ] Step: Create unit-5-lessons-index.ts and unit-5.ts
- File `src/lib/course/a1/unit-5-lessons-index.ts`: import all 6 lesson exports, export `UNIT_5_LESSONS`, `UNIT_5_ALL_LESSONS`, `UNIT_5_ALL_EXERCISES` following exact pattern of `unit-3-lessons-index.ts`
- File `src/lib/course/a1/unit-5.ts`: import `UNIT_5_ALL_EXERCISES`, export `UNIT_TITLE = 'Simple Present: Everyday Actions'` and `UNIT_5_EXERCISES`

### [ ] Step: Verify build
- Run `npm run build` and confirm no TypeScript errors
- Fix any type errors found in the new files
