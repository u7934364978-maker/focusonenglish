# Technical Specification: Remake English A2 Course

## 1. Technical Context
- **Language**: JSON (Content), TypeScript/Next.js (Infrastructure).
- **Directory**: `src/content/cursos/ingles-a2/`.
- **Validation**: `npm run validate-exercises` (uses `scripts/audit-generic.mjs`).

## 2. Implementation Approach
The remaking of the course involves transforming raw pedagogical material into structured JSON blocks. Each unit will consist of one or more blocks (`blocks`), which in turn contain a list of interactions (`content`).

### 2.1 Content Mapping
The provided material will be distributed according to the existing `syllabus.md`:
- **Adjectives (Position/Singular)**: Units 1-2.
- **-ed vs -ing Adjectives**: Unit 9.
- **Adverbs of Frequency**: Unit 5 (Position & examples).
- **Connectors**: Unit 26 & Unit 56.
- **Comparatives & Superlatives**: Units 27, 28, 46, 47.
- **Present Perfect + Ever**: Unit 42.
- **'Enough' & Common Mistakes**: Integrated as "Common Mistakes" blocks in units where they fit or as review units (10, 20, 30, 40, 50, 60).

### 2.2 Interaction Design
To achieve the "dynamic and non-monotonous" goal:
- **Interaction Rotation**: No more than two consecutive interactions of the same type.
- **Multi-sensory**: Mix `audio_player`, `dictation_guided`, and `speaking_task`.
- **Cognitive Variety**: Mix `fill_blanks` (recall), `multiple_choice` (recognition), `reorder_words` (structure), and `matching` (association).

### 2.3 JSON Structure Compliance
Each interaction must include:
- `type`: Interaction type string.
- `prompt_es`: Instruction in Spanish.
- `stimulus_en` / `tts_en`: Content in English.
- `correct_answer`: Valid answer format for the type.
- `mastery_tag`: One of `grammar`, `vocabulary`, `listening`, `reading`, `writing`, `speaking`.
- `interaction_id`: Unique string (e.g., `U1_I1`).

## 3. Data Model
Existing JSON files will be updated. No schema changes are required.

## 4. Delivery Phases
1. **Phase 1**: Unit 1 (Adjectives Position).
2. **Phase 2**: Unit 5 (Adverbs of Frequency).
3. **Phase 3**: Unit 9 (-ed/-ing).
4. **Phase 4**: Units 26-28 (Connectors, Comparatives, Superlatives).
5. **Phase 5**: Unit 42 (Present Perfect + Ever).
6. **Phase 6**: Integration of 'Enough' and Common Mistakes across review units.

## 5. Verification Plan
- **Schema Validation**: Run `npm run validate-exercises`.
- **Content Audit**: Verify that all examples from the source text are present in the JSON files.
- **Dynamism Check**: Ensure interaction types are sufficiently varied within each unit.
