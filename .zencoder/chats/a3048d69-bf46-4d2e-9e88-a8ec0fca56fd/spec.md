# Technical Specification - Complete English Course Feature

## 1. Technical Context
- **Framework**: Next.js 14+ (App Router)
- **Database/Auth**: Supabase
- **AI Integration**: OpenAI (GPT-4o) / Gemini
- **Icons**: Lucide-React
- **Styling**: Tailwind CSS

## 2. Implementation Approach

### 2.1. Hybrid Content Model
We will maintain the existing pattern of storing structured lesson data in TypeScript files for performance and type safety, but we will extend the `Lesson` interface to support pre-recorded lessons and theory.

### 2.2. Course Structure Expansion
- **Levels**: Ensure all levels from A1 to C2 have corresponding curriculum data and lesson files.
- **Exam Tracks**: Implement specialized curriculum paths for Cambridge, TOEFL, IELTS, and Oxford.

### 2.3. User Progress & Certification
- Leverage the existing `user_lesson_progress` table.
- Create a new `certifications` table in Supabase to store "mock exam" results and issued internal certificates.

## 3. Data Model Changes

### 3.1. Updated `Lesson` Interface (`lib/course-data-b2.ts` and others)
```typescript
export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number; // minutes
  objectives: string[];
  videoUrl?: string; // URL to hosted video (YouTube/Vimeo)
  theoryContent?: string; // Markdown or HTML theory content
  exercises: Exercise[];
  completed?: boolean;
  score?: number;
}
```

### 3.2. New `certifications` Table (Supabase)
```sql
CREATE TABLE certifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  level TEXT NOT NULL, -- A1, A2, B1, B2, C1, C2
  exam_type TEXT NOT NULL, -- Cambridge, TOEFL, IELTS, Oxford, Internal
  score INTEGER,
  issued_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  certificate_url TEXT -- Path to generated certificate or ID
);
```

## 4. Component Architecture

### 4.1. `LessonViewer.tsx` Enhancements
- Add a "Theory" tab or a prerequisite view before exercises.
- Integrate a video player component for `videoUrl`.
- Support Markdown rendering for `theoryContent`.

### 4.2. `ExamCenter` Component
- A new section in the dashboard to choose official exam tracks.
- Mock exam interface based on `LevelTestInteractive.tsx`.

### 4.3. `CertificateGenerator` Service
- A utility to generate a visual certificate (HTML/Canvas to PDF or Image) upon completion of a level test.

## 5. API Changes
- `POST /api/certifications/issue`: Endpoint to record a new certification and trigger generation.
- `GET /api/certifications/user/[userId]`: Retrieve user certificates.

## 6. Delivery Phases

### Phase 1: Infrastructure & Data Model
- Update `Lesson` types across the project.
- Create `certifications` table and RLS policies.
- Define curriculum metadata for C1 and C2 levels.

### Phase 2: Lesson Content & Video Integration
- Populate C1/C2 lesson files.
- Update `LessonViewer` with video and theory support.
- Implement exam-specific exercise templates in AI generator.

### Phase 3: Certification System
- Implement mock exam logic for each level.
- Create the certificate issuance API and UI.

### Phase 4: Exam Path Selection
- Implement the UI for choosing specific exam tracks (TOEFL, IELTS, etc.).
- Link curriculum paths to selected tracks.

## 7. Verification Plan
- **Unit Tests**: Test `ExerciseGenerator` with new exam-specific prompts.
- **Integration Tests**: Verify progress tracking updates correctly in Supabase.
- **E2E Tests**: Walk through a full lesson flow (Video -> Theory -> Exercises -> Completion).
- **Manual QA**: Verify certificate generation and display.
