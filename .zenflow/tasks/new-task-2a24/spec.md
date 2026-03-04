# Technical Specification: generate-a1-framework-course.py

## Technical Context

- **Language**: Python 3.x (stdlib only: `json`, `os`, `random`, `argparse`, `sys`)
- **No external deps**: zero pip installs; runs with bare Python 3.
- **Output**: `src/content/cursos/ingles-a1/unit{N}.json` (N = 1–60)
- **Reference output**: `src/content/cursos/ingles-a1/unit1.json` (canonical JSON shape)
- **Existing pattern**: `scripts/generate-a1-mega-course.py` defines a `UNIT_DATA` dict keyed by unit int with `vocab`, `grammar`, `communication`, `sentences` sub-keys — same pattern is reused here with a richer schema.

---

## Implementation Approach

### High-level flow

```
main()
  ├── parse_args()           # --units, --output-dir
  ├── for unit_id in range:
  │     data = UNIT_DATA[unit_id]
  │     unit_json = build_unit(unit_id, data)
  │     validate_unit(unit_json)        # raises AssertionError on invariant failure
  │     write_json(path, unit_json)
  │     print summary line
  └── print grand summary / errors
```

### Block generation (template-based, no API)

Each block calls a dedicated generator that returns exactly 10 exercise dicts:

| Block | Generator | Types used |
|-------|-----------|-----------|
| B1 – Vocabulary intro | `gen_b1(unit_id, data)` | `multiple-choice` × 6, `fill-blank` × 4 |
| B2 – Vocabulary in context | `gen_b2(unit_id, data)` | `multiple-choice` × 4, `fill-blank` × 3, `sentence-building` × 3 |
| B3 – Grammar affirmative | `gen_b3(unit_id, data)` | `fill-blank` × 4, `multiple-choice` × 4, `sentence-building` × 2 |
| B4 – Grammar neg/question | `gen_b4(unit_id, data)` | `fill-blank` × 3, `multiple-choice` × 4, `sentence-building` × 3 |
| B5 – Reading comprehension | `gen_b5(unit_id, data)` | `reading-comprehension` × 10 |
| B6 – Production | `gen_b6(unit_id, data)` | `sentence-building` × 4, `fill-blank` × 3, `true-false` × 3 |

Each generator returns a list of exactly 10 dicts; calling code asserts `len == 10` before aggregating.

### Bilingual format helper

```python
def bi(en: str, es: str) -> str:
    return f"[[{en}|{es}]]"
```

All exercise field values containing English text must be constructed using `bi()` or inline `[[...]]` syntax. Generators must never emit raw English strings in user-facing fields.

### Answer rotation

Each block generator uses:
```python
random.seed(unit_id * 1000 + block_number)
```
to deterministically rotate correct-answer positions. For multiple-choice, options are built with the correct answer placed at position `(i % 3) + 1` within each exercise sequence (using modular cycling across `o1`, `o2`, `o3`).

### interaction_id counter

A single counter is threaded through all block generators:
```python
def make_id(unit_id: int, counter: int) -> str:
    return f"A1_U{unit_id}_I{counter}"
```
Counter starts at 1 and increments by 1 for each exercise; is passed by reference via a mutable list `[counter]` or returned as a pair.

---

## Source Code Structure

Single file: `scripts/generate-a1-framework-course.py`

```
scripts/generate-a1-framework-course.py
│
├── CONSTANTS
│   ├── VALID_TYPES (set of 10 canonical strings)
│   ├── DEFAULT_OUTPUT_DIR
│   └── UNITS_COUNT = 60
│
├── UNIT_DATA dict (all 60 units)
│   Each entry:
│   {
│     "title": str,
│     "module": int,
│     "vocab": list[tuple[str, str]],        # (en, es) – min 10 pairs
│     "grammar_patterns": list[tuple[str, str]],  # (sentence_with_blank, answer)
│     "dialogue_lines": list[str],           # bilingual lines for B5 transcript
│     "reading_questions": list[dict],       # 10 Q&A dicts for B5
│     "learning_outcomes": list[str]
│   }
│
├── HELPERS
│   ├── bi(en, es) -> str
│   ├── make_id(unit_id, counter) -> str
│   └── rotate_correct(idx, options) -> str  # returns correct option id after shuffle
│
├── BLOCK GENERATORS
│   ├── gen_b1(unit_id, data, start_i) -> (list[dict], next_i)
│   ├── gen_b2(unit_id, data, start_i) -> (list[dict], next_i)
│   ├── gen_b3(unit_id, data, start_i) -> (list[dict], next_i)
│   ├── gen_b4(unit_id, data, start_i) -> (list[dict], next_i)
│   ├── gen_b5(unit_id, data, start_i) -> (list[dict], next_i)
│   └── gen_b6(unit_id, data, start_i) -> (list[dict], next_i)
│
├── BUILD / VALIDATE
│   ├── build_unit(unit_id, data) -> dict
│   └── validate_unit(unit_json, unit_id)    # raises AssertionError on any violation
│
└── CLI
    ├── parse_args() -> Namespace
    └── main()
```

---

## Data Model

### UNIT_DATA entry (per unit, all 60 must be present)

