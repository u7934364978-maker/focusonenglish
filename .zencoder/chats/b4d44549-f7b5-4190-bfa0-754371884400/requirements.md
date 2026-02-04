# Product Requirements Document (PRD): B2 Negotiations Course

## 1. Overview
The goal is to create a specialized English course at the **B2 level** focused on **practical and effective negotiations**. The course will provide students with the linguistic tools and strategies needed to conduct negotiations in professional environments.

## 2. Target Audience
- Professional English learners at B2 (Upper-Intermediate) level.
- Professionals who need to negotiate in English (sales, procurement, management, etc.).

## 3. Course Structure
The course will follow the existing `LevelCurriculum` and `CurriculumModule` structures defined in the codebase.

### Level: B2 (Negotiations)
**Key Learning Objectives:**
- Understand and use specific negotiation vocabulary.
- Master grammar structures relevant to negotiation (conditionals, modals, emphasis).
- Develop listening skills through realistic negotiation scenarios.
- Improve reading comprehension of formal proposals and negotiation scripts.
- Practice speaking through persuasive language and diplomatic roleplays.

## 4. Content Requirements

### 4.1. Vocabulary
- **Preparation:** research, objectives, BATNA (Best Alternative to a Negotiated Agreement), bottom line.
- **Bargaining:** trade-off, concession, leverage, counter-offer.
- **Agreement:** closing, deadlock, consensus, win-win.
- **Conflict Resolution:** mediation, arbitration, compromise, deadlock.

### 4.2. Grammar
- **Conditionals (0, 1st, 2nd, 3rd, and Mixed):** Essential for "what if" scenarios and bargaining.
- **Modals for Deduction and Possibility:** Speculating about the other party's position.
- **Passive Voice (Formal):** For formal proposals and objective language.
- **Reporting Verbs:** To summarize positions and previous discussions.
- **Cleft Sentences and Inversion:** For emphasis during arguments.

### 4.3. Skills
- **Listening:** Realistic audio clips of negotiations with different accents and levels of formality.
- **Reading:** Case studies, contract clauses, formal email exchanges.
- **Speaking:** Roleplay scenarios (e.g., salary negotiation, vendor contract, internal resource allocation).
- **Writing:** Summarizing agreements, counter-proposals, and follow-up emails.

## 5. Technical Implementation
- Define a new curriculum constant `NEGOCIACIONES_B2` in `src/lib/curriculum-data.ts`.
- Create detailed lesson files in `src/lib/` (e.g., `b2-neg-m1-l1.ts`) following existing patterns.
- Ensure exercise types match the `EXERCISE_TYPE_CATALOG` in `src/lib/exercise-types.ts`.

## 6. Unclear Aspects & Assumptions
- **Duration:** Assumed to be a focused course of 4-6 weeks (shorter than a full level).
- **Audio Assets:** Assumed that the project has a mechanism for generating or hosting audio (referenced in `scripts/generate-course-audio.ts`).
- **UI:** The course will be integrated into the existing dashboard and exercise renderer.
