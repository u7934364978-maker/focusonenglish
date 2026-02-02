# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ee8a3440-5a5f-41b9-99c1-71a672e78f41/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ee8a3440-5a5f-41b9-99c1-71a672e78f41/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ee8a3440-5a5f-41b9-99c1-71a672e78f41/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ee8a3440-5a5f-41b9-99c1-71a672e78f41/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

1. [x] **Fix Unit List Page Crash**: Update `src/app/curso/ingles-a1/page.tsx` to safely handle missing `course` data.
2. [x] **Standardize Unit JSONs**: Refactor `unit33.json` and `unit34.json` to the standard `UnitData` structure.
3. [x] **Database Fetching Service**: Add `getPremiumUnitData` to `src/lib/services/course-service.ts` to fetch exercises and map them to `UnitData`.
4. [x] **Dynamic Data Loading**: Update `src/app/curso/ingles-a1/[unitId]/page.tsx` to load Unit 6 from Supabase and others from JSON.
5. [x] **Final Verification**: Run linting and manually verify unit rendering.
6. [x] **Remove Exercise Counts and Durations**: Remove exercise/activity counts and duration information from unit overview, summary slides, and activity progress indicators across all course viewers.
7. [x] **Rebrand to Inglés Premium**: Rename "duolingo-a1" route to "ingles-a1", update component names, types, and services to reflect the new Premium branding.
