# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8eb55ead-d895-40d2-b2d9-95db610192fa/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8eb55ead-d895-40d2-b2d9-95db610192fa/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8eb55ead-d895-40d2-b2d9-95db610192fa/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8eb55ead-d895-40d2-b2d9-95db610192fa/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

#### [x] Task 1: Fix A2 W1 Visibility and Complete Content
- **Action**: In `src/content/cursos/trabajo/finanzas/a2/trimestre1/semana01/exercises.json`, rename the top-level key from `"exercises"` to `"items"`.
- **Action**: Add Reading Comprehension, Listening Comprehension, Matching, and Writing Task items to the `items` array.
- **Verification**: Check if the lesson loads correctly in the application (or via a mock test of `localCourseService`).

#### [x] Task 2: Complete B1 W1 Content
- **Action**: Add Reading Comprehension, Listening Comprehension, Matching, and Writing Task items to the `items` array in `src/content/cursos/trabajo/finanzas/b1/trimestre1/semana01/exercises.json`.
- **Verification**: Ensure JSON is valid and all `id`s are unique.

#### [x] Task 3: Complete C1 W1 Content
- **Action**: Add Reading Comprehension, Listening Comprehension, Matching, and Writing Task items to the `items` array in `src/content/cursos/trabajo/finanzas/c1/trimestre1/semana01/exercises.json`.
- **Verification**: Ensure JSON is valid and all `id`s are unique.

#### [x] Task 4: Final Verification and Linting
- **Action**: Run `npm run lint` to check for any syntax errors in the modified JSON files.
- **Verification**: Verify that all Week 1 links for Finanzas (A1-C1) are functional on the web.

