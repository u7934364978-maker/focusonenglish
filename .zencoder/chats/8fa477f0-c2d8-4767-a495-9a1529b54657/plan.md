# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification
### [x] Step: Planning
### [x] Step: Implementation

1. **[x] Task 1: Create Course Completion Logic**
   - **Action**: Create [./src/lib/debug/course-utils.ts](./src/lib/debug/course-utils.ts).
   - **Details**: Implement functions to mark exercises and units as completed in Supabase.
   - **Verification**: Check if functions correctly interact with `xp_transactions` and `course_progress` tables.

2. **[x] Task 2: Implement Debug UI in B2 Preview**
   - **Action**: Modify [./src/app/debug/b2-preview/[unitId]/page.tsx](./src/app/debug/b2-preview/%5BunitId%5D/page.tsx).
   - **Details**: Add a `DebugPanel` component with buttons for "Complete Unit" and "Complete Course".
   - **Verification**: Visual check in the browser to ensure the panel appears.

3. **[x] Task 3: Automate Unit Completion**
   - **Action**: Connect "Complete Unit" button to the logic.
   - **Details**: Ensure clicking the button marks all 50 exercises of the current unit as completed.
   - **Verification**: Verified with Playwright test `e2e/debug-course-completion.spec.ts`.

4. **[x] Task 4: Automate Full Course Completion**
   - **Action**: Connect "Complete Course" button to the logic.
   - **Details**: Iterate through units 1-30, loading content from both `.ts` and `.json` sources, and mark all as completed.
   - **Verification**: Verified with Playwright test `e2e/debug-course-completion.spec.ts`.

5. **[x] Task 5: Final Testing & Verification**
   - **Action**: Obtain approval for E2E tests and write them.
   - **Details**: Use Playwright to verify the flow.
   - **Verification**: Run `npm run test:e2e` - All tests passed.

6. **[x] Task 6: Fix C1 Units Build Errors**
   - **Action**: Fix syntax errors in [./src/lib/c1-units/unit-21.ts](./src/lib/c1-units/unit-21.ts) and others.
   - **Details**: Unescaped single quotes were causing webpack errors. Also fixed incorrect imports in [./src/lib/course-data-c1.ts](./src/lib/course-data-c1.ts).
   - **Verification**: Run `npm run build` - Build completed successfully.

7. **[x] Task 7: Fix C1 Preview Page Exception**
   - **Action**: Modify [./src/app/debug/c1-preview/[unitId]/page.tsx](./src/app/debug/c1-preview/%5BunitId%5D/page.tsx) and [./src/lib/debug/course-utils.ts](./src/lib/debug/course-utils.ts).
   - **Details**: Fixed client-side exception caused by incorrect exercise structure mapping. Added Debug Panel for C1 course. Verified that `/debug/c1-preview/unit-1` loads and renders exercises correctly.
   - **Verification**: Visual check via Playwright screenshot confirmed successful rendering.

8. **[ ] Task 8: Verify B2 Units 12-30 Existence and Visibility**
   - **Action**: Check `src/lib/b2-units` and JSON content folders.
   - **Details**: Ensure units 12-30 are present as JSON files and correctly loaded by the preview page.
   - **Verification**: Use the browser/screenshot to verify that `/debug/b2-preview/unit-12` (and others) load content.

