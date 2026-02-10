# Technical Specification - A1 Level Refactor

## Context
- **Language**: TypeScript
- **Framework**: Next.js 15 (App Router)
- **Engine**: `UltraAdaptiveEngine` & `GlobalContentProvider`
- **UI Components**: `PremiumSession`, `PracticaInteligenteClient`

## Implementation Approach

### 1. New Interaction Types
We need to support new interaction types in `PremiumInteraction` and `PremiumSession`:
- `touch_word_audio`: 6 words, sounds 1.
- `mini_dictation`: Predictive keyboard simulation (can be implemented as a variant of `fill_blanks` or `reorder_words`).
- `shadowing`: Voice recording and rhythm comparison.
- `vertical_video`: 15-30s video with embedded questions.
- `branching_dialogue`: Selection-based dialogue flow.
- `chat_simulation`: Chat bubble style interaction.
- `ar_lite`: Image mapping (touch regions).

### 2. Data Structure
- Update `src/lib/a1-visual-exercises.ts` or create `src/lib/a1-new-exercises.ts` to host the new structured content.
- Use `A1_KIDS_EXERCISES` as the entry point for the `GlobalContentProvider`.

### 3. Component Updates
- **`PremiumSession.tsx`**: Add renderers for the new interaction types.
- **`A1_IMAGE_BANK`**: Expand with more specific high-quality images.
- **`UltraAdaptiveEngine.ts`**: (Optional) Add logic to ensure the "change every 5-8 minutes" rule, though the random picker currently provides variety.

## Delivery Phases

### Phase 1: Core Engagement (Flashcards & Dictations)
- Implement `touch_word_audio`.
- Implement `mini_dictation` with predictive-like UI.
- Update A1 data bank with these types.

### Phase 2: Input & Interaction (Videos & Branching)
- Add `vertical_video` support (reusing video scene logic but vertical).
- Add `branching_dialogue` logic.

### Phase 3: Speaking & Writing (Voice Notes & Chat)
- Implement voice recording UI for `voice_note`.
- Implement `chat_simulation`.

### Phase 4: Vocabulary & Grammar (AR-Lite & Patterns)
- Implement `ar_lite` (image hotspots).
- Add "Invisible Grammar" exercises.

## Verification
- E2E tests for each new interaction type.
- Visual verification in the `/practica-inteligente` route.
- Lint and Typecheck.
