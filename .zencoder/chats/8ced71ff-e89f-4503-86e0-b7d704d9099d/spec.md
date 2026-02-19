# Technical Specification: Word-by-Word Translations for A1 Reading Exercises

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js 15 (App Router)
- **Component**: `TranslatedText` handles `[[word|translation]]` and lexicon-based translations.
- **Content Files**: `src/lib/a1-m1-l[1-60]-detailed.ts` (or similar).

## Implementation Approach
1.  **Audit A1 Reading Exercises**: Identify all reading exercises in A1 units.
2.  **Phase-based Update**: Update units in batches of 3.
3.  **Word-by-Word Pattern**: Ensure `transcript` fields in reading exercises use the `[[English|Spanish]]` format for EVERY word, or rely on a verified lexicon. Given the request "asegurate" (ensure), explicit word-by-word wrapping is preferred to guarantee correctness regardless of lexicon state.
4.  **Unit 1 (Batch 1)**: Update `src/lib/a1-m1-l1-detailed.ts`.
5.  **Unit 2 (Batch 1)**: Update `src/lib/a1-m1-l2-detailed.ts` (convert from block to word-by-word).
6.  **Unit 3 (Batch 1)**: Already compliant, verify and tick.

## Source Code Structure Changes
- No structural changes, only content updates in `src/lib/`.

## Data Model / API / Interface Changes
- None.

## Verification Approach
- **Manual Verification**: Use `/debug/a1-preview/[unitId]` to visually confirm word-by-word translations on hover.
- **Automated Testing**: Create a Playwright test to verify that reading transcripts contain tooltips for multiple words.
