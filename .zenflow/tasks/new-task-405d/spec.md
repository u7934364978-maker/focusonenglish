# Technical Specification — Unidad 5 A1: Simple Present: Everyday Actions

## 1. Technical Context

| Item | Value |
|---|---|
| **Language** | TypeScript 5.7.2 |
| **Framework** | Next.js 15 (App Router) |
| **Import alias** | `@/lib/exercise-generator` → `Exercise` interface |
| **Reference files** | `src/lib/course/a1/unit-3-lesson-*.ts`, `unit-3-lessons-index.ts`, `unit-3.ts` |
| **No tests required** | Content-only files (no logic, no runtime code) |
| **Lint/Type check** | `npm run build` (tsc + Next.js build) |

### `Exercise` interface (from `src/lib/exercise-generator.ts`)
```ts
interface Exercise {
  id: string;
  type: ExerciseType;  // 'fill-blank' | 'multiple-choice' | 'matching' | 'sentence-building' | 'true-false' | 'reading' | 'listening' | 'pronunciation' | 'writing'
  level: CEFRLevel;    // 'A1'
  topic: string;
  topicName: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  content: any;
  transcript?: string;
  audioUrl?: string;
}
```

---

## 2. Files to Create

```
src/lib/course/a1/
├── unit-5-lesson-1-grammar.ts      → export UNIT_5_LESSON_1_GRAMMAR: Exercise[]
├── unit-5-lesson-2-vocabulary.ts   → export UNIT_5_LESSON_2_VOCABULARY: Exercise[]
├── unit-5-lesson-3-reading.ts      → export UNIT_5_LESSON_3_READING: Exercise[]
├── unit-5-lesson-4-listening.ts    → export UNIT_5_LESSON_4_LISTENING: Exercise[]
├── unit-5-lesson-5-speaking.ts     → export UNIT_5_LESSON_5_SPEAKING: Exercise[]
├── unit-5-lesson-6-writing.ts      → export UNIT_5_LESSON_6_WRITING: Exercise[]
├── unit-5-lessons-index.ts         → UNIT_5_LESSONS, UNIT_5_ALL_LESSONS, UNIT_5_ALL_EXERCISES
└── unit-5.ts                       → UNIT_TITLE, UNIT_5_EXERCISES
```

---

## 3. Structural Patterns (from Unit 3)

### File header
```ts
import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '...';
const INSTRUCTIONS_XXX = '...';  // plain Spanish, NO [[...|...]] tokens (except quoted English words)

export const UNIT_5_LESSON_N_XXX: Exercise[] = [ ... ];
```

### Common fields (ALL exercises)
```ts
{
  id: 'a1-u5-lN-xxx-N',
  type: '...',
  level: 'A1',
  topic: '...',      // see per-lesson spec
  difficulty: 'easy',
  content: { title: LESSON_TITLE, instructions: '...', ... },
  topicName: '...',  // see per-lesson spec
}
```

### Token format rules
- **Instructions**: plain Spanish text. NO `[[...|...]]` tokens. Exception: English words cited between quotes use token, e.g. `"[[work|trabajar]]"`.
- **Multiple-choice options**: each option = one single token `'[[English phrase|Traducción completa]]'`
- **True/False options**: always `['[[True|Verdadero]]', '[[False|Falso]]']`
- **True/False question**: single token `'[[English statement.|Enunciado en español.]]'`
- **Questions (fill-blank, MC)**: short token (≤55 English chars); abbreviate if longer.
- **Matching left**: `'[[English|Spanish]]'`; **right**: plain Spanish text, no token.
- **Proper names as options**: all with `[[Name|Name]]` or none.
- **Words equal in EN/ES** (e.g. "total"): plain text, NOT inside token.
- `correctAnswer` for fill-blank: string (the expected word/phrase).
- `correctAnswer` for multiple-choice with index: number (0-based).
- `correctAnswer` for true-false: `'True'` or `'False'` (plain string, not token).

---

## 4. Lesson-by-Lesson Specification

### Lesson 1 — Grammar (`unit-5-lesson-1-grammar.ts`)

- **Export**: `UNIT_5_LESSON_1_GRAMMAR`
- **IDs**: `a1-u5-l1-g1` … `a1-u5-l1-g15`
- **topic**: `'Simple Present'` | **topicName**: `'Grammar'`
- **LESSON_TITLE**: `'Present Simple: Everyday Actions'`

