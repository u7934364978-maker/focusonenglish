# Technical Specification - Duolingo A1 Content Expansion

## 1. Technical Context
- **Language**: TypeScript / JSON
- **Framework**: Next.js (Content is static JSON)
- **Validation**: `scripts/validate-exercises.mjs`

## 2. Implementation Approach
- **Data Source**: `src/content/cursos/duolingo-a1/unit[1-30].json`
- **Logic**:
    1. Read existing unit JSON.
    2. Identify current exercise count.
    3. Generate additional high-quality exercises (Reading, Listening, Vocabulary, Grammar) until the total reaches 200.
    4. Ensure all new exercises have unique IDs following the pattern `U[Unit]_B1_I[Number]` where `Number` continues from the last one or starts a new range (e.g., 200+).
    5. Maintain existing `mastery_tags` or add relevant ones if the theme allows for more specific sub-topics.
    6. Ensure all exercises are pedagogically appropriate for A1 level (Cambridge standards).

## 3. Interaction Types & Examples
- **Reading**: `multiple_choice` or `true_false` based on a short stimulus.
- **Listening**: Exercises with `tts_en` or `audioUrl`.
- **Vocabulary**: `matching`, `categorization`, `odd_one_out`.
- **Grammar**: `transformation`, `reorder_words`, `multiple_choice` (gap fill).

## 4. Source Code Changes
- Updates to 30 JSON files in `src/content/cursos/duolingo-a1/`.

## 5. Verification Plan
- **Automated Validation**: Run `node scripts/validate-exercises.mjs` to ensure JSON schema compliance.
- **Manual Review**: Check a sample of generated exercises for pedagogical accuracy and A1 level alignment.
- **ID Check**: Ensure no duplicate `interaction_id` within a unit.

## 6. Phased Delivery
- **Phase 1**: Expand Unit 1 and Unit 2 as a baseline.
- **Phase 2**: Expand Units 3-10.
- **Phase 3**: Expand Units 11-20.
- **Phase 4**: Expand Units 21-30.
