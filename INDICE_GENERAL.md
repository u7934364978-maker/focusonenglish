# 📚 ÍNDICE GENERAL - REESTRUCTURACIÓN FOCUS ENGLISH

## 🎯 PROPÓSITO DE ESTA DOCUMENTACIÓN

Este conjunto de documentos contiene la **propuesta completa de reestructuración** del sitio web Focus English para mejorar la navegación, experiencia de usuario y conversiones.

---

## 📖 DOCUMENTOS DISPONIBLES

### 1. 📋 RESUMEN_EJECUTIVO.md ⭐ **EMPIEZA AQUÍ**
**Tiempo de lectura**: 10 minutos
**Para quién**: Product Owner, Project Manager, Stakeholders

**Contenido**:
- Resumen ejecutivo en 3 minutos
- Tabla completa de todas las rutas (65 páginas)
- Plan de implementación por fases
- Estimación de esfuerzo y costos
- KPIs y métricas de éxito
- Criterios de aceptación

👉 **Recomendación**: Lee esto primero para entender el alcance total del proyecto.

---

### 2. 📊 TABLA_VISUAL_RUTAS.md ⭐ **REFERENCIA TÉCNICA**
**Tiempo de lectura**: 15 minutos
**Para quién**: Desarrolladores, Technical Lead

**Contenido**:
- Tabla detallada de las 65 rutas del sitio
- Estados: Mantener, Mover, Crear, Eliminar
- Prioridades: Alta, Media, Baja
- Código de redirects para next.config.js
- Screenshots conceptuales de cada sección
- Criterios de aceptación por página

👉 **Recomendación**: Usa esto como referencia durante el desarrollo.

---

### 3. 📄 PROPUESTA_ESTRUCTURA_NAVEGACION.md
**Tiempo de lectura**: 30 minutos
**Para quién**: Todos los roles, documento más completo

**Contenido**:
- Análisis detallado de la situación actual
- Problemas identificados
- Arquitectura de información propuesta
- User journey del nuevo estudiante
- Landings recomendadas por objetivo
- Plan de migración completo
- Mapa de sitio final
- Preguntas para el equipo

👉 **Recomendación**: Lee esto para entender el "por qué" de cada decisión.

---

### 4. 🎨 DIAGRAMA_VISUAL_NAVEGACION.md
**Tiempo de lectura**: 20 minutos
**Para quién**: UX/UI Designers, Product Managers

**Contenido**:
- Diagramas ASCII de estructura actual
- Diagrama de nueva navegación principal
- Flujo completo de usuario (journey map)
- Navegación móvil propuesta
- Sitemap visual en árbol
- Wireframes de landing pages
- Comparativa antes vs después
- Heatmap conceptual de interacciones
- Responsive behavior

👉 **Recomendación**: Úsalo para diseñar mockups y prototipos.

---

## 🚀 QUICK START GUIDE

### Para Product Owner / Project Manager

1. ✅ Lee **RESUMEN_EJECUTIVO.md** (10 min)
2. ✅ Revisa estimaciones de esfuerzo y timeline
3. ✅ Aprueba o ajusta las prioridades
4. ✅ Asigna recursos al proyecto
5. ✅ Inicia Sprint 1

### Para Desarrolladores

1. ✅ Lee **TABLA_VISUAL_RUTAS.md** (15 min)
2. ✅ Revisa el código de redirects propuesto
3. ✅ Identifica páginas que necesitas crear/modificar
4. ✅ Estima esfuerzo técnico por tarea
5. ✅ Comienza por Fase 1: Limpieza

### Para Diseñadores UX/UI

1. ✅ Lee **DIAGRAMA_VISUAL_NAVEGACION.md** (20 min)
2. ✅ Revisa wireframes conceptuales
3. ✅ Crea mockups de alta fidelidad en Figma
4. ✅ Diseña componentes reutilizables (CourseCard, LevelBadge, etc.)
5. ✅ Prepara assets para desarrollo

### Para Content Writers

1. ✅ Lee **PROPUESTA_ESTRUCTURA_NAVEGACION.md** (30 min)
2. ✅ Revisa sección de "Landings Recomendadas"
3. ✅ Identifica páginas que necesitan contenido nuevo
4. ✅ Escribe copy para las 3 landings principales (Trabajo, Viajes, Exámenes)
5. ✅ Prepara FAQ y contenido de utilidades

---

## 📊 ESTADÍSTICAS DEL PROYECTO

### Alcance Total

| Métrica | Valor | Desglose |
|---------|-------|----------|
| **Total de páginas** | 65 | Ver tabla completa en RESUMEN_EJECUTIVO.md |
| **Páginas a mantener** | 26 | 40% sin cambios |
| **Páginas a crear** | 27 | 42% nuevas |
| **Páginas a mover** | 11 | 17% reestructurar |
| **Páginas a eliminar** | 3 | 1% duplicados |

