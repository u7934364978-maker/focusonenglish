# Technical Specification — Unidad 4, Curso A1 de Focus on English

## 1. Technical Context

- **Language**: TypeScript (strict mode via `tsconfig.json`)
- **Framework**: Next.js (project root: `focusonenglish/`)
- **Import alias**: `@/` → `src/`
- **Key type**: `Exercise` from `@/lib/exercise-generator`
- **Lint**: `npm run lint` (next lint)
- **Typecheck**: `npm run type-check` (tsc --noEmit)
- **Tests**: `npm run test` (jest)

## 2. Files to Create / Modify

| File (relative to `focusonenglish/src/lib/course/a1/`) | Action |
|---|---|
| `unit-4-lesson-1-grammar.ts` | Create |
| `unit-4-lesson-2-vocabulary.ts` | Create |
| `unit-4-lesson-3-reading.ts` | Create |
| `unit-4-lesson-4-listening.ts` | Create |
| `unit-4-lesson-5-speaking.ts` | Create |
| `unit-4-lesson-6-writing.ts` | Create |
| `unit-4-lessons-index.ts` | Create |
| `unit-4.ts` | Replace (currently 1515-line old-format file) |

All files live at:
`/Users/lidia/ZenflowProjects/new-project/focusonenglish/src/lib/course/a1/`

## 3. Data Model

The `Exercise` interface (from `src/lib/exercise-generator.ts`):

```ts
interface Exercise {
  id: string;
  type: ExerciseType;   // see below
  level: CEFRLevel;     // 'A1'
  topic: string;
  topicName: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  content: any;         // structure varies by type
  transcript?: string;  // reading / listening only
  audioUrl?: string;    // listening only (keep commented)
}
```

Supported `ExerciseType` values used in Unit 3 (and to reuse in Unit 4):
`'fill-blank'`, `'multiple-choice'`, `'matching'`, `'true-false'`, `'sentence-building'`, `'reading'`, `'listening'`, `'pronunciation'`, `'writing'`

### `content` shapes by exercise type

| type | required content fields |
|---|---|
| `fill-blank` | `title`, `instructions`, `questions[]{question, options?, correctAnswer, acceptableAnswers?, explanation}` |
| `multiple-choice` | `title`, `instructions`, `questions[]{question, options[], correctAnswer (index), explanation}` |
| `matching` | `title`, `instructions`, `pairs[]{id, left, right}` |
| `true-false` | `title`, `instructions`, `questions[]{question, options[], correctAnswer ('True'/'False'), explanation}` |
| `sentence-building` | `title`, `instructions`, `correctSentence`, `words[]` |
| `reading` | `title`, `instructions`, `questions[]{question, options[], correctAnswer (index), explanation}` + top-level `transcript` |
| `listening` | `title`, `instructions`, `questions[]{question, options[], correctAnswer (index), explanation}` + top-level `transcript` + commented `audioUrl` |
| `pronunciation` | `title`, `instructions`, `targetText`, `expectedResponse` |
| `writing` | `title`, `instructions`, `prompt`, `minWords`, `maxWords` |

## 4. Token Format Rules (critical — see PRD §3)

- **All student-visible text** uses `[[English|Spanish]]` format, word-by-word or phrase-by-phrase.
- **Instructions** (`content.instructions`): plain Spanish; no tokens; no embedded English model phrases; avoid lone "a" (use "Completa", "Contesta", "Elige", "Ordena", "Escribe", "Lee", "Di", "Escucha").
- **MC options**: single token per option, even for long phrases: `'[[This is a pen.|Esto es un bolígrafo.]]'`.
- **T/F options**: always `['[[True|Verdadero]]', '[[False|Falso]]']`.
- **T/F question**: single token: `'[[English statement.|Enunciado en español.]]'`.
- **MC question**: single short token ≤ 55 chars English.
- **Proper names as options**: all with format `[[Name|Name]]` (with tilde if needed).
- **Speaking `targetText`**: word-by-word tokens. `expectedResponse`: plain English.
- **Writing `prompt`**: token format. `instructions`: plain Spanish.

