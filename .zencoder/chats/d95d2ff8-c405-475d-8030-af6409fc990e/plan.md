# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

### [x] Step: Technical Specification

Create a technical specification based on the PRD.

### [x] Step: Planning

Create a detailed implementation plan based on the Technical Specification.

---

## Implementation Plan

### Phase 1: Infrastructure & Data
- [x] **Task 1.1**: Create `schemas/pilot-lesson.schema.json` following the MVP structure (Vocab, Listening, Speaking, Role-play).
    - *Verification*: Create a small script using AJV to validate a sample JSON.
- [x] **Task 1.2**: Create `src/content/pilot/airport-arrival.json` with the "Llegada al aeropuerto" content.
    - *Verification*: Validate against `pilot-lesson.schema.json`.
- [x] **Task 1.3**: Create Supabase migration for `pilot_progress` table and set up RLS policies.
    - *Verification*: Execute migration and verify table structure in Supabase.

### Phase 2: Secure Video & Player
- [x] **Task 2.1**: Implement `src/app/api/stream/playback/route.ts` to generate Cloudflare Stream signed URLs.
    - *Verification*: Test API endpoint with a sample video ID and valid session.
- [x] **Task 2.2**: Develop `PilotVideoPlayer.tsx` with hotspot and timed MCQ overlay logic.
    - *Verification*: Manual verification of hotspots appearing at correct timestamps.
- [x] **Task 2.3**: Create the main `PilotLessonPlayer.tsx` shell and navigation between micro-lessons.
    - *Verification*: Navigation buttons correctly switch between lesson segments.

### Phase 3: Speaking AI
- [x] **Task 3.1**: Implement `src/app/api/evaluate-speaking-azure/route.ts` using Azure Pronunciation Assessment.
    - *Verification*: Use a tool to send a sample audio blob and verify score structure.
- [x] **Task 3.2**: Create `PilotSpeakingExercise.tsx` component with audio recording and score visualization.
    - *Verification*: Test recording flow and check that Azure scores are displayed correctly.
- [x] **Task 3.3**: Integrate speaking exercises and role-play segments into `PilotLessonPlayer`.
    - *Verification*: Complete a speaking task and verify progress is updated.

### Phase 4: Access Control & Polish
- [x] **Task 4.1**: Create Pilot Landing Page (`src/app/pilot/page.tsx`) with course overview and Stripe "Buy" button.
    - *Verification*: Verify landing page UI and Stripe redirection.
- [x] **Task 4.2**: Implement access guards and progress loading in the Pilot Dashboard and Player.
    - *Verification*: Check that locked content redirects to checkout.
- [x] **Task 4.3**: Final UI polish, error handling (fallbacks), and full flow verification.
    - *Verification*: Run `npm run lint` and `npm run type-check`.
