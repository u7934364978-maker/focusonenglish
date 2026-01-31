# Technical Specification - Week 18 Content Expansion

## 1. Technical Context
- **Course**: B2 Administration.
- **Files**: `theory.json`, `exercises.json` in `src/content/cursos/trabajo/administracion/b2/trimestre2/semana18/`.

## 2. Implementation Approach
Append data to existing arrays in `theory.json` and `exercises.json`.

### 2.1 Theory Updates (`theory.json`)
- Add sections for: `underperformance-pip`, `rewards-promotions`, `diversity-inclusion`, `health-safety-wellbeing`.
- Update `objectives` and `keyTerms`.

### 2.2 Exercise Updates (`exercises.json`)
- Add Exercises 16 through 75.
- Mix per block: 1 Reading, 10 MCQ, 4 Writing/Listening placeholders.

## 3. Delivery Phases
1. Phase 1: Theory expansion.
2. Phase 2: Implementation of Blocks 2 & 3 (Ex 16-45).
3. Phase 3: Implementation of Blocks 4 & 5 (Ex 46-75).
4. Phase 4: Validation.

## 4. Verification
- Manual JSON linting.
- Verify sequential IDs.
