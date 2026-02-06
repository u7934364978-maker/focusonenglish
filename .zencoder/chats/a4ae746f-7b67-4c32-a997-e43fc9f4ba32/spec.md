# Technical Specification: HubSpot Progress Sync

## 1. Technical Context
- **Language**: Python 3.x
- **Libraries**: 
    - `supabase`: For interacting with Supabase.
    - `requests`: Used by the existing `HubSpotCRM`.
    - `python-dotenv`: For managing environment variables.
- **Existing Components**:
    - `crm_manager.py`: `HubSpotCRM` class for HubSpot API interactions.
    - `progress_tracker.py`: Template for progress data structure.

## 2. Implementation Approach
We will implement a standalone Python script `crm-integration/supabase_hubspot_sync.py` that performs the following steps:

1.  **Initialization**: 
    - Load environment variables (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `HUBSPOT_ACCESS_TOKEN`).
    - Initialize Supabase client and `HubSpotCRM`.
2.  **Data Fetching**:
    - Query the `users` table to get a list of all students (ID and Email).
    - For each student, perform an aggregate query on `course_progress` to calculate:
        - `lessons_completed` (count of `completed = true`).
        - `average_score` (avg of `score`).
        - `total_study_time` (sum of `time_spent`, converted to minutes).
        - `current_lesson` (last `lesson_id` based on `last_accessed_at`).
        - `last_activity_date` (max of `last_accessed_at`).
    - Query `user_streaks` for `current_streak`.
    - Query `user_xp` for `total_xp`.
3.  **HubSpot Update**:
    - Map the email to a HubSpot contact.
    - Update the custom properties defined in `StudentProgressTracker.setup_progress_properties`.
    - Add/Update new custom properties if necessary (`total_xp`, `current_streak`).
4.  **Logging**:
    - Log successes and failures to stdout/stderr.

## 3. Data Model / Interface Changes
### HubSpot Contact Properties
We will use existing properties and potentially add:
- `total_xp` (Number)
- `current_streak` (Number)

### Supabase Queries
- `SELECT id, email FROM users`
- `SELECT * FROM course_progress WHERE user_id = :id`
- `SELECT * FROM user_streaks WHERE user_id = :id`
- `SELECT * FROM user_xp WHERE user_id = :id`

## 4. Source Code Structure
- `crm-integration/supabase_hubspot_sync.py`: Main sync logic.
- `crm-integration/requirements.txt`: Add `supabase`.

## 5. Delivery Phases
1.  **Phase 1**: Setup environment and Supabase connection.
2.  **Phase 2**: Implement data aggregation logic from Supabase.
3.  **Phase 3**: Implement HubSpot update logic using `HubSpotCRM`.
4.  **Phase 4**: Verification and scheduling instructions.

## 6. Verification Approach
- **Manual Test**: Run the script for a single test email and verify the data in the HubSpot dashboard.
- **Dry Run Mode**: Implement a `--dry-run` flag to see what would be updated without making API calls.
- **Logging**: Review logs for any API errors.
