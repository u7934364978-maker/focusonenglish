# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 7023707b-60c4-49d8-ac56-723666e9ba43 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: ef1fb1f5-10b6-4405-a1a4-926015b050f0 -->

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
<!-- chat-id: 8c79fdb4-caa7-4c71-9194-caf3ed7eecf5 -->

This fix is trivial (single-line change in one function). No phased delivery is needed.

### [ ] Step: Fix getModuleColor crash in UnitCard.tsx

Fix the `TypeError: Cannot read properties of undefined (reading 'hover')` crash on `/curso-a1`.

- **File**: `src/components/course/preview/UnitCard.tsx`, function `getModuleColor` (line 22)
- **Change**: clamp `unitNumber` to a minimum of 1 before computing the module index:
  ```ts
  function getModuleColor(unitNumber: number) {
    const safeUnitNumber = Math.max(1, unitNumber);
    const moduleIndex = Math.floor((safeUnitNumber - 1) / 5) % MODULE_COLORS.length;
    return MODULE_COLORS[moduleIndex];
  }
  ```
- **Why**: `unit0.json` produces `unitNumber = 0`; `Math.floor(-0.2) = -1`; `MODULE_COLORS[-1]` is `undefined`; accessing `.hover` on it throws the uncaught TypeError that blanks the page.
- **Verification**:
  - [ ] `npm run lint` passes
  - [ ] `npm run build` passes (type-checks)
  - [ ] Manual: `/curso-a1` renders without the "Application error" banner
