# 📋 PROPUESTA DE ESTRUCTURA Y NAVEGACIÓN - FOCUS ENGLISH

## 🎯 OBJETIVO
Reorganizar la estructura del sitio web para crear una navegación lógica, intuitiva y placentera para el usuario.

---

## 📊 ANÁLISIS DE LA SITUACIÓN ACTUAL

### Páginas Existentes Identificadas:

#### 🏠 Públicas Principales
- `/` - Homepage (Landing principal)
- `/planes` - Planes y precios (Básico/Premium)
- `/cursos` - Catálogo general de cursos por niveles (A1-C2)
- `/curso-b2` - Curso B2 completo con lecciones interactivas
- `/diagnostico` - Test de nivel gratuito
- `/blog` - Blog principal con artículos
- `/contact` - Página de contacto
- `/certificaciones` - Redirige a /cursos

#### 🎓 Cursos Dinámicos (18 combinaciones)
- `/cursos/[goal]/[level]` donde:
  - Goals: `trabajo`, `viajes`, `examenes`
  - Levels: `a1`, `a2`, `b1`, `b2`, `c1`, `c2`

#### 🔐 Autenticación y Usuario
- `/login` - Inicio de sesión
- `/signin` - Inicio de sesión (duplicado?)
- `/register` - Registro
- `/signup` - Inscripción (duplicado?)
- `/forgot-password` - Recuperar contraseña
- `/reset-password` - Restablecer contraseña
- `/dashboard` - Panel del estudiante
- `/success` - Página de éxito (post-pago?)

#### 📝 Blog
- `/blog` - Índice del blog
- `/blog/[slug]` - Artículos individuales
  - `/blog/ingles-profesional-sectores`
  - `/blog/ingles-esencial-viajar`
  - `/blog/preparar-examenes-oficiales`

---

## 🚨 PROBLEMAS IDENTIFICADOS

### 1. **Duplicación de Rutas**
- ❌ `/login` y `/signin` (probablemente hacen lo mismo)
- ❌ `/register` y `/signup` (probablemente hacen lo mismo)
- ❌ `/certificaciones` redirige a `/cursos` (innecesario)

### 2. **Falta de Jerarquía Clara**
- `/curso-b2` está al mismo nivel que `/cursos`
- No hay una ruta clara de "cursos especializados"
- La navegación actual en el menú no refleja todas las páginas disponibles

### 3. **Confusión en Objetivos del Usuario**
- Homepage muestra 3 objetivos (Trabajo, Viajes, Exámenes)
- Pero la navegación lleva a rutas diferentes según el caso
- No hay consistencia en cómo se accede a cada tipo de curso

### 4. **URLs Inconsistentes**
- `/cursos/[goal]/[level]` vs `/curso-b2`
- `/cursos-especializados` mencionado pero no implementado
- Falta de estructura SEO amigable

---

## ✅ PROPUESTA DE NUEVA ESTRUCTURA

### 🏗️ ARQUITECTURA DE INFORMACIÓN

```
┌─────────────────────────────────────────────────────────────┐
│                        HOMEPAGE (/)                          │
│              "Domina el Inglés Para Tu Objetivo"            │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
        ┌───────▼──────┐ ┌───▼────┐ ┌─────▼─────┐
        │   EXPLORAR   │ │ PLANES │ │  EMPEZAR  │
        │    CURSOS    │ │        │ │           │
        └──────────────┘ └────────┘ └───────────┘
                │
    ┌───────────┼───────────┐
    │           │           │
┌───▼────┐ ┌───▼────┐ ┌───▼────┐
│TRABAJO │ │VIAJES  │ │EXÁMENES│
└────────┘ └────────┘ └────────┘
    │           │           │
    └───────────┴───────────┘
                │
        ┌───────▼────────┐
        │ NIVELES A1-C2  │
        └────────────────┘
```

---

## 📱 NUEVA ESTRUCTURA DE NAVEGACIÓN

### 🎯 NAVEGACIÓN PRINCIPAL (Header)

```
┌──────────────────────────────────────────────────────────────┐
│ 🏠 Focus English                                    [ LOGIN ] │
│                                                               │
│  Cursos ▾  │  Planes  │  Blog  │  Test Nivel  │  Contacto   │
└──────────────────────────────────────────────────────────────┘
```

