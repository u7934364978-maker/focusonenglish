# PRD: Fix Client-Side Exception on /curso-a1

## Problem

Users who visit `https://www.focus-on-english.com/curso-a1` while authenticated see a blank page with the error:

> **Application error: a client-side exception has occurred while loading www.focus-on-english.com (see the browser console for more information).**

This is a **runtime JavaScript crash** — not a Vercel deployment issue and not a server-side error.

---

## Root Cause (Confirmed)

**File:** `src/components/course/preview/UnitCard.tsx`  
**Function:** `getModuleColor(unitNumber: number)`  
**Error:** `TypeError: Cannot read properties of undefined (reading 'hover')`

### How it happens

1. `premiumCourseServerService.getA1UnitsWithMetadata()` reads all `.json` files from `src/content/cursos/ingles-a1/`.
2. One of these files is **`unit0.json`**, whose `course.unit_id` is `"unit0"`.
3. `extractUnitMetadata` parses that ID: `unitId.match(/\d+/)` → `"0"` → `unitNumber = 0`.
4. The unit is returned with `unitNumber = 0` and passed down to `UnitCard`.
5. `UnitCard` calls `getModuleColor(0)`:
   ```ts
   const moduleIndex = Math.floor((0 - 1) / 5) % MODULE_COLORS.length;
   // Math.floor(-0.2) → -1
   // -1 % 5 → -1  (JavaScript modulo preserves sign)
   // MODULE_COLORS[-1] → undefined
   ```
6. `color.hover` on `undefined` throws the uncaught `TypeError`, crashing the entire React tree.

### Verification

Confirmed by running the dev server locally with auth bypass and capturing Playwright console/page errors:

```
TypeError: Cannot read properties of undefined (reading 'hover')
    at UnitCard (…/src/components/course/preview/UnitCard.tsx:77:219)
```

---

## Scope of Change

### Minimum fix (bug fix)

Fix `getModuleColor` in `UnitCard.tsx` to handle `unitNumber <= 0`:

```ts
function getModuleColor(unitNumber: number) {
  const safeUnitNumber = Math.max(1, unitNumber);
  const moduleIndex = Math.floor((safeUnitNumber - 1) / 5) % MODULE_COLORS.length;
  return MODULE_COLORS[moduleIndex];
}
```

This ensures `unit0` is treated as module 1 (orange color) without crashing.

### Optional: also handle unit0 in ModuleGroup

`ModuleGroup.tsx` uses `(module.moduleNumber - 1) % MODULE_COLORS.length`. `moduleNumber` is generated starting from 1 in `groupUnitsIntoModules`, so **this is not currently affected**. No change needed there.

### Optional: filter out unit0 from the metadata

An alternative fix would be to exclude `unit0.json` from the course listing (it appears to be an intro/discovery unit that may not belong in the main unit grid). However, this is a product decision and the safer approach is to make the rendering robust.

---

## Acceptance Criteria

1. Visiting `/curso-a1` while authenticated no longer shows the "Application error" blank page.
2. All units (including any with `unitNumber = 0`) render without crashing.
3. No regression on `/curso-a1/[unitId]` or other pages.

---

## Files to Change

| File | Change |
|------|--------|
| `src/components/course/preview/UnitCard.tsx` | Fix `getModuleColor` to handle `unitNumber = 0` |