### Esfuerzo Estimado

| Recurso | Horas | Semanas | Costo* |
|---------|-------|---------|--------|
| Frontend Developer | 160h | 4 sem | €6,400 |
| UI/UX Designer | 80h | 2 sem | €3,200 |
| Content Writer | 40h | 1 sem | €1,200 |
| QA Tester | 40h | 1 sem | €1,200 |
| **TOTAL** | **320h** | **8 sem** | **€12,000** |

*Estimación mercado España 2026

### Timeline

| Fase | Duración | Descripción |
|------|----------|-------------|
| Fase 1 | 2 semanas | Limpieza y unificación |
| Fase 2 | 2 semanas | Landings de objetivos |
| Fase 3 | 2 semanas | Cursos especializados |
| Fase 4 | 2 semanas | Exámenes oficiales |
| Fase 5 | 2 semanas | Área de estudiante |
| Fase 6 | 2 semanas | Utilidades y legales |
| **TOTAL** | **12 semanas** | **3 meses** |

---

## 🎯 OBJETIVOS Y RESULTADOS ESPERADOS

### KPIs Clave

| Métrica | Actual* | Objetivo | Mejora |
|---------|---------|----------|--------|
| Tasa de rebote homepage | TBD | -25% | ⬇️ |
| Tiempo en sitio | TBD | +40% | ⬆️ |
| Conversión test nivel | TBD | +60% | ⬆️ |
| Inscripciones | TBD | +35% | ⬆️ |
| Clics a curso | TBD | -3 clics | ⬇️ |
| Errores 404 | TBD | 0 | ⬇️ |
| Lighthouse Score | TBD | 95+ | ⬆️ |

*TBD = To Be Determined (medir antes de implementar)

---

## 🗺️ MAPA CONCEPTUAL DEL PROYECTO

```
                    ┌──────────────────┐
                    │   DISCOVERY      │
                    │ Análisis Actual  │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │   PROPUESTA      │
                    │ Nueva Estructura │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │   APROBACIÓN     │
                    │   Stakeholders   │
                    └────────┬─────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
    ┌────▼────┐        ┌─────▼─────┐      ┌────▼────┐
    │ DISEÑO  │        │DESARROLLO │      │CONTENIDO│
    │ UI/UX   │        │ Frontend  │      │ Writing │
    └────┬────┘        └─────┬─────┘      └────┬────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             │
                    ┌────────▼─────────┐
                    │    TESTING       │
                    │   QA & UAT       │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │   LANZAMIENTO    │
                    │   Deployment     │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │  MONITOREO       │
                    │ Analytics & KPIs │
                    └──────────────────┘
```

---

## 📋 CHECKLIST DE IMPLEMENTACIÓN

### Fase 0: Preparación
- [ ] Aprobar propuesta completa
- [ ] Asignar equipo de desarrollo
- [ ] Crear branch de desarrollo (`feature/navigation-restructure`)
- [ ] Configurar entorno de staging
- [ ] Establecer métricas baseline

### Fase 1: Limpieza (Semanas 1-2)
- [ ] Unificar `/login` y `/signin` → `/cuenta/login`
- [ ] Unificar `/register` y `/signup` → `/cuenta/registro`
- [ ] Renombrar `/diagnostico` → `/test-nivel`
- [ ] Renombrar `/contact` → `/contacto`
- [ ] Eliminar `/certificaciones`
- [ ] Crear redirects 301 en next.config.js
- [ ] Actualizar Navigation.tsx
- [ ] Actualizar Footer.tsx
- [ ] Actualizar sitemap.xml
- [ ] Testing completo de navegación
- [ ] Deploy a staging

### Fase 2: Landings (Semanas 3-4)
- [ ] Crear `/cursos/trabajo` landing
- [ ] Crear `/cursos/viajes` landing
- [ ] Crear `/cursos/examenes` landing
- [ ] Mover `/curso-b2` → `/cursos/examenes/oficiales/cambridge-b2-first`
- [ ] Crear componentes reutilizables (CourseCard, LevelBadge)
- [ ] Escribir contenido para las 3 landings
- [ ] Testing responsive
- [ ] Deploy a staging

### Fase 3: Especializados (Semanas 5-6)
- [ ] Crear `/cursos/trabajo/especializados/negocios`
- [ ] Crear `/cursos/trabajo/especializados/tecnologia`
- [ ] Crear `/cursos/trabajo/especializados/medicina`
- [ ] Crear `/cursos/trabajo/especializados/legal`
- [ ] Crear `/cursos/trabajo/especializados/marketing`
- [ ] Escribir contenido para cada especialización
- [ ] Testing y deploy

### Fase 4: Exámenes (Semanas 7-8)
- [ ] Crear `/cursos/examenes/oficiales/cambridge-c1-advanced`
- [ ] Crear `/cursos/examenes/oficiales/toefl`
- [ ] Crear `/cursos/examenes/oficiales/ielts`
- [ ] Duplicar estructura de lecciones de B2
- [ ] Testing y deploy

