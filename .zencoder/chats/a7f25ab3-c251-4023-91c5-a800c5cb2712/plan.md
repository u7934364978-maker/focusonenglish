# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/a7f25ab3-c251-4023-91c5-a800c5cb2712/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/a7f25ab3-c251-4023-91c5-a800c5cb2712/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/a7f25ab3-c251-4023-91c5-a800c5cb2712/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

1.  **Create Expansion Content**: Develop `src/lib/a1-expansion-content.ts` containing new exercises for all 11 topics.
2.  **Integrate into Modules**: Update `src/lib/course-data-a1.ts` to include the expansion exercises in relevant lessons.
3.  **Final Verification**: Run `npm run validate-exercises` and check for TypeScript errors.

### [x] Step: Implementation

- **[x] Task 1: Create a1-expansion-content.ts**
- **[x] Task 2: Integrate expansion content into course-data-a1.ts**
- **[x] Task 3: Run verification scripts**
  - `npm run validate-exercises`
  - Check for build errors.

### [x] Step: Deployment
- **[x] Task 4: Commit and push changes**
  - Original Commit Hash: `f44c08e45ad3f7f77820dec336de4151f0bab0e9`
  - Rebuild Trigger Hash: `3b93b1bbdd3fe7a16e009db838902b7e7b74ba88`

### [x] Step: Content Synchronization
- **[x] Task 5: Synchronize TypeScript exercises with JSON content files**
  - Identified that UI loads from `src/content/cursos/ingles-a1/*.json`.
  - Created and ran `scripts/inject-a1-expansion.mjs` to port content.
- **[x] Task 6: Final Commit and Push**
  ### [x] Step: Verification & Fixes
- [x] Task 7: Trigger Rebuild
  - Observation: User reports 20 exercises (Vercel build might be using old cache).
  - Action: Empty commit pushed to trigger clean rebuild.
  - Commit Hash: `67d8dbb369c09c95d9c240974868f70046524330`
- [x] Task 8: Investigate Audio Errors
  - Observation: 500 error on `/api/generate-audio`.
  - Diagnosis: Missing `OPENAI_API_KEY` in Vercel environment.

### [ ] Step: Audio Generation
- [x] Task 9: Create script `scripts/generate-a1-expansion-audio.ts` to generate static audio files for new exercises.
- [ ] Task 10: Run the script to generate and save `.mp3` files to `public/audio/courses/ingles-a1/expansion/`.
  - *Note: This requires a valid `OPENAI_API_KEY` in `.env.local`.*
- [ ] Task 11: Update JSON files with the new `audioUrl` paths (automated by the script).
