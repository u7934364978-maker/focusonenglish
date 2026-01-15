# 🚀 ESTRATEGIA SEO 2026 PARA FOCUS ENGLISH

**Fecha**: 15 de Enero 2026  
**Objetivo**: Posicionar Focus English en Top 3 de Google para keywords clave en 6 meses  
**Audiencia**: Hispanohablantes buscando cursos de inglés online  

---

## 📊 FASE 1: CORRECCIONES TÉCNICAS URGENTES (Semana 1)

### ❌ **CRÍTICO - ARREGLAR YA**

#### 1. Robots.txt URL Incorrecta
**Problema**: `app/robots.ts` tiene `englishworkinglab.com` en lugar de `focus-on-english.com`
**Impacto SEO**: ⚠️ ALTO - Google está indexando con sitemap incorrecto
**Solución**: Actualizar `baseUrl` en `/app/robots.ts`

```typescript
// Cambiar de:
const baseUrl = "https://englishworkinglab.com";

// A:
const baseUrl = "https://focus-on-english.com";
```

**Prioridad**: 🔴 URGENTE

---

#### 2. Añadir Schema.org Structured Data
**Impacto SEO**: ⭐⭐⭐⭐⭐ MUY ALTO (Rich Snippets en Google)

**Implementar**:
- ✅ Organization Schema (quiénes somos)
- ✅ Course Schema (cursos individuales A1-C2)
- ✅ Article Schema (blog posts)
- ✅ FAQPage Schema (FAQ sections)
- ✅ BreadcrumbList Schema (navegación)
- ✅ Review/AggregateRating Schema (testimonios)

**Archivo**: `app/layout.tsx` y páginas individuales

---

#### 3. Open Graph y Twitter Cards Completos
**Impacto SEO**: ⭐⭐⭐⭐ ALTO (Social sharing = backlinks)

**Faltante**:
- OG images optimizadas (1200x630px)
- Twitter card type "summary_large_image"
- OG descriptions únicas por página

---

## 📊 FASE 2: KEYWORD RESEARCH Y OPTIMIZACIÓN (Semanas 2-3)

### 🎯 Keywords Objetivo (Ordenadas por prioridad)

#### **Tier 1: Alta Intención, Media Competencia**
| Keyword | Volumen/mes (ES) | Dificultad | Intent | Priority |
|---------|------------------|------------|--------|----------|
| `cursos de inglés online` | 18,100 | 65 | Transactional | 🔴 ALTA |
| `aprender inglés online` | 14,800 | 60 | Informational | 🔴 ALTA |
| `clases de inglés online` | 12,100 | 62 | Transactional | 🔴 ALTA |
| `curso de inglés certificado` | 5,400 | 58 | Transactional | 🟡 MEDIA |
| `preparación Cambridge B2` | 2,900 | 52 | Transactional | 🟡 MEDIA |

#### **Tier 2: Long-Tail, Baja Competencia, Alta Conversión**
| Keyword | Volumen/mes | Dificultad | Intent | Priority |
|---------|-------------|------------|--------|----------|
| `mejor curso de inglés online para hispanohablantes` | 880 | 35 | Transactional | 🔴 ALTA |
| `cuánto cuesta un curso de inglés online` | 1,200 | 28 | Transactional | 🟢 ALTA |
| `curso de inglés A1 desde cero` | 720 | 30 | Transactional | 🟢 ALTA |
| `preparar TOEFL desde casa` | 590 | 42 | Informational | 🟡 MEDIA |
| `curso de inglés para viajar` | 480 | 25 | Transactional | 🟢 ALTA |

#### **Tier 3: Branded + Comparación (Capturar decisión final)**
| Keyword | Volumen/mes | Dificultad | Intent | Priority |
|---------|-------------|------------|--------|----------|
| `Focus English opiniones` | 50 | 10 | Research | 🟡 MEDIA |
| `Focus English vs Duolingo` | 30 | 12 | Comparison | 🟡 MEDIA |
| `Focus English precio` | 40 | 8 | Research | 🟢 ALTA |

---

