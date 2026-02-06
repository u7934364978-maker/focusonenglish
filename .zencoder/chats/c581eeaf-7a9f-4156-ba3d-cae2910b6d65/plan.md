# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/c581eeaf-7a9f-4156-ba3d-cae2910b6d65/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/c581eeaf-7a9f-4156-ba3d-cae2910b6d65/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/c581eeaf-7a9f-4156-ba3d-cae2910b6d65/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/c581eeaf-7a9f-4156-ba3d-cae2910b6d65/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation - Phase 1: Hospitality Cluster
- Create `src/content/blog/viajes/ingles-para-camareros-guia.md` (Target: `ingles para camareros`)
- Create `src/content/blog/viajes/ingles-para-recepcionistas-guia.md` (Target: `ingles para recepcionistas`)
- Update `src/content/seo-pages/rutas/ingles-para-hosteleria.md` with internal links to new posts.

### [x] Step: Implementation - Phase 2: Exam Cluster
- Create `src/content/blog/examenes/guia-precios-cambridge-2026.md` (Target: `precios examenes cambridge`)
- Create `src/content/blog/examenes/aptis-a2-guia-completa.md` (Target: `aptis a2`)
- Update exams pillar page (Hub) with internal links.

### [x] Step: Implementation - Phase 3: Work Cluster
- Create `src/content/blog/trabajo/entrevista-trabajo-ingles-preguntas.md` (Target: `entrevista trabajo ingles`)
- Update `src/content/seo-pages/rutas/ingles-para-trabajo.md` with internal links.

### [x] Step: Verification & Audit
- Run `npm run lint` and `npm run build`
- Validate keyword presence and metadata using `scripts/audit-blog-seo.mjs`

