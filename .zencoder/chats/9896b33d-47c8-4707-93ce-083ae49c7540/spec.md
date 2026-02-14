# Technical Specification - Translate B2 Unit 2 and Units 12-30

## Technical Context
- **Language**: TypeScript
- **Data Source**: `src/lib/course/b2/unit-2.ts`, `src/lib/course/b2/unit-12.ts` to `unit-30.ts`
- **Component**: `TranslatedText` handles the `[[English|Spanish]]` syntax.

## Implementation Approach
- Use a script to identify missing translations or un-wrapped English words.
- Manually or programmatically (using AI assistance) update the files.
- Given the volume, work in batches (Unit 2 finish, then blocks of 5 units).

## Verification Plan
- **Manual Verification**: Randomly check tooltips in the preview pages for affected units.
