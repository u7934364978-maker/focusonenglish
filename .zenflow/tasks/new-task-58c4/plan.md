# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: 45e48a9b-0c63-4518-be0d-7ae691c0cf8b -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 5e09c237-7437-4473-904b-9380e7620746 -->

Create a technical specification based on the PRD in `{@artifacts_path}/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning
<!-- chat-id: 6a5d4cc7-d91d-4e71-ac6d-832993482bd7 -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

### [x] Step 1: Crear artículo Anki para aprender inglés — guía completa (Prioridad 1)
<!-- chat-id: a4b2c406-54b5-4d86-9d3f-4634b1b9016f -->

Crear `src/content/blog/metodos/anki-para-aprender-ingles-guia.md` con 2.000+ palabras.

- Frontmatter completo: title, date 2026-03-11, updatedDate, author sara-mendez, excerpt, category metodos, readTime, image Pexels, alt, keywords, faqs (mín. 3), canonical
- Secciones H2/H3: qué es Anki, instalación (desktop/móvil), configuración inicial, creación de tarjetas para inglés, mazos prehechos (AnkiWeb), cómo funciona el SRS dentro de Anki, consejos avanzados, tabla comparativa con otras apps de flashcards
- FAQ (mín. 3 preguntas)
- Enlace interno al hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Enlace cruzado a `/blog/metodos/repeticion-espaciada-srs-ingles` y `/blog/metodos/rutina-apps-ingles-como-combinarlas`

### [x] Step 2: Crear artículo Mejores canales de YouTube para aprender inglés (Prioridad 2)
<!-- chat-id: 9ea8bc9e-5d63-473c-adf9-57a9a11a162e -->

Crear `src/content/blog/metodos/mejores-canales-youtube-aprender-ingles.md` con 2.200+ palabras.

- Frontmatter completo con campos requeridos, autor sara-mendez
- Secciones H2/H3: por qué YouTube para inglés gratis, guía de canales por nivel (A1-A2, B1-B2, C1-C2), canales por objetivo (pronunciación, gramática, slang, conversación, exámenes), tabla resumen de canales, cómo estructurar una rutina con YouTube
- Canales incluidos: los del hub (de la sección YouTube) + al menos 10-15 adicionales
- FAQ (mín. 3)
- Enlace interno al hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Enlace cruzado a `/blog/metodos/rutina-apps-ingles-como-combinarlas`

### [x] Step 3: Crear artículo Repetición espaciada SRS para inglés (Prioridad 3)
<!-- chat-id: 3622da0b-988e-4f62-9494-59f459148be9 -->

Crear `src/content/blog/metodos/repeticion-espaciada-srs-ingles.md` con 1.800+ palabras.

- Frontmatter completo, autor sara-mendez
- Secciones H2/H3: qué es la repetición espaciada, la curva del olvido de Ebbinghaus (con datos), por qué es superior a la memorización clásica, cómo funciona el algoritmo SM-2 de Anki, apps que usan SRS (Anki, Duolingo, Lingopie, etc.), cómo aplicar SRS al vocabulario inglés, errores comunes
- FAQ (mín. 3)
- Enlace interno al hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Enlace cruzado a `/blog/metodos/anki-para-aprender-ingles-guia`

### [x] Step 4: Crear artículo Rutina de apps para aprender inglés — cómo combinarlas (Prioridad 4)
<!-- chat-id: 87a3dca5-603a-4e96-8c1a-1bdbd0faa73c -->

Crear `src/content/blog/metodos/rutina-apps-ingles-como-combinarlas.md` con 1.800+ palabras.

- Frontmatter completo, autor sara-mendez
- Secciones H2/H3: por qué combinar apps, el error de "saltar de app en app", rutina recomendada por nivel (A1, B1, C1) con tiempo asignado a cada app, ejemplos de horarios semanales, tabla de apps por habilidad (speaking, listening, vocabulary, grammar, pronunciation), cómo medir el progreso
- FAQ (mín. 3)
- Enlace interno al hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Enlace cruzado a TODOS los artículos de cluster ya escritos en steps 1-3 y los pendientes en steps 5-10

### [ ] Step 5: Crear artículo Duolingo inglés — review honesto 2026 (Prioridad 5)

Crear `src/content/blog/metodos/duolingo-ingles-review.md` con 1.800+ palabras.

- Frontmatter completo, autor sara-mendez
- Secciones H2/H3: qué ofrece Duolingo (overview), ventajas reales, desventajas reales (sección honesta), hasta qué nivel es útil, para quién sirve y para quién no, Duolingo vs otras apps (tabla comparativa), cómo combinarlo con otras herramientas, Duolingo Plus vs gratis
- FAQ (mín. 3)
- Enlace interno al hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Enlace cruzado a `/blog/metodos/rutina-apps-ingles-como-combinarlas` y `/blog/metodos/apps-ingles-sin-internet-offline`

### [ ] Step 6: Crear artículo ELSA Speak review — pronunciación inglés (Prioridad 6)

Crear `src/content/blog/metodos/elsa-speak-review-pronunciacion-ingles.md` con 1.600+ palabras.

- Frontmatter completo, autor sara-mendez
- Secciones H2/H3: cómo funciona la IA de ELSA, fonemas que trabaja, problemas fonéticos específicos de hispanohablantes (/th/, /v/, vocales), versión gratis vs premium (tabla comparativa), resultados reales (qué mejora y en cuánto tiempo), alternativas gratuitas para pronunciación
- FAQ (mín. 3)
- Enlace interno al hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Enlace cruzado a `/blog/metodos/rutina-apps-ingles-como-combinarlas`

### [ ] Step 7: Crear artículo BBC Learning English — guía completa (Prioridad 7)

Crear `src/content/blog/metodos/bbc-learning-english-guia-completa.md` con 1.800+ palabras.

- Frontmatter completo, autor sara-mendez
- Secciones H2/H3: por qué BBC Learning English es única, guía de cada sección (6 Minute English, Grammar in a Minute, The English We Speak, In the News, Words in the News, etc.), niveles recomendados por sección, cómo estructurar una rutina diaria con BBC, recursos adicionales del sitio, cómo descargarlo/usarlo sin internet
- FAQ (mín. 3)
- Enlace interno al hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Enlace cruzado a `/blog/metodos/rutina-apps-ingles-como-combinarlas`

### [ ] Step 8: Crear artículo Lingopie review — aprender inglés con series (Prioridad 8)

Crear `src/content/blog/metodos/lingopie-review-aprender-ingles-series.md` con 1.600+ palabras.

- Frontmatter completo, autor sara-mendez
- Secciones H2/H3: qué es Lingopie y cómo funciona, qué contenido en inglés tiene, el sistema de subtítulos interactivos, versión gratis vs pago (tabla), cómo integrar Lingopie con Anki (exportar vocabulario), alternativas gratuitas (Language Reactor para Netflix/YouTube), para quién es ideal
- FAQ (mín. 3)
- Enlace interno al hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Enlace cruzado a `/blog/metodos/anki-para-aprender-ingles-guia` y `/blog/metodos/rutina-apps-ingles-como-combinarlas`

### [ ] Step 9: Crear artículo Cake app inglés — review y cómo usarla (Prioridad 9)

Crear `src/content/blog/metodos/cake-app-ingles-review.md` con 1.500+ palabras.

- Frontmatter completo, autor sara-mendez
- Secciones H2/H3: qué es Cake y cómo funciona, el sistema de aprendizaje con vídeos cortos, práctica de speaking en Cake, niveles disponibles, limitaciones de la versión gratuita vs premium (tabla), para quién es ideal Cake, comparativa con apps similares
- FAQ (mín. 3)
- Enlace interno al hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Enlace cruzado a `/blog/metodos/rutina-apps-ingles-como-combinarlas`

### [ ] Step 10: Crear artículo Apps inglés sin internet — las mejores opciones offline (Prioridad 10)

Crear `src/content/blog/metodos/apps-ingles-sin-internet-offline.md` con 1.500+ palabras.

- Frontmatter completo, autor sara-mendez
- Secciones H2/H3: por qué importa el modo offline, qué apps del hub funcionan offline (tabla: Anki ✓, Duolingo parcial, etc.), otras apps offline recomendadas, cómo descargar contenido en cada app, casos de uso (viajes, transporte, zonas sin señal, ahorro de datos), configuración recomendada para uso offline
- FAQ (mín. 3)
- Enlace interno al hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Enlace cruzado a `/blog/metodos/anki-para-aprender-ingles-guia` y `/blog/metodos/duolingo-ingles-review`

### [ ] Step 11: Actualizar hub blog y hub landing con enlaces a los artículos de cluster

Editar los dos archivos hub para añadir enlaces internos a todos los cluster articles:

- `src/content/blog/metodos/mejores-apps-ingles-gratis.md`:
  - Añadir enlace a cada artículo de cluster en la sección correspondiente a cada app (Anki → anki-guia, BBC → bbc-guia, Duolingo → duolingo-review, ELSA → elsa-review, Cake → cake-review, Lingopie → lingopie-review, YouTube → canales-youtube)
  - Añadir sección final "Profundiza más" con enlace a los 10 artículos de cluster
- `src/content/hubs/mejores-apps-ingles-gratis.md`:
  - Añadir la misma sección "Profundiza más" con enlaces a los 10 cluster articles
  - Añadir enlaces inline donde aplique según la estructura existente del archivo