#### Menú Desplegable "Cursos":
```
Cursos ▾
├─ 💼 Inglés para Trabajar
│  ├─ Todos los niveles
│  └─ Cursos especializados por sector
│
├─ ✈️ Inglés para Viajar
│  └─ Todos los niveles
│
├─ 🎓 Preparación de Exámenes
│  ├─ Cambridge B2 First (FCE)
│  ├─ Cambridge C1 Advanced (CAE)
│  ├─ TOEFL iBT
│  └─ IELTS
│
└─ 📚 Ver todos los cursos por nivel
   └─ A1, A2, B1, B2, C1, C2
```

---

## 🗺️ ESTRUCTURA DE RUTAS PROPUESTA

### 1️⃣ HOMEPAGE Y PÁGINAS PRINCIPALES

| Ruta | Descripción | Prioridad |
|------|-------------|-----------|
| `/` | Homepage principal | 🔴 Alta |
| `/planes` | Planes y precios | 🔴 Alta |
| `/contacto` | Formulario de contacto | 🟡 Media |
| `/sobre-nosotros` | Quiénes somos (nueva) | 🟢 Baja |

---

### 2️⃣ CURSOS - NUEVA ESTRUCTURA

#### A) Por Objetivo (Especialización)

```
/cursos/
├── trabajo/                    # Inglés para Trabajar
│   ├── index                   # Landing de trabajo con todos los niveles
│   ├── a1, a2, b1, b2, c1, c2  # Cursos por nivel
│   └── especializados/         # Cursos por sector
│       ├── negocios
│       ├── tecnologia
│       ├── medicina
│       ├── legal
│       └── marketing
│
├── viajes/                     # Inglés para Viajar
│   ├── index                   # Landing de viajes
│   └── a1, a2, b1, b2, c1, c2  # Cursos por nivel
│
└── examenes/                   # Preparación de Exámenes
    ├── index                   # Landing de exámenes
    ├── a1, a2, b1, b2, c1, c2  # Por nivel general
    └── oficiales/              # Exámenes oficiales específicos
        ├── cambridge-b2-first
        ├── cambridge-c1-advanced
        ├── toefl
        └── ielts
```

#### B) Por Nivel (Vista alternativa)

```
/niveles/
├── a1/                         # Nivel A1 Principiante
│   ├── trabajo
│   ├── viajes
│   └── examenes
├── a2/                         # Nivel A2 Elemental
├── b1/                         # Nivel B1 Intermedio
├── b2/                         # Nivel B2 Intermedio-Alto
├── c1/                         # Nivel C1 Avanzado
└── c2/                         # Nivel C2 Maestría
```

---

### 3️⃣ HERRAMIENTAS Y RECURSOS

| Ruta | Descripción | Estado |
|------|-------------|--------|
| `/test-nivel` | Test de diagnóstico gratuito | ✅ Existe (`/diagnostico`) |
| `/blog` | Blog con artículos | ✅ Existe |
| `/recursos` | Recursos gratuitos (nueva) | ⚠️ Crear |
| `/preguntas-frecuentes` | FAQ completo | ⚠️ Crear |

---

### 4️⃣ ÁREA DE USUARIO

```
/cuenta/
├── login                       # Inicio de sesión (unificar)
├── registro                    # Registro (unificar)
├── recuperar-contrasena        # Recuperar acceso
│
/estudiante/                    # Área del estudiante
├── dashboard                   # Panel principal
├── mis-cursos                  # Cursos activos
├── progreso                    # Estadísticas y progreso
├── certificados                # Certificados obtenidos
└── perfil                      # Configuración del perfil
```

---

## 🎨 DISEÑO DE EXPERIENCIA DE USUARIO

### User Journey - Nuevo Estudiante

```
1. DESCUBRIMIENTO
   Homepage → Ve 3 objetivos claros (Trabajo/Viajes/Exámenes)
   ↓

2. EXPLORACIÓN
   Elige objetivo → Ve landing específica con:
   - Beneficios del curso
   - Niveles disponibles
   - Testimonios
   - Precio y planes
   ↓

3. EVALUACIÓN
   "Hacer Test de Nivel" (CTA prominente)
   ↓

4. RECOMENDACIÓN
   Resultado del test → Curso recomendado según nivel y objetivo
   ↓

5. DECISIÓN
   Ve página del curso específico → Información detallada
   ↓

6. CONVERSIÓN
   "Inscribirse" → Elige plan → Registro → Pago
   ↓

7. ONBOARDING
   Dashboard → Primera lección → Progreso
```

