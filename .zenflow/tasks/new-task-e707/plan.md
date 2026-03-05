# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 0af8bbd6-27d4-499a-82ee-4011aa4e0228 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 04397e40-a1a8-4366-ae1a-605e96a8a5ea -->

Create a technical specification based on the PRD in `{@artifacts_path}/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning
<!-- chat-id: e997eccf-df59-478c-81e3-4d13ba746735 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [x] Step 1: Update BreadcrumbItem interface and generateBreadcrumbSchema in schemas.ts
<!-- chat-id: 4cdd7a6a-1d01-4a72-bbd4-495b53a225b4 -->

Modify `src/lib/schemas.ts`:
- Make `BreadcrumbItem.url` optional (`url?: string`)
- Update `generateBreadcrumbSchema` to conditionally include `"item"` only when `url` is defined

Reference: spec.md — Change 1

### [x] Step 2: Add JSON-LD BreadcrumbList to category listing page
<!-- chat-id: 7cd71777-b873-43a7-aecb-c04b69320a60 -->

Modify `src/app/blog/[category]/page.tsx`:
- Import `generateBreadcrumbSchema` from `@/lib/schemas`
- Import `JsonLd` from `@/components/seo/JsonLd`
- Generate breadcrumb schema: `[Inicio, Blog, CategoryLabel]`
- Inject `<JsonLd data={breadcrumbSchema} />` in JSX

Reference: spec.md — Change 2

### [x] Step 3: Add JSON-LD BreadcrumbList to topic hub page
<!-- chat-id: a500bbe3-dd8f-40ec-89f0-661b7bd9120a -->

Modify `src/app/blog/temas/[keyword]/page.tsx`:
- Import `generateBreadcrumbSchema` from `@/lib/schemas`
- Import `JsonLd` from `@/components/seo/JsonLd`
- Generate breadcrumb schema: `[Inicio, Blog, Temas, OriginalKeyword]`
- Inject `<JsonLd data={breadcrumbSchema} />` in JSX

Reference: spec.md — Change 3

### [x] Step 4: Add visual breadcrumbs and JSON-LD to author profile page
<!-- chat-id: 79a5dc88-8209-4a0b-ac11-b52764431dc8 -->

Modify `src/app/blog/autor/[slug]/page.tsx`:
- Import `generateBreadcrumbSchema` from `@/lib/schemas`
- Import `JsonLd` from `@/components/seo/JsonLd`
- Import `Link` from `next/link` (if not already imported)
- Add visual `<nav aria-label="breadcrumb">` with slate text colors before the author profile section
- Generate breadcrumb schema: `[Inicio, Blog, Autores, AuthorName]`
- Inject `<JsonLd data={breadcrumbSchema} />` in JSX

Reference: spec.md — Change 4

### [ ] Step 5: Verify with build and lint

Run:
```bash
npm run build
```
Record results in plan.md. Fix any TypeScript or lint errors found.
