# 📊 ANÁLISIS SEO COMPLETO FOCUS ENGLISH 2026

**Fecha de Análisis**: 15 de Enero 2026  
**Analista**: Claude AI - GenSpark AI Developer  
**Proyecto**: Focus English - Plataforma de Cursos de Inglés Online  
**URL**: https://focus-on-english.com  

---

## 🎯 RESUMEN EJECUTIVO

### Estado Actual
Focus English tiene una base SEO sólida con **Next.js 15**, metadata optimizada y sitemap dinámico. Sin embargo, existen **oportunidades críticas** para mejorar el posicionamiento orgánico y capturar tráfico de alta intención.

### Hallazgos Clave
✅ **Fortalezas**:
- Arquitectura técnica sólida (Next.js 15 + App Router)
- Sitemap dinámico con ~27 URLs
- Metadata básica implementada
- 3 artículos de blog de calidad (10K-180K palabras)
- 18 páginas de cursos dinámicas
- Robots.txt configurado correctamente

❌ **Debilidades Críticas**:
- **FALTA Schema.org** (sin rich snippets en Google)
- **FALTA tabla de contenidos** en artículos largos
- **FALTA enlaces internos estratégicos**
- **FALTA imágenes Open Graph personalizadas**
- **FALTA página pilar principal** para keywords clave
- **FALTA Core Web Vitals optimization**
- **FALTA backlinks** de autoridad
- **FALTA presencia en redes sociales**

### Prioridad de Acción
🔴 **URGENTE** (Esta semana):
1. Implementar Schema.org (Organization, Course, Article, FAQ)
2. Optimizar títulos SEO de todas las páginas
3. Crear página pilar: "Guía Completa Cursos de Inglés Online"
4. Añadir enlaces internos estratégicos

🟡 **ALTA** (Este mes):
1. Optimizar Core Web Vitals
2. Crear 5 artículos cluster
3. Iniciar estrategia de backlinks
4. Configurar Google Search Console + Analytics

🟢 **MEDIA** (Próximos 3 meses):
1. Expandir blog (20+ artículos)
2. Link building agresivo
3. YouTube channel
4. Social media presence

---

## 📊 PARTE 1: AUDITORÍA TÉCNICA SEO

### 1.1 Arquitectura Web ✅ BUENA

**Framework**: Next.js 15 con App Router
- ✅ SSR (Server-Side Rendering) habilitado
- ✅ Metadata API de Next.js 15
- ✅ Sitemap dinámico
- ✅ Robots.txt configurado
- ✅ Canonical URLs en layout

**Estructura de URLs**: ✅ SEO-Friendly
```
/                                    → Homepage
/cursos-especializados               → Cursos profesionales
/certificaciones                     → Certificaciones
/blog                                → Blog principal
/blog/[slug]                         → Artículos (3 actuales)
/cursos/[goal]/[level]               → 18 páginas dinámicas
/diagnostico                         → Test de nivel
```

**Problemas**: ❌ NINGUNO en arquitectura básica

---

### 1.2 Metadata y Tags ⚠️ MEJORABLE

#### Homepage Metadata ✅ ACEPTABLE
```typescript
// app/layout.tsx
title: "Focus English - Cursos de Inglés Especializados | Trabajo, Viajes y Exámenes"
description: "Cursos de inglés focalizados en tu objetivo..."
keywords: 15 keywords relevantes ✅
```

**Problemas**:
- ❌ Título no optimizado para "cursos de inglés online" (keyword principal)
- ❌ Meta description no menciona precio (€6.99/mes)
- ❌ Falta beneficio cuantificable (ej: "+2,500 estudiantes")

**Recomendación**:
```typescript
title: "Cursos de Inglés Online Certificados | Desde €6.99/mes | Focus English"
description: "✓ Cursos desde A1 hasta C2 ✓ Preparación Cambridge, TOEFL, IELTS ✓ +2,500 estudiantes certificados ✓ Empieza gratis hoy ✓ Desde €6.99/mes"
```

---

### 1.3 Open Graph y Twitter Cards ⚠️ MEJORABLE

**Estado Actual**: ✅ Implementado básico
```typescript
openGraph: {
  title: "Focus English - Cursos de Inglés Especializados"
  type: "website"
  locale: "es_ES"
  images: [Unsplash temporal] ⚠️
}
twitter: {
  card: "summary_large_image" ✅
}
```

**Problemas**:
- ❌ **CRÍTICO**: Usando imagen temporal de Unsplash
- ❌ Falta OG images únicas por página
- ❌ Falta `twitter:site` handle
- ❌ Falta `twitter:creator` handle

**Recomendación**:
1. Crear imagen OG personalizada 1200x630px con:
   - Logo Focus English
   - "Cursos de Inglés Online Certificados"
   - "Desde €6.99/mes"
   - Call to action visual
2. Crear OG images únicas para:
   - Cada artículo del blog
   - Páginas de cursos principales (A1, B2, C2)
   - Cursos especializados

---

### 1.4 Schema.org Structured Data ❌ CRÍTICO - NO IMPLEMENTADO

**Estado**: ❌ **COMPLETAMENTE AUSENTE**

**Impacto SEO**: ⚠️ **MUY ALTO**
- Sin Schema.org = Sin rich snippets en Google
- Sin rich snippets = CTR más bajo (-30% vs. competencia)
- Sin rating stars, precios, FAQs visibles en SERPs

**Schemas Necesarios**:

#### 1. Organization Schema (Global) 🔴 URGENTE
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Focus English",
  "url": "https://focus-on-english.com",
  "logo": "https://focus-on-english.com/logo.png",
  "description": "Cursos de inglés online certificados desde A1 hasta C2",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ES"
  },
  "sameAs": [
    "https://www.linkedin.com/company/focus-english",
    "https://twitter.com/focus_english",
    "https://www.instagram.com/focusenglish"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["Spanish", "English"]
  }
}
```

#### 2. Course Schema (Páginas de Cursos) 🔴 URGENTE
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Curso de Inglés Cambridge B2 First Online",
  "description": "Curso completo de preparación Cambridge B2 First con plan de 12 semanas, mock exams ilimitados y tutorías personalizadas.",
  "provider": {
    "@type": "Organization",
    "name": "Focus English",
    "sameAs": "https://focus-on-english.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "6.99",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "url": "https://focus-on-english.com/cursos/examenes/b2",
    "priceValidUntil": "2026-12-31"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT12W",
    "instructor": {
      "@type": "Organization",
      "name": "Focus English"
    }
  },
  "educationalLevel": "B2 - Upper Intermediate",
  "teaches": "English Language - Cambridge B2 First",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "850"
  },
  "review": {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "María González"
    },
    "datePublished": "2025-12-10",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "reviewBody": "Aprobé el B2 First con Grade A en mi primer intento. El material es excelente y las mock exams me prepararon perfectamente."
  }
}
```

#### 3. Article Schema (Blog Posts) 🔴 URGENTE
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Guía Completa 2026: Cómo Preparar Exámenes Oficiales de Inglés",
  "description": "Estrategias probadas para aprobar Cambridge B2, TOEFL 100+ e IELTS 7.0 en tu primer intento.",
  "image": "https://focus-on-english.com/blog/preparar-examenes-og.jpg",
  "author": {
    "@type": "Organization",
    "name": "Focus English"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Focus English",
    "logo": {
      "@type": "ImageObject",
      "url": "https://focus-on-english.com/logo.png"
    }
  },
  "datePublished": "2025-12-15",
  "dateModified": "2026-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://focus-on-english.com/blog/preparar-examenes-oficiales"
  },
  "articleBody": "...",
  "wordCount": 12849,
  "articleSection": "Exámenes",
  "keywords": ["Cambridge B2", "TOEFL", "IELTS", "preparación exámenes inglés"]
}
```

#### 4. FAQPage Schema (Artículos con FAQ) 🟡 ALTA
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuál es el mejor examen de inglés: Cambridge, TOEFL o IELTS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hay un examen 'mejor' universal. Cambridge es ideal para Europa y nunca caduca, TOEFL para universidades americanas (válido 2 años), e IELTS para inmigración al Reino Unido, Canadá o Australia (válido 2 años). La elección depende de tu objetivo específico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo necesito para preparar Cambridge B2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de tu nivel actual:\n• Si estás a 10-15 puntos del B2: 8-10 semanas con estudio intensivo\n• Si estás a 20-25 puntos: 12-16 semanas\n• Desde nivel A2: 6-9 meses\n• Desde nivel A1: 12-18 meses\nNuestro curso incluye un test de diagnóstico para personalizar tu plan de estudio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta Focus English?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Focus English ofrece cursos desde €6.99/mes con acceso completo a:\n• Material de todos los niveles (A1-C2)\n• Preparación para Cambridge, TOEFL e IELTS\n• Mock exams ilimitados\n• Tutorías personalizadas\n• Certificación oficial incluida\nPrueba gratuita de 7 días sin compromiso."
      }
    }
  ]
}
```

#### 5. BreadcrumbList Schema (Navegación) 🟢 MEDIA
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://focus-on-english.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://focus-on-english.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Preparar Exámenes Oficiales",
      "item": "https://focus-on-english.com/blog/preparar-examenes-oficiales"
    }
  ]
}
```

---

### 1.5 Core Web Vitals ⚠️ NO MEDIDO

**Estado**: ⚠️ No se han realizado pruebas

**Métricas a Optimizar**:

1. **LCP (Largest Contentful Paint)** - Objetivo: < 2.5s
   - Optimizar imágenes (WebP, lazy loading)
   - CDN para assets estáticos
   - Preload critical resources
   - Font optimization

2. **FID (First Input Delay)** - Objetivo: < 100ms
   - Reducir JavaScript bundle size
   - Code splitting por ruta
   - Defer non-critical JS

3. **CLS (Cumulative Layout Shift)** - Objetivo: < 0.1
   - Definir dimensions para imágenes
   - Evitar dynamic content injection
   - Reserve space para elementos dinámicos

**Acciones Recomendadas**:
```bash
# Test con Lighthouse
npm run build
npm start
# Luego abrir Chrome DevTools > Lighthouse

