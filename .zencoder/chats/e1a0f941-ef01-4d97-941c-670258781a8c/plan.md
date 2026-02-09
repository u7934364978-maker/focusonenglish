# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e1a0f941-ef01-4d97-941c-670258781a8c/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e1a0f941-ef01-4d97-941c-670258781a8c/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e1a0f941-ef01-4d97-941c-670258781a8c/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e1a0f941-ef01-4d97-941c-670258781a8c/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

#### Phase 1: Global Content Provider Enhancements
1. [x] **Update `GlobalContentProvider.ts`**: Expand the `levels` array and implement recursive or multi-path loading to include `negociaciones-b2`, `viajes/a1`, and advanced levels (C1, C2).
2. [x] **Refine Specialization Logic**: Update the mapping logic to correctly categorize interactions from the new courses into `emails`, `finance`, and `travel`.
3. [x] **Verification**: Add temporary logs to verify the total count of exercises loaded for each specialization.

#### Phase 2: Client-Side Session Logic
4. [x] **Refactor `PracticaInteligenteClient.tsx`**: Replace the `window.location.reload()` with a dynamic queue update mechanism.
5. [x] **Implement `useEffect` for `sessionData`**: Ensure `PremiumCourseSession` receives updated `unitData` whenever the queue grows.
6. [x] **Optimize Initial Batch**: Modify `startSession` to fetch multiple exercises (3-5) to provide a smoother start.

#### Phase 3: Validation & Quality
7. [x] **Test Specialized Paths**: Manually verify that selecting "Emails Profesionales" or "Finanzas" starts the session with relevant content.
8. [x] **Infinite Mode Check**: Verify that completing the initial exercises triggers `fetchMore` and continues the session without a reload.
9. [x] **Lint & Type Check**: Run `npm run lint` and `npm run type-check`. (Note: Fixed several `supabase` null type errors that were blocking clean builds).

<!-- Internal validation check -->
