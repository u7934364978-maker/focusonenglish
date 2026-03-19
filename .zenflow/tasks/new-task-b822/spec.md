# Technical Specification — English C2 Course (Mastery / Proficiency)

## Technical Context

- **Language**: TypeScript (Next.js / React project)
- **Key files**:
  - `src/lib/c2-units/curriculum.ts` — curriculum mapping (UnitMapping[])
  - `src/lib/c2-units/utils.ts` — createC2Unit() helper
  - `src/lib/c2-units/unit-{1..60}.ts` — individual unit content files
  - `src/lib/c2-units/index.ts` — barrel export (ALL_C2_UNITS)
  - `src/lib/course-data-c2.ts` — module grouping and course export
  - `src/lib/exercise-types.ts` — Lesson, Exercise, Module interfaces (read-only)
  - `scripts/generate-c2-course.ts` — AI generation script referencing curriculum
- **Existing dependencies**: OpenAI (`openai` package), existing exercise-type system
- **No new dependencies** required

## Current State vs Required State

### Current (old) structure

The existing C2 units follow a **6-module CPE exam-part-focused** structure:
- Module 1: Reading & Use of English (Parts 1–4)
- Module 2: Reading & Use of English (Parts 5–8)
- Module 3: Writing Mastery
- Module 4: Listening Comprehension
- Module 5: Speaking
- Module 6: Full Exam Simulations

Each unit currently contains **10 exercise blocks** (10 questions each = 100 questions per unit), generated with the old curriculum mapping.

### Required (new) structure

The PRD mandates a **10-module thematic** structure (10 modules × 6 units = 60 units), with **6 lessons per unit** aligned to the CEFR C2 skill axes: grammar mastery, lexical sophistication, and advanced production.

---

## Implementation Approach

### 1. Replace `src/lib/c2-units/curriculum.ts`

Rewrite the `C2_CURRICULUM_MAPPING` array with the new 10-module × 6-unit structure.
Keep the same `UnitMapping` interface (no interface change needed).

New mapping (60 entries):

| Module | Units | Theme | Grammar Focus |
|--------|-------|-------|---------------|
| M1 | 1–6 | Language, Power and Rhetoric | Inversion, cleft sentences, fronting, register, distancing passive |
| M2 | 7–12 | Literature and the Written Word | Narrative tenses mastery, cohesion, figurative language, nominalisation |
| M3 | 13–18 | Science, Knowledge and Truth | Epistemic modality, academic passive, impersonal constructions, complex noun phrases |
| M4 | 19–24 | Society, Power and Justice | Full conditionals, concession/contrast, obligation, cause-result linkers |
| M5 | 25–30 | Arts, Aesthetics and Creativity | Complex adjectival phrases, figurative critical language, stylistic variety, dramatic inversion |
| M6 | 31–36 | Mind, Identity and Philosophy | Nominal clauses, abstract expression, hedging, speculative modals |
| M7 | 37–42 | Economics, Law and Politics | Formal prepositional phrases, formal linking, register control, institutional passive |
| M8 | 43–48 | Global Challenges and the Future | Speculation/prediction, discourse management, synthesis, complex future forms |
| M9 | 49–54 | Intercultural Communication and Diversity | Colloquial mastery, indirect language, irony/understatement, register switching |
| M10 | 55–60 | Mastery Integration and Exam Preparation | Full C2 grammar integration, all writing genres, CPE formats |

Detailed mapping per unit (replaces current 60 entries):