| Exercises | Type | Content |
|---|---|---|
| 1–5 | `fill-blank` | Complete with correct present simple form (I/you/we/they vs he/she/it+-s). Single `questions` array item. Options as tokens. `correctAnswer` = string token. |
| 6–10 | `multiple-choice` | Choose correct verb form or correct sentence. 3–4 options as tokens. `correctAnswer` = number index. |
| 11–13 | `sentence-building` | `correctSentence` (token string) + `words` array (tokens, shuffled). No `questions` array. |
| 14–15 | `true-false` | `questions` array, 1 item. Question = single token. Options = `['[[True|Verdadero]]', '[[False|Falso]]']`. `correctAnswer` = `'True'` or `'False'`. |

**Grammar content** (present simple, vocabulary: work, study, eat, drink, sleep, play, wake up, get up, go, come):
- Fills 1–5: `I work`, `She works`, `They eat`, `He drinks`, `We play` type sentences
- MC 6–10: choose correct 3rd-person form, identify correct sentence structure
- Sentence-building 11–13: reorder `He gets up early.`, `She studies every day.`, `They go to school.`
- TF 14–15: grammatical rule statements

---

### Lesson 2 — Vocabulary (`unit-5-lesson-2-vocabulary.ts`)

- **Export**: `UNIT_5_LESSON_2_VOCABULARY`
- **IDs**: `a1-u5-l2-v1` … `a1-u5-l2-v15`
- **topic**: `'Daily Routines'` | **topicName**: `'Vocabulary'`
- **LESSON_TITLE**: `'Vocabulario: verbos de rutina'`

| Exercises | Type | Content |
|---|---|---|
| 1–6 | `multiple-choice` | Definition or contextual sentence → choose correct verb. 4 options as tokens. |
| 7–10 | `matching` | `pairs` array. `left`: `'[[English|Spanish]]'`, `right`: plain Spanish. 4–5 pairs per exercise. |
| 11–13 | `fill-blank` | Sentence with blank → choose correct routine verb. Options as tokens. `correctAnswer` = string token. |
| 14–15 | `multiple-choice` | Situational context → choose correct verb. 4 options. |

**Vocabulary**: work, study, eat, drink, sleep, play, wake up, get up, go, come

**Matching exercises** (pairs, `left`→`right`):
- Ex 7: `[[Work|Trabajar]]`→`Trabajar`, `[[Study|Estudiar]]`→`Estudiar`, `[[Eat|Comer]]`→`Comer`, `[[Drink|Beber]]`→`Beber`, `[[Sleep|Dormir]]`→`Dormir`
- Ex 8: `[[Play|Jugar]]`→`Jugar`, `[[Wake up|Despertarse]]`→`Despertarse`, `[[Get up|Levantarse]]`→`Levantarse`, `[[Go|Ir]]`→`Ir`, `[[Come|Venir]]`→`Venir`
- Ex 9: phrases like `[[I work.|Yo trabajo.]]`→`Yo trabajo.`
- Ex 10: phrases like `[[She eats breakfast.|Ella desayuna.]]`→`Ella desayuna.`

---

### Lesson 3 — Reading (`unit-5-lesson-3-reading.ts`)

- **Export**: `UNIT_5_LESSON_3_READING`
- **IDs**: `a1-u5-l3-reading-1` … `a1-u5-l3-reading-15`
- **topic**: `'Daily Routines'` | **topicName**: `'Reading'`
- **LESSON_TITLE**: `'Comprensión lectora'`

**Constant `READING_TRANSCRIPT`** — paragraph about María, 3rd person present simple with -s endings:

