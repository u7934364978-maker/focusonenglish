# Technical Specification - A1 Course Expansion (Duolingo Style)

## 1. Technical Context
- **Language**: JSON for content, TypeScript/React for rendering.
- **Level**: A1 (Cambridge KET aligned).
- **Target Location**: `src/content/cursos/duolingo-a1/unit[1-100].json`.
- **Media**: AI-generated visual descriptions for video scenes; hash-based audio filenames.

## 2. Implementation Approach
We will follow a structured generation process to ensure all 100 units are educational, consistent, and error-free.

### 2.1. Curriculum Design
The 100 units will be divided into 10 modules of 10 units each.
- **Module 1-10**: Each unit focuses on a specific grammar point and vocabulary set.
- **Unit Structure**:
    - **Warm-up**: 3 simple interactions (MCQ, Matching).
    - **Interactive Video**: 1-2 scenes with dialogues and 1-2 interactions.
    - **Practice**: 4-5 diverse interactions (Categorization, Transformation, T/F).
    - **Test**: 2-3 assessment interactions (Role-play, Writing).

### 2.2. Data Model
All units will adhere to the schema in `unit1.json`.
Key fields for audio generation: `tts_en`, `stimulus_en`.
Key fields for tracking: `mastery_tag`.

### 2.3. Generation Strategy
Since 100 files is a large volume, I will:
1.  **Define a detailed syllabus** (100 rows of metadata).
2.  **Use a batch generation approach**: Create units in groups of 10 to maintain quality and avoid context limits.
3.  **Validation**: Ensure each JSON is valid and follows the A1 vocabulary constraints.

## 3. Source Code Structure Changes
- New directory: `src/content/cursos/duolingo-a1/` will contain `unit1.json` through `unit100.json`.

## 4. Delivery Phases

### Phase 1: Syllabus & Template (Milestone 1)
- Create the full 100-unit syllabus with titles, objectives, and key tags.
- Verify `unit1.json` compatibility.

### Phase 2: Mass Generation (Milestones 2-11)
- Generate 10 units per iteration.
- Each iteration includes 1 module.

### Phase 3: Verification
- Run `scripts/validate-exercises` (if applicable) or a custom validation script.
- Ensure all IDs are unique.

## 5. Verification Approach
- **Linting**: Ensure JSON validity.
- **Visual Check**: Test a sample of units in `/debug/duolingo`.
- **Audio Check**: Ensure `tts_en` and `stimulus_en` are present for the audio generation script.
