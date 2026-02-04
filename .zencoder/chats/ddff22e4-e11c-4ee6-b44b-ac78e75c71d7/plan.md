# Plan: English C2 Course Audit

## Workflow Steps

### [x] Step: Requirements
PRD created at `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ddff22e4-e11c-4ee6-b44b-ac78e75c71d7/requirements.md`.

### [x] Step: Technical Specification
Spec created at `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ddff22e4-e11c-4ee6-b44b-ac78e75c71d7/spec.md`.

### [x] Step: Planning
Plan updated in this file.

### [ ] Step: Implementation

- [x] **Task 1: Structural Validation**
    - Create a validation script to check for:
        - Duplicate Exercise IDs
        - Duplicate Question IDs
        - Missing fields (`explanation`, `points`, `type`, `correctAnswer`)
        - `correctAnswer` presence in `options` for `multiple-choice`
    - Run the script and fix issues.
- [x] **Task 2: Linguistic Audit Phase 1 (Units 1-20)**
    - Review `src/lib/c2-units/unit-1.ts` to `unit-20.ts`.
    - Fix typos and grammar in English/Spanish.
    - Ensure C2 level consistency.
- [ ] **Task 3: Linguistic Audit Phase 2 (Units 21-40)** [IN PROGRESS]
    - Review `src/lib/c2-units/unit-21.ts` to `unit-40.ts`.
    - Fix typos and grammar in English/Spanish.
- [ ] **Task 4: Linguistic Audit Phase 3 (Units 41-60)**
    - Review `src/lib/c2-units/unit-41.ts` to `unit-60.ts`.
    - Fix typos and grammar in English/Spanish.
- [ ] **Task 5: Curriculum & Integration Check**
    - Check `src/lib/c2-units/index.ts` and `src/lib/c2-units/curriculum.ts`.
    - Verify all 60 units are exported and present in `C2_MODULES`.
- [ ] **Task 6: Verification**
    - Run `npm run lint`.
    - Run type checking.
