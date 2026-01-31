# Detailed Implementation Plan - Enhanced Course Experience

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification

### [x] Step: Planning
Create a detailed implementation plan based on the spec.

### [x] Step: Implementation

#### 1. UI Components
- [x] Create `src/components/course/AudioButton.tsx` using ElevenLabs API.
- [x] Integrate `AudioButton` into `src/components/course/Markdown.tsx` (VocabularyTooltip).

#### 2. Content Enhancement
- [x] Update `src/content/cursos/trabajo/administracion/a2/trimestre1/semana01/theory.json` with Case Study and improved descriptions.
- [x] Update `src/content/cursos/trabajo/administracion/a2/trimestre1/semana01/exercises.json` to include Pronunciation Practice (Speaking).

#### 3. Core Logic
- [x] Update `src/components/course/LessonViewer.tsx` to handle Case Studies display.
- [x] Add Gamification triggers (XP/Badges) for speaking exercise completion in `LessonViewer.tsx`.

#### 4. Verification
- [x] Verify audio playback logic and button integration.
- [x] Verify speaking exercise refactor and AI evaluation handler.
- [x] Run `npm run lint` (passed with existing warnings).
- [x] Run `npm run type-check` (no new errors introduced).

### [x] Step: Final Review
Confirm with user and clean up.
