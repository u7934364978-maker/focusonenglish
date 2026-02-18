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

## [x] Implementation (Unit 10)

1. [x] **Add Missing Exercises**: Create `a1-u10-e1` in `src/lib/course/a1/unit-10.ts`.
2. [x] **Bilingualize Vocabulary (e1-e10)**: Update `title`, `instructions`, and `explanation` to `[[English|Spanish]]`.
3. [x] **Bilingualize Grammar (e11-e20)**: Update text fields.
4. [x] **Bilingualize Review & Practice (e21-e50)**: Update text fields.
5. [x] **Bilingualize Reading Comprehension (e51-e60)**: Update text fields.
6. [x] **Verification**: Run `npm run validate-exercises` and `npm run lint`.
7. [x] **Final Report**: Write the completion report.
