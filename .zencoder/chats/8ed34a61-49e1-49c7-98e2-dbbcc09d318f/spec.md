# Technical Specification - Unit 9 Exercise Completion

The goal is to complete the exercises for Unit 9 in the `a1-preview` (Level A1). This involves adding missing exercises and ensuring all exercises follow the project's bilingual format `[[English|Spanish]]`.

## Technical Context
- **Language**: TypeScript
- **Framework**: Next.js 15 (App Router)
- **Content Location**: `src/lib/course/a1/unit-9.ts`
- **Standard**: All text visible to the user should be in the format `[[English|Spanish]]`.

## Implementation Approach
1. **Identify Missing Exercises**: We found `a1-u9-e1` and `a1-u9-e11` are missing.
2. **Add Missing Exercises**:
   - `a1-u9-e1`: Introductory exercise for Jobs (Vocabulary).
   - `a1-u9-e11`: Introductory exercise for Articles/Places (Grammar).
3. **Bilingualize Content**: Review all exercises (e1-e60) and update any fields that are currently only in Spanish or missing the English counterpart. This includes:
   - `title`
   - `instructions`
   - `question`
   - `options`
   - `explanation`
4. **Consistency Check**: Ensure `audioUrl` follows the pattern `audio/a1/unit-9/e{N}.mp3`.

## Source Code Structure Changes
- Modify `src/lib/course/a1/unit-9.ts` to add the missing exercises and update existing ones.

## Data Model / API / Interface Changes
- No changes to the `Exercise` interface.

## Verification Approach
1. **Linting**: Run `npm run lint` (or `next lint`).
2. **Exercise Validation**: Run `npm run validate-exercises` to ensure no fields are missing or contain placeholders.
3. **Manual Verification**: Use the debug route `https://www.focus-on-english.com/debug/a1-preview/unit-9` (locally `http://127.0.0.1:3001/debug/a1-preview/unit-9`) to verify the exercises appear correctly.
