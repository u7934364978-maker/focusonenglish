# Reporte SEO: Caída de Impresiones (500 → 10/día)

**Dominio**: `https://www.focus-on-english.com`  
**Fecha**: 2 de marzo de 2026  
**Diagnóstico**: Completado  
**Estado**: Todos los fixes aplicados ✅

---

## Diagnóstico de Causa Raíz

### Causa Principal (CRÍTICO): Canonical URLs → 404

**15 artículos** en la carpeta `src/content/blog/gramatica/` tenían `category: metodos` en su frontmatter. El sistema (`src/lib/blog.ts`) usa el campo `category` del frontmatter para construir las URLs, no la estructura de carpetas.

Resultado:
- Los artículos se publicaban en `/blog/metodos/[slug]` (URL real)
- Varios artículos tenían `canonical` apuntando a `/blog/gramatica/[slug]` → **404**
- Google rastreaba la URL real → veía canonical → seguía al 404 → **desindexaba el artículo**
- Con 15 artículos desindexados simultáneamente, las impresiones cayeron de ~500/día a ~10/día

Canonicals rotas confirmadas:
- `gramatica-ingles-b1-guia.md` → canonical a `/blog/gramatica/gramatica-ingles-b1-guia` (404)
- `guia-maestra-reported-speech.md` → canonical a `/blog/gramatica/guia-maestra-reported-speech` (404)
- `reported-speech-ejercicios-pdf.md` → canonical a `/blog/gramatica/reported-speech-ejercicios-pdf` (404)
- `reported-speech-questions-commands.md` → canonical a `/blog/gramatica/...` (404)
- `reporting-verbs-patterns-list.md` → canonical a `/blog/gramatica/reporting-verbs-patterns-list` (404)
- `reported-speech-guia-uso.md` → canonical a `/blog/gramatica/...` (404)

---

## Cambios Realizados

### 1. Fix Category Frontmatter — 15 artículos (CRÍTICO)

**Archivos modificados** en `src/content/blog/gramatica/`:

| Archivo | Cambio |
|---------|--------|
| `condicionales-ingles-guia-completa.md` | `category: metodos` → `category: gramatica` |
| `gramatica-ingles-b1-guia.md` | `category: metodos` → `category: gramatica` |
| `guia-maestra-reported-speech.md` | `category: metodos` → `category: gramatica` |
| `passive-reporting-verbs-guia-avanzada.md` | `category: metodos` → `category: gramatica` |
| `phrasal-verbs-guia-b2.md` | `category: metodos` → `category: gramatica` |
| `preposiciones-movimiento-ingles.md` | `category: metodos` → `category: gramatica` |
| `present-perfect-vs-past-simple.md` | `category: metodos` → `category: gramatica` |
| `relative-clauses-guia-definitiva.md` | `category: metodos` → `category: gramatica` |
| `reported-speech-ejercicios-pdf.md` | `category: metodos` → `category: gramatica` |
| `reported-speech-guia-uso.md` | `category: metodos` → `category: gramatica` |
| `reported-speech-questions-commands.md` | `category: metodos` → `category: gramatica` |
| `reporting-verbs-patterns-list.md` | `category: metodos` → `category: gramatica` |
| `verbos-modales-ingles-guia.md` | `category: metodos` → `category: gramatica` |
| `voz-pasiva-avanzada-guia.md` | `category: metodos` → `category: gramatica` |
| `voz-pasiva-ingles-guia.md` | `category: metodos` → `category: gramatica` |

**Efecto**: Los 15 artículos se publican ahora en `/blog/gramatica/[slug]`. Las canonicals que apuntaban a 404 ahora apuntan a páginas reales. El sitemap se actualiza automáticamente. La categoría `/blog/metodos/` pasa de 31 a 16 artículos.

---

### 2. Fix Canibalización de Keywords — Apps

**Archivos modificados**:

- `src/content/blog/metodos/apps-ingles-gratuitas-vs-pago.md`
  - Keywords reducidas a intención "gratis vs pago": `apps para aprender ingles gratis`, `duolingo gratis vs premium`
  - Eliminadas keywords compartidas con `apps-vs-cursos-ingles.md`

- `src/content/blog/metodos/apps-vs-cursos-ingles.md`
  - Keywords diferenciadas a intención "academia vs app": `academia ingles online vs app`, `aprender ingles C1`, `mejor metodo ingles`
  - Eliminadas keywords duplicadas

- `src/content/blog/metodos/mejor-app-aprender-ingles.md` mantiene las keywords principales de alta competencia.

---

### 3. Fix robots.ts — Allows Explícitos

**Archivo modificado**: `src/app/robots.ts`

