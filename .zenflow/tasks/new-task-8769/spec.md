# SEO Analysis: Caída de Impresiones (500 → 10/día)

## Dificultad: Hard
Múltiples causas técnicas y de contenido que se combinan. Afecta indexación directa de Google.

---

## Contexto Técnico

- **Framework**: Next.js 15 App Router, TypeScript
- **Dominio**: `https://www.focus-on-english.com`
- **Arquitectura de contenido**: MDX/Markdown en `src/content/blog/` (71 artículos), `src/content/hubs/` (44 hubs), `src/content/seo-pages/` (3 páginas pillar)
- **Sitemap**: generado dinámicamente en `src/app/sitemap.ts`
- **Robots**: `src/app/robots.ts`
- **Metadatos**: por página via `generateMetadata()` o `export const metadata`

---

## Causas Identificadas

### 🚨 CRÍTICO — Issue 1: Categoría Incorrecta en Frontmatter (CAUSA PRINCIPAL)

**15 artículos** en la carpeta `src/content/blog/gramatica/` tienen `category: metodos` en su frontmatter, en lugar de `category: gramatica`.

**Impacto técnico**:
1. El sistema `lib/blog.ts` lee la categoría desde frontmatter, no desde la ruta de la carpeta
2. Estos artículos se publican en `/blog/metodos/[slug]` (URL incorrecta)
3. Algunos artículos tienen `canonical` en el frontmatter apuntando a `/blog/gramatica/[slug]` — que es un **404** (porque no existe ningún artículo con `category: gramatica`)
4. Google rastrea `/blog/metodos/[slug]`, ve canonical → `/blog/gramatica/[slug]` → obtiene 404 → **desindexación**

**Artículos afectados** (15 en total en carpeta `gramatica/`):
- `condicionales-ingles-guia-completa.md` (sin canonical)
- `gramatica-ingles-b1-guia.md` (canonical: `/blog/gramatica/gramatica-ingles-b1-guia` → **404**)
- `guia-maestra-reported-speech.md` (canonical: `/blog/gramatica/guia-maestra-reported-speech` → **404**)
- `passive-reporting-verbs-guia-avanzada.md` (sin canonical)
- `phrasal-verbs-guia-b2.md` (sin canonical)
- `preposiciones-movimiento-ingles.md` (sin canonical)
- `present-perfect-vs-past-simple.md` (sin canonical)
- `relative-clauses-guia-definitiva.md` (sin canonical)
- `reported-speech-ejercicios-pdf.md` (canonical: `/blog/gramatica/reported-speech-ejercicios-pdf` → **404**)
- `reported-speech-guia-uso.md` (canonical: `/blog/gramatica/reported-speech-guia-uso` → pero sin category explícita gramatica, puede ser 404)
- `reported-speech-questions-commands.md` (canonical: `/blog/gramatica/...` → **404**)
- `reporting-verbs-patterns-list.md` (canonical: `/blog/gramatica/reporting-verbs-patterns-list` → **404**)
- `verbos-modales-ingles-guia.md` (sin canonical)
- `voz-pasiva-avanzada-guia.md` (sin canonical)
- `voz-pasiva-ingles-guia.md` (sin canonical)

**Confirmado**: `find src/content/blog -name "*.md" | xargs grep -h "^category:" | sort | uniq -c` → 0 artículos con `category: gramatica`. La categoría `/blog/gramatica/` tiene 0 artículos.

---

### 🔴 ALTO — Issue 2: Canibalización de Keywords — Apps para Aprender Inglés

Múltiples páginas compitiendo por las mismas keywords:

| URL | Keyword Principal |
|-----|---|
| `/aplicaciones-para-aprender-ingles` (pillar page) | "aplicaciones para aprender inglés" |
| `/blog/metodos/mejor-app-aprender-ingles` | "mejor app para aprender inglés" |
| `/blog/metodos/apps-ingles-gratuitas-vs-pago` | "apps inglés gratis" + "aplicaciones ingles de pago" |
| `/blog/metodos/apps-vs-cursos-ingles` | "apps vs cursos inglés" + "aplicaciones para aprender inglés efectivas" |
| `/blog/trabajo/mejores-apps-ingles-trabajo` | "apps inglés trabajo" |

