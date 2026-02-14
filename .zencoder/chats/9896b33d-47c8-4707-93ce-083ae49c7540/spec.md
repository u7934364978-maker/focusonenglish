# Technical Specification - Translate B2 Unit 2 Exercises

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js
- **Data Source**: `src/lib/course/b2/unit-2.ts`
- **Component**: `TranslatedText` handles the `[[English|Spanish]]` syntax.

## Implementation Approach
- Manually review and update the `question` field for the first 25 exercises in `src/lib/course/b2/unit-2.ts`.
- Align translations word-by-word or by short phrases to ensure accuracy.
- Ensure punctuation is handled correctly (usually inside the tooltip if attached to the word).

## Verification Plan
- **Manual Verification**: Run the dev server and check the tooltips for the first 25 exercises in the B2 preview page.
- **E2E Test**: Write a Playwright test to verify that tooltips appear and contain the expected text.