Añadidas al array `allow` las páginas SEO pillar que no estaban explícitamente permitidas:
- `/aprender-ingles`
- `/aplicaciones-para-aprender-ingles`
- `/certificaciones-ingles-oficiales`
- `/frases-en-ingles/`
- `/planes`
- `/test-nivel`
- `/contacto`
- `/herramientas/`

---

### 4. Fix layout.tsx — Eliminación de setInterval Bloqueante

**Archivo modificado**: `src/app/layout.tsx`

Eliminado el bloque `setInterval` con `checkDevTools` que ejecutaba `console.clear()` cada 1 segundo. Este intervalo degradaba el INP (Interaction to Next Paint), métrica Core Web Vitals usada por Google como factor de ranking. Se mantuvieron las protecciones básicas (contextmenu, atajos de teclado).

---

## Verificaciones Completadas

- ✅ `npm run build` — build exitoso, rutas `/blog/gramatica/[slug]` generadas correctamente
- ✅ `npm run lint` — sin errores
- ✅ Categorías en los 15 archivos corregidas de `metodos` a `gramatica`
- ✅ Canonicals que apuntaban a 404 ahora resuelven a páginas reales
- ✅ Sitemap actualizado automáticamente con las nuevas URLs `/blog/gramatica/`
- ✅ Keywords de canibalización apps diferenciadas por intención de búsqueda
- ✅ robots.txt ampliado con páginas pillar explícitas
- ✅ setInterval eliminado de layout.tsx

---

## Impacto Esperado

| Métrica | Antes | Después (estimado 4-8 semanas) |
|---------|-------|------|
| Artículos indexados (gramática) | ~0 (canonical → 404) | ~15 |
| Impresiones/día | ~10 | ~200-500+ |
| Canibalización apps | Alta | Baja |
| Core Web Vitals (INP) | Degradado por setInterval | Mejorado |

---

## Próximos Pasos (Acción Manual Requerida)

### Inmediato (esta semana)
1. **Desplegar los cambios a producción** — todos los fixes están listos en esta rama
2. **Resubmit del Sitemap en Google Search Console**:
   - Ir a GSC → Sitemaps → Enviar `https://www.focus-on-english.com/sitemap.xml`
   - Esto acelera el re-rastreo de las 15 URLs de gramática corregidas
3. **Solicitar indexación manual** en GSC para los artículos con canonical rota:
   - Usar "Inspeccionar URL" → "Solicitar indexación" para cada uno de los 6 artículos que tenían canonical → 404

### Corto plazo (próximas 2 semanas)
4. **Monitorear en GSC**:
   - Coverage report: verificar que las URLs `/blog/gramatica/` pasan de "Error" a "Válida"
   - Impresiones: debería empezar a subir gradualmente
5. **Revisar canibalización de Reported Speech** (no corregida en este sprint):
   - 5 artículos + 1 hub compiten por "reported speech inglés"
   - Recomendación: definir `reported-speech-guia-uso.md` como pillar y añadir internal linking hub-and-spoke
6. **Revisar hubs duplicados**:
   - `entrevista-de-trabajo-en-ingles.md` y `entrevista-trabajo-ingles.md` — consolidar en uno
   - `emails-profesionales-ingles.md` hub + 2 artículos de trabajo — consolidar o diferenciar

### Monitoreo (4-8 semanas)
7. **Google necesita tiempo** para re-rastrear, procesar y re-rankear. Esperar resultados visibles en impresiones entre 4-8 semanas post-despliegue
8. **OG Image** (mejora menor): Reemplazar la imagen de Pexels en `layout.tsx` por una imagen branded alojada en el propio dominio

---

## Archivos Modificados (Resumen)

```
src/content/blog/gramatica/condicionales-ingles-guia-completa.md
src/content/blog/gramatica/gramatica-ingles-b1-guia.md
src/content/blog/gramatica/guia-maestra-reported-speech.md
src/content/blog/gramatica/passive-reporting-verbs-guia-avanzada.md
src/content/blog/gramatica/phrasal-verbs-guia-b2.md
src/content/blog/gramatica/preposiciones-movimiento-ingles.md
src/content/blog/gramatica/present-perfect-vs-past-simple.md
src/content/blog/gramatica/relative-clauses-guia-definitiva.md
src/content/blog/gramatica/reported-speech-ejercicios-pdf.md
src/content/blog/gramatica/reported-speech-guia-uso.md
src/content/blog/gramatica/reported-speech-questions-commands.md
src/content/blog/gramatica/reporting-verbs-patterns-list.md
src/content/blog/gramatica/verbos-modales-ingles-guia.md
src/content/blog/gramatica/voz-pasiva-avanzada-guia.md
src/content/blog/gramatica/voz-pasiva-ingles-guia.md
src/content/blog/metodos/apps-ingles-gratuitas-vs-pago.md
src/content/blog/metodos/apps-vs-cursos-ingles.md
src/app/robots.ts
src/app/layout.tsx
```
