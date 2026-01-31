# Technical Specification - Week 17 Content Expansion

## 1. Technical Context
- **Language**: JSON for content.
- **Course**: B2 Administration (Human Resources Operations).
- **Target Files**: 
    - `src/content/cursos/trabajo/administracion/b2/trimestre2/semana17/theory.json`
    - `src/content/cursos/trabajo/administracion/b2/trimestre2/semana17/exercises.json`

## 2. Implementation Approach
We will append new data to the existing JSON arrays.

### 2.1 Theory Updates (`theory.json`)
- Add 2 new sections to the `sections` array:
    - `payroll-benefits`: Theory on payroll, compensation, and benefits.
    - `learning-development`: Theory on training and wellbeing.
- Append new items to `objectives` and `keyTerms`.

### 2.2 Exercise Updates (`exercises.json`)
- Add 30 new exercises (Ex 46 to Ex 75).
- Structure:
    - **Exercises 46-60**: Focus on Payroll & Benefits.
    - **Exercises 61-75**: Focus on L&D & Wellbeing.
- Content Mix (per block of 15):
    - 1 Reading Comprehension (with 2 questions).
    - 10 Multiple Choice questions.
    - 4 Writing Tasks (short sentences or emails).
    - 1 Listening placeholder (as per existing pattern).

## 3. Data Model Changes

### Exercise Object structure:
```json
{
  "id": "adm-b2-w17-exXX",
  "type": "multipleChoice" | "writingTask" | "reading-comprehension",
  "prompt": "...",
  "options": ["...", "..."], // for multipleChoice
  "answerIndex": 0, // for multipleChoice
  "explanation": "...", // for multipleChoice
  "modelAnswer": "...", // for writingTask
  "keywords": ["..."] // for writingTask
}
```

## 4. Verification Approach
- **Validation Script**: Run `node scripts/validate-week.mjs src/content/cursos/trabajo/administracion/b2/trimestre2/semana17/`.
- **JSON Lint**: Ensure no syntax errors in the modified files.
- **ID Consistency**: Ensure `adm-b2-w17-ex46` follows `adm-b2-w17-ex45`.

## 5. Delivery Phases
1. **Phase 1**: Implement Theory for Blocks 4 & 5.
2. **Phase 2**: Implement Exercises for Block 4 (46-60).
3. **Phase 3**: Implement Exercises for Block 5 (61-75).
4. **Phase 4**: Final Validation.
