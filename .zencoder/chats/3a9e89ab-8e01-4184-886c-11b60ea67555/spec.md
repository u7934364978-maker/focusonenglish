# Technical Specification - Font and Typography Improvements

## Context
The project uses `Next.js 15` with `Tailwind CSS`. The main font is `Nunito`, loaded via `next/font/google` in `RootLayout`.

## Implementation Approach

### 1. CSS Variable Definitions
- Update `src/app/globals.css` to define `--font-dm-sans` and `--font-space-grotesk` as aliases to `--font-nunito` or remove them and use a single font variable consistently. 
- *Correction*: Since `layout.tsx` only loads `Nunito`, we should either load the missing fonts or standardize on `Nunito`. The current `globals.css` references them but they aren't provided by Next.js font loader in `layout.tsx`.

### 2. Typography Adjustments in ExerciseRenderer
- Modify `src/components/ExerciseRenderer.tsx` to reduce the font weight of heavy titles.
- Change `font-black` (900) to `font-extrabold` (800) or `font-bold` (700).
- Review `tracking-tight` and `tracking-tighter` usages.

### 3. Consistency Across Components
- Check `h1`, `h2`, `h3` definitions in `globals.css` which use `font-black` and `tracking-tighter`. These are likely the root cause of the "Matching" title issue.

## Source Code Changes

### `src/app/globals.css`
- Adjust global heading styles to use `font-extrabold` instead of `font-black`.
- Remove or alias undefined font variables.

### `src/components/ExerciseRenderer.tsx`
- Replace `font-black` with `font-extrabold` in:
  - Label: "Exercise" / "Question"
  - Title: "Matching"
  - Question: "Swim"
  - Feedback panel titles.

## Delivery Phases
1. **CSS Cleanup**: Fix undefined variables and global heading styles.
2. **Component Update**: Refine `ExerciseRenderer.tsx` for specific exercise UI elements.
3. **Verification**: Manual visual check (browser) and E2E test to ensure no regression in exercise flow.

## Verification Approach
- **Visual**: Use `browser` tool to inspect `https://localhost:3000/curso-a1` (or relevant exercise page).
- **Tests**: Run existing E2E tests if available.
