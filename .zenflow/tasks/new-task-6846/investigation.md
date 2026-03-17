# Investigation: URLs con 0 Impresiones el 1-2 de Marzo

## Bug Summary

Las URLs en Google Search Console muestran 0 impresiones el 1 o 2 de marzo. Tras analizar el código, se identificaron **4 causas raíz** distintas que afectan a grupos diferentes de URLs.

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

### Causa 2: URLs que devuelven 404 — Faltan redirecciones 301

Estas URLs tienen 404 porque el archivo de contenido está en una categoría diferente y **no existe un redirect en `next.config.js`**:

| URL (404) | Archivo real existente | Categoría URL | Categoría Archivo |
|-----------|----------------------|---------------|-------------------|
| `/blog/metodos/verbos-modales-ingles-guia` | `gramatica/verbos-modales-ingles-guia.md` | `metodos` | `gramatica` |
| `/blog/metodos/reporting-verbs-patterns-list` | `gramatica/reporting-verbs-patterns-list.md` | `metodos` | `gramatica` |

**Causa**: Estos artículos fueron creados en la categoría `gramatica` (commit `1a64edd0`, `8a4e503c`) pero las URLs indexadas por Google los esperan en `metodos/`.

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

### Fix 1: Añadir redirects faltantes para URLs con categoría incorrecta

En `next.config.js`, añadir:
```js
{
  source: '/blog/metodos/verbos-modales-ingles-guia',
  destination: '/blog/gramatica/verbos-modales-ingles-guia',
  statusCode: 301,
},
{
  source: '/blog/metodos/reporting-verbs-patterns-list',
  destination: '/blog/gramatica/reporting-verbs-patterns-list',
  statusCode: 301,
},
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
