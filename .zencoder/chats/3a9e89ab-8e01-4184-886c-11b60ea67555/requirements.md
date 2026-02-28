# Requirements - Font Improvement for Exercises

## Problem Statement
The bold text in exercises (e.g., exercise titles, question text) is currently illegible because the font weight is too heavy (`font-black`), causing characters to clump together. Additionally, some CSS variables for fonts are referenced but not defined.

## Goals
- Improve legibility of titles and questions in exercises.
- Ensure font consistency across the platform.
- Fix undefined font variables in CSS.

## Proposed Changes
1. **Typography Adjustments**:
   - Replace `font-black` (900) with `font-extrabold` (800) or `font-bold` (700) in `src/components/ExerciseRenderer.tsx`.
   - Relax `tracking-tight` or `tracking-tighter` where it impacts legibility.
2. **CSS Cleanup**:
   - Define or remove undefined font variables (`--font-dm-sans`, `--font-space-grotesk`) in `src/app/globals.css`.
   - Ensure `Nunito` is the primary font used throughout the app as configured in `RootLayout`.

## Acceptance Criteria
- Exercise titles (e.g., "Matching") are clearly readable.
- Question text (e.g., "Swim") is clearly readable.
- No "clumping" of letters in bold text.
- Visual consistency is maintained with the existing design tokens.
