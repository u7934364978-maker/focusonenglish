# Technical Specification - Intelligent Practice Content Completion

## 1. Technical Context
- **Framework**: Next.js 15 (App Router).
- **Language**: TypeScript.
- **AI Integration**: OpenAI GPT-4o via `src/lib/ai/generator-v2.ts`.
- **Content Storage**: Local JSON files in `src/content/cursos/`.
- **Existing Services**: `GlobalContentProvider`, `UltraAdaptiveEngine`, `premiumCourseServerService`.

## 2. Implementation Approach
We will implement a CLI tool (utility script) that iterates through the empty or placeholder units in the higher CEFR levels (B1, B2, C1, C2) and populates them using the existing AI generation logic.

### 2.1 Key Components
- **Curriculum Mapper**: Utilizes `src/lib/cambridge-curriculum.ts` to map level-specific topics to exercise generation requests.
- **Content Generator Script**: A new script `scripts/populate-course-content.ts` that:
    1. Identifies empty units in `src/content/cursos/`.
    2. For each unit, identifies relevant topics from the curriculum.
    3. Calls `generateExerciseV2` (or a modified version for batch processing).
    4. Updates the unit JSON files with the generated blocks and interactions.
- **Validation Utility**: Extends `scripts/audit-generic.mjs` or uses existing validation logic to ensure the generated JSON follows the required schema.

## 3. Source Code Structure Changes
- **New Utility Script**: `scripts/populate-course-content.ts`.
- **Content Updates**: Multiple files under `src/content/cursos/ingles-{b1,b2,c1,c2}/unit*.json`.

## 4. Data Model / Interface Changes
No changes to the core data models or interfaces are required, as we will adhere to the existing `UnitData` and `PremiumInteraction` schemas.

## 5. Delivery Phases
1. **Phase 1: Tooling**: Create the `scripts/populate-course-content.ts` script.
2. **Phase 2: Generation (B1-B2)**: Populate B1 and B2 levels (Intermediate).
3. **Phase 3: Generation (C1-C2)**: Populate C1 and C2 levels (Advanced).
4. **Phase 4: Final Validation**: Run audits and verify content in the UI.

## 6. Verification Approach
- **Schema Validation**: Run `npm run validate-exercises`.
- **Runtime Check**: Start the dev server and use the browser to verify that `/practica-inteligente` serves the new content for B1-C2 paths.
- **E2E Testing**: (Pending approval) Create a Playwright test to verify that the adaptive engine correctly transitions between exercises of different levels.
