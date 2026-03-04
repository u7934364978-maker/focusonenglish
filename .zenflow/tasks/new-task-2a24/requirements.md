# PRD: generate-a1-framework-course.py

## Problem Statement

The A1 English course contains 60 JSON unit files (`unit1.json` – `unit60.json`) in `src/content/cursos/ingles-a1/`. These files are in an inconsistent, broken state:

- **Exercise count violations**: 49 out of 60 units do not have exactly 60 exercises (range: 2–77).
- **Non-canonical exercise types**: Types like `matching`, `transformation`, `reading_phase`, `multiple_choice` (underscore variant), `fill_blanks`, `reorder_words` are mixed throughout units without consistency.
- **Inconsistent `interaction_id`**: Some use `A1_U1_I1`, others `U1_I1`, with no canonical pattern enforced.
- **Inconsistent `block_id`**: Multiple blocks in different units use the same IDs or wrong identifiers.
- **`unit0.json` ghost file**: A `unit0.json` file with only 2 exercises exists and should be excluded.

The goal is a single Python script (no external API calls) that regenerates all 60 unit JSON files from scratch using template-based generation, following a canonical framework.

---

## Scope

- **Target**: `scripts/generate-a1-framework-course.py`
- **Output**: 60 files — `src/content/cursos/ingles-a1/unit1.json` through `unit60.json`
- **No external dependencies**: Pure Python stdlib only (`json`, `os`, `random`). No OpenAI, no ElevenLabs.
- **Source of truth for unit content**: `src/content/cursos/ingles-a1/course-specifications.md` + inline data tables in the script itself.
- **Reference for JSON format**: `src/content/cursos/ingles-a1/unit1.json` (the canonical well-structured example).

---

## Canonical JSON Structure

### Top-level shape (matching unit1.json)

```json
{
  "course": {
    "unit_id": "unit1",
    "unit_title": "...",
    "level": "A1",
    "total_duration_minutes": 60,
    "language_ui": "es-ES",
    "target_language": "en"
  },
  "learning_outcomes": ["..."],
  "blocks": [
    {
      "block_id": "B1",
      "title": "...",
      "content": [ /* exercise objects */ ]
    }
  ]
}
```

### Block Structure

Each unit must have exactly **6 blocks**, each with **10 exercises = 60 total**:

| Block | ID | Purpose | Exercise types |
|-------|----|---------|---------------|
| 1 | B1 | Vocabulary intro | `multiple-choice`, `fill-blank` |
| 2 | B2 | Vocabulary in context | `multiple-choice`, `fill-blank`, `sentence-building` |
| 3 | B3 | Grammar — affirmative | `fill-blank`, `multiple-choice`, `sentence-building` |
| 4 | B4 | Grammar — negative/question | `fill-blank`, `multiple-choice`, `sentence-building` |
| 5 | B5 | Reading passage + comprehension | `reading-comprehension` (with inline `transcript`) |
| 6 | B6 | Production | `sentence-building`, `fill-blank`, `true-false` |

### exercise count invariant

```
len(all exercises across all blocks) == 60  # strict
```

---

## Canonical Exercise Types (10 valid types)

The script must only emit these 10 types (exact string, hyphen-separated, lowercase):

| Type | Description | Required fields |
|------|-------------|-----------------|
| `multiple-choice` | Choose the correct option from 3 choices | `prompt_es`, `stimulus_en`?, `options[]`, `correct_answer` (option id) |
| `fill-blank` | Complete a sentence with a missing word | `prompt_es`, `stimulus_en` (with `______`), `correct_answer` (string) |
| `sentence-building` | Arrange shuffled word tiles to form a sentence | `prompt_es`, `options[]` (word tiles), `correct_answer` (ordered list of ids) |
| `true-false` | Decide if a statement is true or false | `prompt_es`, `stimulus_en`, `correct_answer` (boolean) |
| `short-writing` | Open-ended short production | `prompt_es`, `example_answer` |
| `flashcard` | Vocabulary presentation card | `prompt_es`, `word_en`, `translation_es`, `example_sentence` |
| `listening-dictation` | Write what you hear (simulated via text) | `prompt_es`, `stimulus_en`, `correct_answer` (string) |
| `pronunciation` | Identify correctly pronounced option | `prompt_es`, `stimulus_en`, `options[]`, `correct_answer` |
| `reorder-words` | Reorder a scrambled sentence | `prompt_es`, `options[]`, `correct_answer` (list of ids) |
| `reading-comprehension` | Inline reading text + question (replaces `reading_phase`) | `prompt_es`, `transcript`, `question_en`, `options[]`, `correct_answer` |

> **Note**: `reading_phase` (a non-interactive display block) is **invalid** in the new framework. Reading text must be embedded directly in `reading-comprehension` exercises as a `transcript` field.

