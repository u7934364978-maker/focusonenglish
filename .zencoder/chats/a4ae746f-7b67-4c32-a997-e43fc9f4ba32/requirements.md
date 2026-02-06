# Product Requirements Document (PRD): HubSpot Progress Sync

## 1. Overview
The goal is to link student course progress from the Focus English platform (Supabase) to HubSpot CRM. This will allow the academic and sales teams to monitor student engagement and progress directly from HubSpot.

## 2. Goals
- Automatically sync student progress metrics from Supabase to HubSpot contact properties.
- Provide a clear view of student activity in HubSpot (lessons completed, average score, total study time, etc.).
- Enable automation in HubSpot based on student progress (e.g., sending a congratulatory email when a course is completed or a re-engagement email when activity stops).

## 3. Targeted Metrics
The following metrics will be synced for each student:
- **Lessons Completed**: Total number of lessons marked as completed in `course_progress`.
- **Current Lesson**: The ID of the last lesson the student interacted with.
- **Average Score**: Average score across all completed lessons.
- **Total Study Time**: Sum of `time_spent` (converted to minutes) across all lessons.
- **Progress Percentage**: (Optional/Calculated) Overall progress based on total lessons in the assigned course.
- **Last Activity Date**: The `last_accessed_at` timestamp of the most recent progress record.
- **Study Streak**: Current streak from `user_streaks` table.
- **XP**: Total XP from `user_xp` table.

## 4. Technical Approach
- **Sync Mechanism**: A Python-based synchronization script located in the `crm-integration/` directory.
- **Data Source**: Supabase PostgreSQL database (tables: `users`, `course_progress`, `user_streaks`, `user_xp`).
- **Data Destination**: HubSpot CRM (Contact Properties).
- **Execution**: The script will be designed to run periodically (e.g., via a cron job).

## 5. User Mapping
Students will be mapped between Supabase and HubSpot using their **email address**.

## 6. Constraints & Assumptions
- HubSpot contacts must already exist (created during registration/checkout).
- The Python script requires access to Supabase environment variables (`SUPABASE_URL`, `SUPABASE_KEY`) and HubSpot access token.
- We will leverage the existing `HubSpotCRM` class in `crm_manager.py`.

## 7. Success Criteria
- Progress metrics in HubSpot reflect the current state of student progress in Supabase within the sync period.
- No duplicate contacts are created.
- Errors during sync are logged for monitoring.
