# PRD: Consolidación de Blog y Keyword Hubs

## 1. Objetivo
Migrar todas las páginas de contenido (SEO Landing Pages y Blog) bajo una estructura única en `/blog` y crear un sistema de **Keyword Hubs** para organizar el contenido semánticamente.

## 2. Situación Actual
- **Blog:** Localizado en `/blog/[category]/[slug]`. Archivos en `src/content/blog`.
- **SEO Pages:** Localizadas en `/curso-ingles-[slug]`. Archivos en `src/content/seo-pages/rutas`.
- **Problema:** Fragmentación de contenido, dificultad para enlazar artículos relacionados y duplicidad de lógica de renderizado.

## 3. Requerimientos Funcionales

### 3.1 Unificación de Contenido
- Mover todos los archivos de `src/content/seo-pages/rutas` a la carpeta correspondiente en `src/content/blog` (o una nueva estructura plana si se prefiere).
- Estandarizar el frontmatter de todos los artículos para incluir: `title`, `description`, `keywords`, `date`, `category`, `image`, `featured`.

### 3.2 Nueva Estructura de Rutas
- Todas las URLs colgarán de `/blog`.
- **Artículos:** `/blog/[slug]` o `/blog/[category]/[slug]` (a decidir en la fase técnica).
- **Hubs:** `/blog/topics/[keyword]` o similar, donde se agruparán artículos que compartan una keyword.

### 3.3 Keyword Hubs (Topic Clusters)
- Sistema dinámico que lea las `keywords` del frontmatter.
- Página de Hub: Mostrará un título SEO optimizado para la keyword y un listado de todos los artículos relacionados.
- Los artículos deben enlazar de vuelta a su Hub principal.

### 3.4 Redirecciones y SEO
- Implementar redirecciones 301 para todas las antiguas rutas `/curso-ingles-*` hacia sus nuevas ubicaciones en `/blog`.
- Actualizar `sitemap.ts` para reflejar la nueva estructura única.
- Asegurar que los `canonical` apunten a las nuevas URLs.

## 4. Requerimientos Técnicos
- **Next.js App Router:** Ajustar las rutas dinámicas en `src/app/blog`.
- **Lib/Blog:** Actualizar la lógica de `getBlogArticles` para que sea recursiva y encuentre todos los archivos migrados.
- **Middleware/Redirects:** Configurar las redirecciones en `next.config.js` o mediante un middleware.

## 5. Criterios de Aceptación
1. Todas las antiguas páginas SEO son accesibles bajo la ruta `/blog`.
2. Las URLs antiguas redirigen correctamente (301).
3. Existe una página funcional por keyword (Hub) que agrupa el contenido.
4. El blog principal muestra todos los artículos unificados.
