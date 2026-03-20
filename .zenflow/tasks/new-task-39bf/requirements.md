# PRD: Hub "Curso Inglés" con 10 Artículos de Cluster

## Contexto

**Sitio**: focus-on-english.com — blog en español para hispanohablantes que aprenden inglés.  
**Hub objetivo**: `/hubs/curso-ingles` — página pilar para el keyword de alto volumen "curso inglés".  
**Objetivo**: Capturar tráfico orgánico del keyword "curso inglés" (y sus variaciones: "curso ingles gratis", "curso ingles online", "curso ingles para principiantes") mediante una estructura hub-and-spoke con 10 artículos de cluster.

---

## Objetivo del Negocio

Posicionar focus-on-english.com como referente para hispanohablantes que buscan un "curso de inglés" mediante:
- Una página hub que consolide la autoridad temática en el keyword "curso inglés"
- 10 artículos de cluster bien enlazados que cubran intenciones de búsqueda específicas relacionadas con cursos de inglés
- Mejora del posicionamiento orgánico en un keyword de muy alto volumen (>100k búsquedas/mes en España)

---

## Análisis del Estado Actual

### Sistema de hubs existente

El sistema de hubs ya está implementado:
- **Hub files**: `src/content/hubs/*.md` — archivos Markdown con frontmatter `title` y `description`, cuerpo libre de contenido
- **Hub page**: `src/app/hubs/[slug]/page.tsx` — renderiza el hub y muestra artículos relacionados filtrando por keyword
- **Vinculación de artículos al hub**: la página hub filtra artículos donde `slugify(keyword).includes("curso")` (primera parte del slug "curso-ingles"), mostrando todos los artículos con keywords que contengan "curso"
- **No existe** actualmente un hub `src/content/hubs/curso-ingles.md`

### Artículos existentes reutilizables como cluster

Los siguientes artículos ya existen en el blog y son directamente relevantes para el hub "curso ingles". Solo necesitan añadir "curso ingles" como keyword explícito para vincularse correctamente:

| Artículo | Slug | Categoría | Keywords actuales relevantes |
|----------|------|-----------|------------------------------|
| Inglés A1: Guía para Empezar desde Cero | `ingles-a1` | metodos | "curso inglés a1", "inglés para principiantes" |
| Nivel A2 de Inglés: Qué saber | `ingles-a2` | metodos | "curso inglés a2" |
| Cursos Online de Inglés B1 | `cursos-online-ingles-b1` | metodos | "cursos online ingles b1" |
| Curso de Inglés B2 | `ingles-b2` | metodos | "curso inglés b2" |
| Curso de Inglés C1: CAE Avanzado | `ingles-c1` | metodos | "curso ingles c1" |
| Curso de Inglés C2 | `ingles-c2` | metodos | "curso ingles c2" |
| Clases de Inglés: Guía | `clases-de-ingles-guia` | metodos | "clases de ingles", "aprender ingles rapido" |
| Apps vs. Cursos de Inglés | `apps-vs-cursos-ingles` | metodos | "apps vs cursos ingles" |

**Total artículos reutilizables: 8 de 10**

### Gap: Artículos a crear

Para completar los 10 artículos del cluster y cubrir las intenciones de búsqueda de mayor volumen aún sin artículo específico:

| Keyword objetivo | Descripción del artículo |
|-----------------|--------------------------|
| curso inglés gratis | Guía de cursos de inglés 100% gratuitos online: recursos del British Council, BBC Learning English, Duolingo y Focus English gratuito |
| curso inglés online | Guía de los mejores cursos de inglés online de pago en 2026: comparativa de plataformas, precios, metodología y a quién le conviene cada uno |

---

## Solución Propuesta

### Entregables

1. **Hub file**: `src/content/hubs/curso-ingles.md`  
   Archivo Markdown con frontmatter `title`/`description` y cuerpo de ~800-1.200 palabras que actúe como guía maestra del tema "curso inglés".

2. **Añadir keyword "curso ingles" a 8 artículos existentes**  
   Editar el campo `keywords` en el frontmatter de los 8 artículos ya existentes para incluir la keyword exacta `curso ingles` (sin acento, para que `slugify()` produzca "curso-ingles").

