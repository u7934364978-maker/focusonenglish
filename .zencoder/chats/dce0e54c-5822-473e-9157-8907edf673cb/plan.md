# Fix bug

## Workflow Steps

### [x] Step: Investigation and Planning

Analyze the request and identify the source of truth for B2 course objectives.

1. [x] Locate B2 course content in the repository (`src/content/cursos/ingles-b2/`)
2. [x] Identify the structure of the academic objectives in JSON files (`learning_outcomes` and `unit_title`)
3. [x] Extract objectives for all 30 units
4. [x] Format and present the findings to the user

### [x] Step: Content Audit (Units 12-30)

Verify that exercises align with academic objectives.

1. [x] Audit Unit 12: Reviews and Articles, Wish and Regret, Debate and Discussion
2. [x] Audit Unit 13: Formal Letters and Reports, Lifestyle and Well-being, Participle Clauses
3. [x] Audit Unit 14: Debate and Discussion, Complex Texts and Arguments, Reviews and Articles
4. [x] Audit Unit 15: Perfect Modals, Lectures and Presentations, Complex Texts and Arguments
5. [x] Audit Unit 16: Reviews and Articles, Wish and Regret, Debate and Discussion
6. [x] Audit Unit 17: Inversion, Mixed Conditionals, Lifestyle and Well-being
7. [x] Audit Unit 18: Formal Letters and Reports, Society and Social Issues, Idiomatic Expressions
8. [x] Audit Unit 19: Wish and Regret, Lectures and Presentations, Debate and Discussion
9. [x] Audit Unit 20: Mixed Conditionals, Complex Texts and Arguments, Reviews and Articles
10. [x] Audit Unit 21: Debate and Discussion, Inversion, Idiomatic Expressions
11. [x] Audit Unit 22: Mixed Conditionals, Participle Clauses, Perfect Modals
12. [x] Audit Unit 23: Society and Social Issues, Lectures and Presentations, Mixed Conditionals
13. [x] Audit Unit 24: Society and Social Issues, Wish and Regret, Inversion
14. [x] Audit Unit 25: Idiomatic Expressions, Debate and Discussion, Lectures and Presentations
15. [x] Audit Unit 26: Inversion, Lectures and Presentations, Media and Communication
16. [x] Audit Unit 27: Complex Texts and Arguments, Participle Clauses, Reviews and Articles
17. [x] Audit Unit 28: Participle Clauses, Mixed Conditionals, Media and Communication
18. [x] Audit Unit 29: Society and Social Issues, Lectures and Presentations, Idiomatic Expressions
19. [x] Audit Unit 30: Perfect Modals, Reviews and Articles, Lectures and Presentations

### [x] Step: Implementation

Apply fixes to B2 course units based on audit findings.

1. [x] Fix Unit 15 (Mismatch in B1_I1)
2. [x] Fix Unit 16 (Wish/Regret grammar logic)
3. [x] Fix Unit 19 (Wish/Regret errors and B3_I1 mismatch)
4. [x] Fix Unit 20 (Mismatches in B1_I1 and B3_I1)
5. [x] Fix Unit 21 (Mismatch in B1_I1)
6. [x] Fix Unit 22 (Conditional errors and mismatches)
7. [x] Fix Unit 23 (Add actual Mixed Conditionals to B3)
8. [x] Fix Unit 25 (Mismatch in B2_I1)
9. [x] Fix Unit 27 (Participle clause errors and B3_I1 mismatch)
10. [x] Fix Unit 28 (Mismatches and logic errors)
11. [x] Fix Unit 30 (Mismatch in B1_I1 and answer error in B2_I1)

### [ ] Step: B2 Course Content Refactoring (Unit 12-30)

Convert `fill-blank` and `vocabulary` exercises to `multiple-choice` for units 12-30 where options are missing in the 11-20 range.

1. [x] Fix Unit 12 (Exercises 11-20)
2. [x] Fix Unit 13 (Exercises 11-30)
3. [x] Fix Unit 14 (Exercises 11-40)
4. [x] Fix Unit 15 (Exercises 11-40)
5. [x] Fix Unit 16 (Exercises 11-40)
6. [x] Fix Unit 17 (Exercises 11-40)
7. [x] Fix Unit 18 (Exercises 11-40)
8. [x] Fix Unit 19 (Exercises 11-40)
9. [x] Fix Unit 20 (Exercises 11-20)
10. [x] Fix Unit 21 (Exercises 11-30)
11. [x] Fix Unit 22 (Exercises 11-30)
12. [x] Fix Unit 23 (Exercises 11-30)
13. [x] Fix Unit 24 (Exercises 11-30)
14. [x] Fix Unit 25 (Exercises 11-30)
15. [x] Fix Unit 26 (Exercises 11-30)
16. [x] Fix Unit 27 (Exercises 11-30)
17. [x] Fix Unit 28 (Exercises 11-30)
18. [x] Fix Unit 29 (Exercises 11-30)
19. [x] Fix Unit 30 (Exercises 11-30)

If blocked or uncertain, ask the user for direction.