Los artículos `apps-ingles-gratuitas-vs-pago.md` y `apps-vs-cursos-ingles.md` comparten keywords exactas (`apps para aprender ingles gratis`, `aplicaciones ingles de pago`, `duolingo gratis vs premium`, `focus english vs apps gratis`).

---

### 🔴 ALTO — Issue 3: Canibalización — Reported Speech (5+ artículos + 1 hub)

| Archivo | Ubicación | Keywords |
|---------|-----------|---------|
| `reported-speech-guia-uso.md` | `/blog/metodos/` | "reported speech rules", "estilo indirecto ingles" |
| `guia-maestra-reported-speech.md` | `/blog/metodos/` (carpeta gramatica) | "reported speech estructura", "reporting verbs" |
| `reported-speech-ejercicios-pdf.md` | `/blog/metodos/` (carpeta gramatica) | "ejercicios reported speech pdf" |
| `reported-speech-questions-commands.md` | `/blog/metodos/` (carpeta gramatica) | "reported speech questions" |
| `reporting-verbs-patterns-list.md` | `/blog/metodos/` (carpeta gramatica) | "reporting verbs" |
| `examenes/reported-speech-cambridge-exams.md` | `/blog/examenes/` | "reported speech cambridge" |
| `hubs/reported-speech.md` | `/blog/temas/reported-speech` | (hub) |

---

### 🔴 ALTO — Issue 4: Archivos Hub Duplicados

En `src/content/hubs/`:
- `entrevista-de-trabajo-en-ingles.md` y `entrevista-trabajo-ingles.md` — mismo tema
- `voz-pasiva-ingles.md` hub + `gramatica/voz-pasiva-ingles-guia.md` + `gramatica/voz-pasiva-avanzada-guia.md` — triplicado
- `emails-profesionales-ingles.md` hub + `trabajo/redaccion-emails-profesionales-ingles.md` + `trabajo/emails-profesionales-ingles.md` — triplicado

---

### 🟡 MEDIO — Issue 5: robots.ts — Allow Restrictivo

El archivo `src/app/robots.ts` solo pone `allow: ["/", "/blog/"]` explícitamente. Páginas SEO importantes como `/aprender-ingles`, `/aplicaciones-para-aprender-ingles`, `/certificaciones-ingles-oficiales`, `/frases-en-ingles`, `/planes`, `/test-nivel` no están explícitamente permitidas. Aunque por defecto robots.txt permite lo no prohibido, la ausencia de allows explícitos para páginas importantes es una mala práctica.

---

### 🟡 MEDIO — Issue 6: JavaScript Bloqueante en layout.tsx

El `layout.tsx` tiene un bloque `<script>` con:
- `document.addEventListener('contextmenu', e => e.preventDefault())` — bloquea menú contextual
- `setInterval` con `console.clear()` cada 1 segundo
- Bloqueo de teclas F12, Ctrl+U, Ctrl+S

El `setInterval` de 1 segundo ejecutando `console.clear()` y comprobaciones puede degradar el rendimiento de la página, afectando Core Web Vitals (Interaction to Next Paint). Google usa CWV como factor de ranking.

---

### 🟢 BAJO — Issue 7: OG Image Externa (Pexels)

La imagen OG en `layout.tsx` apunta a una URL de Pexels:
```
https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg
```
Si Pexels cambia o elimina la imagen, las redes sociales mostrarían imagen rota. Además, no es una imagen branded.

---

## Enfoque de Implementación

### Prioridad 1 (CRÍTICO — Fix inmediato): Corregir categorías en carpeta gramatica

**Archivos a modificar**: Los 15 archivos `.md` en `src/content/blog/gramatica/`

**Cambio**: En el frontmatter de cada archivo:
```yaml
# ANTES
category: metodos

# DESPUÉS
category: gramatica
```

**También**: En los archivos con canonical apuntando a `/blog/gramatica/[slug]`, verificar que sea correcto (lo será una vez corregida la categoría).

**Efecto**: 
- Los 15 artículos se publican en `/blog/gramatica/[slug]` (URL correcta)
- Las canonicals que apuntaban a 404 ahora apuntan a páginas reales
- Google reindexará estos 15 artículos
- El blog `/metodos` reduce de 31 a 16 artículos (menos ruido, más autoridad topical)

