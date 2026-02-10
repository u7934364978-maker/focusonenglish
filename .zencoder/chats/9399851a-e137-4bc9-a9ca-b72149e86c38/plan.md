# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification

### [x] Step: Planning & Audit Implementation
1. **Develop Audit Script**: Create `scripts/audit-trivial-exercises.mjs` with the heuristics defined in the spec.
   - [x] Implement Rule 1: General Knowledge in Spanish.
   - [x] Implement Rule 2: Identity Matching.
   - [x] Implement Rule 3: Low Complexity + No Target Language.
2. **Execute Dry Run**: Run the script across `src/content/cursos/` and review results. [x]
3. **Execute Fix**: Run the script with the fix flag to remove trivial exercises. [x]
4. **Validation**:
   - [x] Run `npm run validate-exercises` (and `npm run validate-courses`).
   - [x] Verify the specific exercise in `src/content/cursos/ingles-a1/unit36.json` is removed.
5. **Final Review**: Ensure no units are empty and the app still works. [x]
