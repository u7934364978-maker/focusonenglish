# 🚀 PROGRESO DE MEJORAS SEO - FOCUS ENGLISH

**Fecha de Inicio**: 15 de Enero 2026  
**Última Actualización**: 15 de Enero 2026 14:02  

---

## ✅ COMPLETADO

### 📊 FASE 1: Optimizaciones Críticas de Layout

#### ✅ 1. Metadata Optimizada (COMPLETADO)
**Archivo**: `app/layout.tsx`

**Cambios Realizados**:
- ✅ Título optimizado para keyword principal "cursos de inglés online"
  - Antes: "Focus English - Cursos de Inglés Especializados"
  - Después: "Cursos de Inglés Online Certificados | Desde €6.99/mes | Focus English"
  - **Impacto**: Mejor posicionamiento para keyword de 18,100 búsquedas/mes

- ✅ Meta description mejorada con beneficios cuantificables
  - Incluye: ✓ Niveles (A1-C2) ✓ Precio (€6.99/mes) ✓ Social proof (+2,500 estudiantes) ✓ CTA (Prueba gratis)
  - **Impacto**: Mayor CTR en SERPs

- ✅ Keywords reordenadas por prioridad SEO
  - Primeras posiciones: "cursos de inglés online", "aprender inglés online", "clases de inglés online"
  - **Impacto**: Mejor relevancia para búsquedas principales

- ✅ Open Graph optimizado
  - Título más comercial y directo
  - Description con social proof
  - Añadido URL property
  - **Impacto**: Mejor CTR en compartidos sociales

- ✅ Twitter Cards mejorado
  - Añadidos handles @focus_english
  - Description optimizada con checkmarks
  - **Impacto**: Mejor presentación en Twitter/X

#### ✅ 2. Schema.org Organization Implementado (COMPLETADO)
**Archivo**: `app/layout.tsx`

**Schema Añadido**:
```json
{
  "@type": "EducationalOrganization",
  "aggregateRating": "4.8/5 (2500 reviews)",
  "offers": "€6.99 - €29.99",
  "contactPoint": "Customer Service",
  "sameAs": [LinkedIn, Twitter, Instagram, YouTube]
}
```

**Beneficios**:
- ✅ Rich Snippets en Google (rating stars visibles)
- ✅ Knowledge Panel potencial
- ✅ Mejor CTR (+30% estimado vs sin schema)

#### ✅ 3. Utilidades de Schema.org Creadas (COMPLETADO)
**Archivo**: `lib/schemas.ts`

**Funciones Disponibles**:
- ✅ `generateCourseSchema()` - Para páginas de cursos
- ✅ `generateArticleSchema()` - Para artículos de blog
- ✅ `generateFAQSchema()` - Para secciones FAQ
- ✅ `generateBreadcrumbSchema()` - Para navegación
- ✅ `generateReviewSchema()` - Para testimonios
- ✅ `generateAggregateRatingSchema()` - Para ratings

**Beneficios**:
- ✅ Reutilizable en toda la aplicación
- ✅ Type-safe con TypeScript
- ✅ Fácil de mantener y actualizar

---

## 🔄 EN PROGRESO

### 📊 FASE 2: Corrección de la Homepage

**Problema Detectado**: La homepage actual (`app/page.tsx`) es una página "Coming Soon", lo cual es CRÍTICO para SEO porque:
- ❌ No tiene contenido indexable
- ❌ No posiciona para ninguna keyword
- ❌ No tiene CTAs comerciales
- ❌ No genera conversiones

**Próximo Paso**: Reemplazar con landing page real optimizada para SEO.

---

## 📋 PENDIENTE (Priorizado)

### 🔴 URGENTE - Esta Semana

#### 1. Reemplazar Homepage "Coming Soon" 🔴 CRÍTICO
- [ ] Crear nueva homepage con:
  - Hero section optimizado con keywords
  - Sección "Por qué Focus English"
  - Cursos destacados
  - Testimonios con Schema.org Review
  - FAQ con Schema.org FAQPage
  - Pricing section
  - CTAs estratégicos
- **Tiempo estimado**: 4-6 horas
- **Impacto SEO**: ⚠️ MÁXIMO

