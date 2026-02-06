# TOEFL iBT Preparation Course Implementation Plan

## Workflow Steps

### [x] Step: Requirements
Create a Product Requirements Document (PRD) based on the feature description.
Saved to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/7d3b2bbe-5455-44d0-aef8-7fbb3d56ecc8/requirements.md`.

### [x] Step: Technical Specification
Create a technical specification based on the PRD.
Saved to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/7d3b2bbe-5455-44d0-aef8-7fbb3d56ecc8/spec.md`.

### [x] Step: Planning
Create a detailed implementation plan.
Updating this file with the concrete tasks.

### [x] Step: Implementation

#### Phase 1: Foundation & Placement Test
- [x] **Task 1.1**: Create `src/lib/placement/toefl-test-data.ts` with 30-40 questions specifically designed to distinguish between B1, B2, and C1 for TOEFL.
- [x] **Task 1.2**: Update `src/lib/placement/engine.ts` (if necessary) to handle the new TOEFL placement test logic.
- [x] **Task 1.3**: Create directory structure for `src/lib/toefl-units/{b1,b2,c1}`.

#### Phase 2: B1 TOEFL Course (36 Weeks)
- [x] **Task 2.1**: Generate content for weeks 1-12 (Focus on foundation and Reading/Listening).
- [x] **Task 2.2**: Generate content for weeks 13-24 (Focus on Speaking/Writing).
- [x] **Task 2.3**: Generate content for weeks 25-36 (Full tests and strategy).

#### Phase 3: B2 TOEFL Course (36 Weeks)
- [x] **Task 3.1**: Generate content for weeks 1-12.
- [x] **Task 3.2**: Generate content for weeks 13-24.
- [x] **Task 3.3**: Generate content for weeks 25-36.

#### Phase 4: C1 TOEFL Course (36 Weeks)
- [x] **Task 4.1**: Generate content for weeks 1-12.
- [x] **Task 4.2**: Generate content for weeks 13-24.
- [x] **Task 4.3**: Generate content for weeks 25-36.

#### Phase 5: Technical Integration & Audio
- [x] **Task 5.1**: Register new courses in `src/lib/services/toefl-course-service.ts`.
- [x] **Task 5.2**: Update `scripts/generate-course-audio.ts` to process the new `toefl-units`.
- [x] **Task 5.3**: Update `PremiumSession.tsx` to support `audio-player` and `multiple-choice` (hyphenated).

#### Phase 6: Verification & Final Audit
- [x] **Task 6.1**: Run `npm run type-check` and fix all TOEFL-related errors.
- [x] **Task 6.2**: Verify placement test routing and course unit accessibility.
- [x] **Task 6.3**: Final review of the 36-week structure (108 units) and adaptation to Premium UI.
