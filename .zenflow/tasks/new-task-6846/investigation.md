# Investigation: URLs con 0 Impresiones el 1-2 de Marzo

## Bug Summary

Las URLs en Google Search Console tenían cientos/miles de impresiones antes y empezaron a caer **a partir del 27 de febrero**, llegando a 0 el 1-2 de marzo. Tras analizar el histórico de commits, se identificaron **causas raíz** distintas que explican la caída gradual (Feb 27) y la caída total (Mar 1-2).

---

## Cronología de la caída

### Feb 27: Inicio de la caída gradual
**Causa probable**: Inestabilidad de deploys acumulada desde el 23 de febrero.

- **Feb 23 `ca87e6f7`** — "platform simplification": Se eliminaron muchas páginas (`/dashboard`, `/practica-ia`, `/practica-inteligente`, `/profile`, etc.). Google empieza a procesar estos cambios 2-4 días después → **aprox. Feb 27**.
- **Feb 28 `77df45c8`** — "Fix: remove .bak file causing Vercel build failure": Un archivo `.bak` roto causó que el **build de Vercel fallara**. Esto significa que el sitio podría haber estado sirviendo una versión antigua o dando errores durante horas.
- **Feb 28-Mar 1**: Múltiples deploys de mejoras visuales (Duolingo-style) con muchos commits seguidos, indicando inestabilidad general.

### Mar 2: Caída total a 0 impresiones en TODAS las URLs
**Causa confirmada**: Inestabilidad masiva de deploy + cambios críticos en categorías/redirects.

- Mínimo 7 commits de "fix deploy" entre 09:31-15:43: el sitio estuvo **inaccesible o con errores** durante horas.
- A las 19:02 (`54bf002e`): Cambio de frontmatter `category: metodos` → `category: gramatica` en 15 artículos → las URLs indexadas en `/blog/metodos/[slug]` devuelven **404**.
- A las 19:28 (`9941f816`): Eliminados los redirects de `gramatica→metodos` **sin añadir los inversos** (`metodos→gramatica`) → 404 permanentes en URLs indexadas por Google.

---

## Root Cause Analysis

### Causa 1: Redirecciones 301 (la URL origen nunca genera impresiones en GSC)

GSC registra impresiones en la URL **destino**, no en el origen del redirect. Estas URLs siempre tendrán 0 impresiones:

| URL origen | Destino 301 |
|------------|-------------|
| `/blog/Gramática/voz-pasiva-ingles-guia` | `/blog/gramatica/voz-pasiva-ingles-guia` |
| `/blog/Gramática/reported-speech-guia-uso` | `/blog/gramatica/reported-speech-guia-uso` |
| `/blog/Gramática/verbos-modales-ingles-guia` | `/blog/gramatica/verbos-modales-ingles-guia` |
| `/blog/Habilidades/reglas-pronunciacion-ingles` | `/blog/metodos/reglas-pronunciacion-ingles` |
| `/blog/Vocabulario/vocabulario-ropa-ingles` | `/blog/metodos/vocabulario-ropa-ingles` |
| `/curso-ingles-c2` | `/blog/metodos/ingles-c2` |
| `/curso-ingles-c1` | `/blog/metodos/ingles-c1` |
| `/curso-ingles-para-ingenieros` | `/blog/trabajo/ingles-para-ingenieros` |
| `https://focus-on-english.com/` (no-www) | `https://www.focus-on-english.com/` |

Estos redirects están correctamente configurados en `next.config.js`. No hay bug per se, pero si estas URLs aparecen en GSC con 0 impresiones, es el comportamiento esperado.

---

### Causa 2: 15 URLs devuelven 404 — Faltan redirecciones 301 (CAUSA PRINCIPAL)

El commit `54bf002e` (Mar 2, 19:02) cambió el frontmatter `category: metodos` → `category: gramatica` en **15 artículos** del directorio `src/content/blog/gramatica/`. El commit `9941f816` (Mar 2, 19:28) eliminó los redirects `gramatica→metodos` sin añadir los inversos `metodos→gramatica`. Resultado: **15 URLs indexadas por Google devuelven ahora 404 permanente** sin redirect.

