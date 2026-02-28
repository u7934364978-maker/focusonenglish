# Technical Specification: Fix Client-Side Crash on /curso-a1

## Technical Context

- **Language**: TypeScript (strict mode)
- **Framework**: Next.js 15 App Router, React 19
- **Target file**: `src/components/course/preview/UnitCard.tsx`
- **Nature of change**: Single-function bug fix, no API/data model changes

---

## Root Cause

`getModuleColor(unitNumber: number)` in `UnitCard.tsx` computes:

```ts
const moduleIndex = Math.floor((unitNumber - 1) / 5) % MODULE_COLORS.length;
```

When `unitNumber = 0` (from `unit0.json`), `Math.floor(-0.2)` returns `-1`.
In JavaScript, `-1 % 5 === -1`, so `MODULE_COLORS[-1]` is `undefined`.
Accessing `color.hover` on `undefined` throws a `TypeError` that crashes the entire React tree.

---

## Implementation Approach

### Fix `getModuleColor` to clamp `unitNumber` to a minimum of 1

```ts
function getModuleColor(unitNumber: number) {
  const safeUnitNumber = Math.max(1, unitNumber);
  const moduleIndex = Math.floor((safeUnitNumber - 1) / 5) % MODULE_COLORS.length;
  return MODULE_COLORS[moduleIndex];
}
```

- `Math.max(1, 0)` → `1` → `Math.floor(0 / 5) = 0` → `MODULE_COLORS[0]` (orange) ✓
- All existing `unitNumber >= 1` values are unaffected.
- No changes needed to `ModuleGroup.tsx` (its `moduleNumber` starts at 1 by construction).
- No data model, API, or routing changes required.

---

## Source Code Changes

| File | Change |
|------|--------|
| `src/components/course/preview/UnitCard.tsx` | Add `const safeUnitNumber = Math.max(1, unitNumber);` and use it in `getModuleColor` |

---

## Data Model / API / Interface Changes

None. The fix is entirely within the rendering layer.

---

## Delivery

Single atomic change — no phases needed given the trivial scope.

---

## Verification

```bash
# Lint
npm run lint

# Type check (via build)
npm run build

# Unit tests (if any cover UnitCard)
npm test
```

Manual: visit `/curso-a1` while authenticated → page must render without the "Application error" banner.
