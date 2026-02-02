# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. [x] Review existing codebase to understand current architecture and patterns
2. [x] Analyze the feature definition and identify unclear aspects
3. [x] Ask the user for clarifications on aspects that significantly impact scope or user experience
4. [x] Make reasonable decisions for minor details based on context and conventions
5. [x] If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/fcae8ca5-91df-4032-96d9-b1884f9fd4ad/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/fcae8ca5-91df-4032-96d9-b1884f9fd4ad/requirements.md`.

1. [x] Review existing codebase architecture and identify reusable components
2. [x] Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/fcae8ca5-91df-4032-96d9-b1884f9fd4ad/spec.md`.

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/fcae8ca5-91df-4032-96d9-b1884f9fd4ad/spec.md`.

1. [x] Break down the work into concrete tasks
2. [x] Each task should reference relevant contracts and include verification steps
3. [x] Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

#### Phase 1: Syllabus Metadata Update (COMPLETED)
- [x] Update unit titles and learning outcomes for all 30 B1 JSON files (using automation script)

#### Phase 2: Core System Extensions (COMPLETED)
- [x] Extend `PremiumInteraction` type in `src/types/premium-course.ts`
- [x] Update `PremiumCourseSession` to support `multiple_matching` (PET Reading Part 2)
- [x] Update `PremiumCourseSession` to support `gapped_text` (PET Reading Part 4)
- [x] Update `PremiumCourseSession` to support `multiple_choice_cloze` (PET Reading Part 5)
- [x] Update `PremiumCourseSession` to support `listening_image_mc` (PET Listening Part 1)
- [x] Add support for `writing_task` (Email, Article, Story)
- [x] Add support for `speaking_task` (Monologue, Interview, Discussion)

#### Phase 3: Content Implementation (Module 1 - Personal ID & Lifestyle) (COMPLETED)
- [x] Implement Unit 1: All About Me (PET Reading Parts 1 & 2, Speaking Part 1)
- [x] Implement Unit 2: Daily Life & Lifestyles (PET Reading Part 5, Writing Part 1 - Email)
- [x] Implement Unit 3: Home & Family (PET Listening Part 2, Reading Part 3)
- [x] Implement Unit 4: School & Work (PET Reading Part 4, Speaking Part 2 - Monologue)
- [x] Implement Unit 5: Food & Restaurants (PET Listening Part 1, Writing Part 2 - Article)
- [x] Implement Unit 6: Module Review & PET Mini-Test

#### Phase 4: Full Course Content Completion
- [x] Implement Units 7-12 (Module 2)
    - [x] Unit 7: Childhood Milestones
    - [x] Unit 8: Childhood Memories
    - [x] Unit 9: Free Time & Hobbies
    - [x] Unit 10: Relationships & Communication
    - [x] Unit 11: Places & Buildings
    - [x] Unit 12: Module Review
- [x] Implement Units 13-18 (Module 3)
    - [x] Unit 13: Education & Training
    - [x] Unit 14: Technology & The Future
    - [x] Unit 15: Shopping & Services
    - [x] Unit 16: Entertainment & Media
    - [x] Unit 17: Health & Exercise
    - [x] Unit 18: Module Review
- [x] Implement Units 19-24 (Module 4: Global Concerns & History)
    - [x] Unit 19: The Natural World (Passive Voice: Present & Past Simple)
    - [x] Unit 20: Travel & Holidays (Past Perfect Simple & Narrative review)
    - [x] Unit 21: History & Famous People (Passive review & Past Narrative)
    - [x] Unit 22: Environmental Issues (Conditionals: Zero, 1st, 2nd)
    - [x] Unit 23: Global Holidays & Cultures (Relative Clauses)
    - [x] Unit 24: Module Review
- [x] Implement Units 25-30 (Module 5: Society & Final Review)
    - [x] Unit 25: Entertainment & Media (Reported Speech)
    - [x] Unit 26: Health & Fitness (Modals of Deduction)
    - [x] Unit 27: Education & Learning (Causative)
    - [x] Unit 28: Crime & Justice (Passive with Modals)
    - [x] Unit 29: Final Exam Preparation (Reading focus)
    - [x] Unit 30: Final Exam Preparation (Listening/Speaking focus)
