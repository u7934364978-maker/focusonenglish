# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. [x] Review existing codebase to understand current architecture and patterns
2. [x] Analyze the feature definition and identify unclear aspects
3. [x] Ask the user for clarifications on aspects that significantly impact scope or user experience
4. [x] Make reasonable decisions for minor details based on context and conventions
5. [x] If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/4219922d-6fee-4c3e-af66-a91e15596224/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/4219922d-6fee-4c3e-af66-a91e15596224/requirements.md`.

1. [x] Review existing codebase architecture and identify reusable components
2. [x] Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/4219922d-6fee-4c3e-af66-a91e15596224/spec.md`.

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/4219922d-6fee-4c3e-af66-a91e15596224/spec.md`.

1. [x] Break down the work into concrete tasks
2. [x] Each task should reference relevant contracts and include verification steps
3. [x] Replace the Implementation step below with the planned tasks

### [ ] Step: Implementation

#### Phase 1: Structure Definition
- [x] Define the 30-unit syllabus for C1 level with neutral themes and specific topics.
- [x] Verify the syllabus with the user.

#### Phase 2: Unit Generation (Technical: .ts files in src/lib/c1-units/)
- [x] Generate Unit 1 (100 activities - already existing in codebase).
- [x] Generate Unit 2 (50 activities).
- [ ] Generate Unit 3 (50 activities).
...
- [ ] Generate Unit 30 (50 activities).
