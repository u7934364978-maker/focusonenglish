# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/bc7e9e1f-86f7-4b0d-8fb9-db93f216be4c/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/bc7e9e1f-86f7-4b0d-8fb9-db93f216be4c/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/bc7e9e1f-86f7-4b0d-8fb9-db93f216be4c/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/bc7e9e1f-86f7-4b0d-8fb9-db93f216be4c/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

1. **[x] Task 1: Create `scripts/generate-a2-mega-course.py`**
   - Copy logic from `scripts/generate-a1-mega-course.py`.
   - Update `UNIT_DATA` with pedagogical content from `scripts/expand_a2_course.py`.
   - Ensure A2 metadata (level, titles) is correct.
   - Verification: Run `python3 scripts/generate-a2-mega-course.py` (dry run for 1 unit).

2. **[x] Task 2: Generate all A2 units**
   - Run the script for all 60 units.
   - Verification: Check `src/content/cursos/ingles-a2/` for 60 JSON files with ~300 exercises each.

3. **[x] Task 3: Validate generated content**
   - Run `npm run validate-exercises` (if available) or manual JSON schema check.
   - Verification: No errors in exercise structure.

4. **[x] Task 4: Clean up temporary or obsolete A2 scripts**
   - (Optional) Remove or archive old A2 generation scripts if they are no longer needed.