| URL (404 permanente) | Archivo real | 
|----------------------|--------------|
| `/blog/metodos/condicionales-ingles-guia-completa` | `gramatica/condicionales-ingles-guia-completa.md` |
| `/blog/metodos/gramatica-ingles-b1-guia` | `gramatica/gramatica-ingles-b1-guia.md` |
| `/blog/metodos/guia-maestra-reported-speech` | `gramatica/guia-maestra-reported-speech.md` |
| `/blog/metodos/passive-reporting-verbs-guia-avanzada` | `gramatica/passive-reporting-verbs-guia-avanzada.md` |
| `/blog/metodos/phrasal-verbs-guia-b2` | `gramatica/phrasal-verbs-guia-b2.md` |
| `/blog/metodos/preposiciones-movimiento-ingles` | `gramatica/preposiciones-movimiento-ingles.md` |
| `/blog/metodos/present-perfect-vs-past-simple` | `gramatica/present-perfect-vs-past-simple.md` |
| `/blog/metodos/relative-clauses-guia-definitiva` | `gramatica/relative-clauses-guia-definitiva.md` |
| `/blog/metodos/reported-speech-ejercicios-pdf` | `gramatica/reported-speech-ejercicios-pdf.md` |
| `/blog/metodos/reported-speech-guia-uso` | `gramatica/reported-speech-guia-uso.md` |
| `/blog/metodos/reported-speech-questions-commands` | `gramatica/reported-speech-questions-commands.md` |
| `/blog/metodos/reporting-verbs-patterns-list` | `gramatica/reporting-verbs-patterns-list.md` |
| `/blog/metodos/verbos-modales-ingles-guia` | `gramatica/verbos-modales-ingles-guia.md` |
| `/blog/metodos/voz-pasiva-avanzada-guia` | `gramatica/voz-pasiva-avanzada-guia.md` |
| `/blog/metodos/voz-pasiva-ingles-guia` | `gramatica/voz-pasiva-ingles-guia.md` |

**Bug adicional**: El redirect existente `/curso-ingles-gramatica-ingles-b1-guia` → `/blog/metodos/gramatica-ingles-b1-guia` apunta a una URL que ahora es 404. Hay que actualizar su destino a `/blog/gramatica/gramatica-ingles-b1-guia`.

**Otro problema encontrado**: También hay URLs que tienen redirects en `next.config.js` pero **el destino es incorrecto o genérico** (redirigen a una categoría en vez del artículo específico):

| URL | Redirect actual | Debería redirigir a |
|-----|----------------|---------------------|
| `/blog/trabajo/cv-ingles-guia` | `/blog/trabajo/ingles-para-trabajo` | `/blog/trabajo/cv-ingles` |
| `/blog/viajes/ingles-restaurantes-guia` | `/blog/viajes/ingles-para-viajar` | Artículo específico o mantener |
| `/blog/viajes/inmigracion-ingles-guia` | `/blog/viajes/ingles-para-viajar` | Artículo específico o mantener |
| `/blog/trabajo/negociaciones-ingles-guia` | `/blog/trabajo/negociacion-ingles-tecnicas-clave` | ✓ OK |
| `/blog/trabajo/presentaciones-ingles-guia` | `/blog/trabajo/como-hacer-presentaciones-en-ingles` | ✓ OK |
| `/blog/examenes/cambridge-b2-first-guia` | `/blog/examenes/cambridge-b2-first-estrategias-aprobar` | ✓ OK |

---

### Causa 3: Páginas `/blog/temas/[keyword]` con `noindex` por hub content

En `src/app/blog/temas/[keyword]/page.tsx` (línea 44):
```ts
robots: {
  index: hubContent ? false : true,
  follow: true,
},
```

Cuando existe un archivo en `src/content/hubs/` con el mismo nombre, la página `/blog/temas/[keyword]` se pone en **noindex**, por lo que Google no la indexa y no genera impresiones.

URLs afectadas que tienen hub content (→ noindex):

