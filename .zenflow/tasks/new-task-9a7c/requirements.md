# PRD: Análisis de Clusters del Blog

## Contexto

El blog de Focus English utiliza un sistema de **topic clusters (hubs)** para organizar el contenido temáticamente. Cada hub es un fichero `.md` en `src/content/hubs/` que actúa como página pilar para un tema. Los artículos del blog se vinculan a estos hubs a través del campo `keywords` en su frontmatter: si un artículo tiene una keyword que, al aplicar `slugify()`, coincide exactamente con el slug del hub, aparece listado en ese hub.

El objetivo de esta tarea es **identificar qué clusters necesitan más artículos** para cubrir bien el tema.

---

## Arquitectura del sistema de clusters

- **Hubs** (`src/content/hubs/*.md`): 45 ficheros, cada uno representa un cluster temático
- **Artículos** (`src/content/blog/{category}/*.md`): 76 artículos distribuidos en 5 categorías:
  - `examenes` (14 artículos)
  - `gramatica` (20 artículos)
  - `metodos` (16 artículos)
  - `trabajo` (18 artículos)
  - `viajes` (9 artículos)
- **Vinculación**: función `getArticlesByKeyword(hubSlug)` en `src/lib/blog.ts` que compara `slugify(keyword) === slugify(hubSlug)` para cada artículo
- **Componente**: `TopicClusterLinks` en `src/components/blog/TopicClusterLinks.tsx` muestra los artículos vinculados al hub

---

## Resultado del análisis

### ❌ Clusters completamente vacíos (22 hubs) — Prioridad ALTA
Sin ningún artículo vinculado por keyword. Necesitan nuevos artículos o artículos existentes re-taggados.

| Hub | Categoría sugerida |
|-----|-------------------|
| `acentos-ingles-diferencias` | gramatica / metodos |
| `aprender-ingles-con-chatgpt` | metodos |
| `becas-solicitudes-ingles` | trabajo / examenes |
| `cv-ingles` | trabajo |
| `entrevista-trabajo-ingles` | trabajo |
| `fonetica-inglesa-basica` | gramatica / metodos |
| `guia-erasmus-estudios-extranjero` | metodos |
| `ingles-americano-vs-britanico` | metodos / gramatica |
| `ingles-en-la-cocina` | viajes / trabajo |
| `ingles-juridico-legal` | trabajo |
| `ingles-para-camareros-y-hosteleria` | viajes / trabajo |
| `ingles-para-compras` | viajes |
| `ingles-para-deportes` | metodos |
| `ingles-para-ligar-y-citas` | metodos |
| `ingles-para-marketing` | trabajo |
| `ingles-real-estate-inmobiliario` | trabajo |
| `ingles-universitario-academico` | examenes / metodos |
| `mejores-apps-ingles-gratis` | metodos |
| `mejores-libros-aprender-ingles` | metodos |
| `mejores-peliculas-series-ingles` | metodos |
| `mudarse-al-extranjero-guia-ingles` | viajes |
| `pronunciacion-ingles-guia-completa` | gramatica / metodos |

### ⚠️ Clusters con artículos relacionados pero sin keyword correcta (4 hubs) — Prioridad MEDIA (tagging gap)
Hay artículos que cubren el tema pero no tienen el keyword exacto del hub. Se puede resolver añadiendo la keyword a los artículos existentes O creando artículos nuevos bien tageados.

| Hub | Artículos existentes sin tagear |
|-----|--------------------------------|
| `phrasal-verbs` | phrasal-verbs-trabajo, phrasal-verbs-with-put, phrasal-verbs-principiantes, phrasal-verbs-with-get, phrasal-verbs-c1-avanzados, phrasal-verbs-guia-b2 |
| `reported-speech` | reported-speech-cambridge-exams, reported-speech-ejercicios-pdf, guia-maestra-reported-speech, reported-speech-guia-uso, reported-speech-questions-commands |
| `voz-pasiva-ingles` | voz-pasiva-ingles-guia, voz-pasiva-avanzada-guia |
| `present-perfect-vs-past-simple` | present-perfect-vs-past-simple |

### ⚠️ Clusters escasos (18 hubs) — Prioridad MEDIA
Solo 1-2 artículos vinculados. Necesitan más artículos para formar un cluster sólido (mínimo recomendado: 3-5).

| Hub | Artículos actuales |
|-----|-------------------|
| `aptis-general-b1` | 1 art. |
| `cambridge-english-2026` | 1 art. |
| `cultura-anglosajona` | 1 art. |
| `ejercicios-condicionales-ingles` | 1 art. |
| `emails-profesionales-ingles` | 1 art. |
| `entrevista-de-trabajo-en-ingles` | 1 art. |
| `fluidez-ingles-avanzado` | 1 art. |
| `ielts-vs-toefl-2026` | 1 art. |
| `ingles-medico` | 1 art. |
| `ingles-moderno-internet` | 1 art. |
| `ingles-para-atencion-al-cliente` | 1 art. |
| `ingles-para-ingenieros` | 1 art. |
| `slang-in-english` | 1 art. |
| `verbos-modales-ingles` | 1 art. |
| `ingles-para-viajar` | 2 art. |
| `job-interview-english` | 2 art. |
| `niveles-ingles-mcer` | 2 art. |
| `presentaciones-en-ingles` | 2 art. |

### ✅ Clusters bien cubiertos (1 hub)

| Hub | Artículos |
|-----|-----------|
| `aprender-vocabulario-ingles` | 3 art. |

---

## Resumen ejecutivo

- **44 de 45 clusters** necesitan atención
- **22 clusters** están completamente vacíos y requieren contenido nuevo
- **4 clusters** tienen contenido existente pero con un problema de tagging (fácil de arreglar)
- **18 clusters** tienen 1-2 artículos y necesitan más contenido
- Solo **1 cluster** (`aprender-vocabulario-ingles`) tiene 3+ artículos

## Recomendaciones de acción

1. **Quick wins**: Añadir el keyword exacto del hub a los artículos existentes relacionados (`phrasal-verbs`, `reported-speech`, `voz-pasiva-ingles`, `present-perfect-vs-past-simple`)
2. **Prioridad alta (trabajo/profesional)**: `cv-ingles`, `entrevista-trabajo-ingles`, `ingles-juridico-legal`, `ingles-para-marketing` — alta intención de búsqueda
3. **Prioridad alta (gramática)**: `fonetica-inglesa-basica`, `pronunciacion-ingles-guia-completa`, `ingles-americano-vs-britanico`
4. **Prioridad media (viajes/lifestyle)**: `ingles-para-compras`, `ingles-en-la-cocina`, `mudarse-al-extranjero-guia-ingles`, `ingles-para-deportes`