---

## 📄 LANDING PAGES RECOMENDADAS

### 1. Homepage `/`
**Objetivo**: Conversión inicial - Presentar los 3 objetivos principales

**Secciones**:
- Hero con 3 objetivos claros (Trabajo, Viajes, Exámenes)
- Test de nivel CTA
- Beneficios generales
- Testimonios
- Blog preview
- Planes y precios preview
- Footer con enlaces

---

### 2. Landing de Trabajo `/cursos/trabajo`
**Objetivo**: Captar profesionales que necesitan inglés laboral

**Secciones**:
- Hero: "Impulsa tu carrera con inglés profesional"
- Niveles disponibles (A1-C2)
- Cursos especializados por sector
- Casos de éxito / Testimonios
- Precios
- CTA: Test de nivel o Inscripción

---

### 3. Landing de Viajes `/cursos/viajes`
**Objetivo**: Captar viajeros que necesitan inglés práctico

**Secciones**:
- Hero: "Viaja con confianza hablando inglés"
- Niveles disponibles (A1-C2)
- Situaciones prácticas (aeropuerto, hotel, restaurante)
- Testimonios de viajeros
- Precios
- CTA: Empezar curso

---

### 4. Landing de Exámenes `/cursos/examenes`
**Objetivo**: Captar estudiantes que necesitan certificaciones

**Secciones**:
- Hero: "Aprueba tu examen oficial de inglés"
- Exámenes disponibles (Cambridge, TOEFL, IELTS)
- Tasas de aprobación
- Metodología de preparación
- Testimonios de aprobados
- Precios
- CTA: Ver curso B2

---

### 5. Curso Específico `/cursos/examenes/oficiales/cambridge-b2-first`
**Objetivo**: Conversión final - Inscripción al curso

**Secciones**:
- Descripción completa del curso
- Contenido detallado (módulos y lecciones)
- Metodología
- Duración y horarios
- Precio y planes
- Preview de una lección
- CTA: Inscribirse ahora

---

### 6. Planes y Precios `/planes`
**Objetivo**: Conversión - Elección de plan de suscripción

**Secciones actuales** (ya bien diseñadas):
- Toggle Mensual/Anual
- Comparativa de planes (Básico vs Premium)
- FAQ
- CTA: Elegir plan

---

### 7. Test de Nivel `/test-nivel` (renombrar `/diagnostico`)
**Objetivo**: Engagement - Evaluar nivel y recomendar curso

**Secciones actuales** (ya bien diseñadas):
- Hero explicativo
- Test interactivo
- Resultados con recomendación
- CTA: Inscribirse al curso recomendado

---

## 🔀 PLAN DE MIGRACIÓN

### Fase 1: Unificar Rutas Duplicadas ⚡ URGENTE

| Ruta Actual | Acción | Ruta Nueva |
|-------------|--------|------------|
| `/login` y `/signin` | ✅ Mantener `/login`, redirigir `/signin` | `/login` |
| `/register` y `/signup` | ✅ Mantener `/registro`, redirigir `/register` y `/signup` | `/registro` |
| `/certificaciones` | ❌ Eliminar, ya redirige a `/cursos` | `/cursos` |
| `/diagnostico` | 🔄 Renombrar | `/test-nivel` |
| `/contact` | 🔄 Renombrar | `/contacto` |

---

### Fase 2: Reorganizar Cursos 📚

**Paso 1**: Crear estructura de carpetas nueva
```bash
app/
├── cursos/
│   ├── trabajo/
│   │   ├── page.tsx                    # Landing trabajo
│   │   ├── [nivel]/
│   │   │   └── page.tsx                # Curso por nivel
│   │   └── especializados/
│   │       └── [sector]/
│   │           └── page.tsx            # Curso especializado
│   │
│   ├── viajes/
│   │   ├── page.tsx                    # Landing viajes
│   │   └── [nivel]/
│   │       └── page.tsx                # Curso por nivel
│   │
│   └── examenes/
│       ├── page.tsx                    # Landing exámenes
│       ├── [nivel]/
│       │   └── page.tsx                # Curso por nivel
│       └── oficiales/
│           ├── cambridge-b2-first/
│           │   └── page.tsx            # Curso B2 actual
│           ├── cambridge-c1-advanced/
│           ├── toefl/
│           └── ielts/
```

