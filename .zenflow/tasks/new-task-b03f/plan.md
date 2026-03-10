# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: fd777867-0da2-4615-9813-8a880f4a4f63 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 0abf9797-1942-419b-a7fe-b722b941d6a5 -->

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
<!-- chat-id: cf251410-8a08-4370-b844-b1fbeaf97c14 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [x] Step: Eliminar script anti-copia de layout.tsx
<!-- chat-id: f5448756-059d-47a0-939a-88ea143f187e -->

Eliminar el bloque `<script dangerouslySetInnerHTML>` que desactiva el menú contextual y bloquea atajos de teclado (F12, Ctrl+U, etc.) del archivo `src/app/layout.tsx`.

- Localizar el bloque `<script>` con `contextmenu` y atajos de teclado bloqueados
- Eliminar el bloque completo del `<head>`
- Verificar que el resto del layout permanece intacto
- Ejecutar `npm run lint && npm run build` para confirmar que no hay errores

### [x] Step: Corregir ArticleSchema en src/app/schema.tsx
<!-- chat-id: efd6172a-e96b-4be3-a7d2-64e1ce7899d0 -->

Actualizar el componente `ArticleSchema` para reflejar correctamente la autoría y el tipo de contenido:

- Cambiar `"@type": "Organization"` a `"@type": "Person"` cuando el autor sea una persona real
- Cambiar `"@type": "Article"` a `"@type": "BlogPosting"` para mayor precisión semántica
- Añadir prop `image` al componente `ArticleSchema` y usarla dinámicamente en lugar de la imagen estática `/og-image.jpg`
- Añadir `wordCount` y `articleSection` al schema donde estén disponibles
- Actualizar `src/app/blog/[category]/[slug]/page.tsx` para pasar la imagen del artículo a `ArticleSchema`
- Ejecutar `npm run lint && npm run build` para confirmar que no hay errores de TypeScript

### [x] Step: Reducir prioridad de keywords en sitemap.ts
<!-- chat-id: 127cf81e-f5d4-4853-a189-1974b83d96f7 -->

En `src/app/sitemap.ts`, reducir la prioridad de las URLs de keywords (`/blog/temas/[keyword]`) de `0.8` a `0.5` para no diluir la señal de importancia de las páginas de contenido real.

- Localizar la sección que genera URLs de keywords
- Cambiar el valor de `priority` de `0.8` a `0.5`
- Ejecutar `npm run lint && npm run build` para confirmar que no hay errores

### [x] Step: Actualizar frontmatter de artículos del blog (autores y updatedDate)
<!-- chat-id: 95282a1f-f6c6-4495-ada9-1c433f50a45f -->

Mejorar el E-E-A-T del contenido actualizando el frontmatter de los artículos en `src/content/blog/**/*.md`:

- Ejecutar `node scripts/audit-blog-seo.mjs` para obtener la lista de artículos con autor genérico (`Focus English`, `Focus English Team`)
- Reemplazar autores genéricos por slugs reales (`sara-mendez` o `david-torres`) según el contenido de cada artículo
- Añadir el campo `updatedDate` (con fecha actual) en artículos que hayan sido modificados o revisados recientemente
- Ejecutar de nuevo `node scripts/audit-blog-seo.mjs` para verificar que no quedan artículos con autores genéricos
- Ejecutar `npm run lint && npm run build` para confirmar integridad del proyecto

### [ ] Step: Verificación final y auditoría SEO

Ejecutar la auditoría completa y documentar los resultados en este plan:

- Ejecutar `node scripts/audit-blog-seo.mjs` → registrar número de artículos con problemas pendientes
- Ejecutar `npm run lint && npm run build` → confirmar build exitoso sin errores
- Registrar resultado de cada verificación en este plan marcando los checks como completados