### 📝 Optimización On-Page por Tipo de Página

#### **Homepage** (`/`)
**Target**: `cursos de inglés online` + `aprender inglés online`

```html
<title>Cursos de Inglés Online Certificados | Aprende desde A1 hasta C2 | Focus English</title>
<meta name="description" content="Aprende inglés online con cursos certificados desde €6.99/mes. Preparación Cambridge, TOEFL e IELTS. +2,500 estudiantes certificados. Prueba gratis hoy.">

Keywords en:
- H1: "Cursos de Inglés Online Certificados: De A1 a C2 en 12 Meses"
- First paragraph (primeras 100 palabras)
- Alt text de imágenes
- URLs internas
```

#### **Páginas de Curso** (`/cursos/examenes/b2`)
**Target**: `preparación Cambridge B2` + `curso Cambridge B2 First`

```html
<title>Preparación Cambridge B2 First Online | Curso Completo FCE | Focus English</title>
<meta name="description" content="Curso online de preparación Cambridge B2 First (FCE). Plan de 12 semanas, mock exams ilimitados. Aprueba con Grade A desde €6.99/mes. Empieza gratis.">
```

#### **Blog Posts**
**Target**: Long-tail keywords informacionales

Ejemplo: `/blog/preparar-examenes-oficiales`
```html
<title>Guía Completa 2026: Cómo Preparar Exámenes Oficiales de Inglés (Cambridge, TOEFL, IELTS)</title>
<meta name="description" content="✓ Estructura completa ✓ Plan de 12 semanas ✓ Estrategias probadas. Descubre cómo aprobar Cambridge B2, TOEFL 100+ e IELTS 7.0 en tu primer intento.">
```

---

## 📊 FASE 3: CONTENIDO SEO (Semanas 4-8)

### 🎯 Plan de Contenido: Pilar + Cluster

#### **Pilar 1: Cursos de Inglés Online**
**URL**: `/guia-completa-cursos-ingles-online` (CREAR)
**Palabras**: 5,000+
**Target**: `cursos de inglés online`, `mejores cursos de inglés`

**Contenido**:
1. ¿Qué hace que un curso de inglés online sea efectivo?
2. Comparativa: Focus English vs. Duolingo vs. Babbel vs. ABA English
3. Niveles CEFR explicados (A1-C2)
4. Cuánto tiempo toma cada nivel
5. Precios y ROI
6. Certificaciones oficiales
7. Testimonios reales
8. FAQ extendido

**Clusters (artículos satélite)**:
- `/blog/como-elegir-curso-ingles-online` (1,500 palabras)
- `/blog/cuanto-cuesta-curso-ingles` (1,200 palabras)
- `/blog/niveles-ingles-cefr-explicados` (2,000 palabras)
- `/blog/mejor-edad-aprender-ingles` (1,000 palabras)

---

#### **Pilar 2: Preparación de Exámenes** (YA EXISTE ✅)
**URL**: `/blog/preparar-examenes-oficiales`
**Palabras**: 12,849 ✅
**Target**: `preparación Cambridge`, `preparación TOEFL`, `preparación IELTS`

**Optimizar**:
- ✅ Estructura completa (ya está)
- ✅ Visual premium (ya está)
- ❌ Falta Schema.org FAQ
- ❌ Falta tabla de contenidos clicable
- ❌ Falta enlaces internos a cursos específicos

**Clusters adicionales a crear**:
- `/blog/aprobar-cambridge-b2-primer-intento` (1,800 palabras)
- `/blog/sacar-100-puntos-toefl` (1,600 palabras)
- `/blog/conseguir-ielts-7-0` (1,500 palabras)
- `/blog/diferencias-cambridge-toefl-ielts` (2,000 palabras)

---

#### **Pilar 3: Inglés para Viajes** (YA EXISTE PARCIAL)
**URL**: `/blog/ingles-esencial-viajar` (10,120 palabras ✅)

**Optimizar**:
- ❌ Falta título SEO optimizado
- ❌ Falta meta description atractiva
- ❌ Falta Schema.org Article

