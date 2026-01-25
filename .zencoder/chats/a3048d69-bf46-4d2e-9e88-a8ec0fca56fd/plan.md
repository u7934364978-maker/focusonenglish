# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification
### [x] Step: Planning

## Implementation Plan

### Phase 1: Infrastructure & Data Models
- [x] **Task 1: Update Lesson Types**
  - Modify `Lesson` interface in `lib/course-data-b2.ts` and `lib/course-data-a1.ts` to include `videoUrl` and `theoryContent`.
  - Verification: `npm run typecheck`
- [x] **Task 2: Database Migration**
  - Create `certifications` table in Supabase with RLS policies.
  - Verification: Verify table in Supabase.

### Phase 2: Lesson Viewer Enhancements
- [x] **Task 3: Theory & Video UI**
  - Update `LessonViewer.tsx` to handle `videoUrl` and `theoryContent`.
  - Verification: Manual test with dummy lesson data.
- [ ] **Task 4: Markdown Integration**
  - Ensure markdown rendering is supported for theory content.
  - Verification: Check rendering of bold/lists in theory.

### Phase 3: Content Expansion
- [ ] **Task 5: C1/C2 Curriculum Data**
  - Complete `lib/curriculum-data.ts` and `lib/cambridge-curriculum.ts` for C1/C2 levels.
  - Verification: `getCurriculum('C1')` validation.
- [ ] **Task 6: Initial C1/C2 Content**
  - Create base lesson files for higher levels.
  - Verification: Build success.
- [ ] **Task 7: AI Generator Enhancement**
  - Update `ExerciseGenerator` to support TOEFL, IELTS, and Oxford exam formats.
  - Verification: Generate and review sample exercises for each track.

### Phase 4: Exam & Certification System
- [ ] **Task 8: Mock Exam Interface**
  - Implement `ExamViewer` component for official exam simulations.
  - Verification: Complete simulation flow.
- [ ] **Task 9: Certification API**
  - Implement API routes for issuing and retrieving certifications.
  - Verification: Test endpoints with sample data.
- [ ] **Task 10: Certificate Generation**
  - Implement visual certificate generation service.
  - Verification: Exported certificate quality check.

### Phase 5: Integration & UI
- [ ] **Task 11: Exam Center Dashboard**
  - Create the "Exam Center" UI in the dashboard.
  - Verification: UI accessibility and navigation.

### [ ] Step: Implementation

(This step is represented by the tasks above)