**Paso 2**: Migrar contenido existente
- `/curso-b2` → `/cursos/examenes/oficiales/cambridge-b2-first`
- Mantener redirects 301 para SEO

**Paso 3**: Crear landings faltantes
- `/cursos/trabajo/page.tsx`
- `/cursos/viajes/page.tsx`
- `/cursos/examenes/page.tsx`

---

### Fase 3: Actualizar Navegación 🧭

**Componente**: `components/sections/Navigation.tsx`

**Cambios**:
1. Agregar menú desplegable "Cursos" con subcategorías
2. Actualizar enlaces a nuevas rutas
3. Mejorar navegación móvil
4. Agregar breadcrumbs en páginas internas

---

### Fase 4: Área de Usuario 👤

**Paso 1**: Unificar autenticación
- Crear `/cuenta/login`
- Crear `/cuenta/registro`
- Redirigir rutas antiguas

**Paso 2**: Mejorar Dashboard
- Ya existe `/dashboard` bien diseñado
- Agregar navegación interna clara
- Agregar `/estudiante/mis-cursos`
- Agregar `/estudiante/certificados`

---

### Fase 5: SEO y Redirects 🔍

**Crear archivo de redirects**:
```javascript
// next.config.js
redirects: [
  { source: '/signin', destination: '/login', permanent: true },
  { source: '/signup', destination: '/registro', permanent: true },
  { source: '/register', destination: '/registro', permanent: true },
  { source: '/diagnostico', destination: '/test-nivel', permanent: true },
  { source: '/contact', destination: '/contacto', permanent: true },
  { source: '/curso-b2', destination: '/cursos/examenes/oficiales/cambridge-b2-first', permanent: true },
  { source: '/cursos/:goal/:level', destination: '/cursos/:goal/:level', permanent: false },
]
```

---

## 📊 MAPA DE SITIO FINAL

```
sitemap.xml
├── /                                   (Homepage)
│
├── /cursos                             (Catálogo general)
│   ├── /trabajo                        (Landing trabajo)
│   │   ├── /a1, /a2, /b1, /b2, /c1, /c2
│   │   └── /especializados
│   │       └── /negocios, /tecnologia, /medicina, /legal, /marketing
│   │
│   ├── /viajes                         (Landing viajes)
│   │   └── /a1, /a2, /b1, /b2, /c1, /c2
│   │
│   └── /examenes                       (Landing exámenes)
│       ├── /a1, /a2, /b1, /b2, /c1, /c2
│       └── /oficiales
│           └── /cambridge-b2-first, /cambridge-c1-advanced, /toefl, /ielts
│
├── /niveles                            (Vista por nivel)
│   └── /a1, /a2, /b1, /b2, /c1, /c2
│
├── /planes                             (Planes y precios)
├── /test-nivel                         (Test diagnóstico)
├── /blog                               (Blog)
│   └── /[articulos]
│
├── /contacto                           (Contacto)
├── /sobre-nosotros                     (Acerca de)
├── /preguntas-frecuentes              (FAQ)
│
└── /cuenta                             (Área usuario)
    ├── /login
    ├── /registro
    └── /recuperar-contrasena
    
/estudiante                             (Dashboard)
├── /dashboard
├── /mis-cursos
├── /progreso
├── /certificados
└── /perfil
```

---

## 🎯 MÉTRICAS DE ÉXITO

### KPIs a medir después de la reorganización:

1. **Navegación**
   - ⬇️ Reducir tasa de rebote en homepage
   - ⬆️ Aumentar tiempo en el sitio
   - ⬆️ Aumentar páginas vistas por sesión

2. **Conversión**
   - ⬆️ Aumentar tasa de inscripción a test de nivel
   - ⬆️ Aumentar tasa de registro
   - ⬆️ Aumentar tasa de conversión a pago

3. **Usabilidad**
   - ⬇️ Reducir clics necesarios para llegar a un curso
   - ⬆️ Aumentar satisfacción del usuario (encuestas)
   - ⬇️ Reducir consultas de "no encuentro X"

