# Product Requirements Document (PRD) - English Pilot Course: Airport Arrival (A1)

## 1. Executive Summary
The goal is to build an MVP for a pilot English course unit titled "Llegada al aeropuerto" (A1). This unit will demonstrate interactive video learning, automated speaking evaluation, and a paid access model.

## 2. Target Audience
- Beginner English learners (A1 level).
- Users interested in travel-specific English.

## 3. Features & Functional Requirements

### 3.1. Content Structure (Unit: Airport Arrival)
The unit consists of four micro-lessons:
1.  **L1 Vocabulary**: Key terms (passport, boarding pass, gate, luggage, check-in, ticket, terminal, security).
2.  **L2 Listening**: Interactive video with 4-6 questions (MCQ/True-False).
3.  **L3 Speaking Phrases**: 3 prompts for short A1 phrases.
4.  **L4 Mini Role-play**: 2-3 turn dialogue where the student responds to the system.

### 3.2. Lesson Player (Core UX)
- Load unit content from a validated JSON file.
- **Interactive Video**:
    - Reproduce video using Cloudflare Stream.
    - Support **Hotspots**: Clickable areas at specific timestamps with labels/content.
    - Support **MCQ/Interactions**: Pause video at specific timestamps to show questions.
- **Speaking Evaluation**:
    - Record user audio (MediaRecorder).
    - Evaluate using Azure Pronunciation Assessment (accuracy, fluency, overall score).
    - Limit to 3 attempts per prompt.
- **Progress Management**:
    - Save user progress in the database.
    - Allow users to "Continue" from where they left off.
    - Error handling for asset loading (fallbacks for video/audio).

### 3.3. Access Control & Payments
- Integration with **Stripe Checkout** for course purchase.
- Access restricted to authenticated users with an active subscription/purchase.
- Backend verification for video playback (Signed URLs).

### 3.4. Security
- Cloudflare Stream videos must be **private**.
- Frontend must NOT handle API keys or token generation for video.
- Backend endpoint `GET /api/stream/playback?videoId=...` to validate session and generate short-lived playback tokens.

### 3.5. Data Validation
- Lessons defined in JSON.
- Strict validation using `lesson.schema.json` and **AJV**.
- Validation occurs at CI (test) and Runtime (loading content).

## 4. User Experience & Design

### 4.1. Screens
- **Landing Page**: Course overview and "Buy" button.
- **Checkout/Portal**: Stripe-hosted checkout and billing management.
- **Dashboard**: Track progress within the unit.
- **Lesson Player**: The primary interface for consuming content.

## 5. Non-Functional Requirements
- **Performance**: Rapid video loading and responsive interactions.
- **Reliability**: Graceful handling of API failures (Azure, Cloudflare).
- **Scalability**: Structure should allow adding more units/courses easily.

## 6. Constraints & Assumptions
- **Stack**: Next.js (App Router), Node.js (Next.js API Routes), Supabase (Auth/DB), Stripe, Cloudflare Stream, Azure AI.
- **Assumption**: Supabase is the primary database and auth provider, as per existing project structure.
