# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification
### [x] Step: Planning

## Implementation Plan

### Phase 1: Curriculum & Tooling
- [ ] **Task 1**: Create `src/lib/a1-redesign-curriculum.ts` defining the 12-unit syllabus with topics and keywords.
- [ ] **Task 2**: Create `scripts/verify-a1-mixing.ts` to audit exercise distribution and vocabulary coverage.
- [ ] **Task 3**: Create `scripts/generate-a1-varied-course.ts` with batch generation and vocabulary tracking logic.

### Phase 2: Pilot & Verification
- [ ] **Task 4**: Generate Units 1-3 using the new script.
- [ ] **Task 5**: Run `scripts/verify-a1-mixing.ts` on Units 1-3 and manually review samples.

### Phase 3: Mass Generation
- [ ] **Task 6**: Generate Units 4-12.
- [ ] **Task 7**: Run final audit on all 12 units.

### Phase 4: Cleanup & Finalization
- [ ] **Task 8**: Archive/Backup existing `unit13-unit34.json` files.
- [ ] **Task 9**: Run `npm run validate-exercises` to ensure all new files are valid.
