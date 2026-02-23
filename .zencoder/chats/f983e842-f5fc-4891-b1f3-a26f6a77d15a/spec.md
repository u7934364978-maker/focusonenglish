# Technical Specification: Multi-Level Progress CRM Sync

## Technical Context
- **Language**: Python 3.x
- **Dependencies**: `supabase`, `hubspot-api-client` (or raw `requests` as used in `crm_manager.py`), `python-dotenv`.
- **Infrastructure**: Supabase (Database/Auth), HubSpot (CRM).

## Implementation Approach

### 1. Data Aggregation Strategy
Instead of hardcoding table names like `a1_progress`, the sync script will use a pattern-based approach to discover and query progress tables.
- **Table Discovery**: The system will look for tables following the `{level}_progress` pattern.
- **Aggregation**: For each user, the system will fetch rows from all available level tables.

### 2. HubSpot Property Mapping
We will use a prefix-based naming convention for HubSpot properties to ensure separation between levels while maintaining a clean CRM interface.
- **Level Specific**: `level_{level}_units_completed`, `level_{level}_accuracy`, `level_{level}_status`.
- **Global**: `total_study_time`, `current_active_level`, `last_activity_date_global`.

### 3. CRM Manager Enhancements
Update `HubSpotCRM` class in `crm_manager.py` to:
- Handle dynamic property creation for new levels on the fly.
- Group level-specific properties under a "Level Progress" property group.

### 4. Sync Logic (`supabase_hubspot_sync.py`)
- **Step 1**: Fetch active users from Supabase.
- **Step 2**: For each user, iterate through supported levels (A1, A2, etc.).
- **Step 3**: Query `{level}_progress` and `{level}_milestones`.
- **Step 4**: Calculate level metrics (average accuracy, completion count).
- **Step 5**: Batch update the HubSpot contact.

## Source Code Structure Changes
- `crm-integration/progress_aggregator.py`: (New) Logic to abstract Supabase queries across multiple level tables.
- `crm-integration/crm_manager.py`: Added support for dynamic level-based property management.
- `crm-integration/supabase_hubspot_sync.py`: Refactored to use `progress_aggregator.py`.

## Delivery Phases
1. **Phase 1**: Enhance `crm_manager.py` with dynamic property creation logic.
2. **Phase 2**: Create `progress_aggregator.py` and implement A1-specific sync (as a first test of the generic pattern).
3. **Phase 3**: Generalize sync for multiple levels and update the Dashboard KPIs.

## Verification Plan
- **Unit Tests**: Test the aggregator logic with mocked Supabase responses.
- **Dry Run**: Execute `supabase_hubspot_sync.py --dry-run` and verify the JSON payload for HubSpot.
- **Integration Test**: Verify properties are correctly created in a HubSpot test environment.