```
[[María|María]] [[wakes|se despierta]] [[up|—]] [[at|a]] [[seven|las siete]] [[o'clock|en punto]] [[every|todos los]] [[day|días]]. [[She|Ella]] [[gets|se]] [[up|levanta]] [[quickly|rápidamente]] [[and|y]] [[goes|va]] [[to|al]] [[the|—]] [[bathroom|baño]]. [[Then|Luego]], [[she|ella]] [[eats|come]] [[breakfast|el desayuno]] [[and|y]] [[drinks|bebe]] [[a|un]] [[cup|taza]] [[of|de]] [[coffee|café]]. [[She|Ella]] [[works|trabaja]] [[in|en]] [[an|una]] [[office|oficina]] [[from|de]] [[nine|las nueve]] [[to|a]] [[five|las cinco]]. [[After|Después]] [[work|del trabajo]], [[she|ella]] [[studies|estudia]] [[English|inglés]] [[for|durante]] [[one|una]] [[hour|hora]]. [[In|Por]] [[the|la]] [[evening|tarde]], [[she|ella]] [[plays|juega]] [[with|con]] [[her|su]] [[children|hijos]] [[and|y]] [[they|ellos]] [[all|todos]] [[eat|comen]] [[dinner|la cena]] [[together|juntos]]. [[At|A]] [[ten|las diez]], [[María|María]] [[goes|va]] [[to|a]] [[bed|dormir]] [[and|y]] [[sleeps|duerme]] [[eight|ocho]] [[hours|horas]]. [[She|Ella]] [[comes|viene]] [[home|a casa]] [[happy|feliz]] [[every|cada]] [[day|día]].
```

**Instructions (plain Spanish)**:
- MC: `'Lee el texto y elige la respuesta correcta.'`
- TF: `'Lee el texto. Indica si la afirmación es verdadera o falsa.'`
- Synthesis: `'Lee el texto. Elige la mejor respuesta.'`

Each exercise: `type: 'reading'`, `transcript: READING_TRANSCRIPT`, single `questions` array item.

| Exercises | Focus |
|---|---|
| 1–8 | MC comprehension questions about María's routine |
| 9–12 | TF statements about the text |
| 13–15 | Synthesis / global comprehension MC |

**Comprehension questions** (short token, ≤55 English chars):
1. What time does María wake up? → `'[[What time does María wake up?|¿A qué hora se despierta María?]]'`
2. Where does she work? → `'[[Where does María work?|¿Dónde trabaja María?]]'`
3. What does she drink at breakfast? → `'[[What does she drink at breakfast?|¿Qué bebe en el desayuno?]]'`
4. What does she study? → `'[[What does she study?|¿Qué estudia?]]'`
5. What does she do in the evening? → `'[[What does she do in the evening?|¿Qué hace por las tardes?]]'`
6. What time does she go to bed? → `'[[What time does she go to bed?|¿A qué hora se va a dormir?]]'`
7. How many hours does she sleep? → `'[[How many hours does she sleep?|¿Cuántas horas duerme?]]'`
8. How does she come home? → `'[[How does she come home?|¿Cómo llega a casa?]]'`

**TF statements** (single token):
9. `'[[María wakes up at eight o\'clock.|María se despierta a las ocho.]]'` → False
10. `'[[She drinks tea at breakfast.|Ella bebe té en el desayuno.]]'` → False
11. `'[[She works in an office.|Ella trabaja en una oficina.]]'` → True
12. `'[[She studies English after work.|Ella estudia inglés después del trabajo.]]'` → True

**Synthesis** (MC, 4 options each):
13. Main topic of the text
14. Which verbs show 3rd person -s
15. Best summary of María's routine

---

### Lesson 4 — Listening (`unit-5-lesson-4-listening.ts`)

- **Export**: `UNIT_5_LESSON_4_LISTENING`
- **IDs**: `a1-u5-l4-listening-1` … `a1-u5-l4-listening-15`
- **topic**: `'Daily Routines'` | **topicName**: `'Listening'`
- **LESSON_TITLE**: `'Comprensión auditiva'`
- **audioUrl** line: `// audioUrl: '/audio/a1-u5-l4-listening.mp3'` (commented, present in every exercise)

**Constant `LISTENING_TRANSCRIPT`** — dialogue between David and Sara about daily routines (1st, 2nd, 3rd person present simple):

```
David: Hi Sara! Do you work every day?
Sara: Yes, I work from Monday to Friday. I wake up at six and get up at six thirty.
David: That's early! I get up at seven. My sister works too — she goes to the office at eight.
Sara: And what do you do after work?
David: I study English and then I eat dinner with my family. My brother plays football in the evenings.
Sara: I usually drink tea and read. I go to bed at ten. Do you sleep eight hours?
David: I sleep seven hours. My sister sleeps only six — she comes home very late.
Sara: Wow! We all have different routines!
```

Tokenized line by line (each word as `[[word|palabra]]`).

**Instructions (plain Spanish)**:
- MC: `'Escucha el audio y elige la respuesta correcta.'`
- TF: `'Escucha el audio. Indica si la afirmación es verdadera o falsa.'`
- Synthesis: `'Escucha el audio. Elige la mejor respuesta.'`

