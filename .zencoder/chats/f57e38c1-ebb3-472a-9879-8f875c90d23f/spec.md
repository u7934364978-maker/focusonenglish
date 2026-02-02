# Technical Specification: B1 English Course Refactor

## 1. Technical Context
- **Framework**: Next.js 15 (Frontend).
- **Data Format**: JSON (Stored in `src/content/cursos/ingles-b1/`).
- **Validation**: `ajv` or custom JSON schema validation (referenced in `scripts/audit-generic.mjs`).

## 2. Implementation Approach
We will refactor the 30 B1 units by systematically replacing the existing repetitive content with high-quality, Cambridge-aligned exercises.

### 2.1. Content Generation Strategy
To avoid the previous "repetitive" trap, we will:
1.  **Define a Pedagogical Matrix**: For each unit, define 5-10 core grammar points and 20-30 key vocabulary items.
2.  **Contextual Clusters**: Group exercises into "scenarios" (e.g., "At the Office", "Planning a Trip") within the unit.
3.  **Exercise Templates**: Use diverse templates for `matching`, `transformation`, `multiple_choice`, `reorder_words`, etc.

### 2.2. JSON Structure Maintenance
We must adhere to the existing `Unit` and `Block` interface used by the frontend:
- `course`: Metadata.
- `learning_outcomes`: String array.
- `mastery_tags`: Tag list.
- `blocks`: Array of objects containing `content` (exercises).

### 2.3. Refactoring Workflow
1.  **Unit 1 Prototype**: Manually refactor Unit 1 to establish the quality bar.
2.  **Batch Processing**: Use a script or systematic manual approach to refactor Units 2-30.
3.  **Verification**: Run `npm run validate-exercises` and `scripts/audit-generic.mjs` to ensure schema compliance.

## 3. Data Model Changes
No changes to the schema (JSON structure) are required, only the *values* within the fields (prompts, options, correct answers).

## 4. Delivery Phases
- **Phase 1**: Unit 1 Refactor & Validation (Prototype).
- **Phase 2**: Batch Refactor of Units 2-10 (Foundation).
- **Phase 3**: Batch Refactor of Units 11-20 (Intermediate).
- **Phase 4**: Batch Refactor of Units 21-30 (Advanced).

## 5. Verification Approach
- **Schema Validation**: Ensure all JSONs pass existing validation scripts.
- **Manual Review**: Spot-check exercises for pedagogical quality and Cambridge alignment.
- **Duplication Check**: Run a script to ensure no two `interaction_id` items within a unit have identical `stimulus_en` or `correct_answer`.
