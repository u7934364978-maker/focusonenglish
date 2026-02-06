# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/fa036b0a-4652-4d7b-ab6b-cdc529dd6c28/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/fa036b0a-4652-4d7b-ab6b-cdc529dd6c28/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/fa036b0a-4652-4d7b-ab6b-cdc529dd6c28/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/fa036b0a-4652-4d7b-ab6b-cdc529dd6c28/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/fa036b0a-4652-4d7b-ab6b-cdc529dd6c28/plan.md`.

### [x] Step: Implementation

#### [x] 1. Data Structures & Logic Foundation
- Create `src/lib/ai/tutor-categories.ts` with categories (Business, Travel, Social, Tech).
- Implement phase system prompt logic in `src/lib/ai/tutor-prompts.ts`.
- Verification: Unit test prompt generation for different categories and phases.

#### [x] 2. Custom Hook Development
- Create `src/hooks/use-private-tutor.ts` by adapting `useSpeakingCoach.ts`.
- Add phase state management (Theory -> Practice -> Feedback).
- Verification: Verify state transitions and session persistence logic.

#### [x] 3. UI Components - Tutor Interface
- Create `src/components/tutor/PhaseIndicator.tsx` for visual phase tracking.
- Create `src/components/tutor/CategorySelector.tsx` for initial theme selection.
- Verification: Visual check of components and accessibility.

#### [x] 4. Main Page Integration
- Create `src/app/tutor-privado/page.tsx`.
- Integrate `usePrivateTutor`, `VoiceVisualizer`, and transcript display.
- Verification: Manual end-to-end voice session test.

#### [x] 5. Final Polish & Quality Assurance
- Implement session summary saving to Supabase.
- Run `npm run lint` and `npm run typecheck`.
- Verification: Ensure no regression in existing AI Coach feature.