```
M1 — Language, Power and Rhetoric (Units 1–6)
  Unit 1: The Power of Words | grammar: ['rhetorical-inversion'] | topic: language-power
  Unit 2: Rhetoric and Persuasion | grammar: ['cleft-sentences-advanced'] | topic: rhetoric
  Unit 3: Political Discourse | grammar: ['fronting-topicalisation'] | topic: political-language
  Unit 4: Language and Identity | grammar: ['register-control'] | topic: language-identity
  Unit 5: Propaganda, Spin and Manipulation | grammar: ['distancing-passive'] | topic: media-language
  Unit 6: Module 1 Review: Language and Power | grammar: ['mixed-review-m1'] | topic: review

M2 — Literature and the Written Word (Units 7–12)
  Unit 7: What is Literature? | grammar: ['narrative-tenses-mastery'] | topic: literature
  Unit 8: The Art of the Novel | grammar: ['textual-cohesion'] | topic: novel
  Unit 9: Poetry and Sound | grammar: ['figurative-language'] | topic: poetry
  Unit 10: Essay Writing as Art | grammar: ['nominalisation-academic'] | topic: academic-writing
  Unit 11: Literary Criticism | grammar: ['reporting-verbs-evaluation'] | topic: literary-criticism
  Unit 12: Module 2 Review: Literature | grammar: ['mixed-review-m2'] | topic: review

M3 — Science, Knowledge and Truth (Units 13–18)
  Unit 13: The Philosophy of Science | grammar: ['epistemic-modality'] | topic: philosophy-science
  Unit 14: Artificial Intelligence and Ethics | grammar: ['passive-objectivity'] | topic: ai-ethics
  Unit 15: Fake News and Information Wars | grammar: ['hedging-c2'] | topic: media-information
  Unit 16: Research and Evidence | grammar: ['complex-noun-phrases'] | topic: academic-research
  Unit 17: Knowledge and Bias | grammar: ['impersonal-constructions'] | topic: epistemology
  Unit 18: Module 3 Review: Science | grammar: ['mixed-review-m3'] | topic: review

M4 — Society, Power and Justice (Units 19–24)
  Unit 19: Human Rights and Law | grammar: ['obligation-formal'] | topic: human-rights
  Unit 20: Inequality and Social Justice | grammar: ['concession-contrast-advanced'] | topic: social-justice
  Unit 21: Crime and Punishment | grammar: ['conditionals-mastery'] | topic: crime-justice
  Unit 22: Democracy and Governance | grammar: ['cause-result-advanced'] | topic: democracy
  Unit 23: Civil Society and Protest | grammar: ['strong-views-nuance'] | topic: civil-society
  Unit 24: Module 4 Review: Society | grammar: ['mixed-review-m4'] | topic: review

M5 — Arts, Aesthetics and Creativity (Units 25–30)
  Unit 25: The Philosophy of Beauty | grammar: ['complex-adjectival-phrases'] | topic: aesthetics
  Unit 26: Contemporary Art | grammar: ['figurative-critical-writing'] | topic: contemporary-art
  Unit 27: Music and Emotion | grammar: ['dramatic-inversion'] | topic: music
  Unit 28: Film as Language | grammar: ['stylistic-sentence-variety'] | topic: cinema
  Unit 29: Architecture and Space | grammar: ['degree-result-advanced'] | topic: architecture
  Unit 30: Module 5 Review: Arts | grammar: ['mixed-review-m5'] | topic: review

M6 — Mind, Identity and Philosophy (Units 31–36)
  Unit 31: Consciousness and the Self | grammar: ['nominal-clauses'] | topic: consciousness
  Unit 32: Memory, Experience and Meaning | grammar: ['abstract-generalisation'] | topic: memory
  Unit 33: Free Will and Determinism | grammar: ['logical-argument-structures'] | topic: free-will
  Unit 34: Personal Identity Over Time | grammar: ['hedging-c2-advanced'] | topic: identity
  Unit 35: Ethics of Technology | grammar: ['modal-speculation-deduction'] | topic: tech-ethics
  Unit 36: Module 6 Review: Philosophy | grammar: ['mixed-review-m6'] | topic: review

M7 — Economics, Law and Politics (Units 37–42)
  Unit 37: Global Markets and Trade | grammar: ['complex-prepositional-phrases'] | topic: global-economics
  Unit 38: Labour, Rights and Work | grammar: ['formal-linking-devices'] | topic: labour-rights
  Unit 39: Legal Language and Contracts | grammar: ['register-control-legal'] | topic: legal-language
  Unit 40: Taxation and Fiscal Policy | grammar: ['institutional-passive'] | topic: fiscal-policy
  Unit 41: International Relations | grammar: ['complex-connectors'] | topic: international-relations
  Unit 42: Module 7 Review: Economics and Law | grammar: ['mixed-review-m7'] | topic: review

M8 — Global Challenges and the Future (Units 43–48)
  Unit 43: Climate Change and Policy | grammar: ['synthesis-summarising'] | topic: climate-change
  Unit 44: Global Health and Pandemics | grammar: ['speculation-prediction-c2'] | topic: global-health
  Unit 45: Technology and the Future of Humanity | grammar: ['complex-future-constructions'] | topic: future-technology
  Unit 46: Migration and Global Society | grammar: ['discourse-management'] | topic: migration
  Unit 47: War, Peace and Diplomacy | grammar: ['argumentative-structures-c2'] | topic: war-peace
  Unit 48: Module 8 Review: Global Challenges | grammar: ['mixed-review-m8'] | topic: review

M9 — Intercultural Communication and Diversity (Units 49–54)
  Unit 49: World Englishes | grammar: ['colloquial-mastery'] | topic: world-englishes
  Unit 50: Humour, Irony and Sarcasm | grammar: ['indirect-language-irony'] | topic: humour
  Unit 51: Cultural Taboos and Sensitivity | grammar: ['diplomatically-hedged-speech'] | topic: cultural-taboos
  Unit 52: Multilingualism and Translation | grammar: ['register-switching'] | topic: multilingualism
  Unit 53: Cross-cultural Business | grammar: ['interaction-strategies'] | topic: cross-cultural
  Unit 54: Module 9 Review: Culture and Language | grammar: ['mixed-review-m9'] | topic: review

M10 — Mastery Integration and Exam Preparation (Units 55–60)
  Unit 55: Full Grammar Integration I | grammar: ['embedding-coordination-subordination'] | topic: grammar-mastery
  Unit 56: Full Grammar Integration II | grammar: ['punctuation-stylistic-cohesion'] | topic: grammar-mastery-ii
  Unit 57: All Writing Genres | grammar: ['all-writing-genres'] | topic: writing-mastery
  Unit 58: CPE Exam Practice: Reading & Use of English | grammar: ['cpe-use-of-english'] | topic: exam-practice
  Unit 59: CPE Exam Practice: Listening & Speaking | grammar: ['cpe-listening-speaking'] | topic: exam-practice
  Unit 60: CPE Full Mock Exam | grammar: ['comprehensive-review-c2'] | topic: exam-mastery
```