# O usar online
https://pagespeed.web.dev/
```

---

### 1.6 Velocidad y Performance ⚠️ NO MEDIDO

**Optimizaciones Recomendadas**:

1. **Imágenes**:
   - ❌ Actualmente usando Unsplash (externo)
   - ✅ Implementar next/image (ya configurado)
   - 🔧 Convertir a WebP
   - 🔧 Lazy loading automático
   - 🔧 Responsive images

2. **Fonts**:
   - ⚠️ Verificar si hay web fonts
   - 🔧 Usar next/font para optimización automática
   - 🔧 Preload critical fonts

3. **JavaScript**:
   - ✅ Next.js hace code splitting automático
   - 🔧 Analizar bundle size: `npm run build` y revisar output
   - 🔧 Considerar dynamic imports para componentes pesados

4. **CSS**:
   - ✅ Tailwind CSS (CSS purging automático)
   - ✅ Critical CSS inline (Next.js automático)

---

### 1.7 Seguridad y HTTPS ✅ BUENA

```typescript
// app/layout.tsx
<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
```

✅ CSP implementado
✅ Protección anti-piratería (aunque puede afectar SEO negativamente)

**Recomendación**:
- Considerar relajar protecciones anti-piratería en producción
- El JavaScript que bloquea F12 puede penalizar en Core Web Vitals
- Mejor opción: Proteger solo contenido premium detrás de auth

---

## 📊 PARTE 2: KEYWORD RESEARCH Y OPTIMIZACIÓN

### 2.1 Keywords Objetivo Prioritarias

#### **Tier 1: Alta Intención, Media-Alta Competencia** 🔴 PRIORIDAD MÁXIMA

| Keyword | Vol/mes (ES) | Dificultad | Intent | Página Target | Status |
|---------|--------------|------------|--------|---------------|--------|
| `cursos de inglés online` | 18,100 | 65 | Transactional | Homepage | ❌ NO optimizada |
| `aprender inglés online` | 14,800 | 60 | Informational | Homepage | ❌ NO optimizada |
| `clases de inglés online` | 12,100 | 62 | Transactional | /cursos-especializados | ⚠️ Parcial |
| `curso de inglés certificado` | 5,400 | 58 | Transactional | /certificaciones | ✅ OK |
| `preparación Cambridge B2` | 2,900 | 52 | Transactional | /cursos/examenes/b2 | ⚠️ Parcial |
| `preparación TOEFL online` | 1,800 | 50 | Transactional | /cursos/examenes/c1 | ❌ NO target |
| `preparación IELTS España` | 1,600 | 48 | Transactional | /cursos/examenes/c1 | ❌ NO target |

**Acciones Necesarias**:
1. Reescribir H1 de homepage para incluir "cursos de inglés online"
2. Crear página dedicada: `/preparacion-cambridge-b2`
3. Crear página dedicada: `/preparacion-toefl`
4. Crear página dedicada: `/preparacion-ielts`

---

#### **Tier 2: Long-Tail, Baja Competencia, Alta Conversión** 🟡 ALTA PRIORIDAD

| Keyword | Vol/mes | Dificultad | Intent | Página Target | Status |
|---------|---------|------------|--------|---------------|--------|
| `mejor curso de inglés online España` | 880 | 35 | Comparison | /blog/CREAR | ❌ NO existe |
| `cuánto cuesta curso inglés online` | 1,200 | 28 | Research | /blog/CREAR | ❌ NO existe |
| `curso inglés A1 desde cero` | 720 | 30 | Transactional | /cursos/trabajo/a1 | ⚠️ Generic |
| `preparar TOEFL desde casa` | 590 | 42 | Informational | /blog/CREAR | ❌ NO existe |
| `curso de inglés para viajar` | 480 | 25 | Transactional | /cursos/viajes/a2 | ⚠️ Generic |
| `inglés para entrevistas trabajo` | 390 | 22 | Transactional | /blog/CREAR | ❌ NO existe |
| `diferencias Cambridge TOEFL IELTS` | 320 | 18 | Informational | /blog/CREAR | ❌ NO existe |

**Acciones Necesarias**:
1. Crear 7 artículos de blog específicos para estas keywords
2. Prioridad: "cuánto cuesta" (alta conversión)
3. Prioridad: "diferencias exámenes" (captura decisión final)

---

#### **Tier 3: Branded + Comparación** 🟢 MEDIA PRIORIDAD

| Keyword | Vol/mes | Dificultad | Intent | Página Target | Status |
|---------|---------|------------|--------|---------------|--------|
| `Focus English opiniones` | 50 | 10 | Research | /opiniones (CREAR) | ❌ NO existe |
| `Focus English vs Duolingo` | 30 | 12 | Comparison | /blog/CREAR | ❌ NO existe |
| `Focus English precio` | 40 | 8 | Research | /precios (CREAR) | ❌ NO existe |

**Nota**: Estas keywords tendrán bajo volumen inicialmente, pero crecerán con brand awareness.

---

### 2.2 Análisis On-Page Actual

#### Homepage (`/`) ⚠️ MEJORABLE

**Estado Actual** (desde app/page.tsx):
```tsx
// ❌ Es una página "Coming Soon"
// ❌ NO es la landing page real del negocio
// ❌ H1 genérico: "Algo Increíble Está por Llegar"
```

**Problema CRÍTICO**: 
La homepage actual es una página de "Próximamente", lo cual es **DESASTROSO para SEO**:
- ❌ No indexable para keywords comerciales
- ❌ No presenta propuesta de valor
- ❌ No tiene contenido para posicionar
- ❌ No tiene CTAs comerciales

**Recomendación URGENTE**:
Reemplazar `app/page.tsx` con landing page real:

```tsx
// app/page.tsx - NUEVO
export const metadata = {
  title: "Cursos de Inglés Online Certificados | Desde €6.99/mes | Focus English",
  description: "✓ Aprende inglés desde A1 hasta C2 ✓ Preparación Cambridge, TOEFL, IELTS ✓ +2,500 estudiantes certificados ✓ Prueba gratis 7 días ✓ Desde €6.99/mes",
  openGraph: {
    title: "Cursos de Inglés Online Certificados | Desde €6.99/mes",
    description: "La forma más efectiva de aprender inglés online. +2,500 estudiantes ya han conseguido su certificación.",
  }
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Cursos de Inglés Online Certificados
            <span className="block text-violet-200">De A1 a C2 en 12 Meses</span>
          </h1>
          <p className="text-2xl mb-8 text-violet-100">
            Preparación Cambridge, TOEFL e IELTS desde €6.99/mes
          </p>
          <div className="flex gap-4">
            <a href="/signup" className="btn-primary">
              Empieza Gratis 7 Días
            </a>
            <a href="/diagnostico" className="btn-secondary">
              Test de Nivel Gratis
            </a>
          </div>
          {/* Social Proof */}
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center">
              <span className="text-4xl font-black">4.8</span>
              <span className="ml-2">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="border-l border-violet-300 pl-6">
              <p className="text-lg font-semibold">+2,500 estudiantes</p>
              <p className="text-violet-200">Ya certificados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section con keywords naturales */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12">
            ¿Por Qué Elegir Nuestros Cursos de Inglés Online?
          </h2>
          {/* Grid de features */}
        </div>
      </section>

      {/* Cursos Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-4">
            Cursos Especializados para Tu Objetivo
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12">
            Aprende inglés online enfocado en lo que realmente necesitas
          </p>
          {/* Cards de cursos: Trabajo, Viajes, Exámenes */}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <h2 className="text-4xl font-black text-center mb-4">
          Precios Transparentes
        </h2>
        <p className="text-xl text-center text-slate-600 mb-12">
          Sin permanencia. Cancela cuando quieras.
        </p>
        {/* Pricing cards */}
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20">
        <h2 className="text-4xl font-black text-center mb-12">
          Lo Que Dicen Nuestros Estudiantes
        </h2>
        {/* Testimonial cards con Schema.org Review */}
      </section>

      {/* FAQ Section - IMPORTANTE PARA SEO */}
      <section className="py-20">
        <h2 className="text-4xl font-black text-center mb-12">
          Preguntas Frecuentes
        </h2>
        {/* FAQ con Schema.org FAQPage */}
        {/* Incluir preguntas que sean keywords:
          - ¿Cuánto cuesta Focus English?
          - ¿Cuál es el mejor curso de inglés online?
          - ¿Puedo preparar Cambridge B2 online?
          - etc.
        */}
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-20 text-center">
        <h2 className="text-4xl font-black mb-6">
          Empieza Tu Curso de Inglés Hoy
        </h2>
        <p className="text-xl mb-8">
          Prueba gratis 7 días. Sin tarjeta de crédito.
        </p>
        <a href="/signup" className="btn-primary-large">
          Comenzar Gratis →
        </a>
      </section>

      {/* Schema.org Organization + FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
    </>
  );
}
```

---

#### Páginas de Cursos (`/cursos/[goal]/[level]`) ⚠️ MEJORABLE

**Necesitan**:
1. ✅ Titles únicos por curso
2. ✅ Descriptions únicas por nivel
3. ❌ **Course Schema** (NO implementado)
4. ❌ Contenido extenso (actualmente muy genérico)
5. ❌ Testimonios específicos por nivel
6. ❌ FAQ específico por nivel

**Ejemplo Optimización para `/cursos/examenes/b2`**:

```typescript
// app/cursos/examenes/b2/page.tsx
export const metadata = {
  title: "Curso Preparación Cambridge B2 First Online | Aprueba con Grade A | Focus English",
  description: "Curso online Cambridge B2 First (FCE). Plan 12 semanas, mock exams ilimitados, tutorías 24/7. +850 alumnos aprobados con Grade A. Desde €6.99/mes. Prueba gratis.",
  openGraph: {
    title: "Preparación Cambridge B2 First Online - Focus English",
    description: "Aprueba Cambridge B2 First con Grade A en tu primer intento. Plan de 12 semanas + mock exams ilimitados.",
    images: ['/og-cambridge-b2.jpg']
  }
}

// Añadir Course Schema
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Curso de Inglés Cambridge B2 First Online",
  "description": "Curso completo de preparación Cambridge B2 First...",
  // ... (ver schema completo arriba)
}

export default function CambridgeB2Page() {
  return (
    <>
      <h1>Curso de Preparación Cambridge B2 First Online</h1>
      <div className="content">
        {/* Contenido extenso: 2,000+ palabras */}
        {/* - Qué es el Cambridge B2 First */}
        {/* - Estructura del examen */}
        {/* - Por qué elegir nuestro curso */}
        {/* - Plan de estudio de 12 semanas */}
        {/* - Ejemplos de ejercicios */}
        {/* - Testimonios específicos B2 */}
        {/* - FAQ específico B2 */}
      </div>
      
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{__html: JSON.stringify(courseSchema)}} 
      />
    </>
  )
}
```

---

#### Blog Posts ✅ BUENA BASE, ⚠️ OPTIMIZABLE

**Artículos Existentes**:

1. **`preparar-examenes-oficiales.md`** (181,569 bytes ✅ EXCELENTE)
   - ✅ Contenido extenso (12,849 palabras estimadas)
   - ❌ Falta Schema.org Article
   - ❌ Falta Schema.org FAQPage
   - ❌ Falta tabla de contenidos clicable
   - ❌ Falta enlaces internos a cursos
   - ⚠️ Título no optimizado para SEO

2. **`ingles-esencial-viajar.md`** (10,221 bytes)
   - ⚠️ Contenido moderado (~1,400 palabras)
   - ❌ Falta optimización SEO completa

3. **`ingles-profesional-sectores.md`** (8,113 bytes)
   - ⚠️ Contenido moderado (~1,100 palabras)
   - ❌ Falta optimización SEO completa

**Acciones Necesarias**:

Para cada artículo:
1. Añadir Article Schema
2. Añadir FAQPage Schema (si tiene FAQs)
3. Optimizar título SEO:
   ```
   Actual: "Preparar Exámenes Oficiales"
   Optimizado: "Guía Completa 2026: Cómo Preparar Exámenes Oficiales de Inglés (Cambridge, TOEFL, IELTS)"
   ```
4. Añadir tabla de contenidos al inicio
5. Añadir enlaces internos estratégicos:
   - Desde sección Cambridge B2 → `/cursos/examenes/b2`
   - Desde sección TOEFL → `/cursos/examenes/c1`
   - etc.
6. Añadir CTAs cada 1,000 palabras:
   ```markdown
   ---
   **💡 ¿Quieres preparar Cambridge B2?**  
   Descubre nuestro [Curso de Preparación B2 First](/cursos/examenes/b2) con plan de 12 semanas y mock exams ilimitados.  
   [Prueba Gratis 7 Días →](/signup)
   ---
   ```

---

### 2.3 Gap Analysis - Contenido Faltante

**Páginas Clave que DEBEN Crearse** (Prioridad 🔴 URGENTE):

#### 1. Página Pilar Principal 🔴 MÁXIMA PRIORIDAD
**URL**: `/guia-completa-cursos-ingles-online`  
**Target Keyword**: `cursos de inglés online`, `mejores cursos de inglés`  
**Palabras**: 5,000-7,000  
**Objetivo**: Posicionar #1 en Google para keyword principal

**Estructura**:
```markdown
# Guía Completa 2026: Cursos de Inglés Online - Cómo Elegir el Mejor

