# 🎨 Mockups de Diseño Editorial - Focus English Blog

**Fecha:** Enero 2026  
**Proyecto:** Focus English - Estrategia de Contenido SEO 2026  
**Propósito:** Visualización del diseño editorial de artículos del blog

---

## 📋 Índice

1. [Mockup 1: Nivel A1 - Principiantes](#mockup-1-nivel-a1)
2. [Mockup 2: Nivel B2 - Profesional Avanzado](#mockup-2-nivel-b2)
3. [Mockup 3: Viajes - Inglés para Aeropuerto](#mockup-3-viajes)
4. [Mockup 4: Sector IT - Inglés Técnico](#mockup-4-sector-it)
5. [Mockup 5: Examen IELTS - Preparación](#mockup-5-ielts)
6. [Especificaciones de Diseño](#especificaciones)
7. [Guía de Implementación](#implementacion)

---

## 🎯 Mockup 1: Nivel A1 - Principiantes {#mockup-1-nivel-a1}

### **Artículo:** "Guía Completa del Nivel A1: Tu Primer Paso en Inglés"

**URL:** `https://focusenglish.com/blog/guia-completa-nivel-a1-principiantes`

### 🖼️ Vista Previa del Diseño

![Mockup A1 Level](https://www.genspark.ai/api/files/s/B2zc4dPl?cache_control=3600)

### 📐 Especificaciones de Diseño

#### **Header**
- **Logo:** Focus English (izquierda superior)
- **Navegación:** Inicio | Cursos | Blog | Diagnóstico | Contacto
- **CTA Header:** "Prueba Gratis" (botón púrpura)
- **Altura:** 80px
- **Fondo:** Blanco (#FFFFFF)

#### **Breadcrumbs**
```
Inicio > Blog > Niveles CEFR > A1 Principiantes
```
- **Color:** Gris oscuro (#6B7280)
- **Tamaño:** 14px
- **Separador:** ">" en púrpura (#8B5CF6)

#### **Hero Section**
- **Imagen:** Estudiantes en clase aprendiendo inglés básico
- **Alto:** 500px (desktop) / 300px (móvil)
- **Overlay:** Degradado oscuro (0-50% opacidad)
- **Título sobre imagen:** Opcional con texto blanco

#### **Título Principal**
```
Guía Completa del Nivel A1: Tu Primer Paso en Inglés
```
- **Tipografía:** Inter, Bold, 48px (desktop) / 32px (móvil)
- **Color:** Negro (#1F2937)
- **Espacio superior:** 40px
- **Espacio inferior:** 20px

#### **Metadata del Artículo**
- **Autor:** María García | Profesora Certificada CELTA
- **Fecha:** 15 de Enero, 2026
- **Tiempo de lectura:** 8 min
- **Categoría:** Niveles CEFR
- **Tags:** A1, Principiantes, CEFR, Inglés Básico
- **Color:** Gris medio (#9CA3AF)
- **Tamaño:** 14px

#### **Layout de Contenido**

**Desktop (>1024px):**
```
┌─────────────────────────────────────────────────┐
│              Header + Navigation                 │
├────────────────┬─────────────────┬──────────────┤
│   Sidebar      │  Main Content   │   Sidebar    │
│   (20%)        │     (55%)       │   (25%)      │
│                │                 │              │
│ - Índice       │ - Intro         │ - Test Nivel │
│ - Progreso     │ - Secciones     │ - Descarga   │
│                │ - Imágenes      │ - Cursos     │
│                │ - CTAs          │ - Newsletter │
└────────────────┴─────────────────┴──────────────┘
```

**Móvil (<768px):**
- Contenido apilado verticalmente
- Sidebar superior (índice plegable)
- Main content
- CTAs flotantes al 80% scroll

#### **Tipografía del Contenido**

**H2 (Secciones principales):**
- Font: Inter, Bold, 36px (desktop) / 28px (móvil)
- Color: #1F2937
- Margin-top: 60px
- Margin-bottom: 24px

**H3 (Subsecciones):**
- Font: Inter, SemiBold, 28px (desktop) / 22px (móvil)
- Color: #374151
- Margin-top: 40px
- Margin-bottom: 20px

**Párrafo:**
- Font: Inter, Regular, 18px (desktop) / 16px (móvil)
- Line-height: 1.7
- Color: #4B5563
- Margin-bottom: 20px
- Max-width: 700px (para legibilidad)

**Lista con bullets:**
- Bullets personalizados en púrpura (#8B5CF6)
- Indent: 30px
- Spacing: 12px entre items

#### **Elementos Visuales**

**Caja de Consejo:**
```css
background: linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%);
border-left: 4px solid #8B5CF6;
padding: 20px;
border-radius: 8px;
margin: 30px 0;
```

**Tabla de Contenidos:**
| Elemento | Traducción | Ejemplo |
- Background: #F9FAFB
- Border: 1px solid #E5E7EB
- Padding cells: 16px
- Hover row: #F3F4F6

**Quote/Testimonial:**
- Font-style: italic
- Font-size: 20px
- Border-left: 4px solid #8B5CF6
- Padding-left: 24px
- Color: #6B7280

#### **CTAs (Call to Action)**

**CTA Primario:**
```
"Descarga la Guía A1 Gratis"
```
- Background: #8B5CF6 (púrpura)
- Color texto: #FFFFFF
- Padding: 16px 32px
- Border-radius: 8px
- Font-size: 18px, Bold
- Hover: #7C3AED (púrpura más oscuro)
- Box-shadow: 0 4px 6px rgba(139, 92, 246, 0.25)

**CTA Secundario:**
```
"Comienza tu Prueba Gratis"
```
- Background: transparent
- Border: 2px solid #8B5CF6
- Color texto: #8B5CF6
- Padding: 14px 30px
- Hover: Background #8B5CF6, texto blanco

#### **Sidebar Derecho**

**Card de Test de Nivel:**
```
┌──────────────────────┐
│  🎯 Test de Nivel    │
│  Gratis              │
│                      │
│  Descubre tu nivel   │
│  de inglés en 5 min  │
│                      │
│  [Comenzar Test]     │
└──────────────────────┘
```
- Background: Linear gradient (#FAF5FF a #F3E8FF)
- Padding: 24px
- Border-radius: 12px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.08)

**Card de Descarga:**
- Icono de PDF
- Título: "Guía A1 Completa"
- Descripción: 50 páginas de ejercicios
- Botón: "Descargar Gratis"

**Lista de Cursos Relacionados:**
- Curso A1 Completo
- Curso A2 Siguiente Nivel
- Inglés para Viajar
- Links con hover effect púrpura

#### **Footer del Artículo**

**Social Sharing:**
- Botones: Facebook, Twitter, LinkedIn, WhatsApp, Email
- Tamaño: 40px circular
- Color: Gris con hover púrpura

**Navegación Artículos:**
```
← Anterior: Introducción al CEFR    |    Siguiente: Nivel A2 →
```

**Autor Bio:**
- Foto circular 80px
- Nombre + Credenciales
- Mini biografía (2-3 líneas)
- Link: "Ver todos los artículos"

#### **Sección de Comentarios / Engagement**

**CTA Newsletter:**
```
┌─────────────────────────────────────────────┐
│  📧 Recibe Tips de Inglés Semanales         │
│                                             │
│  [_______________] [Suscribirme]            │
│                                             │
│  ✓ Sin spam  ✓ Cancela cuando quieras      │
└─────────────────────────────────────────────┘
```
- Background: #F9FAFB
- Padding: 40px
- Border-radius: 12px

#### **Footer Global**
- Columnas: Cursos | Blog | Recursos | Empresa | Legal
- Background: #1F2937 (gris oscuro)
- Texto: #9CA3AF
- Links hover: #8B5CF6
- Social icons
- Copyright

---

## 💼 Mockup 2: Nivel B2 - Profesional Avanzado {#mockup-2-nivel-b2}

### **Artículo:** "Inglés B2 Avanzado: Domina el Inglés Profesional"

**URL:** `https://focusenglish.com/blog/ingles-b2-avanzado-profesional`

### 🖼️ Vista Previa del Diseño

![Mockup B2 Professional](https://www.genspark.ai/api/files/s/mt0WdG1m?cache_control=3600)

### 📐 Especificaciones de Diseño

#### **Diferencias vs. A1 (Diseño más Sofisticado)**

**Paleta de Colores Profesional:**
- Primary: #8B5CF6 (púrpura)
- Secondary: #1E40AF (azul navy)
- Accent: #059669 (verde éxito)
- Background: #FFFFFF con secciones #F8FAFC

**Hero Section:**
- Imagen más profesional: ejecutivos en oficina moderna
- Altura mayor: 600px
- Overlay con texto directo en la imagen
- Título más grande: 56px
- Subtítulo adicional: "Para profesionales que buscan destacar"

**Layout:**
- Más espaciado (más aire)
- Sidebar fijo con scroll
- Navegación de progreso indicando % completado
- Estimación de tiempo por sección

**Elementos Adicionales:**

**Gráfico de Progresión:**
```
A1 ──→ A2 ──→ B1 ──→ [B2] ──→ C1 ──→ C2
                      ↑ Estás aquí
```

**Testimonios de Profesionales:**
- Cards con foto + nombre + cargo + empresa
- Quote destacado
- Rating con estrellas
- Background blanco con sombra sutil

**Tabla de Comparación:**
| B1 vs B2 | Can-Do Statements |
- Checkmarks en verde
- X en rojo para B1
- Código de colores para diferencias

**Sección de Casos de Uso:**
- Iconos de industrias: 💼 Negocios, 🏥 Medicina, 💻 IT, etc.
- Hover effect con descripción
- Link a artículo de sector específico

**CTAs más específicos:**
- "Comienza Curso B2 Business"
- "Descarga Vocabulario Profesional (500+ términos)"
- "Agenda Consulta con Tutor"

**Video embed:**
- Placeholder para video testimonial
- Botón de play centrado
- Duración visible: "3:45"

---

## ✈️ Mockup 3: Viajes - Inglés para Aeropuerto {#mockup-3-viajes}

### **Artículo:** "Inglés Esencial para el Aeropuerto: 200+ Frases Útiles"

**URL:** `https://focusenglish.com/blog/ingles-aeropuerto-frases-utiles`

### 🖼️ Vista Previa del Diseño

![Mockup Travel English](https://www.genspark.ai/api/files/s/6JLS19CK?cache_control=3600)

### 📐 Especificaciones de Diseño

#### **Tema Viajes - Colores y Estilo**

**Paleta de Colores:**
- Primary: #8B5CF6 (púrpura)
- Secondary: #06B6D4 (cyan/turquesa)
- Accent: #F59E0B (amarillo/dorado)
- Success: #10B981 (verde)

**Hero Section:**
- Imagen: Terminal de aeropuerto moderno, viajeros con maletas
- Overlay con iconos animados: ✈️ 🧳 🎫 🌍
- Título con emoji: "✈️ Inglés Esencial para el Aeropuerto"
- Badge: "200+ Frases + Audio" con ícono de auriculares

**Layout Específico:**

**Tabs de Navegación:**
```
[Check-in] [Seguridad] [Boarding] [En Vuelo] [Llegada]
```
- Tabs horizontales sticky al hacer scroll
- Color activo: púrpura
- Indicador inferior (línea de 3px)

**Sección de Frases:**

```
┌────────────────────────────────────────────┐
│  📍 En el Check-In                         │
├────────────────────────────────────────────┤
│                                            │
│  🇬🇧 "I'd like to check in for flight..."  │
│  🔊 [Escuchar]                             │
│  📖 /aɪd laɪk tuː tʃek ɪn/                 │
│  🇪🇸 "Me gustaría hacer el check-in..."    │
│                                            │
│  [+ Ver 15 frases más]                     │
└────────────────────────────────────────────┘
```

**Tabla de Frases Interactiva:**
| Situación | Inglés | Fonética | Audio |
- Botón play/pause integrado
- Hover para ver traducción
- Toggle para mostrar/ocultar fonética

**Cards de Escenarios:**
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   🎫         │  │   🛂         │  │   🧳         │
│              │  │              │  │              │
│  Check-In    │  │  Inmigración │  │  Equipaje    │
│  15 frases   │  │  10 frases   │  │  12 frases   │
│              │  │              │  │              │
│ [Explorar]   │  │ [Explorar]   │  │ [Explorar]   │
└──────────────┘  └──────────────┘  └──────────────┘
```
- Grid de 3 columnas (desktop) / 1 columna (móvil)
- Hover: elevación con sombra
- Click: scroll a sección

**Sección de Consejos Culturales:**
- Background color claro (#FEF3C7 amarillo suave)
- Icono grande: 💡
- Título: "Cultural Tips"
- Bullet points con tips prácticos

**CTAs Viajes:**
- "📥 Descarga Guía de Bolsillo (PDF)"
- "🎧 Descarga Audio Completo (MP3)"
- "✈️ Curso Inglés para Viajar"

**Sidebar Viajes:**
- "Próximo Viaje?" con formulario rápido
- Destinos populares: USA 🇺🇸 | UK 🇬🇧 | Australia 🇦🇺
- Checklist del viajero
- App recomendadas

---

## 💻 Mockup 4: Sector IT - Inglés Técnico {#mockup-4-sector-it}

### **Artículo:** "Inglés Técnico para Programadores: Vocabulario IT Esencial"

**URL:** `https://focusenglish.com/blog/ingles-tecnico-programadores-it`

### 🖼️ Vista Previa del Diseño

![Mockup IT English](https://www.genspark.ai/api/files/s/7bcCX4Wq?cache_control=3600)

### 📐 Especificaciones de Diseño

#### **Tema Tech - Dark Mode Ready**

**Paleta de Colores Tech:**
- Primary: #8B5CF6 (púrpura)
- Secondary: #1E293B (slate oscuro)
- Accent: #06B6D4 (cyan tech)
- Code: #0EA5E9 (azul código)
- Success: #22C55E (verde terminal)

**Hero Section:**
- Imagen: Developers trabajando con múltiples pantallas, código visible
- Dark overlay (70% opacidad)
- Título con mono-font para "IT": `<span style="font-family: 'Fira Code'">IT</span>`
- Badge tecnológico: "Backend | Frontend | DevOps"

**Toggle Dark Mode:**
- Switch en header derecha
- 🌞 Light / 🌙 Dark
- Persiste en localStorage

**Layout Tech:**

**Código Snippets:**
```javascript
// ✅ Correcto en reuniones Agile
"Let's refactor this code to improve performance."

// ❌ Evitar traducciones literales
"Let's re-factor this code for better performance."
```
- Background: #1E293B (modo oscuro) / #F1F5F9 (modo claro)
- Border-left: 4px #06B6D4
- Padding: 20px
- Font: Fira Code, 15px
- Line numbers opcionales
- Copy button en esquina superior derecha

**Tabla de Vocabulario Técnico:**

| Término EN | Pronunciación | Contexto de Uso | Ejemplo |
|------------|---------------|-----------------|---------|
| Deploy | /dɪˈplɔɪ/ | CI/CD | "We'll deploy to prod tomorrow" |
| Debug | /diːˈbʌɡ/ | Development | "I need to debug this issue" |
| Merge | /mɜːrdʒ/ | Git/Version Control | "Please merge the PR" |

- Sorteable por columna
- Filtro por categoría: Frontend, Backend, DevOps, Agile, etc.
- Scroll horizontal en móvil

**Sección de Escenarios IT:**

```
┌────────────────────────────────────────────┐
│  💬 Daily Stand-up Meeting                 │
├────────────────────────────────────────────┤
│  Context: Reunión diaria del equipo Agile  │
│                                            │
│  🗣️ "What did you work on yesterday?"     │
│  🗣️ "What are you working on today?"      │
│  🗣️ "Do you have any blockers?"           │
│                                            │
│  [▶️ Escuchar conversación completa]       │
└────────────────────────────────────────────┘
```

**Cards de Situaciones:**
- 🤝 Client Meetings
- 👥 Team Collaboration
- 📧 Technical Email
- 📞 Conference Calls
- 📝 Documentation
- 🐛 Bug Reports

**Integración GitHub:**
- Example de pull request description en inglés
- Code review comments típicos
- Issue templates

**Sidebar Tech:**
```
┌──────────────────────┐
│ 🚀 Tech Stack        │
│                      │
│ □ JavaScript         │
│ □ Python             │
│ □ Java               │
│ □ Go                 │
│ □ DevOps             │
│                      │
│ [Ver Cursos]         │
└──────────────────────┘
```

**CTAs IT:**
- "💾 Descarga Glosario IT (1000+ términos)"
- "🎯 Curso Intensivo para Developers"
- "📺 Webinar: English for Tech Interviews"

**Footer Section:**
- Recursos: GitHub repos, Stack Overflow tips
- Podcasts recomendados para developers
- Communities: Reddit r/EnglishLearning, Discord servers

---

## 📚 Mockup 5: Examen IELTS - Preparación {#mockup-5-ielts}

### **Artículo:** "Guía Completa de Preparación IELTS: Estrategias para 7+ Band Score"

**URL:** `https://focusenglish.com/blog/preparacion-ielts-guia-completa`

### 🖼️ Vista Previa del Diseño

![Mockup IELTS Prep](https://www.genspark.ai/api/files/s/FhrZjNyz?cache_control=3600)

### 📐 Especificaciones de Diseño

#### **Tema Académico / Examen**

**Paleta de Colores Academia:**
- Primary: #8B5CF6 (púrpura)
- Secondary: #DC2626 (rojo académico)
- Gold: #F59E0B (dorado - éxito)
- Navy: #1E40AF (azul académico)
- Success: #10B981 (verde)

**Hero Section:**
- Imagen: Estudiante enfocado con materiales de estudio, laptop
- Badge de certificación: "Official IELTS Prep Partner"
- Score badge destacado: "7+" en grande con estrella dorada
- Countdown timer: "Próximo examen en: 45 días"

**Layout Examen:**

**Progress Tracker:**
```
┌──────────────────────────────────────────────┐
│  📊 Tu Plan de Estudio                       │
├──────────────────────────────────────────────┤
│                                              │
│  Semana 1-2  [████████░░] 80%  ✓ Listening  │
│  Semana 3-4  [████░░░░░░] 40%  ⏳ Reading   │
│  Semana 5-6  [░░░░░░░░░░]  0%  ⏸️ Writing   │
│  Semana 7-8  [░░░░░░░░░░]  0%  ⏸️ Speaking  │
│                                              │
└──────────────────────────────────────────────┘
```

**Tabs de Secciones del Examen:**
```
[🎧 Listening] [📖 Reading] [✍️ Writing] [💬 Speaking]
```
- 4 tabs principales
- Color activo: rojo académico
- Icono + texto
- Badge con tiempo: "30 min"

**Sección por Skills:**

```
┌────────────────────────────────────────────┐
│  🎧 IELTS Listening                        │
├────────────────────────────────────────────┤
│  Duración: 30 minutos                      │
│  Secciones: 4                              │
│  Preguntas: 40                             │
│  Band Score: 9.0                           │
│                                            │
│  ✅ Qué esperar                            │
│  ✅ Estrategias probadas                   │
│  ✅ Errores comunes                        │
│  ✅ Recursos de práctica                   │
│                                            │
│  [📝 Practice Test Gratis]                 │
└────────────────────────────────────────────┘
```

**Tabla de Band Scores:**

| Band | Descriptor | Competence | Example Skills |
|------|------------|------------|----------------|
| 9 | Expert | Full operational command | Native-like fluency |
| 8 | Very Good | Fully operational | Occasional inaccuracies |
| 7 | Good | Operational command | ✅ Target Score |
| 6 | Competent | Effective command | Some inaccuracies |

- Resalta fila del Band 7 con fondo dorado suave
- Hover: tooltip con más detalles

**Sample Questions:**
```
┌────────────────────────────────────────────┐
│  📝 Sample Writing Task 2                  │
├────────────────────────────────────────────┤
│  "Some people believe that technology      │
│   has made our lives more complex..."      │
│                                            │
│  [Ver respuesta modelo (Band 8)]           │
│  [Analizar estructura]                     │
│  [Vocabulario clave]                       │
└────────────────────────────────────────────┘
```
- Acordeón expandible
- Highlighting de vocabulario avanzado
- Anotaciones con explicaciones

**Timeline de Preparación:**
```
    8 semanas antes          4 semanas antes          1 semana antes          Día del Examen
         │                        │                        │                        │
    Diagnóstico             Práctica Intensiva        Simulacros           ¡Éxito! 🎉
         │                        │                        │                        │
    └─ Test inicial        └─ Focus en debilidades   └─ Full tests         └─ Tips finales
```
- Visual timeline horizontal
- Iconos en cada milestone
- Color que cambia según progreso

**Testimonios de Éxito:**
```
┌──────────────────────────────────────────┐
│  ⭐⭐⭐⭐⭐                                 │
│                                          │
│  "Pasé de 6.0 a 7.5 en solo 8 semanas"  │
│                                          │
│  - Ana López, Ingeniera                  │
│    Score: 7.5 | Fecha: Dic 2025          │
│                                          │
│  [Leer historia completa →]              │
└──────────────────────────────────────────┘
```
- Photos circulares
- Band score en badge dorado
- Fecha de logro

**Sidebar IELTS:**
```
┌──────────────────────┐
│ 📅 Próximas Fechas   │
│                      │
│ 15 Feb 2026          │
│ 22 Feb 2026          │
│ 01 Mar 2026          │
│                      │
│ [Reservar Ahora]     │
├──────────────────────┤
│ 🎯 Score Calculator  │
│                      │
│ L: [7.5] ▼           │
│ R: [7.0] ▼           │
│ W: [6.5] ▼           │
│ S: [7.0] ▼           │
│                      │
│ Overall: 7.0         │
└──────────────────────┘
```

**CTAs IELTS:**
- "📥 Descarga Plan de Estudio 8 Semanas"
- "🎯 Test de Diagnóstico Gratis"
- "💎 Curso Premium IELTS 7+"
- "👨‍🏫 Agendar Clase con Examiner Oficial"

**Recursos Adicionales:**
- PDF descargables: Speaking topics, Writing samples
- Audio practices para Listening
- Vocabulary lists por tema (300+ palabras)
- Tips del día del examen (qué llevar, timing, etc.)

---

## 🎨 Especificaciones Técnicas de Diseño {#especificaciones}

### **Sistema de Diseño Focus English**

#### **1. Colores Corporativos**

```css
/* Primary Colors */
--purple-primary: #8B5CF6;     /* Púrpura principal */
--purple-dark: #7C3AED;        /* Hover states */
--purple-light: #A78BFA;       /* Backgrounds suaves */
--purple-ultra-light: #F3E8FF; /* Highlights */

/* Secondary Colors */
--navy: #1E40AF;              /* Profesional */
--cyan: #06B6D4;              /* Tech/Travel */
--gold: #F59E0B;              /* Premios/Éxito */
--red-academic: #DC2626;      /* Exámenes */
--green-success: #10B981;     /* Confirmaciones */

/* Neutrals */
--gray-900: #1F2937;          /* Texto principal */
--gray-700: #374151;          /* Texto secundario */
--gray-500: #6B7280;          /* Metadata */
--gray-300: #D1D5DB;          /* Borders */
--gray-100: #F3F4F6;          /* Backgrounds */
--white: #FFFFFF;

/* Semantic Colors */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

#### **2. Tipografía**

```css
/* Font Family */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-code: 'Fira Code', 'Courier New', monospace;

/* Font Sizes */
--text-xs: 12px;    /* Metadata, captions */
--text-sm: 14px;    /* Breadcrumbs, labels */
--text-base: 16px;  /* Body móvil */
--text-lg: 18px;    /* Body desktop */
--text-xl: 20px;    /* Lead paragraphs */
--text-2xl: 24px;   /* H3 */
--text-3xl: 28px;   /* H3 desktop */
--text-4xl: 36px;   /* H2 */
--text-5xl: 48px;   /* H1 desktop */
--text-6xl: 56px;   /* Hero titles */

/* Font Weights */
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.25;   /* Headings */
--leading-normal: 1.5;   /* UI elements */
--leading-relaxed: 1.7;  /* Body text */
--leading-loose: 2.0;    /* Spacious paragraphs */
```

#### **3. Espaciado**

```css
/* Spacing Scale (8px base) */
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-8: 64px;
--space-10: 80px;
--space-12: 96px;

/* Section Spacing */
--section-padding-mobile: var(--space-4);
--section-padding-desktop: var(--space-8);
--section-margin: var(--space-12);
```

#### **4. Breakpoints Responsive**

```css
/* Mobile First Approach */
--mobile: 320px;        /* Mínimo móvil */
--mobile-lg: 480px;     /* Móvil grande */
--tablet: 768px;        /* Tablet vertical */
--tablet-lg: 1024px;    /* Tablet horizontal */
--desktop: 1280px;      /* Desktop */
--desktop-lg: 1536px;   /* Desktop grande */
--desktop-xl: 1920px;   /* Full HD */
```

#### **5. Componentes Reutilizables**

**Button Primary:**
```css
.btn-primary {
  background: var(--purple-primary);
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(139, 92, 246, 0.25);
}

.btn-primary:hover {
  background: var(--purple-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(139, 92, 246, 0.35);
}
```

**Button Secondary:**
```css
.btn-secondary {
  background: transparent;
  color: var(--purple-primary);
  border: 2px solid var(--purple-primary);
  padding: 14px 30px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--purple-primary);
  color: white;
}
```

**Card:**
```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}
```

**Alert Box:**
```css
.alert {
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid;
  margin: 30px 0;
}

.alert-info {
  background: #EFF6FF;
  border-color: #3B82F6;
  color: #1E40AF;
}

.alert-success {
  background: #ECFDF5;
  border-color: #10B981;
  color: #047857;
}

.alert-warning {
  background: #FEF3C7;
  border-color: #F59E0B;
  color: #92400E;
}

.alert-tip {
  background: linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%);
  border-color: var(--purple-primary);
  color: #6B21A8;
}
```

#### **6. Animaciones y Transiciones**

```css
/* Smooth Transitions */
--transition-fast: 0.15s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;

/* Common Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease;
}

.animate-slide-up {
  animation: slideUp 0.6s ease;
}
```

#### **7. Grid System**

```css
/* Container */
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container { max-width: 720px; }
}

@media (min-width: 1024px) {
  .container { max-width: 960px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1200px; }
}

/* Grid Layout */
.grid {
  display: grid;
  gap: 24px;
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive Grid */
@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}
```

#### **8. Accesibilidad**

```css
/* Focus States */
*:focus {
  outline: 2px solid var(--purple-primary);
  outline-offset: 2px;
}

/* Skip to Content */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--purple-primary);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-to-content:focus {
  top: 0;
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 🚀 Guía de Implementación {#implementacion}

### **Fase 1: Setup Inicial (Semana 1)**

#### **1. Instalar Dependencias de Diseño**

```bash
# Tipografías
npm install @fontsource/inter @fontsource/fira-code

# UI Components (opcional)
npm install @headlessui/react @heroicons/react

# Animaciones
npm install framer-motion

# Utilidades CSS
npm install tailwindcss@latest
```

#### **2. Configurar Tailwind con Design System**

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        purple: {
          primary: '#8B5CF6',
          dark: '#7C3AED',
          light: '#A78BFA',
          'ultra-light': '#F3E8FF',
        },
        navy: '#1E40AF',
        cyan: '#06B6D4',
        gold: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '56px',
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
      },
      lineHeight: {
        'tight': '1.25',
        'normal': '1.5',
        'relaxed': '1.7',
        'loose': '2.0',
      },
    },
  },
}
```

#### **3. Crear Componentes Reutilizables**

```typescript
// components/blog/ArticleLayout.tsx
import React from 'react';

interface ArticleLayoutProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  children: React.ReactNode;
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  author,
  date,
  readTime,
  category,
  heroImage,
  children,
}) => {
  return (
    <article className="article-layout">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <a href="/">Inicio</a> › 
        <a href="/blog">Blog</a> › 
        <span>{category}</span>
      </nav>

      {/* Hero Image */}
      <div className="hero-section">
        <img src={heroImage} alt={title} />
      </div>

      {/* Article Header */}
      <header className="article-header">
        <h1>{title}</h1>
        <div className="metadata">
          <span>{author}</span>
          <span>{date}</span>
          <span>{readTime} min lectura</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="article-content">
        <aside className="sidebar-left">
          {/* Table of Contents */}
        </aside>

        <main className="main-content">
          {children}
        </main>

        <aside className="sidebar-right">
          {/* CTAs, Resources */}
        </aside>
      </div>
    </article>
  );
};
```

### **Fase 2: Crear Templates por Categoría (Semana 2)**

#### **Template Selector Component**

```typescript
// components/blog/TemplateSelector.tsx
import { ArticleA1 } from './templates/ArticleA1';
import { ArticleB2 } from './templates/ArticleB2';
import { ArticleTravel } from './templates/ArticleTravel';
import { ArticleIT } from './templates/ArticleIT';
import { ArticleIELTS } from './templates/ArticleIELTS';

export const TemplateSelector = ({ type, data }) => {
  switch(type) {
    case 'level-a1':
    case 'level-a2':
      return <ArticleA1 data={data} />;
    case 'level-b2':
    case 'level-c1':
      return <ArticleB2 data={data} />;
    case 'travel':
      return <ArticleTravel data={data} />;
    case 'sector-it':
      return <ArticleIT data={data} />;
    case 'exam-ielts':
      return <ArticleIELTS data={data} />;
    default:
      return <DefaultArticle data={data} />;
  }
};
```

### **Fase 3: Optimización SEO (Semana 3)**

#### **Meta Tags Component**

```typescript
// components/blog/SEOHead.tsx
import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  url: string;
  article?: {
    author: string;
    publishedTime: string;
    modifiedTime: string;
    section: string;
    tags: string[];
  };
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogImage,
  url,
  article,
}) => {
  const fullTitle = `${title} | Focus English`;
  
  return (
    <Head>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      
      {article && (
        <>
          <meta property="article:author" content={article.author} />
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:section" content={article.section} />
          {article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": ogImage,
            "author": {
              "@type": "Person",
              "name": article?.author || "Focus English Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Focus English",
              "logo": {
                "@type": "ImageObject",
                "url": "https://focusenglish.com/logo.png"
              }
            },
            "datePublished": article?.publishedTime,
            "dateModified": article?.modifiedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })
        }}
      />
    </Head>
  );
};
```

### **Fase 4: Testing & Launch (Semana 4)**

#### **Checklist de Pre-Launch**

- [ ] **Diseño Responsive:**
  - [ ] Móvil (320px - 767px) ✅
  - [ ] Tablet (768px - 1023px) ✅
  - [ ] Desktop (1024px+) ✅

- [ ] **Performance:**
  - [ ] Core Web Vitals < 2.5s ✅
  - [ ] Imágenes optimizadas (WebP) ✅
  - [ ] Lazy loading implementado ✅
  - [ ] CSS/JS minificado ✅

- [ ] **SEO:**
  - [ ] Meta tags completas ✅
  - [ ] Open Graph images 1200x630px ✅
  - [ ] Schema markup implementado ✅
  - [ ] Sitemap actualizado ✅
  - [ ] Robots.txt configurado ✅

- [ ] **Accesibilidad:**
  - [ ] WCAG 2.1 AA compliant ✅
  - [ ] Keyboard navigation ✅
  - [ ] Screen reader tested ✅
  - [ ] Alt text en todas las imágenes ✅

- [ ] **Analytics:**
  - [ ] Google Analytics 4 ✅
  - [ ] Event tracking (CTAs, descargas) ✅
  - [ ] Heatmaps (Hotjar) ✅
  - [ ] Conversión goals configurados ✅

---

## 📊 Métricas de Éxito

### **KPIs por Mockup**

| Mockup | Objetivo Principal | Métrica Clave | Target Q1 2026 |
|--------|-------------------|---------------|----------------|
| **A1** | Captación principiantes | Descargas guía A1 | 1,000/mes |
| **B2** | Conversión profesionales | Inscripciones curso | 200/mes |
| **Viajes** | Engagement viajeros | Tiempo en página | 5+ min |
| **IT** | Lead generation tech | Newsletter subs | 500/mes |
| **IELTS** | Venta curso premium | Conversiones directas | 100/mes |

### **Benchmarks de Performance**

- **Page Load:** < 2.5s (móvil) / < 1.5s (desktop)
- **Time to Interactive:** < 3.8s
- **First Contentful Paint:** < 1.8s
- **Cumulative Layout Shift:** < 0.1
- **Largest Contentful Paint:** < 2.5s

---

## 🎯 Próximos Pasos

1. ✅ **Mockups visuales completados** (5/5)
2. ⏳ **Crear HTML/CSS estáticos** para cada mockup
3. ⏳ **Integrar con Next.js App Router**
4. ⏳ **Implementar CMS (Strapi/Contentful)**
5. ⏳ **Configurar tracking y analytics**
6. ⏳ **Testing A/B de CTAs**
7. ⏳ **Launch MVP blog (3 artículos)**

---

## 📞 Contacto y Soporte

**Equipo de Diseño:** design@focusenglish.com  
**Documentación:** `/GUION_EDITORIAL_BLOG_2026.md`  
**Plantillas:** `/content/blog/templates/`  
**Repositorio:** [GitHub - focusonenglish](https://github.com/u7934364978-maker/focusonenglish)

---

**Última actualización:** 24 de Enero, 2026  
**Versión:** 1.0  
**Autor:** Focus English Design Team

