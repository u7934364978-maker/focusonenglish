# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/0d3065c2-b265-4d75-aa96-7d8a6f25df62/requirements.md`.

### [x] Step: Cleanup

Delete all existing blog articles to start with a clean slate.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/0d3065c2-b265-4d75-aa96-7d8a6f25df62/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/0d3065c2-b265-4d75-aa96-7d8a6f25df62/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Detailed implementation tasks generated from spec.md.

### [ ] Step: Implementation

- [x] **Task 1: Create shared blog library**
  - Implement `src/lib/blog.ts` with `getBlogArticles`, `getArticleBySlug`, and `getArticlesByCategory`.
  - Define `BlogPost` interface.
  - Verification: Manual test with a dummy markdown file.

- [ ] **Task 2: Create sample articles**
  - Create 2-3 sample markdown files in `src/content/blog/` with varied categories and "featured" status.
  - Verification: Verify files exist.

- [ ] **Task 3: Refactor individual article page**
  - Update `src/app/blog/[slug]/page.tsx` to use `src/lib/blog.ts`.
  - Verification: Browse to a sample article's slug and ensure it renders correctly.

- [ ] **Task 4: Refactor blog index page**
  - Update `src/app/blog/page.tsx` to fetch articles dynamically.
  - Implement dynamic category grouping and featured article logic.
  - Verification: Verify index page displays sample articles correctly by category.

- [ ] **Task 5: Final Verification**
  - Run `npm run typecheck`.
  - Run `npm run lint`.
  - Verification: All commands pass.