## 5. Implementation Approach per Lesson

### L1 — Grammar (`unit-4-lesson-1-grammar.ts`)

Mirror of `unit-3-lesson-1-grammar.ts`.

```
LESSON_TITLE = 'Artículos, plurales y demostrativos'
topic = 'Articles and Plurals'
topicName = 'Grammar'
IDs: a1-u4-l1-g1 … a1-u4-l1-g15
```

**Distribution:**
- Ex 1–5: `fill-blank` — choose *a*, *an*, or plural form to complete sentence
  - Ex 1: `a + consonant` (*a book*)
  - Ex 2: `an + vowel` (*an eraser*)
  - Ex 3: plural *-s* (*pens*)
  - Ex 4: demonstrative singular *this/that*
  - Ex 5: demonstrative plural *these/those*
- Ex 6–10: `multiple-choice` — choose correct article/plural/demonstrative form
  - Ex 6: *a* vs *an* choice
  - Ex 7: *this* vs *that* (singular near/far)
  - Ex 8: *these* vs *those* (plural near/far)
  - Ex 9: correct plural form
  - Ex 10: full sentence selection (article + noun)
- Ex 11–13: `sentence-building` — reorder words
  - Ex 11: *This is a desk.*
  - Ex 12: *These are pens.*
  - Ex 13: *That is an eraser.*
- Ex 14–15: `true-false` — validate grammar statement
  - Ex 14: false statement (wrong article)
  - Ex 15: true statement (correct demonstrative)

### L2 — Vocabulary (`unit-4-lesson-2-vocabulary.ts`)

Mirror of `unit-3-lesson-2-vocabulary.ts`.

```
LESSON_TITLE = 'Vocabulario: números, objetos y colores'
topic values: 'Numbers', 'Classroom Objects', 'Colors'
topicName = 'Vocabulary'
IDs: a1-u4-l2-v1 … a1-u4-l2-v15
```

**Distribution:**
- Ex 1–6: `multiple-choice` — definition/context → word
  - Ex 1: number recognition (one–five)
  - Ex 2: number recognition (six–ten)
  - Ex 3: classroom object (*pen*, *book*, *ruler*)
  - Ex 4: classroom object (*eraser*, *bag*, *desk*)
  - Ex 5: color (*red*, *blue*, *green*)
  - Ex 6: color (*yellow*, *black*, *white*)
- Ex 7–10: `matching` — English ↔ Spanish pairs
  - Ex 7: numbers 1–5 pairs
  - Ex 8: numbers 6–10 pairs
  - Ex 9: classroom objects (5 pairs)
  - Ex 10: colors (5 pairs)
- Ex 11–13: `fill-blank` — complete with correct vocab word
  - Ex 11: number in context (*There are ___ books.*)
  - Ex 12: classroom object in context
  - Ex 13: color in context
- Ex 14–15: `multiple-choice` — vocab in sentence context
  - Ex 14: choose correct number/object combo
  - Ex 15: choose correct color/object combo

### L3 — Reading (`unit-4-lesson-3-reading.ts`)

Mirror of `unit-3-lesson-3-reading.ts` (15 individual exercises, each with `transcript: READING_TRANSCRIPT`).

```
LESSON_TITLE = 'Comprensión lectora'
type = 'reading'
topic = 'Classroom'
topicName = 'Reading'
IDs: a1-u4-l3-reading-1 … a1-u4-l3-reading-15
```

**Transcript constant** (`READING_TRANSCRIPT`): First-person classroom description by Pablo (from PRD §6), tokenised word-by-word:
```
Hi! My name is Pablo. This is my classroom. It is a big room. There is a board on the wall.
There are twenty chairs and ten desks. On my desk, there is a blue pen, a red notebook and
an eraser. My pencil is green. My bag is black. Are there books on your desk? Yes, there are
three books. Is that a ruler? Yes, it is! This is a great classroom!
```

