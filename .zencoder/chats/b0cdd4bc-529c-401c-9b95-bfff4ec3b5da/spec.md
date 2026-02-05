# Technical Specification: B1 Emails Course Content Improvement (Units 1-15)

## Technical Context
- **Data Format**: JSON (UnitData structure)
- **Location**: `src/content/cursos/ingles-b1/emails-work-u{1..15}.json`

## Implementation Approach
We will generate 15 unique JSON files, each containing 50 non-repetitive interactions specialized for its unit topic.

## Delivery Phases
1. **Phase 1: Unit 1 (Introductions)** - COMPLETED
2. **Phase 2: Units 2-5 (Core Business Operations)**
3. **Phase 3: Units 6-10 (Complex Interactions)**
4. **Phase 4: Units 11-15 (Specific Scenarios & Closings)**
5. **Phase 5: Global Audit**


## Verification Approach
- **Manual Verification**: Browse to `http://localhost:5436/curso/ingles-b1/emails-work-u1` and verify that content loads and is varied.
- **Validation Script**: Use (or adapt) `scripts/audit-generic.mjs` if possible to ensure JSON schema compliance.
