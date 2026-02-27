# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 016640c7-ab4a-4d5e-b492-bb2b92344193 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: f8d911d6-43e9-44ce-89dd-9a66a87c773d -->

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
<!-- chat-id: d52adc6c-4a6d-4064-bcca-ba3cf3655e1a -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [x] Step: Phase 1 — Quick Wins (F5 RepairModeBanner + F6 CelebrationModal i18n)
<!-- chat-id: f570d1fa-386a-4f32-a50a-9b27e6bc48bc -->

Implement the two lowest-risk, highest-value features that have no external data dependencies.

**F6 — CelebrationModal i18n (`src/components/course/CelebrationModal.tsx`)**
- Add `language?: 'es' | 'en'` prop (default `'en'` — backward-compatible)
- Add `MESSAGES` object with Spanish strings: `outstanding`, `excellent`, `wellDone`, `goodJob`, `keepTrying`, `button`, `scoreLabel`
- Render messages from `MESSAGES[language ?? 'en']` based on `score` thresholds
- Pass `language='es'` from `LessonViewer.tsx` when course level starts with `a1` or `a2`

**F5 — RepairModeBanner (`src/components/course/RepairModeBanner.tsx`)**
- Create new `RepairModeBanner.tsx` with `remainingCount: number` prop
- Sticky banner below exercise header: "Modo Repaso 🔄 — Estás revisando los ejercicios fallados."
- Show count: "X ejercicios pendientes"
- Mount in `LessonViewer.tsx` when in repair/fail mode (≥ 2 wrong in a row)
- Change progress bar color to amber (`bg-amber-500`) when in repair mode
- Track `failCount` state; reset on correct answer, increment on wrong

**Tests (`__tests__/CelebrationModal.test.tsx`)**
- Test `language='es'` renders Spanish title/button
- Test `language='en'` (default) still renders English strings
- Test `RepairModeBanner` renders banner text and count

**Verification**
```bash
npm run lint
npx tsc --noEmit
npm test -- --testPathPattern="CelebrationModal|RepairMode"
```

### [x] Step: Phase 2 — Sidebar & Navigation (F3 NextActionCard + F8 StreakRiskBanner)
<!-- chat-id: 55d8b191-3e0c-4e50-87bd-bfd326a5ad19 -->

**F8 — StreakRiskBanner (`src/components/gamification/StreakRiskBanner.tsx`)**
- Create new `StreakRiskBanner.tsx` with `streakDays: number`, `nextLessonHref: string` props
- Dismissible amber top banner with Flame icon: "⚠️ Tu racha de X días está en riesgo."
- Link to `nextLessonHref`
- Mount in `CourseCurriculum.client.tsx`: query `user_streaks` for `current_streak` + `last_activity_date`
- Show banner only if `current_streak > 0` and `last_activity_date` is yesterday (not today)
- Use `dismissed` local state; store in `sessionStorage` key `streak_risk_dismissed`

**F3 — NextActionCard (`src/components/course/NextActionCard.tsx`)**
- Create new `NextActionCard.tsx` with props: `userId`, `level`, `modules`, `completedIds`, `srsReviewCount`
- Smart next logic (priority order):
  1. `srsReviewCount > 0` → "Tienes X ejercicios pendientes de revisión" → link `/practica-inteligente`
  2. Incomplete lesson exists → "Continúa: {lessonTitle}" → link `/practice/{lessonId}`
  3. No progress → "¡Empieza aquí! {firstLesson.title}" → link `/practice/{firstLessonId}`
- Mount in `CourseCurriculum.client.tsx`, replacing generic "Práctica Inteligente" sidebar card
- Fetch `srsReviewCount` from `premiumCourseService.getSRSPerformance()` in parent

**Tests (`__tests__/NextActionCard.test.tsx`)**
- Test each of the 3 priority branches with mocked props
- Test `StreakRiskBanner` renders and dismisses

**Verification**
```bash
npm run lint
npx tsc --noEmit
npm test -- --testPathPattern="NextActionCard|StreakRisk"
```

### [x] Step: Phase 3 — Visual Roadmap & Onboarding (F1 CourseWelcomeScreen + F2 CourseRoadmap)
<!-- chat-id: 552745b0-f8e5-424c-a36a-0213dbb4ffb0 -->

