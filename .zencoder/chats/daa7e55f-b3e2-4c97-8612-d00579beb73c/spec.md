# Technical Specification: Course Verification - English Administration B2

## Technical Context
- **Language**: JSON
- **Content Path**: `src/content/cursos/trabajo/administracion/b2/trimestre1/semana[02-07]/`
- **Files to check**:
    - `exercises.json`: Contains listening and reading exercises.
    - `theory.json`: (Optional check) Contains key terms, but user specifically asked for "readings".

## Implementation Approach
1. **Listening Verification**:
    - Iterate through `exercises.json` for each week (02 to 07).
    - Search for items where `"type": "listening"`.
    - Ensure at least one such item exists per week.

2. **Readings Verification**:
    - Iterate through `exercises.json` for each week (02 to 07).
    - Search for items where `"type": "reading-comprehension"`.
    - For each reading, verify the `text` field contains a section `### Highlighted Vocabulary` (or similar) with words and definitions.
    - Check if `highlighted_words` field exists (some schemas might use it separately, but based on `semana02`, it's embedded in `text`).

3. **Data Model / Interface Changes**:
    - None. This is a verification task.

4. **Verification Approach**:
    - Manual inspection or script-based inspection of JSON files.
    - I will perform manual inspection using `Read` tool for each file.

## Delivery Phases
- **Phase 1**: Verification of Week 2 & 3.
- **Phase 2**: Verification of Week 4 & 5.
- **Phase 3**: Verification of Week 6 & 7.
- **Phase 4**: Summary report.
