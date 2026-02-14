# Plan - Rebuild B2 Unit 12

## Workflow Steps

### [x] Step: Technical Specification
- Technical context (language, dependencies)
- Implementation approach
- Source code structure changes
- Data model / API / interface changes
- Verification approach

### [x] Step: Implementation

#### Phase 1: Preparation
- [x] Define the content for 50 exercises (25 sentence-building, 25 multiple-choice) about "The Modern Workplace".
- [x] Ensure grammar points (Passive, Inversion, Subjunctive) and vocabulary (Roles, Actions) are covered.

#### Phase 2: Coding Unit 12
- [x] Rewrite `src/lib/course/b2/unit-12.ts` exercises 1-25 as `sentence-building`.
- [x] Rewrite `src/lib/course/b2/unit-12.ts` exercises 26-50 as `multiple-choice`.
- [x] Ensure all `id`, `audio`, `audioUrl` and bilingual blocks are correct.

#### Phase 3: Verification
- [x] Start the dev server.
- [x] Manually verify the unit in the browser (via E2E test).
- [x] Run `npm run lint`.
- [x] Obtain approval for E2E tests.
- [x] Write and run E2E tests.

### [x] Step: Report
- Describe implementation and testing.
