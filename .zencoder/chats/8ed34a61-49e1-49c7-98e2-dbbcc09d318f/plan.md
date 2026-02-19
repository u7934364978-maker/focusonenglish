# Spec and build

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:

- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

---

## Workflow Steps

### [x] Step: Technical Specification

Assess the task's difficulty, as underestimating it leads to poor outcomes.

- easy: Straightforward implementation, trivial bug fix or feature
- medium: Moderate complexity, some edge cases or caveats to consider
- hard: Complex logic, many caveats, architectural considerations, or high-risk changes

Create a technical specification for the task that is appropriate for the complexity level:

- Review the existing codebase architecture and identify reusable components.
- Define the implementation approach based on established patterns in the project.
- Identify all source code files that will be created or modified.
- Define any necessary data model, API, or interface changes.
- Describe verification steps using the project's test and lint commands.

Save the output to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/8ed34a61-49e1-49c7-98e2-dbbcc09d318f/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach
- Source code structure changes
- Data model / API / interface changes
- Verification approach

If the task is complex enough, create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/8ed34a61-49e1-49c7-98e2-dbbcc09d318f/spec.md`:

- Break down the work into concrete tasks (incrementable, testable milestones)
- Each task should reference relevant contracts and include verification steps
- Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function).

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/8ed34a61-49e1-49c7-98e2-dbbcc09d318f/plan.md`. If the feature is trivial and doesn't warrant this breakdown, keep the Implementation step below as is.

---

## [x] Implementation (Unit 9)

1. [x] **Add Missing Exercises**: Create `a1-u9-e1` and `a1-u9-e11` in `src/lib/course/a1/unit-9.ts`.
2. [x] **Bilingualize Vocabulary (e1-e10)**: Update all text fields in exercises e1-e10 to use `[[English|Spanish]]`.
3. [x] **Bilingualize Grammar (e11-e20)**: Update all text fields in exercises e11-e20.
4. [x] **Bilingualize Review & Reinforcement (e21-e50)**: Update exercises e21-e50.
5. [x] **Bilingualize Reading Comprehension (e51-e60)**: Update exercises e51-e60.
6. [x] **Verification**: Run `npm run validate-exercises` and `npm run lint`.
7. [x] **Final Report**: Write the completion report.

---

## [x] Phase: Reading Translation Refactoring (Unit 9 & 10)

1. [x] **Refactor Unit 9 Reading (e51-e60)**: Change block translations in `transcript` and `question` to word-by-word/phrase-by-phrase `[[English|Spanish]]`.
2. [x] **Refactor Unit 10 Reading (e51-e60)**: Change block translations in `transcript` and `question` to word-by-word/phrase-by-phrase `[[English|Spanish]]`.
3. [x] **Verification**: Run `npm run validate-exercises`.

---

## [x] Phase: Hover Translation UI (Reading Exercises)

1. [x] **Modify TranslatedText Component**: Update `src/components/course/exercises/TranslatedText.tsx` to handle hover-based translation display and add `AudioButton` for pronunciation.
2. [x] **Verification**: Visually verify in the browser that translations appear on hover and disappear on mouse leave. (Automated with Playwright: `e2e/a1-u9-u10-hover-translations.spec.ts`)
3. [x] **Final Push**: Commit and push the changes.

---

## [x] Phase: Reading Translation Refactoring (Unit 11 & 12)

1. [x] **Refactor Unit 11 Reading (e51-e60)**: Change block translations in `transcript` and `question` to word-by-word/phrase-by-phrase `[[English|Spanish]]`.
2. [x] **Refactor Unit 12 Reading (e51-e60)**: Change block translations in `transcript` and `question` to word-by-word/phrase-by-phrase `[[English|Spanish]]`.
3. [x] **Verification**: Run `npm run validate-exercises`.

---

## [x] Phase: Granular Translation Refactor (All A1 Units)

