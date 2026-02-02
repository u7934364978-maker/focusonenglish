# Technical Specification - Pronunciation Feature

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Components**: Tailwind CSS, Radix UI (Button), Lucide React (Volume2)
- **TTS**: OpenAI TTS via `/api/generate-audio`

## Implementation Approach

### 1. Audio Utility
We will use the existing `playAudio` function in `PremiumCourseSession.tsx`. It already handles caching and fetching from `/api/generate-audio`.

### 2. Language Detection Utility
Create a simple utility function in `src/lib/premium-utils.ts` (or within the component) to detect if a string is likely English.
```typescript
const isLikelyEnglish = (text: string): boolean => {
  // Simple heuristic: check for Spanish-specific characters
  const spanishChars = /[áéíóúüñ¿¡]/i;
  return !spanishChars.test(text);
};
```

### 3. Pronunciation Button Component
Create a small, reusable sub-component within `PremiumCourseSession.tsx` or a new component `PronunciationButton`.
```tsx
const PronunciationButton = ({ text, size = "sm" }: { text: string, size?: "sm" | "md" }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`${size === "sm" ? "w-8 h-8" : "w-10 h-10"} rounded-full text-indigo-600 hover:bg-indigo-50`}
      onClick={(e) => {
        e.stopPropagation();
        playAudio(undefined, text);
      }}
    >
      <Volume2 className={size === "sm" ? "w-4 h-4" : "w-6 h-6"} />
    </Button>
  );
};
```

### 4. UI Integration Points in `PremiumCourseSession.tsx`

#### A. Multiple Choice / Odd One Out / Role Play
- Add button next to `interaction.stimulus_en`.
- Add button inside each option button if `isLikelyEnglish(opt.text)`.

#### B. Reorder Words
- Add button next to each word in the "pool" (shuffled options).
- Add a button at the top to pronounce the target sentence (we can derive this from `interaction.correct_answer` or a new field if available). *Correction*: `interaction.correct_answer` for `reorder_words` is an array of IDs. We need to join the text of those IDs.

#### C. Matching
- Add button next to `p.left` (English side).

#### D. Transformation
- Add button next to `interaction.stimulus_en`.

#### E. Gapped Text / Cloze
- Add button for the `interaction.main_text` if appropriate, although this might be too large. Maybe just for the options.

### 5. Delivery Phases
1. **Phase 1**: Implement `isLikelyEnglish` and `PronunciationButton`.
2. **Phase 2**: Add buttons to `multiple_choice`, `odd_one_out`, `role_play`, and `transformation`.
3. **Phase 3**: Add buttons to `matching` and `reorder_words`.
4. **Phase 4**: Verification and refinement.

## Verification Approach
- Manual testing in `http://localhost:3000/curso/ingles-a1/unit1`.
- Verify that clicking the button plays audio.
- Verify that Spanish text does not have buttons (except where intended).
- Run `npm run lint` to ensure no regressions.
