# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. [x] Review existing codebase to understand current architecture and patterns
2. [x] Analyze the feature definition and identify unclear aspects
3. [x] Ask the user for clarifications on aspects that significantly impact scope or user experience
4. [x] Make reasonable decisions for minor details based on context and conventions
5. [x] If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d8a47327-6c1a-49b1-9f81-14ac172f6480/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d8a47327-6c1a-49b1-9f81-14ac172f6480/requirements.md`.

1. [x] Review existing codebase architecture and identify reusable components
2. [x] Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d8a47327-6c1a-49b1-9f81-14ac172f6480/spec.md` with technical context, implementation approach, source code structure changes, data model/API/interface changes, delivery phases, and verification approach.

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d8a47327-6c1a-49b1-9f81-14ac172f6480/spec.md`.

1. [x] Break down the work into concrete tasks
2. [x] Each task should reference relevant contracts and include verification steps
3. [x] Replace the Implementation step below with the planned tasks

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/d8a47327-6c1a-49b1-9f81-14ac172f6480/plan.md`.

### [ ] Step: Implementation (Detailed Tasks)

- [x] **Task 1: File Deletion**
    - [x] Delete `src/app/cursos` directory.
    - [x] Verify deletion.
- [x] **Task 2: Redirect Update in `next.config.js`**
    - [x] Remove old redirects.
    - [x] Add new 301 redirects to homepage for all eliminated URLs.
- [x] **Task 3: Sitemap and Robots.txt Update**
    - [x] Remove eliminated URLs from `src/app/sitemap.ts`.
    - [x] Update `src/app/robots.ts` allow/disallow rules.
- [x] **Task 4: Navigation Component Update**
    - [x] Remove/Update links to eliminated URLs in `src/components/sections/Navigation.tsx`.
- [x] **Task 5: Global Search and Cleanup**
    - [x] Search for any remaining references to `/cursos`, `/diagnostico`, etc., in the codebase and clean them up.
- [x] **Task 6: Verification and Fixes**
    - [x] Fix `TypeError` in `PremiumUnitViewer` (missing `learning_outcomes`).
    - [ ] Resolve API route "Module not found" build errors.
    - [ ] Run `npm run build` and `npm run lint`.
- [ ] **Task 7: Push and Final Confirmation**
    - [ ] Push changes to repository.
    - [ ] Provide commit hash to user.