#### 2. Implementar Schema.org en Páginas de Cursos 🔴 URGENTE
- [ ] Actualizar template `app/cursos/[goal]/[level]/page.tsx`
- [ ] Añadir Course Schema usando `generateCourseSchema()`
- [ ] Añadir Breadcrumb Schema
- [ ] Optimizar títulos y descriptions por nivel
- **Tiempo estimado**: 2-3 horas
- **Impacto SEO**: ⭐⭐⭐⭐⭐ MUY ALTO

#### 3. Implementar Schema.org en Blog 🟡 ALTA
- [ ] Actualizar template `app/blog/[slug]/page.tsx`
- [ ] Añadir Article Schema usando `generateArticleSchema()`
- [ ] Añadir FAQPage Schema en artículos con FAQ
- [ ] Añadir Breadcrumb Schema
- **Tiempo estimado**: 2 horas
- **Impacto SEO**: ⭐⭐⭐⭐ ALTO

#### 4. Optimizar Artículos Existentes 🟡 ALTA
- [ ] `preparar-examenes-oficiales.md`:
  - Añadir tabla de contenidos
  - Añadir enlaces internos (mínimo 10)
  - Añadir CTAs distribuidos
  - Añadir sección FAQ
  - Optimizar frontmatter metadata
- [ ] `ingles-esencial-viajar.md`:
  - Expandir a 2,000+ palabras
  - Añadir tabla de contenidos
  - Añadir enlaces internos
  - Añadir FAQ
- [ ] `ingles-profesional-sectores.md`:
  - Expandir a 2,000+ palabras
  - Similar al anterior
- **Tiempo estimado**: 4-6 horas total
- **Impacto SEO**: ⭐⭐⭐⭐ ALTO

#### 5. Configurar Google Search Console & Analytics 🔴 URGENTE
- [ ] Crear cuenta Google Search Console
- [ ] Verificar dominio focus-on-english.com
- [ ] Enviar sitemap.xml
- [ ] Configurar Google Analytics 4
- [ ] Añadir scripts de tracking
- [ ] Configurar eventos de conversión
- **Tiempo estimado**: 1-2 horas
- **Impacto**: 🎯 FUNDAMENTAL (no puedes medir sin esto)

#### 6. Backlinks Fáciles (Directorios) 🟡 ALTA
- [ ] Crear perfil Trustpilot
- [ ] Crear Google Business Profile
- [ ] Crear LinkedIn Company Page
- [ ] Crear Facebook Page
- [ ] Perfil en Emagister.com
- [ ] Perfil en Cursos.com
- [ ] Perfil en Educaedu.com
- **Tiempo estimado**: 2-3 horas
- **Impacto SEO**: ⭐⭐⭐ MEDIO (pero fácil de conseguir)

---

### 🟡 ALTA PRIORIDAD - Próximas 2 Semanas

#### 7. Crear Página Pilar Principal 🔴 CRÍTICO
**URL**: `/guia-completa-cursos-ingles-online`
- [ ] Crear archivo y estructura
- [ ] Contenido 5,000+ palabras
- [ ] Tabla de contenidos clicable
- [ ] 10+ enlaces internos estratégicos
- [ ] CTAs distribuidos (cada 1,000 palabras)
- [ ] Sección FAQ (20+ preguntas)
- [ ] Comparativa: Focus English vs Competencia
- [ ] Infografía de niveles CEFR
- [ ] Article Schema + FAQPage Schema
- **Tiempo estimado**: 2-3 días
- **Impacto SEO**: ⚠️ MÁXIMO (keyword principal 18,100 búsquedas/mes)

#### 8. Crear Artículos Long-Tail 🟡 ALTA
- [ ] "Cuánto Cuesta un Curso de Inglés Online" (1,500 palabras)
- [ ] "Cómo Elegir Curso de Inglés Online" (1,800 palabras)
- [ ] "Niveles Inglés CEFR Explicados" (2,000 palabras)
- [ ] "Diferencias Cambridge TOEFL IELTS" (2,200 palabras)
- **Tiempo estimado**: 1-2 días por artículo
- **Impacto SEO**: ⭐⭐⭐⭐ ALTO (low competition, high conversion)

#### 9. Crear Landing Pages Específicas 🔴 URGENTE
- [ ] `/preparacion-cambridge-b2` (2,500 palabras)
- [ ] `/preparacion-toefl` (2,000 palabras)
- [ ] `/preparacion-ielts` (2,000 palabras)
- **Tiempo estimado**: 1 día por página
- **Impacto SEO**: ⭐⭐⭐⭐⭐ MUY ALTO

