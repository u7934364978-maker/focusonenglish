# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/26f3dae3-81d8-4fbb-8a7b-c08a998fb70d/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/26f3dae3-81d8-4fbb-8a7b-c08a998fb70d/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/26f3dae3-81d8-4fbb-8a7b-c08a998fb70d/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/26f3dae3-81d8-4fbb-8a7b-c08a998fb70d/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/26f3dae3-81d8-4fbb-8a7b-c08a998fb70d/plan.md`.

### [x] Step: Implementation

#### Phase 1: Infrastructure & Content Audit
- [x] **Task 1: Verify existing schema compliance**
  - Action: Run a validation script against `src/content/cursos/**/*.json` using `InteractionSchema` from `src/lib/course-engine/schema.ts`.
  - Verification: All existing files pass validation or issues are documented.
- [x] **Task 2: Standardize A1-B2 metadata**
  - Action: Update `concept_tags` and `complexity` in existing A1-B2 JSON files to ensure they align with the new curriculum definitions.
  - Verification: Spot check 5 files per level for tag consistency.

#### Phase 2: High-Level Content Expansion (C1 & C2)
- [x] **Task 3: Create C1 units**
  - Action: Generate and save units for `ingles-c1` focusing on advanced grammar (Inversion, Cleft sentences).
  - Verification: Files exist in `src/content/cursos/ingles-c1/` and pass validation.
- [x] **Task 4: Create C2 units**
  - Action: Generate and save units for `ingles-c2` focusing on highly specialized and idiomatic English.
  - Verification: Files exist in `src/content/cursos/ingles-c2/` and pass validation.

#### Phase 3: Integration & Final Verification
- [x] **Task 5: Update GlobalContentProvider levels**
  - Action: Ensure `ingles-c1` and `ingles-c2` are included in the `levels` array within `src/lib/course-engine/global-content-provider.ts`.
  - Verification: `loadAllContent()` logs show C1 and C2 interactions being loaded.
- [x] **Task 6: E2E Verification in /practica-inteligente**
  - Action: Use the browser tool to verify that exercises from all levels (including new C1/C2) are correctly fetched and rendered.
  - Verification: Exercises display correctly and user can interact with them.
- [x] **Task 7: Final Lint & Typecheck**
  - Action: Run `npm run lint` and `npm run typecheck`.
  - Verification: No new errors introduced.
