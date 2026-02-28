# Technical Specification: Fix Overlapping Hover Translations

## Context
Users have reported that hover translations (tooltips) overlap with each other or with other UI elements, making them difficult to read. This happens when multiple translatable words are close to each other or when the tooltip's z-index is not sufficient to stay above other components.

## Requirements
- Ensure that the currently hovered translation tooltip is always on top of other tooltips and UI elements.
- Maintain a consistent look and feel across all tooltip implementations.

## Implementation Approach

### 1. `src/components/course/exercises/TranslatedText.tsx`
- Currently uses `z-[100]`.
- **Fix**: Add `hover:z-[110]` to the container or ensure the tooltip itself gets a higher z-index when its parent is hovered. Since the tooltip is a child of a `group`, we can use `group-hover:z-[110]` on the tooltip or just `z-[100]` and ensure the active one is higher.
- Actually, adding `z-index` to the `group` span on hover is better: `hover:z-[110]`.

### 2. `src/components/course/exercises/ExerciseRenderer.tsx` (Vocabulary tooltips)
- Currently uses `z-50`.
- **Fix**: Add `hover:z-[110]` to the parent span and potentially increase the base `z-index`.

### 3. `src/components/course/Markdown.tsx` (Vocabulary tooltips)
- Currently uses `z-50`.
- **Fix**: Add `hover:z-[110]` to the parent span.

## Verification Plan
- **Manual Verification**: Navigate to exercises with many translatable words (e.g., Unit 1 or Unit 3) and hover over adjacent words. The tooltip for the word currently under the mouse should appear above any previously triggered tooltips (if any remain visible due to transitions) and other UI elements.
- **Visual Check**: Ensure tooltips don't get cut off by containers with `overflow: hidden`.

## Affected Files
- `src/components/course/exercises/TranslatedText.tsx`
- `src/components/course/exercises/ExerciseRenderer.tsx`
- `src/components/course/Markdown.tsx`