Each exercise: `type: 'listening'`, `transcript: LISTENING_TRANSCRIPT`, `// audioUrl: '/audio/a1-u5-l4-listening.mp3'` (commented), single `questions` array item.

| Exercises | Focus |
|---|---|
| 1–8 | MC comprehension about the dialogue |
| 9–12 | TF statements |
| 13–15 | Synthesis MC |

**Questions** (examples):
1. Does Sara work every day? → options: Yes Mon-Fri / Yes every day / No / Only weekends
2. What time does Sara wake up? → options about times
3. What time does David get up? → at seven
4. Where does David's sister go at eight? → to the office
5. What does David do after work? → studies English and eats dinner
6. What does David's brother do in the evenings? → plays football
7. What does Sara drink in the evening? → tea
8. How many hours does David sleep? → seven

**TF statements**:
9. `'[[Sara wakes up at seven o\'clock.|Sara se despierta a las siete.]]'` → False (she wakes at six)
10. `'[[David\'s brother plays football.|El hermano de David juega al fútbol.]]'` → True
11. `'[[David sleeps eight hours.|David duerme ocho horas.]]'` → False (seven)
12. `'[[David\'s sister comes home early.|La hermana de David llega a casa pronto.]]'` → False (very late)

**Synthesis**:
13. Main topic
14. Who has the most different schedule
15. Which grammatical form is used most

---

### Lesson 5 — Speaking (`unit-5-lesson-5-speaking.ts`)

- **Export**: `UNIT_5_LESSON_5_SPEAKING`
- **IDs**: `a1-u5-l5-s1` … `a1-u5-l5-s15`
- **topic**: `'Daily Routines'` | **topicName**: `'Speaking'`
- **LESSON_TITLE**: `'Expresión oral'`
- **type**: `'pronunciation'` for all
- **content fields**: `title`, `instructions` (plain Spanish, no English model), `targetText` (token word-by-word), `expectedResponse` (plain English text)

| Exercises | Content |
|---|---|
| 1–4 | Repeat present simple sentences (1st and 3rd person) |
| 5–7 | Read aloud sentences about routines |
| 8–11 | Answer questions about routines orally |
| 12–15 | Produce guided sentences about own routine |

**Examples**:
- s1: instructions `'Escucha la frase y repítela en voz alta.'`, targetText `'[[I|Yo]] [[work|trabajo]] [[every|todos los]] [[day|días]].'`, expectedResponse `'I work every day.'`
- s8: instructions `'Contesta en voz alta.'`, targetText `'[[Do|¿]] [[you|tú]] [[wake|te]] [[up|despiertas]] [[early|temprano]]?'`, expectedResponse `'Yes, I do. / No, I don\'t.'`
- s12: instructions `'Di en voz alta a qué hora te despiertas.'`, targetText `'[[I|Yo]] [[wake|me]] [[up|despierto]] [[at|a]] [[las|—]] ____.'`, expectedResponse `'I wake up at [time].'`

---

### Lesson 6 — Writing (`unit-5-lesson-6-writing.ts`)

- **Export**: `UNIT_5_LESSON_6_WRITING`
- **IDs**: `a1-u5-l6-w1` … `a1-u5-l6-w15`
- **topic**: `'Daily Routines'` | **topicName**: `'Writing'`
- **LESSON_TITLE**: `'Expresión escrita'`

**Instructions**: plain Spanish, no `[[...|...]]` except for quoted English verbs e.g. `"[[work|trabajar]]"`. No loose "a" — use "Contesta" instead of "Responde a".

| Exercises | Type | Content |
|---|---|---|
| 1–5 | `fill-blank` | `questions` array, 1 item. `correctAnswer` = plain English string. `acceptableAnswers` array. |
| 6–8 | `sentence-building` | `correctSentence` (token) + `words` (token array). |
| 9–12 | `writing` | `prompt` (token format), `minWords`, `maxWords`. |
| 13–15 | `writing` | Free short composition, `prompt` (token), `minWords: 25+`, `maxWords: 60+`. |

