# Technical Specification: English C2 Course Audit

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js (content files are in `src/lib/c2-units/`)
- **Data Structures**: `Exercise` type from `../exercise-types`

## Implementation Approach
1. **Automated Validation**: Create a temporary script or use existing ones (like `npm run validate-exercises` if applicable) to check for structural issues (duplicate IDs, missing fields, `correctAnswer` mismatch).
2. **Manual Review (Sampling/Deep Dive)**: Since there are 60 units, I will perform a systematic review of the content.
3. **Refactoring/Fixing**: Correct typos and inconsistencies found during the audit.
4. **Integration Check**: Verify `index.ts` and `curriculum.ts` in `src/lib/c2-units/` to ensure all 60 units are included.

## Source Code Changes
- Updates to `src/lib/c2-units/unit-*.ts` for content fixes.
- Potential updates to `src/lib/c2-units/curriculum.ts` or `index.ts` if units are missing.

## Verification Approach
- **Linting**: Run `npm run lint` on the modified files.
- **Type Checking**: Run `tsc` on the affected files.
- **Custom Script**: Run a validation script to check for data integrity across all 60 units.

## Delivery Phases
1. **Phase 1**: Structural Validation (IDs, types, missing fields).
2. **Phase 2**: Linguistic Audit of Units 1-20.
3. **Phase 3**: Linguistic Audit of Units 21-40.
4. **Phase 4**: Linguistic Audit of Units 41-60.
5. **Phase 5**: Integration & Curriculum Check.
