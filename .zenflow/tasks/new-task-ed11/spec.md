# Technical Specification: UX Improvements — Curso A1 Focus English

## 1. Technical Context

### Language & Runtime
- **Language**: TypeScript 5.7.2
- **Framework**: Next.js 15 (App Router, SSR/RSC)
- **Runtime**: Node.js ≥ 20.9.0
- **CSS**: Tailwind CSS (utility classes only, no new CSS files unless strictly needed)
- **State**: React hooks (`useState`, `useEffect`); no external state library
- **Animations**: `framer-motion` (already installed)
- **Icons**: `lucide-react` (already installed)
- **Database**: Supabase via `@supabase/supabase-js`

### Existing Patterns to Follow
| Pattern | Example File |
|---|---|
| Client components | `src/components/course/CourseCurriculum.client.tsx` |
| Server data + client interactivity | `src/app/dashboard/[goal]/[level]/page.tsx` |
| Gamification hooks | `src/lib/hooks/use-gamification.ts` |
| Supabase queries | `src/lib/services/premium-course-service.ts` |
| `framer-motion` usage | `src/components/course/WeeklyCourseViewer.tsx` |
| UI primitives | `src/components/ui/` (card, button, progress, badge) |

### Key Existing Types
- `Module`, `Lesson`, `Exercise` — `src/lib/exercise-types.ts`
- `StreakData` — `src/lib/gamification/streaks.ts`
- `UserProfile` — `src/lib/services/profile-service.ts`
- `CourseLevel` — `src/lib/services/premium-course-service.ts`

---

## 2. Implementation Approach

All changes are **additive and non-breaking**. Existing routes and components are not removed; new components are mounted alongside or replacing inert placeholder UI.

The eight features (F1–F8 from PRD, F9 is scope boundary) are grouped into four implementation phases of increasing scope.

---

## 3. Source Code Structure Changes

### New Files
```
src/
  components/
    course/
      CourseWelcomeScreen.tsx       # F1 — first-visit intro screen
      CourseRoadmap.tsx             # F2 — visual roadmap (map view)
      NextActionCard.tsx            # F3 — "smart next" sidebar card
      RepairModeBanner.tsx          # F5 — repair mode indicator
    gamification/
      StreakBurst.tsx               # F4 — micro-celebration overlay
      StreakRiskBanner.tsx          # F8 — streak-at-risk warning
  hooks/
    useWeekProgress.ts              # F7 — Supabase-backed week progress
  app/
    practice/
      quick/
        page.tsx                    # F9 — quick 5-min session route
```

### Modified Files
| File | Change |
|---|---|
| `src/components/course/CourseCurriculum.client.tsx` | Mount `CourseWelcomeScreen`, `CourseRoadmap` toggle, `NextActionCard`, `StreakRiskBanner` |
| `src/components/course/CelebrationModal.tsx` | Add `language` prop; Spanish messages for A1 |
| `src/components/course/WeeklyCourseViewer.tsx` | Replace raw localStorage with `useWeekProgress` hook |
| `src/components/course/LessonViewer.tsx` | Pass `language='es'` to `CelebrationModal` for A1 level |

> **Note on `PremiumSession.tsx`**: The PRD references this file but it does not exist in the codebase—the equivalent is `LessonViewer.tsx`. All `PremiumSession` changes target `LessonViewer.tsx` instead.

---

## 4. Data Model / API / Interface Changes

### 4.1 Supabase — No Schema Changes Required
All required columns already exist:
- `user_profiles.onboarding_completed` — checked for F1 first-visit detection
- `user_streaks.last_activity_date` — read for F8 streak-at-risk
- `user_interaction_progress` — read by `premiumCourseService.getProgress()` for F3
- `user_srs` — read by `premiumCourseService.getSRSPerformance()` for F3 smart next

> If `user_profiles.onboarding_completed` does not exist, the component falls back to `localStorage` key `course_welcome_${courseId}_shown` as a safe alternative.

### 4.2 New Hook Interface

```typescript
// src/hooks/useWeekProgress.ts
interface UseWeekProgressReturn {
  completedActivities: string[];
  markComplete: (activityId: string) => Promise<void>;
  isLoading: boolean;
}

function useWeekProgress(weekId: string, userId: string | null): UseWeekProgressReturn
```

**Behavior**: On mount, reads `localStorage` immediately (optimistic). In parallel, queries Supabase `user_interaction_progress` filtered by `week_id`. On write, updates both stores.

### 4.3 Component Interface Changes

