# Especificación Técnica: Blog & Keyword Hubs

## 1. Contexto Técnico
- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Gestión de Contenido:** Markdown con `gray-matter`
- **Componentes UI:** Tailwind CSS, Lucide React

## 2. Enfoque de Implementación

### 2.1 Estructura de Archivos y Migración
1. **Migración:** Mover archivos de `src/content/seo-pages/rutas/*.md` a `src/content/blog/seo/*.md`.
2. **Normalización de Frontmatter:** Asegurar que los archivos migrados tengan los campos `category: "seo"` (o la categoría correspondiente) y `date` para que sean detectados por `lib/blog.ts`.
3. **Eliminación de redundancia:** Eliminar la lógica duplicada en `src/lib/seo.ts` y las rutas en `src/app/[slug]/page.tsx` que dependan del prefijo `curso-ingles-`.

### 2.2 Estrategia de Rutas
- **Artículos:** Se mantendrá la ruta `/blog/[category]/[slug]` para preservar la estructura actual del blog y categorizar las nuevas páginas SEO bajo una categoría técnica o temática.
- **Keyword Hubs:** Nueva ruta dinámica `/blog/temas/[keyword]`.
  - Esta ruta listará todos los artículos de `src/content/blog` que incluyan la `keyword` en su array de keywords.

### 2.3 Lógica de Negocio (Lib/Blog)
- Actualizar `getBlogArticles` para que sea recursiva y escanee subdirectorios dentro de `src/content/blog`.
- Crear `getArticlesByKeyword(keyword: string)` para filtrar el contenido unificado.
- Crear `getAllKeywords()` para generar las rutas estáticas de los Hubs.

### 2.4 Redirecciones (SEO Safety)
- Configurar en `next.config.js` un array de redirecciones 301:
  - De: `/curso-ingles-[slug]`
  - A: `/blog/seo/[slug]` (o la ruta final decidida).

## 3. Cambios en el Código

### 3.1 Estructura de Contenido
```bash
src/content/blog/
├── trabajo/
├── viajes/
├── examenes/
└── seo/ (Nuevos archivos migrados desde seo-pages)
```

### 3.2 Nuevas Páginas y Componentes
- `src/app/blog/temas/[keyword]/page.tsx`: Página del Hub de Keywords.
- `src/components/blog/KeywordBadge.tsx`: Componente para mostrar y enlazar keywords.

## 4. Fases de Entrega
1. **Fase 1 (Migración):** Mover archivos y actualizar `lib/blog.ts`. Verificar que aparezcan en `/blog`.
2. **Fase 2 (Keyword Hubs):** Implementar la ruta `/blog/temas/[keyword]` y la lógica de filtrado.
3. **Fase 3 (Redirecciones):** Implementar y probar los 301s.
4. **Fase 4 (Cleanup):** Eliminar código obsoleto de `seo-pages`.

## 5. Verificación
- Ejecutar `npm run build` para asegurar que las rutas estáticas se generan correctamente.
- Validar las redirecciones con `curl -I`.
- Comprobar que el `sitemap.xml` incluya las nuevas rutas de `/blog`.