| URL | Hub file |
|-----|----------|
| `/blog/temas/ejercicios-condicionales-ingles` | `hubs/ejercicios-condicionales-ingles.md` |
| `/blog/temas/reported-speech` | `hubs/reported-speech.md` |
| `/blog/temas/ingles-para-ligar-y-citas` | `hubs/ingles-para-ligar-y-citas.md` |
| `/blog/temas/ingles-para-atencion-al-cliente` | `hubs/ingles-para-atencion-al-cliente.md` |
| `/blog/temas/verbos-modales-ingles` | `hubs/verbos-modales-ingles.md` |
| `/blog/temas/ingles-americano-vs-britanico` | `hubs/ingles-americano-vs-britanico.md` |
| `/blog/temas/aptis-general-b1` | `hubs/aptis-general-b1.md` |
| `/blog/temas/presentaciones-en-ingles` | `hubs/presentaciones-en-ingles.md` |

El canonical de estas páginas también apunta a `/hubs/[keyword]`, lo que explicaría que las impresiones aparezcan en la URL del hub, no en la de temas.

URLs de temas sin hub (estas SÍ deberían indexarse si tienen artículos relacionados):
- `/blog/temas/ia-aprender-ingles`
- `/blog/temas/nivel-ingles-a2`
- `/blog/temas/nivel-ingles-a1`
- `/blog/temas/practicar-speaking-b1-solo`
- `/blog/temas/use-of-english-c1-tips`

---

### Causa 4: URLs normales de blog/página que probablemente funcionan bien

Estas URLs deberían estar bien indexadas (contenido existe, no hay redirect, no hay noindex):
- `/blog/metodos/mejor-app-aprender-ingles` ✓
- `/blog/examenes/precios-examenes-cambridge` ✓
- `/blog/trabajo/vocabulario-b1-ingles-trabajo` ✓
- `/blog/trabajo/mejores-apps-ingles-trabajo` ✓
- `/blog/metodos/reglas-pronunciacion-ingles` ✓
- `/blog/metodos/cursos-online-ingles-b1` ✓
- `/blog/metodos/apps-ingles-gratuitas-vs-pago` ✓
- `/blog/metodos/ingles-a1` ✓
- `/blog/metodos/ingles-c2` ✓
- `/blog/trabajo/ingles-para-ingenieros` ✓
- `/blog/trabajo/linkedin-ingles-guia` ✓
- `/blog/trabajo/ingles-networking-eventos-internacionales` ✓
- `/blog/trabajo/ingles-para-atencion-al-cliente` ✓
- `/blog/examenes/trucos-writing-c1-advanced` ✓
- `/blog/viajes/curso-de-ingles-para-viajar` ✓
- `/blog/examenes/reported-speech-cambridge-exams` ✓
- `/blog/examenes/aptis-a2-guia-completa` ✓
- `/blog/examenes/preparar-b1-cambridge-por-cuenta-propia` ✓
- `/` ✓
- `/blog` ✓
- `/blog/metodos` ✓ (category page)
- `/blog/viajes` ✓ (category page)
- `/contacto` ✓
- `/frases-en-ingles/amor` ✓

Para estas URLs con 0 impresiones el 1-2 de marzo, la causa probable es que son **páginas nuevas o recientemente actualizadas** que todavía no habían sido re-crawleadas por Google en esas fechas.

---

## Affected Components

1. `next.config.js` — redirects configuration
2. `src/app/blog/temas/[keyword]/page.tsx` — noindex logic for hub pages
3. `src/content/blog/metodos/` — missing files (verbos-modales, reporting-verbs)
4. Google Search Console data

---

## Proposed Solution

### Fix 1: Añadir 15 redirects faltantes metodos→gramatica + corregir redirect de curso