### 2. Update `src/lib/course-data-c2.ts`

Replace the 6-module slice structure with 10 modules × 6 units each:

```typescript
// New structure — 10 modules of 6 units
{ id: 'c2-m1', title: 'Module 1: Language, Power and Rhetoric', units: ALL_C2_UNITS.slice(0, 6) }
{ id: 'c2-m2', title: 'Module 2: Literature and the Written Word', units: ALL_C2_UNITS.slice(6, 12) }
{ id: 'c2-m3', title: 'Module 3: Science, Knowledge and Truth', units: ALL_C2_UNITS.slice(12, 18) }
{ id: 'c2-m4', title: 'Module 4: Society, Power and Justice', units: ALL_C2_UNITS.slice(18, 24) }
{ id: 'c2-m5', title: 'Module 5: Arts, Aesthetics and Creativity', units: ALL_C2_UNITS.slice(24, 30) }
{ id: 'c2-m6', title: 'Module 6: Mind, Identity and Philosophy', units: ALL_C2_UNITS.slice(30, 36) }
{ id: 'c2-m7', title: 'Module 7: Economics, Law and Politics', units: ALL_C2_UNITS.slice(36, 42) }
{ id: 'c2-m8', title: 'Module 8: Global Challenges and the Future', units: ALL_C2_UNITS.slice(42, 48) }
{ id: 'c2-m9', title: 'Module 9: Intercultural Communication and Diversity', units: ALL_C2_UNITS.slice(48, 54) }
{ id: 'c2-m10', title: 'Module 10: Mastery Integration and Exam Preparation', units: ALL_C2_UNITS.slice(54, 60) }
```

Update `C2_FULL_COURSE` title to `'Inglés C2 Mastery / Proficiency'`.

### 3. Update `src/lib/c2-units/utils.ts`

Add a `C2LessonBlock` interface and a new `createC2Lesson()` helper to build the 6-lesson-per-unit pattern. The existing `createC2Unit()` signature stays the same (it accepts `Exercise[]` blocks and returns a `Lesson`), so the interface is backward-compatible. The change is that the generator will now produce **6 blocks per unit** (one per lesson focus) instead of 10.

