# PRD: Mejoras de Experiencia de Usuario — Curso A1 Focus English

## 1. Contexto y Diagnóstico

### Situación actual
La plataforma `focus-on-english.com/curso-a1` es una SPA Next.js 15 con SSR. La página renderiza JavaScript en el cliente, por lo que la carga inicial muestra solo "Cargando..." sin contenido visible para el usuario ni para los motores de búsqueda (problema de SEO/percepción).

El flujo actual del curso A1 es:
1. El estudiante llega al **dashboard** (`/dashboard`) → ve un panel con progreso global, XP, streaks.
2. Navega a `/dashboard/trabajo/a1` (o similar por goal) → ve el `CourseCurriculum` con módulos y lecciones.
3. Hace clic en una lección → llega a `/practice/[lessonId]` → `LessonViewer.tsx` o `PremiumSession.tsx`.
4. Completa ejercicios → recibe feedback + celebración + XP.

### Fortalezas identificadas
- **Sistema de gamificación** completo (XP, streaks, badges, leaderboard, misiones).
- **Motor adaptativo** (SM-2 / SRS) con priorización de reviews vs. contenido nuevo.
- **Ejercicios variados**: multiple_choice, true_false, reorder_words, matching, fill_blanks, categorization, reading-comprehension, flashcard, speaking, audio, crossword, word-search.
- **Evaluación AI** en tiempo real (speaking, writing, text answers).
- **Contenido bilingüe**: tooltips inline `[[word|traducción]]` con contexto en español.
- **Feedback de celebración** con confetti y efectos de sonido.
- **Teoría + práctica** en tabs separados con TheorySlideViewer.

### Debilidades / Oportunidades de mejora UX

#### Problema crítico: Primer impacto (0–3 segundos)
- La URL `/curso-a1` no existe como ruta en el proyecto. El estudiante probablemente llega al dashboard. No hay una **landing de onboarding** dedicada al curso A1 que explique qué esperar antes de entrar.
- `CourseCurriculum` solo muestra porcentaje de completado, módulos y lecciones. No hay una presentación narrativa del curso, no hay estimación de tiempo, no hay "próxima acción recomendada".

#### Problema: Navegación y orientación
- El estudiante no sabe dónde está dentro del curso. La barra de progreso global (`progressPercentage`) existe pero no hay **mapa visual del curso** (roadmap).
- No hay indicación de "siguiente lección recomendada" basada en el progreso.
- El sidebar solo tiene "Práctica Inteligente" y "Estructura del Curso" con 2 puntos genéricos.

#### Problema: Motivación en sesión
- `CelebrationModal` aparece al final de cada lección con confetti: bueno. Pero **el umbral de celebración es 70%** — por debajo se muestra "Keep Practicing!" en inglés (debería ser en español para usuarios A1).
- No hay **micro-celebraciones** durante el ejercicio (cuando se acierta una pregunta, solo hay feedback visual estático).
- El `failCount` en `PremiumSession` aplica "repair mode" (reintento) pero no hay indicación visual clara de qué está pasando ("Repasando…").

#### Problema: Accesibilidad y claridad para nivel A1
- Las instrucciones de ejercicio (prompt_es) a veces están en inglés o son muy técnicas para un principiante.
- No hay **modo de lectura lenta** o ayuda de pronunciación on-demand para nivel A1.
- El tooltip `[[word|traducción]]` es potente pero no tiene audio asociado.

#### Problema: Continuidad y hábito
- El streak system existe en Supabase pero el `WeeklyCourseViewer` usa `localStorage` para progreso — no se sincroniza con Supabase en ese flujo.
- No hay **recordatorio de sesión** in-app (notificación de streak en riesgo dentro del dashboard).
- No hay "sesión rápida de 5 minutos" diferenciada de "sesión completa".

#### Problema: Onboarding / contexto inicial
- El test de nivel existe (`/test-nivel`) pero no hay flujo de onboarding que lleve al estudiante desde el test hasta el curso A1 correcto con objetivo personalizado.
- No hay "primera clase" guiada que introduzca la mecánica antes de lanzar ejercicios.

---

## 2. Objetivos del Producto

