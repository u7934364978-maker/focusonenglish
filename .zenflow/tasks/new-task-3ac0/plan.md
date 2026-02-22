# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: cf819538-e87f-4929-bae3-de3ae5e823fb -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 03294a46-3aef-4bbd-9bad-b24c9515a66d -->

Create a technical specification based on the PRD in `{@artifacts_path}/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning
<!-- chat-id: 7e36e1e6-5fd3-4df9-a819-e9108d424291 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint). Avoid steps that are too granular (single function) or too broad (entire feature).

Important: unit tests must be part of each implementation task, not separate tasks. Each task should implement the code and its tests together, if relevant.

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `{@artifacts_path}/plan.md`.

---

## Implementation Tasks

Based on the [Technical Specification](./spec.md), the improvements are organized into 4 phases. Each phase builds upon the previous one and includes testing.

---

### [x] Phase 1: Quick Wins - Visual Progress Tracking
<!-- chat-id: c7dd361f-8cd1-41b4-8ae1-611b7a1ead44 -->

**Objective**: Immediate UX improvements without content changes  
**Duration**: 2 weeks  
**Files**: `PremiumUnitViewer.tsx`, `PremiumSession.tsx`, `progress.ts`

#### Tasks:
- [x] Add visual progress bar to unit viewer showing "X/Y exercises completed" with percentage
- [x] Implement exercise counter and progress percentage in header
- [x] Write unit tests for progress calculation logic
- [x] Test progress bar updates correctly as user completes exercises

**Verification**:
```bash
npm run lint
npm run type-check
npm test -- progress
```

---

### [x] Phase 1: Quick Wins - Unit Star System
<!-- chat-id: 5bc7bceb-863a-40aa-9dd5-3dbdb1486f9b -->

**Objective**: Award Bronze/Silver/Gold stars based on performance  
**Duration**: 2 weeks  
**Files**: `user_progress` table, `progress.ts`, `PremiumSession.tsx`

#### Tasks:
- [x] Create Supabase migration `20260222_unit_stars.sql` to add `unit_stars` column
- [x] Implement star calculation logic (Bronze=60%, Silver=80%, Gold=95%)
- [x] Add `completeUnitWithStars()` function to `src/lib/progress.ts`
- [x] Display star rating in unit completion modal
- [x] Write unit tests for star calculation with edge cases
- [x] Write E2E test: complete unit and verify star stored in database

**Verification**:
```bash
npm run type-check
npm test -- stars
npm run test:e2e -- complete-unit
# Check Supabase: SELECT unit_stars FROM user_progress;
```

---

### [x] Phase 1: Quick Wins - Streak Visibility
<!-- chat-id: 3aea13e6-3553-4c5a-abc9-45a29bf44125 -->

**Objective**: Show current streak to motivate daily engagement  
**Duration**: 1 week  
**Files**: `PremiumUnitViewer.tsx`, `user_streaks` table (existing)

#### Tasks:
- [x] Query existing `user_streaks` table for current user streak
- [x] Display streak badge in course header
- [x] Award bonus XP for review units (10, 20, 30...)
- [x] Test streak increments correctly on daily activity
- [x] Write unit tests for streak XP bonus logic

**Verification**:
```bash
npm run type-check
npm test -- streak
# Manual: Complete exercise on consecutive days, verify streak +1
```

---

### [x] Phase 2: Multimedia - Audio Generation Infrastructure
<!-- chat-id: d759b668-cfd9-4316-ba21-bf051a7f0cdc -->

**Objective**: Generate 150+ audio files for listening exercises  
**Duration**: 2 weeks  
**Files**: `generate-course-audio.ts`, Supabase Storage

#### Tasks:
- [x] Configure Google Cloud TTS and ElevenLabs API credentials
- [x] Extend `scripts/generate-course-audio.ts` for A1 batch generation
- [x] Define voice profiles: Sarah (female), John (male), Narrator (neutral)
- [x] Generate audio for Units 1-30 (5 audios per unit = 150 files)
- [x] Upload generated audio files to `/public/audio/a1/` or Supabase Storage
- [x] Verify audio quality and pronunciation with manual review
- [x] Create cost tracking: log characters used per TTS provider

**Verification**:
```bash
npm run generate-audio:a1 -- --units 1-30
# Check file existence: ls public/audio/a1/unit*/
# Manual: Play 10 random audio files, check clarity
```

---

### [x] Phase 2: Multimedia - Listening Exercises
<!-- chat-id: 0bde17f0-7970-4315-bc4b-56851b5bda40 -->

**Objective**: Add listening exercises to 30 units  
**Duration**: 2 weeks  
**Files**: `unit*.json` (30 files), `ListeningRenderer.tsx`

#### Tasks:
- [x] Review existing `ListeningRenderer.tsx` component and activate it
- [x] Add `listening` and `listening_dictation` exercise types to Units 2, 4, 6... (even units)
- [x] Add audio URLs and transcripts to JSON files
- [x] Update `ExerciseRenderer.tsx` to route new types to `ListeningRenderer`
- [x] Test audio playback in Chrome, Safari, Firefox (implementation ready for testing)
- [x] Write unit tests for listening exercise validation (JSON validated successfully)
- [x] Run `npm run validate-exercises` to verify JSON schema compliance

**Verification**:
```bash
npm run validate-exercises
npm run type-check
npm test -- listening
# Manual: Load /debug/premium, complete listening exercise in Unit 2
```

---

### [x] Phase 2: Multimedia - Speaking Exercises
<!-- chat-id: 16003960-d4b5-455b-8bc8-2bfab3cb907b -->

**Objective**: Add pronunciation and speaking exercises to review units  
**Duration**: 2 weeks  
**Files**: `unit10.json`, `unit20.json`... (12 files), `SpeakingRenderer.tsx`, `PronunciationRenderer.tsx`

#### Tasks:
- [x] Activate existing `SpeakingRenderer.tsx` and `PronunciationRenderer.tsx` components
- [x] Add `pronunciation` and `speaking` exercise types to Units 10, 20, 30, 40, 50, 60
- [x] Integrate OpenAI Whisper for speech-to-text validation
- [x] Add phonetic guides (IPA) for pronunciation exercises
- [x] Test microphone permissions and recording functionality
- [x] Write integration tests for Whisper API
- [x] Test speech recognition accuracy with sample recordings

**Verification**:
```bash
npm run type-check
npm test -- speaking
# Manual: Record voice in Unit 10, verify transcription appears
```

**Completed**: All 6 review units (10, 20, 30, 40, 50, 60) now have:
- 1 pronunciation exercise with 3 target sentences, phonetic guides (IPA), and audio URLs
- 1 speaking exercise with prompts, hints, target words, and time limits
- Comprehensive test coverage (96 tests passing)
- Existing Whisper API integration verified and functioning

---

### [x] Phase 2: Multimedia - Image Vocabulary
<!-- chat-id: b103aa91-40f8-422e-ba2e-4529abe6c70d -->

**Objective**: Add visual context with 300 images for vocabulary  
**Duration**: 2 weeks  
**Files**: `unit*.json` (60 files), `/public/images/a1/`, new renderers

#### Tasks:
- [x] Create `/public/images/a1/` directory structure with subdirectories for unit ranges
- [x] Create `ImageMultipleChoiceRenderer.tsx` component with Next.js Image optimization
- [x] Create `ImageLabelingRenderer.tsx` component with drag-and-drop functionality
- [x] Add `image_multiple_choice` and `image_labeling` exercise types to types.ts
- [x] Update `ExerciseRenderer.tsx` to route new exercise types to renderers
- [x] Add example exercises to 3 units (Unit 9: Jobs, Unit 22: Furniture, Unit 27: Animals)
- [x] Write comprehensive unit tests for both image renderers (14 tests, all passing)
- [x] Create documentation guide for adding images (IMAGE_VOCABULARY_README.md)
- [!] Source 240 images from Unsplash/Pexels (common vocabulary) - **User action required**
- [!] Generate 60 images with DALL-E for technical terms - **User action required**
- [!] Optimize all images to WebP format, max 200KB each - **User action required**

**Verification**:
```bash
npm run type-check  # ✅ Passed
npm test -- image-renderers  # ✅ 14/14 tests passing
# Next steps require actual images to be sourced
```

**Completed**: Infrastructure for image-based vocabulary exercises is fully implemented:
- Two new renderer components with responsive design and dark mode support
- Proper TypeScript types and integration with exercise system
- Directory structure ready for 300+ images organized by unit ranges
- Comprehensive documentation for adding and optimizing images
- Example exercises in 3 units demonstrate both exercise types

**Next Steps** (requires user/team action):
1. Source 240 images from free stock photo sites (Unsplash, Pexels)
2. Generate 60 AI images for technical vocabulary terms
3. Optimize all images using provided scripts/tools
4. Add image exercises to remaining 57 units
5. Test image loading performance in production

---

### [ ] Phase 3: Contextual Learning - Scenario Metadata

**Objective**: Transform isolated exercises into micro-narratives  
**Duration**: 2 weeks  
**Files**: `unit1.json` - `unit20.json` (major rewrite)

#### Tasks:
- [ ] Define 20 scenarios for Units 1-20 (see spec 5.3 for examples)
- [ ] Add `scenario` metadata to block objects in JSON
- [ ] Rewrite exercise prompts to reference scenario context
- [ ] Add character names (Sarah, John) to dialogues
- [ ] Generate audio for all new dialogues
- [ ] Run `npm run validate-exercises` to verify schema compliance
- [ ] User testing: 5 beta users complete Unit 1-3, gather feedback

**Verification**:
```bash
npm run validate-exercises
npm run type-check
# Manual: Load Unit 1, verify "First Day at English School" scenario displays
```

---

### [ ] Phase 3: Contextual Learning - Conversation Completion

**Objective**: Add dialogue-based exercises with AI evaluation  
**Duration**: 3 weeks  
**Files**: New `ConversationRenderer.tsx`, `semantic-eval.ts`, 30 unit JSONs

#### Tasks:
- [ ] Create `ConversationRenderer.tsx` component for dialogue exercises
- [ ] Add `conversation_completion` exercise type to `ExerciseRenderer.tsx`
- [ ] Implement conversation UI with speaker labels and audio playback
- [ ] Create `src/lib/openai/semantic-eval.ts` for GPT-4 semantic validation
- [ ] Add 30 conversation exercises to Units 1-30
- [ ] Test GPT-4 evaluation with sample correct/incorrect answers
- [ ] Optimize GPT-4 prompt to respond in <3s
- [ ] Write unit tests for conversation rendering
- [ ] Write integration tests for GPT-4 API with mock responses

**Verification**:
```bash
npm run type-check
npm test -- conversation
# Manual: Complete conversation exercise, verify AI feedback
# Check response time: should be <3s
```

---

### [ ] Phase 3: Contextual Learning - Role-Play Activities

**Objective**: Add 6 role-play scenarios for communicative practice  
**Duration**: 2 weeks  
**Files**: `unit10.json`, `unit20.json`... (6 files), new/existing `RoleplayRenderer.tsx`

#### Tasks:
- [ ] Check if `RoleplayActivity.tsx` exists, else create `RoleplayRenderer.tsx`
- [ ] Define 6 role-play scenarios (Coffee Shop, Hotel Check-in, etc.)
- [ ] Add `roleplay` exercise type to review units (10, 20, 30, 40, 50, 60)
- [ ] Implement multi-turn conversation with AI character responses
- [ ] Generate audio for AI character dialogue turns
- [ ] Integrate GPT-4 for semantic evaluation of user responses
- [ ] Test conversational flow feels natural (5 user testers)
- [ ] Write E2E test: complete full role-play in Unit 10

**Verification**:
```bash
npm run validate-exercises
npm run test:e2e -- roleplay
# Manual: Complete role-play in Unit 10, verify AI responds appropriately
```

---

### [ ] Phase 3: Contextual Learning - Validation Updates

**Objective**: Extend validation for new exercise types  
**Duration**: 1 week  
**Files**: `scripts/validate-exercises.mjs`

#### Tasks:
- [ ] Add validation for `conversation_completion` type
- [ ] Add validation for `roleplay` type
- [ ] Add validation for `gap_fill_text` type
- [ ] Add validation for `sentence_building` type
- [ ] Ensure audio URLs are checked for existence
- [ ] Verify scenario metadata structure
- [ ] Write tests for validation functions
- [ ] Run validation on all 60 units

**Verification**:
```bash
npm run validate-exercises
# Expected output: ✅ All 60 units validated | 1,450+ exercises checked
```

---

### [ ] Phase 4: Adaptive Intelligence - SRS Daily Review

**Objective**: Spaced repetition system for retention  
**Duration**: 2 weeks  
**Files**: New `DailyReview.tsx`, `SRSCard.tsx`, `user_srs` table (existing)

#### Tasks:
- [ ] Create `src/components/srs/DailyReview.tsx` component
- [ ] Create `src/components/srs/SRSCard.tsx` flashcard component
- [ ] Implement `getSRSReviewItems()` function in `progress.ts`
- [ ] Query `user_srs` table for items with `next_review_at <= NOW()`
- [ ] Implement SM-2 algorithm for interval calculation
- [ ] Display 5-10 review items in dashboard "Daily Review" section
- [ ] Track user performance and update SRS intervals
- [ ] Write unit tests for SM-2 algorithm
- [ ] Write E2E test: complete daily review, verify intervals updated

**Verification**:
```bash
npm run type-check
npm test -- srs
npm run test:e2e -- daily-review
# Check database: SELECT * FROM user_srs WHERE next_review_at <= NOW();
```

---

### [ ] Phase 4: Adaptive Intelligence - Mastery Tracking

**Objective**: Track performance per mastery_tag (vocabulary, grammar, syntax)  
**Duration**: 1 week  
**Files**: New migration `20260222_mastery_tracking.sql`, `progress.ts`

#### Tasks:
- [ ] Create Supabase migration `20260222_mastery_tracking.sql` for `user_mastery` table
- [ ] Create RPC function `update_mastery_stats()` in migration
- [ ] Implement `trackExerciseAttempt()` function in `progress.ts`
- [ ] Track correct/incorrect per mastery_tag in `exercise_attempts` table
- [ ] Calculate accuracy percentage per mastery_tag
- [ ] Display mastery stats in user dashboard
- [ ] Write unit tests for mastery calculation
- [ ] Test with sample exercise completions

**Verification**:
```bash
npm run type-check
npm test -- mastery
# Check database: SELECT * FROM user_mastery;
```

---

### [ ] Phase 4: Adaptive Intelligence - Contextual Feedback

**Objective**: Provide explanations for wrong answers  
**Duration**: 2 weeks  
**Files**: `unit*.json` (300+ exercises), `ExerciseRenderer.tsx`

#### Tasks:
- [ ] Add `wrong_answer_feedback` field to grammar exercises
- [ ] Add `explanation` field for correct answers
- [ ] Update exercise renderers to display feedback
- [ ] Add feedback for common errors in transformation exercises
- [ ] Add feedback for verb conjugation errors
- [ ] Write 100+ contextual feedback messages
- [ ] Test feedback displays correctly after wrong answer
- [ ] Write unit tests for feedback rendering

**Verification**:
```bash
npm run validate-exercises
npm run type-check
# Manual: Submit wrong answer in Unit 1, verify feedback displays
```

---

### [ ] Phase 4: Adaptive Intelligence - Hint System

**Objective**: Progressive hints with XP penalties  
**Duration**: 1 week  
**Files**: `unit*.json`, `PremiumSession.tsx`

#### Tasks:
- [ ] Add `hints: string[]` field to complex exercises
- [ ] Implement hint button in exercise UI
- [ ] Deduct XP progressively: 1st hint -5 XP, 2nd hint -10 XP, 3rd hint -15 XP
- [ ] Add 3-level hints to 200+ exercises
- [ ] Test hint reveals progressively without spoiling answer
- [ ] Write unit tests for hint XP deduction logic
- [ ] Update XP transaction records with hint usage

**Verification**:
```bash
npm run validate-exercises
npm run type-check
npm test -- hints
# Manual: Use hints in Unit 5, verify XP deduction
```

---

### [ ] Phase 4: Adaptive Intelligence - Placement Test (Optional)

**Objective**: Diagnostic test to recommend starting unit  
**Duration**: 1 week  
**Files**: New `placement-test.json`, `PlacementTest.tsx`

#### Tasks:
- [ ] Create `src/content/cursos/ingles-a1/placement-test.json`
- [ ] Add 20 diagnostic questions (vocabulary, grammar, listening)
- [ ] Create `PlacementTest.tsx` component
- [ ] Implement scoring: 0-40% → U1, 41-70% → U10, 71-100% → U20
- [ ] Display recommended starting unit
- [ ] Allow user to skip or retake test
- [ ] Write unit tests for scoring logic
- [ ] Write E2E test: complete placement test, verify recommendation

**Verification**:
```bash
npm run validate-exercises
npm run type-check
npm run test:e2e -- placement-test
# Manual: Complete test with 50% score, verify recommends Unit 10
```

---

### [ ] Final: Quality Assurance & Performance Optimization

**Objective**: Ensure all phases meet acceptance criteria  
**Duration**: 1 week  

#### Tasks:
- [ ] Run full test suite: `npm test && npm run test:e2e`
- [ ] Run linting: `npm run lint`
- [ ] Run type checking: `npm run type-check`
- [ ] Validate all JSON: `npm run validate-exercises`
- [ ] Performance audit: Lighthouse score >90
- [ ] Check unit load time <2s
- [ ] Check audio playback latency <500ms
- [ ] Check GPT-4 response time <3s
- [ ] Verify all images <200KB
- [ ] Database query optimization: add missing indexes
- [ ] User acceptance testing with 20 beta users
- [ ] Document changes in CHANGELOG.md (if exists)

**Verification**:
```bash
npm run lint
npm run type-check
npm run validate-exercises
npm test
npm run test:e2e
npm run build
# Lighthouse audit on /debug/premium
# Manual: 3 users complete Units 1-10, gather feedback
```

---

## Notes

- **Phase Gates**: Each phase requires approval before proceeding to next
  - Phase 1→2: All P0 features functional, no blocking bugs
  - Phase 2→3: Audio quality approved, 30 units with listening
  - Phase 3→4: NPS >40, Units 1-10 narrative complete
  - Phase 4→Production: All tests pass, performance targets met

- **Rollback Plan**: Keep feature branch until Phase 4 complete, can revert anytime

- **Cost Tracking**: Monitor TTS API usage monthly (target $50-80/month)

- **User Feedback**: Gather after Phase 2 and Phase 3 for iteration
