# Product Requirements Document (PRD) - Week 17 Extension

## 1. Feature Overview
The goal is to extend the content for Week 17 of the B2 Administration course (Human Resources Operations). Currently, the week contains 3 blocks of 15 exercises each (45 total). This task adds 2 more blocks of 15 exercises each, bringing the total to 75 exercises, along with corresponding theory for each new block.

## 2. Target Audience
B2 level English learners focusing on administrative roles, specifically in Human Resources.

## 3. Content Requirements

### Block 4: Payroll and Benefits Administration
- **Theory**: Overview of payroll logistics, compensation structures (salary, bonuses, commissions), and employee benefits (pension, health insurance).
- **Exercises**: 15 items (Ex 46-60).
- **Skills**: Listening (placeholder), Grammar, Vocabulary (Payroll terms), Reading.

### Block 5: Learning & Development (L&D) and Workplace Wellbeing
- **Theory**: Training programs, skill gap analysis, health and safety regulations, and employee wellbeing initiatives.
- **Exercises**: 15 items (Ex 61-75).
- **Skills**: Listening (placeholder), Grammar, Vocabulary (L&D terms), Reading.

### General Constraints
- **Exercise Types**: Must follow existing patterns (multipleChoice, writingTask, reading-comprehension).
- **Grammar**: Continue with B2 level structures. Suggested: Mixed Conditionals for HR scenarios or Passive Voice for formal documentation.
- **Language**: British/International English suitable for professional contexts.

## 4. Technical Constraints
- Data must be added to `src/content/cursos/trabajo/administracion/b2/trimestre2/semana17/theory.json` and `exercises.json`.
- Must adhere to the existing JSON schema (IDs must be unique and sequential).
- No new file creation for content; update existing ones.

## 5. Success Criteria
- Week 17 has 75 exercises in `exercises.json`.
- `theory.json` includes new sections for the added topics.
- All JSON files are valid and follow the project structure.
- The course remains accessible at the specified URL (though I can't check the live server, I can ensure the code is correct).
