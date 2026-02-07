# Implementation Plan - 404 Error Fixes for Keyword Hubs

## Workflow Steps

### [x] Step: Requirements
PRD created in [requirements.md](./requirements.md)

### [x] Step: Technical Specification
Spec created in [spec.md](./spec.md)

### [x] Step: Planning
- [x] Create this implementation plan.

### [x] Step: Implementation

#### Phase 1: Categorize and Map Keywords
- [x] Identify keywords related to "Apps" and map to `src/content/blog/metodos/apps-vs-cursos-ingles.md` or similar.
- [x] Identify keywords related to "Viajes" and map to `src/content/blog/seo/ingles-para-viajar-guia.md`.
- [x] Identify keywords related to "Negocios/Emails" and map to `src/content/blog/seo/business-english-emails.md` (Updated in `ingles-para-trabajo.md`).
- [x] Identify keywords related to "Exámenes" (First, CAE, Aptis, IELTS, TOEFL) and map to respective guides.
- [x] Identify keywords related to "Gramática" and map to grammar guides.

#### Phase 2: Update Frontmatter
- [x] Update `src/content/blog/metodos/apps-vs-cursos-ingles.md` with missing app-related keywords.
- [x] Update `src/content/blog/seo/ingles-para-viajar-guia.md` with missing travel-related keywords.
- [x] Update `src/content/blog/seo/ingles-para-trabajo.md` with missing business/interview/linkedin keywords.
- [x] Update `src/content/blog/seo/preparacion-examen-b1-cambridge.md` with B1/Aptis/Linguaskill keywords.
- [x] Update `src/content/blog/seo/cambridge-b2-first-guia.md` with FCE keywords.
- [x] Update `src/content/blog/seo/cambridge-c1-advanced-guia.md` with CAE/Advanced keywords.
- [x] Update `src/content/blog/seo/ingles-a1.md` with A1/A2 and general learning keywords.
- [x] Update `src/content/blog/seo/ingles-para-ingenieros.md` with technical keywords.
- [x] Update `src/content/blog/seo/ingles-para-salud.md` with medical keywords.
- [x] Update `src/content/blog/seo/ingles-para-hosteleria.md` with hospitality/customer service keywords.
- [x] Update `src/content/blog/seo/gramatica-ingles-b1-guia.md` with remaining grammar, vocabulary, and general keywords.

#### Phase 3: Verification
- [x] Verify that the keywords are correctly extracted.
- [x] Check if `generateStaticParams` includes the new keywords.

### [x] Step: Final Review
- [x] Ask the user for confirmation.
