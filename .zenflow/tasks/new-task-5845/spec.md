# Technical Specification: Unit 32 Exercise Quality Improvement

## Difficulty Assessment
**Medium** — Requires careful analysis of all 75 exercises, identification of low-quality patterns, and replacement with pedagogically sound alternatives while preserving learning objectives and the bilingual `[[word|translation]]` format.

---

## Technical Context

- **Language**: TypeScript
- **File**: `src/lib/course/a1/unit-32.ts`
- **Exercise interface**: `Exercise` from `@/lib/exercise-generator`
- **Bilingual tooltip format**: `[[EnglishWord|SpanishTranslation]]` — used in titles, instructions, and pair labels
- **Exercise types available**: `multiple-choice`, `fill-blank`, `matching`, `sentence-building`, `translation`, `listening-comprehension`, `true-false` (reading comprehension variant only)
- **Unit topic**: Sports & Hobbies (5 lessons, 75 exercises: indices 0–74)

---

## Problem Analysis

### Problem 1 — Fill-blank with missing letters (2 exercises)
These exercises ask students to complete a word by filling in missing vowels/letters (e.g. `B_sk_tb_ll`). This tests letter recognition, not language production or comprehension. These should be replaced with contextual sentence-completion exercises.

| Index | createId | Current question |
|-------|----------|-----------------|
| 8     | `a1-u32-e9`  | `"[[B_sk_tb_ll|B_sk_tb_ll]]"` → Basketball |
| 14    | `a1-u32-e15` | `"[[T_nn_s|T_nn_s]]"` → Tennis |

### Problem 2 — True-false "Is this sentence correct?" exercises (6 exercises)
These ask students to judge whether an English sentence/word is grammatically or orthographically correct. This is a meta-linguistic task poorly suited for A1 learners — it gives them a correct or wrong sentence with no active language production. Replace with exercises that make students **produce** or **choose** the correct form.

| Index | createId | Current question | Grammar point |
|-------|----------|-----------------|---------------|
| 9     | `a1-u32-e10` | "I play swimming every day." → false | play vs go |
| 25    | `a1-u32-e26` | "Gardening" — is spelling correct? → true | spelling (trivial) |
| 32    | `a1-u32-e33` | "They don't like playing tennis." → true | gerund after like |
| 39    | `a1-u32-e40` | "I love sail." → false | gerund after love |
| 50    | `a1-u32-e51` | "Do you like reading?" → true | question form |
| 56    | `a1-u32-e57` | "She likes sing." → false | gerund after like |

**Note:** True-false exercises used as *reading comprehension* (exercises 66 and 72 — with a passage and a factual statement) are good quality and must be kept.

### Problem 3 — Matching exercise with duplicate left values (exercise 4)
Exercise at index 4 has **two pairs with `left: "Play"`** and **two pairs with `left: "Go"`**, making matching ambiguous and unworkable. Additionally, "Play" and "Go" in `left` are not using the bilingual format.

Current pairs:
```
{ left: "Play", right: "[[Tennis|Tenis]]" }
{ left: "Go",   right: "[[Surfing|Surf]]" }
{ left: "Play", right: "[[Volleyball|Voleibol]]" }
{ left: "Go",   right: "[[Jogging|Footing / Trotar]]" }
```

Should be redesigned so each left value is unique (e.g., show the activity on the left and match to the correct verb on the right).

### Problem 4 — Missing translations for "play" and similar common words
In matching pair left labels and some question text, common words like "Play" and "Go" appear without the `[[word|translation]]` format that provides Spanish tooltips. A comprehensive scan is needed.

Key instances found:
- Exercise 4: `left: "Play"` → should be `left: "[[Play|Jugar]]"` (but see Problem 3 above — the whole exercise needs redesign)
- Exercise 4: `left: "Go"` → should be `left: "[[Go|Ir]]"`

---

## Implementation Approach

### Strategy
Replace all 8 problematic exercises **in-place** (same `createId` index, same `id`) to maintain stable IDs. The exercises must preserve the same learning objective (grammar point or vocabulary set being tested), just with a better format.

### Replacement Types by Problem

**Problem 1 (letter-fill → fill-blank contextual)**:
- Ex 8 (Basketball): Replace with a contextual fill-blank sentence about basketball
- Ex 14 (Tennis): Replace with a contextual fill-blank sentence about tennis

**Problem 2 (true-false grammar check → active exercises)**:
- Ex 9 (play vs go): Replace with `fill-blank` — student chooses go/play for swimming
- Ex 25 (gardening spelling): Replace with `multiple-choice` — vocabulary question about gardening
- Ex 32 (gerund after like): Replace with `fill-blank` — gerund completion
- Ex 39 (gerund after love): Replace with `fill-blank` — gerund completion (sail → sailing)
- Ex 50 (question form): Replace with `sentence-building` — reorder to form a correct question
- Ex 56 (gerund after like): Replace with `multiple-choice` — choose correct gerund form

**Problem 3 (duplicate matching pairs)**:
Redesign exercise 4 as: show activity on left (e.g., "Football", "Running"), match to correct verb on right ("Play", "Go"). Each left value unique. Add bilingual format to left and right.

**Problem 4 (missing translations)**:
Fix all instances of untranslated common words in pair labels and instructions. Use `[[word|translation]]` format consistently. The main case is exercise 4 (redesigned per Problem 3).

---

## Source Code Changes

**File modified**: `src/lib/course/a1/unit-32.ts`

**Exercises replaced** (by index and createId):
1. Index 4 → `a1-u32-e5` (matching — redesign to unique pairs + add translations)
2. Index 8 → `a1-u32-e9` (fill-blank — replace letter-fill with contextual sentence)
3. Index 9 → `a1-u32-e10` (true-false grammar → fill-blank play/go)
4. Index 14 → `a1-u32-e15` (fill-blank — replace letter-fill with contextual sentence)
5. Index 25 → `a1-u32-e26` (true-false spelling → multiple-choice vocabulary)
6. Index 32 → `a1-u32-e33` (true-false grammar → fill-blank gerund)
7. Index 39 → `a1-u32-e40` (true-false grammar → fill-blank gerund)
8. Index 50 → `a1-u32-e51` (true-false grammar → sentence-building)
9. Index 56 → `a1-u32-e57` (true-false grammar → multiple-choice gerund)

**Total**: 9 exercise definitions modified within the same file.

---

## Data Model / API Changes
None — same `Exercise` interface, same IDs, same file export.

---

## Verification Approach

1. **TypeScript typecheck**: Run `npm run typecheck` (or `tsc --noEmit`) to confirm no type errors
2. **ESLint**: Run `npm run lint`
3. **Manual review**: Verify that:
   - No exercise has `B_sk_tb_ll` or `T_nn_s` style missing-letter patterns
   - No `true-false` exercise in lessons 1–4 asks if a sentence "is correct" (grammar check variant)
   - Exercise 4 has 4 unique left values in matching pairs
   - All pair left labels use `[[word|translation]]` format where appropriate
   - Reading-comprehension true-false exercises (66, 72) remain unchanged
