# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/77eadbbd-8a4d-4f4a-898c-dcc22e1f3bcd/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/77eadbbd-8a4d-4f4a-898c-dcc22e1f3bcd/requirements.md`.

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/77eadbbd-8a4d-4f4a-898c-dcc22e1f3bcd/spec.md`.

### [x] Step: Implementation

1. **Delete legacy routes**: Remove `src/app/curso` and `src/app/dashboard/general`.
2. **Expand Unit 1 (A1)**:
    - Update `src/lib/course/a1/unit-1.ts` to include 60 exercises.
    - Add Reading Comprehension exercises (simple A1 texts).
    - Maintain "Hello! Introductions" theme with expanded vocabulary (countries, professions, feelings).
3. **Verify Implementation**:
    - Check `/debug/a1-preview/unit-1` in the browser.
    - Ensure all links in `/debug` are functional.

### [x] Step: Test Plan Approval
- **Framework**: Playwright.
- **Scope**: Verify that `/debug/a1-preview/unit-1` contains 60 exercises and that legacy routes are gone (404).
- **Primary Flows**: Navigation between exercises, completion of reading exercises.

### [x] Step: Running Tests
- Ran `npm run test:e2e e2e/unit-1-expansion.spec.ts`.
- Results: All 3 tests passed in chromium.

### [x] Step: Expand Unit 2 (A1)
1. **Analyze Unit 2**: Current content has 11 exercises.
2. **Expand to 60 exercises**:
    - Theme: "Nice to meet you!" (Introductions, People, Relations).
    - Add Vocabulary: Family, more relations (neighbor, boss), common adjectives.
    - Add Grammar: Possessive adjectives (his, her, our, their), Plurals.
    - Add Reading Comprehension blocks.
3. **Verify Implementation**:
    - Check `/debug/a1-preview/unit-2` in the browser.
4. **Test Plan Approval**:
    - Verify that `/debug/a1-preview/unit-2` contains 60 exercises.
    - Ran `npm run test:e2e e2e/unit-2-expansion.spec.ts`.
    - Results: All 3 tests passed in chromium.

### [x] Step: Expand Unit 3 (A1)
1. **Analyze Unit 3**: Current content has 11 exercises.
2. **Expand to 60 exercises**:
    - Theme: "Numbers and Quantities" (Numbers 1-100, age, phone numbers, quantities).
    - Add Vocabulary: Numbers 21-100, common objects (plural), phone vocabulary.
    - Add Grammar: Have/Has, Plural nouns (regular/irregular review), Questions with "How many".
    - Add Reading Comprehension blocks.
3. **Verify Implementation**:
    - Check `/debug/a1-preview/unit-3` in the browser.
4. **Test Plan Approval**:
    - Verify that `/debug/a1-preview/unit-3` contains 60 exercises.
    - Ran `npm run test:e2e e2e/unit-3-expansion.spec.ts`.
    - Results: All 3 tests passed in chromium.

### [x] Step: Expand Unit 4 (A1) - Redo with new focus
1. **Analyze Unit 4**: Redo with higher academic complexity.
2. **Expand to 60 exercises**:
    - Theme: "Daily Life & Routines" (Daily activities, time, days of the week).
    - Add Vocabulary: Verbs (get up, work, eat, sleep, go), Time expressions, Days.
    - Add Grammar: Present Simple (I/You/We/They), Adverbs of frequency (always, usually, never).
    - Add Reading Comprehension: Detailed daily routine of a professional or student.
3. **Verify Implementation**:
    - Check `/debug/a1-preview/unit-4` in the browser.
4. **Test Plan Approval**:
    - Verify that `/debug/a1-preview/unit-4` contains 60 exercises with the new theme.
    - Ran `npm run test:e2e:chromium e2e/unit-4-expansion.spec.ts`.
    - Results: All 3 tests passed in chromium.
    - **Refinement**: Replaced "eat" with "have" for meals (breakfast, lunch, dinner) to be more idiomatic.
    - **Fix**: Updated Exercise 8 to have better options and Exercise 4 to use "have".
    - **Fix**: Ensured Unit 1 reading exercises are gap-free in the questions.

### [x] Step: Expand Unit 5 (A1)
1. **Analyze Unit 5**: Current content was "Countries & Nationalities", redone to "My Home and Furniture" as per plan.
2. **Expand to 60 exercises**:
    - Theme: "My Home and Furniture" (Rooms in the house, furniture, describing a home).
    - Add Vocabulary: Rooms (kitchen, living room, bedroom), Furniture (sofa, table, bed), Adjectives for home (comfortable, small, modern).
    - Add Grammar: There is / There are, Prepositions of place (in, on, under, next to, between).
    - Add Reading Comprehension: Description of a dream house or a famous apartment.
3. **Verify Implementation**:
    - Check `/debug/a1-preview/unit-5` in the browser.
4. **Test Plan Approval**:
    - Verify that `/debug/a1-preview/unit-5` contains 60 exercises.
    - Ran `npm run test:e2e:chromium e2e/unit-5-expansion.spec.ts`.
    - Results: All tests passed.

### [x] Step: Expand Unit 6 (A1)
1. **Analyze Unit 6**: Current content has 11 exercises.
2. **Expand to 60 exercises**:
    - Theme: "Food and Drink" (Common foods, drinks, ordering in a cafe).
    - Add Vocabulary: Fruits, vegetables, dairy, meat, common drinks, cafe menu items.
    - Add Grammar: Countable vs Uncountable nouns, Some / Any, "I would like...".
    - Add Reading Comprehension: Detailed descriptions of meals and cafe visits.
3. **Verify Implementation**:
    - Check `/debug/a1-preview/unit-6` in the browser.
4. **Test Plan Approval**:
    - Verify that `/debug/a1-preview/unit-6` contains 60 exercises.
    - Ran `npm run test:e2e:chromium e2e/unit-6-expansion.spec.ts`.
    - Results: All tests passed.

### [x] Step: Expand Unit 7 (A1)
1. **Analyze Unit 7**: Current content has 11 exercises.
2. **Expand to 60 exercises**:
    - Theme: "Leisure and Hobbies" (Sports, free time activities, abilities).
    - Add Vocabulary: Common hobbies (reading, swimming, music), Sports.
    - Add Grammar: Can / Can't for ability, Like / Love / Hate + -ing.
    - Add Reading Comprehension: Interview with a person about their hobbies.
3. **Verify Implementation**:
    - Check `/debug/a1-preview/unit-7` in the browser.
4. **Test Plan Approval**:
    - Verify that `/debug/a1-preview/unit-7` contains 60 exercises.
