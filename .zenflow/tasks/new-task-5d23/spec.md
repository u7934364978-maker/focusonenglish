# Technical Specification: A1 Course Audit & Remediation

## 1. Technical Context

### Language & Runtime
- **Data format**: JSON (`src/content/cursos/ingles-a1/unit*.json`)
- **Runtime**: Node.js ≥ 20.9.0
- **Framework**: Next.js 15 (content consumed by the React frontend)
- **Existing audit tooling**: `scripts/audit-trivial-exercises.mjs`, `scripts/audit-counts.mjs`, `scripts/audit-a1-unit-simple.mjs`, `scripts/audit-word-count.mjs`
- **Validation command**: `npm run validate-exercises`

### Content Inventory
- **Total units**: 60 (`unit1.json` – `unit60.json`) plus `unit0.json` (intro)
- **Location**: `src/content/cursos/ingles-a1/`
- **Spec reference**: `src/content/cursos/ingles-a1/course-specifications.md`
- **Structure per unit**: `{ course, learning_outcomes, blocks[] }` where each block has `block_id`, `title`, and `content[]` (array of interaction objects)

### Interaction JSON Schema (canonical)

```json
{
  "interaction_id": "U{N}_I{M}",          // unique, e.g. "U1_I1"
  "type": "multiple-choice | fill-blank | matching | sentence-building | listening_dictation | reading_phase | ...",
  "prompt_es": "...",                      // bilingual with [[English|Spanish]]
  "mastery_tag": "...",
  "complexity": 1 | 2 | 3,
  "stimulus_en": "...",
  "options": [{ "id": "o1", "text": "[[Eng|Spa]]" }],  // for multiple-choice
  "correct_answer": "o1",                 // string for MC, object for matching, array for sentence-building
  "pairs": [...],                          // for matching
  "words": [...],                          // for sentence-building
  "audio_src": "..."                       // for listening
}
```

---

## 2. Identified Issues & Fix Categories

Seven systemic problems (P1–P7) are documented in `requirements.md`. The fixes map to these categories:

| Code | Category | Scope |
|------|----------|-------|
| FIX-1 | `[[English\|Spanish]]` format missing | All units without bilingual markup |
| FIX-2 | `correct_answer` wrong in `sentence-building` | Units 1, and all others with this pattern |
| FIX-3 | Matching always `p0→p0` (trivial) | Every unit with matching exercises |
| FIX-4 | Two-phase reading system absent | All units with reading comprehension |
| FIX-5 | Duplicate / incorrect interaction IDs | Units 8, 9, and others |
| FIX-6 | Correct-answer distribution biased to `o1` | All units with multiple-choice |
| FIX-7 | Content misaligned with spec + quantity deficit | Units 2, 4, 5, 7, and review units 10, 20, 30, 40, 50, 60 |
| FIX-8 | Oversized units with duplicated exercises | Units 22, 24, 26, 27, 28, 9, 10 |

---

## 3. Implementation Approach

### 3.1 Tooling: Audit Script Extension

Extend `scripts/audit-a1-unit-simple.mjs` to produce a machine-readable JSON report covering all 60 units:

```
scripts/audit-a1-full.mjs → reports/audit-report-full.json
```

The script will detect:
- Missing `[[...]]` translations (count translation tokens vs English words)
- `sentence-building` where `correct_answer` order matches the array order (suspicious)
- `matching` where `correct_answer` maps every `pN → pN` identically
- Missing `reading_phase` blocks before comprehension questions
- Duplicate `interaction_id` values across blocks
- Multiple-choice where >50% of questions have `correct_answer: "o1"`
- Interaction count per unit (flag < 40 or > 80)

### 3.2 Content Fix Strategy Per Unit

Each unit fix follows this pattern:
1. Read the existing JSON
2. Apply category fixes (FIX-1 through FIX-8) specific to the unit
3. For structurally empty/wrong units (FIX-7), rewrite the unit content from scratch based on `course-specifications.md`
4. Validate the result against the schema

### 3.3 Matching Fix (FIX-3)

The JSON `correct_answer` for matching must reflect *semantic* pairing, not positional. The fix is to shuffle the `right` values in the `pairs` array so visual display order differs from the answer key. The `correct_answer` map (`{ "p1": "p2", "p2": "p4", ... }`) must be updated accordingly.

**Example — Before (trivial)**:
```json
"pairs": [
  { "id": "p1", "left": "[[Cat|Gato]]",  "right": "Gato" },
  { "id": "p2", "left": "[[Dog|Perro]]", "right": "Perro" }
],
"correct_answer": { "p1": "p1", "p2": "p2" }
```

**After (shuffled)**:
```json
"pairs": [
  { "id": "p1", "left": "[[Cat|Gato]]",  "right": "Perro" },
  { "id": "p2", "left": "[[Dog|Perro]]", "right": "Gato" }
],
"correct_answer": { "p1": "p2", "p2": "p1" }
```

### 3.4 Reading Two-Phase Fix (FIX-4)

