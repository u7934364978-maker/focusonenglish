# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 011f8592-b8cb-4b1c-bd18-a62a7cd0d902 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 04c665bb-f653-408f-954a-e3f938f89721 -->

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
<!-- chat-id: d7626ac6-9f30-4609-a49a-c6631c293bfc -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [x] Step: Build Audit Script
<!-- chat-id: 0f1e8804-7163-4f2a-aaf0-8f5d767ee016 -->
- Create `scripts/audit-a1-full.mjs` that scans all 60 unit JSON files
- Detections to implement:
  - Missing `[[...]]` translations in English-language fields
  - `sentence-building` where `correct_answer` order matches `options` array order (P2 / FIX-2)
  - `matching` where every pair maps `pN → pN` identically (P3 / FIX-3)
  - Missing `reading_phase` before comprehension questions (P4 / FIX-4)
  - Duplicate `interaction_id` values (P5 / FIX-5)
  - Multiple-choice answer distribution biased to `o1` > 40% (P6 / FIX-6)
  - Interaction count outside 40–80 range (FIX-7)
  - JSON parse validation
- Output: `reports/audit-report-full.json` with per-unit and summary sections
- Support `--units=N-M` CLI flag for range filtering
- Run the script to produce baseline report; add `reports/` to `.gitignore`

### [x] Step: Fix Module 1 — Units 1–3 (critical bugs + structural fixes)
<!-- chat-id: 3d427a2a-df61-42e8-97c3-ee8cb5536ca4 -->
- **Unit 1** (FIX-2, FIX-3, FIX-4, FIX-6):
  - Correct 5 `sentence-building` `correct_answer` arrays (I19, I29, I35, I42, I43)
  - Shuffle matching pairs so `correct_answer` is non-trivial
  - Insert `reading_phase` in block B4 before comprehension questions; remove inline transcript from individual questions
  - Rebalance MC correct-answer distribution away from `o1`
- **Unit 2** (FIX-7 — full rewrite):
  - Rewrite to cover: Countries & nationalities (France→French, Spain→Spanish, UK→British, USA→American, Germany→German, Italy→Italian), Numbers 1–10, all 'to be' pronouns (He/She/It/We/They + is/are), Reading: international student descriptions
  - Apply `[[English|Spanish]]` format throughout
  - Minimum 60 interactions across 5 blocks
- **Unit 3** (FIX-3, FIX-4):
  - Shuffle matching pairs
  - Insert `reading_phase` before comprehension block
  - Add error-correction and transformation exercises to reach ~60 interactions
- Verify: `node scripts/audit-a1-full.mjs --units=1-3` → zero critical errors

### [x] Step: Fix Module 1 — Units 4–7 (full rewrites)
<!-- chat-id: 293e53dc-8df0-447a-8ece-3c8932a7387d -->
- **Unit 4** (FIX-7 — full rewrite):
  - Replace alphabet/spelling content with: Numbers 1–10, Classroom objects + A/An (a pen, an eraser, a notebook), Basic colors (red, blue, green, yellow, white, black), This/That + regular plurals (-s), Reading: "In My Bag"
  - 60 interactions, `[[English|Spanish]]` throughout
- **Unit 5** (FIX-7 — full rewrite from 1 exercise):
  - Create: Action verbs vocabulary (work, study, eat, drink, sleep, play), Simple Present I/You/We/They affirmative, 3rd person -s rule (He/She/It), Reading: "A Day in Maria's Life"
  - 60 interactions, `[[English|Spanish]]` throughout
- **Unit 6** (FIX-1, FIX-3, FIX-4 + Saxon Genitive content):
  - Apply `[[English|Spanish]]` to all English tokens
  - Shuffle all matching pairs
  - Add Saxon Genitive block ("Maria's father is a doctor", "Tom's sister is tall")
  - Add exercises for Our/Their possessives
  - Insert `reading_phase` "My Family Tree" before comprehension questions
- **Unit 7** (FIX-7 — expand from 8 to 60 exercises):
  - Expand colors: black, white, brown, orange, purple, pink, grey
  - Add physical descriptions: tall/short, young/old, thin/fat
  - Add hair and eyes: "She has long brown hair", "He has blue eyes"
  - Add adjective placement exercises and reading comprehension
  - Apply `[[English|Spanish]]` throughout
- Verify: `node scripts/audit-a1-full.mjs --units=4-7` → zero critical errors