### Objetivo primario
Aumentar la **tasa de retención en semana 1** (usuarios que completan al menos 3 lecciones) pasando del baseline actual a un objetivo medible.

### Objetivos secundarios
- Reducir el abandono en la **primera sesión** (primeros 15 minutos).
- Aumentar la **frecuencia de sesión** (días activos por semana).
- Mejorar la **percepción de progreso** (los usuarios sienten que avanzan).

---

## 3. Funcionalidades a Implementar

### F1: Course Welcome Screen ("Primera Vista")
**Prioridad: Alta**

Una pantalla introductoria que aparece la primera vez que el usuario accede al curso A1. Muestra:
- Narrativa del curso: "Aprenderás X, Y, Z en 90 días"
- Estructura del curso: número de módulos, lecciones estimadas, duración por sesión
- Primer objetivo claro: "Empieza con la Unidad 1: Saludos"
- CTA prominente: "Comenzar ahora →"

**Implementación:** Componente `CourseWelcomeScreen.tsx` con detección de "primera visita" via `user_profiles.onboarding_completed` en Supabase. Se integra en `CourseCurriculum.client.tsx`.

---

### F2: Roadmap Visual del Curso (Course Map)
**Prioridad: Alta**

Reemplazar/complementar la lista de módulos y lecciones actual con un **mapa visual tipo camino** (estilo Duolingo) donde:
- Cada unidad es un nodo en el mapa.
- Nodos completados se muestran con estrella dorada.
- Nodo actual (recomendado) se destaca con animación pulsante.
- Nodos futuros están en gris/bloqueados visualmente (pero accesibles).
- Al pasar el ratón/tap sobre un nodo, se ve: título, duración estimada, skills que se practican.

**Implementación:** Componente `CourseRoadmap.tsx` como alternativa de vista en `CourseCurriculum.client.tsx`. Toggle entre vista "mapa" y vista "lista".

---

### F3: "Siguiente Acción Recomendada" (Smart Next Button)
**Prioridad: Alta**

Un botón/card prominente al inicio del dashboard de curso que dice:
- "Continúa donde lo dejaste: **Unidad 3 – Lección 2**" (si tiene progreso)
- "¡Empieza aquí! **Unidad 1 – Lección 1**" (si es nuevo)
- "Repasa: tienes 5 ejercicios pendientes de revisión" (si hay SRS reviews)

La lógica usa el progreso de `premiumCourseService.getProgress()` y el estado SRS de `user_srs`.

**Implementación:** Componente `NextActionCard.tsx` en el sidebar de `CourseCurriculum.client.tsx`, sustituyendo el CTA genérico de "Práctica Inteligente".

---

### F4: Micro-Celebraciones por Ejercicio Correcto
**Prioridad: Media**

Al responder correctamente una pregunta en `PremiumSession.tsx`:
- Animación de "burst" en el botón de respuesta (+XP flotante).
- Sonido de confirmación corto (ya existe la infra de AudioContext).
- Racha de aciertos consecutivos: tras 3 consecutivos, banner animado "¡Racha de 3! 🔥".

**Implementación:** Añadir estado `consecutiveCorrect` en `PremiumSession.tsx`. Al superar thresholds (3, 5, 10), mostrar un `StreakBurst` overlay temporal (500ms) con framer-motion.

---

### F5: Repair Mode UI Mejorado
**Prioridad: Media**

Cuando `isRepairing` es `true` en `PremiumSession.tsx`, mostrar:
- Banner visible: "Modo Repaso 🔄 — Estás revisando los ejercicios fallados."
- Barra de progreso diferenciada (color naranja en lugar de coral).
- Contador de ejercicios de repaso restantes.

**Implementación:** Modificar el header de `PremiumSession.tsx` para mostrar estado de repaso claramente.

---

### F6: Internacionalización del Feedback A1
**Prioridad: Media**

`CelebrationModal` y mensajes de feedback deben estar en español para usuarios A1:
- "¡Bien hecho!" en lugar de "Well Done!"
- "¡Sigue practicando!" en lugar de "Keep Practicing!"
- Mensajes sensibles al nivel: para A1, lenguaje más simple y motivacional.

