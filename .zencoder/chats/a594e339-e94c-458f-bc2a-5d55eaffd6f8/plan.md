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

Save the output to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a594e339-e94c-458f-bc2a-5d55eaffd6f8/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach
- Source code structure changes
- Data model / API / interface changes
- Verification approach

If the task is complex enough, create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a594e339-e94c-458f-bc2a-5d55eaffd6f8/spec.md`:

- Break down the work into concrete tasks (incrementable, testable milestones)
- Each task should reference relevant contracts and include verification steps
- Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function).

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a594e339-e94c-458f-bc2a-5d55eaffd6f8/plan.md`. If the feature is trivial and doesn't warrant this breakdown, keep the Implementation step below as is.

---

### [ ] Step: Implementation

Implement the task according to the technical specification and general engineering best practices.

1. [x] Stage and commit TOEFL course content and audio files.
2. [x] Push changes to the repository.
3. [x] Provide the commit number to the user.
4. [x] Write a report to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a594e339-e94c-458f-bc2a-5d55eaffd6f8/report.md`.
5. [in_progress] Stage and commit all remaining course content and audio files for all levels (TOEFL, B2, C1, C2, etc.).
6. [pending] Push all changes to the repository.
7. [pending] Provide the commit number to the user.
8. [pending] Update the report in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a594e339-e94c-458f-bc2a-5d55eaffd6f8/report.md`.
