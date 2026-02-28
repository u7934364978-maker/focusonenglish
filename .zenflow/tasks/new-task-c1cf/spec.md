# Technical Specification — Visual Improvements for Exercise Text (A1 Unit 1)

## Difficulty Assessment
**Medium** — Several UI components need coordinated updates. Changes touch shared components used across levels, so care must be taken not to break other courses.

---

## Technical Context

- **Framework**: Next.js 15 App Router, React 19, TypeScript 5.7
- **Styling**: Tailwind CSS 3 + custom CSS variables (globals.css)
- **Primary color**: `#FF6B6B` (coral/red)
- **Fonts**: DM Sans (body), Space Grotesk (headings)
- **Component library**: Lucide React icons, Framer Motion animations, Radix UI primitives

---

## Current State Analysis

The A1 unit-1 page (`/curso-a1/unit-1`) is gated by authentication and loads exercises from `src/lib/course/a1/unit-1.ts`. The exercises are rendered via `src/components/ExerciseRenderer.tsx`, which dispatches to specialized components:

| Exercise Type | Component |
|---|---|
| `matching` | `src/components/exercises/MatchingExercise.tsx` |
| `multiple-choice` / `true-false` / `fill-blank` | Inline in `ExerciseRenderer.tsx` |
| `reading` / `reading-comprehension` | Inline reading panel in `ExerciseRenderer.tsx` |
| `word-search`, `crossword`, `flashcard`, etc. | Dedicated components |

### Identified Visual Weaknesses

#### 1. Exercise Header / Title Area (`ExerciseRenderer.tsx` lines 492–515)
- Exercise type badge is small and subtle (`text-xs font-bold` in a pill)
- Title uses `text-2xl md:text-3xl font-black` — good, but no visual breathing room
- The left-border accent (`border-l-4 border-[#FF6B6B]/40`) is too faint (40% opacity)
- Label "Exercise / Ejercicio" is `text-[10px]` — nearly invisible

#### 2. Instructions Box (`ExerciseRenderer.tsx` line 509–515)
- Displayed in a `bg-slate-50 border-slate-100` box — visually flat, low contrast
- Text is `text-sm font-medium text-slate-600` — same size/weight as body text
- The 💬 emoji as icon feels informal; no clear visual hierarchy

#### 3. Question Text (`ExerciseRenderer.tsx` lines 223–230)
- The `[[Question|Pregunta]]` micro-label is `text-[10px]` — too small to read
- Question text at `text-2xl md:text-3xl font-black` is good
- Left accent border is `border-[#FF6B6B]/40` — too transparent

#### 4. Multiple-Choice Options (`ExerciseRenderer.tsx` lines 279–325)
- Letter badge (`w-10 h-10 rounded-xl`) is decent
- Option text at `text-base md:text-lg font-semibold` is readable but could be bolder
- Hover state is subtle (`hover:bg-slate-50`) — barely perceptible

#### 5. Matching Exercise Items (`MatchingExercise.tsx` lines 155–168)
- Card items use `p-4 rounded-2xl border-2 font-bold text-base md:text-lg`
- Selected state uses `scale-[1.01]` — too subtle
- No visual connector or line number to aid matching comprehension
- The two-column grid has no visual separator or label (no "English" / "Español" headers)

#### 6. Fill-Blank Input (`ExerciseRenderer.tsx` lines 328–356)
- Input is `text-xl font-bold p-5` — good size but no visual emphasis on current focus
- No character count or hint indicator
- Placeholder text ("Escribe tu respuesta...") is entirely in Spanish (not bilingual)

#### 7. Reading Text Panel (`ExerciseRenderer.tsx` lines 527–549)
- `text-[17px] leading-[1.75] font-normal` is legible but plain
- The gradient accent bar on the left (`w-1 h-full`) is very thin and decorative-only
- No typography refinements (no drop-cap, no highlighted keywords)

#### 8. Feedback Messages (after submission)
- Correct answer box: `bg-amber-50 border-amber-200` for explanation — inconsistent with success state
- Wrong answer: `bg-red-50 border-red-100` — correct but small `text-sm`
- No clear ✅/❌ icon anchoring the message

---

## Proposed Visual Improvements

### A. Strengthen the Exercise Type Badge
**File**: `src/components/ExerciseRenderer.tsx`
- Increase badge size: `text-sm px-3.5 py-1.5` instead of `text-xs px-3 py-1`
- Use a solid color background (e.g., `bg-[#FF6B6B]/15`) with a more visible border
- Add an animated shimmer or scale-in on mount for freshness

### B. Elevate the Instructions Area
**File**: `src/components/ExerciseRenderer.tsx`
- Replace `bg-slate-50 border-slate-100` with `bg-[#FF6B6B]/5 border-[#FF6B6B]/15`
- Use a colored left border accent `border-l-3 border-[#FF6B6B]/60`
- Increase text to `text-base font-semibold text-slate-700`
- Replace emoji 💬 with a Lucide `Info` or `Lightbulb` icon

### C. Improve Question Text Hierarchy
**File**: `src/components/ExerciseRenderer.tsx`
- Make the micro-label `text-xs font-black` (up from `text-[10px]`)
- Increase left-border opacity: `border-[#FF6B6B]/70` (up from `/40`)
- Add subtle top margin / padding for breathing room

### D. Polish Multiple-Choice Options
**File**: `src/components/ExerciseRenderer.tsx`
- Make option text `text-base md:text-lg font-bold` (up from `font-semibold`)
- Increase hover shadow: `hover:shadow-md hover:border-slate-300`
- Selected state: add `ring-2 ring-[#FF6B6B]/30` for more visible focus

### E. Redesign Matching Exercise Headers and Cards
**File**: `src/components/exercises/MatchingExercise.tsx`
- Add column headers: **"English"** / **"Español"** (or language-agnostic icons) above each column
- Increase card font size to `text-lg md:text-xl font-bold`
- Selected state: increase scale to `scale-[1.03]` and add a strong shadow `shadow-orange-200`
- Add subtle numbered index to each item (1, 2, 3, 4) for visual anchoring
- Improve the matched state: `border-blue-400 bg-blue-50/80` with `text-blue-800`

### F. Improve the Reading Text Panel
**File**: `src/components/ExerciseRenderer.tsx`
- Increase font: `text-[18px] leading-[1.85]`
- Use a warmer background: `bg-amber-50/30` instead of `bg-white`
- Widen the left accent bar to `w-1.5`
- Add a "Reading" header with an icon (`BookOpen`)

### G. Improve Feedback Messages
**File**: `src/components/ExerciseRenderer.tsx`
- Use `text-base` instead of `text-sm` for feedback text
- Ensure explanation box uses `bg-blue-50 border-blue-200` consistently (not amber)
- Add large ✅ / ❌ icon as visual anchor before feedback text

---

## Files to Modify

| File | Change |
|---|---|
| `src/components/ExerciseRenderer.tsx` | Badge, instructions, question, options, reading panel, feedback |
| `src/components/exercises/MatchingExercise.tsx` | Column headers, card font, selected/matched states |

No new files need to be created. No data models, APIs, or interfaces are affected.

---

## Verification Approach

```bash
# Type checking
npm run build

# Lint
npm run lint

# Unit tests (if any exist for these components)
npm test
```

Manual verification: authenticate on the live site or run `npm run dev` locally, navigate to `/curso-a1/unit-1`, and visually inspect each exercise type.