#### `CelebrationModal` — new prop
```typescript
interface CelebrationModalProps {
  show: boolean;
  score: number;
  onClose: () => void;
  language?: 'es' | 'en';  // default 'en' — backward-compatible
}
```

#### `CourseWelcomeScreen` props
```typescript
interface CourseWelcomeScreenProps {
  courseId: string;           // e.g. 'ingles-a1'
  userId: string;
  modulesCount: number;
  lessonsCount: number;
  firstLessonId: string;
  onDismiss: () => void;
}
```

#### `CourseRoadmap` props
```typescript
interface CourseRoadmapProps {
  modules: Module[];
  completedIds: Set<string>;
  currentLessonId: string | null;
}
```

#### `NextActionCard` props
```typescript
interface NextActionCardProps {
  userId: string;
  level: string;
  modules: Module[];
  completedIds: Set<string>;
  srsReviewCount: number;
}
```

#### `RepairModeBanner` props
```typescript
interface RepairModeBannerProps {
  remainingCount: number;
}
```

#### `StreakBurst` props
```typescript
interface StreakBurstProps {
  consecutiveCount: number;
  onComplete: () => void;
}
```

#### `StreakRiskBanner` props
```typescript
interface StreakRiskBannerProps {
  streakDays: number;
  nextLessonHref: string;
}
```

---

## 5. Feature Implementation Details

### F1 — CourseWelcomeScreen
- Mounted inside `CourseCurriculum.client.tsx` as a conditional overlay (`position: fixed`, `z-50`).
- Visibility state initialized from `localStorage` (`course_welcome_${courseId}_shown`). If false, show screen; on dismiss, set to `'true'` in localStorage and call Supabase `updateUserProfile` with `{ onboarding_completed: true }` in the background (fire-and-forget).
- Content is **static/hardcoded** for A1: "Aprenderás inglés básico para el trabajo en 90 días", 5 modules, ~15 lecciones, 15 min/sesión. These values are derived from the `modules` prop at runtime.
- Animated entrance with `framer-motion` (`opacity: 0 → 1`, `y: 40 → 0`). Respects `prefers-reduced-motion`.

### F2 — CourseRoadmap
- Added as a second view mode in `CourseCurriculum.client.tsx` via a `viewMode: 'list' | 'map'` state.
- A toggle button (two icons: `List` / `Map` from lucide-react) switches the view.
- Roadmap renders modules as vertically stacked "nodes" connected by a line (CSS `border-l-2`). Each node:
  - Completed: green filled circle + star icon
  - Current (first incomplete): coral pulsing ring (`animate-pulse`)
  - Future: gray circle
- Hover tooltip shows lesson title + estimated duration (fixed at `~5 min` per lesson since no duration metadata exists).
- No canvas/SVG path drawing — pure CSS/Tailwind for simplicity and maintainability.

### F3 — NextActionCard
- Replaces the generic "Práctica Inteligente" sidebar card.
- Logic (runs client-side after `getProgress()`):
  1. If `srsReviewCount > 0` → "Tienes X ejercicios pendientes de revisión" with link to `/practica-inteligente`.
  2. Else if there are incomplete lessons → "Continúa: {lessonTitle}" with link to `/practice/{lessonId}`.
  3. Else → "¡Empieza aquí! {firstLesson.title}" with link to `/practice/{firstLessonId}`.
- `srsReviewCount` is fetched by calling `premiumCourseService.getSRSPerformance()` and counting items where `next_review_at < now`.

### F4 — StreakBurst (Micro-Celebrations)
- New state in `LessonViewer.tsx`: `consecutiveCorrect: number` (resets on wrong answer).
- After each correct answer (where feedback is already processed), increment counter.
- At thresholds 3, 5, 10: render `<StreakBurst consecutiveCount={n} onComplete={() => {}} />`.
- `StreakBurst` is an absolutely-positioned overlay that auto-dismisses after 600ms via `setTimeout` + `framer-motion` exit animation.
- Existing AudioContext infrastructure (used in `CelebrationModal`) is reused for a short two-note confirmation tone.

### F5 — RepairModeBanner
- In `LessonViewer.tsx`, identify repair mode by tracking a `failCount` threshold (≥ 2 wrong in a row triggers repair).
- When in repair mode, show `<RepairModeBanner remainingCount={n} />` as a sticky banner below the exercise header.
- The progress bar color changes from coral (`bg-coral-500`) to amber (`bg-amber-500`) via conditional class.

