# Spec and build

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:

- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

---

## Workflow Steps

### [x] Step: Technical Specification (Part 1: Clickable Options)
- [x] Identify rendering components for "fill-in-the-blank".
- [x] Modify components to handle `options` array.
- [x] Implement `<select>` for multiple blanks and large buttons for single blank.

### [x] Step: Implementation (Part 1: Clickable Options)
- [x] Update `src/components/ExerciseRenderer.tsx`.
- [x] Update `src/components/course/exercises/ExerciseRenderer.tsx`.
- [x] Update `src/components/course/exercises/PremiumSession.tsx`.
- [x] Add `options` to `src/lib/course/a1/unit-3.ts`.

---

### [x] Step: Technical Specification (Part 2: Hover Translations Fix)
- [x] Identify the component responsible for hover translations (likely `TranslatedText.tsx`).
- [x] Analyze the CSS/Tailwind classes causing the overlap.
- [x] Propose a fix (e.g., z-index, positioning, or preventing event bubbling).

### [x] Step: Implementation (Part 2: Hover Translations Fix)
- [x] Apply the fix to `src/components/course/exercises/TranslatedText.tsx`.
- [x] Apply the fix to `src/components/course/exercises/ExerciseRenderer.tsx`.
- [x] Apply the fix to `src/components/course/Markdown.tsx`.
- [x] Verify the fix visually (by code inspection and ensured z-index).
- [x] Final type check and code cleanup.
- [x] Push changes.