3. **2 artículos nuevos**:
   - `src/content/blog/metodos/curso-ingles-gratis.md`
   - `src/content/blog/metodos/curso-ingles-online.md`

### Estructura del hub

El archivo `src/content/hubs/curso-ingles.md` debe incluir:
- **Frontmatter**: `title` y `description` optimizados para SEO
- **Introducción**: qué es un curso de inglés y por qué elegir bien el método importa
- **Sección por niveles**: resumen de cada nivel MCER con enlace a cada artículo de cluster correspondiente (A1, A2, B1, B2, C1, C2)
- **Sección de formatos**: presencial vs. online vs. apps; enlace a artículos de clases y apps-vs-cursos
- **Sección gratis vs. pago**: con enlace a los dos nuevos artículos
- **CTA final**: dirección al curso online de Focus English

### Criterios de calidad para los artículos nuevos

- Mínimo 1.500 palabras de contenido útil
- Estructura H2/H3 clara + FAQs
- Frontmatter completo: `title`, `date`, `updatedDate`, `author`, `excerpt`, `description`, `category: metodos`, `readTime`, `image` (Pexels), `alt`, `keywords` (incluyendo "curso ingles"), `faqs`, `canonical`
- Enlace interno al hub `/hubs/curso-ingles` en el cuerpo del artículo
- Tono: experto pero accesible, en español, orientado a adultos hispanohablantes
- Autor: `sara-mendez`

---

## Artículos Nuevos a Crear

### Artículo 9: Curso de Inglés Gratis

**Archivo**: `src/content/blog/metodos/curso-ingles-gratis.md`  
**Slug**: `curso-ingles-gratis`  
**Keywords principales**: curso inglés gratis, aprender inglés gratis online, curso inglés gratuito, inglés gratis desde cero  
**Alcance**: Guía exhaustiva de los mejores recursos gratuitos para aprender inglés desde cero hasta B2: Focus English (plan gratuito), BBC Learning English, British Council, Duolingo, YouTube educativo, podcasts. Incluye plan de estudio de 6 meses gratuito por niveles. CTA al hub.  
**Extensión**: 2.000+ palabras

### Artículo 10: Mejores Cursos de Inglés Online

**Archivo**: `src/content/blog/metodos/curso-ingles-online.md`  
**Slug**: `curso-ingles-online`  
**Keywords principales**: curso inglés online, mejores cursos ingles online, plataformas aprender inglés online, curso inglés con certificado  
**Alcance**: Comparativa de los mejores cursos de inglés online en 2026 (gratuitos y de pago): Focus English, Babbel, Preply, ABA English, British Council, Coursera. Tabla comparativa con precio, nivel, metodología y certificación. Para quién es cada uno. CTA al hub y al artículo de cursos gratis.  
**Extensión**: 2.000+ palabras

---

## Formato de Frontmatter (artículos nuevos)

```yaml
---
title: '...'
date: '2026-03-20'
updatedDate: '2026-03-20'
author: sara-mendez
excerpt: '...'
description: '...'
category: metodos
readTime: X min
image: 'https://images.pexels.com/...'
alt: '...'
keywords:
  - curso ingles
  - curso inglés gratis / online
  - keyword2
  - keyword3
faqs:
  - question: '...'
    answer: '...'
canonical: 'https://www.focus-on-english.com/blog/metodos/SLUG'
---
```

---

## Suposiciones

- El hub file no requiere un campo `keywords` en el frontmatter (el sistema de rutas usa el nombre del archivo como keyword)
- El keyword en el frontmatter de los artículos debe ser `curso ingles` (sin acento) para que `slugify()` genere "curso-ingles" y coincida con el slug del hub
- Los artículos existentes solo necesitan añadir una keyword, no modificar el cuerpo del artículo
- Las imágenes nuevas se toman de Pexels (patrón existente en el codebase)
- Idioma: español de España, tono accesible para adultos
- Fecha de publicación de artículos nuevos: 2026-03-20
- No se crean nuevas rutas ni componentes — solo archivos `.md` y edición de frontmatter
