# Technical Specification - Course Redesign (A1 & A2)

## 1. Technical Context
- Language: TypeScript / Next.js
- AI: OpenAI GPT-4o for content generation.
- Data Storage: TypeScript files exporting arrays of `Exercise` objects.

## 2. Implementation Approach
We will adapt the existing `scripts/redo-b1-course.ts` to create two new scripts:
- `scripts/redo-a1-course.ts`
- `scripts/redo-a2-course.ts`

These scripts will:
1. Load the respective syllabus (A1 or A2).
2. For each unit (1-30):
    - Generate 50 exercises using GPT-4o.
    - Enforce the `[[english|spanish]]` translation syntax.
    - Format titles, instructions, and explanations in Spanish.
    - Assign `id`, `audioUrl`, and `topicName`.
3. Save the output to `src/lib/course/[level]/unit-[n].ts`.

### 2.1 Syllabus Definition
The syllabus defined in `requirements.md` will be hardcoded in the scripts, similar to how it is in `redo-b1-course.ts`.

### 2.2 GPT Prompting
The prompt will be refined to ensure:
- Appropriate CEFR level (A1 or A2).
- Strict adherence to the translation syntax.
- Variety in exercise types (Multiple Choice, Fill in the Blank, Sentence Building).
- Professional/Academic context.

## 3. Data Model Changes
No changes to the `Exercise` interface are expected, as we are following the existing B1 structure which already uses the `Exercise` type from `@/lib/exercise-generator`.

## 4. Source Code Structure Changes
- Files in `src/lib/course/a1/unit-[1-30].ts` will be overwritten.
- Files in `src/lib/course/a2/unit-[1-30].ts` will be overwritten.
- New scripts in `scripts/`.

## 5. Delivery Phases
1. **Phase 1: A1 Generation Script**: Create and test the script for A1 Unit 1.
2. **Phase 2: A1 Full Generation**: Run the script for all 30 A1 units.
3. **Phase 3: A2 Generation Script**: Create and test the script for A2 Unit 1.
4. **Phase 4: A2 Full Generation**: Run the script for all 30 A2 units.
5. **Phase 5: Verification**: Validate generated content and preview in the app.

## 6. Verification Approach
- **Linting**: Run `npm run lint`.
- **Validation Script**: Use existing validation scripts in `scripts/` (e.g., `validate-exercises.mjs`).
- **Manual Verification**: Check `/debug/a1-preview/unit-1` and `/debug/a2-preview/unit-1` in the browser.
