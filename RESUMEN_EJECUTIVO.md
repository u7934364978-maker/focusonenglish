# 📋 RESUMEN EJECUTIVO - REESTRUCTURACIÓN FOCUS ENGLISH

## 🎯 OBJETIVO PRINCIPAL
Reorganizar la arquitectura de información y navegación del sitio web Focus English para mejorar la experiencia del usuario y aumentar las conversiones.

---

## ⚡ RESUMEN EN 3 MINUTOS

### 🚨 Problemas Actuales
1. **Rutas duplicadas** (login/signin, register/signup)
2. **Navegación inconsistente** (algunos enlaces van a páginas que no existen)
3. **Falta de jerarquía clara** en cursos
4. **Difícil encontrar** curso específico para necesidad concreta

### ✅ Solución Propuesta
- **Menú desplegable "Cursos"** con 3 categorías principales
- **URLs consistentes** y SEO-friendly
- **Múltiples caminos** para llegar al mismo destino
- **User-centric organization** por objetivo (no por estructura interna)

### 📊 Impacto Esperado
- ⬇️ **-40% rebote** en homepage
- ⬆️ **+60% conversión** test de nivel
- ⬆️ **+35% inscripciones** a cursos pagos
- ⬇️ **-3 clics** promedio para llegar a curso deseado

---

## 📄 TABLA COMPLETA DE RUTAS

### 🔴 RUTAS PRINCIPALES

| URL Actual | URL Nueva | Estado | Prioridad | Acción |
|------------|-----------|--------|-----------|--------|
| `/` | `/` | ✅ Mantener | 🔴 Alta | Sin cambios |
| `/planes` | `/planes` | ✅ Mantener | 🔴 Alta | Sin cambios |
| `/diagnostico` | `/test-nivel` | 🔄 Renombrar | 🔴 Alta | Redirect 301 |
| `/contact` | `/contacto` | 🔄 Renombrar | 🟡 Media | Redirect 301 |
| `/blog` | `/blog` | ✅ Mantener | 🟡 Media | Sin cambios |

---

### 👤 RUTAS DE AUTENTICACIÓN (Unificar)

| URL Actual | URL Nueva | Estado | Prioridad | Acción |
|------------|-----------|--------|-----------|--------|
| `/login` | `/cuenta/login` | 🔄 Mover | 🔴 Alta | Redirect 301 + Mover |
| `/signin` | `/cuenta/login` | ❌ Eliminar | 🔴 Alta | Redirect 301 |
| `/register` | `/cuenta/registro` | ❌ Eliminar | 🔴 Alta | Redirect 301 |
| `/signup` | `/cuenta/registro` | 🔄 Mover | 🔴 Alta | Redirect 301 + Mover |
| `/forgot-password` | `/cuenta/recuperar` | 🔄 Mover | 🟢 Baja | Redirect 301 |
| `/reset-password` | `/cuenta/restablecer` | 🔄 Mover | 🟢 Baja | Redirect 301 |

**Resultado**: 6 rutas → 3 rutas (simplificación de 50%)

---

### 🎓 RUTAS DE CURSOS (Reestructurar)

#### A) Cursos por Objetivo - TRABAJO

| URL Actual | URL Nueva | Estado | Prioridad | Acción |
|------------|-----------|--------|-----------|--------|
| ❌ No existe | `/cursos/trabajo` | ⚠️ Crear | 🔴 Alta | Nueva landing |
| `/cursos/trabajo/a1` | `/cursos/trabajo/a1` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/cursos/trabajo/a2` | `/cursos/trabajo/a2` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/cursos/trabajo/b1` | `/cursos/trabajo/b1` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/cursos/trabajo/b2` | `/cursos/trabajo/b2` | ✅ Mantener | 🔴 Alta | Sin cambios |
| `/cursos/trabajo/c1` | `/cursos/trabajo/c1` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/cursos/trabajo/c2` | `/cursos/trabajo/c2` | ✅ Mantener | 🟢 Baja | Sin cambios |
| ❌ No existe | `/cursos/trabajo/especializados/negocios` | ⚠️ Crear | 🟡 Media | Nuevo curso |
| ❌ No existe | `/cursos/trabajo/especializados/tecnologia` | ⚠️ Crear | 🟡 Media | Nuevo curso |
| ❌ No existe | `/cursos/trabajo/especializados/medicina` | ⚠️ Crear | 🟢 Baja | Nuevo curso |
| ❌ No existe | `/cursos/trabajo/especializados/legal` | ⚠️ Crear | 🟢 Baja | Nuevo curso |
| ❌ No existe | `/cursos/trabajo/especializados/marketing` | ⚠️ Crear | 🟢 Baja | Nuevo curso |

