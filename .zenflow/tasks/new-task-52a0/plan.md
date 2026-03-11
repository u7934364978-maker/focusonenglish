# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 501377a2-fd12-4c20-a8aa-e13cf323564c -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 6d9aca8a-f321-4f6c-981c-167badcc6d70 -->

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
<!-- chat-id: e69f4c54-df9f-49b0-819a-86008f6c13c9 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [x] Step 1: Hub 1 — Artículos de fonética (lote A)
<!-- chat-id: 790a3751-8e4e-4a2c-a333-a54e4b245dc4 -->

Crear los 3 primeros artículos de cluster para el hub `fonetica-inglesa-basica`:

- `src/content/blog/gramatica/schwa-ingles-sonido-clave.md` (david-torres, 2026-02-05)
- `src/content/blog/gramatica/vocales-cortas-largas-ingles.md` (sara-mendez, 2026-02-08)
- `src/content/blog/gramatica/consonantes-th-ingles.md` (david-torres, 2026-02-11)

Requisitos:
- Frontmatter completo (title, description, readTime, excerpt, keywords, author, date, updatedDate, image, category, faqs)
- ~1500 palabras por artículo (sin mencionarlo en el texto)
- Tono conversacional, usar "tú", incluir IPA donde proceda
- Enlace al hub `/hubs/fonetica-inglesa-basica` en el cuerpo
- Sin patrones formulaicos de IA ("en primer lugar", "en conclusión", etc.)
- 2–4 FAQs realistas al final

### [x] Step 2: Hub 1 — Artículos de fonética (lote B)
<!-- chat-id: 04ca893d-fc96-4ae1-a412-da37f7c6a2ca -->

Crear los artículos 4–6 para el hub `fonetica-inglesa-basica`:

- `src/content/blog/gramatica/diptongos-ingles-lista-completa.md` (sara-mendez, 2026-02-14)
- `src/content/blog/gramatica/word-stress-ingles-reglas.md` (david-torres, 2026-02-17)
- `src/content/blog/gramatica/pares-minimos-ingles.md` (sara-mendez, 2026-02-20)

Mismos requisitos que lote A. Incluir 1–2 enlaces a artículos del mismo hub cuando sea natural.

### [x] Step 3: Hub 1 — Artículos de fonética (lote C) + actualización del hub
<!-- chat-id: 6ca81584-52df-4c83-9412-31db6797c93b -->

Crear los artículos 7–9 para el hub `fonetica-inglesa-basica`:

- `src/content/blog/gramatica/letras-mudas-ingles-lista.md` (david-torres, 2026-02-23)
- `src/content/blog/gramatica/ipa-ingles-como-leer.md` (sara-mendez, 2026-02-26)
- `src/content/blog/gramatica/silabas-ingles-division.md` (david-torres, 2026-03-01)

Después, actualizar `src/content/hubs/fonetica-inglesa-basica.md`:
- Añadir sección `## 📚 Profundiza más` al final
- Incluir enlace al artículo existente: `/blog/gramatica/fonetica-inglesa-basica`
- Incluir enlaces a los 9 artículos nuevos creados en los lotes A, B y C

### [ ] Step 4: Hub 2 — Artículos de pronunciación (lote A)

Crear los 3 primeros artículos de cluster para el hub `pronunciacion-ingles-guia-completa`:

- `src/content/blog/gramatica/connected-speech-ingles.md` (sara-mendez, 2026-02-04)
- `src/content/blog/gramatica/entonacion-ingles.md` (david-torres, 2026-02-07)
- `src/content/blog/gramatica/ritmo-ingles-stress-timed.md` (sara-mendez, 2026-02-10)

Requisitos: mismos criterios de calidad (IPA, tono, sin marcadores de IA, enlace al hub `/hubs/pronunciacion-ingles-guia-completa`).

### [ ] Step 5: Hub 2 — Artículos de pronunciación (lote B)

Crear artículos 4–6 para el hub `pronunciacion-ingles-guia-completa`:

- `src/content/blog/metodos/shadowing-tecnica-ingles.md` (david-torres, 2026-02-13)
- `src/content/blog/gramatica/reduccion-vocales-ingles.md` (sara-mendez, 2026-02-16)
- `src/content/blog/metodos/ejercicios-pronunciacion-ingles.md` (david-torres, 2026-02-19)

Incluir 1–2 enlaces cruzados a artículos relacionados del mismo hub cuando sea natural.

### [ ] Step 6: Hub 2 — Artículos de pronunciación (lote C) + actualización del hub

Crear artículos 7–9 para el hub `pronunciacion-ingles-guia-completa`:

- `src/content/blog/gramatica/pronunciacion-r-ingles.md` (sara-mendez, 2026-02-22)
- `src/content/blog/metodos/como-mejorar-acento-ingles.md` (david-torres, 2026-02-25)
- `src/content/blog/gramatica/pronunciacion-terminaciones-ingles.md` (sara-mendez, 2026-02-28)

Después, actualizar `src/content/hubs/pronunciacion-ingles-guia-completa.md`:
- Añadir sección `## 📚 Profundiza más` al final
- Incluir enlace al artículo existente: `/blog/gramatica/pronunciacion-ingles-guia-completa`
- Incluir enlace al huérfano adoptado: `/blog/metodos/reglas-pronunciacion-ingles`
- Incluir enlaces a los 9 artículos nuevos (lotes A, B y C)

### [ ] Step 7: Hub 3 — Artículos de acentos (lote A)

Crear los 3 primeros artículos de cluster para el hub `acentos-ingles-diferencias`:

- `src/content/blog/metodos/ingles-britanico-acentos-regionales.md` (david-torres, 2026-02-03)
- `src/content/blog/metodos/general-american-acento.md` (sara-mendez, 2026-02-06)
- `src/content/blog/metodos/acento-ingles-australiano.md` (david-torres, 2026-02-09)

Enlace al hub `/hubs/acentos-ingles-diferencias`. Comparativas con ejemplos fonéticos concretos.

### [ ] Step 8: Hub 3 — Artículos de acentos (lote B)

Crear artículos 4–6 para el hub `acentos-ingles-diferencias`:

- `src/content/blog/metodos/acento-ingles-irlandes.md` (sara-mendez, 2026-02-12)
- `src/content/blog/metodos/cockney-acento-ingles.md` (david-torres, 2026-02-15)
- `src/content/blog/metodos/ingles-escoces-caracteristicas.md` (sara-mendez, 2026-02-18)

Incluir ejemplos de vocabulario/pronunciación característicos de cada acento.

### [ ] Step 9: Hub 3 — Artículos de acentos (lote C)

Crear artículos 7–9 para el hub `acentos-ingles-diferencias`:

- `src/content/blog/metodos/acento-ingles-sudafricano.md` (david-torres, 2026-02-21)
- `src/content/blog/metodos/acento-canadiense-ingles.md` (sara-mendez, 2026-02-24)
- `src/content/blog/metodos/como-entender-acentos-ingles.md` (david-torres, 2026-02-27)

### [ ] Step 10: Hub 3 — Artículo final de acentos (lote D) + actualización del hub

Crear el artículo 10 para el hub `acentos-ingles-diferencias`:

- `src/content/blog/metodos/ingles-lingua-franca-acentos.md` (sara-mendez, 2026-03-02)

Después, actualizar `src/content/hubs/acentos-ingles-diferencias.md`:
- Añadir sección `## 📚 Profundiza más` al final
- Incluir enlace al huérfano adoptado: `/blog/metodos/acentos-ingles-diferencias`
- Incluir enlaces a los 10 artículos nuevos (lotes A, B, C y D)
