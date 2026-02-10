# Technical Specification - Course Audit and Cleanup

## 1. Technical Context
- **Language**: JavaScript/Node.js for the audit script.
- **Data Format**: JSON (exercises).
- **Paths**: `src/content/cursos/**/*.json`.

## 2. Implementation Approach
I will develop a custom audit script `scripts/audit-trivial-exercises.mjs` that will:
1. Traverse all JSON files in `src/content/cursos/`.
2. Apply heuristic rules to identify "trivial" exercises.
3. Report the findings (file path, interaction ID, and reason).
4. Optionally (with a flag) remove the exercises from the JSON files.

### Heuristic Rules for "Trivial" Detection
- **Rule 1: General Knowledge in Spanish**
  - Type: `true_false` or `multiple_choice`.
  - Content: `prompt_es` contains common general knowledge terms (e.g., "percusión", "geografía", "historia") AND no English terms are present in the interaction object.
- **Rule 2: Identity Matching**
  - Type: `matching`.
  - Pairs: If more than 50% of the pairs have `left` and `right` values that are identical (case-insensitive) and longer than 3 characters (to avoid false positives with small words).
- **Rule 3: Low Complexity + No Target Language**
  - Complexity: 1.
  - Absence of English: No `stimulus_en` or English text in options/pairs.

## 3. Script Features
- **Dry Run Mode**: Lists trivial exercises without modifying files.
- **Fix Mode**: Removes identified exercises and updates the JSON files.
- **Reporting**: Generates a summary of removed exercises per file.

## 4. Source Code Structure Changes
- New file: `scripts/audit-trivial-exercises.mjs`.

## 5. Data Model Changes
- No changes to the schema, but exercise arrays within blocks will be shortened.
- Block IDs and Interaction IDs will remain unchanged to avoid breaking potential deep links or progress tracking, unless explicitly required.

## 6. Verification Plan
1. **Manual Review**: Run the script in dry-run mode and verify a sample of identified exercises.
2. **Schema Validation**: Run `npm run validate-exercises` after cleanup.
3. **App Sanity Check**: Start the dev server and load a modified unit to ensure it renders correctly.
