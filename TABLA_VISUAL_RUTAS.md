# 📊 TABLA VISUAL DE RUTAS - FOCUS ENGLISH

## 🎯 GUÍA RÁPIDA DE LECTURA

**Leyenda de Estados:**
- ✅ **Mantener** - La ruta funciona bien, sin cambios
- 🔄 **Mover/Renombrar** - Cambiar la URL pero mantener contenido
- ⚠️ **Crear** - Página nueva que no existe
- ❌ **Eliminar** - Ruta que debe desaparecer o unificarse
- 🔗 **Redirect** - Crear redirección 301 para SEO

**Leyenda de Prioridades:**
- 🔴 **Alta** - Hacer en Sprint 1-2 (Semanas 1-4)
- 🟡 **Media** - Hacer en Sprint 3-4 (Semanas 5-8)
- 🟢 **Baja** - Hacer en Sprint 5-6 (Semanas 9-12)

---

## 📋 TABLA COMPLETA DE RUTAS

### 1️⃣ PÁGINAS PRINCIPALES

| # | URL Actual | URL Nueva | Estado | Prioridad | Acción Detallada | Capturas |
|---|------------|-----------|--------|-----------|------------------|----------|
| 1 | `/` | `/` | ✅ Mantener | 🔴 Alta | Sin cambios - Homepage funciona bien | [Screenshot Homepage](#screenshot-1) |
| 2 | `/planes` | `/planes` | ✅ Mantener | 🔴 Alta | Sin cambios - Página de planes funciona bien | [Screenshot Planes](#screenshot-2) |
| 3 | `/diagnostico` | `/test-nivel` | 🔄 Renombrar | 🔴 Alta | Renombrar carpeta app/diagnostico → app/test-nivel + Redirect 301 | [Screenshot Test](#screenshot-3) |
| 4 | `/contact` | `/contacto` | 🔄 Renombrar | 🟡 Media | Renombrar carpeta app/contact → app/contacto + Redirect 301 | [Screenshot Contacto](#screenshot-4) |
| 5 | `/blog` | `/blog` | ✅ Mantener | 🟡 Media | Sin cambios - Blog funciona bien | [Screenshot Blog](#screenshot-5) |
| 6 | `/cursos` | `/cursos` | ✅ Mantener | 🔴 Alta | Mejorar diseño - Agregar filtros y búsqueda | [Screenshot Cursos](#screenshot-6) |

**Total Páginas Principales**: 6 páginas
- 4 sin cambios
- 2 renombrar

---

### 2️⃣ AUTENTICACIÓN Y USUARIO

| # | URL Actual | URL Nueva | Estado | Prioridad | Acción Detallada | Notas |
|---|------------|-----------|--------|-----------|------------------|-------|
| 7 | `/login` | `/cuenta/login` | 🔄 Mover | 🔴 Alta | Mover app/login → app/cuenta/login + Redirect | Unificar con /signin |
| 8 | `/signin` | `/cuenta/login` | ❌ Eliminar | 🔴 Alta | Redirect 301 → /cuenta/login | **DUPLICADO** |
| 9 | `/register` | `/cuenta/registro` | ❌ Eliminar | 🔴 Alta | Redirect 301 → /cuenta/registro | **DUPLICADO** |
| 10 | `/signup` | `/cuenta/registro` | 🔄 Mover | 🔴 Alta | Mover app/signup → app/cuenta/registro + Redirect | Unificar con /register |
| 11 | `/forgot-password` | `/cuenta/recuperar` | 🔄 Mover | 🟢 Baja | Mover app/forgot-password → app/cuenta/recuperar | Simplificar nombre |
| 12 | `/reset-password` | `/cuenta/restablecer` | 🔄 Mover | 🟢 Baja | Mover app/reset-password → app/cuenta/restablecer | Simplificar nombre |
| 13 | `/dashboard` | `/estudiante/dashboard` | 🔄 Mover | 🔴 Alta | Mover app/dashboard → app/estudiante/dashboard | Separar área usuario |
| 14 | ❌ | `/estudiante/mis-cursos` | ⚠️ Crear | 🟡 Media | Crear nueva página - Lista de cursos activos del estudiante | Nueva funcionalidad |
| 15 | ❌ | `/estudiante/progreso` | ⚠️ Crear | 🟢 Baja | Crear nueva página - Estadísticas y progreso detallado | Nueva funcionalidad |
| 16 | `/certificados` | `/estudiante/certificados` | 🔄 Mover | 🟡 Media | Mover app/certificados → app/estudiante/certificados | Si existe |
| 17 | ❌ | `/estudiante/perfil` | ⚠️ Crear | 🟡 Media | Crear nueva página - Configuración de perfil de usuario | Nueva funcionalidad |
| 18 | `/success` | `/exito` | 🔄 Renombrar | 🟡 Media | Renombrar app/success → app/exito | Traducir al español |

**Total Autenticación**: 12 páginas
- 0 sin cambios
- 8 mover/renombrar
- 4 crear nuevas
- 2 eliminar duplicados

**Resultado**: **12 rutas → 9 rutas** (simplificación 25%)

---

### 3️⃣ CURSOS - TRABAJO

| # | URL | Estado | Prioridad | Descripción | Contenido Principal |
|---|-----|--------|-----------|-------------|---------------------|
| 19 | `/cursos/trabajo` | ⚠️ Crear | 🔴 Alta | **Landing Inglés para Trabajar** | Hero, grid niveles, especializados, testimonios, CTA |
| 20 | `/cursos/trabajo/a1` | ✅ Mantener | 🟡 Media | Curso Trabajo A1 | Ya existe - Dinámico |
| 21 | `/cursos/trabajo/a2` | ✅ Mantener | 🟡 Media | Curso Trabajo A2 | Ya existe - Dinámico |
| 22 | `/cursos/trabajo/b1` | ✅ Mantener | 🟡 Media | Curso Trabajo B1 | Ya existe - Dinámico |
| 23 | `/cursos/trabajo/b2` | ✅ Mantener | 🔴 Alta | Curso Trabajo B2 | Ya existe - Dinámico |
| 24 | `/cursos/trabajo/c1` | ✅ Mantener | 🟡 Media | Curso Trabajo C1 | Ya existe - Dinámico |
| 25 | `/cursos/trabajo/c2` | ✅ Mantener | 🟢 Baja | Curso Trabajo C2 | Ya existe - Dinámico |

**Cursos Especializados:**

| # | URL | Estado | Prioridad | Descripción | Target Audience |
|---|-----|--------|-----------|-------------|-----------------|
| 26 | `/cursos/trabajo/especializados/negocios` | ⚠️ Crear | 🟡 Media | Inglés para Negocios | CEOs, managers, consultores |
| 27 | `/cursos/trabajo/especializados/tecnologia` | ⚠️ Crear | 🟡 Media | Inglés para Tecnología | Desarrolladores, QA, DevOps |
| 28 | `/cursos/trabajo/especializados/medicina` | ⚠️ Crear | 🟢 Baja | Inglés para Medicina | Médicos, enfermeras, investigadores |
| 29 | `/cursos/trabajo/especializados/legal` | ⚠️ Crear | 🟢 Baja | Inglés para Legal | Abogados, notarios, juristas |
| 30 | `/cursos/trabajo/especializados/marketing` | ⚠️ Crear | 🟢 Baja | Inglés para Marketing | Marketers, social media, publicidad |

**Total Trabajo**: 12 páginas
- 1 landing + 6 niveles + 5 especializados

---

### 4️⃣ CURSOS - VIAJES

| # | URL | Estado | Prioridad | Descripción | Contenido Principal |
|---|-----|--------|-----------|-------------|---------------------|
| 31 | `/cursos/viajes` | ⚠️ Crear | 🔴 Alta | **Landing Inglés para Viajar** | Hero, niveles, situaciones prácticas, testimonios |
| 32 | `/cursos/viajes/a1` | ✅ Mantener | 🟡 Media | Curso Viajes A1 | Ya existe - Dinámico |
| 33 | `/cursos/viajes/a2` | ✅ Mantener | 🔴 Alta | Curso Viajes A2 | Ya existe - Dinámico |
| 34 | `/cursos/viajes/b1` | ✅ Mantener | 🟡 Media | Curso Viajes B1 | Ya existe - Dinámico |
| 35 | `/cursos/viajes/b2` | ✅ Mantener | 🟡 Media | Curso Viajes B2 | Ya existe - Dinámico |
| 36 | `/cursos/viajes/c1` | ✅ Mantener | 🟢 Baja | Curso Viajes C1 | Ya existe - Dinámico |
| 37 | `/cursos/viajes/c2` | ✅ Mantener | 🟢 Baja | Curso Viajes C2 | Ya existe - Dinámico |

**Total Viajes**: 7 páginas
- 1 landing + 6 niveles

---

### 5️⃣ CURSOS - EXÁMENES

**Cursos Generales por Nivel:**

| # | URL | Estado | Prioridad | Descripción | Contenido |
|---|-----|--------|-----------|-------------|-----------|
| 38 | `/cursos/examenes` | ⚠️ Crear | 🔴 Alta | **Landing Preparación Exámenes** | Hero, exámenes disponibles, tasas éxito, metodología |
| 39 | `/cursos/examenes/a1` | ✅ Mantener | 🟢 Baja | Curso Exámenes A1 | Ya existe - Dinámico |
| 40 | `/cursos/examenes/a2` | ✅ Mantener | 🟢 Baja | Curso Exámenes A2 | Ya existe - Dinámico |
| 41 | `/cursos/examenes/b1` | ✅ Mantener | 🟡 Media | Curso Exámenes B1 | Ya existe - Dinámico |
| 42 | `/cursos/examenes/b2` | ✅ Mantener | 🔴 Alta | Curso Exámenes B2 | Ya existe - Dinámico |
| 43 | `/cursos/examenes/c1` | ✅ Mantener | 🟡 Media | Curso Exámenes C1 | Ya existe - Dinámico |
| 44 | `/cursos/examenes/c2` | ✅ Mantener | 🟢 Baja | Curso Exámenes C2 | Ya existe - Dinámico |

**Exámenes Oficiales Específicos:**

| # | URL Actual | URL Nueva | Estado | Prioridad | Descripción | Lecciones |
|---|-----------|-----------|--------|-----------|-------------|-----------|
| 45 | `/curso-b2` | `/cursos/examenes/oficiales/cambridge-b2-first` | 🔄 Mover | 🔴 Alta | **Cambridge B2 First (FCE)** - Curso completo interactivo | 6 módulos, 30 lecciones |
| 46 | ❌ | `/cursos/examenes/oficiales/cambridge-c1-advanced` | ⚠️ Crear | 🟡 Media | **Cambridge C1 Advanced (CAE)** - Curso completo | Duplicar estructura B2 |
| 47 | ❌ | `/cursos/examenes/oficiales/toefl` | ⚠️ Crear | 🟡 Media | **TOEFL iBT** - Preparación completa | 4 secciones exam |
| 48 | ❌ | `/cursos/examenes/oficiales/ielts` | ⚠️ Crear | 🟡 Media | **IELTS Academic** - Preparación completa | 4 módulos exam |

**Total Exámenes**: 11 páginas
- 1 landing + 6 niveles + 4 exámenes oficiales

---

### 6️⃣ CURSOS - VISTA POR NIVEL (Opcional)

| # | URL | Estado | Prioridad | Descripción | Función |
|---|-----|--------|-----------|-------------|---------|
| 49 | `/niveles` | ⚠️ Crear | 🟢 Baja | **Landing Vista por Nivel** | Selector de nivel alternativo |
| 50 | `/niveles/a1` | ⚠️ Crear | 🟢 Baja | Todos los cursos A1 | Agregador trabajo + viajes + exámenes A1 |
| 51 | `/niveles/a2` | ⚠️ Crear | 🟢 Baja | Todos los cursos A2 | Agregador trabajo + viajes + exámenes A2 |
| 52 | `/niveles/b1` | ⚠️ Crear | 🟢 Baja | Todos los cursos B1 | Agregador trabajo + viajes + exámenes B1 |
| 53 | `/niveles/b2` | ⚠️ Crear | 🟡 Media | Todos los cursos B2 | Agregador trabajo + viajes + exámenes B2 |
| 54 | `/niveles/c1` | ⚠️ Crear | 🟢 Baja | Todos los cursos C1 | Agregador trabajo + viajes + exámenes C1 |
| 55 | `/niveles/c2` | ⚠️ Crear | 🟢 Baja | Todos los cursos C2 | Agregador trabajo + viajes + exámenes C2 |

**Total Niveles**: 7 páginas (OPCIONAL)
- 1 landing + 6 agregadores

---

### 7️⃣ BLOG Y RECURSOS

| # | URL | Estado | Prioridad | Tipo | Palabras | Categoría |
|---|-----|--------|-----------|------|----------|-----------|
| 56 | `/blog` | ✅ Mantener | 🟡 Media | Índice Blog | - | - |
| 57 | `/blog/ingles-profesional-sectores` | ✅ Mantener | 🟡 Media | Artículo | ~1,200 | Trabajo |
| 58 | `/blog/ingles-esencial-viajar` | ✅ Mantener | 🟡 Media | Artículo | ~2,500 | Viajes |
| 59 | `/blog/preparar-examenes-oficiales` | ✅ Mantener | 🟡 Media | Artículo | ~2,800 | Exámenes |

**Total Blog**: 4 páginas
- Índice + 3 artículos

**Nota**: Se pueden agregar más artículos en el futuro siguiendo la estructura existente.

---

### 8️⃣ UTILIDADES Y LEGALES

| # | URL Actual | URL Nueva | Estado | Prioridad | Tipo de Página | Contenido |
|---|-----------|-----------|--------|-----------|----------------|-----------|
| 60 | `/certificaciones` | ❌ | ❌ Eliminar | 🟢 Baja | - | Ya redirige a /cursos |
| 61 | ❌ | `/sobre-nosotros` | ⚠️ Crear | 🟢 Baja | Institucional | Historia, misión, equipo |
| 62 | ❌ | `/preguntas-frecuentes` | ⚠️ Crear | 🟡 Media | FAQ | Preguntas comunes agrupadas |
| 63 | ❌ | `/politica-privacidad` | ⚠️ Crear | 🟢 Baja | Legal | GDPR, cookies, datos |
| 64 | ❌ | `/terminos-condiciones` | ⚠️ Crear | 🟢 Baja | Legal | TOS, uso plataforma |
| 65 | ❌ | `/politica-cookies` | ⚠️ Crear | 🟢 Baja | Legal | Uso de cookies |

**Total Utilidades**: 6 páginas
- 1 eliminar + 5 crear

---

## 📊 RESUMEN NUMÉRICO

### Totales por Categoría

| Categoría | Páginas | Mantener | Mover | Crear | Eliminar |
|-----------|---------|----------|-------|-------|----------|
| 1️⃣ Principales | 6 | 4 | 2 | 0 | 0 |
| 2️⃣ Autenticación | 12 | 0 | 8 | 4 | 2 |
| 3️⃣ Trabajo | 12 | 6 | 0 | 6 | 0 |
| 4️⃣ Viajes | 7 | 6 | 0 | 1 | 0 |
| 5️⃣ Exámenes | 11 | 6 | 1 | 4 | 0 |
| 6️⃣ Niveles | 7 | 0 | 0 | 7 | 0 |
| 7️⃣ Blog | 4 | 4 | 0 | 0 | 0 |
| 8️⃣ Utilidades | 6 | 0 | 0 | 5 | 1 |
| **TOTAL** | **65** | **26** | **11** | **27** | **3** |

### Por Prioridad

| Prioridad | Cantidad | Porcentaje | Timeline |
|-----------|----------|------------|----------|
| 🔴 Alta | 18 | 28% | Semanas 1-4 |
| 🟡 Media | 25 | 38% | Semanas 5-8 |
| 🟢 Baja | 22 | 34% | Semanas 9-12 |

---

## 🔗 TABLA DE REDIRECTS (next.config.js)

### Redirects a Implementar

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      // AUTENTICACIÓN - Unificar duplicados
      {
        source: '/signin',
        destination: '/cuenta/login',
        permanent: true, // 301
      },
      {
        source: '/register',
        destination: '/cuenta/registro',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/cuenta/login',
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/cuenta/registro',
        permanent: true,
      },
      
      // RENOMBRAR PÁGINAS PRINCIPALES
      {
        source: '/diagnostico',
        destination: '/test-nivel',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/success',
        destination: '/exito',
        permanent: true,
      },
      
      // MOVER ÁREA DE USUARIO
      {
        source: '/dashboard',
        destination: '/estudiante/dashboard',
        permanent: true,
      },
      {
        source: '/forgot-password',
        destination: '/cuenta/recuperar',
        permanent: true,
      },
      {
        source: '/reset-password',
        destination: '/cuenta/restablecer',
        permanent: true,
      },
      
      // CURSOS - Mover B2
      {
        source: '/curso-b2',
        destination: '/cursos/examenes/oficiales/cambridge-b2-first',
        permanent: true,
      },
      {
        source: '/curso-b2/:lessonId*',
        destination: '/cursos/examenes/oficiales/cambridge-b2-first/leccion/:lessonId*',
        permanent: true,
      },
      
      // ELIMINAR PÁGINAS OBSOLETAS
      {
        source: '/certificaciones',
        destination: '/cursos',
        permanent: true,
      },
    ]
  },
}
```

**Total Redirects**: 14 redirects 301

---

## 🎨 SCREENSHOTS CONCEPTUALES

### Screenshot 1: Homepage
**URL**: `/`
**Estado**: ✅ Mantener

```
┌─────────────────────────────────────────┐
│ HEADER: Focus English | Cursos ▾ ...   │
├─────────────────────────────────────────┤
│                                         │
│          HERO SECTION                   │
│    "Domina el Inglés Para Tu Objetivo" │
│                                         │
│   [🎯 Test Nivel]  [Ver Cursos]        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  [💼 TRABAJO]  [✈️ VIAJES]  [📝 EXÁMENES]│
│                                         │
├─────────────────────────────────────────┤
│         BLOG PREVIEW (3 artículos)      │
├─────────────────────────────────────────┤
│              CTA FINAL                  │
└─────────────────────────────────────────┘
```

---

### Screenshot 2: Planes
**URL**: `/planes`
**Estado**: ✅ Mantener

```
┌─────────────────────────────────────────┐
│         Elige Tu Plan Perfecto          │
│                                         │
│   [Toggle: Mensual / Anual ✓]          │
│                                         │
│  ┌──────────┐        ┌──────────┐      │
│  │ BÁSICO   │        │ PREMIUM  │      │
│  │ €14.99/m │        │ €29.99/m │      │
│  │          │        │ ⭐Popular│      │
│  │ Features │        │ Features │      │
│  │          │        │          │      │
│  │ [Elegir] │        │ [Elegir] │      │
│  └──────────┘        └──────────┘      │
│                                         │
│         FAQ - Preguntas Frecuentes      │
└─────────────────────────────────────────┘
```

---

### Screenshot 3: Test de Nivel
**URL**: `/test-nivel` (antes `/diagnostico`)
**Estado**: 🔄 Renombrar

```
┌─────────────────────────────────────────┐
│    Descubre Tu Nivel de Inglés          │
│                                         │
│  ✓ 15-20 min  ✓ Gratis  ✓ A1-C2        │
│                                         │
│  Pregunta 1/24:                         │
│  What _____ your name?                  │
│  ○ is    ○ are    ○ am    ○ be          │
│                                         │
│             [Siguiente →]               │
│                                         │
│  Progreso: ████████░░░░░░░░ 33%        │
└─────────────────────────────────────────┘
```

---

### Screenshot 6: Landing Trabajo (NUEVA)
**URL**: `/cursos/trabajo`
**Estado**: ⚠️ Crear

```
┌─────────────────────────────────────────┐
│  💼 Impulsa Tu Carrera Profesional      │
│    con Inglés Empresarial               │
│                                         │
│   [🎯 Test Nivel]  [Ver Planes]        │
│                                         │
├─────────────────────────────────────────┤
│      NIVELES DISPONIBLES                │
│                                         │
│ [A1] [A2] [B1] [B2⭐] [C1] [C2]         │
│                                         │
├─────────────────────────────────────────┤
│   CURSOS ESPECIALIZADOS POR SECTOR      │
│                                         │
│ [💼 Negocios]  [💻 Tecnología]          │
│ [⚕️ Medicina]  [⚖️ Legal]  [📊 Marketing]│
│                                         │
├─────────────────────────────────────────┤
│        TESTIMONIOS                      │
│  "Conseguí un ascenso gracias al curso" │
└─────────────────────────────────────────┘
```

---

## ✅ CRITERIOS DE ACEPTACIÓN

### Para Cada Página Nueva

- [ ] Diseño responsive (móvil, tablet, desktop)
- [ ] Metadata SEO completa (title, description, keywords)
- [ ] Open Graph tags para redes sociales
- [ ] Breadcrumb navigation (excepto homepage)
- [ ] CTAs claros y visibles
- [ ] Tiempo de carga < 3 segundos
- [ ] Lighthouse score > 90
- [ ] Sin errores de consola
- [ ] Formularios validados (si aplica)
- [ ] Links funcionando correctamente

---

## 📝 NOTAS IMPORTANTES

### Páginas Dinámicas Existentes

Las siguientes rutas ya existen como páginas dinámicas en:
`/app/cursos/[goal]/[level]/page.tsx`

Donde:
- `[goal]` = `trabajo`, `viajes`, `examenes`
- `[level]` = `a1`, `a2`, `b1`, `b2`, `c1`, `c2`

**Total combinaciones**: 3 goals × 6 levels = **18 páginas dinámicas**

Estas 18 páginas NO necesitan ser creadas individualmente, solo el template ya existe.

### Lecciones del Curso B2

Las lecciones individuales están en:
`/app/curso-b2/leccion/[lessonId]/page.tsx`

Estas deben ser movidas a:
`/app/cursos/examenes/oficiales/cambridge-b2-first/leccion/[lessonId]/page.tsx`

---

**Documento creado**: 2026-01-15
**Última actualización**: 2026-01-15
**Versión**: 1.0
**Estado**: 📋 Documento de Referencia