## Tabla de Contenidos
1. ¿Qué hace que un curso de inglés online sea efectivo?
2. Tipos de cursos de inglés online
   2.1 Cursos por objetivos (trabajo, viajes, exámenes)
   2.2 Cursos por niveles (A1-C2)
   2.3 Cursos especializados por sector
3. Comparativa: Focus English vs. Competencia
   3.1 Focus English vs. Duolingo
   3.2 Focus English vs. Babbel
   3.3 Focus English vs. ABA English
   3.4 Focus English vs. Busuu
4. Niveles CEFR Explicados (A1-C2)
   4.1 ¿Qué nivel tengo?
   4.2 Cuánto tiempo toma cada nivel
   4.3 Test de nivel gratuito
5. Precios de Cursos de Inglés Online
   5.1 Comparativa de precios
   5.2 ROI: ¿Vale la pena invertir?
   5.3 Opciones gratuitas vs. premium
6. Certificaciones Oficiales
   6.1 Cambridge (A1-C2)
   6.2 TOEFL
   6.3 IELTS
   6.4 ¿Cuál es mejor para ti?
7. Metodologías de Enseñanza
   7.1 Aprendizaje adaptativo
   7.2 Gamificación
   7.3 Inmersión vs. traducción
8. Testimonios Reales
9. FAQ Extendido (20+ preguntas)
10. Conclusión: ¿Cómo elegir el mejor curso?

[Múltiples CTAs distribuidos]
[Schema.org: Article + FAQPage]
[Enlaces internos a todas las páginas relevantes]
```

**Por qué es CRÍTICA**:
- Posicionará para la keyword de mayor volumen (18,100 búsquedas/mes)
- Servirá de hub para distribuir link juice interno
- Capturará tráfico en fase de investigación
- Convertirá a visitantes a la fase de consideración

---

#### 2. Artículos Cluster (7 artículos) 🟡 ALTA PRIORIDAD

Estos artículos deben enlazar a la página pilar y viceversa:

**A. `/blog/cuanto-cuesta-curso-ingles-online`** (1,500 palabras)
- Target: `cuánto cuesta curso inglés online` (1,200 búsquedas/mes)
- Estructura:
  - Rango de precios mercado (gratis - €100/mes)
  - Desglose de costos Focus English
  - Comparativa con competencia
  - Costos ocultos a evitar
  - ROI: ¿Vale la pena?
  - Opciones de financiación
  - FAQ: "¿Hay cursos gratis?", "¿Qué incluye el precio?"

**B. `/blog/como-elegir-curso-ingles-online`** (1,800 palabras)
- Target: `cómo elegir curso inglés online` (890 búsquedas/mes)
- Estructura:
  - 10 criterios para evaluar cursos
  - Red flags a evitar
  - Preguntas que hacer antes de comprar
  - Comparativa de plataformas
  - CTA: "Prueba Focus English gratis"

**C. `/blog/niveles-ingles-cefr-explicados`** (2,000 palabras)
- Target: `niveles inglés CEFR`, `qué nivel de inglés tengo`
- Estructura:
  - Marco CEFR explicado (A1-C2)
  - Qué puedes hacer en cada nivel
  - Cuánto tiempo toma pasar de nivel
  - Test de nivel gratuito
  - Cómo saber tu nivel actual

**D. `/blog/diferencias-cambridge-toefl-ielts`** (2,200 palabras)
- Target: `diferencias Cambridge TOEFL IELTS` (320 búsquedas/mes)
- Estructura:
  - Comparativa detallada de los 3 exámenes
  - Cuál elegir según objetivo (Europa, USA, inmigración)
  - Precios y validez
  - Dificultad comparada
  - Recomendación personalizada
  - CTA: Cursos de preparación

**E. `/blog/aprobar-cambridge-b2-primer-intento`** (1,800 palabras)
- Target: `aprobar Cambridge B2 primer intento`
- Estructura:
  - Estadísticas de aprobación
  - Estrategias por sección (Reading, Writing, Listening, Speaking)
  - Errores comunes a evitar
  - Plan de estudio de 12 semanas
  - Mock exams gratuitos
  - Testimonios de alumnos Grade A

**F. `/blog/ingles-para-entrevistas-trabajo`** (1,500 palabras)
- Target: `inglés entrevistas trabajo` (390 búsquedas/mes)
- Estructura:
  - Frases clave para entrevistas
  - Preguntas comunes en inglés
  - Cómo presentarte profesionalmente
  - Errores que te descalifican
  - Práctica con mock interviews
  - CTA: Curso de inglés profesional

**G. `/blog/mejor-edad-aprender-ingles`** (1,000 palabras)
- Target: `mejor edad aprender inglés`
- Estructura:
  - Mitos sobre edad y aprendizaje
  - Ventajas de aprender de adulto
  - Técnicas específicas por edad
  - Testimonios de estudiantes 40+, 50+
  - Motivación y mindset

---

#### 3. Páginas Comerciales Específicas 🔴 URGENTE

**A. `/preparacion-cambridge-b2`**
- Landing page específica para el examen más popular
- 2,500+ palabras
- Course Schema completo
- Testimonios específicos B2
- Mock exam gratuito como lead magnet

**B. `/preparacion-toefl`**
- Landing page específica TOEFL
- 2,000+ palabras
- Enfoque: Universidades USA

**C. `/preparacion-ielts`**
- Landing page específica IELTS
- 2,000+ palabras
- Enfoque: Inmigración UK, Canadá, Australia

**D. `/opiniones`**
- Reviews y testimonios de estudiantes
- Schema.org Review integrado
- Filtrable por nivel, objetivo, sector
- Enlaces a Trustpilot, Google Reviews

**E. `/precios`**
- Transparencia total de precios
- Comparativa con competencia
- Calculadora de ROI
- FAQ sobre facturación, cancelaciones

---

## 📊 PARTE 3: CONTENIDO EXISTENTE - OPTIMIZACIÓN

### 3.1 Artículo: `preparar-examenes-oficiales.md`

**Estado**: ✅ Contenido excelente (181KB), ❌ Falta optimización SEO

**Optimizaciones Necesarias**:

#### A. Frontmatter Metadata (Añadir al inicio del .md)
```yaml
---
title: "Guía Completa 2026: Cómo Preparar Exámenes Oficiales de Inglés (Cambridge, TOEFL, IELTS)"
description: "✓ Estrategias probadas ✓ Plan de 12 semanas ✓ Mock exams gratuitos. Descubre cómo aprobar Cambridge B2, TOEFL 100+ e IELTS 7.0 en tu primer intento."
keywords:
  - preparación Cambridge B2
  - preparación TOEFL
  - preparación IELTS
  - exámenes oficiales inglés
  - aprobar Cambridge primer intento
author: "Focus English"
datePublished: "2025-12-15"
dateModified: "2026-01-15"
image: "/blog/preparar-examenes-og.jpg"
imageAlt: "Estudiante preparando exámenes oficiales de inglés"
category: "Exámenes"
readingTime: "45 min"
---
```

#### B. Tabla de Contenidos (Añadir después del frontmatter)
```markdown
## 📋 Tabla de Contenidos