**Implementación:** Añadir prop `language?: 'es' | 'en'` a `CelebrationModal.tsx`. El nivel del curso (A1) pasa `language='es'`. Añadir objeto de traducciones.

---

### F7: Sincronización de Progreso WeeklyCourseViewer
**Prioridad: Media**

`WeeklyCourseViewer.tsx` actualmente guarda progreso en `localStorage`. Para coherencia con el sistema de gamificación y SRS, debe sincronizar con Supabase:
- Al completar una actividad, llamar a la API de progreso.
- Al cargar, usar Supabase como fuente de verdad con `localStorage` como caché optimista.

**Implementación:** Extraer lógica de progreso de `WeeklyCourseViewer.tsx` a un hook `useWeekProgress(weekId, userId)` que use Supabase con fallback a localStorage.

---

### F8: Indicador de Streak en Riesgo
**Prioridad: Baja**

Si el usuario no ha hecho ningún ejercicio hoy y tiene un streak activo, mostrar en el dashboard/curriculum:
- Banner: "⚠️ Tu racha de X días está en riesgo. Haz al menos un ejercicio hoy."
- Con enlace a la "Siguiente Acción Recomendada".

**Implementación:** Leer `user_streaks.last_activity_date` en `CourseCurriculum.client.tsx`. Si la diferencia con hoy es > 0 días y < 2 días, mostrar el banner.

---

### F9: Sesión Rápida de 5 Minutos
**Prioridad: Baja**

Opción de iniciar una "sesión corta" de 10 ejercicios (reviews SRS prioritarios + 2-3 nuevos). Útil para usuarios que tienen poco tiempo.
- Botón "5 minutos" en el dashboard junto al CTA principal.
- Usa el `AdaptiveEngine` con `maxExercises: 10`.

**Implementación:** Ruta `/practice/quick?courseId=a1` que cargue `PremiumSession` con configuración de sesión corta.

---

## 4. Fuera de Alcance (en esta fase)

- Rediseño completo de la UI/visual del curso.
- Nuevas páginas de marketing/landing para `/curso-a1`.
- Sistema de certificaciones (ya existe `certification-service.ts`).
- Funcionalidades de comunidad/social (leaderboard ya existe).
- Cambios en el sistema de pagos/suscripciones.

---

## 5. Métricas de Éxito

| Métrica | Baseline | Objetivo |
|---------|----------|----------|
| % usuarios que completan Lección 1 | — | +20% vs. baseline |
| Días activos / semana por usuario activo | — | +0.5 días |
| Tasa de abandono en primera sesión | — | -15% |
| Usuarios que completan 3+ lecciones en semana 1 | — | +25% |

---

## 6. Decisiones de Diseño

- **Idioma de UI:** Todo el feedback, celebraciones y mensajes para nivel A1 serán en **español**. Los niveles superiores (B2+) pueden usar inglés progresivamente.
- **Accesibilidad:** Los nuevos componentes de celebración y animación deben respetar `prefers-reduced-motion`.
- **Arquitectura:** Seguir el patrón existente (Server Components para data fetching, Client Components para interactividad, Supabase para persistencia).
- **No bloqueante:** El roadmap visual (F2) debe ser optativo (toggle) para no romper la experiencia actual hasta validar que mejora la retención.
- **Asunción sobre `/curso-a1`:** Se asume que la URL `/curso-a1` redirige o equivale al dashboard de curso para nivel A1. Si es una página pública de marketing, las mejoras de onboarding (F1, F2) deberían añadirse también allí como preview estático.

---

## 7. Dependencias Técnicas

- **Supabase tables:** `user_profiles` (onboarding_completed), `user_streaks` (last_activity_date), `user_srs` (SRS reviews), `user_xp`.
- **Componentes existentes reutilizables:** `CelebrationModal`, `GamificationPanel`, `StreakDisplay`, `AdaptiveEngine`, `premiumCourseService`.
- **Librerías disponibles:** `framer-motion` (animaciones), `lucide-react` (iconos), `@supabase/supabase-js`.
- **Testing:** Jest + Playwright (E2E en `e2e/`). Nuevos componentes deben tener unit tests en `__tests__/`.
