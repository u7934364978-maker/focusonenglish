# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/dea6b8a4-f078-4ff4-989f-85f0fb5fd441/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/dea6b8a4-f078-4ff4-989f-85f0fb5fd441/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/dea6b8a4-f078-4ff4-989f-85f0fb5fd441/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

1. **Setup Infrastructure**
    - [ ] Create `src/lib/c2-units/` directory
    - [ ] Implement `src/lib/c2-units/utils.ts` (factory and ID generators)
    - [ ] Define the 60-unit curriculum in `src/lib/c2-units/curriculum.ts`
2. **AI Content Generation**
    - [ ] Create content generation script (Python or TS)
    - [ ] Generate content for Units 1-20
    - [ ] Generate content for Units 21-40
    - [ ] Generate content for Units 41-60
3. **Integration**
    - [ ] Create `src/lib/c2-units/index.ts` to export all units
    - [ ] Update `src/lib/course-data-c2.ts` to include all 60 units
4. **Verification**
    - [ ] Run exercise validation scripts
    - [ ] Manual quality check on unit samples
    - [ ] Final linting and type checking

### [x] Step: Implementation

1. **Setup Infrastructure**
    - [x] Create `src/lib/c2-units/` directory
    - [x] Implement `src/lib/c2-units/utils.ts` (factory and ID generators)
    - [x] Define the 60-unit curriculum in `src/lib/c2-units/curriculum.ts`
2. **AI Content Generation**
    - [x] Create content generation script `scripts/generate-c2-course.ts`
    - [x] Generate content for Units 1-5 (Batch 1)
    - [ ] Generate content for remaining Units 6-60 (To be executed by user)
3. **Integration**
    - [x] Create `src/lib/c2-units/index.ts` to export all units (with placeholders for non-generated)
    - [x] Update `src/lib/course-data-c2.ts` to include the new 6-module structure
4. **Verification**
    - [x] Run initial lint check
    - [ ] Final validation once all units are generated

