# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 15c76877-45cf-4b33-8cd6-4c3ad5629f87 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Focus on **what** the feature should do and **why**, not **how** it should be built. Do not include technical implementation details, technology choices, or code-level decisions — those belong in the Technical Specification.

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: b3a3886f-773d-4e95-a8b5-f9a1159aa252 -->

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
<!-- chat-id: c41d069c-f2d6-47a9-836c-44dd55ce8b44 -->

Esta tarea es de tipo **consulta/investigación** — no requiere implementación de software.

La especificación técnica ya recoge la respuesta completa en `spec.md`:

El curso **Recepcionista B2** tiene **4 unidades** ya creadas:

| # | Título                  |
|---|-------------------------|
| 1 | Gestión hotelera        |
| 2 | Clientes corporativos   |
| 3 | Gestión de crisis       |
| 4 | Formación del personal  |

Cada unidad incluye 6 lecciones: grammar, vocabulary, reading, listening, speaking, writing.

**Nota**: Se detectó un bug en `src/app/curso-recepcionista-b2/page.tsx` con variables de plantilla `{level_label}` y `{route}` sin sustituir.

**Conclusión**: No hay pasos de implementación necesarios. El paso de Implementación se omite.