```python
UNIT_DATA: dict[int, dict] = {
    1: {
        "title": "Greetings and Personal Information",
        "module": 1,
        "vocab": [
            ("Hello", "Hola"),
            ("Goodbye", "Adiós"),
            ("Good morning", "Buenos días"),
            ("Good afternoon", "Buenas tardes"),
            ("Good evening", "Buenas noches"),
            ("Name", "Nombre"),
            ("Surname", "Apellido"),
            ("My", "Mi"),
            ("Your", "Tu"),
            ("Nice to meet you", "Mucho gusto"),
            # ... 10+ pairs required
        ],
        "grammar_patterns": [
            # (sentence_with_____blank, correct_answer)
            ("[[I|Yo]] ____ [[a|un]] [[student|estudiante]].", "am"),
            ("[[You|Tú]] ____ [[my|mi]] [[teacher|profesor]].", "are"),
            # ... at least 6 patterns for B3 + B4
        ],
        "dialogue_lines": [
            "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Mark|Mark]].",
            "[[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]] [[from|de]] [[London|Londres]].",
            # ... 4–6 lines forming a coherent paragraph for B5 transcript
        ],
        "reading_questions": [
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[Mark's|de Mark]] [[name|nombre]]?",
                "options": [("Mark", "Mark"), ("John", "Juan"), ("Tom", "Tomás")],
                "correct_idx": 0
            },
            # ... exactly 10 questions
        ],
        "learning_outcomes": [
            "Use common greetings and farewells correctly",
            "Introduce yourself and provide basic personal information",
        ]
    },
    # ... units 2–60
}
```

All 60 unit entries are derived from `course-specifications.md` (Module 1–6 listings) and the existing `generate-a1-mega-course.py` UNIT_DATA as a reference source. The implementer must populate all 60 entries inline.

### Exercise object (canonical shape — matches unit1.json)

```python
{
    "interaction_id": "A1_U{N}_I{M}",   # string, unique within unit
    "type": "<one of 10 canonical types>",
    "prompt_es": "...",                  # bilingual [[en|es]] format
    "mastery_tag": "...",
    "complexity": 1 | 2 | 3,
    # type-specific fields:
    "stimulus_en": "...",               # fill-blank, multiple-choice, true-false
    "options": [{"id": "oN", "text": "..."}],  # multiple-choice, pronunciation
    "correct_answer": "oN" | "wN[]" | bool | str
}
```

For `reading-comprehension`:
```python
{
    "interaction_id": "...",
    "type": "reading-comprehension",
    "prompt_es": "[[Lee|Lee]] [[el|el]] [[texto|texto]] [[y|y]] [[responde|responde]].",
    "mastery_tag": "reading",
    "complexity": 2,
    "transcript": "<bilingual paragraph>",
    "question_en": "...",
    "options": [{"id": "o1", ...}, {"id": "o2", ...}, {"id": "o3", ...}],
    "correct_answer": "oN"
}
```

---

## Validation Invariants (enforced by `validate_unit`)

1. Total exercise count across all blocks == 60.
2. Each block has exactly 10 exercises.
3. All `block_id` values are in `{"B1","B2","B3","B4","B5","B6"}` and each appears exactly once.
4. All `type` values are in `VALID_TYPES` (the 10 canonical types).
5. All `interaction_id` values match regex `^A1_U\d+_I\d+$` and are unique within the unit.
6. No exercise has `correct_answer` as `None`.
7. Every exercise with `options` has exactly the declared number of option objects.

Any violation raises `AssertionError` with a descriptive message; the file is NOT written.

---

## CLI Interface

```
python scripts/generate-a1-framework-course.py [OPTIONS]

Options:
  --units N        Generate only unit N (single unit)
  --units N-M      Generate units N through M inclusive
  --output-dir DIR Output directory (default: src/content/cursos/ingles-a1)
```

Output per unit:
```
Unit 1 (Greetings and Personal Information): 60 exercises across 6 blocks ✓
```

Final summary:
```
Generated: 60/60 units
Errors: none
```
Or on failure:
```
Generated: 58/60 units
Errors:
  Unit 5: AssertionError — expected 60 exercises, got 59
```

---

## Delivery Phases

### Phase 1: Script skeleton + UNIT_DATA (units 1–10)
- Scaffold the file with all constants, helpers, `build_unit`, `validate_unit`, `main`.
- Populate `UNIT_DATA` for units 1–10 (Module 1).
- All 6 block generators stubbed to produce exactly 10 placeholder exercises.
- Verify: `python scripts/generate-a1-framework-course.py --units 1-10` produces 10 valid files.

### Phase 2: Full block generators
- Implement all 6 real block generators (type variety, bilingual format, rotation).
- Verify unit 1 output matches the structure and exercise quality of the canonical `unit1.json`.

### Phase 3: UNIT_DATA for units 11–60
- Populate remaining 50 entries from `course-specifications.md`.
- Run full generation: `python scripts/generate-a1-framework-course.py`.
- All 60 files must pass validation with 0 errors.

---

## Verification Approach

No dedicated test file is required (script self-validates on every run).

### Manual verification steps

```bash
# Generate all 60 units
python scripts/generate-a1-framework-course.py

# Spot-check exercise count in each file
python -c "
import json, glob
for f in sorted(glob.glob('src/content/cursos/ingles-a1/unit*.json')):
    d = json.load(open(f))
    count = sum(len(b['content']) for b in d['blocks'])
    status = '✓' if count == 60 else f'✗ {count}'
    print(f, status)
"

# Check for any forbidden exercise types
python -c "
import json, glob
BAD = {'matching','transformation','reading_phase','multiple_choice','fill_blanks','reorder_words'}
for f in sorted(glob.glob('src/content/cursos/ingles-a1/unit*.json')):
    d = json.load(open(f))
    for b in d['blocks']:
        for ex in b['content']:
            if ex['type'] in BAD:
                print(f, ex['interaction_id'], ex['type'])
"
```

### Lint
The project uses ESLint for JS/TS but not for Python. No lint tool is enforced for Python; however the script must be parseable by `python -m py_compile scripts/generate-a1-framework-course.py`.
