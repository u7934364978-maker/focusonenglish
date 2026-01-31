# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b1909c33-5aa0-478b-8c5e-e08687ccd25e/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b1909c33-5aa0-478b-8c5e-e08687ccd25e/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/b1909c33-5aa0-478b-8c5e-e08687ccd25e/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

1. **Database Setup**: Create Supabase migration with tables for ABP, Microlearning, AR, and unified stats.
2. **Persistence Hook**: Implement `useMethodologyProgress` hook to centralize DB interactions.
3. **ABP Integration**: Refactor `ProjectBasedLearning.tsx` to save/load from Supabase.
4. **Gamification Integration**: Refactor `MicrolearningGamification.tsx` to persist lesson completion and XP.
5. **AR & Stats Integration**: Connect AR vocabulary and general stats (AI, Pronunciation, Social) to the backend.
6. **Dashboard Real-time Stats**: Update the main methodologies page to display actual user progress.

### [ ] Step: Implementation - Database Setup
- Create `supabase/migrations/20260130_methodologies_persistence.sql`
- Verification: Run migration and check table existence.

### [ ] Step: Implementation - Persistence Hook
- Create `src/hooks/use-methodology-progress.ts`
- Verification: `npm run typecheck`

### [ ] Step: Implementation - ABP & Gamification Refactor
- Update components in `src/components/metodologias/`
- Verification: Manual test of progress saving.

### [ ] Step: Implementation - Dashboard & Final Polish
- Update `src/app/metodologias-innovadoras/page.tsx`
- Verification: `npm run lint` && `npm run typecheck`
