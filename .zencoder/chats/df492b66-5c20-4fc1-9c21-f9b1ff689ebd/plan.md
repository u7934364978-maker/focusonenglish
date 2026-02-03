# Plan: Fix JSON Syntax Errors and Exercise Counting in Ingles A1 Course

## Implementation Tasks

- [x] **Task 1**: Identify malformed JSON files in `src/content/cursos/ingles-a1/`
    - [x] Run validation script to locate syntax errors
    - [x] Found errors in `unit18.json` (line 1035) and `unit55.json` (line 803)
- [x] **Task 2**: Fix syntax errors in identified files
    - [x] Remove extra double quote in `unit18.json`
    - [x] Remove extra double quote in `unit55.json`
- [x] **Task 3**: Verify fixes
    - [x] Run validation script again to ensure all JSON files are valid
    - [x] Verification successful: All JSON files are valid
- [x] **Task 4**: Fix exercise counting and "new content" visibility
    - [x] Update `premium-course-service.ts` to prioritize JSON content over Database content (New content priority).
    - [x] Update `[unitId]/page.tsx` for Ingles A1 to try loading JSON first, falling back to database only if JSON is missing or empty.
