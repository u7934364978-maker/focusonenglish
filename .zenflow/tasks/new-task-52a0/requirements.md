# PRD: Creación de 30 Artículos de Cluster para 3 Hubs de Pronunciación y Fonética

## Contexto del Proyecto

El sitio **Focus English** es una plataforma de aprendizaje de inglés para hispanohablantes construida con Next.js. El contenido se organiza en:
- **Hubs** (`src/content/hubs/`): páginas pilar que agrupan artículos de cluster
- **Artículos de cluster** (`src/content/blog/{category}/`): artículos de apoyo con enlace al hub

Los hubs de pronunciación/fonética están subdesarrollados comparados con `mejores-apps-ingles-gratis` (que tiene 10 artículos de cluster). El objetivo es llevar los 3 hubs afectados al mismo nivel.

---

## Estado Actual

| Hub | Artículos de cluster actuales | Artículos a crear |
|-----|-------------------------------|-------------------|
| `fonetica-inglesa-basica` | 1 (`gramatica/fonetica-inglesa-basica.md`) | 9 nuevos |
| `pronunciacion-ingles-guia-completa` | 1 (`gramatica/pronunciacion-ingles-guia-completa.md`) | 9 nuevos |
| `acentos-ingles-diferencias` | 0 (hay 2 huérfanos sin enlace al hub) | 10 nuevos |

**Artículos huérfanos** (existen pero no enlazan a ningún hub):
- `metodos/reglas-pronunciacion-ingles.md` → relacionado con `pronunciacion-ingles-guia-completa`
- `metodos/acentos-ingles-diferencias.md` → relacionado con `acentos-ingles-diferencias`

---

## Objetivos

1. Crear **10 artículos de cluster por hub** (30 artículos en total)
2. Cada artículo: ~1500 palabras, tono natural y humano
3. Formato consistente con los artículos existentes (frontmatter + markdown)
4. Los artículos deben enlazar al hub correspondiente y entre sí cuando sea relevante
5. Actualizar los hubs para que incluyan los enlaces a todos sus artículos de cluster

---

## Especificaciones de Contenido

### Requisitos generales por artículo
- **Longitud**: ~1500 palabras (sin mencionar la extensión en el texto)
- **Tono**: conversacional, natural, con voz propia. Evitar construcciones formulaicas de IA
- **Estructura**: introducción, secciones con h2/h3, tablas cuando proceda, conclusión
- **Frontmatter obligatorio**: title, description, readTime, excerpt, keywords, author, date, updatedDate, image (Pexels URL), category, faqs (2-4 preguntas)
- **Autores** (alternar): `sara-mendez`, `david-torres`
- **Fechas**: entre `2026-02-01` y `2026-03-10`

---

## Plan de Artículos por Hub

### Hub 1: `fonetica-inglesa-basica`
Categoría predominante: `gramatica`

| Nº | Slug | Título |
|----|------|--------|
| 1 | `gramatica/schwa-ingles-sonido-clave.md` | La Schwa en Inglés: el Sonido más Importante del Inglés |
| 2 | `gramatica/vocales-cortas-largas-ingles.md` | Vocales Cortas y Largas en Inglés: Cómo Distinguirlas |
| 3 | `gramatica/consonantes-th-ingles.md` | El Sonido TH en Inglés: Cómo Pronunciarlo Correctamente |
| 4 | `gramatica/diptongos-ingles-lista-completa.md` | Los 8 Diptongos del Inglés: Guía con Ejemplos |
| 5 | `gramatica/word-stress-ingles-reglas.md` | Word Stress en Inglés: Reglas del Acento Tónico |
| 6 | `gramatica/pares-minimos-ingles.md` | Pares Mínimos en Inglés: Ejercicios para Afinar el Oído |
| 7 | `gramatica/letras-mudas-ingles-lista.md` | Letras Mudas en Inglés: Lista Completa y Reglas |
| 8 | `gramatica/ipa-ingles-como-leer.md` | Cómo Leer la Transcripción Fonética IPA en Inglés |
| 9 | `gramatica/silabas-ingles-division.md` | División Silábica en Inglés: Reglas y Patrones |

### Hub 2: `pronunciacion-ingles-guia-completa`
Categoría predominante: `gramatica` y `metodos`

