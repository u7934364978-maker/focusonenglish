# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/912750f6-f23c-4a5a-bb35-b1f617793918/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/912750f6-f23c-4a5a-bb35-b1f617793918/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/912750f6-f23c-4a5a-bb35-b1f617793918/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/912750f6-f23c-4a5a-bb35-b1f617793918/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/912750f6-f23c-4a5a-bb35-b1f617793918/plan.md`.

### [x] Step: Implementation

1. [x] **Task 1: Setup Infrastructure**
   - Create category folder: `src/content/blog/examenes`
   - Verify folder exists

2. [x] **Task 2: Implement "Guía Completa para el B2 First (FCE) de Cambridge"**
   - Create `src/content/blog/examenes/guia-b2-first-fce.md`
   - Include keywords: `fce first certificate in english exam`, `b2 first cambridge`, `examen cambridge first`
   - Include FAQ section

3. [x] **Task 3: Implement "Linguaskill de Cambridge: Guía Completa"**
   - Create `src/content/blog/examenes/guia-linguaskill-cambridge.md`
   - Include keywords: `linguaskill`, `linguaskill cambridge`, `linguaskill english live`
   - Include FAQ section

4. [x] **Task 4: Implement "Present Perfect vs Past Simple: Guía Definitiva"**
   - Create `src/content/blog/metodos/present-perfect-vs-past-simple.md`
   - Include keywords: `present perfect and past simple`, `present perfect tense examples`, `difference between present perfect and past simple`
   - Include FAQ section

5. [x] **Task 5: Implement "La Voz Pasiva en Inglés: Reglas y Ejemplos"**
   - Create `src/content/blog/metodos/voz-pasiva-ingles-guia.md`
   - Include keywords: `passive voice examples`, `the passive voice`, `examples of passive voice`
   - Include FAQ section

6. [x] **Task 6: Implement "Vocabulario de Ropa en Inglés: Guía Práctica"**
   - Create `src/content/blog/metodos/vocabulario-ropa-ingles.md`
   - Include keywords: `prendas de ropa en ingles`, `clothes in english`, `vocabulario ropa ingles`
   - Include FAQ section

7. [x] **Task 7: Implement "¿Qué significa TBT? El Diccionario de Redes Sociales en Inglés"**
   - Create `src/content/blog/metodos/que-significa-tbt-slang-ingles.md`
   - Include keywords: `que significa tbt`, `tbt significado`, `slang in english`
   - Include FAQ section

8. [x] **Task 8: Build Hardening and Debugging**
   - Resolve `TypeError` in C2 Course `generateStaticParams`
   - Resolve `TypeError` in Blog `.replace()` (interlinking and keyword parsing)
   - Implement defensive programming in `SEOInterlinking` and Markdown components
   - Verify local build (`npm run build`) passes successfully

9. [x] **Task 9: Final Deployment**
   - Push changes to main branch
   - Commit: `e060e4af`