**Total Trabajo**: 1 landing + 6 niveles + 5 especializados = **12 páginas**

---

#### B) Cursos por Objetivo - VIAJES

| URL Actual | URL Nueva | Estado | Prioridad | Acción |
|------------|-----------|--------|-----------|--------|
| ❌ No existe | `/cursos/viajes` | ⚠️ Crear | 🔴 Alta | Nueva landing |
| `/cursos/viajes/a1` | `/cursos/viajes/a1` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/cursos/viajes/a2` | `/cursos/viajes/a2` | ✅ Mantener | 🔴 Alta | Sin cambios |
| `/cursos/viajes/b1` | `/cursos/viajes/b1` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/cursos/viajes/b2` | `/cursos/viajes/b2` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/cursos/viajes/c1` | `/cursos/viajes/c1` | ✅ Mantener | 🟢 Baja | Sin cambios |
| `/cursos/viajes/c2` | `/cursos/viajes/c2` | ✅ Mantener | 🟢 Baja | Sin cambios |

**Total Viajes**: 1 landing + 6 niveles = **7 páginas**

---

#### C) Cursos por Objetivo - EXÁMENES

| URL Actual | URL Nueva | Estado | Prioridad | Acción |
|------------|-----------|--------|-----------|--------|
| ❌ No existe | `/cursos/examenes` | ⚠️ Crear | 🔴 Alta | Nueva landing |
| `/cursos/examenes/a1` | `/cursos/examenes/a1` | ✅ Mantener | 🟢 Baja | Sin cambios |
| `/cursos/examenes/a2` | `/cursos/examenes/a2` | ✅ Mantener | 🟢 Baja | Sin cambios |
| `/cursos/examenes/b1` | `/cursos/examenes/b1` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/cursos/examenes/b2` | `/cursos/examenes/b2` | ✅ Mantener | 🔴 Alta | Sin cambios |
| `/cursos/examenes/c1` | `/cursos/examenes/c1` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/cursos/examenes/c2` | `/cursos/examenes/c2` | ✅ Mantener | 🟢 Baja | Sin cambios |
| `/curso-b2` | `/cursos/examenes/oficiales/cambridge-b2-first` | 🔄 Mover | 🔴 Alta | Redirect 301 + Mover |
| ❌ No existe | `/cursos/examenes/oficiales/cambridge-c1-advanced` | ⚠️ Crear | 🟡 Media | Duplicar estructura B2 |
| ❌ No existe | `/cursos/examenes/oficiales/toefl` | ⚠️ Crear | 🟡 Media | Nueva página |
| ❌ No existe | `/cursos/examenes/oficiales/ielts` | ⚠️ Crear | 🟡 Media | Nueva página |

**Total Exámenes**: 1 landing + 6 niveles + 4 oficiales = **11 páginas**

---

#### D) Cursos por Nivel (Vista Alternativa)

| URL Actual | URL Nueva | Estado | Prioridad | Acción |
|------------|-----------|--------|-----------|--------|
| `/cursos` | `/cursos` | ✅ Mantener | 🔴 Alta | Mejorar diseño |
| ❌ No existe | `/niveles` | ⚠️ Crear | 🟢 Baja | Nueva vista opcional |
| ❌ No existe | `/niveles/a1` | ⚠️ Crear | 🟢 Baja | Agregador de cursos A1 |
| ❌ No existe | `/niveles/a2` | ⚠️ Crear | 🟢 Baja | Agregador de cursos A2 |
| ❌ No existe | `/niveles/b1` | ⚠️ Crear | 🟢 Baja | Agregador de cursos B1 |
| ❌ No existe | `/niveles/b2` | ⚠️ Crear | 🟡 Media | Agregador de cursos B2 |
| ❌ No existe | `/niveles/c1` | ⚠️ Crear | 🟢 Baja | Agregador de cursos C1 |
| ❌ No existe | `/niveles/c2` | ⚠️ Crear | 🟢 Baja | Agregador de cursos C2 |

**Total Niveles**: 1 catálogo + 6 agregadores = **7 páginas** (opcional)

---

### 📚 RUTAS DE BLOG

| URL Actual | URL Nueva | Estado | Prioridad | Acción |
|------------|-----------|--------|-----------|--------|
| `/blog` | `/blog` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/blog/ingles-profesional-sectores` | `/blog/ingles-profesional-sectores` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/blog/ingles-esencial-viajar` | `/blog/ingles-esencial-viajar` | ✅ Mantener | 🟡 Media | Sin cambios |
| `/blog/preparar-examenes-oficiales` | `/blog/preparar-examenes-oficiales` | ✅ Mantener | 🟡 Media | Sin cambios |

**Total Blog**: 1 índice + 3 artículos = **4 páginas**

---

### 👨‍🎓 RUTAS DE ESTUDIANTE (Dashboard)

| URL Actual | URL Nueva | Estado | Prioridad | Acción |
|------------|-----------|--------|-----------|--------|
| `/dashboard` | `/estudiante/dashboard` | 🔄 Mover | 🔴 Alta | Redirect 301 + Mover |
| ❌ No existe | `/estudiante/mis-cursos` | ⚠️ Crear | 🟡 Media | Nueva página |
| ❌ No existe | `/estudiante/progreso` | ⚠️ Crear | 🟢 Baja | Nueva página |
| `/certificados` | `/estudiante/certificados` | 🔄 Mover | 🟡 Media | Mover |
| ❌ No existe | `/estudiante/perfil` | ⚠️ Crear | 🟡 Media | Nueva página |

**Total Estudiante**: 5 páginas

---

### 🔧 RUTAS DE UTILIDAD

| URL Actual | URL Nueva | Estado | Prioridad | Acción |
|------------|-----------|--------|-----------|--------|
| `/certificaciones` | ❌ Eliminar | ❌ Eliminar | 🟢 Baja | Ya redirige a /cursos |
| `/success` | `/exito` | 🔄 Renombrar | 🟡 Media | Redirect 301 |
| ❌ No existe | `/sobre-nosotros` | ⚠️ Crear | 🟢 Baja | Nueva página |
| ❌ No existe | `/preguntas-frecuentes` | ⚠️ Crear | 🟡 Media | Nueva página |
| ❌ No existe | `/politica-privacidad` | ⚠️ Crear | 🟢 Baja | Nueva página (legal) |
| ❌ No existe | `/terminos-condiciones` | ⚠️ Crear | 🟢 Baja | Nueva página (legal) |

**Total Utilidad**: 5 páginas

---

## 📊 RESUMEN DE CAMBIOS

### Por Tipo de Acción

| Acción | Cantidad | % del Total | Prioridad |
|--------|----------|-------------|-----------|
| ✅ Mantener sin cambios | 25 | 38% | Variable |
| 🔄 Mover/Renombrar | 12 | 18% | Alta |
| ⚠️ Crear nueva | 24 | 36% | Variable |
| ❌ Eliminar/Unificar | 5 | 8% | Alta |
| **TOTAL** | **66** | **100%** | - |

---

### Por Prioridad

| Prioridad | Páginas | % | Plazo |
|-----------|---------|---|-------|
| 🔴 Alta | 18 | 27% | Sprint 1-2 (2-4 semanas) |
| 🟡 Media | 26 | 39% | Sprint 3-4 (5-8 semanas) |
| 🟢 Baja | 22 | 33% | Sprint 5-6 (9-12 semanas) |
| **TOTAL** | **66** | **100%** | **3 meses** |

---

### Por Área

| Área | Páginas | Estado Actual | Estado Futuro |
|------|---------|---------------|---------------|
| Principales | 5 | 80% ok | 100% ok |
| Autenticación | 6 | Duplicadas | 3 unificadas |
| Cursos | 30 | Incompletas | Completas + Organizadas |
| Blog | 4 | Ok | Ok |
| Estudiante | 5 | Básico | Completo |
| Utilidad | 6 | Mínimas | Completas |
| **TOTAL** | **56** | **45% óptimo** | **100% óptimo** |

---

## 🚀 PLAN DE IMPLEMENTACIÓN PRIORITARIO

### ✅ FASE 1: LIMPIEZA (Semanas 1-2) - URGENTE

**Objetivo**: Eliminar duplicados y crear redirects

#### Tareas:
1. **Unificar Autenticación** (2 días)
   - Mover `/login` → `/cuenta/login`
   - Crear redirects: `/signin`, `/register`, `/signup`
   - Actualizar todos los enlaces internos
   - Probar flujos completos

2. **Renombrar Rutas Principales** (1 día)
   - `/diagnostico` → `/test-nivel`
   - `/contact` → `/contacto`
   - Crear redirects 301
   - Actualizar sitemap.xml

3. **Eliminar Rutas Innecesarias** (1 día)
   - Eliminar `/certificaciones` (ya redirige)
   - Verificar no hay enlaces rotos
   - Actualizar robots.txt

4. **Actualizar Navegación** (2 días)
   - Modificar `components/sections/Navigation.tsx`
   - Actualizar enlaces del Footer
   - Probar navegación móvil

**Resultado Fase 1**: 6 rutas eliminadas, 0 errores 404, navegación coherente

---

### 🏗️ FASE 2: LANDINGS DE OBJETIVOS (Semanas 3-4) - ALTA

**Objetivo**: Crear páginas de entrada para cada tipo de curso

#### Tareas:
1. **Landing Trabajo** `/cursos/trabajo` (3 días)
   - Hero con propuesta de valor
   - Grid de niveles A1-C2
   - Sección de especializados
   - Testimonios
   - CTA a test de nivel

2. **Landing Viajes** `/cursos/viajes` (2 días)
   - Adaptar diseño de Trabajo
   - Contenido específico de viajes
   - Situaciones prácticas

3. **Landing Exámenes** `/cursos/examenes` (2 días)
   - Adaptar diseño
   - Lista de exámenes oficiales
   - Tasas de aprobación

4. **Mover Curso B2** (1 día)
   - `/curso-b2` → `/cursos/examenes/oficiales/cambridge-b2-first`
   - Redirect 301
   - Actualizar enlaces

**Resultado Fase 2**: 3 landings + 1 curso movido = 4 páginas nuevas

---

### 📚 FASE 3: CURSOS ESPECIALIZADOS (Semanas 5-6) - MEDIA

**Objetivo**: Crear cursos especializados por sector

#### Tareas (cada curso 1 día):
1. `/cursos/trabajo/especializados/negocios`
2. `/cursos/trabajo/especializados/tecnologia`
3. `/cursos/trabajo/especializados/medicina`
4. `/cursos/trabajo/especializados/legal`
5. `/cursos/trabajo/especializados/marketing`

**Resultado Fase 3**: 5 cursos especializados

---

### 🎓 FASE 4: EXÁMENES OFICIALES (Semanas 7-8) - MEDIA

**Objetivo**: Duplicar estructura de B2 para otros exámenes

#### Tareas (cada examen 2 días):
1. `/cursos/examenes/oficiales/cambridge-c1-advanced`
2. `/cursos/examenes/oficiales/toefl`
3. `/cursos/examenes/oficiales/ielts`

**Resultado Fase 4**: 3 cursos de exámenes oficiales

---

### 👤 FASE 5: ÁREA DE ESTUDIANTE (Semanas 9-10) - MEDIA/BAJA

**Objetivo**: Completar funcionalidades del dashboard

#### Tareas:
1. Mover `/dashboard` → `/estudiante/dashboard` (1 día)
2. Crear `/estudiante/mis-cursos` (2 días)
3. Crear `/estudiante/certificados` (1 día)
4. Crear `/estudiante/perfil` (2 días)
5. Crear `/estudiante/progreso` (2 días)

**Resultado Fase 5**: 5 páginas de área de estudiante

---

### 🔧 FASE 6: UTILIDADES Y LEGALES (Semanas 11-12) - BAJA

**Objetivo**: Completar páginas auxiliares

#### Tareas:
1. `/sobre-nosotros` (1 día)
2. `/preguntas-frecuentes` (2 días)
3. `/politica-privacidad` (1 día)
4. `/terminos-condiciones` (1 día)
5. Mejorar `/contacto` (1 día)

**Resultado Fase 6**: 5 páginas auxiliares

---

## 📈 KPIS A MONITOREAR

### Antes de la Implementación (Baseline)

Medir durante 2 semanas antes de iniciar cambios:

1. **Navegación**
   - Tasa de rebote homepage: __%
   - Tiempo promedio en sitio: __min
   - Páginas vistas por sesión: __

2. **Conversión**
   - Tasa de inicio test de nivel: __%
   - Tasa de registro: __%
   - Tasa de conversión a pago: __%

3. **Usabilidad**
   - Clics promedio para llegar a curso: __
   - Páginas con mayor tasa de salida: __
   - Errores 404 por semana: __

4. **SEO**
   - Posiciones palabras clave: __
   - Tráfico orgánico semanal: __
   - Core Web Vitals score: __

---

### Después de la Implementación (Objetivo)

Medir durante 4 semanas después de completar cambios:

1. **Navegación**
   - ⬇️ Tasa de rebote homepage: -25%
   - ⬆️ Tiempo promedio en sitio: +40%
   - ⬆️ Páginas vistas por sesión: +50%

2. **Conversión**
   - ⬆️ Tasa de inicio test de nivel: +60%
   - ⬆️ Tasa de registro: +45%
   - ⬆️ Tasa de conversión a pago: +35%

3. **Usabilidad**
   - ⬇️ Clics promedio para curso: -3 clics
   - ⬇️ Páginas con alta salida: -40%
   - ⬇️ Errores 404: -100% (cero errores)

4. **SEO**
   - ⬆️ Posiciones palabras clave: +15 posiciones promedio
   - ⬆️ Tráfico orgánico: +30%
   - ⬆️ Core Web Vitals: 95+ score

---

## 🎨 COMPONENTES A MODIFICAR

### Archivos de Código a Tocar

| Archivo | Ubicación | Cambios | Prioridad |
|---------|-----------|---------|-----------|
| Navigation.tsx | `/components/sections/` | Menú desplegable Cursos | 🔴 Alta |
| next.config.js | `/` | Agregar redirects 301 | 🔴 Alta |
| sitemap.ts | `/app/` | Actualizar todas las rutas | 🔴 Alta |
| layout.tsx | `/app/` | Actualizar metadata | 🟡 Media |
| Footer.tsx | `/components/` | Actualizar enlaces | 🟡 Media |

---

### Nuevos Componentes a Crear

| Componente | Propósito | Reutilizable | Prioridad |
|------------|-----------|--------------|-----------|
| CourseCard.tsx | Card de curso uniforme | ✅ Sí | 🔴 Alta |
| LevelBadge.tsx | Badge de nivel (A1-C2) | ✅ Sí | 🔴 Alta |
| ObjectiveLanding.tsx | Template para landings | ✅ Sí | 🔴 Alta |
| BreadcrumbNav.tsx | Navegación breadcrumb | ✅ Sí | 🟡 Media |
| CourseFilter.tsx | Filtros de cursos | ✅ Sí | 🟢 Baja |

---

## 💰 ESTIMACIÓN DE ESFUERZO

### Por Rol

| Rol | Horas | Semanas (40h) | Costo Estimado* |
|-----|-------|---------------|-----------------|
| Frontend Developer | 160h | 4 semanas | €6,400 |
| UI/UX Designer | 80h | 2 semanas | €3,200 |
| Content Writer | 40h | 1 semana | €1,200 |
| QA Tester | 40h | 1 semana | €1,200 |
| **TOTAL** | **320h** | **8 semanas** | **€12,000** |

*Estimación basada en tarifas de mercado España 2026

---

### Por Fase

| Fase | Horas | Semanas | Costo |
|------|-------|---------|-------|
| Fase 1: Limpieza | 40h | 1 semana | €1,500 |
| Fase 2: Landings | 60h | 1.5 semanas | €2,250 |
| Fase 3: Especializados | 40h | 1 semana | €1,500 |
| Fase 4: Exámenes | 48h | 1.2 semanas | €1,800 |
| Fase 5: Estudiante | 48h | 1.2 semanas | €1,800 |
| Fase 6: Utilidades | 32h | 0.8 semanas | €1,200 |
| Testing + QA | 52h | 1.3 semanas | €1,950 |
| **TOTAL** | **320h** | **8 semanas** | **€12,000** |

---

## ✅ CRITERIOS DE ÉXITO

### Checklist de Completitud

#### Técnicos
- [ ] Cero errores 404
- [ ] Todos los redirects funcionan
- [ ] Sitemap actualizado y funcional
- [ ] Metadata SEO completa en todas las páginas
- [ ] Core Web Vitals > 90
- [ ] Mobile responsive al 100%
- [ ] Tests de navegación pasados

#### Funcionales
- [ ] Usuario puede encontrar cualquier curso en máximo 3 clics
- [ ] Menú desplegable funciona en desktop y móvil
- [ ] Breadcrumbs presentes en todas las páginas internas
- [ ] Footer actualizado con nuevas rutas
- [ ] Formularios funcionan correctamente

#### Negocio
- [ ] Tasa de conversión a test +50%
- [ ] Tasa de inscripción +30%
- [ ] Tiempo en sitio +40%
- [ ] Tasa de rebote -25%
- [ ] Satisfacción usuario > 8/10

---

## 🎯 RECOMENDACIÓN FINAL

### Prioridad Máxima (Iniciar Ya)
1. ✅ **Fase 1: Limpieza** (2 semanas)
   - Unificar autenticación
   - Eliminar duplicados
   - Crear redirects

### Prioridad Alta (Siguiente)
2. ✅ **Fase 2: Landings** (2 semanas)
   - Crear 3 landings de objetivos
   - Mover curso B2

### Resto de Fases
3-6. Implementar según capacidad del equipo

---

## 📞 PRÓXIMOS PASOS INMEDIATOS

1. **Aprobar esta propuesta** ✍️
2. **Definir equipo** de desarrollo 👥
3. **Establecer timeline** definitivo 📅
4. **Crear repo branch** para desarrollo 🌿
5. **Iniciar Fase 1** inmediatamente 🚀

---

**Documento creado**: 2026-01-15
**Versión**: 1.0
**Estado**: 🟡 Pendiente de Aprobación
**Próxima revisión**: Tras feedback del equipo

---

## 📎 DOCUMENTOS RELACIONADOS

1. `PROPUESTA_ESTRUCTURA_NAVEGACION.md` - Propuesta completa detallada
2. `DIAGRAMA_VISUAL_NAVEGACION.md` - Diagramas y wireframes visuales
3. `RESUMEN_EJECUTIVO.md` - Este documento

---

