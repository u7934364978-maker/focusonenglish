# Especificación Técnica: Diagnóstico y Corrección de Caída de Posicionamiento SEO

## Contexto técnico

- **Stack**: Next.js 14 (App Router), TypeScript, Supabase, Tailwind CSS
- **Hosting**: Vercel (inferido por la estructura Next.js)
- **Sitio**: [focus-on-english.com](https://www.focus-on-english.com) — academia de inglés online para hispanohablantes
- **Contenido indexable**: 181 artículos de blog en `src/content/blog/` (formato Markdown + frontmatter YAML), 5 categorías (examenes, gramatica, metodos, trabajo, viajes)
- **Infraestructura SEO existente**: `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/schema.tsx`, metadata por página en cada `page.tsx`/`layout.tsx`

---

## Problemas técnicos identificados en el código

### Problema 1 (CRÍTICO) — JavaScript que degrada la experiencia de usuario

**Archivo**: `src/app/layout.tsx`

El layout raíz incluye un script que:
- Desactiva el menú contextual (`contextmenu` → `e.preventDefault()`)
- Bloquea atajos de teclado (F12, Ctrl+U, Ctrl+Shift+I, Ctrl+S)

Esto viola directamente las pautas de Google sobre experiencia de página. Google penaliza sitios que interfieren con el uso normal del navegador. Además, afecta a usuarios con lectores de pantalla y herramientas de accesibilidad.

**Corrección**: Eliminar el bloque `<script dangerouslySetInnerHTML>` de anti-copia del `<head>`.

---

### Problema 2 (CRÍTICO) — E-E-A-T débil: autores genéricos en artículos

**Archivos**: `src/content/blog/**/*.md`, `src/app/schema.tsx`, `src/lib/authors.ts`

La mayoría de los artículos usan `author: "Focus English"` o `author: "Focus English Team"` en lugar de los autores reales configurados en `src/lib/authors.ts` (Sara Méndez, David Torres). Además, el `ArticleSchema` en `src/app/schema.tsx` define el autor como `"@type": "Organization"` en lugar de `"@type": "Person"`, lo que es incorrecto para artículos firmados por personas.

**Correcciones**:
1. Actualizar artículos del blog para asignar autores reales (`sara-mendez`, `david-torres`) en el frontmatter
2. Corregir `ArticleSchema` en `src/app/schema.tsx` para usar `"@type": "Person"` cuando el autor no sea la organización
3. La página de artículo (`src/app/blog/[category]/[slug]/page.tsx`) ya renderiza datos de autor — solo necesita que el frontmatter tenga el slug correcto

---

### Problema 3 (ALTO) — Imagen OG en ArticleSchema sin contexto de artículo

**Archivo**: `src/app/schema.tsx` — función `ArticleSchema`

El schema de artículo usa una imagen estática genérica (`/og-image.jpg`) independientemente del artículo. Debería usar la imagen específica del artículo.

**Corrección**: Recibir `image` como prop en `ArticleSchema` y usar la imagen del artículo.

---

### Problema 4 (ALTO) — Falta `updatedDate` en la mayoría de artículos

**Archivos**: `src/content/blog/**/*.md`

El campo `updatedDate` (usado en `sitemap.ts` para `lastModified`) está ausente en la mayoría de artículos. Google utiliza esta señal para detectar contenido fresco. Artículos sin `updatedDate` muestran la fecha de publicación original, que en muchos casos es de 2024-2025, señalando contenido potencialmente desactualizado.

**Corrección**: Para artículos revisados y actualizados, añadir el campo `updatedDate` en el frontmatter.

---

### Problema 5 (MEDIO) — `sitemap.ts`: prioridad de keywords igual que categorías

**Archivo**: `src/app/sitemap.ts`

Las páginas de keywords (`/blog/temas/[keyword]`) tienen prioridad `0.8`, igual que las categorías, lo que puede diluir la señal de importancia. Son páginas de baja relevancia desde la perspectiva de contenido original.

**Corrección**: Reducir prioridad de URLs de keywords a `0.5` o eliminarlas del sitemap si no aportan tráfico.

---

### Problema 6 (MEDIO) — Schema de artículo con `"@type": "Article"` genérico

**Archivo**: `src/lib/schemas.ts` (referenciado desde `src/app/blog/[category]/[slug]/page.tsx`)

Usar `Article` en lugar de `BlogPosting` para posts de blog es menos semánticamente preciso para Google. También falta `wordCount` y `articleSection`.

**Corrección**: Cambiar `"@type": "Article"` por `"@type": "BlogPosting"` y añadir `wordCount` y `articleSection`.

---

## Enfoque de implementación

Este task es **híbrido**: parte del trabajo es análisis/diagnóstico (sin código) y parte es correcciones técnicas en el código existente. No requiere nuevas dependencias.

### Patrones de código existentes a reutilizar
- `src/lib/authors.ts`: sistema de autores ya definido, solo falta uso consistente
- `src/app/schema.tsx`: componentes de schema existentes, necesitan ajustes menores
- `src/lib/blog.ts`: `getBlogArticles()` ya lee `updatedDate` del frontmatter
- `scripts/audit-blog-seo.mjs`: script de auditoría SEO ya existente para validar cambios

---

## Cambios en estructura de código

| Archivo | Cambio |
|---------|--------|
| `src/app/layout.tsx` | Eliminar bloque `<script>` de anti-copia del navegador |
| `src/app/schema.tsx` | Corregir `ArticleSchema`: tipo autor `Person` vs `Organization`, añadir prop `image`, cambiar a `BlogPosting` |
| `src/app/sitemap.ts` | Reducir prioridad de URLs de keywords (`/blog/temas/`) a `0.5` |
| `src/content/blog/**/*.md` | Actualizar frontmatter: `author` → slug real, añadir `updatedDate` donde proceda |
| `src/app/blog/[category]/[slug]/page.tsx` | Pasar `image` del artículo al `ArticleSchema` |

---

## Cambios en modelo de datos / interfaces

No hay cambios de modelo de datos. El tipo `BlogPost` en `src/lib/blog.ts` ya incluye todos los campos necesarios (`updatedDate`, `authorData`, `image`).

---

## Fases de entrega

### Fase 1 — Correcciones técnicas críticas (impacto inmediato en señales de Google)
1. Eliminar script anti-copia de `layout.tsx`
2. Corregir `ArticleSchema` (tipo `Person`, imagen dinámica, tipo `BlogPosting`)
3. Reducir prioridad de keywords en `sitemap.ts`

### Fase 2 — Mejora de E-E-A-T en contenido
1. Actualizar frontmatter de artículos para asignar autores reales donde corresponda
2. Añadir `updatedDate` en artículos que hayan sido revisados

### Fase 3 — Auditoría y verificación
1. Ejecutar `node scripts/audit-blog-seo.mjs` para detectar artículos con problemas de frontmatter
2. Verificar Core Web Vitals con PageSpeed Insights tras despliegue
3. Cruzar en Google Search Console la fecha de la caída con el historial de actualizaciones de Google

---

## Verificación

```bash
# Lint y typecheck
npm run lint
npm run build

# Auditoría SEO del blog (script existente)
node scripts/audit-blog-seo.mjs

# Validación manual
# - Search Console → Informe de Rendimiento → comparar posiciones antes/después
# - PageSpeed Insights → Core Web Vitals para homepage y artículo representativo
# - https://search.google.com/test/rich-results → validar structured data de artículo
```

---

## Nota sobre el alcance

La causa raíz de la caída de posicionamiento es muy probablemente una **Core Update de Google** (ver `requirements.md`). Las correcciones técnicas especificadas aquí **eliminan barreras** que Google penaliza y **refuerzan señales positivas** (E-E-A-T, experiencia de página), pero la recuperación de posiciones puede tardar semanas o meses tras la siguiente Core Update. El diagnóstico definitivo requiere revisar Search Console para identificar la fecha exacta y las páginas afectadas.
