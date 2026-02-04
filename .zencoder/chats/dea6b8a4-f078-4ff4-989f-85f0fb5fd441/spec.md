# Technical Specification - C2 Proficiency Course

## 1. Technical Context
- **Language**: TypeScript / Python (for generation scripts).
- **Frontend**: Next.js 15 (App Router).
- **Backend**: Supabase (Database & Auth).
- **Key Dependencies**: `src/lib/exercise-types.ts` (Core types).

## 2. Implementation Approach
We will replicate the architecture used for the B2 course, which is the most complete and robust in the repository.

### Reusable Patterns
- **Unit Structure**: 10 blocks per unit, 10 questions per block.
- **Factory Functions**: Create `createC2Unit` and `genC2Id` in a new `src/lib/c2-units/utils.ts`.
- **Data Model**: Follow the `Lesson` and `Exercise` interfaces from `exercise-types.ts`.
- **AI Generation**: Adapt `scripts/generate-b2-content.py` or create a new `scripts/generate-c2-course.ts` to produce the 60 units of content.

## 3. Source Code Structure Changes
- New directory: `src/lib/c2-units/`
    - `index.ts`: Exports all units.
    - `curriculum.ts`: Defines the 60-unit mapping (Topic, Grammar, Skills).
    - `utils.ts`: Utility functions for C2 units.
    - `unit-1.ts` to `unit-60.ts`: Individual unit files (auto-generated).
- Update `src/lib/course-data-c2.ts`: Integrate the new units into the full course object.

## 4. Data Model Changes
- No schema changes required for the Supabase tables, as the structure is already compatible with `Lesson` / `Exercise` types.
- Curriculum metadata will be expanded to include the 60 C2 units.

## 5. Delivery Phases
1. **Curriculum Mapping**: Define all 60 units (topics, grammar points) in `src/lib/c2-units/curriculum.ts`.
2. **Infrastructure**: Create `utils.ts` and `index.ts` in `src/lib/c2-units/`.
3. **Generation Pipeline**: Create a TypeScript/Python script to generate the unit files using AI.
4. **Content Generation**: Execute the generation in batches (e.g., 10 units at a time).
5. **Integration**: Link all 60 units in `src/lib/course-data-c2.ts`.

## 6. Verification Approach
- **Linting**: Run `npm run lint` to ensure TypeScript compliance.
- **Validation Scripts**: Use existing `scripts/validate-exercises.mjs` to check the generated JSON structure.
- **Manual Review**: Spot-check 5% of units for educational quality and CPE alignment.