### Option id format

- Multiple-choice options: `o1`, `o2`, `o3`
- Sentence-building word tiles: `w1`, `w2`, `w3`, ...

---

## Translation Format

Every English word/phrase in user-facing fields **must** use `[[English|Spanish]]` bilingual format. This applies to:

- `prompt_es` (Spanish instructions may contain English examples)
- `stimulus_en`
- `options[].text`
- `transcript`
- Word tile `options[].text` in sentence-building

Example: `"[[Good morning|Buenos días]]"` not `"Good morning"`.

---

## interaction_id Format

```
A1_U{unit_number}_I{sequential_number}
```

- `unit_number`: integer 1–60 (no zero-padding)
- `sequential_number`: globally sequential within the unit, starting at 1, incrementing by 1
- Reading comprehension exercises get regular sequential IDs (not `READ1`, `READ2`)

Example: `A1_U5_I23`

---

## block_id Format

```
B{block_number}
```

Blocks 1–6 in every unit → `B1` through `B6`.

---

## mastery_tag

Each exercise must include a `mastery_tag` string that classifies what is being practiced:
- Vocabulary blocks: `"vocabulary"`, `"greetings"`, `"personal info"`, etc. (unit-specific)
- Grammar blocks: `"grammar"`, `"verb to be"`, `"present simple"`, etc.
- Reading block: `"reading"`
- Production block: `"production"`

---

## complexity field

Each exercise must include a `complexity` integer:
- `1` — recognition/recall
- `2` — application
- `3` — production

Blocks 1–2: mostly 1–2. Blocks 3–4: mostly 2. Blocks 5–6: mostly 2–3.

---

## Unit Data (source of truth)

The script must embed a data table for all 60 units. Each unit entry contains:

```python
{
    "title": "Greetings and Personal Information",
    "module": 1,
    "vocabulary": [("Hello", "Hola"), ("Goodbye", "Adiós"), ...],  # min 10 pairs
    "grammar_patterns": [
        ("I ____ Maria.", "am"),  # fill-blank pattern
        ...
    ],
    "dialogue_lines": [  # for reading comprehension transcript
        "Hello! My name is Mark. I am a student.",
        ...
    ],
    "reading_questions": [  # 10 questions for B5
        {
            "question_en": "What is Mark's surname?",
            "options": [("Davis", "Davis"), ("Mark", "Mark"), ("Student", "Estudiante")],
            "correct_idx": 0
        },
        ...
    ],
    "learning_outcomes": ["...", "..."]
}
```

The data for all 60 units must be derived from `course-specifications.md` and embedded directly in the script as Python dicts. The script does NOT read markdown files at runtime — data is inlined.

---

## Correct Answer Distribution

To avoid answer pattern bias (A always correct):
- Rotate correct answer positions across exercises: distribute `o1`, `o2`, `o3` roughly equally within each block.
- Use `random.seed(unit_id * 100 + block_id)` for reproducible shuffling within each unit/block.

---

## Script Behavior

```
python scripts/generate-a1-framework-course.py [--units 1-60] [--output-dir src/content/cursos/ingles-a1]
```

- Default: generates all 60 units to the default output directory.
- `--units N` or `--units N-M`: generate specific unit range (useful for partial updates).
- Overwrites existing files.
- Prints a summary per unit: `Unit 5 (Simple Present): 60 exercises across 6 blocks ✓`
- At end: prints total count and lists any unit where count ≠ 60 as ERROR.

---

## Validation Invariants (enforced by the script itself)

The script must self-validate before writing each file:

1. `len(all_exercises) == 60` — exact count, raises `AssertionError` if wrong.
2. All `interaction_id` values are unique within the unit.
3. All exercise `type` values are in the canonical 10-type list.
4. All `block_id` values match `B1`–`B6`.
5. `correct_answer` is present on every exercise (no `None`).

---

## Out of Scope

- Audio URL generation (handled by separate audio pipeline scripts).
- Video content or HeyGen integration.
- Uploading to Supabase or any database.
- Reading the `a1-quality-framework.md` file at runtime (file no longer present; data is embedded in the script).

---

## Success Criteria

1. Running `python scripts/generate-a1-framework-course.py` produces exactly 60 JSON files.
2. Every file has exactly **60 exercises** across **6 blocks**.
3. Every exercise uses one of the **10 canonical types** (no `matching`, `transformation`, `reading_phase`, `multiple_choice`, `fill_blanks`, `reorder_words`).
4. Every `interaction_id` follows `A1_U{N}_I{M}` format and is unique within its unit.
5. Every `block_id` follows `B1`–`B6`.
6. The bilingual `[[English|Spanish]]` format is applied to all English-facing fields.
7. Script runs with Python 3.x using only stdlib — no `pip install` required.