**Distribution:**
- Ex 1–8: `reading` + `multiple-choice` (4 options each, token per option)
  - 1: Who is speaking? (Pablo)
  - 2: What is in the room? (board on the wall)
  - 3: How many chairs? (twenty)
  - 4: What is on Pablo's desk? (blue pen, red notebook, eraser)
  - 5: What color is the pencil? (green)
  - 6: What color is the bag? (black)
  - 7: How many books on the desk? (three)
  - 8: What does "Is that a ruler?" confirm? (Yes, it is)
- Ex 9–12: `reading` + `true-false` (token question, True/False options)
  - 9: The room is small. (False)
  - 10: There is a board on the wall. (True)
  - 11: Pablo's bag is green. (False)
  - 12: There are three books on Pablo's desk. (True)
- Ex 13–15: `reading` + `multiple-choice` synthesis
  - 13: Main topic of the text
  - 14: What grammar structure does "This is a big room" exemplify?
  - 15: Which demonstrative is used for plural objects nearby?

### L4 — Listening (`unit-4-lesson-4-listening.ts`)

Mirror of `unit-3-lesson-4-listening.ts` (15 individual exercises, each with `transcript: LISTENING_TRANSCRIPT` and commented `// audioUrl: '/audio/a1-u4-l4-listening.mp3'`).

```
LESSON_TITLE = 'Comprensión auditiva'
type = 'listening'
topic = 'Classroom'
topicName = 'Listening'
IDs: a1-u4-l4-listening-1 … a1-u4-l4-listening-15
```

**Transcript constant** (`LISTENING_TRANSCRIPT`): Dialogue between Student 1 and Student 2 (from PRD §7), tokenised word-by-word:
```
Student 1: "What is this?" Student 2: "It is a pencil. It is yellow." Student 1: "And those?"
Student 2: "Those are erasers. There are four erasers." Student 1: "Is that a bag?"
Student 2: "Yes, it is. It is a red bag." Student 1: "How many books are there?"
Student 2: "There are six books on the desk."
```

**Distribution:**
- Ex 1–8: `listening` + `multiple-choice`
  - 1: What is the first object mentioned? (pencil)
  - 2: What color is the pencil? (yellow)
  - 3: What are "those"? (erasers)
  - 4: How many erasers? (four)
  - 5: Is that a bag? (Yes, it is)
  - 6: What color is the bag? (red)
  - 7: How many books on the desk? (six)
  - 8: Who asks the questions? (Student 1)
- Ex 9–12: `listening` + `true-false`
  - 9: The pencil is red. (False — it is yellow)
  - 10: There are four erasers. (True)
  - 11: The bag is blue. (False — it is red)
  - 12: There are six books on the desk. (True)
- Ex 13–15: `listening` + `multiple-choice` synthesis
  - 13: Main topic of the dialogue
  - 14: Which demonstrative is used for plural objects far away? (those)
  - 15: What grammar structure is "There are six books"?

### L5 — Speaking (`unit-4-lesson-5-speaking.ts`)

Mirror of `unit-3-lesson-5-speaking.ts`.

```
LESSON_TITLE = 'Expresión oral'
type = 'pronunciation'
topic = 'Articles and Plurals' / 'Classroom' / 'Colors'
topicName = 'Speaking'
IDs: a1-u4-l5-s1 … a1-u4-l5-s15
```

**Distribution:**
- Ex 1–4: repeat phrase (`instructions`: "Escucha la frase y repítela en voz alta." / "Escucha y repite en voz alta.")
  - 1: *This is a pen.*
  - 2: *That is an eraser.*
  - 3: *These are books.*
  - 4: *Those are chairs.*
- Ex 5–7: read aloud (`instructions`: "Lee la frase en voz alta.")
  - 5: *There is a board on the wall.*
  - 6: *There are three red pens on the desk.*
  - 7: *My bag is black and my pencil is green.*
- Ex 8–11: answer question (`instructions`: "Contesta en voz alta.")
  - 8: *What is this?* → *It is a/an [object].*
  - 9: *Is that a book?* → *Yes, it is. / No, it isn't.*
  - 10: *How many pens are there?* → *There are [number] pens.*
  - 11: *Are these rulers?* → *Yes, they are. / No, they aren't.*