### Fase 5: Estudiante (Semanas 9-10)
- [ ] Mover `/dashboard` → `/estudiante/dashboard`
- [ ] Crear `/estudiante/mis-cursos`
- [ ] Crear `/estudiante/certificados`
- [ ] Crear `/estudiante/perfil`
- [ ] Crear `/estudiante/progreso`
- [ ] Testing de flujos de usuario
- [ ] Deploy a staging

### Fase 6: Utilidades (Semanas 11-12)
- [ ] Crear `/sobre-nosotros`
- [ ] Crear `/preguntas-frecuentes`
- [ ] Crear `/politica-privacidad`
- [ ] Crear `/terminos-condiciones`
- [ ] Mejorar `/contacto`
- [ ] Testing final completo
- [ ] Deploy a producción

### Post-Lanzamiento
- [ ] Monitorear errores y bugs
- [ ] Analizar métricas KPI
- [ ] Recopilar feedback de usuarios
- [ ] Ajustar según necesidad
- [ ] Documentar lecciones aprendidas

---

## 🔧 HERRAMIENTAS Y RECURSOS

### Desarrollo
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Analytics**: Google Analytics 4
- **Testing**: Jest + React Testing Library
- **CI/CD**: Vercel / GitHub Actions

### Diseño
- **Mockups**: Figma
- **Wireframes**: Balsamiq / Figma
- **Prototipos**: Figma Prototype
- **Assets**: Unsplash (fotos) / Heroicons (iconos)

### Gestión
- **Project Management**: Jira / Trello / Linear
- **Comunicación**: Slack / Microsoft Teams
- **Documentación**: Notion / Confluence
- **Version Control**: Git / GitHub

---

## 🚨 RIESGOS Y MITIGACIÓN

### Riesgos Identificados

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Pérdida de SEO por redirects | Media | Alto | Usar redirects 301, mantener URLs antiguas durante 6 meses |
| Bugs en navegación | Alta | Medio | Testing exhaustivo en staging antes de producción |
| Contenido insuficiente | Media | Medio | Contratar content writer desde Fase 1 |
| Delay en timeline | Alta | Medio | Buffer de 2 semanas en estimación total |
| Resistencia de usuarios | Baja | Bajo | Mantener navegación familiar, agregar guía de usuario |

---

## 📞 CONTACTO Y SOPORTE

### Para Preguntas sobre la Propuesta

- **Documento creado por**: Claude - Asistente de IA
- **Fecha**: 2026-01-15
- **Versión**: 1.0

### Para Implementación

- **Product Owner**: [TBD]
- **Technical Lead**: [TBD]
- **UI/UX Designer**: [TBD]
- **Content Writer**: [TBD]

---

## 📚 APÉNDICES

### A. Glosario de Términos

- **CEFR**: Common European Framework of Reference for Languages (A1-C2)
- **CTA**: Call To Action
- **SEO**: Search Engine Optimization
- **UX**: User Experience
- **UI**: User Interface
- **KPI**: Key Performance Indicator
- **Redirect 301**: Redirección permanente HTTP

### B. Referencias Útiles

- [Next.js Redirects Documentation](https://nextjs.org/docs/api-reference/next.config.js/redirects)
- [SEO Best Practices](https://developers.google.com/search/docs)
- [Accessibility Guidelines WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### C. Changelog

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 2026-01-15 | Propuesta inicial completa |

---

## ✅ PRÓXIMOS PASOS INMEDIATOS

### 1️⃣ Revisar Documentación (Hoy)
- [ ] Leer RESUMEN_EJECUTIVO.md
- [ ] Revisar TABLA_VISUAL_RUTAS.md
- [ ] Entender PROPUESTA_ESTRUCTURA_NAVEGACION.md

### 2️⃣ Reunión de Aprobación (Esta Semana)
- [ ] Presentar propuesta a stakeholders
- [ ] Discutir timeline y recursos
- [ ] Aprobar o ajustar prioridades
- [ ] Definir equipo de trabajo

### 3️⃣ Preparación Técnica (Próxima Semana)
- [ ] Crear branch de desarrollo
- [ ] Configurar entorno de staging
- [ ] Establecer métricas baseline
- [ ] Preparar herramientas de desarrollo

### 4️⃣ Inicio de Desarrollo (Semana 3)
- [ ] Kick-off meeting con equipo completo
- [ ] Asignar tareas de Fase 1
- [ ] Comenzar implementación
- [ ] Daily standups para seguimiento

---

**¡Proyecto listo para iniciar! 🚀**

---

**Última actualización**: 2026-01-15
**Estado**: 📋 Documentación Completa
**Pendiente**: Aprobación y Asignación de Recursos