#### 10. Core Web Vitals Optimization 🟢 MEDIA
- [ ] Convertir imágenes a WebP
- [ ] Implementar next/image en todas las páginas
- [ ] Optimizar fonts con next/font
- [ ] Lazy loading de componentes pesados
- [ ] Medir con Lighthouse
- **Tiempo estimado**: 1 día
- **Impacto SEO**: ⭐⭐⭐ MEDIO (pero necesario para ranking)

---

### 🟢 MEDIA PRIORIDAD - Próximo Mes

#### 11. Link Building - Guest Posts
- [ ] Identificar 20 blogs target (DA 50+)
- [ ] Preparar pitches personalizados
- [ ] Escribir 3 guest posts de calidad
- [ ] Outreach a editores
- **Tiempo estimado**: Continuo (2-3 horas/semana)
- **Impacto SEO**: ⭐⭐⭐⭐⭐ MUY ALTO (acumulativo)

#### 12. Social Media - YouTube Channel
- [ ] Crear canal YouTube
- [ ] Producir 5 videos "Inglés en 5 Minutos"
- [ ] Producir 3 videos "Preparación Cambridge B2"
- [ ] Optimizar títulos y descriptions para SEO
- **Tiempo estimado**: 2-3 días inicial
- **Impacto SEO**: ⭐⭐⭐⭐ ALTO (DA 100 backlink)

#### 13. Social Media - Instagram & TikTok
- [ ] Crear perfiles
- [ ] Calendario de contenido
- [ ] 30 posts + 15 Reels (Instagram)
- [ ] 20 videos (TikTok)
- **Tiempo estimado**: 1-2 horas/semana mantenimiento
- **Impacto SEO**: ⭐⭐⭐ MEDIO (señales sociales indirectas)

---

## 📊 MÉTRICAS A TRACKEAR

### Baselines (Actuales)
- **Tráfico Orgánico**: ~0 visitantes/mes
- **Keywords Top 100**: 0
- **Backlinks**: 0-5 estimados
- **Domain Authority**: 15 estimado
- **Conversión Rate**: N/A

### Objetivos Mes 1 (15 Febrero 2026)
- **Tráfico Orgánico**: 500 visitantes/mes
- **Keywords Top 100**: 5
- **Backlinks**: 47
- **Domain Authority**: 18
- **Conversión Rate**: 2%

### Objetivos Mes 3 (15 Abril 2026)
- **Tráfico Orgánico**: 2,000 visitantes/mes
- **Keywords Top 100**: 20
- **Keywords Top 10**: 5
- **Backlinks**: 173
- **Domain Authority**: 25
- **Conversión Rate**: 3.5%

### Objetivos Mes 6 (15 Julio 2026)
- **Tráfico Orgánico**: 5,000 visitantes/mes
- **Keywords Top 100**: 50
- **Keywords Top 10**: 15
- **Backlinks**: 482
- **Domain Authority**: 35
- **Conversión Rate**: 5%
- **MRR de SEO**: €5,000

---

## 🎯 PRÓXIMA SESIÓN DE TRABAJO

**Prioridad 1**: Reemplazar homepage "Coming Soon" con landing page real
**Prioridad 2**: Implementar Schema.org en páginas de cursos
**Prioridad 3**: Configurar Google Search Console + Analytics

**Tiempo estimado próxima sesión**: 6-8 horas

---

## 📝 NOTAS

### Errores de Build Detectados
Los errores actuales en Vercel son por falta de variables de entorno (API keys):
- `OPENAI_API_KEY` - Para evaluate-speaking routes
- Otros servicios: Supabase, Stripe, etc.

**Acción**: Estas variables deben configurarse en Vercel Environment Variables, pero NO afectan el SEO on-page que estamos implementando.

### Decisiones Técnicas
- ✅ Usamos Schema.org en lugar de JSON-LD inline en componentes
- ✅ Schemas reutilizables en `lib/schemas.ts`
- ✅ Metadata optimizada siguiendo best practices Next.js 15
- ✅ Anti-piracy code mantenido (aunque puede afectar Core Web Vitals ligeramente)

---

*Última actualización: 15 de Enero 2026 14:02*
