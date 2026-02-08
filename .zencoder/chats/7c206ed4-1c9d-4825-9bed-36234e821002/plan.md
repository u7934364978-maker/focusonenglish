# Implementation Plan: SEO Content Expansion

## Workflow Steps

### [x] Step: Requirements
Create a Product Requirements Document (PRD) based on the feature description.
- PRD created in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/7c206ed4-1c9d-4825-9bed-36234e821002/requirements.md`

### [x] Step: Technical Specification
Create a technical specification based on the PRD.
- Spec created in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/7c206ed4-1c9d-4825-9bed-36234e821002/spec.md`

### [x] Step: Planning
Create a detailed implementation plan.

### [x] Step: Implementation

#### Phase 1: Audit
- [x] Create a script to count words in all blog articles and output a report.
- [x] Identify which articles are currently under 750 words.

#### Phase 2: Category Reclassification (Removing SEO Category)
- [x] Map all articles in `src/content/blog/seo/` to `examenes`, `metodos`, `trabajo`, or `viajes`.
- [x] Move articles to their new directories, overwriting duplicates if the SEO version is more complete.
- [x] Update frontmatter (`category` and `canonical`) for all moved articles.
- [x] Remove `src/content/blog/seo/` directory.

#### Phase 3: Content Expansion (Remaining Articles)
- [x] Expanded `src/content/blog/trabajo/mejores-apps-ingles-trabajo.md` (959 words).
- [x] Expanded `src/content/blog/metodos/ia-acelerar-aprendizaje-ingles.md` (877 words).
- [x] Expanded `src/content/blog/trabajo/ingles-networking-eventos-internacionales.md` (781 words).
- [x] Expanded `src/content/blog/trabajo/ingles-presentaciones-impacto.md` (765 words).
- [x] Expanded `src/content/blog/trabajo/negociacion-ingles-tecnicas-clave.md` (840 words).
- [x] Expanded `src/content/blog/trabajo/redaccion-emails-profesionales-ingles.md` (771 words).
- [x] Expanded `src/content/blog/viajes/frases-ingles-emergencias-viajes.md` (800 words).
- [x] Expanded `src/content/blog/trabajo/linkedin-ingles-guia.md` (808 words).
- [ ] Ensure all moved articles reach the 750-word threshold (Ongoing).
- [ ] Expand any other articles in other categories that are under 750 words (Ongoing).

#### Phase 4: Final Validation
- [ ] Run a final word count audit.
- [ ] Run `npm run build` to verify site integrity.
