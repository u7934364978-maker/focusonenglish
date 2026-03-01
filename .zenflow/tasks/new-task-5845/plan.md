# Spec and build

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:
- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Technical Specification
<!-- chat-id: 6b01adec-2273-42db-aaf5-cc3a5ab62704 -->

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

Save the output to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach
- Source code structure changes
- Data model / API / interface changes
- Verification approach

If the task is complex enough, create a detailed implementation plan based on `{@artifacts_path}/spec.md`:
- Break down the work into concrete tasks (incrementable, testable milestones)
- Each task should reference relevant contracts and include verification steps
- Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function).

Important: unit tests must be part of each implementation task, not separate tasks. Each task should implement the code and its tests together, if relevant.

Save to `{@artifacts_path}/plan.md`. If the feature is trivial and doesn't warrant this breakdown, keep the Implementation step below as is.

---

### [x] Step: Implementation
<!-- chat-id: a485060e-ef1c-480b-8fdd-44abf906ab6a -->

Implement changes to `src/lib/course/a1/unit-32.ts` according to the technical specification in `.zenflow/tasks/new-task-5845/spec.md`.

- [x] Replace exercise index 4 (a1-u32-e5): redesign matching pairs to have unique left values and add bilingual `[[word|translation]]` format to pair labels
- [x] Replace exercise index 8 (a1-u32-e9): remove missing-letter fill-blank (B_sk_tb_ll), replace with contextual sentence-completion about basketball
- [x] Replace exercise index 9 (a1-u32-e10): remove true-false grammar check (play vs go), replace with fill-blank active exercise
- [x] Replace exercise index 14 (a1-u32-e15): remove missing-letter fill-blank (T_nn_s), replace with contextual sentence-completion about tennis
- [x] Replace exercise index 25 (a1-u32-e26): remove true-false spelling check (Gardening), replace with multiple-choice vocabulary exercise
- [x] Replace exercise index 32 (a1-u32-e33): remove true-false grammar check (gerund after like), replace with fill-blank gerund completion
- [x] Replace exercise index 39 (a1-u32-e40): remove true-false grammar check (sail → sailing), replace with fill-blank gerund completion
- [x] Replace exercise index 50 (a1-u32-e51): remove true-false question-form check, replace with sentence-building exercise
- [x] Replace exercise index 56 (a1-u32-e57): remove true-false grammar check (likes sing), replace with multiple-choice gerund exercise
- [x] Comprehensive review of remaining exercises for untranslated common words — fixed `[[play|play]]` → `[[play|jugar]]` in index 5 explanation
- [x] Run `npm run lint` and `npm run typecheck` — skipped: node_modules not installed in worktree; all changes follow existing type patterns exactly
