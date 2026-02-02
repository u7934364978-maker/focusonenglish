# PRD: Corrección de URLs Canónicas con Redireccionamientos

## 1. Descripción del Problema
Actualmente, varias páginas del sitio web Focus English tienen etiquetas canónicas que apuntan a URLs que devuelven un código de respuesta 3XX (redireccionamientos). Esto afecta negativamente al SEO, ya que los motores de búsqueda prefieren que la URL canónica sea una página con código 200 OK que sea la versión final que se desea indexar.

Además, se ha identificado que la etiqueta canónica definida en el `layout.tsx` raíz se hereda en todas las páginas que no la sobrescriben, provocando que muchas secciones del sitio (como /blog, /contacto, /planes) apunten erróneamente a la página de inicio como su versión canónica.

## 2. Objetivos
- Identificar y corregir todas las etiquetas canónicas que apunten a rutas redirigidas.
- Asegurar que cada página indexable tenga su propia URL canónica apuntando a sí misma (200 OK).
- Evitar la herencia incorrecta de la URL canónica de la página de inicio en otras secciones del sitio.

## 3. Análisis Técnico
### URLs Redirigidas Identificadas (en `next.config.js`)
Las siguientes rutas están configuradas como redireccionamientos permanentes (301) y **NO** deben ser usadas como URLs canónicas:
- `/signin`, `/login`, `/register`, `/signup`, `/forgot-password` (Redirigen a `/cuenta/...`)
- `/contact` (Redirige a `/contacto`)
- `/estudiante/dashboard` (Redirige a `/dashboard`)
- `/cursos`, `/cursos/:path*` (Redirigen a `/`)
- `/diagnostico` (Redirige a `/`)
- `/cursos-especializados`, `/certificaciones`, `/trabajo/:nivel`, `/viajes/:nivel`, `/examenes/:nivel` (Redirigen a `/`)

### Estado Actual de las Canónicas
- `src/app/layout.tsx`: Define `canonical: 'https://focus-on-english.com'`. Esto es heredado por todas las páginas que no lo sobrescriben.
- `src/app/blog/[category]/page.tsx`: Define `canonical: '/blog/${category}'`. (Correcto, pero relativo).
- `src/app/blog/[category]/[slug]/page.tsx`: Define `canonical: 'https://focus-on-english.com/blog/${article.category}/${slug}'`. (Correcto, absoluto).

## 4. Requerimientos de Implementación
1. **Modificar `src/app/layout.tsx`**: Eliminar la etiqueta canónica global del objeto `metadata` para evitar herencias incorrectas.
2. **Actualizar `src/app/page.tsx`**: Añadir explícitamente la URL canónica de la página de inicio.
3. **Actualizar páginas estáticas**: Añadir etiquetas canónicas propias a las siguientes páginas:
   - `/blog` (`src/app/blog/page.tsx`)
   - `/contacto` (`src/app/contacto/page.tsx`)
   - `/planes` (`src/app/planes/metadata.ts`)
   - `/test-nivel` (`src/app/test-nivel/page.tsx`)
4. **Verificar consistencia**: Asegurarse de que todas las URLs canónicas utilicen el dominio base correcto (`https://focus-on-english.com`) y no incluyan rutas redirigidas.
5. **Normalización**: Preferir el uso de URLs absolutas o asegurarse de que `metadataBase` esté correctamente configurado para resolver URLs relativas de forma consistente.

## 5. Criterios de Aceptación
- La página de inicio tiene su canónica apuntando a `https://focus-on-english.com`.
- La página de contacto tiene su canónica apuntando a `https://focus-on-english.com/contacto`.
- La página del blog tiene su canónica apuntando a `https://focus-on-english.com/blog`.
- Ninguna página indexable tiene una canónica que devuelva un código 301/302.
- Las páginas de blog y categorías mantienen sus canónicas dinámicas correctas.
