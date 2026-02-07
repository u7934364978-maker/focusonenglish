# Implementation Plan - A2 Course Rebuild (3,000 Exercises)

## Phase 1: Preparation & Syllabus (Units 1-10)
- [x] Create PRD in `requirements.md`
- [x] Create Technical Specification in `spec.md`
- [x] Define A2 Full Syllabus (60 units) in `src/lib/a2-syllabus.ts` based on Cambridge and source material.
- [x] Implement extraction logic to parse `20260207153357-yme74j.txt` for grammar and vocabulary examples. (Integrated into generator script)

## Phase 2: Implementation & Batch 1
- [x] Create `scripts/generate-a2-course.ts` with batch generation capabilities.
- [x] Generate exercises for Units 1-10 (500 exercises).
- [x] Create SQL migration for Units 1-10.
- [x] **Verification**: Run `npm run lint` and manually check sample exercises.
- [x] Push Units 1-10 to repository and inform user of Supabase steps.
- [x] Fix 404 error by updating `premiumCourseServerService` to support database-only units.
- [x] Troubleshoot and fix SQL syntax errors by using safer `$_$` delimiters.

## Phase 3: Batch Generation (Remaining Units)
- [ ] Generate Batch 2 (Units 11-20).
- [ ] Generate Batch 3 (Units 21-30).
- [ ] Generate Batch 4 (Units 31-40).
- [ ] Generate Batch 5 (Units 41-50).
- [ ] Generate Batch 6 (Units 51-60).

## Phase 4: Finalization
- [ ] Consolidate all SQL migrations.
- [ ] Final verification of IDs and links.
