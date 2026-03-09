# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: dfeb411e-6348-4396-8b00-b1fd2b7a8fb0 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 3b4a2274-9b1d-4f2c-8b3f-aec5e53ff93a -->

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
<!-- chat-id: 4b43ddc8-6478-44bf-8287-57c75acd05cd -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [x] Step: Fase 1 — Tagging fixes (phrasal-verbs hub)
<!-- chat-id: b67ffbcb-6e55-4be7-84f8-9a707421d1c9 -->

Añadir keyword `phrasal verbs` al frontmatter de los 6 artículos del hub `phrasal-verbs`.

- Editar `src/content/blog/gramatica/phrasal-verbs-trabajo.md`
- Editar `src/content/blog/gramatica/phrasal-verbs-with-put.md`
- Editar `src/content/blog/gramatica/phrasal-verbs-principiantes.md`
- Editar `src/content/blog/gramatica/phrasal-verbs-with-get.md`
- Editar `src/content/blog/gramatica/phrasal-verbs-c1-avanzados.md`
- Editar `src/content/blog/gramatica/phrasal-verbs-guia-b2.md`
- En cada uno: añadir `- phrasal verbs` a la lista `keywords` del frontmatter

### [x] Step: Fase 1 — Tagging fixes (reported-speech, voz-pasiva-ingles, present-perfect-vs-past-simple)
<!-- chat-id: f888724d-e811-4081-a677-33f3506a7aa0 -->

Añadir la keyword exacta del hub al frontmatter de los artículos de los hubs `reported-speech`, `voz-pasiva-ingles` y `present-perfect-vs-past-simple`.

**Hub `reported-speech`** — añadir keyword `reported speech`:
- `src/content/blog/examenes/reported-speech-cambridge-exams.md`
- `src/content/blog/gramatica/reported-speech-ejercicios-pdf.md`
- `src/content/blog/gramatica/guia-maestra-reported-speech.md`
- `src/content/blog/gramatica/reported-speech-guia-uso.md`
- `src/content/blog/gramatica/reported-speech-questions-commands.md`

**Hub `voz-pasiva-ingles`** — añadir keyword `voz pasiva ingles`:
- `src/content/blog/gramatica/voz-pasiva-ingles-guia.md`
- `src/content/blog/gramatica/voz-pasiva-avanzada-guia.md`

**Hub `present-perfect-vs-past-simple`** — añadir keyword `present perfect vs past simple`:
- `src/content/blog/gramatica/present-perfect-vs-past-simple.md`

Verificación: `npm run build` para confirmar que no se rompe nada.

### [x] Step: Fase 2 — Nuevos artículos prioridad ALTA (trabajo/profesional)
<!-- chat-id: 1a421253-3627-4aba-a002-d3253c58a057 -->

Crear artículos para los hubs vacíos de mayor intención de búsqueda en el ámbito profesional.

- Crear `src/content/blog/trabajo/cv-ingles.md` con keyword `cv ingles`
- Crear `src/content/blog/trabajo/entrevista-trabajo-ingles-preguntas.md` con keyword `entrevista trabajo ingles`
- Crear `src/content/blog/trabajo/entrevista-trabajo-ingles-frases.md` con keyword `entrevista trabajo ingles`
- Crear `src/content/blog/trabajo/ingles-juridico-legal.md` con keyword `ingles juridico legal`
- Crear `src/content/blog/trabajo/ingles-para-marketing.md` con keyword `ingles para marketing`

Cada artículo debe tener frontmatter completo (title, description, pubDate, category, keywords) y contenido real en markdown.

Verificación: `npm run build`

### [x] Step: Fase 2 — Nuevos artículos prioridad ALTA (gramática/pronunciación)
<!-- chat-id: f79a3559-bc59-44d5-9112-6eeebdde2a1a -->

Crear artículos para los hubs vacíos de alta intención en gramática y pronunciación.

- Crear `src/content/blog/gramatica/pronunciacion-ingles-guia-completa.md` con keyword `pronunciacion ingles guia completa`
- Crear `src/content/blog/gramatica/fonetica-inglesa-basica.md` con keyword `fonetica inglesa basica`
- Crear `src/content/blog/metodos/ingles-americano-vs-britanico.md` con keyword `ingles americano vs britanico`

