# Technical Specification - Exercise Audit & Optimization

## Technical Context
- **Language**: TypeScript/Node.js for the main application, Python for auditing scripts.
- **Content Format**: JSON files located in `src/content/cursos/`.
- **Data Structure**: `Interaction` objects within `UnitData`.

## Implementation Approach

### 1. Audit Script (Python)
I will create a comprehensive audit script `scripts/audit_pedagogical.py` that will:
- Load all JSON files from the specified directories.
- **Identify Duplicates**: Use a hash of (type, stimulus_en, prompt_es, correct_answer) to find exact duplicates.
- **Identify Triviality**:
    - Flag `complexity: 1` exercises in levels B1 and above.
    - Flag multiple-choice exercises with fewer than 3 options.
    - Flag matching exercises with fewer than 3 pairs.
- **Identify Redundancy**: Compare exercises within the same `concept_tags` to see if they are too similar.

### 2. Manual Review & Automated Cleanup
- The script will generate a JSON report of "candidates for removal".
- Based on the report, I will perform the cleanup.
- If an exercise is a duplicate, only one instance will be kept (preferably the one in the earlier unit or the one with better metadata).

### 3. Verification
- **Schema Validation**: Run `npm run validate-exercises` to ensure JSON integrity after edits.
- **Engine Check**: Ensure `GlobalContentProvider` still loads a healthy amount of exercises.
- **E2E Test**: Verify that `practica-inteligente` still functions correctly and serves varied content.

## Source Code Structure Changes
- No changes to the application code, only to the JSON content in `src/content/cursos/`.
- Creation of `scripts/audit_pedagogical.py`.

## Delivery Phases
1. **Phase 1: Discovery**: Run audit script and generate report.
2. **Phase 2: Cleanup**: Remove trivial and redundant exercises from JSON files.
3. **Phase 3: Validation**: Run lint/tests and verify in browser.

## Verification Approach
- `npm run validate-exercises`
- Custom check script to ensure no duplicate IDs or broken references.
