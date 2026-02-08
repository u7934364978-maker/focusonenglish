# Product Requirements Document (PRD): Adaptive Learning Algorithm Explanation

## 1. Feature Overview
The user wants to understand how the "ultra-intelligent algorithm" in Focus English tracks student progress and failures, specifically for the account `lrmlo@icloud.com`.

## 2. Architectural Analysis (Current State)
Based on the codebase review, the "algorithm" is a combination of three specialized persistence systems in Supabase:

### A. Memory & Spaced Repetition (SRS)
- **Table**: `user_srs`
- **Algorithm**: **SM-2 (SuperMemo 2)**.
- **Logic**:
  - Each interaction (exercise, vocabulary, etc.) is tracked individually.
  - When a student completes an exercise, a "quality" score (0-5) is sent to the database.
  - **Failures**: If the quality is < 3 (failure), the algorithm resets the `iterations` to 0 and the `interval` to 1 day. This ensures the item is scheduled for review almost immediately.
  - **Successes**: If the quality is >= 3, the `interval` increases based on the `easiness_factor` (default 2.5), pushing the next review further into the future.
  - **Key Fields**: `iterations`, `interval`, `easiness_factor`, `next_review_at`.

### B. Concept Mastery Tracking
- **Table**: `user_mastery`
- **Logic**:
  - Exercises are tagged with concepts (e.g., `grammar_past_simple`, `vocab_travel`).
  - The algorithm updates a `mastery_score` (0.0 to 1.0) for each tag.
  - **Formula**: `success_count / attempts_count`.
  - This allows the system to know which specific areas a student like `lrmlo@icloud.com` is struggling with across different units.

### C. Completion Progress
- **Table**: `user_interaction_progress`
- **Logic**:
  - A simple registry of completed interaction IDs.
  - Used to show the progress bars and "completed" checkmarks in the UI.

## 3. User Specific Context (`lrmlo@icloud.com`)
- The system identifies the student via their `user_id` linked to the `auth.users` table in Supabase.
- All data in `user_srs`, `user_mastery`, and `user_interaction_progress` is filtered by this `user_id`.
- For `lrmlo@icloud.com`, the algorithm is currently building a personalized "knowledge map" based on every click and answer.

## 4. Next Steps in Plan
- Confirm this understanding with the user.
- Proceed to Technical Specification if any new features or changes are needed.