Insert a `reading_phase` interaction **before** the first comprehension question in every reading block:

```json
{
  "interaction_id": "U{N}_READ1",
  "type": "reading_phase",
  "prompt_es": "[[Read|Lee]] [[the|el]] [[text|texto]] [[carefully|con atención]].",
  "transcript": "...full passage text with [[Eng|Spa]] translations...",
  "mastery_tag": "reading"
}
```

The comprehension questions that follow must **not** repeat the transcript inline.

### 3.5 Sentence-Building Correct Answer Fix (FIX-2)

The `correct_answer` array must contain word IDs in the **grammatically correct English order**, independent of the order they appear in the `options`/`words` array.

**Unit 1 examples requiring correction**:
| Exercise | Current (wrong) | Correct order | Target sentence |
|----------|----------------|---------------|-----------------|
| I19 | `["w1","w2","w3","w4"]` | `["w2","w1","w3","w4"]` | "What is your surname?" |
| I29 | `["w1","w2","w3","w4"]` | `["w3","w1","w2","w4"]` | "I am ready." |
| I35 | `["w1","w2","w3"]`     | `["w2","w3","w1"]` | "Are you here?" |
| I42 | `["w1","w2","w3","w4","w5"]` | `["w2","w3","w4","w1","w5"]` | "My name is John." |
| I43 | `["w1","w2","w3","w4"]` | `["w2","w1","w3","w4"]` | "What is your name?" |

All units must be audited for the same pattern.

### 3.6 Units Requiring Full Rewrite (FIX-7)

| Unit | Current state | Required content per spec |
|------|--------------|--------------------------|
| **Unit 2** | Duplicates Unit 1 content, missing countries/numbers | Countries & nationalities, Numbers 1–10, all 'to be' pronouns |
| **Unit 4** | Alphabet & spelling (wrong topic) | Numbers 1–10, classroom objects, colors, A/An, plurals, This/That |
| **Unit 5** | 1 exercise, travel vocabulary (wrong module) | Simple Present affirmative, common action verbs |
| **Unit 7** | 8 exercises, incomplete colors | Full colors, physical descriptions, hair/eyes, adjective placement |
| **Units 10, 20, 30, 40, 50, 60** | Reviews not covering module objectives | Systematic review of all unit objectives in the module |

### 3.7 Oversized Units (FIX-8)

| Unit | Size | Action |
|------|------|--------|
| unit22.json | 145 KB | Deduplicate; cap at 60 meaningful exercises |
| unit24.json | 158 KB | Same |
| unit26.json | 149 KB | Same |
| unit27.json | 142 KB | Same |
| unit28.json | 137 KB | Same |
| unit9.json  | 96 KB  | Remove duplicate U9_IMG1; verify image paths |
| unit10.json | 100 KB | Full restructure as module review |

---

## 4. Source Code Structure Changes

### New Files
```
scripts/audit-a1-full.mjs          # Full audit script producing JSON report
reports/audit-report-full.json     # Generated audit output (gitignored)
```

### Modified Files
```
src/content/cursos/ingles-a1/unit1.json    # FIX-2, FIX-3, FIX-4, FIX-6
src/content/cursos/ingles-a1/unit2.json    # FIX-7 (full rewrite)
src/content/cursos/ingles-a1/unit3.json    # FIX-3, FIX-4
src/content/cursos/ingles-a1/unit4.json    # FIX-7 (full rewrite)
src/content/cursos/ingles-a1/unit5.json    # FIX-7 (full rewrite)
src/content/cursos/ingles-a1/unit6.json    # FIX-1, FIX-3, FIX-4, add Saxon Genitive content
src/content/cursos/ingles-a1/unit7.json    # FIX-7 (full rewrite / expand to 60 exercises)
src/content/cursos/ingles-a1/unit8.json    # FIX-1, FIX-3, FIX-5 (U14_I10→U8_I10), FIX-7 (add money exercises)
src/content/cursos/ingles-a1/unit9.json    # FIX-1, FIX-3, FIX-5 (remove duplicate U9_IMG1), FIX-8
src/content/cursos/ingles-a1/unit10.json   # FIX-7 (restructure as module review), FIX-8
src/content/cursos/ingles-a1/unit11.json   # FIX-1, FIX-4, translate learning outcomes
src/content/cursos/ingles-a1/unit[12-19].json  # FIX-1, FIX-3, FIX-4, FIX-6 per unit
src/content/cursos/ingles-a1/unit20.json   # FIX-7 (review restructure)
src/content/cursos/ingles-a1/unit[21-29].json  # FIX-1, FIX-3, FIX-4, FIX-6 per unit
src/content/cursos/ingles-a1/unit22.json   # FIX-8 (deduplicate)
src/content/cursos/ingles-a1/unit24.json   # FIX-8 (deduplicate)
src/content/cursos/ingles-a1/unit26.json   # FIX-8 (deduplicate)
src/content/cursos/ingles-a1/unit27.json   # FIX-8 (deduplicate)
src/content/cursos/ingles-a1/unit28.json   # FIX-8 (deduplicate)
src/content/cursos/ingles-a1/unit30.json   # FIX-7 (review restructure)
src/content/cursos/ingles-a1/unit31.json   # FIX-1, fix concept_tags duplicate
src/content/cursos/ingles-a1/unit[32-39].json  # FIX-1, FIX-3, FIX-4, FIX-6 per unit
src/content/cursos/ingles-a1/unit40.json   # FIX-7 (review restructure)
src/content/cursos/ingles-a1/unit[41-49].json  # FIX-1, FIX-3, FIX-4, FIX-6 per unit
src/content/cursos/ingles-a1/unit50.json   # FIX-7 (review restructure)
src/content/cursos/ingles-a1/unit[51-59].json  # FIX-1, FIX-3, FIX-4, FIX-6 per unit
src/content/cursos/ingles-a1/unit60.json   # FIX-7 (final review restructure)
```