Cada artículo debe tener frontmatter completo y contenido real en markdown.

Verificación: `npm run build`

### [ ] Step: Fase 3 — Nuevos artículos prioridad MEDIA (hubs vacíos temáticos)

Crear artículos para los hubs vacíos restantes.

- `src/content/blog/metodos/mejores-apps-ingles-gratis.md` → keyword `mejores apps ingles gratis`
- `src/content/blog/metodos/mejores-peliculas-series-ingles.md` → keyword `mejores peliculas series ingles`
- `src/content/blog/metodos/mejores-libros-aprender-ingles.md` → keyword `mejores libros aprender ingles`
- `src/content/blog/metodos/aprender-ingles-con-chatgpt.md` → keyword `aprender ingles con chatgpt`
- `src/content/blog/viajes/ingles-para-compras.md` → keyword `ingles para compras`
- `src/content/blog/metodos/ingles-para-deportes.md` → keyword `ingles para deportes`
- `src/content/blog/viajes/mudarse-al-extranjero-guia-ingles.md` → keyword `mudarse al extranjero guia ingles`
- `src/content/blog/viajes/ingles-en-la-cocina.md` → keyword `ingles en la cocina`
- `src/content/blog/examenes/ingles-universitario-academico.md` → keyword `ingles universitario academico`
- `src/content/blog/metodos/guia-erasmus-estudios-extranjero.md` → keyword `guia erasmus estudios extranjero`
- `src/content/blog/examenes/becas-solicitudes-ingles.md` → keyword `becas solicitudes ingles`
- `src/content/blog/metodos/acentos-ingles-diferencias.md` → keyword `acentos ingles diferencias`
- `src/content/blog/metodos/ingles-para-ligar-y-citas.md` → keyword `ingles para ligar y citas`
- `src/content/blog/trabajo/ingles-para-camareros-y-hosteleria.md` → keyword `ingles para camareros y hosteleria`
- `src/content/blog/trabajo/ingles-real-estate-inmobiliario.md` → keyword `ingles real estate inmobiliario`

Verificación: `npm run build`

### [ ] Step: Fase 3 — Ampliar hubs escasos (trabajo/examenes)

Crear artículos adicionales para hubs con 1-2 artículos en categorías trabajo y examenes.

- 2 artículos más para `emails-profesionales-ingles` en `trabajo/`
- 2 artículos más para `entrevista-de-trabajo-en-ingles` en `trabajo/`
- 1-2 artículos más para `job-interview-english` en `trabajo/`
- 1-2 artículos más para `presentaciones-en-ingles` en `trabajo/`
- 2 artículos más para `ingles-medico` en `trabajo/`
- 2 artículos más para `ingles-para-ingenieros` en `trabajo/`
- 2 artículos más para `ingles-para-atencion-al-cliente` en `trabajo/`
- 2 artículos más para `cambridge-english-2026` en `examenes/`
- 2 artículos más para `aptis-general-b1` en `examenes/`
- 2 artículos más para `ielts-vs-toefl-2026` en `examenes/`

Verificación: `npm run build`

### [ ] Step: Fase 3 — Ampliar hubs escasos (gramática/métodos/viajes)

Crear artículos adicionales para hubs con 1-2 artículos en categorías gramática, métodos y viajes.

- 2 artículos más para `verbos-modales-ingles` en `gramatica/`
- 2 artículos más para `ejercicios-condicionales-ingles` en `gramatica/`
- 1-2 artículos más para `niveles-ingles-mcer` en `metodos/`
- 2 artículos más para `fluidez-ingles-avanzado` en `metodos/`
- 2 artículos más para `slang-in-english` en `metodos/`
- 2 artículos más para `ingles-moderno-internet` en `metodos/`
- 2 artículos más para `cultura-anglosajona` en `metodos/`
- 1-2 artículos más para `ingles-para-viajar` en `viajes/`

Verificación: `npm run build`