**Fill-blank content** (w1–w5): sentences where student writes the verb in present simple:
- w1: `I ____ every day. (work)` → `correctAnswer: 'work'`
- w2: `She ____ to school. (go → goes)` → `correctAnswer: 'goes'`
- w3: `They ____ breakfast. (eat)` → `correctAnswer: 'eat'`
- w4: `He ____ coffee. (drink → drinks)` → `correctAnswer: 'drinks'`
- w5: `We ____ at ten. (sleep)` → `correctAnswer: 'sleep'`

**Sentence-building** (w6–w8):
- w6: `She gets up early every day.`
- w7: `He goes to work at eight.`
- w8: `They play football in the evening.`

**Guided writing** (w9–w12): 1–3 sentences about routines.
**Free writing** (w13–w15): 4–6 sentences about own or someone's daily routine.

---

### Index file (`unit-5-lessons-index.ts`)

Pattern identical to `unit-3-lessons-index.ts`:
```ts
import { Exercise } from '@/lib/exercise-generator';
import { UNIT_5_LESSON_1_GRAMMAR } from './unit-5-lesson-1-grammar';
import { UNIT_5_LESSON_2_VOCABULARY } from './unit-5-lesson-2-vocabulary';
import { UNIT_5_LESSON_3_READING } from './unit-5-lesson-3-reading';
import { UNIT_5_LESSON_4_LISTENING } from './unit-5-lesson-4-listening';
import { UNIT_5_LESSON_5_SPEAKING } from './unit-5-lesson-5-speaking';
import { UNIT_5_LESSON_6_WRITING } from './unit-5-lesson-6-writing';

export const UNIT_5_LESSONS = {
  grammar: UNIT_5_LESSON_1_GRAMMAR,
  vocabulary: UNIT_5_LESSON_2_VOCABULARY,
  reading: UNIT_5_LESSON_3_READING,
  listening: UNIT_5_LESSON_4_LISTENING,
  speaking: UNIT_5_LESSON_5_SPEAKING,
  writing: UNIT_5_LESSON_6_WRITING,
} as const;

export const UNIT_5_ALL_LESSONS: Exercise[][] = [
  UNIT_5_LESSON_1_GRAMMAR,
  UNIT_5_LESSON_2_VOCABULARY,
  UNIT_5_LESSON_3_READING,
  UNIT_5_LESSON_4_LISTENING,
  UNIT_5_LESSON_5_SPEAKING,
  UNIT_5_LESSON_6_WRITING,
];

export const UNIT_5_ALL_EXERCISES: Exercise[] = UNIT_5_ALL_LESSONS.flat();
```

### Entry file (`unit-5.ts`)

Pattern identical to `unit-3.ts`:
```ts
import { UNIT_5_ALL_EXERCISES } from './unit-5-lessons-index';

export const UNIT_TITLE = 'Simple Present: Everyday Actions';
export const UNIT_5_EXERCISES = UNIT_5_ALL_EXERCISES;
```

---

## 5. Constraints

- **No comments** in code (except `// audioUrl:` in lesson 4, each exercise).
- **No temporary scripts**.
- **No jsdoc block comments** at file top (unit 3 had them; unit 5 should NOT — the requirements say no comments).
- All exercises: `level: 'A1'`, `difficulty: 'easy'`.
- Each exercise has exactly **1 question** in its `questions` array (except `sentence-building` and `writing` which use different content shape).
- **90 exercises total**: 6 lessons × 15 exercises.
- File imports: only `import { Exercise } from '@/lib/exercise-generator'`.

---

## 6. Delivery Phases

1. **Phase 1**: `unit-5-lesson-1-grammar.ts` (15 exercises)
2. **Phase 2**: `unit-5-lesson-2-vocabulary.ts` (15 exercises)
3. **Phase 3**: `unit-5-lesson-3-reading.ts` (15 exercises + READING_TRANSCRIPT)
4. **Phase 4**: `unit-5-lesson-4-listening.ts` (15 exercises + LISTENING_TRANSCRIPT)
5. **Phase 5**: `unit-5-lesson-5-speaking.ts` (15 exercises)
6. **Phase 6**: `unit-5-lesson-6-writing.ts` (15 exercises)
7. **Phase 7**: `unit-5-lessons-index.ts` + `unit-5.ts`

---

## 7. Verification

After all files are created:
```bash
npx tsc --noEmit
```
or
```bash
npm run build
```

Check:
- All 8 files exist in `src/lib/course/a1/`
- Each lesson file exports exactly 15 exercises
- IDs are unique and follow the pattern
- No TypeScript errors
