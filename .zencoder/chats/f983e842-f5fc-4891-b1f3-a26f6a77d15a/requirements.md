# PRD: Multi-Level Student Progress CRM Integration

## Overview
Integrate the student progress tracking system (Supabase) with HubSpot CRM to provide visibility into student performance across all levels (A1, A2, B1, etc.) and enable automated support.

## Goals
1. **Generic Automated Sync**: Synchronize data from level-specific progress tables (starting with `a1_progress` and `a1_milestones`) to HubSpot contact properties in a scalable way.
2. **Multi-Level Performance Monitoring**: Track accuracy, exercises, and time spent, categorized by level.
3. **Dynamic Engagement**: Trigger automated communications based on milestones or lack of progress in any active level.

## Proposed Metrics to Sync
- **Current Level**: The highest level the student is currently active in.
- **[Level] Units Completed**: Units completed for a specific level (e.g., `a1_units_completed`).
- **[Level] Average Accuracy**: Mean accuracy for a specific level (e.g., `a1_average_accuracy`).
- **Total Study Time**: Cumulative time across all levels.
- **Last Level Activity**: Timestamp of the most recent activity in any level.

## User Stories
- As a Tutor, I want to see the progress and accuracy of a student in their specific level (A1, A2, etc.) within HubSpot.
- As a Student, I want to receive level-appropriate congratulations when I reach milestones.
- As an Admin, I want a single sync system that automatically handles new levels as they are added to the database.

## Constraints
- Use existing Python CRM integration architecture.
- Follow HubSpot custom property naming conventions (e.g., `level_a1_accuracy`).
- Schema must be extensible to avoid code duplication for future levels.
