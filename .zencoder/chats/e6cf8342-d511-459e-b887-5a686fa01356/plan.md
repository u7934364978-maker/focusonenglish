# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e6cf8342-d511-459e-b887-5a686fa01356/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e6cf8342-d511-459e-b887-5a686fa01356/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e6cf8342-d511-459e-b887-5a686fa01356/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e6cf8342-d511-459e-b887-5a686fa01356/spec.md`.

1. [x] Break down the work into concrete tasks
2. [x] Each task should reference relevant contracts and include verification steps
3. [x] Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/e6cf8342-d511-459e-b887-5a686fa01356/plan.md`.

### Step: Implementation

- [x] **Task 1: Curriculum Mapping** - Define the specific grammar point and topic for each of the 60 units.
- [x] **Task 2: Setup Infrastructure** - Create `src/lib/b2-units/` directory and common utilities if needed.
- [x] **Task 3: Implement Unit 1** - Create `src/lib/b2-units/unit-1.ts` with 100 high-quality exercises (10 blocks x 10 questions).
- [x] **Task 4: Implement Module 1 (Units 2-10)** - Complete the first 10 units.
    - [x] Unit 2: Narrative Tenses
    - [x] Unit 3: Future Forms
    - [x] Unit 4: Passive Voice
    - [x] Unit 5: Modal Verbs (Obligation/Permission)
    - [x] Unit 6: Modal Verbs (Deduction/Speculation)
    - [x] Unit 7: Conditionals (Zero, First, Second)
    - [x] Unit 8: Third and Mixed Conditionals
    - [x] Unit 9: Quantifiers
    - [x] Unit 10: Relative Clauses
- [x] **Task 5: Implement Modules 2-3 (Units 11-30)** - Batch generation of 20 units.
    - [x] Unit 11: Future Continuous & Future Perfect
    - [x] Unit 12: The Modern Workplace
    - [x] Unit 13: Artificial Intelligence & Ethics
    - [x] Unit 14: Career Paths & Skills
    - [x] Unit 15: Business Communication & Networking
    - [x] Unit 16: Entrepreneurship & Startups
    - [x] Unit 17: Digital Privacy & Security
    - [x] Unit 18: Meetings & Negotiations
    - [x] Unit 19: Economic Trends & Globalization
    - [x] Unit 20: Module 2 Review
    - [x] Unit 21: Third Conditional & Regrets
    - [x] Unit 22: Climate Change & Sustainability
    - [x] Unit 23: Mixed Conditionals
    - [x] Unit 24: Social Justice & Inequality
    - [x] Unit 25: Renewable Energy Solutions
    - [x] Units 26-30: Social Issues & Environment (Batch 4)
- [x] **Task 6: Implement Module 4 (Units 31-40)** - Complete 10 units focusing on Culture, Lifestyle, and Travel.
- [x] **Task 7: Implement Module 5 (Units 41-50)** - Batch generation of 10 units focusing on Education and Science.
- [x] **Task 8: Implement Module 6 (Units 51-60)** - Final batch generation of 10 units focusing on Global Issues and Review.
    - [x] Unit 51: Wish/If Only & Global Economy
    - [x] Unit 52: Advanced Passive Review
    - [x] Unit 53: Future Continuous/Perfect & Future of Work
    - [x] Unit 54: Inversion & Urban Planning
    - [x] Unit 55: Participle Clauses & Cultural Heritage
    - [x] Unit 56: Advanced Relatives & Digital Rights
    - [x] Unit 57: Compound Nouns/Adjectives & Media Literacy
    - [x] Unit 58: Review: Advanced Conditionals
    - [x] Unit 59: Review: Modal Deduction/Speculation
    - [x] Unit 60: Final Course Review & Evaluation
- [x] **Task 9: Integration** - Update `src/lib/course-data-b2.ts` to export the full curriculum.
- [x] **Task 10: Final Review & Validation** - Run lint and verify total exercise count.
- [x] **Task 11: Fix Type Errors** - Address the TypeScript errors in the B2 units to ensure the project builds correctly.
