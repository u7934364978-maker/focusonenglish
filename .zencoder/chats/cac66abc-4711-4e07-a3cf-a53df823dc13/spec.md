# Technical Specification - Enhanced Course Experience

## Technical Context
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS.
- **Icons**: `lucide-react`.
- **Audio**: ElevenLabs via `/api/ai-tutor/tts`.
- **Content**: Local JSON files in `src/content/cursos/trabajo/...`.
- **State Management**: React `useState` and `useEffect` within `LessonViewer`.

## Implementation Approach

### 1. Interactive Audio Vocabulary
- **New Component**: `AudioButton.tsx` in `src/components/course/`.
  - Props: `text: string`, `voice?: string`.
  - Logic: Fetches audio from `/api/ai-tutor/tts` using a POST request and plays it using the `Audio` API.
- **Markdown Integration**: Update `src/components/course/Markdown.tsx`.
  - Add the `AudioButton` next to vocabulary terms in the `VocabularyTooltip`.
  - Optionally add it to list items if they look like vocabulary definitions.

### 2. Speaking Practice Integration
- **Data Update**: Modify `src/content/cursos/trabajo/administracion/a2/trimestre1/semana01/exercises.json`.
  - Add a new exercise of type `pronunciation`.
  - Target words: "scanned", "transferred", "downloaded", "approved", "onboarding".
- **Renderer**: Ensure `PronunciationRenderer.tsx` is correctly utilized in `LessonViewer.tsx`.
- **Evaluation**: Use the existing `evaluate-speaking` API.

### 3. Integrated Case Study
- **Data Update**: Modify `src/content/cursos/trabajo/administracion/a2/trimestre1/semana01/theory.json`.
  - Add a `caseStudies` array with a scenario related to Digital Onboarding.
- **LessonViewer Update**: 
  - Ensure `local-course-service.ts` correctly picks up the case study.
  - Update `LessonViewer.tsx` to display a "Case Study" section if `lesson.caseStudies` is present.

### 4. Gamification Logic
- **Hook**: Use `useGamification` in `LessonViewer.tsx`.
- **Logic**: 
  - When `onComplete` is triggered or when a specific exercise (like speaking) is finished with a high score, call `gamification.addXP` or `gamification.unlockBadge`.

## Source Code Changes
- `src/components/course/AudioButton.tsx`: **New file**.
- `src/components/course/Markdown.tsx`: Update to include `AudioButton`.
- `src/components/course/LessonViewer.tsx`: Update to handle case studies and gamification triggers.
- `src/content/cursos/trabajo/administracion/a2/trimestre1/semana01/theory.json`: Update content.
- `src/content/cursos/trabajo/administracion/a2/trimestre1/semana01/exercises.json`: Update exercises.

## Verification Approach
- **Manual Testing**: Navigate to the course URL and verify:
  - Audio button plays the correct word.
  - Speaking exercise works and evaluates.
  - Case study is visible and interactive.
- **Linting**: Run `npm run lint` to ensure no regressions.
- **Type Checking**: Run `npm run typecheck`.