1. [x] **Refactor Unit 4**: Change block translations in reading exercises to word-by-word.
2. [x] **Refactor Unit 5**: Change block translations in reading exercises to word-by-word.
3. [x] **Refactor Unit 6**: Change block translations in reading exercises to word-by-word.
4. [x] **Refactor Unit 7**: Change block translations in reading exercises to word-by-word.
5. [x] **Refactor Unit 8**: Change block translations in reading exercises to word-by-word.
6. [x] **Refactor Unit 13**: Change block translations in reading exercises to word-by-word.
7. [x] **Refactor Units 14-25**: Change block translations in reading exercises to word-by-word.
    - [x] Unit 14
    - [x] Unit 15
    - [x] Unit 16
    - [x] Unit 17
    - [x] Unit 18
    - [x] Unit 19
    - [x] Unit 20
    - [x] Unit 21
    - [x] Unit 22
    - [x] Unit 23
    - [x] Unit 24
    - [x] Unit 25
8. [x] **Verification**: Run `npm run validate-exercises`.
9. [x] **Final Push**: Commit and push the changes.

---

## [x] Phase: Complete A1 Units (18-60) to 60 Exercises

1. [x] **Complete Unit 18**: Fill missing exercises e1-e3, e24-e50 following academic line (Clothes & Shopping).
2. [x] **Complete Unit 19**: Fill missing exercises up to e60 (Dates, Months, Ordinal Numbers).
3. [x] **Complete Unit 20**: Fill missing exercises up to e60 (Body Parts, Health Problems).
4. [x] **Complete Unit 21**: Correct curriculum and fill up to e60 (Daily Routine & Time).
5. [x] **Complete Unit 22**: Correct curriculum and fill up to e60 (Free Time & Hobbies).
6. [x] **Complete Unit 23**: Correct curriculum and fill up to e60 (Jobs & Workplace).
7. [x] **Complete Unit 24**: Correct curriculum and fill up to e60 (Food & Drinks).
8. [x] **Complete Unit 25**: Correct curriculum and fill up to e60 (Actions / Present Continuous).
9. [x] **Complete Unit 26**: Correct curriculum and fill up to e60 (Future: Be going to).
10. [x] **Complete Units 27-30**: Fill up to e60 exercises.
    - [x] Unit 27 (Giving Directions & Places)
    - [x] Unit 28 (Past Simple: To Be)
    - [x] Unit 29 (Past Simple: Regular Verbs)
    - [x] Unit 30 (Past Simple: Irregular Verbs)
11. [x] **Complete Units 31-40**: Fill up to e60 exercises following curriculum.
    - [x] Unit 31 (Transportation & Travel)
    - [x] Unit 32 (Weather & Seasons)
    - [x] Unit 33 (Health & Body II)
    - [x] Unit 34 (Technology & Devices)
    - [x] Unit 35 (Comparative Adjectives)
    - [x] Unit 36 (Superlative Adjectives)
    - [x] Unit 37 (Modals: Can / Could)
    - [x] Unit 38 (Modals: Should / Must)
    - [x] Unit 39 (Adverbs of Manner)
    - [x] Unit 40 (Review Module 4)
12. [x] **Complete Units 41-59**: Fill up to e60 exercises following curriculum.
    - [x] Unit 41 (Shopping & Money)
    - [x] Unit 42 (Present Perfect Introduction)
    - [x] Unit 43 (Experiences: Been vs Gone)
    - [x] Unit 44 (Ever / Never)
    - [x] Unit 45 (Just / Already / Yet)
    - [x] Unit 46 (Since / For)
    - [x] Unit 47 (Review Module 5)
    - [x] Unit 48 (Environment & Nature)
    - [x] Unit 49 (Animals & Habitats)
    - [x] Unit 50 (Movies & TV Shows)
    - [x] Unit 51 (Media & News)
    - [x] Unit 52 (Social Media & Online Life)
    - [x] Unit 53 (Technology of the Future)
    - [x] Unit 54 (Space & Exploration)
    - [x] Unit 55 (Science & Innovation)
    - [x] Unit 56 (Inventions that Changed the World)
    - [x] Unit 57 (Culture & Traditions)
    - [x] Unit 58 (Society & Community)
    - [x] Unit 59 (Future Goals & Dreams)
13. [x] **Complete Unit 60**: Final Review & A1 Certification.
14. [x] **Verification**: Run `npm run validate-exercises`.
15. [x] **Final Push**: Commit and push the changes.
