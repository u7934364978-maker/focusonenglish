# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e0705bbe-5c68-4f53-ad4d-abe1466da1be/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e0705bbe-5c68-4f53-ad4d-abe1466da1be/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e0705bbe-5c68-4f53-ad4d-abe1466da1be/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/e0705bbe-5c68-4f53-ad4d-abe1466da1be/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

1. [x] **Unit 1 Review**: Review and improve Greetings & Introductions content.
2. [x] **Unit 2 Review**: Review and improve Family & Personal Info content.
3. [x] **Unit 3 Review**: Review and improve Family & Possessives content. (Updated from Daily Life)
4. [x] **Unit 4 Review**: Review and improve Physical Appearance content. (Updated from Jobs)
5. [x] **Unit 5 Review**: Review and improve Personality Traits content. (Updated from Places & Directions)
6. [x] **Unit 6 Review**: Review and improve Review: My World content. (Updated from Shopping)
7. [x] **Unit 7 Review**: Review and improve Daily Routines content. (Updated from Food)
8. [x] **Unit 8 Review**: Review and improve Weekly Habits content. (Updated from Travel)
9. [x] **Unit 9 Review**: Review and improve Jobs & Workplaces content. (Updated from Health)
10. [x] **Unit 10 Review**: Review and improve Leisure Activities content. (Updated from Hobbies)
11. [x] **Final Verification**: Perform a final check of the SQL file for syntax and consistency.
