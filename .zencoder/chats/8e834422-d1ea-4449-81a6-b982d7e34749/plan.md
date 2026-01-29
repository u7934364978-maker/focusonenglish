# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. [x] Review existing codebase to understand current architecture and patterns
2. [x] Analyze the feature definition and identify unclear aspects
3. [x] Ask the user for clarifications on aspects that significantly impact scope or user experience
4. [x] Make reasonable decisions for minor details based on context and conventions
5. [x] If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8e834422-d1ea-4449-81a6-b982d7e34749/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8e834422-d1ea-4449-81a6-b982d7e34749/requirements.md`.

1. [x] Review existing codebase architecture and identify reusable components
2. [x] Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8e834422-d1ea-4449-81a6-b982d7e34749/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/8e834422-d1ea-4449-81a6-b982d7e34749/spec.md`.

1. [x] Break down the work into concrete tasks
2. [x] Each task should reference relevant contracts and include verification steps
3. [x] Replace the Implementation step below with the planned tasks

### [ ] Step: Implementation

#### Phase 1: Curriculum and Data
- [x] **Task 1.1**: Create `src/lib/sectors/admin-curriculum.ts` with comprehensive Administration English curriculum for levels A1 to C2.
- [x] **Task 1.2**: Update `src/lib/sectors/index.ts` to replace `finanzas` with `administracion` and import the new curriculum.
- [x] **Task 1.3**: Rename the directory `src/content/cursos/trabajo/finanzas/` to `src/content/cursos/trabajo/administracion/`.
- [x] **Task 1.4**: Global search and replace of `/cursos/trabajo/finanzas` to `/cursos/trabajo/administracion` in all content files.

#### Phase 2: UI and Navigation
- [x] **Task 2.1**: Update `src/components/sections/Navigation.tsx` to change "Banca y Finanzas" to "Administración" and update all associated links.

#### Phase 3: Final Verification
- [x] **Task 3.1**: Verify all routes work correctly and the new curriculum is displayed.
- [x] **Task 3.2**: Run `npm run lint` and `npm run typecheck` to ensure no errors were introduced.
