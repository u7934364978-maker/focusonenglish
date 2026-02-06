# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a4ae746f-7b67-4c32-a997-e43fc9f4ba32/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a4ae746f-7b67-4c32-a997-e43fc9f4ba32/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a4ae746f-7b67-4c32-a997-e43fc9f4ba32/spec.md`.

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/a4ae746f-7b67-4c32-a997-e43fc9f4ba32/spec.md`.

### [ ] Step: Implementation

1. [x] **Task: Dependencies** - Add `supabase` to `crm-integration/requirements.txt`.
2. [x] **Task: HubSpot Properties** - Ensure all required custom properties (lessons_completed, average_score, total_study_time, current_lesson, last_activity_date, total_xp, study_streak) are correctly configured in HubSpot using `HubSpotCRM`.
3. [x] **Task: Supabase Client** - Implement initialization logic for Supabase in `crm-integration/supabase_hubspot_sync.py` using service role key for administrative access.
4. [x] **Task: Data Aggregation** - Implement `get_supabase_progress(email)` to fetch and aggregate metrics from `course_progress`, `user_xp`, and `user_streaks`.
5. [x] **Task: Sync Engine** - Implement the main loop in `supabase_hubspot_sync.py` to iterate through users.
6. [x] **Task: Dry Run & Testing** - Implement a dry-run flag and test the script with a specific test user.
7. [x] **Task: HubSpot Integration** - Connect the sync script with `HubSpotCRM` to perform actual updates.
8. [x] **Task: Final Verification** - Execute total sync and verify results in HubSpot.
