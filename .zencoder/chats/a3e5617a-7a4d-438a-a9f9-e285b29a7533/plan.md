# Implementation Plan - A1 Level Refactor

## Phase 1: Infrastructure & Core Exercises
- [x] Create PRD
- [x] Create Technical Specification
- [x] Update `PremiumInteraction` type in `src/types/premium-course.ts` to include new fields for shadowing, video, etc.
- [x] Implement `touch_word_audio` interaction in `PremiumSession.tsx`.
- [x] Implement `mini_dictation` interaction with predictive suggestions in `PremiumSession.tsx`.
- [x] Update `src/lib/a1-visual-exercises.ts` with initial set of "Quick Engagement" exercises.

## Phase 2: Input & Interaction
- [x] Implement `vertical_video` support in `PremiumSession.tsx`.
- [x] Implement `branching_dialogue` logic in `PremiumSession.tsx`.
- [x] Add vertical video exercises and branching stories to A1 data bank.

## Phase 3: Advanced Skills
- [x] Implement `voice_note` (WhatsApp style) in `PremiumSession.tsx`.
- [x] Implement `chat_simulation` in `PremiumSession.tsx`.
- [x] Add speaking and writing exercises to A1 data bank.

## Phase 4: Vocabulary & Gamification
- [x] Implement `ar_lite` (image hotspots) in `PremiumSession.tsx`.
- [x] Add Scavenger Hunt and AR-lite exercises to A1 data bank.
- [x] Implement "Spot the Difference" for invisible grammar.

## Phase 5: Verification & Cleanup
- [x] obtain user approval for E2E tests. (Skipped per user request to push)
- [x] Write E2E tests for new A1 interactions. (Skipped per user request to push)
- [x] Final visual check of the A1 flow in `/practica-inteligente`.
- [x] Run `npm run lint` and `npm run typecheck`. (Typecheck errors unrelated to this task remain)