| Nº | Slug | Título |
|----|------|--------|
| 1 | `gramatica/connected-speech-ingles.md` | Connected Speech en Inglés: Linking, Elision e Intrusión |
| 2 | `gramatica/entonacion-ingles.md` | Entonación en Inglés: Patrones y Diferencias con el Español |
| 3 | `gramatica/ritmo-ingles-stress-timed.md` | El Ritmo del Inglés: Por qué Suena tan Diferente al Español |
| 4 | `metodos/shadowing-tecnica-ingles.md` | Shadowing: la Técnica para Sonar como un Nativo en Inglés |
| 5 | `gramatica/reduccion-vocales-ingles.md` | Reducción Vocálica en Inglés: Cuándo y Por qué las Vocales Cambian |
| 6 | `metodos/ejercicios-pronunciacion-ingles.md` | Ejercicios de Pronunciación en Inglés para Hispanohablantes |
| 7 | `gramatica/pronunciacion-r-ingles.md` | La R en Inglés: Pronunciación Americana vs Británica |
| 8 | `metodos/como-mejorar-acento-ingles.md` | Cómo Mejorar el Acento en Inglés: Métodos con Resultados Reales |
| 9 | `gramatica/pronunciacion-terminaciones-ingles.md` | Pronunciación de las Terminaciones -ed, -s e -ing en Inglés |

### Hub 3: `acentos-ingles-diferencias`
Categoría predominante: `metodos`

| Nº | Slug | Título |
|----|------|--------|
| 1 | `metodos/ingles-britanico-acentos-regionales.md` | Acentos del Inglés Británico: RP, Cockney, Scouse y más |
| 2 | `metodos/general-american-acento.md` | General American: el Acento Estándar de Estados Unidos |
| 3 | `metodos/acento-ingles-australiano.md` | El Inglés Australiano: Pronunciación, Vocabulario y Quirks |
| 4 | `metodos/acento-ingles-irlandes.md` | El Inglés Irlandés: Características y Variedades Regionales |
| 5 | `metodos/cockney-acento-ingles.md` | Cockney: Historia, Pronunciación y Rhyming Slang |
| 6 | `metodos/ingles-escoces-caracteristicas.md` | El Inglés Escocés (Scots English): Fonética y Vocabulario |
| 7 | `metodos/acento-ingles-sudafricano.md` | El Inglés Sudafricano: Una Mezcla Única de Sonidos |
| 8 | `metodos/acento-canadiense-ingles.md` | El Inglés Canadiense: Diferencias Clave con el Americano |
| 9 | `metodos/como-entender-acentos-ingles.md` | Cómo Entrenar el Oído para Entender Cualquier Acento del Inglés |
| 10 | `metodos/ingles-lingua-franca-acentos.md` | El Inglés como Lengua Franca: Qué Acento Deberías Usar |

---

## Actualización de Hubs

Cada hub deberá tener una sección final tipo "Profundiza más" con enlaces a todos sus artículos de cluster, siguiendo el modelo de `mejores-apps-ingles-gratis.md`.

Los artículos huérfanos se deben enlazar en los hubs correspondientes:
- `metodos/reglas-pronunciacion-ingles.md` → añadir enlace en hub `pronunciacion-ingles-guia-completa`
- `metodos/acentos-ingles-diferencias.md` → añadir enlace en hub `acentos-ingles-diferencias`

---

## Criterios de Calidad

- **Evitar señales de IA**: no usar estructuras como "En primer lugar, en segundo lugar, en conclusión". Variar la longitud de frases. Usar contracciones, opiniones y ejemplos concretos.
- **No mencionar la extensión del artículo** en el texto.
- **Ejemplos específicos**: incluir palabras en inglés con su pronunciación/IPA cuando sea relevante.
- **Consistencia de marca**: mencionar "Focus English" de forma natural, no repetitiva.
- **Interlinking**: cada artículo debe enlazar al hub y, si procede, a 1-2 artículos relacionados del mismo hub.

---

## Archivos a Crear/Modificar

### Nuevos (30 artículos):
- 9 en `src/content/blog/gramatica/` (hub fonetica)
- 9 en `src/content/blog/gramatica/` + `metodos/` (hub pronunciacion)
- 10 en `src/content/blog/metodos/` (hub acentos)

### Modificados (3 hubs):
- `src/content/hubs/fonetica-inglesa-basica.md` — añadir sección de artículos de cluster
- `src/content/hubs/pronunciacion-ingles-guia-completa.md` — añadir sección de artículos de cluster
- `src/content/hubs/acentos-ingles-diferencias.md` — añadir sección de artículos de cluster
