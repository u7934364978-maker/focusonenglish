# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: d027a971-3508-4baa-9d2e-0c4cfe845145 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: cd891510-c879-4907-bbb8-2d95d73929bd -->

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
<!-- chat-id: 27144955-7938-4d02-a736-10761683e360 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [ ] Step: Script skeleton and UNIT_DATA units 1–10

Create `scripts/generate-a1-framework-course.py` with the full scaffold:

- CONSTANTS: `VALID_TYPES` (10 canonical types), `DEFAULT_OUTPUT_DIR`, `UNITS_COUNT = 60`
- HELPERS: `bi(en, es)`, `make_id(unit_id, counter)`, `rotate_correct(idx, options)`
- UNIT_DATA dict with fully populated entries for units 1–10 (Module 1: Basics & Personal Info)
  - Each entry: `title`, `module`, `vocab` (≥10 pairs), `grammar_patterns` (≥6), `dialogue_lines` (4–6), `reading_questions` (exactly 10), `learning_outcomes`
  - Source: `course-specifications.md` Module 1 + `generate-a1-mega-course.py` existing data as reference
- 6 block generators stubbed to produce exactly 10 placeholder exercises of the correct types per block:
  - `gen_b1`: `multiple-choice` ×6, `fill-blank` ×4
  - `gen_b2`: `multiple-choice` ×4, `fill-blank` ×3, `sentence-building` ×3
  - `gen_b3`: `fill-blank` ×4, `multiple-choice` ×4, `sentence-building` ×2
  - `gen_b4`: `fill-blank` ×3, `multiple-choice` ×4, `sentence-building` ×3
  - `gen_b5`: `reading-comprehension` ×10
  - `gen_b6`: `sentence-building` ×4, `fill-blank` ×3, `true-false` ×3
- `build_unit(unit_id, data)` and `validate_unit(unit_json, unit_id)` with all 7 invariants from spec
- CLI: `parse_args()` and `main()` with `--units` and `--output-dir` support

Verification: `python scripts/generate-a1-framework-course.py --units 1-10` → 10 valid files, each with exactly 60 exercises across 6 blocks, no AssertionError.

### [ ] Step: Implement full block generators

Replace stub implementations with full generators that produce pedagogically meaningful exercises:

- `gen_b1`: Use vocab pairs to create `multiple-choice` (translate en→es from options) and `fill-blank` (complete sentence) exercises. Apply bilingual `[[en|es]]` format to all user-facing strings.
- `gen_b2`: Use vocab in context sentences. `sentence-building` exercises use word tiles from the unit's sentences.
- `gen_b3`: Use `grammar_patterns` for affirmative forms. `fill-blank` uses patterns directly; `multiple-choice` provides 3 grammatical options; `sentence-building` uses affirmative sentence tiles.
- `gen_b4`: Use `grammar_patterns` for negative/question variations. Same type distribution as B3.
- `gen_b5`: Use `dialogue_lines` as `transcript` (same transcript shared across all 10 questions). Use `reading_questions` for the 10 individual Q&A exercises. Each question gets its own `interaction_id`.
- `gen_b6`: Production-level exercises. `sentence-building` uses full sentence from unit data. `fill-blank` reuses grammar patterns at higher complexity. `true-false` tests reading comprehension statements.

Answer rotation: `random.seed(unit_id * 1000 + block_number)` before each block generator; correct answer placed at position `(i % 3)` within options list (`o1`/`o2`/`o3`).

`mastery_tag` and `complexity` assigned per block as specified in requirements.

Verification:
- `python scripts/generate-a1-framework-course.py --units 1` → unit1.json structure matches canonical `unit1.json` shape
- All types in VALID_TYPES, no forbidden types
- `python -m py_compile scripts/generate-a1-framework-course.py` passes

### [ ] Step: UNIT_DATA for units 11–60 and full generation

Populate the remaining 50 UNIT_DATA entries (units 11–60) inline in the script using `course-specifications.md` as source of truth:

- Module 2 (units 11–20): Daily Life & Routines — time, days, routines, present simple, food, likes, dates
- Module 3 (units 21–30): My World — rooms, furniture, there is/are, prepositions, neighborhood, directions, pets, body, clothes
- Module 4 (units 31–40): Abilities & Interests — can, sports, adverbs of frequency, conjunctions, free time, instruments, talent, permission, outdoor
- Module 5 (units 41–50): Places & Travel — airport, transport, travel verbs, weather, seasons, hotel, holidays, sightseeing, packing
- Module 6 (units 51–60): Shopping & Food — supermarket, countable/uncountable, some/any, quantities, clothing store, restaurant, cooking, health, money

Each unit entry must have: `vocab` ≥10 pairs, `grammar_patterns` ≥6, `dialogue_lines` 4–6, `reading_questions` exactly 10, `learning_outcomes`.

Review units (10, 20, 30, 40, 50, 60) use vocabulary and grammar from the 9 preceding units of that module.

Verification (full run):
```bash
python scripts/generate-a1-framework-course.py
```
- Output: `Generated: 60/60 units` with `Errors: none`
- Spot-check all files have exactly 60 exercises
- No forbidden exercise types in any file
- `python -m py_compile scripts/generate-a1-framework-course.py` passes
