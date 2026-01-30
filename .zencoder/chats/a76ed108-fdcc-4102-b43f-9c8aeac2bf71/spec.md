# Technical Specification - Microlearning & Gamification Content

## Technical Context
- **Framework**: Next.js 14 (App Router)
- **Component**: `src/components/metodologias/MicrolearningGamification.tsx`
- **Icons**: `lucide-react`
- **State Management**: React `useState` (local state for lessons and progress)

## Implementation Approach
1. **Extend Data Structures**:
    - Update `MicroLesson` interface if needed (already seems sufficient).
    - Update `microLessons` array with new pedagogical content.
    - Update `badges` array with a new methodology-related badge.
2. **Content Creation**:
    - Define 5 lessons with specific IDs, titles, categories, and XP rewards.
3. **UI Enhancements**:
    - Add 'methodology' as a filterable category in the UI.
    - Ensure the 'metodologías' lessons are easily accessible (perhaps as a default level or a new level 'Intro').

## Source Code Structure Changes
- Only `src/components/metodologias/MicrolearningGamification.tsx` will be modified.

## Data Model Changes
- No schema changes needed as data is currently hardcoded in the component for this specific feature view.

## Delivery Phases
1. **Phase 1**: Add content to `microLessons` and `badges`.
2. **Phase 2**: Update UI filters and categories.
3. **Phase 3**: Verification and testing of lesson completion logic.

## Verification Approach
- Manual testing of the component by navigating to `/metodologias-innovadoras/gamificacion`.
- Ensure new lessons appear and can be "completed" (simulated by click).
- Ensure badges unlock correctly.
- Run `npm run lint` if available.