### Prioridad 2 (ALTO): Resolver canibalización apps

**Opción A** (recomendada): Consolidar
- Redirigir `apps-ingles-gratuitas-vs-pago` y `apps-vs-cursos-ingles` a `mejor-app-aprender-ingles` via canonical
- O fusionarlos en un único artículo

**Opción B**: Diferenciar keywords
- `mejor-app-aprender-ingles`: target "mejor app aprender inglés 2026"
- `apps-ingles-gratuitas-vs-pago`: target "apps inglés gratis" (solo keywords de gratuitas)
- `apps-vs-cursos-ingles`: target "academia inglés online vs app" (diferente intent)
- Eliminar keywords duplicadas del frontmatter

### Prioridad 3 (ALTO): Resolver canibalización reported speech

Una vez corregida la categoría (todos bajo `/blog/gramatica/`):
- `reported-speech-guia-uso.md`: pillar principal, target "reported speech inglés"
- `guia-maestra-reported-speech.md`: target "reported speech B2-C2 avanzado"
- `reported-speech-ejercicios-pdf.md`: target "ejercicios reported speech pdf" (intent diferente: descarga)
- `reported-speech-questions-commands.md`: target "reported speech preguntas órdenes"
- `reporting-verbs-patterns-list.md`: target "lista reporting verbs inglés"

Añadir internal linking entre ellos (hub-and-spoke).

### Prioridad 4 (MEDIO): Ampliar robots.ts

```typescript
allow: [
  "/",
  "/blog/",
  "/aprender-ingles",
  "/aplicaciones-para-aprender-ingles",
  "/certificaciones-ingles-oficiales",
  "/frases-en-ingles",
  "/planes",
  "/test-nivel",
  "/contacto",
  "/herramientas/",
],
```

### Prioridad 5 (MEDIO): Eliminar setInterval en layout.tsx

Eliminar el bloque de `setInterval` con `checkDevTools`. El anti-scraping básico (contextmenu, etc.) puede mantenerse si se desea, pero el intervalo afecta performance.

---

## Estructura de Cambios en el Código Fuente

### Archivos a modificar:
1. `src/content/blog/gramatica/*.md` — 15 archivos (cambio `category: metodos` → `category: gramatica`)
2. `src/app/robots.ts` — Ampliar reglas `allow`
3. `src/app/layout.tsx` — Eliminar `setInterval` en bloque anti-scraping
4. `src/content/blog/metodos/apps-ingles-gratuitas-vs-pago.md` — Eliminar keywords duplicadas con `apps-vs-cursos-ingles.md`
5. `src/content/blog/metodos/apps-vs-cursos-ingles.md` — Diferenciación de keywords

### Archivos a NO modificar (sistema de blog):
- `src/lib/blog.ts` — Correcto, el problema está en el contenido, no en el sistema
- `src/app/sitemap.ts` — Se actualizará automáticamente al corregir categorías
- `src/app/blog/[category]/page.tsx` — Correcto
- `src/app/blog/[category]/[slug]/page.tsx` — Correcto

---

## Verificación

1. **Build check**: `npm run build` — verificar que `/blog/gramatica/[slug]` se genera correctamente
2. **Manual**: Navegar a `https://www.focus-on-english.com/blog/gramatica/` y verificar artículos presentes
3. **Sitemap check**: Verificar que `/sitemap.xml` incluye URLs de `/blog/gramatica/`
4. **Canonical check**: Para cada artículo de gramática, verificar que el canonical apunta a la URL real
5. **robots.txt check**: Verificar que el robots.txt generado incluye los nuevos allows
6. **Lint**: `npm run lint` sin errores

---

## Impacto Esperado

| Métrica | Antes | Después (estimado 4-8 semanas) |
|---------|-------|------|
| Artículos indexados (gramática) | ~0 (canonical→404) | ~15 |
| Impresiones/día | ~10 | ~200-500+ |
| Canibalización apps | Alta | Baja |
| Core Web Vitals (INP) | Degradado por setInterval | Mejorado |

**Nota**: Google necesita tiempo para re-rastrear e indexar. Los efectos en Search Console se verán en 4-8 semanas después de desplegar los cambios.