4. **SEO**
   - ⬆️ Mejorar posicionamiento de palabras clave
   - ⬆️ Aumentar tráfico orgánico
   - ⬆️ Mejorar Core Web Vitals

---

## 🚀 CRONOGRAMA DE IMPLEMENTACIÓN

### Sprint 1 (Semana 1-2): Limpieza y Unificación
- [ ] Unificar rutas de autenticación
- [ ] Eliminar rutas duplicadas
- [ ] Crear redirects 301
- [ ] Actualizar enlaces internos

### Sprint 2 (Semana 3-4): Reorganización de Cursos
- [ ] Crear nueva estructura de carpetas
- [ ] Migrar `/curso-b2` a nueva ubicación
- [ ] Crear landings de objetivos (Trabajo, Viajes, Exámenes)
- [ ] Actualizar componente de navegación

### Sprint 3 (Semana 5-6): Nuevas Páginas
- [ ] Crear `/cursos/trabajo/especializados/[sector]`
- [ ] Crear `/niveles/[nivel]` vista alternativa
- [ ] Crear `/sobre-nosotros`
- [ ] Crear `/preguntas-frecuentes`
- [ ] Mejorar `/contacto`

### Sprint 4 (Semana 7-8): Área de Usuario
- [ ] Mejorar `/estudiante/dashboard`
- [ ] Crear `/estudiante/mis-cursos`
- [ ] Crear `/estudiante/certificados`
- [ ] Crear `/estudiante/perfil`

### Sprint 5 (Semana 9-10): Testing y Optimización
- [ ] Testing de usabilidad
- [ ] Optimización SEO
- [ ] Optimización de rendimiento
- [ ] Documentación final

---

## 🎨 MOCKUPS DE PÁGINAS CLAVE

### Nota:
Para crear mockups visuales, necesitaría:
1. Acceso a herramientas de diseño (Figma, Adobe XD)
2. Capturas de pantalla de las páginas actuales
3. Diseños de las nuevas páginas propuestas

**Páginas prioritarias para mockups**:
1. Homepage rediseñada
2. Landings de objetivos (Trabajo, Viajes, Exámenes)
3. Navegación con menú desplegable
4. Página de curso individual
5. Dashboard del estudiante mejorado

---

## 📝 NOTAS FINALES

### Ventajas de esta estructura:

✅ **Claridad**: Usuario sabe exactamente dónde está y cómo navegar
✅ **Escalabilidad**: Fácil agregar nuevos cursos, niveles o sectores
✅ **SEO-friendly**: URLs descriptivas y estructura lógica
✅ **User-centric**: Organizada según objetivos del usuario, no estructura interna
✅ **Mantenibilidad**: Código organizado y predecible

### Consideraciones técnicas:

⚠️ **Mantener compatibilidad**: Usar redirects 301 para no perder SEO
⚠️ **Testing exhaustivo**: Probar todos los enlaces y flujos
⚠️ **Analytics**: Configurar Google Analytics para nuevas rutas
⚠️ **Sitemap**: Actualizar sitemap.xml dinámico
⚠️ **robots.txt**: Revisar y actualizar si es necesario

---

## 📞 PRÓXIMOS PASOS

1. **Revisión de la propuesta** por el equipo
2. **Aprobación** de la estructura propuesta
3. **Priorización** de funcionalidades
4. **Inicio de implementación** por fases
5. **Testing continuo** durante desarrollo
6. **Lanzamiento gradual** con monitoreo

---

**Documento creado**: 2026-01-15
**Versión**: 1.0
**Autor**: Claude - Asistente de IA
**Estado**: 🟡 Pendiente de Aprobación

---

## ❓ PREGUNTAS PARA EL EQUIPO

1. ¿Quieren mantener la estructura de cursos dinámicos `/cursos/[goal]/[level]` o migrar todo?
2. ¿Hay páginas adicionales planeadas que no están en el código actual?
3. ¿Qué prioridad tiene cada fase del cronograma?
4. ¿Necesitan mantener URLs actuales por razones de SEO/Marketing?
5. ¿Quieren implementar breadcrumbs y navegación secundaria?
6. ¿El dashboard actual es suficiente o necesita más funcionalidades?

---