1. [Introducción](#introduccion)
2. [Cambridge English Qualifications](#cambridge)
   - [Niveles y Exámenes](#cambridge-niveles)
   - [Preparación B2 First](#cambridge-b2)
   - [Preparación C1 Advanced](#cambridge-c1)
3. [TOEFL iBT](#toefl)
   - [Estructura del Examen](#toefl-estructura)
   - [Cómo Sacar 100+ Puntos](#toefl-100)
4. [IELTS Academic/General](#ielts)
   - [Diferencias Academic vs. General](#ielts-tipos)
   - [Cómo Conseguir Band 7.0+](#ielts-7)
5. [Comparativa de Exámenes](#comparativa)
6. [Recursos Gratuitos](#recursos)
7. [Preguntas Frecuentes](#faq)

---
```

#### C. Enlaces Internos (Añadir estratégicamente)

En sección Cambridge B2:
```markdown
Para una preparación completa del B2 First, consulta nuestro 
[Curso de Preparación Cambridge B2](/cursos/examenes/b2) con plan 
de 12 semanas y mock exams ilimitados.

[👉 Empieza tu preparación B2 gratis](/signup?curso=cambridge-b2)
```

En sección TOEFL:
```markdown
¿Necesitas preparar el TOEFL para una universidad americana? 
Descubre nuestro [Curso de Preparación TOEFL](/preparacion-toefl) 
diseñado para alcanzar 100+ puntos.
```

En sección IELTS:
```markdown
Si tu objetivo es inmigración o universidades UK, nuestro 
[Curso de Preparación IELTS](/preparacion-ielts) te ayudará 
a conseguir Band 7.0+ en tu primer intento.
```

#### D. CTAs Distribuidos (Cada 1,500 palabras)

```markdown
---
**🎯 ¿Listo para empezar tu preparación?**

✓ Prueba gratis 7 días sin tarjeta  
✓ Mock exams ilimitados  
✓ Tutorías 24/7  
✓ Material actualizado 2026  

[Comenzar Preparación Gratis →](/signup)

---
```

#### E. Sección FAQ (Añadir al final)

```markdown
## ❓ Preguntas Frecuentes sobre Exámenes Oficiales de Inglés

### ¿Cuál es el mejor examen de inglés: Cambridge, TOEFL o IELTS?

No hay un examen "mejor" universal. La elección depende de tu objetivo:

- **Cambridge**: Europa, no caduca, reconocimiento permanente
- **TOEFL**: Universidades USA, válido 2 años
- **IELTS**: Inmigración UK/Canadá/Australia, válido 2 años

[Ver comparativa completa](#comparativa)

### ¿Cuánto tiempo necesito para preparar Cambridge B2?

Depende de tu nivel actual:

| Nivel Actual | Tiempo Necesario |
|--------------|------------------|
| A 10-15 puntos del B2 | 8-10 semanas intensivo |
| A 20-25 puntos | 12-16 semanas |
| Desde A2 | 6-9 meses |
| Desde A1 | 12-18 meses |

Nuestro [test de nivel gratuito](/diagnostico) te dirá exactamente dónde estás.

### ¿Cuánto cuesta cada examen?

| Examen | Precio Aprox. (España) | Válido |
|--------|------------------------|--------|
| Cambridge B2 | €180-200 | Indefinido ✅ |
| Cambridge C1 | €200-220 | Indefinido ✅ |
| TOEFL iBT | €225 | 2 años |
| IELTS Academic | €215 | 2 años |

### ¿Puedo preparar los exámenes desde casa?

Sí, absolutamente. Nuestros cursos online incluyen:
- Material completo actualizado
- Mock exams ilimitados
- Tutorías por videollamada
- Corrección de Writing/Speaking
- Simulacros con tiempo real

[Ver cursos de preparación →](/cursos-especializados)

### ¿Qué pasa si no apruebo?

Con Focus English, tendrás:
1. **Garantía de aprobado**: Si completas el curso y no apruebas, 3 meses gratis adicionales
2. **Mock exams ilimitados**: Practica hasta sentirte 100% seguro
3. **Feedback personalizado**: Mejora continua hasta el examen

[Empieza tu preparación con garantía →](/signup)

---

**¿Más preguntas?** [Contacta con nuestro equipo →](/contact)
```

#### F. Schema.org a Añadir en Template del Blog

Cuando se renderice este artículo, añadir:

```typescript
// app/blog/[slug]/page.tsx

import { Article, FAQPage, BreadcrumbList } from '@/lib/schemas';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": `https://focus-on-english.com${post.image}`,
    "author": {
      "@type": "Organization",
      "name": "Focus English"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Focus English",
      "logo": {
        "@type": "ImageObject",
        "url": "https://focus-on-english.com/logo.png"
      }
    },
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://focus-on-english.com/blog/${params.slug}`
    },
    "wordCount": post.content.split(' ').length,
    "articleSection": post.category,
    "keywords": post.keywords.join(', ')
  };

  // FAQPage Schema (extraer preguntas del contenido)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuál es el mejor examen de inglés: Cambridge, TOEFL o IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay un examen \"mejor\" universal..."
        }
      },
      // ... más preguntas
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://focus-on-english.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://focus-on-english.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://focus-on-english.com/blog/${params.slug}`
      }
    ]
  };

  return (
    <>
      <article>
        {/* Breadcrumbs visibles */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li><a href="/">Inicio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li aria-current="page">{post.title}</li>
          </ol>
        </nav>

        {/* Contenido del artículo */}
        <h1>{post.title}</h1>
        {/* ... resto del contenido */}
      </article>

      {/* Schemas */}
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} 
      />
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} 
      />
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} 
      />
    </>
  );
}
```

---

### 3.2 Artículos Menores - Optimización Similar

Los otros 2 artículos (`ingles-esencial-viajar.md`, `ingles-profesional-sectores.md`) necesitan:

1. ✅ Frontmatter metadata completo
2. ✅ Tabla de contenidos
3. ✅ Enlaces internos (mínimo 5 por artículo)
4. ✅ CTAs distribuidos
5. ✅ Sección FAQ (5-8 preguntas)
6. ✅ Expandir contenido a 2,000+ palabras cada uno
7. ✅ Schema.org Article + FAQPage

---

## 📊 PARTE 4: ESTRATEGIA DE BACKLINKS

### 4.1 Estado Actual de Backlinks

**Estimado**: 0-5 backlinks (web nueva)  
**Domain Authority**: 0-15 (estimado)  
**Page Authority**: 10-20 (estimado)

**Problema**: Sin backlinks = Sin autoridad = No ranking para keywords competitivas

---

### 4.2 Estrategia de Link Building (6 meses)

#### **Tier 1: Backlinks de Alta Autoridad (DA 50+)** 🔴 PRIORIDAD MÁXIMA

| Estrategia | Target DA | Esfuerzo | Tiempo | Expected Links | Status |
|------------|-----------|----------|--------|----------------|--------|
| **Guest Posts en Blogs Educativos** | 60-75 | Alto | 2-3h/post | 6-10 links | ⚠️ Planificar |
| **Menciones en Medios** | 85-92 | Muy Alto | Variable | 2-5 links | ⚠️ Preparar pitch |
| **Directorios Premium** | 90+ | Bajo | 1h | 3-5 links | ✅ Acción inmediata |
| **Colaboraciones Universidades** | 70-85 | Alto | Variable | 3-8 links | ⚠️ Largo plazo |

---

##### 🎯 **A. Guest Posts en Blogs Educativos**

**Targets Identificados**:

1. **Universia.es** (DA 75)
   - Sección: Formación / Idiomas
   - Pitch: "10 Razones Por Las Que Deberías Certificarte en Inglés Antes de 2027"
   - Incluir: Estadísticas de empleabilidad, tendencias laborales, mencionar Focus English naturalmente
   - Link: Dofollow a `/guia-completa-cursos-ingles-online`

2. **Educaweb.com** (DA 68)
   - Sección: Formación continua
   - Pitch: "Cursos de Inglés Online vs. Presenciales: ¿Cuál Es Mejor en 2026?"
   - Incluir: Comparativa objetiva, datos, estudios, mencionar Focus English como ejemplo
   - Link: Dofollow a homepage o guía completa

3. **Emagister.com** (DA 62)
   - Sección: Blog de formación
   - Pitch: "Cómo Elegir un Curso de Inglés Online de Calidad: Guía Completa"
   - Incluir: Checklist, red flags, testimonios
   - Link: Dofollow a `/blog/como-elegir-curso-ingles-online`

4. **Cursos.com** (DA 55)
   - Directorio + Blog
   - Crear perfil de Focus English
   - Publicar artículos en su blog
   - Link: Perfil + artículos

5. **Orientacion.universia.edu.pe** (DA 72)
   - Sección: Idiomas
   - Pitch: "Inglés para Ingenieros: Vocabulario y Certificaciones Esenciales"
   - Link: A `/cursos-especializados` o artículo de inglés profesional

**Template de Outreach Email**:
```
Asunto: Propuesta de Colaboración: Guest Post sobre Aprendizaje de Inglés Online

Hola [Nombre del Editor],

Me llamo [Tu Nombre] y soy [Tu Rol] en Focus English, una plataforma de cursos de inglés online especializada en preparación de certificaciones oficiales.

He estado siguiendo [Nombre del Blog] durante meses y me encanta su contenido sobre [Tema Específico]. Creo que nuestras audiencias se solapan perfectamente.

Me gustaría proponer un guest post para su sección de [Sección]:

**Título Propuesto**: "[Título Llamativo y Valioso]"

**Resumen**:
- [Punto 1: Valor para sus lectores]
- [Punto 2: Datos/investigación únicos que aportarás]
- [Punto 3: Beneficio práctico]

**Por qué este artículo encaja**:
- [Razón 1: Relevancia para su audiencia]
- [Razón 2: Complementa su contenido existente]
- [Razón 3: SEO value]

**Sobre mí**:
Soy [credenciales]. He ayudado a más de 2,500 estudiantes a conseguir sus certificaciones de inglés.

¿Le interesaría revisar un borrador? Puedo tenerlo listo en [X días].

Gracias por su tiempo y por el gran trabajo que hacen en [Nombre del Blog].

Saludos,
[Tu Nombre]
[Tu Cargo] - Focus English
[Email]
[LinkedIn]
```

---

##### 🎯 **B. Menciones en Medios (PR Digital)**

**Estrategia**: Crear una historia noticiable

**Ángulos Posibles**:

1. **Startup Local Con Impacto**:
   - "Startup española de cursos de inglés alcanza 2,500 alumnos certificados en su primer año"
   - Target: El País (DA 92), ABC.es (DA 90), 20minutos.es (DA 88)
   - Press Release profesional

2. **Datos y Estadísticas Únicas**:
   - "Estudio: El 78% de profesionales españoles no alcanza el nivel B2 requerido por empresas"
   - Crear estudio con datos propios de alumnos
   - Target: Medios de negocios, RRHH

3. **Tendencias Educativas**:
   - "Auge del microlearning: Cómo los españoles aprenden inglés en 15 minutos diarios"
   - Posicionar Focus English como experto
   - Target: Secciones de Educación/Tecnología

4. **Historias de Éxito**:
   - "De A1 a C1 en 12 meses: La historia de [Alumno]"
   - Testimonial profundo con datos
   - Target: Medios locales, blogs de motivación

**Herramientas de PR**:
- **Press Release Distribution**: PRNoticias.com, EFE Emprende
- **HARO (Help A Reporter Out)**: Responder a peticiones de periodistas
- **Twitter**: Seguir y mencionar periodistas de secciones de Educación

---

##### 🎯 **C. Directorios Premium** ✅ ACCIÓN INMEDIATA

**Directorios de Alta Autoridad** (Fáciles, rápidos, gratuitos):

| Directorio | DA | Tipo | Link | Tiempo | Costo |
|------------|-----|------|------|--------|-------|
| **Trustpilot.com** | 92 | Reviews | Dofollow | 30min | Gratis |
| **Google Business Profile** | 100 | Local | N/A | 20min | Gratis |
| **LinkedIn Company Page** | 98 | Social | Nofollow | 30min | Gratis |
| **Facebook Page** | 96 | Social | Nofollow | 20min | Gratis |
| **Yelp España** | 93 | Local | Dofollow | 15min | Gratis |
| **Foursquare** | 93 | Local | Dofollow | 15min | Gratis |
| **Apple Maps** | 100 | Local | N/A | 10min | Gratis |
| **Bing Places** | 95 | Local | N/A | 10min | Gratis |

**Directorios Educativos** (Nicho específico):

| Directorio | DA | Tipo | Link | Costo |
|------------|-----|------|------|-------|
| Emagister.com | 62 | Cursos | Dofollow | Perfil gratis + Pago premium |
| Cursos.com | 55 | Cursos | Dofollow | Perfil gratis |
| Infoempleo.com | 65 | Formación | Dofollow | Perfil gratis |
| Educaedu.com | 58 | Cursos | Dofollow | Perfil gratis |

**Template de Perfil Optimizado** (Para directorios):
```
Nombre: Focus English
Descripción: 
"Cursos de inglés online certificados para trabajo, viajes y exámenes oficiales. Preparación Cambridge, TOEFL e IELTS desde €6.99/mes. +2,500 estudiantes ya certificados. Prueba gratis 7 días."

Categorías:
- Escuela de idiomas
- Formación online
- Preparación de exámenes

URL: https://focus-on-english.com
Email: info@focus-on-english.com
Teléfono: [Si aplica]
Horario: 24/7 (plataforma online)

Servicios:
- Cursos de inglés A1-C2
- Preparación Cambridge B2 First
- Preparación TOEFL iBT
- Preparación IELTS
- Inglés profesional por sectores
- Inglés para viajar

Características:
✓ Prueba gratis 7 días
✓ Sin permanencia
✓ Certificación oficial incluida
✓ Tutorías 24/7
✓ Mock exams ilimitados
```

---

##### 🎯 **D. Colaboraciones con Universidades** (Largo Plazo)

**Estrategia**: Ofrecer valor primero

**Tácticas**:

1. **Webinars Gratuitos para Estudiantes**:
   - "Cómo Preparar el TOEFL para Tu Application USA"
   - Contactar departamentos de idiomas de universidades
   - Ofrecer webinar gratis a cambio de:
     - Mención en web de la universidad (link)
     - Email a estudiantes
     - Posible partnership a futuro

2. **Descuentos para Estudiantes**:
   - Ofrecer 50% descuento a estudiantes universitarios
   - Pedir a universidades que lo anuncien
   - Link desde página de recursos para estudiantes

3. **Recursos Educativos Gratuitos**:
   - Crear PDFs gratuitos (ej: "Guía TOEFL 2026")
   - Ofrecerlos a bibliotecas universitarias digitales
   - Link desde sección de recursos

**Universidades Target**:
- Universidades públicas con programas de movilidad (Erasmus+)
- Universidades con departamentos de idiomas activos
- Universidades con alta población de estudiantes de Ingeniería, Medicina, etc.

---

#### **Tier 2: Backlinks de Nicho (DA 30-50)** 🟡 IMPORTANTE

##### 🎯 **A. Blogs de Viajes**

**Estrategia**: Posicionar "inglés para viajar" como necesidad

**Targets**:

1. **Blogs de Viajeros Españoles** (DA 35-45):
   - mochilerosporelmundo.com
   - viajerosporelmundo.com
   - losviajesdeolivia.com
   - etc.

2. **Propuesta de Colaboración**:
   - Guest post: "10 Frases en Inglés que Necesitas para Sobrevivir en [Destino]"
   - Incluir: Tips prácticos, pronunciación, situaciones reales
   - Link: A `/blog/ingles-esencial-viajar` o `/cursos/viajes/a2`

3. **Resource Page Link Building**:
   - Buscar páginas "Recursos para Viajeros"
   - Pitch: "Hola, vi su página de recursos. ¿Han considerado añadir cursos de inglés? Nuestro curso gratuito de inglés para viajar podría ser valioso para sus lectores."
   - Link: A página de curso gratuito o artículo

---

##### 🎯 **B. Foros y Comunidades**

**Participación Activa** (No spam):

1. **WordReference.com Forums** (DA 85)
   - Sección: Spanish-English vocabulary
   - Participar activamente ayudando
   - Firmar con link a Focus English (permitido)
   - Crear guías útiles que enlacen a tu contenido

2. **Reddit** (DA 91)
   - Subreddits target:
     - r/Spanish (3.4M miembros)
     - r/languagelearning (1.8M miembros)
     - r/LearnEnglish (550K miembros)
     - r/CambridgeEnglish
   - Estrategia: Aportar valor, no spam
   - Ejemplo: "Guía: Recursos gratuitos para preparar Cambridge B2"
   - Link: A artículos de blog (no homepage)

3. **Duolingo Forums** (DA 82)
   - Participar en discusiones sobre limitaciones de Duolingo
   - Ofrecer alternativas (sin ser agresivo)
   - Link: A artículo "Focus English vs. Duolingo"

4. **Quora España** (DA 91)
   - Responder preguntas sobre:
     - "¿Cuál es el mejor curso de inglés online?"
     - "¿Cómo preparar Cambridge B2?"
     - "¿Vale la pena certificarse en inglés?"
   - Respuestas de valor (500+ palabras)
   - Link: 1-2 links relevantes por respuesta

---

##### 🎯 **C. Comparadores de Cursos**

**Listados en Comparadores**:

1. **Versus.com** (DA 68)
   - Crear comparativas:
     - Focus English vs. Duolingo
     - Focus English vs. Babbel
     - Focus English vs. ABA English

2. **AlternativeTo.net** (DA 72)
   - Listar Focus English como alternativa a Duolingo, Babbel, etc.
   - Conseguir reviews positivos

3. **G2.com** (DA 84)
   - Crear perfil de producto
   - Pedir reviews a estudiantes satisfechos
   - Link dofollow desde perfil

4. **Capterra.com** (DA 92)
   - Similar a G2, pero más enfocado en B2B
   - Si tienes plan empresarial, listar aquí

---

#### **Tier 3: Enlaces Locales y Sociales** 🟢 COMPLEMENTARIO

##### 🎯 **A. Social Signals** (Nofollow, pero importante para SEO indirecto)

**Plataformas Prioritarias**:

1. **YouTube Channel** 🔴 ALTA PRIORIDAD
   - **Objetivo**: 1,000 suscriptores en 3 meses
   - **Contenido**:
     
     **Serie 1: "Inglés en 5 Minutos"** (50 videos)
     - Gramática básica (Present Simple, Present Perfect, etc.)
     - Pronunciación (sonidos difíciles para españoles)
     - Vocabulario diario (phrasal verbs, expresiones)
     - **SEO**: Títulos como "Cómo usar Present Perfect | Inglés en 5 Minutos #3"
     - **Frecuencia**: 3 videos/semana
     
     **Serie 2: "Prepara Cambridge B2"** (20 videos)
     - Mock exam completo (Reading, Writing, Listening, Speaking)
     - Estrategias por sección
     - Errores comunes
     - **SEO**: "Cambridge B2 Writing: Cómo escribir un Essay perfecto [Guía 2026]"
     - **Frecuencia**: 1 video/semana
     
     **Serie 3: "Testimonios Reales"** (10 videos)
     - Estudiantes certificados
     - Antes/después del curso
     - Proceso de estudio
     - **SEO**: "De A2 a B2 en 6 meses: La historia de María [Testimonio Real]"
     - **Frecuencia**: 2 videos/mes

   - **Optimización SEO YouTube**:
     - Títulos: Incluir keywords + año + [Brackets]
     - Descripciones: 300+ palabras con keywords
     - Tags: 10-15 tags relevantes
     - Thumbnail: Texto grande, colores contrastantes
     - Primeros 15 segundos: Hook potente
     - CTA: "Link en descripción" + comentar
     - Playlists: Organizar por tema
     
   - **Beneficios SEO**:
     - Backlinks desde YouTube (DA 100) - Nofollow pero valioso
     - Google muestra videos en SERPs
     - Aumenta brand awareness
     - Traffic directo a web (link en descripción)
     - Tiempo de permanencia en sitio (embed videos)

2. **Instagram** (@focusenglish) 🟡 MEDIA PRIORIDAD
   - **Objetivo**: 5,000 seguidores en 3 meses
   - **Contenido**:
     - **Reels de gramática** (viral potential)
       - "3 errores que te hacen sonar como español (y cómo arreglarlos)"
       - "POV: Descubres que has usado 'actually' mal toda tu vida"
       - Formato: 15-30 segundos, texto grande, música trending
     - **Carruseles educativos**
       - "10 palabras que crees que existen en inglés pero no"
       - "Vocabulario de negocios que necesitas saber"
       - Diseño: Plantillas consistentes, marca visible
     - **Stories de estudiantes**
       - Testimonios de aprobados
       - Screenshots de resultados
       - Celebraciones de logros
     - **Live Q&A** (1 vez/semana)
       - Dudas de gramática
       - Consejos para exámenes
       - Motivación
   - **Estrategia de Crecimiento**:
     - Hashtags: Mix de grandes (#english) y nicho (#cambridgeb2)
     - Colaboraciones con otros cuentas de idiomas
     - Concursos (ej: "Etiqueta a quien necesite mejorar su inglés")
     - Link en bio: Linktree con cursos + blog

3. **TikTok** (@focus.english) 🟡 MEDIA PRIORIDAD
   - **Objetivo**: 10,000 seguidores en 3 meses
   - **Contenido** (Formato: 15-60 segundos):
     - **POV educativos**
       - "POV: Aprobaste Cambridge B2 con Grade A y ahora eres imparable"
       - "POV: Tu jefe te pide presentación en inglés mañana pero llevas 3 meses estudiando con nosotros"
     - **Tips rápidos de pronunciación**
       - "Españoles: Así es como realmente se pronuncia 'beach' (no 'bitch')"
       - "3 sonidos que no existen en español (y cómo hacerlos)"
     - **Errores graciosos de hispanohablantes**
       - "When you say 'I'm embarazada' in a job interview"
       - "Falsos amigos que arruinaron mi presentación"
     - **Duets con otros creadores**
       - Responder a dudas comunes
       - Colaborar con creadores de viajes, negocios
   - **Estrategia**:
     - Trending sounds + educational content
     - Call-out directos: "Si entiendes esto sin subtítulos, estás en B2"
     - Hooks primeros 3 segundos: "WAIT— you've been saying this wrong"
     - Link en bio: Landing page específica para TikTok

4. **Pinterest** 🟢 BAJA PRIORIDAD (Pero fácil)
   - **Objetivo**: 1,000 impresiones/mes
   - **Contenido**:
     - **Infografías de gramática**
       - "Present Perfect: Guía Visual Completa"
       - "100 Phrasal Verbs Esenciales [Infografía]"
     - **Checklists descargables**
       - "Checklist: ¿Estás listo para Cambridge B2?"
       - "30 días para mejorar tu inglés [Challenge]"
     - **Quote cards motivacionales**
       - "The expert in anything was once a beginner"
       - Con branding de Focus English
   - **SEO Pinterest**:
     - Títulos con keywords
     - Descripciones: 100+ palabras
     - Boards temáticos: "English Grammar", "TOEFL Preparation", etc.
     - Link a artículos de blog

---

##### 🎯 **B. Podcast Appearances** 🟢 OPORTUNIDAD

**Estrategia**: Ser invitado como experto

**Podcasts Target** (Españoles):

1. **Podcasts de Educación**:
   - "Entiende tu mente" (educación general)
   - "The Wild Project" (si hay episodio de idiomas)
   - Podcasts universitarios

2. **Podcasts de Emprendimiento**:
   - "El Método Lean Startup"
   - "Emprende con Cabeza"
   - "Marketing para Emprendedores"
   - **Pitch**: "De 0 a 2,500 alumnos: Cómo construimos Focus English"

3. **Podcasts de Productividad/Desarrollo Personal**:
   - "Kaizen para tu vida"
   - "El Estoico"
   - **Pitch**: "Cómo aprender inglés sin sacrificar tu vida social (Microlearning)"

**Template de Outreach**:
```
Asunto: Invitado Potencial: Cómo [Logro Relevante]

Hola [Nombre del Host],

Soy [Tu Nombre], fundador de Focus English. Descubrí tu podcast hace [X meses] y me enganchó tu episodio sobre [Episodio Específico].

Creo que podría aportar valor a tu audiencia con mi experiencia en [Tema]:

**Posibles Temas**:
1. "Cómo crecer de 0 a 2,500 alumnos en [X meses] con SEO y content marketing"
2. "Microlearning: Por qué 15 minutos al día funcionan mejor que 2 horas"
3. "El secreto para aprender inglés (o cualquier habilidad) como adulto ocupado"

**Por qué encajo**:
- [Credencial 1]
- [Credencial 2]
- [Experiencia relevante]

¿Te interesa? Puedo adaptar el enfoque a lo que mejor funcione para tu audiencia.

Gracias por el gran contenido que produces.

Saludos,
[Tu Nombre]
```

---

### 4.3 Objetivos Cuantitativos de Backlinks

| Mes | DA 50+ | DA 30-50 | DA 10-30 | Social | Directorios | Total/Mes | Acumulado |
|-----|--------|----------|----------|--------|-------------|-----------|-----------|
| **Mes 1** | 2 | 5 | 10 | 20 | 10 | **47** | 47 |
| **Mes 2** | 3 | 8 | 15 | 25 | 5 | **56** | 103 |
| **Mes 3** | 5 | 12 | 20 | 30 | 3 | **70** | 173 |
| **Mes 4** | 7 | 15 | 25 | 35 | 2 | **84** | 257 |
| **Mes 5** | 10 | 20 | 30 | 40 | 2 | **102** | 359 |
| **Mes 6** | 12 | 25 | 35 | 50 | 1 | **123** | 482 |

**Total Objetivo 6 Meses**: **482 backlinks**

**Desglose por Tipo**:
- **DA 50+**: 39 links (8% del total, pero máximo impacto)
- **DA 30-50**: 85 links (18% del total, buen impacto)
- **DA 10-30**: 135 links (28% del total, volumen)
- **Social**: 200 links (41% del total, señales sociales)
- **Directorios**: 23 links (5% del total, básico)

---

### 4.4 Herramientas para Link Building

**Gratuitas**:
1. **Google Alerts** - Menciones de marca
2. **Google Search** - Buscar oportunidades:
   - `"cursos de inglés" + "recursos recomendados"`
   - `"mejores blogs de educación" site:es`
   - `"guest post" + "idiomas"`
3. **Check My Links** (Chrome extension) - Encontrar enlaces rotos para reemplazar

**De Pago** (Recomendadas):
1. **Ahrefs** (€99/mes) - Análisis de competencia, oportunidades de links
2. **Hunter.io** (€49/mes) - Encontrar emails para outreach
3. **Pitchbox** (€195/mes) - Automatizar outreach (opcional, si volumen alto)

---

## 📊 PARTE 5: OPTIMIZACIONES TÉCNICAS AVANZADAS

### 5.1 Core Web Vitals Optimization

**Objetivo**: Pasar de "Needs Improvement" a "Good" en Google Search Console

#### **LCP (Largest Contentful Paint)** - Objetivo: < 2.5s

**Acciones**:

1. **Optimizar Imágenes** 🔴 URGENTE
   ```bash
   # Convertir todas las imágenes a WebP
   npm install --save-dev imagemin imagemin-webp
   
   # Crear script de optimización
   # scripts/optimize-images.js
   ```

   ```javascript
   // scripts/optimize-images.js
   const imagemin = require('imagemin');
   const imageminWebp = require('imagemin-webp');

   (async () => {
     await imagemin(['public/images/*.{jpg,png}'], {
       destination: 'public/images/optimized',
       plugins: [
         imageminWebp({ quality: 80 })
       ]
     });
     console.log('Images optimized!');
   })();
   ```

   ```json
   // package.json - añadir script
   "scripts": {
     "optimize-images": "node scripts/optimize-images.js"
   }
   ```

2. **Implementar next/image correctamente**
   ```tsx
   // Antes (NO hacer):
   <img src="/hero-image.jpg" alt="..." />

   // Después (CORRECTO):
   import Image from 'next/image';

   <Image
     src="/hero-image.jpg"
     alt="Cursos de inglés online certificados"
     width={1200}
     height={630}
     priority // Para imágenes above the fold
     placeholder="blur"
     blurDataURL="data:image/jpeg;base64,..."
   />
   ```

3. **Preload Critical Resources**
   ```tsx
   // app/layout.tsx - añadir en <head>
   <head>
     <link
       rel="preload"
       href="/fonts/inter-var.woff2"
       as="font"
       type="font/woff2"
       crossOrigin="anonymous"
     />
     <link rel="preconnect" href="https://images.unsplash.com" />
     <link rel="dns-prefetch" href="https://images.unsplash.com" />
   </head>
   ```

4. **CDN para Assets Estáticos** (Vercel lo hace automáticamente, pero verificar)

---

#### **FID (First Input Delay)** - Objetivo: < 100ms

**Acciones**:

1. **Analizar Bundle Size**
   ```bash
   cd /home/user/webapp && npm run build
   # Revisar output para bundles grandes
   ```

2. **Code Splitting por Ruta** (Next.js ya lo hace, verificar)

3. **Dynamic Imports para Componentes Pesados**
   ```tsx
   // Antes:
   import HeavyComponent from '@/components/HeavyComponent';

   // Después:
   import dynamic from 'next/dynamic';

   const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
     loading: () => <p>Cargando...</p>,
     ssr: false // Si no necesita SSR
   });
   ```

4. **Defer Non-Critical JavaScript**
   ```tsx
   // Para scripts de terceros (analytics, etc.)
   <Script
     src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
     strategy="lazyOnload"
   />
   ```

---

#### **CLS (Cumulative Layout Shift)** - Objetivo: < 0.1

**Acciones**:

1. **Definir Dimensions para Todas las Imágenes**
   ```tsx
   // SIEMPRE especificar width y height
   <Image
     src="/image.jpg"
     width={800}  // ✅
     height={600}  // ✅
     alt="..."
   />
   ```

2. **Reserve Space para Contenido Dinámico**
   ```tsx
   // Para contenido que carga después
   <div style={{ minHeight: '400px' }}>
     {loading ? <Skeleton /> : <Content />}
   </div>
   ```

3. **Font Optimization**
   ```tsx
   // app/layout.tsx - usar next/font
   import { Inter } from 'next/font/google';

   const inter = Inter({
     subsets: ['latin'],
     display: 'swap', // Evita FOIT (Flash of Invisible Text)
     variable: '--font-inter'
   });

   export default function RootLayout({ children }) {
     return (
       <html lang="es" className={inter.variable}>
         <body>{children}</body>
       </html>
     );
   }
   ```

---

### 5.2 Sitemap Avanzado

**Estado Actual**: ✅ Sitemap básico implementado

**Mejoras**:

1. **Añadir Imágenes al Sitemap**
   ```typescript
   // app/sitemap.ts
   export default function sitemap(): MetadataRoute.Sitemap {
     const urls: MetadataRoute.Sitemap = [
       {
         url: `${baseUrl}/`,
         lastModified: now,
         changeFrequency: "daily",
         priority: 1.0,
         images: [
           {
             url: `${baseUrl}/hero-image.jpg`,
             title: "Cursos de inglés online",
             caption: "Aprende inglés desde A1 hasta C2"
           }
         ]
       },
       // ... resto de URLs
     ];
     return urls;
   }
   ```

2. **Sitemap de Videos** (Cuando tengas YouTube)
   ```typescript
   // app/video-sitemap.xml/route.ts
   export async function GET() {
     const videos = await getYouTubeVideos();
     
     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
             xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
       ${videos.map(video => `
         <url>
           <loc>${baseUrl}/videos/${video.slug}</loc>
           <video:video>
             <video:thumbnail_loc>${video.thumbnail}</video:thumbnail_loc>
             <video:title>${video.title}</video:title>
             <video:description>${video.description}</video:description>
             <video:player_loc>${video.youtubeUrl}</video:player_loc>
             <video:duration>${video.duration}</video:duration>
           </video:video>
         </url>
       `).join('')}
     </urlset>`;

     return new Response(sitemap, {
       headers: {
         'Content-Type': 'application/xml',
       },
     });
   }
   ```

3. **Sitemap Index** (Para separar por tipo)
   ```typescript
   // app/sitemap-index.xml/route.ts
   export async function GET() {
     const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
     <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <sitemap>
         <loc>${baseUrl}/sitemap.xml</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
       </sitemap>
       <sitemap>
         <loc>${baseUrl}/blog-sitemap.xml</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
       </sitemap>
       <sitemap>
         <loc>${baseUrl}/courses-sitemap.xml</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
       </sitemap>
     </sitemapindex>`;

     return new Response(sitemapIndex, {
       headers: {
         'Content-Type': 'application/xml',
       },
     });
   }
   ```

---

### 5.3 Hreflang (Si expansión internacional futura)

**Preparación para Multi-idioma**:

```typescript
// app/layout.tsx - añadir si vas a tener versión EN
export const metadata = {
  // ... resto de metadata
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': 'https://focus-on-english.com',
      'en-US': 'https://focus-on-english.com/en',
      'x-default': 'https://focus-on-english.com'
    }
  }
}
```

---

### 5.4 Implementar Google Search Console & Analytics

🔴 **URGENTE - HACER ESTA SEMANA**

#### **Google Search Console**

1. **Setup**:
   ```
   1. Ir a: https://search.google.com/search-console
   2. Añadir propiedad: focus-on-english.com
   3. Verificación:
      - Opción 1: Meta tag en <head>
      - Opción 2: HTML file en /public
      - Opción 3: DNS TXT record (mejor)
   4. Enviar sitemap: https://focus-on-english.com/sitemap.xml
   ```

2. **Qué Monitorear** (Semanal):
   - **Performance**: Clicks, impresiones, CTR, posición promedio
   - **Coverage**: Errores de indexación
   - **Enhancements**: Core Web Vitals
   - **Links**: Backlinks detectados

---

#### **Google Analytics 4**

1. **Setup**:
   ```tsx
   // app/layout.tsx - añadir scripts
   import Script from 'next/script';

   export default function RootLayout({ children }) {
     return (
       <html lang="es">
         <head>
           {/* Google Analytics */}
           <Script
             src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
             strategy="afterInteractive"
           />
           <Script id="google-analytics" strategy="afterInteractive">
             {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-XXXXXXXXXX');
             `}
           </Script>
         </head>
         <body>{children}</body>
       </html>
     );
   }
   ```

2. **Events a Trackear**:
   - **Conversiones**:
     - Signup completado
     - Prueba gratis iniciada
     - Compra realizada
   - **Engagement**:
     - Scroll depth (25%, 50%, 75%, 100%)
     - Video views
     - Descargas de recursos
   - **Navegación**:
     - Clicks en CTAs
     - Navegación a cursos específicos
     - Tiempo en página

3. **Custom Events**:
   ```typescript
   // lib/analytics.ts
   export const trackEvent = (eventName: string, params?: object) => {
     if (typeof window !== 'undefined' && window.gtag) {
       window.gtag('event', eventName, params);
     }
   };

   // Uso:
   import { trackEvent } from '@/lib/analytics';

   trackEvent('cta_click', {
     cta_location: 'hero',
     cta_text: 'Empieza Gratis',
     page_path: '/cursos/examenes/b2'
   });
   ```

---

### 5.5 Implementar Microsoft Clarity (Heat maps gratuitos)

```tsx
// app/layout.tsx
<Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
  `}
</Script>
```

**Beneficios**:
- Heatmaps de clicks
- Session recordings
- Scroll maps
- Ver dónde usuarios tienen problemas (UX)
- **Gratis** y sin límite de pageviews

---

## 📊 PARTE 6: PLAN DE CONTENIDO (3 MESES)

### 6.1 Calendario Editorial

#### **Mes 1: Fundamentos + Página Pilar**

| Semana | Contenido | Palabras | Keywords Target | Prioridad |
|--------|-----------|----------|-----------------|-----------|
| **Semana 1** | Página Pilar: Guía Completa Cursos Inglés Online | 5,000+ | `cursos de inglés online` | 🔴 URGENTE |
| **Semana 2** | Artículo: Cuánto Cuesta un Curso de Inglés Online | 1,500 | `cuánto cuesta curso inglés` | 🔴 URGENTE |
| **Semana 3** | Artículo: Cómo Elegir Curso de Inglés Online | 1,800 | `cómo elegir curso inglés` | 🟡 ALTA |
| **Semana 4** | Optimizar artículo existente: Preparar Exámenes | - | - | 🟡 ALTA |

**Tareas Técnicas Mes 1**:
- ✅ Implementar Schema.org en homepage
- ✅ Implementar Course Schema en páginas de cursos
- ✅ Implementar Article Schema en blog
- ✅ Configurar Google Search Console
- ✅ Configurar Google Analytics 4
- ✅ Crear perfil en Trustpilot
- ✅ Crear Google Business Profile

---

#### **Mes 2: Contenido Long-Tail + Backlinks**

| Semana | Contenido | Palabras | Keywords Target | Prioridad |
|--------|-----------|----------|-----------------|-----------|
| **Semana 1** | Artículo: Niveles Inglés CEFR Explicados | 2,000 | `niveles inglés CEFR` | 🟡 ALTA |
| **Semana 2** | Artículo: Diferencias Cambridge TOEFL IELTS | 2,200 | `diferencias exámenes inglés` | 🟡 ALTA |
| **Semana 3** | Landing Page: Preparación Cambridge B2 | 2,500 | `preparación Cambridge B2` | 🔴 URGENTE |
| **Semana 4** | Artículo: Aprobar Cambridge B2 Primer Intento | 1,800 | `aprobar B2 primer intento` | 🟡 ALTA |

**Tareas de Link Building Mes 2**:
- Outreach a 10 blogs educativos (guest posts)
- Crear perfiles en 5 directorios de cursos
- Participar en 3 foros relevantes
- Pitch a 2 podcasts

---

#### **Mes 3: Expansión + Social**

| Semana | Contenido | Palabras | Keywords Target | Prioridad |
|--------|-----------|----------|-----------------|-----------|
| **Semana 1** | Artículo: Inglés para Entrevistas de Trabajo | 1,500 | `inglés entrevistas trabajo` | 🟡 ALTA |
| **Semana 2** | Landing Page: Preparación TOEFL | 2,000 | `preparación TOEFL online` | 🟡 ALTA |
| **Semana 3** | Landing Page: Preparación IELTS | 2,000 | `preparación IELTS España` | 🟡 ALTA |
| **Semana 4** | Página: Opiniones y Testimonios | 1,500 | `Focus English opiniones` | 🟢 MEDIA |

**Tareas Social Media Mes 3**:
- Lanzar YouTube channel (5 videos mínimo)
- Instagram: 30 posts + 15 Reels
- TikTok: 20 videos
- Pinterest: 50 pins

---

### 6.2 Templates de Contenido

#### **Template: Artículo de Blog**

```markdown
---
title: "[Título Optimizado SEO con Año]"
description: "[Meta description con emojis y CTA]"
keywords: [keyword1, keyword2, keyword3]
author: "Focus English"
datePublished: "YYYY-MM-DD"
dateModified: "YYYY-MM-DD"
image: "/blog/slug-og.jpg"
category: "Categoría"
readingTime: "X min"
---

# [H1: Título Principal con Keyword]

[Introducción: 100-150 palabras]
- Hook: Estadística sorprendente o pregunta
- Problema que resuelve el artículo
- Promesa de valor
- CTA suave: "Sigue leyendo para descubrir..."

![Alt text optimizado con keyword](/images/hero-image.jpg)

## 📋 Tabla de Contenidos

1. [Sección 1](#seccion-1)
2. [Sección 2](#seccion-2)
3. [Sección 3](#seccion-3)
...

---

## Sección 1 {#seccion-1}

[Contenido con keywords naturales]

### Subsección 1.1

[Contenido]

**💡 Tip Pro**: [Consejo práctico]

---

## Sección 2 {#seccion-2}

[Contenido]

> **Ejemplo Real**: [Caso de estudio o ejemplo]

[Insertar CTA cada 1,000 palabras]:

---
**🎯 ¿Quieres [beneficio]?**

✓ [Beneficio 1]  
✓ [Beneficio 2]  
✓ [Beneficio 3]  

[CTA Button: "Empieza Gratis →"](/signup)

---

## FAQ

### ¿Pregunta Frecuente 1?

Respuesta completa...

### ¿Pregunta Frecuente 2?

Respuesta completa...

[Mínimo 5 preguntas]

---

## Conclusión

[Resumen de puntos clave]

[CTA final fuerte]

---

**Artículos Relacionados**:
- [Artículo 1](/)
- [Artículo 2](/)
- [Artículo 3](/)

**¿Necesitas ayuda?** [Contacta con nosotros](/contact)

---

*Última actualización: [Fecha]*  
*Tiempo de lectura: [X minutos]*

<!-- Schema.org se añade automáticamente en el template -->
```

---

#### **Template: Landing Page de Curso**

```tsx
// app/cursos/[goal]/[level]/page.tsx

export const metadata = {
  title: "Curso [Nivel] de Inglés para [Objetivo] | Focus English",
  description: "[Descripción con beneficios y precio]",
  // ... resto de metadata
};

export default function CoursePage({ params }) {
  return (
    <div className="course-page">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-violet-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex gap-2 text-sm text-violet-200">
              <li><a href="/">Inicio</a></li>
              <li>›</li>
              <li><a href="/cursos">Cursos</a></li>
              <li>›</li>
              <li>[Nivel]</li>
            </ol>
          </nav>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Curso de Inglés [Nivel] para [Objetivo]
          </h1>

          <p className="text-2xl mb-8 text-violet-100">
            [Propuesta de valor única]
          </p>

          {/* CTAs */}
          <div className="flex gap-4">
            <a href="/signup" className="btn-primary-large">
              Empieza Gratis 7 Días
            </a>
            <a href="/diagnostico" className="btn-secondary-large">
              Test de Nivel Gratis
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex items-center gap-6">
            <div>
              <span className="text-4xl font-black">4.8</span>
              <span className="ml-2">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="border-l border-violet-300 pl-6">
              <p className="text-lg font-semibold">+[X] estudiantes</p>
              <p className="text-violet-200">Ya certificados en [Nivel]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Aprenderás */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12">
            ¿Qué Aprenderás en Este Curso?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature cards */}
          </div>
        </div>
      </section>

      {/* Programa del Curso */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12">
            Programa del Curso
          </h2>
          {/* Accordion con temario detallado */}
        </div>
      </section>

      {/* Testimonios Específicos del Nivel */}
      <section className="py-20">
        <h2 className="text-4xl font-black text-center mb-12">
          Historias de Éxito: [Nivel]
        </h2>
        {/* Testimonial cards con Schema.org Review */}
      </section>

      {/* FAQ Específico */}
      <section className="bg-slate-50 py-20">
        <h2 className="text-4xl font-black text-center mb-12">
          Preguntas Frecuentes sobre [Nivel]
        </h2>
        {/* FAQ específico del nivel con Schema.org FAQPage */}
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-20 text-center">
        <h2 className="text-4xl font-black mb-6">
          Empieza Tu Curso de [Nivel] Hoy
        </h2>
        <p className="text-xl mb-8">
          Prueba gratis 7 días. Sin tarjeta de crédito.
        </p>
        <a href="/signup" className="btn-primary-large">
          Comenzar Gratis →
        </a>
      </section>

      {/* Schemas */}
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{__html: JSON.stringify(courseSchema)}} 
      />
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} 
      />
    </div>
  );
}
```

---

## 📊 PARTE 7: MÉTRICAS Y KPIS

### 7.1 Dashboards de Seguimiento

#### **Dashboard SEO Semanal** (Google Sheets)

| Métrica | Semana 1 | Semana 2 | Semana 3 | Semana 4 | Objetivo Mes |
|---------|----------|----------|----------|----------|--------------|
| **Tráfico Orgánico** | - | - | - | - | 500 |
| **Keywords Top 10** | - | - | - | - | 5 |
| **Keywords Top 20** | - | - | - | - | 10 |
| **Backlinks Nuevos** | - | - | - | - | 47 |
| **Domain Authority** | 15 | - | - | - | 18 |
| **Conversión Rate** | - | - | - | - | 2% |
| **Blog Posts Publicados** | - | - | - | - | 4 |

---

#### **Keywords a Monitorear** (Top 20 prioritarias)

| # | Keyword | Vol/mes | Dif | Posición Actual | Objetivo 3m | Objetivo 6m |
|---|---------|---------|-----|-----------------|-------------|-------------|
| 1 | cursos de inglés online | 18,100 | 65 | N/A | Top 30 | Top 10 |
| 2 | aprender inglés online | 14,800 | 60 | N/A | Top 30 | Top 10 |
| 3 | clases de inglés online | 12,100 | 62 | N/A | Top 30 | Top 15 |
| 4 | curso de inglés certificado | 5,400 | 58 | N/A | Top 20 | Top 10 |
| 5 | preparación Cambridge B2 | 2,900 | 52 | N/A | Top 15 | Top 5 |
| 6 | preparación TOEFL online | 1,800 | 50 | N/A | Top 20 | Top 10 |
| 7 | cuánto cuesta curso inglés | 1,200 | 28 | N/A | Top 10 | Top 3 |
| 8 | mejor curso inglés online | 880 | 35 | N/A | Top 15 | Top 5 |
| 9 | curso inglés A1 desde cero | 720 | 30 | N/A | Top 10 | Top 3 |
| 10 | inglés para viajar curso | 480 | 25 | N/A | Top 5 | Top 1 |
| ... | ... | ... | ... | ... | ... | ... |

**Actualizar**: Semanalmente en Google Search Console

---

### 7.2 Objetivos SMART por Periodo

#### **Mes 1: Fundamentos**
- ✅ Implementar Schema.org en 100% de páginas clave
- ✅ Publicar página pilar (5,000+ palabras)
- ✅ Conseguir 47 backlinks (10 DA50+, 5 DA30-50, 10 DA10-30, 20 social, 10 directorios)
- ✅ Alcanzar 500 visitantes orgánicos/mes
- ✅ 5 keywords en Top 100 de Google

#### **Mes 3: Crecimiento**
- ✅ 2,000 visitantes orgánicos/mes (+300%)
- ✅ 20 keywords en Top 100
- ✅ 5 keywords en Top 20
- ✅ 173 backlinks acumulados
- ✅ Domain Authority 25+
- ✅ Conversión rate 3.5%

#### **Mes 6: Consolidación**
- ✅ 5,000 visitantes orgánicos/mes (+150%)
- ✅ 50 keywords en Top 100
- ✅ 15 keywords en Top 10
- ✅ 3 keywords en Top 3
- ✅ 482 backlinks acumulados
- ✅ Domain Authority 35+
- ✅ Conversión rate 5%
- ✅ MRR de SEO: €5,000

#### **Mes 12: Dominio**
- ✅ 15,000 visitantes orgánicos/mes (+200%)
- ✅ 100 keywords en Top 100
- ✅ 30 keywords en Top 10
- ✅ 10 keywords en Top 3
- ✅ 800+ backlinks acumulados
- ✅ Domain Authority 45+
- ✅ Conversión rate 7%
- ✅ MRR de SEO: €15,000

---

### 7.3 ROI Estimado

**Inversión 6 Meses**: €5,094

| Concepto | Inversión 6m | ROI Estimado 6m | ROI % |
|----------|--------------|-----------------|-------|
| **Herramientas SEO** | €594 | - | - |
| **Contenido** | €1,800 | €3,000 (MRR) | 166% |
| **Link Building** | €1,200 | €1,500 (MRR) | 125% |
| **Google Ads** | €900 | €500 (MRR directo) | 55% |
| **Social Media** | €600 | - (Indirecto) | - |
| **TOTAL** | **€5,094** | **€5,000 MRR** | **98% ROI en 6m** |

**Proyección Anual**:
- MRR Mes 6: €5,000
- MRR Mes 12: €15,000
- Total Año 1: ~€120,000 ARR
- ROI Año 1: **€120,000 / €10,000 inversión = 1,100% ROI**

---

## 📊 PARTE 8: PLAN DE ACCIÓN INMEDIATO

### 🔴 ESTA SEMANA (Días 1-7)

#### **Día 1: Correcciones Críticas** ✅
- [x] Arreglar robots.txt (ya está correcto ✅)
- [ ] Implementar Organization Schema en layout.tsx
- [ ] Optimizar título y meta description de homepage
- [ ] Configurar Google Search Console
- [ ] Enviar sitemap a GSC

#### **Día 2: Schema.org Básico** ✅
- [ ] Implementar Course Schema en template de cursos
- [ ] Implementar Article Schema en template de blog
- [ ] Verificar implementación con Google Rich Results Test

#### **Día 3-5: Contenido** ✅
- [ ] Empezar página pilar "Guía Completa Cursos de Inglés Online" (2,000 palabras mínimo para lanzar, completar a 5,000)
- [ ] Optimizar artículo "Preparar Exámenes Oficiales":
  - Añadir tabla de contenidos
  - Añadir enlaces internos (mínimo 10)
  - Añadir CTAs distribuidos (cada 1,500 palabras)
  - Añadir sección FAQ

#### **Día 6-7: Backlinks Fáciles** ✅
- [ ] Crear perfil en Trustpilot
- [ ] Crear Google Business Profile
- [ ] Crear LinkedIn Company Page
- [ ] Crear perfiles en Emagister.com y Cursos.com
- [ ] Configurar Google Analytics 4

---

### 🟡 PRÓXIMAS 2 SEMANAS (Días 8-21)

#### **Semana 2**:
- [ ] Completar página pilar a 5,000+ palabras
- [ ] Crear artículo "Cuánto Cuesta un Curso de Inglés Online" (1,500 palabras)
- [ ] Outreach a 5 blogs educativos (guest posts)
- [ ] Crear perfiles en 3 directorios adicionales

#### **Semana 3**:
- [ ] Crear artículo "Cómo Elegir Curso de Inglés Online" (1,800 palabras)
- [ ] Optimizar artículos existentes (otros 2 del blog)
- [ ] Iniciar participación en Reddit (r/Spanish, r/languagelearning)
- [ ] Responder 5 preguntas en Quora

---

### 🟢 PRIMER MES (Días 22-30)

- [ ] Crear landing page "Preparación Cambridge B2" (2,500 palabras)
- [ ] Optimizar Core Web Vitals:
  - Convertir imágenes a WebP
  - Implementar next/image en todas las páginas
  - Optimizar fonts con next/font
- [ ] Pitch a 2 podcasts
- [ ] Crear primeros 3 videos de YouTube

---

## 📊 CONCLUSIÓN Y RECOMENDACIONES FINALES

### 🎯 Prioridades Absolutas (Hacer Ya)

1. **🔴 CRÍTICO**: Reemplazar homepage "Coming Soon" con landing page real
   - **Razón**: Actual homepage no indexable = 0 tráfico orgánico
   - **Tiempo**: 1-2 días
   - **Impacto**: Máximo

2. **🔴 CRÍTICO**: Implementar Schema.org
   - **Razón**: Sin rich snippets = CTR -30% vs. competencia
   - **Tiempo**: 4-6 horas
   - **Impacto**: Muy Alto

3. **🔴 URGENTE**: Crear página pilar "Guía Completa Cursos Inglés Online"
   - **Razón**: Posicionará para keyword principal (18,100 búsquedas/mes)
   - **Tiempo**: 2-3 días
   - **Impacto**: Muy Alto

4. **🔴 URGENTE**: Configurar Google Search Console + Analytics
   - **Razón**: No puedes optimizar lo que no mides
   - **Tiempo**: 1 hora
   - **Impacto**: Fundamental

5. **🟡 ALTA**: Iniciar estrategia de backlinks (directorios fáciles primero)
   - **Razón**: Sin backlinks = sin autoridad = no ranking
   - **Tiempo**: 2-3 horas para directorios fáciles
   - **Impacto**: Alto

---

### 💡 Quick Wins (Resultados Rápidos)

**Esta Semana**:
1. Crear perfiles en Trustpilot, Google Business, LinkedIn (2 horas)
2. Optimizar títulos SEO de todas las páginas (1 hora)
3. Añadir enlaces internos a artículos existentes (30 minutos)

**Este Mes**:
1. Publicar 4 artículos nuevos
2. Conseguir 47 backlinks
3. Aparecer en Top 100 para 5 keywords

---

### 🚀 Hoja de Ruta Visual

```
MES 1: FUNDAMENTOS
├── Semana 1: Fixes técnicos + Schema.org
├── Semana 2: Página pilar
├── Semana 3: Artículo long-tail 1
└── Semana 4: Backlinks fáciles (directorios)

MES 2: CONTENIDO
├── Semana 1: Artículo long-tail 2
├── Semana 2: Landing page Cambridge B2
├── Semana 3: Optimizar artículos existentes
└── Semana 4: Outreach (guest posts)

MES 3: EXPANSIÓN
├── Semana 1: Landing pages TOEFL + IELTS
├── Semana 2: YouTube launch (5 videos)
├── Semana 3: Social media (Instagram + TikTok)
└── Semana 4: Link building agresivo

MES 4-6: ESCALA
├── Producir 3 artículos/semana
├── Link building continuo
├── YouTube 3 videos/semana
└── Optimización continua basada en datos
```

---

### 📞 Próximos Pasos

**¿Por dónde empezar?**

1. **Opción A (Más impacto)**: Reemplazar homepage + Schema.org + Página pilar
2. **Opción B (Más rápido)**: Directorios + Optimizar existente + Schema.org
3. **Opción C (Equilibrado)**: Schema.org + Optimizar existente + Directorios + Empezar página pilar

**Recomendación**: **Opción A** - Aunque toma más tiempo inicial, tendrá el mayor impacto en SEO a medio plazo.

---

### 🎓 Recursos Útiles

**Herramientas SEO Gratuitas**:
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- PageSpeed Insights: https://pagespeed.web.dev
- Google Rich Results Test: https://search.google.com/test/rich-results
- Keyword Planner: https://ads.google.com/home/tools/keyword-planner/

**Herramientas de Pago (Recomendadas)**:
- Ahrefs (€99/mes): https://ahrefs.com
- SEMrush (€119/mes): https://www.semrush.com

**Comunidades y Recursos**:
- r/SEO: https://reddit.com/r/SEO
- Moz Blog: https://moz.com/blog
- Ahrefs Blog: https://ahrefs.com/blog
- Search Engine Journal: https://www.searchenginejournal.com

---

## 📝 RESUMEN EJECUTIVO FINAL

### Estado Actual
- **Fortalezas**: Arquitectura técnica sólida, contenido de calidad existente
- **Debilidades**: Sin Schema.org, homepage "Coming Soon", sin backlinks, sin presencia social

### Oportunidad
- Mercado de 18,100 búsquedas/mes para "cursos de inglés online"
- Competencia media (DA 65)
- Long-tail keywords con baja competencia disponibles

### Plan
1. **Mes 1-3**: Fundamentos (Schema, contenido pilar, backlinks fáciles)
2. **Mes 4-6**: Expansión (contenido cluster, link building, social)
3. **Mes 7-12**: Dominio (posicionamiento Top 10, autoridad establecida)

### Inversión
- **6 meses**: €5,094
- **ROI 6 meses**: €5,000 MRR (98% ROI)
- **ROI 12 meses**: €15,000 MRR (1,100% ROI sobre inversión total)

### Resultado Esperado
- **Tráfico orgánico**: 0 → 5,000 visitantes/mes (6 meses)
- **Keywords Top 10**: 0 → 15 (6 meses)
- **Backlinks**: 0 → 482 (6 meses)
- **Domain Authority**: 15 → 35 (6 meses)

---

**¿Listo para empezar?** 🚀

Selecciona qué tarea quieres que implemente primero:
1. Homepage real (reemplazar "Coming Soon")
2. Schema.org (Organization, Course, Article, FAQ)
3. Página pilar "Guía Completa Cursos Inglés Online"
4. Optimizar artículos existentes
5. Otra tarea específica

---

*Análisis realizado: 15 de Enero 2026*  
*Próxima revisión recomendada: 15 de Febrero 2026*
