# Technical Specification - Email Writing Course

## 1. Technical Context
- **Language**: TypeScript (Node.js) / SQL (Supabase)
- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Data Model**: `course_modules`, `course_lessons`, `course_exercises`

## 2. Implementation Approach
We will implement the course content using a scripted approach to generate 750 exercises.
- **Course Level**: B1 (Intermediate)
- **Course Goal**: `trabajo` (Work/Professional)
- **Module Slug Prefix**: `emails-work-m`
- **Lesson Slug Prefix**: `emails-work-l`

### Data Storage
The course will be stored in the Supabase database. We will provide a migration script (TypeScript/Node.js) that:
1. Deletes existing content for this specific course (to allow re-runs).
2. Inserts 1 module (or multiple if grouped).
3. Inserts 15 lessons (one for each unit).
4. Inserts 50 exercises per lesson using diverse templates.

## 3. Source Code Structure Changes
- New Script: `scripts/generate-emails-course.ts` - Main generation logic.
- Migration File (Optional if script is enough): `supabase/migrations/20260204_emails_course_data.sql` (if we want pure SQL).

## 4. Exercise Templates
Each of the 15 units will have:
- **10 Reading Comprehension**: `reading-comprehension` type.
- **15 Vocabulary**: `vocabulary-match` or `fill-blank` type.
- **10 Grammar**: `fill-blank` or `multiple-choice` type.
- **10 Writing Analysis**: `writing-analysis` type.
- **5 AI Missions**: `ai-mission` type.

## 5. Delivery Phases
1. **Phase 1: Course Scaffolding**: Create the generation script with the unit structure.
2. **Phase 2: Content Generation**: Implement the exercise generators for each type with varied templates.
3. **Phase 3: Database Insertion**: Run the script to populate Supabase.
4. **Phase 4: Verification**: Verify course visibility in the UI.

## 6. Verification Approach
- **Lint**: `npm run lint`
- **Validation Script**: `npm run validate-exercises` (if it supports DB-backed courses).
- **Manual Verification**: Browse the course in the development environment.