- Ex 12–15: produce guided phrase
  - 12: say what color an object is
  - 13: describe two objects (this/that)
  - 14: ask and answer about quantity
  - 15: describe classroom using this/that/these/those

**Rules**: `instructions` = plain Spanish without English model phrases. Model goes only in `targetText`. `expectedResponse` = plain English.

### L6 — Writing (`unit-4-lesson-6-writing.ts`)

Mirror of `unit-3-lesson-6-writing.ts`.

```
LESSON_TITLE = 'Expresión escrita'
topic = 'Articles and Plurals' / 'Classroom'
topicName = 'Writing'
IDs: a1-u4-l6-w1 … a1-u4-l6-w15
```

**Distribution:**
- Ex 1–5: `fill-blank` — write missing word(s)
  - 1: complete with *a* or *an*
  - 2: complete with *a* or *an* (vowel)
  - 3: write the plural of a noun
  - 4: complete with *this*, *that*, *these*, or *those*
  - 5: complete with *this*, *that*, *these*, or *those*
- Ex 6–8: `sentence-building`
  - 6: *This is a notebook.*
  - 7: *These are pencils.*
  - 8: *There are four books on the desk.*
- Ex 9–12: `writing` guided (1–3 sentences)
  - 9: describe one classroom object using *This is a/an …*
  - 10: write two sentences about objects on desk (singular + plural)
  - 11: describe an object's color (*It is a red …*)
  - 12: ask and answer: *Is that a …? Yes/No …*
- Ex 13–15: `writing` free (4–6 sentences)
  - 13: describe your classroom (objects, colors, quantities)
  - 14: write about what is on your desk using *a/an* and plurals
  - 15: use *this/that/these/those* for 4–6 sentences about objects near and far

**Rules**: `instructions` plain Spanish, no lone "a", no English model phrases. `prompt` in token format. `content.instructions` for writing exercises: plain Spanish text.

### L7 — Index (`unit-4-lessons-index.ts`)

Exact mirror of `unit-3-lessons-index.ts` replacing `3` → `4`:

```ts
export const UNIT_4_LESSONS = { grammar, vocabulary, reading, listening, speaking, writing } as const;
export const UNIT_4_ALL_LESSONS: Exercise[][]
export const UNIT_4_ALL_EXERCISES: Exercise[]   // flat()
```

### L8 — Entry point (`unit-4.ts`)

Replace current 1515-line file entirely with the `unit-3.ts` pattern:

```ts
import { UNIT_4_ALL_EXERCISES } from './unit-4-lessons-index';
export const UNIT_TITLE = 'Essential Vocabulary: Numbers and Objects';
export const UNIT_4_EXERCISES = UNIT_4_ALL_EXERCISES;
```

## 6. ID Scheme

| Lesson | Pattern | Range |
|---|---|---|
| L1 Grammar | `a1-u4-l1-g{N}` | g1–g15 |
| L2 Vocabulary | `a1-u4-l2-v{N}` | v1–v15 |
| L3 Reading | `a1-u4-l3-reading-{N}` | reading-1–reading-15 |
| L4 Listening | `a1-u4-l4-listening-{N}` | listening-1–listening-15 |
| L5 Speaking | `a1-u4-l5-s{N}` | s1–s15 |
| L6 Writing | `a1-u4-l6-w{N}` | w1–w15 |

## 7. Verification Approach

After each file is created, from `focusonenglish/` run:

```bash
npm run type-check
npm run lint
```

No temporary scripts to be committed. Verify exercise counts (15 per lesson × 6 lessons = 90 total) by inspecting array lengths.

## 8. Constraints

- No temporary verification scripts in the project.
- No plain English text in MC options.
- No lone "a" in Spanish instructions.
- No nested questions in L3/L4 — one exercise = one question.
- No English model phrases in L5 `instructions`.
- No multiple tokens per MC option (use one composite token).
- `audioUrl` in L4 must remain commented (`// audioUrl: '...'`).
