# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification
### [x] Step: Planning

### [x] Step: Implementation (Unit 17)

1. [x] Restore exercises 1-10 from git history into `src/lib/course/a1/unit-17.ts`.
2. [x] Add exercises 11-20 (Breakfast topic) based on migration content.
3. [x] Add exercises 21-30 (Lunch topic) based on migration content.
4. [x] Add exercises 31-40 (Dinner topic) based on migration content.
5. [x] Add exercises 41-50 (Utensils & Actions topic) based on migration content.
6. [x] Add exercises 51-60 (Challenge Review & Extra vocabulary).
7. [x] Verify all 60 exercises have unique IDs and correct formatting.
8. [x] Run `npm run validate-exercises` (if it exists) or check for errors.

### [x] Step: Refactor Unit 19 (Months & Dates)

1. [x] Research "Months & Dates" content for A1 level.
2. [x] Replace current "Jobs" content in `src/lib/course/a1/unit-19.ts` with 60 new exercises about Months, Dates, and Birthdays.
3. [x] Ensure exercises include vocabulary (months, ordinal numbers), grammar (prepositions 'in', 'on'), and reading comprehension.
4. [x] Verify unique IDs (`a1-u19-e1` to `a1-u19-e60`) and `[[English|Spanish]]` formatting.
5. [x] Commit changes.

### [x] Step: Fix UI/UX Issues
1. [x] Fix missing text in Reading Comprehension exercises by updating `ExerciseRenderer.tsx` to implement a two-phase display: Reading Phase (Text only) and Question Phase (Questions).
2. [x] Ensure pedagogical logic in reading questions (avoiding triviality) and correct grouping of questions.

### [ ] Step: Audit and Fix Other Duplications
1. [x] Audit Units 1-25 to identify content duplications or syllabus misalignments.
2. [ ] Refactor identified units to match the syllabus (60 exercises each):
    - [ ] **Unit 6**: Family Members & Personal Info (REFACTORING READING SECTION)
    - [ ] **Unit 7**: Colors & Physical Descriptions
    - [x] **Unit 8**: Numbers 20-100 (Prices, Ages, Phone numbers) (Checked and aligned)
    - [ ] **Unit 9**: Jobs & Occupations
    - [ ] **Unit 10**: Module 1 Review & Assessment
    - [ ] **Unit 11**: Telling the Time
    - [ ] **Unit 12**: Days of the Week
    - [ ] **Unit 13**: Daily Routine
    - [ ] **Unit 14**: Present Simple: I, You, We, They
    - [ ] **Unit 15**: Present Simple: He, She, It (NEEDS REFACTOR)
    - [ ] **Unit 16**: At the Cafe (NEEDS REFACTOR)
    - [x] **Unit 17**: Breakfast, Lunch & Dinner (Done)
    - [ ] **Unit 18**: Likes & Dislikes (NEEDS REFACTOR)
    - [x] **Unit 19**: Months & Dates (Done)
    - [x] **Unit 20**: Health & Body (Done)
    - [ ] **Unit 21**: Rooms in a House (NEEDS REFACTOR - current Unit 5)
    - [ ] **Unit 22**: Furniture & Household Items (NEEDS REFACTOR - current Unit 5)
    - [ ] **Unit 23**: There is / There are (NEEDS REFACTOR - current Unit 5)
    - [ ] **Unit 24**: Prepositions of Place (NEEDS REFACTOR - current Unit 5)
    - [ ] **Unit 25**: My Neighborhood
    - [x] **Unit 4**: Numbers 1-10 & Objects (Done)
    - [x] **Unit 5**: Simple Present Actions (Done)
3. [ ] Audit and Refactor Units 26-60 (currently placeholders).
