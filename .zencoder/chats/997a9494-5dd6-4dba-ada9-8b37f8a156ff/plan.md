# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/997a9494-5dd6-4dba-ada9-8b37f8a156ff/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/997a9494-5dd6-4dba-ada9-8b37f8a156ff/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/997a9494-5dd6-4dba-ada9-8b37f8a156ff/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Detailed implementation plan:

1. [x] **Task**: Implement data flattening utility for unit exercises
2. [x] **Task**: Create `PremiumDuolingoSession` component with unified flow
3. [x] **Task**: Redesign `DuolingoUnitViewer` as a premium landing page
4. [x] **Task**: Implement seamless block transitions and unified progress tracking
5. [x] **Task**: Final verification (lint, typecheck, and manual walkthrough)

### [x] Step: Implementation

Execute the tasks above.
