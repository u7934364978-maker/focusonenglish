# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/21c4d417-f18b-436c-9b78-67a227412e7c/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/21c4d417-f18b-436c-9b78-67a227412e7c/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/21c4d417-f18b-436c-9b78-67a227412e7c/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

1. **Task 1: Create infrastructure**
   - [x] Create `src/content/hubs` directory.
   - [x] Implement `getHubContent` in `src/lib/blog.ts`.
   - [x] Update `src/app/blog/temas/[keyword]/page.tsx` to render Markdown content.

2. **Task 2: Content Generation**
   - [x] Create `src/content/hubs/ejercicios-condicionales-ingles.md` with ~1500 words of quality content.
   - [x] Create `src/content/hubs/reported-speech.md` with ~1500 words of quality content.
   - [x] Batch 1: Gramática Clave (Verbos Modales, Voz Pasiva).
   - [x] Batch 2: Business English (Entrevistas, Emails, Presentaciones).
   - [x] Batch 3: Exámenes Oficiales (Cambridge, IELTS/TOEFL, Aptis).
   - [x] Batch 4: Viajes y Vocabulario (Inglés Viajar, Vocabulario, Hostelería).
   - [x] Batch 5: Niveles y Diferencias (MCER, Present Perfect vs Past Simple, US vs UK).
   - [x] Batch 6: Profesional Específico (Ingenieros, Médico, Atención Cliente).
   - [ ] Batch 7: IA e Innovación (IA Aprender Inglés, ChatGPT, Mejora Fluidez).

3. **Task 3: Verification**
   - [x] Run `npm run lint` and `npm run type-check`.
   - [x] Manually verify SEO structure (headings, keywords).

### [ ] Step: Implementation

(Executed as tasks above)
