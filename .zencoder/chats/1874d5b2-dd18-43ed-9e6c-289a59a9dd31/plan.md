# Spec and build

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:

- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

---

## Workflow Steps

### [x] Step: Fix 404 on /debug/a1-preview

Created `/src/app/debug/a1-preview/page.tsx` with a unit selection grid displaying all 60 A1 units.

---

### [x] Step: Deploy to Production

✓ Commit pushed to origin/main (hash: 31e3f602)
✓ Vercel auto-deploy triggered via GitHub integration
- Status: Build in progress (can take up to 10 minutes)
- Action: Verify at https://www.focus-on-english.com/debug/a1-preview once available

---

### [x] Step: Fix undefined unitId error in preview pages

**Issue**: "TypeError: can't access property split, e is undefined" in preview routes
**Root cause**: `useParams()` returns undefined during SSR, before the component hydrates
**Solution**: 
1. Added early guard return for all preview page components (98a6f20b)
2. Fixed ExerciseRenderer.tsx to protect against undefined ex.text (0f0bc79a)
- `/src/app/debug/a1-preview/[unitId]/page.tsx`
- `/src/app/debug/a2-preview/[unitId]/page.tsx`
- `/src/app/debug/b1-preview/[unitId]/page.tsx`
- `/src/app/debug/b2-preview/[unitId]/page.tsx`
- `/src/app/debug/c1-preview/[unitId]/page.tsx`

**Status**: Deployed to Vercel (Hash: 24b4ad64), awaiting propagation

---

### [x] Step: Investigate and Fix /debug/a1-preview/unit-1 404 Error

**Issue**: Route returns 404 on Vercel after multiple deployment attempts
**Root cause**: Previous commit (3b83e0e7) had server-side component with failing imports
**Solution**: 
1. Identified broken server component architecture (00d2d891, 150f83b9)
2. Restored working client-side component (db5edbfe)
3. Clean rebuild with fresh .next (0ec71b39)

**Status**: ✓ **RESOLVED**
- Local: ✓ HTTP 200 
- Production: ✓ HTTP 200 (Vercel deployment complete)
- Verified: unit-1, unit-3, unit-30 all accessible

---

### [ ] Step: Build Student Progress CRM

**Objective**: Track and manage A1 course progress for students
**Scope**: 
- Supabase schema for progress tracking
- Progress recording API endpoints
- Student dashboard component
- Admin analytics interface

Assess the task's difficulty, as underestimating it leads to poor outcomes.

- easy: Straightforward implementation, trivial bug fix or feature
- medium: Moderate complexity, some edge cases or caveats to consider
- hard: Complex logic, many caveats, architectural considerations, or high-risk changes

Create a technical specification for the task that is appropriate for the complexity level:

- Review the existing codebase architecture and identify reusable components.
- Define the implementation approach based on established patterns in the project.
- Identify all source code files that will be created or modified.
- Define any necessary data model, API, or interface changes.
- Describe verification steps using the project's test and lint commands.

Save the output to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/1874d5b2-dd18-43ed-9e6c-289a59a9dd31/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach
- Source code structure changes
- Data model / API / interface changes
- Verification approach

If the task is complex enough, create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/1874d5b2-dd18-43ed-9e6c-289a59a9dd31/spec.md`:

- Break down the work into concrete tasks (incrementable, testable milestones)
- Each task should reference relevant contracts and include verification steps
- Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function).

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/1874d5b2-dd18-43ed-9e6c-289a59a9dd31/plan.md`. If the feature is trivial and doesn't warrant this breakdown, keep the Implementation step below as is.

---

### [ ] Step: Implementation

Implement the task according to the technical specification and general engineering best practices.

1. Break the task into steps where possible.
2. Implement the required changes in the codebase.
3. Add and run relevant tests and linters.
4. Perform basic manual verification if applicable.
5. After completion, write a report to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/1874d5b2-dd18-43ed-9e6c-289a59a9dd31/report.md` describing:
   - What was implemented
   - How the solution was tested
   - The biggest issues or challenges encountered
