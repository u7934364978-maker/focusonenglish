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
- Create `src/content/blog/viajes/ingles-para-camareros-guia.md` (Target: `ingles para camareros`) - **Expanded with Technical Vocab & FAQs**
- Create `src/content/blog/viajes/ingles-para-recepcionistas-guia.md` (Target: `ingles para recepcionistas`) - **Expanded with Technical Vocab & FAQs**
- Update `src/content/seo-pages/rutas/ingles-para-hosteleria.md` with internal links to new posts.

### [x] Step: Implementation - Phase 2: Exam Cluster
- Create `src/content/blog/examenes/guia-precios-cambridge-2026.md` (Target: `precios examenes cambridge`) - **Expanded with Technical Vocab & FAQs**
- Create `src/content/blog/examenes/aptis-a2-guia-completa.md` (Target: `aptis a2`) - **Expanded with Technical Vocab & FAQs**
- Update exams pillar page (Hub) with internal links.
- **Created Hub Page: `src/app/certificaciones-ingles/page.tsx` (Target: `certificaciones ingles`)**

### [x] Step: Implementation - Phase 3: Work Cluster
- Create `src/content/blog/trabajo/entrevista-trabajo-ingles-preguntas.md` (Target: `entrevista trabajo ingles`) - **Expanded with Technical Vocab & FAQs**
- Update `src/content/seo-pages/rutas/ingles-para-trabajo.md` with internal links.
- **Created Hub Page: `src/app/ingles-para-el-trabajo/page.tsx` (Target: `ingles para el trabajo`)**

### [x] Step: Verification & Audit
- Run `npm run lint` and `npm run build`
- Validate keyword presence and metadata using `scripts/audit-blog-seo.mjs` - **SUCCESS (0 issues)**

### [x] Step: Implementation - Phase 4: Grammar & Skills Cluster
- Create `src/content/blog/metodos/phrasal-verbs-guia-b2.md` (Target: `phrasal verbs b2`, `lista phrasal verbs`) - **Completed & SEO Audit Passed**
- Create `src/content/blog/metodos/verbos-modales-ingles-guia.md` (Target: `verbos modales ingles`) - **Completed & SEO Audit Passed**
- Create `src/content/blog/metodos/preposiciones-movimiento-ingles.md` (Target: `preposiciones de movimiento en ingles`) - **Completed & SEO Audit Passed**
- Create `src/content/blog/metodos/reglas-pronunciacion-ingles.md` (Target: `reglas de pronunciacion en ingles`) - **Completed & SEO Audit Passed**
- Update `src/content/seo-pages/rutas/ingles-b2.md` and `src/content/seo-pages/rutas/ingles-b1.md` with internal links. - **Completed**