Add the following named lesson types to document the 6-lesson structure:
- **Lesson 1**: Grammar input & presentation
- **Lesson 2**: Grammar in context / collocations
- **Lesson 3**: Reading comprehension (C2 text)
- **Lesson 4**: Listening / discourse management
- **Lesson 5**: Writing practice (genre-specific)
- **Lesson 6**: Speaking / review / integration

### 4. Regenerate `src/lib/c2-units/unit-{1..60}.ts`

All 60 unit files need to be regenerated to:
- Match the new curriculum mapping (new unit titles, grammar foci, topics)
- Contain exactly **6 exercise blocks** per unit (one per lesson above)
- Use the C2-appropriate exercise types: `key-word-transformation`, `open-cloze`, `multiple-choice-cloze`, `gapped-text`, `multiple-matching`, `error-identification`, `paraphrasing`, `writing-analysis`, `speaking-analysis`

The generation script `scripts/generate-c2-course.ts` must be updated to:
- Read from the new `C2_CURRICULUM_MAPPING` (already imports it)
- Generate **6 blocks per unit** (change loop from `b <= 10` to `b <= 6`)
- Map each block index to a lesson type (grammar, grammar-context, reading, listening, writing, speaking)
- Use C2-specific exercise type distribution per lesson type

### 5. No database or API changes

The unit content is stored as TypeScript source files loaded at build time. No Supabase schema changes are required. Progress tracking uses `unit_id` strings that remain stable (`c2-u1` through `c2-u60`).

---

## Source Code Structure Changes

```
src/lib/c2-units/
  curriculum.ts        ← REWRITE (new 10-module mapping, 60 entries)
  utils.ts             ← UPDATE (add lesson-type constants, C2LessonBlock interface)
  unit-1.ts            ← REGENERATE (new content: 6 blocks, new topic)
  unit-2.ts            ← REGENERATE
  ...
  unit-60.ts           ← REGENERATE

src/lib/
  course-data-c2.ts    ← UPDATE (10 modules × 6 units slices, new module titles)

scripts/
  generate-c2-course.ts ← UPDATE (6 blocks/unit, lesson-type mapping, new prompts)
```

No new files required. No files deleted.

---

## Data Model

### `UnitMapping` interface (unchanged)

```typescript
export interface UnitMapping {
  unit: number;      // 1–60
  module: number;    // 1–10
  title: string;     // Unit title from PRD
  grammar: string[]; // Grammar focus slug(s)
  topic: string;     // Topic slug
  skills: string[];  // ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
}
```

### Lesson structure per unit (6 blocks)

Each unit exports a `Lesson` object (unchanged type) with 6 `Exercise` blocks:

```
Block 1 (b1) — Grammar: key-word-transformation, fill-blank, error-identification
Block 2 (b2) — Grammar in context: open-cloze, sentence-completion, collocation-matching
Block 3 (b3) — Reading: gapped-text, multiple-matching, multiple-choice-cloze
Block 4 (b4) — Listening: multiple-choice, matching, gap-fill
Block 5 (b5) — Writing: writing-analysis, paraphrasing, summary-writing
Block 6 (b6) — Speaking / Review: speaking-analysis, multiple-choice, transformation mix
```

Each block contains **10 questions** (same as current B2/C1 pattern).

### Module grouping in `course-data-c2.ts`

```typescript
interface C2Module {
  id: string;       // 'c2-m1' ... 'c2-m10'
  title: string;    // 'Module N: Thematic Title'
  units: Lesson[];  // 6 Lesson objects per module
}
```

---

## Verification Approach

After implementation, verify with:

```bash
# TypeScript compilation check
npx tsc --noEmit

# Lint
npx eslint src/lib/c2-units/ src/lib/course-data-c2.ts scripts/generate-c2-course.ts

# Validate unit structure (existing script)
node scripts/validate-c2-structure.mjs
```

Validation criteria:
- All 60 unit files compile without TypeScript errors
- Each unit exports a named `C2_UNIT_N` (Lesson object) with exactly 6 exercise blocks
- `ALL_C2_UNITS` in `index.ts` has length 60
- `C2_MODULES` in `course-data-c2.ts` has 10 entries, each with 6 units
- New curriculum mapping has 60 entries, modules 1–10, units 1–60 (one per module group of 6)