---

## 5. Data Model Rules

### Interaction ID Convention
Normalize all interaction IDs to `U{N}_I{M}` format (e.g., `U1_I1`, `U12_I45`). Legacy prefixes `A1_U1_I1` are acceptable in Unit 1 but new IDs must use `U{N}_I{M}`.

### Translation Format Rule
Every English token in:
- `prompt_es` (English words mixed in)
- `options[].text`
- `pairs[].left`
- `stimulus_en` (not required here — already English-only field)
- `transcript` / `passage`

...must use `[[English|Spanish]]`. Pure-Spanish fields (`prompt_es` body, `right` values in matching) are exempt.

### Exercise Count Constraint
- **Minimum**: 40 interactions per unit (flagged as warning)
- **Target**: 60 interactions per unit
- **Maximum**: 80 interactions per unit (excess triggers deduplication review)

### Correct Answer Distribution
For units with ≥ 10 multiple-choice questions, no single option ID (`o1`, `o2`, `o3`) should be the correct answer for more than 40% of questions.

---

## 6. Delivery Phases

### Phase 1 — Audit Script + Module 1 (Units 1–10)
- Write `scripts/audit-a1-full.mjs` and run it to generate baseline report
- Apply all fixes to Units 1–10
- Priority: FIX-2, FIX-5 (critical correctness bugs), then FIX-7 (content rewrites for U2, U4, U5, U7), then FIX-1, FIX-3, FIX-4, FIX-6, FIX-8
- **Milestone**: All Unit 1–10 files pass audit script with zero critical errors

### Phase 2 — Module 2 (Units 11–20)
- Apply FIX-1, FIX-3, FIX-4, FIX-6 to Units 11–19
- Restructure Unit 20 review (FIX-7)
- **Milestone**: All Unit 11–20 files pass audit script

### Phase 3 — Module 3 (Units 21–30)
- Deduplicate Units 22, 24, 26, 27, 28 (FIX-8)
- Apply FIX-1, FIX-3, FIX-4, FIX-6 to Units 21–29
- Restructure Unit 30 review (FIX-7)
- **Milestone**: All Unit 21–30 files pass audit script; oversized files < 30 KB

### Phase 4 — Module 4 (Units 31–40)
- Apply FIX-1, FIX-3, FIX-4, FIX-6 to Units 31–39
- Fix Unit 31 duplicate concept_tags
- Restructure Unit 40 review (FIX-7)
- **Milestone**: All Unit 31–40 files pass audit script

### Phase 5 — Modules 5 & 6 (Units 41–60)
- Apply FIX-1, FIX-3, FIX-4, FIX-6 to Units 41–49 and 51–59
- Restructure review units 50 and 60 (FIX-7)
- **Milestone**: All Unit 41–60 files pass audit script

### Phase 6 — Final Validation
- Run full audit script across all 60 units
- Verify `npm run validate-exercises` passes
- Verify `npm run lint` passes (no JSON syntax errors caught by linter)
- Produce final audit report confirming zero critical issues across all units

---

## 7. Verification Approach

### Per-unit validation (after each phase)
```bash
node scripts/audit-a1-full.mjs --units=1-10   # Phase 1
node scripts/audit-a1-full.mjs --units=11-20  # Phase 2
# etc.
```

### Full course validation
```bash
node scripts/audit-a1-full.mjs --units=1-60
npm run validate-exercises
npm run lint
```

### Acceptance Criteria
| Check | Pass condition |
|-------|---------------|
| `[[...]]` coverage | ≥ 1 translation token per English-language interaction in all units |
| Sentence-building correctness | No `sentence-building` where `correct_answer` order == `options` array order (unless trivially correct) |
| Matching non-trivial | No `matching` where all pairs map `pN → pN` identically |
| Two-phase reading | Every block with comprehension questions has a preceding `reading_phase` interaction |
| Unique IDs | Zero duplicate `interaction_id` values across entire course |
| Answer distribution | No unit has `o1` as correct answer in > 40% of MC questions |
| Exercise count | All units have 40–80 interactions |
| JSON validity | `JSON.parse` succeeds on all unit files |
