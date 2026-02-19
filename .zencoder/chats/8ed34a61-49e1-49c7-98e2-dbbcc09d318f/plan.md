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

## [x] Phase: Content Fixes (Unit 12)

1. [x] **Fix Exercise a1-u12-e38**: Correct the sentence "Today is, tomorrow Monday is" to "Today is Monday, tomorrow is".
2. [x] **Verification**: Visually verified code change.
3. [x] **Final Push**: Commit and push the changes.
