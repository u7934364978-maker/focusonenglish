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

Save the output to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/17e2c0d6-6949-4dc0-b6e3-cef0188595c3/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach
- Source code structure changes
- Data model / API / interface changes
- Verification approach

If the task is complex enough, create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/17e2c0d6-6949-4dc0-b6e3-cef0188595c3/spec.md`:

- Break down the work into concrete tasks (incrementable, testable milestones)
- Each task should reference relevant contracts and include verification steps
- Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function).

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/17e2c0d6-6949-4dc0-b6e3-cef0188595c3/plan.md`. If the feature is trivial and doesn't warrant this breakdown, keep the Implementation step below as is.

---

### [x] Step: Implementation

Implement the task according to the technical specification and general engineering best practices.

1. Break the task into steps where possible.
2. Implement the required changes in the codebase.
3. Add and run relevant tests and linters.
4. Perform basic manual verification if applicable.
5. After completion, write a report to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/17e2c0d6-6949-4dc0-b6e3-cef0188595c3/report.md` describing:
   - What was implemented
   - How the solution was tested
   - The biggest issues or challenges encountered

---

### [x] Step: Critical Hotfix - TranslatedText Reference Error

**Issue**: Production site showing `Uncaught ReferenceError: TranslatedText is not defined`

**Fix Applied**:
- Added missing `TranslatedText` import to `MatchingExercise.tsx`
- Commit: `1e8fa1f6`
- Build Status: ✅ Success
- Changes: 1 file modified

---

### [x] Step: Critical Hotfix - Undefined .split() TypeError (Round 1)

**Issue**: `Uncaught TypeError: can't access property "split", e is undefined`

**Fixes Applied**:
- FocusedSession.tsx line 595: Add null check to `interaction.stimulus_en`
- ExerciseRenderer.tsx line 514: Add null check to `ex.text`
- Commit: `22a32535`
- Build Status: ✅ Success

---

### [x] Step: Critical Hotfix - Undefined .split() TypeError (Round 2)

**Issue**: `Uncaught TypeError: can't access property "split", e is undefined` (persisting in additional locations)

**Additional Fixes Applied**:
- GapFillRenderer.tsx: Add null check in renderGaps function
- SmartPronunciationEvaluator.tsx: Add null check for detailedFeedback
- PracticaIAClient.tsx: Add null check for lastMsg.text
- Commit: `adb3ecaa`
- Build Status: ✅ Success
- Changes: 4 files modified

---

### [ ] Step: Ready for New Feature Development

All critical errors resolved. Application is stable and ready for new feature development.
