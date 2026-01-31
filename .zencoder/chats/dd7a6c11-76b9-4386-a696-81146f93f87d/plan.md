# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/dd7a6c11-76b9-4386-a696-81146f93f87d/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/.zencoder/chats/dd7a6c11-76b9-4386-a696-81146f93f87d/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/dd7a6c11-76b9-4386-a696-81146f93f87d/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/.zencoder/chats/dd7a6c11-76b9-4386-a696-81146f93f87d/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `/Users/lidia/Documents/focusonenglish/.zencoder/chats/dd7a6c11-76b9-4386-a696-81146f93f87d/plan.md`.

### [x] Step: Implementación de Optimización SEO

1. [x] **Tarea 1: Optimización de Frontmatter y Meta Descripción**
   - Ajustar `excerpt` y `keywords`.
2. [x] **Tarea 2: Optimización de Introducción y H1**
   - Asegurar que "inglés para viajar" aparezca pronto.
3. [x] **Tarea 3: Optimización de Encabezados de Fases**
   - Incluir keywords en los títulos de las fases 1 a 7.
4. [x] **Tarea 4: Revisión de Densidad y Negritas**
   - Resaltar frases clave para mejorar la experiencia de lectura.
5. [x] **Tarea 5: Verificación y Linting**
   - Ejecutar `npm run lint`.

### [in_progress] Step: Estabilización Técnica

1. [x] **Tarea 1: Limpieza de CSS en globals.css**
   - Eliminar estilos conflictivos de `.article-content`.
2. [x] **Tarea 2: Configuración de Tailwind Typography**
   - Instalar `@tailwindcss/typography` y añadirlo a `tailwind.config.js`.
3. [x] **Tarea 3: Simplificación de ReactMarkdown y Fix de Middleware**
   - Eliminar conflictos de middleware y simplificar renderizado para depuración.
4. [ ] **Tarea 4: Verificación Final de Visibilidad**
   - Confirmar con el usuario que el contenido es visible.



