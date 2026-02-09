# Technical Specification - Fix Practica Inteligente Specialized Paths

## Technical Context
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS.
- **Components**: `PremiumCourseSession` for exercise rendering.
- **Engine**: `UltraAdaptiveEngine` and `GlobalContentProvider` for exercise selection.
- **Database**: Supabase for user state and SRS tracking.

## Implementation Approach

### 1. Enhanced Content Provider (`GlobalContentProvider.ts`)
- Update the `levels` array to include all available courses.
- Support recursive loading for nested directories like `viajes/a1`.
- Map new courses to specializations:
    - `emails-b1` -> `emails`
    - `negociaciones-b2` -> `finance`
    - `viajes/a1` -> `travel`
- Implement robust unit title scanning to identify `it` and `finance` content within general courses.

### 2. Adaptive Engine Refinement (`UltraAdaptiveEngine.ts`)
- Verify that `findEligibleInteractions` correctly handles the `specialization` filter.
- Ensure fallback logic doesn't ignore the specialization if it exists.

### 3. Dynamic Session Management (`PracticaInteligenteClient.tsx`)
- **State Management**: Use `useEffect` to rebuild `sessionData` whenever the `queue` changes.
- **Session Continuity**: Remove `window.location.reload()`. Instead, `onComplete` will trigger a fetch for more exercises, which will update the `queue` and consequently `sessionData`.
- **Initialization**: Fix `startSession` to fetch a larger initial batch (e.g., 3-5 exercises) instead of just one.

## Source Code Structure Changes
- **`src/lib/course-engine/global-content-provider.ts`**: Modify `loadAllContent` and `findEligibleInteractions`.
- **`src/app/practica-inteligente/PracticaInteligenteClient.tsx`**: Refactor `startSession`, `fetchMore`, and `onComplete` handler.

## Data Model / API Changes
- No changes to existing APIs (`/api/adaptive/*`).
- No changes to database schema.

## Delivery Phases

### Phase 1: Content Loading & Mapping
- Update `GlobalContentProvider` to load all content.
- Verify content counts for each specialization via logs.

### Phase 2: Session Continuity
- Refactor `PracticaInteligenteClient` to handle dynamic queue updates.
- Test with "Inglés General" to ensure infinite scrolling works.

### Phase 3: Specialized Path Verification
- Test "Emails", "Finance", and "Travel" paths.
- Ensure only relevant exercises are served.

## Verification Approach
- **Manual Testing**: Select each path in `/practica-inteligente` and verify that the first 5 exercises belong to that path.
- **Console Logs**: Add debug logs in `GlobalContentProvider` to show the number of exercises loaded per specialization.
- **Linting**: Run `npm run lint` to ensure no regressions.