### [x] Step: Fix Module 1 — Units 8–10 (ID fixes, content fixes, review restructure)
<!-- chat-id: 96b0c25f-16a7-4bc4-a1cf-f2e0b3484a75 -->
- **Unit 8** (FIX-1, FIX-3, FIX-5, FIX-7):
  - Rename incorrect ID `U14_I10` → `U8_I10`
  - Apply `[[English|Spanish]]` to all English tokens
  - Shuffle matching pairs
  - Add missing money/numbers vocabulary exercises per spec
- **Unit 9** (FIX-1, FIX-3, FIX-5, FIX-8):
  - Remove duplicate `U9_IMG1` interaction
  - Apply `[[English|Spanish]]` to all English tokens
  - Shuffle matching pairs
  - Deduplicate content to stay within 80 interactions
- **Unit 10** (FIX-7 — restructure as Module 1 review, FIX-8):
  - Restructure as comprehensive review covering all Units 1–9 learning objectives
  - Include: greetings, 'to be' all forms, numbers, family, colors, adjectives, Simple Present
  - Ensure 60 interactions maximum, remove duplicated exercises
- Verify: `node scripts/audit-a1-full.mjs --units=8-10` → zero critical errors

### [x] Step: Fix Module 2 — Units 11–20 (FIX-1, FIX-3, FIX-4, FIX-6 + review)
<!-- chat-id: 41678ce6-0365-47cc-a6b4-40cdbeaa3fb3 -->
- Apply to Units 11–19 in a single pass:
  - FIX-1: Add `[[English|Spanish]]` to all English tokens in `prompt_es`, `options`, `pairs.left`, `transcript`
  - FIX-3: Shuffle `pairs` right-values in every `matching` exercise; update `correct_answer` map accordingly
  - FIX-4: Insert `reading_phase` interaction before first comprehension question in every reading block; remove inline transcripts from comprehension questions
  - FIX-6: Rebalance MC correct-answer distribution — ensure `o1` is correct in ≤ 40% of questions per unit
- **Unit 11**: additionally translate `learning_outcomes` to English format
- **Unit 20** (FIX-7): Restructure as Module 2 review covering Units 11–19 objectives
- Verify: `node scripts/audit-a1-full.mjs --units=11-20` → zero critical errors

### [ ] Step: Fix Module 3 — Units 21–30 (FIX-8 deduplication + standard fixes)
- **Units 22, 24, 26, 27, 28** (FIX-8 — deduplication):
  - Identify and remove duplicate interaction objects (same `prompt_es` and `correct_answer`)
  - Cap each unit at 80 interactions (target 60); preserve the most pedagogically valuable exercises
- Apply FIX-1, FIX-3, FIX-4, FIX-6 to Units 21–29 (same pattern as Module 2 step)
- **Unit 30** (FIX-7): Restructure as Module 3 review covering Units 21–29 objectives
- Verify: `node scripts/audit-a1-full.mjs --units=21-30` → zero critical errors; oversized files < 30 KB

### [ ] Step: Fix Module 4 — Units 31–40 (FIX-1, FIX-3, FIX-4, FIX-6 + review)
- **Unit 31**: Fix duplicate `concept_tags` values in addition to standard fixes
- Apply FIX-1, FIX-3, FIX-4, FIX-6 to Units 31–39
- **Unit 40** (FIX-7): Restructure as Module 4 review covering Units 31–39 objectives
- Verify: `node scripts/audit-a1-full.mjs --units=31-40` → zero critical errors

### [ ] Step: Fix Modules 5 & 6 — Units 41–60 (FIX-1, FIX-3, FIX-4, FIX-6 + reviews)
- Apply FIX-1, FIX-3, FIX-4, FIX-6 to Units 41–49 and 51–59
- **Unit 50** (FIX-7): Restructure as Module 5 review covering Units 41–49 objectives
- **Unit 60** (FIX-7): Restructure as final A1 course review covering all 6 modules
- Verify: `node scripts/audit-a1-full.mjs --units=41-60` → zero critical errors

### [ ] Step: Final Validation
- Run `node scripts/audit-a1-full.mjs --units=1-60` and confirm zero critical issues
- Run `npm run validate-exercises` and confirm all unit files pass schema validation
- Run `npm run lint` and confirm no JSON syntax or linter errors
- Produce final audit report at `reports/audit-report-full.json`
- Confirm acceptance criteria from spec.md are all satisfied:
  - `[[...]]` coverage ≥ 1 token per English-language interaction
  - No `sentence-building` with `correct_answer` order == `options` array order
  - No `matching` with all pairs mapping `pN → pN`
  - Every comprehension block preceded by `reading_phase`
  - Zero duplicate `interaction_id` values
  - No unit with `o1` correct in > 40% of MC questions
  - All units have 40–80 interactions
  - All JSON files parse successfully