**F1 — CourseWelcomeScreen (`src/components/course/CourseWelcomeScreen.tsx`)**
- Props: `courseId`, `userId`, `modulesCount`, `lessonsCount`, `firstLessonId`, `onDismiss`
- Fixed overlay (`position: fixed`, `z-50`) with framer-motion entrance (`opacity 0→1`, `y 40→0`)
- Content: "Aprenderás inglés básico para el trabajo en 90 días", module count, lesson count, "~15 min/sesión"
- CTA: "Comenzar ahora →" links to `/practice/{firstLessonId}`
- On dismiss: set `localStorage` key `course_welcome_${courseId}_shown = 'true'`; fire-and-forget Supabase `updateUserProfile({ onboarding_completed: true })`
- Mount in `CourseCurriculum.client.tsx`: initialize visibility from localStorage; show if key absent
- Respects `prefers-reduced-motion`

**F2 — CourseRoadmap (`src/components/course/CourseRoadmap.tsx`)**
- Props: `modules: Module[]`, `completedIds: Set<string>`, `currentLessonId: string | null`
- Pure CSS/Tailwind — no canvas/SVG: modules as vertically stacked nodes connected by `border-l-2`
- Node states: completed (green filled + star icon), current (coral + `animate-pulse`), future (gray)
- Hover tooltip: lesson title + "~5 min"
- Add `viewMode: 'list' | 'map'` state to `CourseCurriculum.client.tsx`
- Add toggle button (List / Map icons from lucide-react) with ARIA label

**Tests (`__tests__/CourseWelcomeScreen.test.tsx`, `__tests__/CourseRoadmap.test.tsx`)**
- `CourseWelcomeScreen`: renders correctly; calls `onDismiss` + writes localStorage on button click
- `CourseRoadmap`: renders completed nodes as green, current as pulsing, future as gray

**Verification**
```bash
npm run lint
npx tsc --noEmit
npm test -- --testPathPattern="CourseWelcome|CourseRoadmap"
```

### [x] Step: Phase 4 — Gamification & Progress Sync (F4 StreakBurst + F7 useWeekProgress)
<!-- chat-id: 6602d2db-ac4e-476e-a284-55d9c3d36238 -->

**F7 — useWeekProgress hook (`src/hooks/useWeekProgress.ts`)**
- Interface: `{ completedActivities: string[], markComplete: (id: string) => Promise<void>, isLoading: boolean }`
- On mount: read `localStorage` immediately (optimistic); in parallel query Supabase `user_interaction_progress` filtered by `week_id`
- `markComplete`: write to localStorage synchronously + upsert to Supabase `{ user_id, interaction_id, completed_at }`
- Falls back gracefully if `userId` is null (localStorage only)
- Modify `WeeklyCourseViewer.tsx`: add optional `userId?: string` prop; replace inline localStorage logic with `useWeekProgress(weekId, userId)`

**F4 — StreakBurst (`src/components/gamification/StreakBurst.tsx`)**
- Props: `consecutiveCount: number`, `onComplete: () => void`
- Absolutely-positioned overlay, auto-dismisses after 600ms
- framer-motion exit animation; respects `prefers-reduced-motion`
- Message per threshold: 3 → "¡Racha de 3! 🔥", 5 → "¡Racha de 5! ⚡", 10 → "¡Racha de 10! 🌟"
- Reuse existing AudioContext infrastructure for a short two-note tone
- Add `consecutiveCorrect` state to `LessonViewer.tsx`:
  - Increment on correct answer
  - Reset on wrong answer
  - Render `<StreakBurst>` at thresholds 3, 5, 10; reset `consecutiveCorrect` after burst shown

**Tests (`__tests__/useWeekProgress.test.ts`)**
- Test optimistic localStorage read on mount
- Test Supabase upsert called on `markComplete` with mocked Supabase client
- Test `userId = null` skips Supabase call

**Verification**
```bash
npm run lint
npx tsc --noEmit
npm test -- --testPathPattern="useWeekProgress|StreakBurst"
npm test
```

### [ ] Step: Final Lint & Type Check

Run full lint and typecheck across all changes to ensure no regressions.

```bash
npm run lint
npx tsc --noEmit
npm test
```

- Fix any lint errors introduced in previous phases
- Fix any TypeScript errors (missing types, incompatible props, etc.)
- All existing tests must continue to pass
