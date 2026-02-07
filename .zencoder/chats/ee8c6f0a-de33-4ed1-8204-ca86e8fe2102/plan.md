# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. [x] Review existing codebase to understand current architecture and patterns
   - Found articles linked to "cursos de inglés b1" in `src/content/seo-pages` and `src/content/blog`.
   - Determined routing logic: SEO pages use `/curso-ingles-[slug]` and blog uses `/blog/[category]/[slug]`.
   - Confirmed that SEO pages are not currently linked from the main `/blog` page.
2. [x] Analyze the feature definition and identify unclear aspects
   - Feature: Centralize all content in `/blog` and implement dynamic Keyword Hubs.
3. [x] Create the PRD with the consolidated strategy
4. [x] Ask the user for confirmation of the PRD
5. [x] If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/ee8c6f0a-de33-4ed1-8204-ca86e8fe2102/requirements.md`.

### [x] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/ee8c6f0a-de33-4ed1-8204-ca86e8fe2102/requirements.md`.

1. [x] Review existing codebase architecture and identify reusable components
2. [x] Define the implementation approach
   - Migration of `.md` files.
   - Routing strategy for Keywords Hubs.
   - Redirect mapping logic.

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/ee8c6f0a-de33-4ed1-8204-ca86e8fe2102/spec.md`.

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/ee8c6f0a-de33-4ed1-8204-ca86e8fe2102/spec.md`.

1. [x] Break down the work into concrete tasks
2. [x] Each task should reference relevant contracts and include verification steps
3. [x] Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

#### Fase 1: Migración y Unificación de Contenido
- [x] **Tarea 1.1**: Crear carpeta `src/content/blog/seo` y mover archivos desde `src/content/seo-pages/rutas`.
- [x] **Tarea 1.2**: Normalizar frontmatter de archivos migrados (añadir `category: "seo"`, `date`, `author`).
- [x] **Tarea 1.3**: Actualizar `src/lib/blog.ts` para soportar búsqueda recursiva de archivos en subcarpetas.
- [x] **Tarea 1.4**: Verificar que los nuevos artículos aparecen en la página principal de `/blog`.

#### Fase 2: Keyword Hubs (Topic Clusters)
- [x] **Tarea 2.1**: Implementar `getArticlesByKeyword` y `getAllKeywords` en `src/lib/blog.ts`.
- [x] **Tarea 2.2**: Crear la ruta dinámica `src/app/blog/temas/[keyword]/page.tsx` para mostrar los Hubs.
- [x] **Tarea 2.3**: Añadir enlaces a los Hubs (Keywords) en el componente de detalle del artículo.

#### Fase 3: Redirecciones y SEO
- [x] **Tarea 3.1**: Configurar redirecciones 301 en `next.config.js` para las antiguas rutas `/curso-ingles-*`.
- [x] **Tarea 3.2**: Actualizar `src/app/sitemap.ts` para reflejar la nueva estructura y eliminar rutas SEO antiguas.
- [x] **Tarea 3.3**: Verificar redirecciones con `curl -I` y generación de sitemap.

#### Fase 4: Limpieza
- [x] **Tarea 4.1**: Eliminar carpeta `src/content/seo-pages/rutas`.
- [x] **Tarea 4.2**: Eliminar lógica obsoleta en `src/app/[slug]/page.tsx` y `src/lib/seo.ts`.

