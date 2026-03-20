# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: fca58545-45d7-4852-bcef-5626dd2e3800 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Focus on **what** the feature should do and **why**, not **how** it should be built. Do not include technical implementation details, technology choices, or code-level decisions — those belong in the Technical Specification.

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 6f97fea0-fb78-4f0b-a095-5059f17af276 -->

Create a technical specification based on the PRD in `{@artifacts_path}/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Do not include implementation steps, phases, or task breakdowns — those belong in the Planning step.

Save to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Verification approach using project lint/test commands

### [x] Step: Planning
<!-- chat-id: 04f34e93-5098-4ed7-a8fe-6e217f273008 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint). Avoid steps that are too granular (single function) or too broad (entire feature).

Important: unit tests must be part of each implementation task, not separate tasks. Each task should implement the code and its tests together, if relevant.

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `{@artifacts_path}/plan.md`.

### [x] Step 1: Create hub file curso-ingles.md
<!-- chat-id: a81d0444-5e3f-451d-816d-f570062c3c8b -->

Create `src/content/hubs/curso-ingles.md` with:
- Frontmatter: `title` and `description` optimized for SEO (as specified in spec.md)
- Body (~1000 words) structured as:
  - H1 title
  - Introducción (por qué elegir bien el método importa)
  - H2: Cursos de inglés por nivel MCER (A1→C2 with internal links to each cluster article)
  - H2: Formatos (presencial, online, apps — links to `clases-de-ingles-guia` and `apps-vs-cursos-ingles`)
  - H2: Gratis vs. pago (links to `curso-ingles-gratis` and `curso-ingles-online`)
  - H2: CTA — Focus English online course

### [ ] Step 2: Add keyword "curso ingles" to 8 existing articles

Edit the `keywords` frontmatter array in each of the following files to append `- curso ingles`:
- `src/content/blog/metodos/ingles-a1.md`
- `src/content/blog/metodos/ingles-a2.md`
- `src/content/blog/metodos/cursos-online-ingles-b1.md`
- `src/content/blog/metodos/ingles-b2.md`
- `src/content/blog/metodos/ingles-c1.md`
- `src/content/blog/metodos/ingles-c2.md`
- `src/content/blog/metodos/clases-de-ingles-guia.md`
- `src/content/blog/metodos/apps-vs-cursos-ingles.md`

No body content changes — only frontmatter keyword addition.

### [ ] Step 3: Create new article curso-ingles-gratis.md

Create `src/content/blog/metodos/curso-ingles-gratis.md` with:
- Full frontmatter as specified in spec.md (title, date, author: sara-mendez, excerpt, description, category: metodos, readTime: 9 min, image, alt, keywords including "curso ingles", faqs with 4 answered questions, canonical)
- Body (2000+ words) structured as:
  - H1
  - Introducción
  - H2: ¿Se puede aprender inglés gratis? (realismo + expectativas)
  - H2: Los mejores recursos gratuitos (BBC Learning English, British Council, Duolingo, YouTube, podcasts, Focus English plan gratuito)
  - H2: Plan de estudio gratuito de 6 meses por niveles (A1→B2)
  - H2: Consejos para mantener la motivación estudiando solo
  - H2: Gratis vs. pago — cuándo considerar invertir
  - Internal link to hub `/hubs/curso-ingles`
  - CTA to Focus English

### [ ] Step 4: Create new article curso-ingles-online.md

Create `src/content/blog/metodos/curso-ingles-online.md` with:
- Full frontmatter as specified in spec.md (title, date, author: sara-mendez, excerpt, description, category: metodos, readTime: 10 min, image, alt, keywords including "curso ingles", faqs with 4 answered questions, canonical)
- Body (2000+ words) structured as:
  - H1
  - Introducción: ventajas del formato online
  - H2: Criterios para elegir un curso de inglés online
  - H2: Comparativa de las mejores plataformas (table: plataforma, precio, nivel, metodología, certificado, para quién) — Focus English, Babbel, Preply, ABA English, British Council, Coursera
  - H2: Análisis individual de cada plataforma (H3 per platform)
  - H2: ¿Cuál elegir según tu perfil?
  - H2: Errores comunes al elegir un curso online
  - Internal links to hub `/hubs/curso-ingles` and to `curso-ingles-gratis`
  - CTA to Focus English

### [ ] Step 5: Verify build and lint

Run verification to ensure all new content is valid:
- `npm run build` — confirm no build errors (valid frontmatter in all new/modified .md files)
- `npm run lint` — confirm no linting errors
- Manually verify hub page at `/hubs/curso-ingles` renders and shows all 10 cluster articles in "Artículos relacionados"
