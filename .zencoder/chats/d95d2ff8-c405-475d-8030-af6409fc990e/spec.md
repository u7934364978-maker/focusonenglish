# Technical Specification - English Pilot Course: Airport Arrival (A1)

## 1. Technical Context
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion.
- **Backend**: Next.js API Routes (Edge/Node.js runtime).
- **Database/Auth**: Supabase (PostgreSQL + Auth).
- **Video**: Cloudflare Stream (Private videos + Signed URLs).
- **Speaking AI**: Azure AI Speech (Pronunciation Assessment).
- **Payments**: Stripe Checkout.
- **Validation**: AJV for JSON Schema validation.

## 2. Implementation Approach

### 2.1. Content Engine & Validation
- **Schema**: Create `schemas/pilot-lesson.schema.json` to define the structure for the pilot unit.
- **Content**: Store the pilot unit in `src/content/pilot/airport-arrival.json`.
- **Validation Utility**: Create `src/lib/validations/pilot-lesson.ts` using AJV to validate the JSON at runtime.

### 2.2. Video Playback (Cloudflare Stream)
- **Backend Endpoint**: `src/app/api/stream/playback/route.ts`.
    - Validates Supabase session.
    - Checks for active subscription/purchase in Supabase/Stripe.
    - Generates a signed URL for Cloudflare Stream using a secret key.
- **Frontend Component**: `PilotVideoPlayer.tsx`.
    - Uses the `@cloudflare/stream-react` player or an iframe with the signed URL.
    - Implements hotspot and interaction logic based on timestamps from the JSON.

### 2.3. Speaking Evaluation (Azure AI)
- **Backend Endpoint**: `src/app/api/evaluate-speaking-azure/route.ts`.
    - Receives audio blob and reference text.
    - Calls Azure Pronunciation Assessment API.
    - Returns structured scores: `accuracyScore`, `fluencyScore`, `pronunciationScore`, `completenessScore`, `overallScore`.
- **Frontend Component**: `PilotSpeakingExercise.tsx`.
    - Uses `MediaRecorder` for capturing audio.
    - Displays real-time feedback and final scores.

### 2.4. Pilot Lesson Player
- **Main Component**: `src/components/pilot/PilotLessonPlayer.tsx`.
    - Orchestrates the micro-lessons: Vocab, Listening (Video), Speaking, Role-play.
    - Manages state for the current micro-lesson and progress.
    - Reuses `ExerciseRenderer.tsx` or parts of `LessonViewer.tsx` where appropriate.

### 2.5. Data Model & Progress
- **Table**: `pilot_progress` in Supabase.
    - `user_id` (UUID, reference to auth.users).
    - `unit_id` (String).
    - `current_lesson_id` (String).
    - `completed_lessons` (JSONB array of IDs).
    - `scores` (JSONB object).
    - `last_updated` (Timestamp).

## 3. Source Code Structure Changes
- `src/components/pilot/`: New directory for pilot-specific components.
- `src/app/pilot/`: New route for the pilot course player and dashboard.
- `src/app/api/stream/playback/`: New API route for secure video.
- `src/app/api/evaluate-speaking-azure/`: New API route for Azure AI.
- `src/content/pilot/`: Storage for pilot unit JSON.

## 4. Delivery Phases

### Phase 1: Infrastructure & Data (Milestone 1)
- Define JSON schema and pilot unit content.
- Implement AJV validation.
- Set up Supabase `pilot_progress` table and RLS policies.

### Phase 2: Secure Video & Player (Milestone 2)
- Implement Cloudflare Stream playback API.
- Create `PilotVideoPlayer` with hotspot/MCQ support.
- Basic `PilotLessonPlayer` shell.

### Phase 3: Speaking AI (Milestone 3)
- Implement Azure Pronunciation Assessment API.
- Create `PilotSpeakingExercise` component.
- Integrate into `PilotLessonPlayer`.

### Phase 4: Access Control & Polish (Milestone 4)
- Integrate Stripe Checkout for the pilot unit.
- Implement access guards on the pilot routes.
- UI/UX polish and final verification.

## 5. Verification Approach
- **Linting**: `npm run lint` and `npm run type-check`.
- **Unit Tests**: Add tests for JSON validation and API response mapping in `__tests__/unit`.
- **Integration Tests**: Verify the progress saving logic with Supabase.
- **E2E Tests**: Use Playwright to test the flow from video interaction to speaking evaluation.