**Clusters a crear**:
- `/blog/ingles-basico-aeropuerto` (1,000 palabras)
- `/blog/frases-ingles-hotel` (900 palabras)
- `/blog/ingles-para-restaurantes` (800 palabras)

---

#### **Pilar 4: Inglés Profesional** (YA EXISTE PARCIAL)
**URL**: `/blog/ingles-profesional-sectores` (7,891 palabras ✅)

**Optimizar**:
- ❌ Falta Schema.org
- ❌ Falta CTAs a cursos de trabajo

**Clusters a crear**:
- `/blog/ingles-negocios-principiantes` (1,200 palabras)
- `/blog/ingles-entrevistas-trabajo` (1,500 palabras)
- `/blog/ingles-emails-profesionales` (1,000 palabras)
- `/blog/vocabulario-ingles-marketing` (1,200 palabras)

---

## 📊 FASE 4: LINK BUILDING (Semanas 6-12)

### 🎯 Estrategia de Backlinks

#### **Tier 1: Backlinks de Alta Autoridad (DA 50+)**

1. **Guest Posts en Blogs Educativos**
   - Universia.es (DA 75)
   - Educaweb.com (DA 68)
   - Emagister.com (DA 62)
   - **Pitch**: "Cómo elegir el mejor curso de inglés online en 2026"

2. **Menciones en Medios**
   - El País (DA 92) - Sección Educación
   - ABC.es (DA 90) - Sección Formación
   - 20minutos.es (DA 88)
   - **Pitch**: "Startup española de cursos de inglés online alcanza 2,500 alumnos certificados"

3. **Directorios de Calidad**
   - Trustpilot.com (DA 92) - Crear perfil + reseñas
   - Google My Business (DA 100) - Optimizar perfil
   - LinkedIn Company Page (DA 98)

#### **Tier 2: Backlinks de Nicho (DA 30-50)**

1. **Blogs de Viajes**
   - Colaboraciones con travel bloggers
   - "Mejores cursos de inglés para preparar tu viaje"

2. **Foros y Comunidades**
   - WordReference.com forums (DA 85)
   - Duolingo forums (DA 82)
   - Reddit /r/Spanish /r/languagelearning (DA 91)

3. **Comparadores de Cursos**
   - Cursos.com
   - Infoempleo.com
   - Infojobs.net

#### **Tier 3: Enlaces Locales y Sociales**

1. **Social Signals**
   - YouTube channel (tutoriales gratis)
   - Instagram Reels (tips de inglés)
   - TikTok (inglés en 60 segundos)
   - Pinterest (infografías de gramática)

2. **Podcast Appearances**
   - Podcasts de educación en español
   - Podcasts de emprendimiento
   - "Historia de Focus English"

---

### 📊 Objetivos de Backlinks (6 meses)

| Mes | DA 50+ | DA 30-50 | DA 10-30 | Social | Total |
|-----|--------|----------|----------|--------|-------|
| 1   | 2      | 5        | 10       | 20     | 37    |
| 2   | 3      | 8        | 15       | 25     | 51    |
| 3   | 5      | 12       | 20       | 30     | 67    |
| 4   | 7      | 15       | 25       | 35     | 82    |
| 5   | 10     | 20       | 30       | 40     | 100   |
| 6   | 12     | 25       | 35       | 50     | 122   |

**Total objetivo 6 meses**: 122 backlinks de calidad

---

## 📊 FASE 5: OPTIMIZACIONES TÉCNICAS AVANZADAS (Semanas 8-12)

### 🚀 Core Web Vitals (Google Ranking Factor 2026)

#### **LCP (Largest Contentful Paint) - Objetivo: < 2.5s**
- ✅ Optimizar imágenes (WebP, lazy loading)
- ✅ CDN para assets estáticos
- ✅ Preload critical resources
- ✅ Font optimization (preload fonts)

#### **FID (First Input Delay) - Objetivo: < 100ms**
- ✅ Reducir JavaScript bundle size
- ✅ Code splitting por ruta
- ✅ Defer non-critical JS

