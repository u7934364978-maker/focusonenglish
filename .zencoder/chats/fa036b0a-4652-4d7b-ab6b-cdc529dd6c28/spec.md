# Technical Specification: AI Private English Tutor

## 1. Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Voice AI**: OpenAI Realtime API (via existing `useRealtimeAI` hook)
- **Backend**: Supabase (for session persistence and progress tracking)
- **UI**: Tailwind CSS, Framer Motion, Lucide React

## 2. Implementation Approach
We will extend the existing `AI Speaking Coach` architecture to support structured "Full Classes".

### Core Components
1. **`PrivateTutorPage`** (`src/app/tutor-privado/page.tsx`): New page for the feature.
2. **`usePrivateTutor`** (`src/hooks/use-private-tutor.ts`): New hook based on `useSpeakingCoach`, adapted for phase management.
3. **Phase Logic**: Instead of just scenarios, we will have **Tutor Categories** (Business, Travel, etc.). Each category will have a system prompt that guides the AI through three phases:
    - **PHASE_THEORY**: Introduction and explanation of a concept (Mix ES/EN).
    - **PHASE_PRACTICE**: Immersion conversation (English).
    - **PHASE_FEEDBACK**: Review and corrections (Spanish).

### Data Model Changes
- **Supabase**: We can reuse `ai_speaking_sessions` and `ai_speaking_history`. We may add a `type` column to `ai_speaking_sessions` if needed to distinguish between "coach" and "private_tutor".

## 3. Source Code Structure
- `src/app/tutor-privado/page.tsx`: Main UI.
- `src/hooks/use-private-tutor.ts`: Logic for session management and phase tracking.
- `src/lib/ai/tutor-categories.ts`: Definition of themes and phase-specific instructions.
- `src/components/tutor/PhaseIndicator.tsx`: Visual feedback for current class phase.

## 4. Implementation Phases

### Phase 1: Foundation
- Create `tutor-categories.ts` with pre-defined categories.
- Create `usePrivateTutor` hook by extending `useSpeakingCoach` capabilities.

### Phase 2: UI Implementation
- Implement the `PrivateTutorPage` with category selection.
- Integrate `VoiceVisualizer` and real-time transcript.
- Add "Phase Indicator" to show progress (Theory -> Practice -> Feedback).

### Phase 3: AI Prompting & Logic
- Refine the system prompt to handle transitions between theory and practice.
- Implement specialized instructions for the "Mixed Language" requirement.

### Phase 4: Verification
- Test voice interaction and transcript accuracy.
- Verify feedback generation at the end of the session.

## 5. Verification Approach
- **Manual Testing**: Conduct several voice sessions for different categories.
- **Lint/Typecheck**: Run `npm run lint` and `npm run typecheck`.
- **Unit Tests**: Add tests for prompt generation if complex logic is added.