### F6 — CelebrationModal i18n
- Add `language?: 'es' | 'en'` prop to `CelebrationModal`.
- Add a `MESSAGES` object:
  ```typescript
  const MESSAGES = {
    es: {
      outstanding: { emoji: '🎉', title: '¡Sobresaliente!', message: '¡Lo lograste!' },
      excellent:   { emoji: '🌟', title: '¡Excelente!',     message: '¡Muy bien hecho!' },
      wellDone:    { emoji: '👏', title: '¡Bien hecho!',    message: '¡Sigue así!' },
      goodJob:     { emoji: '👍', title: '¡Buen trabajo!',  message: '¡Vas bien!' },
      keepTrying:  { emoji: '💪', title: '¡Sigue practicando!', message: '¡Tú puedes mejorar!' },
      button: 'Continuar aprendiendo →',
      scoreLabel: 'Tu puntuación',
    },
    en: { /* existing strings */ }
  };
  ```
- `LessonViewer.tsx` passes `language='es'` when the course level starts with `a1` or `a2`.

### F7 — useWeekProgress Hook
- Extract the two `useEffect` blocks from `WeeklyCourseViewer.tsx` into `src/hooks/useWeekProgress.ts`.
- The hook returns `{ completedActivities, markComplete, isLoading }`.
- `markComplete` writes to localStorage synchronously and fires a Supabase upsert to `user_interaction_progress` with `{ user_id, interaction_id: activityId, completed_at }`.
- `userId` is passed as a prop from the parent server component, falling back to `null` for anonymous users.
- `WeeklyCourseViewer` receives `userId?: string` as a new optional prop and passes it to the hook.

### F8 — StreakRiskBanner
- In `CourseCurriculum.client.tsx`, after loading progress, also read `user_streaks` from Supabase:
  ```typescript
  const { data } = await supabase
    .from('user_streaks')
    .select('current_streak, last_activity_date')
    .eq('user_id', userId)
    .single();
  ```
- If `current_streak > 0` and `last_activity_date` is yesterday (not today), render `<StreakRiskBanner streakDays={n} nextLessonHref={nextLessonHref} />`.
- Banner is a dismissible top-of-page warning (amber background, Flame icon).

---

## 6. Delivery Phases

### Phase 1 — Quick Wins (No data dependencies)
**Scope**: F5 (RepairModeBanner), F6 (CelebrationModal i18n)  
**Files**: `CelebrationModal.tsx`, `LessonViewer.tsx` (minor additions)  
**Verification**: Unit tests for `CelebrationModal` with `language` prop; visual check in browser.

### Phase 2 — Sidebar & Navigation
**Scope**: F3 (NextActionCard), F8 (StreakRiskBanner)  
**Files**: `CourseCurriculum.client.tsx`, new `NextActionCard.tsx`, new `StreakRiskBanner.tsx`  
**Verification**: Unit tests for `NextActionCard` logic (lesson recommendation); Supabase integration verified manually.

### Phase 3 — Visual Roadmap & Onboarding
**Scope**: F1 (CourseWelcomeScreen), F2 (CourseRoadmap)  
**Files**: New `CourseWelcomeScreen.tsx`, new `CourseRoadmap.tsx`, `CourseCurriculum.client.tsx`  
**Verification**: Unit tests for `CourseRoadmap` node rendering; localStorage dismiss logic tested.

### Phase 4 — Gamification & Progress Sync
**Scope**: F4 (StreakBurst), F7 (useWeekProgress)  
**Files**: New `StreakBurst.tsx`, new `useWeekProgress.ts`, `LessonViewer.tsx`, `WeeklyCourseViewer.tsx`  
**Verification**: Unit tests for `useWeekProgress` with mocked Supabase; integration test for consecutive-correct counter in `LessonViewer`.

---

## 7. Verification Approach

### Lint
```bash
npm run lint
```

### Type Check
```bash
npx tsc --noEmit
```

### Unit Tests
```bash
npm test
```
Test files follow the existing convention at `__tests__/` and `src/components/course/preview/__tests__/`:
- `__tests__/CourseWelcomeScreen.test.tsx`
- `__tests__/CourseRoadmap.test.tsx`
- `__tests__/NextActionCard.test.tsx`
- `__tests__/CelebrationModal.test.tsx`
- `__tests__/useWeekProgress.test.ts`

### E2E (Playwright)
```bash
npm run test:e2e
```
One smoke test per phase verifying the feature renders and does not break the existing curriculum view.

### Accessibility
- All new animated components check `window.matchMedia('(prefers-reduced-motion: reduce)')` and skip animations if true, following the pattern in existing `framer-motion` usage.
- ARIA labels added to icon-only buttons (roadmap toggle, banner dismiss).