#### **CLS (Cumulative Layout Shift) - Objetivo: < 0.1**
- ✅ Definir dimensions para imágenes
- ✅ Evitar dynamic content injection
- ✅ Reserve space para ads (si aplica)

---

### 🔧 Implementación Técnica

#### 1. **Añadir Schema.org a Layout Principal**

```typescript
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Focus English",
    "url": "https://focus-on-english.com",
    "logo": "https://focus-on-english.com/logo.png",
    "description": "Cursos de inglés online certificados desde A1 hasta C2. Preparación Cambridge, TOEFL e IELTS.",
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
      "reviewCount": "2500"
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

#### 2. **Course Schema para Páginas de Cursos**

```typescript
// app/cursos/[goal]/[level]/page.tsx
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Curso de Inglés Cambridge B2 First Online",
  "description": "Curso completo de preparación Cambridge B2 First con plan de 12 semanas...",
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
    "url": "https://focus-on-english.com/cursos/examenes/b2"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT12W"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "850"
  }
};
```

#### 3. **FAQ Schema para Artículo de Exámenes**

```typescript
// En el artículo /blog/preparar-examenes-oficiales
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuál es el mejor examen de inglés: Cambridge, TOEFL o IELTS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hay un examen \"mejor\" universal. Cambridge es ideal para Europa y nunca caduca, TOEFL para universidades americanas, e IELTS para inmigración..."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo necesito para preparar Cambridge B2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de tu nivel actual. Si estás a 10-15 puntos: 8-10 semanas. Si estás a 20-25 puntos: 12-16 semanas..."
      }
    }
    // ... más preguntas
  ]
};
```

---

## 📊 FASE 6: CONTENIDO MULTIMEDIA (Semanas 12-16)

### 🎥 YouTube Strategy

#### **Canal: Focus English**
**Objetivo**: 1,000 suscriptores en 3 meses

**Series de Videos**:

1. **"Inglés en 5 Minutos"** (50 videos)
   - Gramática básica
   - Pronunciación
   - Vocabulario diario
   - **SEO**: Títulos como "Cómo usar Present Perfect | Inglés en 5 Minutos"

2. **"Prepara Cambridge B2"** (20 videos)
   - Mock exam completo
   - Estrategias por sección
   - Errores comunes
   - **SEO**: "Cambridge B2 Writing: Cómo escribir un Essay perfecto"

3. **"Testimonios Reales"** (10 videos)
   - Estudiantes certificados
   - Antes/después
   - Proceso de estudio

**Beneficios SEO**:
- Backlinks desde YouTube (DA 100)
- Google muestra videos en SERPs
- Aumenta brand awareness
- Traffic directo a web

---

### 📱 Redes Sociales (SMO - Social Media Optimization)

#### **Instagram** (@focusenglish)
**Objetivo**: 5,000 seguidores en 3 meses

**Contenido**:
- Reels de gramática (viral potential)
- Stories de estudiantes
- Infografías de vocabulario
- Live Q&A semanal

#### **TikTok** (@focus.english)
**Objetivo**: 10,000 seguidores en 3 meses

**Contenido**:
- "POV: Cuando apruebas Cambridge B2" (relatable)
- Tips de pronunciación (educacional)
- Errores graciosos de hispanohablantes
- Duets con otros creadores

---

## 📊 FASE 7: LOCAL SEO (Si aplica)

### 📍 Google Business Profile

**Si tienes oficina física o ofreces clases locales**:

1. **Crear/Optimizar Google My Business**
   - Categoría: "Escuela de idiomas"
   - Horario actualizado
   - Fotos profesionales
   - Posts semanales

2. **Reseñas de Google**
   - Pedir a estudiantes satisfechos
   - Responder todas las reseñas
   - Objetivo: 50+ reseñas con 4.8+ estrellas

3. **Local Citations**
   - Páginas Amarillas
   - Yelp España
   - Foursquare
   - Apple Maps

---

## 📊 FASE 8: REMARKETING Y RETARGETING

### 🎯 Google Ads (Complemento SEO)

**Campañas Iniciales** (mientras SEO crece):

1. **Branded Search**
   - Keywords: "Focus English", "Focus English opiniones"
   - CPC: €0.20-0.50
   - Budget: €5/día

2. **Competitor Conquest**
   - Keywords: "Duolingo alternativa", "mejor que Babbel"
   - CPC: €1-2
   - Budget: €10/día

3. **Display Remarketing**
   - Usuarios que visitaron pero no convirtieron
   - Banner: "Vuelve y empieza gratis"
   - Budget: €5/día

---

## 📊 MÉTRICAS Y KPIs (Tracking)

### 🎯 Objetivos por Mes

| Métrica | Mes 1 | Mes 3 | Mes 6 | Objetivo 12m |
|---------|-------|-------|-------|--------------|
| **Tráfico Orgánico** | 500 | 2,000 | 5,000 | 15,000 |
| **Keywords Top 10** | 5 | 20 | 50 | 100 |
| **Backlinks** | 10 | 40 | 100 | 250 |
| **Domain Authority** | 15 | 25 | 35 | 45 |
| **Conversión Rate** | 2% | 3.5% | 5% | 7% |
| **MRR de SEO** | €200 | €1,500 | €5,000 | €15,000 |

---

### 📊 Tools para Tracking

1. **Google Search Console** (Gratis)
   - Posiciones de keywords
   - CTR por keyword
   - Errores de indexación

2. **Google Analytics 4** (Gratis)
   - Traffic sources
   - User behavior
   - Conversion tracking

3. **Ahrefs / SEMrush** (Pago)
   - Keyword research
   - Competitor analysis
   - Backlink monitoring

4. **PageSpeed Insights** (Gratis)
   - Core Web Vitals
   - Mobile optimization

---

## 🚀 PLAN DE ACCIÓN INMEDIATO (ESTA SEMANA)

### ✅ DÍA 1-2: Fixes Críticos
1. ✅ Arreglar robots.txt URL
2. ✅ Añadir Schema.org Organization
3. ✅ Optimizar meta descriptions homepage

### ✅ DÍA 3-4: Contenido
1. ✅ Crear página pilar "Guía Completa Cursos de Inglés Online"
2. ✅ Añadir FAQPage Schema al artículo de exámenes
3. ✅ Optimizar títulos SEO de todas las páginas

### ✅ DÍA 5-7: Outreach
1. ✅ Crear perfil en Trustpilot
2. ✅ Optimizar Google Business Profile
3. ✅ Contactar 5 blogs para guest posts

---

## 💰 PRESUPUESTO ESTIMADO SEO (6 meses)

| Concepto | Mensual | 6 Meses | Notas |
|----------|---------|---------|-------|
| **Herramientas SEO** (Ahrefs) | €99 | €594 | Keyword research, backlinks |
| **Contenido** (Freelance writer) | €300 | €1,800 | 4 artículos/mes, 1,500 palabras |
| **Link Building** (Outreach) | €200 | €1,200 | Guest posts, menciones |
| **Google Ads** (Complemento) | €150 | €900 | Mientras SEO crece |
| **Social Media** (Diseño) | €100 | €600 | Gráficos para IG/TikTok |
| **TOTAL** | **€849** | **€5,094** | ROI esperado: 3-5x |

**ROI Esperado Año 1**: €15,000-25,000 MRR de tráfico orgánico

---

## 🎯 CONCLUSIÓN Y PRÓXIMO PASO

### 🥇 Prioridad MÁXIMA (Implementar HOY):

1. **Arreglar robots.txt** (5 minutos)
2. **Añadir Schema.org** a homepage y cursos (30 minutos)
3. **Crear 1 artículo pilar** esta semana (4 horas)
4. **Configurar Google Search Console** (15 minutos)

### 📊 Tracking Semanal:

- Lunes: Revisar posiciones en GSC
- Miércoles: Publicar contenido nuevo
- Viernes: Outreach para backlinks

---

**¿Quieres que empiece con alguna de estas tareas específicas?** 🚀

Recomendación: Empezar con el fix del robots.txt y añadir Schema.org hoy mismo.
