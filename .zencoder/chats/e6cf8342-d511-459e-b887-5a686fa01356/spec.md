# Technical Specification - B2 English Course Implementation

## 1. Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Data Storage**: Static TypeScript files in `src/lib/` (mirrors A1/A2/B1 patterns)
- **Validation**: Schema-based validation for exercises (using `exercise-types.ts`)

## 2. Implementation Approach
To handle the scale of 6,000 exercises (60 units x 100 exercises), we will use a **modular data structure**:

- **`src/lib/course-data-b2.ts`**: Main entry point for B2 curriculum, defining modules and lesson metadata.
- **`src/lib/b2-units/`**: A new directory to store individual unit files (e.g., `unit-1.ts`, `unit-2.ts`, ... `unit-60.ts`).
- **Standardized Exercise Blocks**: Each unit will contain 10 exercise blocks, with 10 questions each, ensuring the "100 exercises" requirement is met systematically.

### 2.1. Exercise Distribution per Unit
Each of the 60 units will follow this balanced structure:
1.  **Grammar Focus 1** (10 questions)
2.  **Grammar Focus 2** (10 questions)
3.  **Vocabulary / Collocations** (10 questions)
4.  **Phrasal Verbs / Idioms** (10 questions)
5.  **Use of English (Word Formation/Transformations)** (10 questions)
6.  **Reading Comprehension** (10 questions)
7.  **Listening Practice** (10 questions)
8.  **Writing Analysis** (10 questions)
9.  **Speaking / Pronunciation** (10 questions)
10. **Review / Mixed Practice** (10 questions)

## 3. Source Code Structure Changes
- New directory: `src/lib/b2-units/`
- New files: `src/lib/b2-units/unit-1.ts` through `src/lib/b2-units/unit-60.ts`
- Update: `src/lib/course-data-b2.ts` to import and aggregate all units.

## 4. Curriculum Mapping (Overview)
The 60 units will be grouped into 6 Modules (10 units each):
- **Module 1**: Narrative & Relationships (Tenses, Personality)
- **Module 2**: Work & Technology (Future forms, Innovation)
- **Module 3**: Social Issues & Environment (Conditionals, Sustainability)
- **Module 4**: Culture & Lifestyle (Passive, Arts, Health)
- **Module 5**: Academic & Scientific (Modals, Research)
- **Module 6**: Global Issues & Exam Prep (Advanced structures, Mixed review)

## 5. Delivery Phases
1.  **Phase 1**: Curriculum Definition & Unit 1 Template (Completed)
2.  **Phase 2**: Implementation of Units 1-10 (Module 1)
3.  **Phase 3**: Implementation of Units 11-30 (Modules 2-3)
4.  **Phase 4**: Implementation of Units 31-60 (Modules 4-6)
5.  **Phase 5**: Verification & Integration

## 6. Verification Approach
- **Linting**: Run `npm run lint` to ensure TypeScript compliance.
- **Validation**: Use existing `scripts/audit-generic.mjs` (if applicable) or a custom script to verify question counts and types.