En `next.config.js`, añadir los 15 redirects:
```js
{ source: '/blog/metodos/condicionales-ingles-guia-completa', destination: '/blog/gramatica/condicionales-ingles-guia-completa', statusCode: 301 },
{ source: '/blog/metodos/gramatica-ingles-b1-guia', destination: '/blog/gramatica/gramatica-ingles-b1-guia', statusCode: 301 },
{ source: '/blog/metodos/guia-maestra-reported-speech', destination: '/blog/gramatica/guia-maestra-reported-speech', statusCode: 301 },
{ source: '/blog/metodos/passive-reporting-verbs-guia-avanzada', destination: '/blog/gramatica/passive-reporting-verbs-guia-avanzada', statusCode: 301 },
{ source: '/blog/metodos/phrasal-verbs-guia-b2', destination: '/blog/gramatica/phrasal-verbs-guia-b2', statusCode: 301 },
{ source: '/blog/metodos/preposiciones-movimiento-ingles', destination: '/blog/gramatica/preposiciones-movimiento-ingles', statusCode: 301 },
{ source: '/blog/metodos/present-perfect-vs-past-simple', destination: '/blog/gramatica/present-perfect-vs-past-simple', statusCode: 301 },
{ source: '/blog/metodos/relative-clauses-guia-definitiva', destination: '/blog/gramatica/relative-clauses-guia-definitiva', statusCode: 301 },
{ source: '/blog/metodos/reported-speech-ejercicios-pdf', destination: '/blog/gramatica/reported-speech-ejercicios-pdf', statusCode: 301 },
{ source: '/blog/metodos/reported-speech-guia-uso', destination: '/blog/gramatica/reported-speech-guia-uso', statusCode: 301 },
{ source: '/blog/metodos/reported-speech-questions-commands', destination: '/blog/gramatica/reported-speech-questions-commands', statusCode: 301 },
{ source: '/blog/metodos/reporting-verbs-patterns-list', destination: '/blog/gramatica/reporting-verbs-patterns-list', statusCode: 301 },
{ source: '/blog/metodos/verbos-modales-ingles-guia', destination: '/blog/gramatica/verbos-modales-ingles-guia', statusCode: 301 },
{ source: '/blog/metodos/voz-pasiva-avanzada-guia', destination: '/blog/gramatica/voz-pasiva-avanzada-guia', statusCode: 301 },
{ source: '/blog/metodos/voz-pasiva-ingles-guia', destination: '/blog/gramatica/voz-pasiva-ingles-guia', statusCode: 301 },
```

Y corregir el redirect existente del curso que apunta a una URL 404:
```js
// ANTES (apunta a 404):
{ source: '/curso-ingles-gramatica-ingles-b1-guia', destination: '/blog/metodos/gramatica-ingles-b1-guia', statusCode: 301 }
// DESPUÉS:
{ source: '/curso-ingles-gramatica-ingles-b1-guia', destination: '/blog/gramatica/gramatica-ingles-b1-guia', statusCode: 301 }
```

### Fix 2: Corregir redirect de cv-ingles-guia

El redirect actual manda a `/blog/trabajo/ingles-para-trabajo` (demasiado genérico). Debería ir al artículo específico:
```js
{
  source: '/blog/trabajo/cv-ingles-guia',
  destination: '/blog/trabajo/cv-ingles', // artículo específico
  statusCode: 301,
},
```

### Fix 3 (Opcional): Decidir estrategia para páginas /blog/temas/ con hub

Actualmente, cuando existe hub content, `/blog/temas/[keyword]` es noindex y el canonical apunta a `/hubs/[keyword]`. Verificar que las páginas `/hubs/[keyword]` estén en el sitemap y se indexen correctamente. Si no, cambiar la estrategia para que las impresiones se consoliden en una sola URL.

### Fix 4: Las URLs de contenido nuevo (sin impresiones por ser nuevas)

No requieren acción de código — Google las indexará con el siguiente crawl.

---

## Implementation Notes

**Fixes already applied before this session (in `next.config.js`):**
- Fix 1: Los 15 redirects `metodos→gramatica` ya estaban implementados (líneas 47-61).
- Fix 1 (curso): `/curso-ingles-gramatica-ingles-b1-guia` ya apuntaba a `/blog/gramatica/gramatica-ingles-b1-guia`.

**Fix applied in this session:**
- Fix 2: Corregido redirect `/blog/trabajo/cv-ingles-guia` → `/blog/trabajo/cv-ingles` (antes apuntaba a `/blog/trabajo/ingles-para-trabajo`, que es demasiado genérico). El artículo `/src/content/blog/trabajo/cv-ingles.md` existe y es el destino correcto.
