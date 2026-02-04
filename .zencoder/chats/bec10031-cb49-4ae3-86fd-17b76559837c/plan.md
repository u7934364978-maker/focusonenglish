# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/bec10031-cb49-4ae3-86fd-17b76559837c/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/bec10031-cb49-4ae3-86fd-17b76559837c/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/bec10031-cb49-4ae3-86fd-17b76559837c/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/bec10031-cb49-4ae3-86fd-17b76559837c/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [ ] Step: Implementation

#### Phase 1: Content Foundation & Cleanup
- [x] **Audit existing content**: Run `node scripts/audit-blog-seo.mjs` and document issues.
- [x] **Fix frontmatter & structure**: Update existing blog posts to meet the SEO standards (keywords, excerpt, headings).
- [x] **Establish Hub structure**: Ensure all posts are correctly categorized in `metodos/`, `trabajo/`, or `viajes/`.

#### Phase 2: Technical SEO Enhancements
- [x] **Dynamic Metadata**: Optimize `src/app/blog/[...slug]/page.tsx` metadata generation.
- [x] **Structured Data**: Implement `src/components/seo/JsonLd.tsx` for FAQ and Article schemas.
- [x] **Internal Linking Utility**: Create `src/utils/seo-utils.ts` to manage keyword-to-link mapping.

#### Phase 3: Keyword Mapping & Strategy
- [x] **Keyword Categorization**: Map the 3116 keywords to the established Hubs and identify gaps.
- [x] **Pillar Page Optimization**: Update category index pages to act as high-authority Pillar Pages.
