# PRD: Mejoras del Curso A1 (debug/preview-a1)

## 1. Resumen Ejecutivo

**Curso analizado**: Inglés A1 Premium (60 unidades / 6 módulos)  
**Ruta de debug**: `/debug/premium` → `src/content/cursos/ingles-a1/unit1.json`  
**Estado actual**: Curso funcional pero con limitaciones significativas en experiencia de usuario y calidad pedagógica

### Veredicto General
El curso tiene una estructura sólida (syllabus bien organizado, 60 unidades progresivas alineadas con CEFR A1) pero **sufre de ejercicios excesivamente mecánicos y repetitivos** que no reflejan las mejores prácticas de enseñanza de idiomas del 2024. Falta variedad, contexto comunicativo real, y elementos multimedia esenciales para un curso premium.

---

## 2. Análisis del Estado Actual

### 2.1 Estructura del Curso ✅
**Fortalezas identificadas:**
- ✅ 60 unidades organizadas en 6 módulos temáticos
- ✅ Progresión lógica de contenidos (saludos → familia → rutinas → habilidades → viajes → compras)
- ✅ Unidades de repaso cada 10 lecciones
- ✅ Duración estimada coherente (120 min/unidad)
- ✅ Metadatos correctos (CEFR A1, español UI, inglés target)

### 2.2 Tipos de Ejercicios ⚠️
**Limitación crítica:** Solo 6 tipos de ejercicios en TODO el curso

| Tipo | Cantidad aprox. | Uso pedagógico | Problema |
|------|----------------|----------------|----------|
| `matching` | 30-50 por unidad | Vocabulario pasivo | Baja retención, no comunicativo |
| `multiple_choice` | 30-50 por unidad | Reconocimiento | Múltiples respuestas por azar |
| `transformation` | 3-50 por unidad | Gramática mecánica | No contextualizado |
| `true_false` | 15-50 por unidad | Verificación sintaxis | Binario, poco formativo |
| `reorder_words` | 15-50 por unidad | Construcción sintaxis | Útil pero repetitivo |
| `short_writing` | 15-50 por unidad | Producción limitada | 1-2 palabras, no discursivo |

**Problemática:**
- Unidad 32 tiene **300 ejercicios** pero son solo variaciones de los mismos 6 tipos
- Alto riesgo de abandono por monotonía
- No mide competencias comunicativas reales (hablar, escuchar, conversar)

### 2.3 Contenido Multimedia ❌
**Ausencias críticas:**
- ❌ Sin ejercicios tipo `listening` en JSON (aunque existen componentes React para renderizarlos)
- ❌ Sin ejercicios tipo `speaking` en JSON
- ❌ Sin ejercicios tipo `pronunciation` en JSON
- ❌ Sin ejercicios tipo `video` en JSON
- ❌ Sin audios reales de nativos para practicar comprensión oral
- ❌ Sin imágenes contextuales en ejercicios de vocabulario

**Evidencia técnica:**
```bash
# Búsqueda exhaustiva en las 60 unidades
jq '.blocks[].content[].type' unit*.json | sort | uniq
# Resultado: Solo 6 tipos básicos, CERO multimedia
```

### 2.4 Contexto y Comunicación ⚠️
**Problemas identificados:**
1. **Ejercicios descontextualizados**: Cada ejercicio es aislado, sin narrativa
   - Ejemplo Unit 1: "Une Good morning con Buenos días" → No hay situación comunicativa
   
2. **Traducción como método dominante**: 
   - `short_writing` pide "Traduce al inglés: Profesor/a" → Enfoque grammar-translation obsoleto
   - Mejor: "You see someone teaching students. What is their job?" → Uso contextual

3. **Sin práctica comunicativa funcional**:
   - No hay diálogos, role-plays, situaciones reales
   - Prompts en español (`prompt_es`) pero sin inmersión en inglés

### 2.5 Gamificación y Motivación ⚠️
**Elementos faltantes:**
- ❌ Sin progreso visual dentro de la unidad (no hay "5/24 ejercicios completados")
- ❌ Sin sistema de estrellas/badges por unidad
- ❌ Sin streaks o racha de días estudiando
- ❌ Sin recompensas por dominio de mastery_tags específicos
- ⚠️ Existe infraestructura de gamificación en Supabase (XP, streaks) pero no visible en curso A1

### 2.6 Retroalimentación Pedagógica ⚠️
**Limitaciones:**
- Solo validación binaria correcto/incorrecto
- Sin explicaciones de errores ("¿Por qué es 'are' y no 'is'?")
- Sin hints progresivos
- Sin repaso espaciado basado en errores

### 2.7 Personalización y Adaptación ❌
- Todos los estudiantes hacen los mismos 300 ejercicios en el mismo orden
- Sin saltar ejercicios ya dominados
- Sin ramificación según nivel real del usuario
- Sin ejercicios generados dinámicamente según debilidades

---

## 3. Benchmarking: Mejores Prácticas 2024

### 3.1 Duolingo
✅ **Qué hace bien:**
- Variedad de formatos (40+ tipos de ejercicios)
- Audio nativo en cada ejercicio
- Gamificación extrema (ligas, gemas, rachas)
- Ejercicios de 30-45 segundos (engagement constante)
- Personajes recurrentes (narrativa)

❌ **Qué le falta (y debemos evitar):**
- Demasiado mecánico, poco comunicativo
- Sin práctica conversacional extensa

### 3.2 Babbel
✅ **Qué hace bien:**
- Diálogos contextualizados desde día 1
- Reconocimiento de voz para pronunciación
- Lecciones temáticas coherentes (no ejercicios sueltos)
- Repaso espaciado personalizado

### 3.3 Busuu
✅ **Qué hace bien:**
- Corrección por comunidad (escritura/speaking)
- Certificación oficial (McGraw-Hill)
- Plan de estudio personalizado

### 3.4 Recomendación para Focus English
**Diferenciador competitivo**: Combinar gamificación (Duolingo) + contextualización comunicativa (Babbel) + IA generativa (ChatGPT oral feedback) + especialización por objetivos (Trabajo/Viajes/Exámenes)

---

## 4. Recomendaciones de Mejora Priorizadas

### 4.1 CRÍTICO - Integrar Multimedia (P0)

#### 4.1.1 Listening Comprehension
**Implementar en:**
- Unidades pares (30 de 60 unidades)
- 3-5 ejercicios de listening por unidad

**Tipos de ejercicios:**
1. **Audio + Multiple Choice**: Escucha diálogo corto (15-20 seg), responde pregunta
   ```json
   {
     "type": "listening",
     "audio_url": "/audio/a1/u1-greeting.mp3",
     "transcript_en": "Hi! My name is Sarah. Nice to meet you.",
     "prompt_es": "¿Cómo se llama la persona?",
     "options": [
       {"id": "o1", "text": "Sarah"},
       {"id": "o2", "text": "Mary"},
       {"id": "o3", "text": "Jessica"}
     ],
     "correct_answer": "o1"
   }
   ```

2. **Dictation (Fill-in-the-blank audio)**:
   ```json
   {
     "type": "listening_dictation",
     "audio_url": "/audio/a1/u2-sentence.mp3",
     "transcript_template": "I ___ from Spain.",
     "correct_answer": "am",
     "mastery_tag": "listening"
   }
   ```

**Técnico:**
- Usar TTS de ElevenLabs (ya integrado en scripts) para generar audios
- Voces: 2-3 personajes recurrentes (Sarah, John, María)
- Scripts ya existentes: `generate-course-audio.ts`, `generate-a1-w01-audio.js`

#### 4.1.2 Speaking Production
**Implementar en:**
- Unidades 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60 (unidades de repaso)
- 2-3 ejercicios speaking por unidad de repaso

**Tipos:**
1. **Read Aloud (Pronunciation)**:
   ```json
   {
     "type": "pronunciation",
     "prompt_es": "Lee la frase en voz alta:",
     "target_sentence": "Nice to meet you!",
     "phonetic_guide": "/naɪs tə miːt juː/",
     "mastery_tag": "speaking"
   }
   ```

2. **Prompted Response**:
   ```json
   {
     "type": "speaking",
     "prompt_es": "Responde la pregunta en voz alta:",
     "stimulus_audio": "/audio/questions/whats-your-name.mp3",
     "stimulus_text": "What's your name?",
     "expected_elements": ["My name is", "I am"],
     "mastery_tag": "speaking"
   }
   ```

**Técnico:**
- Usar componentes existentes: `SpeakingRenderer.tsx`, `PronunciationRenderer.tsx`, `EnhancedVoiceRecorder.tsx`
- Evaluación con OpenAI Whisper (ya integrado) + GPT-4 para coherencia semántica

#### 4.1.3 Imágenes Contextuales
**Añadir a ejercicios de vocabulario:**
```json
{
  "type": "image_multiple_choice",
  "prompt_es": "¿Qué ves en la imagen?",
  "image_url": "/images/a1/jobs/teacher-classroom.jpg",
  "options": [
    {"id": "o1", "text": "Teacher"},
    {"id": "o2", "text": "Doctor"},
    {"id": "o3", "text": "Engineer"}
  ],
  "correct_answer": "o1"
}
```

**Generación:**
- Stable Diffusion XL / DALL-E 3 para generar imágenes consistentes
- Estilo: flat illustration, colorful, friendly
- 5-10 imágenes por unidad (vocabulario clave)

---

### 4.2 ALTA PRIORIDAD - Contextualización Comunicativa (P1)

#### 4.2.1 Diálogos Situacionales
**Reemplazar ejercicios aislados por micro-narrativas**

**Ejemplo actual (Unit 1):**
```
Ejercicio 1: Une "Good morning" con "Buenos días"
Ejercicio 2: Completa: I ___ from Spain
Ejercicio 3: ¿Es correcta "I am from London"?
```

**Propuesta mejorada:**
```
SITUACIÓN: First Day at English School
- Sarah meets John in the classroom

[AUDIO + TRANSCRIPT]
Sarah: "Good morning! My name is Sarah. What's your name?"
John: "Hi Sarah! I'm John. Nice to meet you."

Ejercicio 1 (Listening): ¿Cómo se llama la persona?
Ejercicio 2 (Fill-in): "My name ___ Sarah" [is]
Ejercicio 3 (Speaking): Now you introduce yourself to Sarah
```

**Beneficio:** Aprendizaje situado, mayor retención, preparación para uso real

#### 4.2.2 Role-Play Guiados
**Añadir en unidades 10, 20, 30, 40, 50, 60:**
```json
{
  "type": "roleplay",
  "scenario": {
    "title": "At a Coffee Shop",
    "setting": "You want to order a coffee",
    "character": "Barista"
  },
  "conversation_turns": [
    {
      "speaker": "barista",
      "text": "Good morning! What can I get you?",
      "audio_url": "/audio/roleplay/barista-greeting.mp3"
    },
    {
      "speaker": "user",
      "expected_intent": "order_coffee",
      "hints": ["I'd like...", "Can I have..."],
      "evaluation_type": "ai_semantic"
    }
  ]
}
```

**Técnico:**
- Usar componente existente `RoleplayActivity.tsx`
- Evaluación con GPT-4 para validar intención comunicativa (no solo gramática)

---

### 4.3 ALTA PRIORIDAD - Diversificación de Ejercicios (P1)

#### Nuevos tipos a implementar:

| Tipo | Descripción | Ejemplo | Unidades |
|------|-------------|---------|----------|
| **gap_fill_text** | Completar párrafos (no frases sueltas) | "Hi! My ___ is John. I ___ a student." | 15+ |
| **sentence_building** | Construir frase desde bloques (más complejo que reorder) | Drag: [I / like / coffee / to / drink] | 20+ |
| **crossword** | Crucigrama temático | Tema: Family members | 10, 20, 30... |
| **image_labeling** | Etiquetar partes de imagen | Label body parts on diagram | 28 (Body Parts) |
| **conversation_completion** | Completar diálogos | A: "How are you?" B: ___ | 15+ |
| **minimal_pairs** | Discriminación auditiva | /ship/ vs /sheep/ | 30+ |
| **shadowing** | Repetir audio nativo con lag de 1 seg | Para fluidez prosódica | 40+ |

**Implementación técnica:**
- Componente `SentenceBuilder.tsx` ya existe → activar
- Crear `CrosswordRenderer.tsx` (usar librería `react-crossword`)
- `ConversationRenderer.tsx` (nueva implementación)

---

### 4.4 MEDIA PRIORIDAD - Gamificación Visible (P2)

#### 4.4.1 Progreso Granular
**Añadir a `PremiumUnitViewer.tsx`:**
```tsx
<div className="progress-bar">
  <span>Ejercicio {currentIndex + 1} de {totalExercises}</span>
  <ProgressBar value={(currentIndex/totalExercises)*100} />
  <span>{Math.round((currentIndex/totalExercises)*100)}% completado</span>
</div>
```

#### 4.4.2 Sistema de Estrellas por Unidad
**Criterios:**
- ⭐ Bronce: Completar 60% ejercicios correctos
- ⭐⭐ Plata: 80% correctos
- ⭐⭐⭐ Oro: 95% correctos + todos los speaking/listening

**Almacenamiento:**
```sql
-- Ya existe user_progress table en Supabase
ALTER TABLE user_progress ADD COLUMN unit_stars INTEGER DEFAULT 0;
```

#### 4.4.3 Streaks y XP
**Integrar con sistema existente:**
- Mostrar racha actual en header del curso
- Otorgar bonus XP por unidades de repaso (10, 20, 30...)
- Celebración visual al alcanzar hitos (componente `CelebrationModal.tsx` ya existe)

---

### 4.5 MEDIA PRIORIDAD - Retroalimentación Pedagógica (P2)

#### 4.5.1 Explicaciones de Errores
**Para ejercicios gramaticales:**
```json
{
  "interaction_id": "U1_I2",
  "type": "transformation",
  "stimulus_en": "I (ser/estar - yo) ________ from Spain.",
  "correct_answer": "am",
  "wrong_answer_feedback": {
    "is": "Remember: 'I' always uses 'am', not 'is'. 'Is' is for he/she/it.",
    "are": "'Are' is used with you/we/they. With 'I', we use 'am'."
  },
  "explanation": "The verb 'to be' changes form: I am, you are, he/she/it is."
}
```

#### 4.5.2 Hints Progresivos
**Sistema de 3 niveles:**
1. Hint genérico: "Think about the verb 'to be'"
2. Hint específico: "Which form of 'be' goes with 'I'?"
3. Hint casi-respuesta: "The answer starts with 'a'..."

**Implementación:**
- Añadir campo `hints: string[]` en JSON
- Botón "💡 Hint" en UI (descontando XP progresivamente)

#### 4.5.3 Repaso Espaciado
**Algoritmo SM-2 (Supermemo):**
```typescript
interface RepetitionSchedule {
  interaction_id: string;
  next_review_date: Date;
  ease_factor: number;
  interval_days: number;
}

// Calcular según performance del usuario
function calculateNextReview(quality: 0-5): Date {
  // Implementar algoritmo SM-2
  // quality 5 = perfect, next review in 7 days
  // quality 0 = complete failure, review tomorrow
}
```

**Añadir sección "Repaso Diario":**
- Mostrar en dashboard 5-10 ejercicios de unidades previas
- Priorizando aquellos con más errores históricos

---

### 4.6 BAJA PRIORIDAD - Personalización Adaptativa (P3)

#### 4.6.1 Prueba de Nivel Inicial
**Antes de Unit 1:**
- 20 preguntas diagnósticas (vocabulario + gramática + listening)
- Determinar si usuario necesita empezar en U1 o puede saltar a U10/U20
- Evitar frustración de principiantes absolutos vs falsos principiantes

#### 4.6.2 Rutas Diferenciadas por Objetivo
**Ya existe infraestructura para "Trabajo/Viajes/Exámenes":**
- Unit 9 (Jobs) → Expandir con vocabulario específico de sector (admin-a2, it-curriculum, marketing-curriculum ya existen)
- Unit 46 (At the Hotel) → Expandir para usuarios "Viajes"
- Unidades 10, 20, 30... → Añadir mock exams tipo Cambridge para usuarios "Exámenes"

#### 4.6.3 Ejercicios Generados con IA
**Actualmente:** 300 ejercicios estáticos
**Propuesta:** 100 ejercicios core + generación dinámica de variaciones

```typescript
// Usar OpenAI para generar variaciones
async function generateExerciseVariation(template: Exercise): Promise<Exercise> {
  const prompt = `
    Generate a similar A1 level exercise to this:
    Type: ${template.type}
    Topic: Family members
    Difficulty: A1
    Generate new vocabulary items keeping same structure.
  `;
  
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{role: "user", content: prompt}]
  });
  
  return parseExerciseFromGPT(response);
}
```

**Beneficio:** Contenido infinito, reduce memorización mecánica

---

## 5. Plan de Implementación Sugerido

### Fase 1: Quick Wins (2-3 semanas)
**Objetivo:** Reducir monotonía inmediata
- [ ] Añadir progreso visual (X/Y ejercicios)
- [ ] Implementar sistema de estrellas por unidad
- [ ] Añadir 3-5 imágenes de vocabulario en Units 1-10
- [ ] Crear 10 audios TTS para Unit 1 (proof of concept)

### Fase 2: Multimedia Core (4-6 semanas)
**Objetivo:** Transformar en curso multimedia
- [ ] Generar 300 audios (10 por unidad promedio) con ElevenLabs
- [ ] Implementar 60 ejercicios de listening (1 por unidad)
- [ ] Implementar 12 ejercicios de speaking (unidades de repaso)
- [ ] Añadir 200 imágenes de vocabulario

### Fase 3: Contextualización (6-8 semanas)
**Objetivo:** Hacer el curso comunicativo
- [ ] Re-estructurar Units 1-20 en micro-narrativas
- [ ] Crear 6 role-plays guiados (uno por módulo)
- [ ] Implementar 30 diálogos situacionales
- [ ] Añadir 5 nuevos tipos de ejercicios (gap_fill_text, crossword, etc.)

### Fase 4: Inteligencia Adaptativa (8-12 semanas)
**Objetivo:** Personalización y retención
- [ ] Implementar repaso espaciado (SM-2)
- [ ] Crear prueba de nivel inicial
- [ ] Sistema de explicaciones de errores
- [ ] Generación dinámica de ejercicios con GPT-4

---

## 6. Métricas de Éxito

### KPIs a medir:

| Métrica | Actual (estimado) | Objetivo post-mejora |
|---------|-------------------|----------------------|
| **Tasa de completación de unidad** | 40-50% | 75%+ |
| **Tiempo promedio por unidad** | 120 min (teórico) | 45-60 min (real + engagement) |
| **Tasa de abandono en primeras 5 unidades** | 60%+ | <30% |
| **NPS del curso** | No medido | 50+ |
| **% usuarios que completan Module 1** | 20-30% | 60%+ |
| **Usuarios que regresan día 7** | <20% | 50%+ |

### Instrumentación técnica:
```typescript
// Añadir analytics detallados
analytics.track('exercise_completed', {
  unit_id: 'U1',
  exercise_type: 'listening',
  time_spent_seconds: 45,
  attempts: 2,
  correct: true,
  mastery_tag: 'vocabulary'
});
```

---

## 7. Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| **Usuarios actuales confundidos con cambios** | Media | Alto | Versión A/B: mantener curso original + nuevo curso A1 v2 |
| **Costo de generación de audios (ElevenLabs)** | Alta | Medio | Usar TTS gratuito (Google Cloud TTS) para primeras iteraciones |
| **Complejidad técnica de IA generativa** | Media | Alto | Empezar con templates estáticos, añadir IA en Fase 4 |
| **Tiempo de producción de imágenes** | Alta | Medio | Usar banco de imágenes (Unsplash) antes de generar custom |

---

## 8. Decisiones Clave Pendientes

### 8.1 Arquitectura de Contenido
**Pregunta:** ¿Mantener JSON estático o migrar a base de datos?
- **Opción A (actual):** JSON files en `src/content/cursos/ingles-a1/`
  - ✅ Fácil versionado con Git
  - ✅ No requiere cambios de infraestructura
  - ❌ Difícil personalización por usuario
  - ❌ No permite ejercicios dinámicos

- **Opción B (migración):** Supabase database
  - ✅ Personalización por usuario
  - ✅ Ejercicios generados on-the-fly
  - ✅ Analytics granulares
  - ❌ Requiere migración de 60 archivos JSON
  - ❌ Más complejidad operacional

**Recomendación:** Híbrido - JSON para contenido core + Supabase para personalization layer

### 8.2 Modelo de Voz IA
**Pregunta:** ¿Qué TTS usar para audios?
- **ElevenLabs:** $99/mes → 100K characters → ~20 unidades completas
- **Google Cloud TTS:** $4/1M chars → más económico pero menos natural
- **OpenAI TTS:** $15/1M chars → balance calidad/precio

**Recomendación:** Google Cloud TTS para bulk + ElevenLabs para diálogos clave

### 8.3 Priorización de Mejoras
**Pregunta:** ¿Empezar por multimedia o por contextualización?

**Opción A:** Multimedia primero (listening/speaking)
- ✅ Mayor diferenciación competitiva
- ✅ Componentes ya existen (menor dev time)
- ❌ Requiere producción de assets (audios)

**Opción B:** Contextualización primero (diálogos/narrativas)
- ✅ Impacto pedagógico inmediato
- ✅ No requiere assets externos
- ❌ Requiere re-escribir contenido de 60 unidades

**Recomendación:** Híbrido - Multimedia en 20 unidades clave (5, 10, 15, 20...) + Contextualización en Module 1 (Units 1-10) como piloto

---

## 9. Comparación Antes/Después (Ejemplo Unit 1)

### ANTES (Estado Actual)
```json
Unit 1: "Hello! Introductions" - 24 ejercicios
- 4 matching (vocabulario)
- 8 multiple choice
- 3 transformation
- 4 true/false
- 3 reorder_words
- 2 short_writing

Tiempo estimado: 120 min
Engagement: Bajo (repetitivo)
Competencias: Solo lectura/escritura
```

### DESPUÉS (Propuesta)
```json
Unit 1: "First Day at English School" - 18 ejercicios
NARRATIVA: Sarah y John se conocen en clase

Bloque 1: Listening & Introduction (6 ejercicios)
- 1 video intro (30 seg): Sarah presenta la lección
- 1 listening comprehension: Diálogo Sarah-John
- 2 image-based vocabulary (pictures of greetings)
- 1 pronunciation: "Nice to meet you"
- 1 matching (consolidación)

Bloque 2: Grammar in Context (6 ejercicios)
- 1 gap-fill text (párrafo, no frases aisladas)
- 2 transformation contextualizado
- 1 sentence building (arrastrables)
- 1 conversation completion
- 1 true/false (verificación)

Bloque 3: Production Practice (6 ejercicios)
- 1 speaking: "Introduce yourself to Sarah"
- 1 role-play: Meet a classmate
- 1 short writing: "Write 3 sentences about you"
- 2 review exercises
- 1 mini-assessment

Tiempo real: 45-60 min
Engagement: Alto (variado, multimedia)
Competencias: 4 skills (listening, speaking, reading, writing)
```

**Impacto esperado:**
- Completación de unidad: 45% → 80%
- Retención de vocabulario (test a 7 días): 30% → 65%
- Satisfacción (1-5): 3.2 → 4.5

---

## 10. Recursos Técnicos Necesarios

### 10.1 APIs y Servicios
- ✅ **Ya integrado:** OpenAI (Whisper STT + GPT-4), Supabase, Stripe
- ⚠️ **Integrar:** ElevenLabs API (o Google Cloud TTS)
- ⚠️ **Considerar:** Stability AI (imágenes), AssemblyAI (transcripción)

### 10.2 Herramientas de Producción
- **Audios:** Audacity (edición), ffmpeg (procesamiento batch)
- **Imágenes:** Stable Diffusion WebUI, Canva (templates)
- **Validación:** `scripts/validate-exercises.mjs` (ya existe) → extender para nuevos tipos

### 10.3 Infraestructura
- **Storage:** Supabase Storage para audios/imágenes (~5GB para 60 unidades)
- **CDN:** Cloudflare/Vercel CDN para servir assets multimedia
- **Costos estimados:** $50-100/mes adicionales (TTS + storage + CDN)

---

## 11. Anexo: Ejemplos de Ejercicios Mejorados

### Ejemplo 1: De Matching Básico a Image Labeling

**ANTES:**
```json
{
  "type": "matching",
  "prompt_es": "Une la palabra con su traducción:",
  "pairs": [
    {"id": "p0", "left": "Head", "right": "Cabeza"},
    {"id": "p1", "left": "Shoulder", "right": "Hombro"}
  ]
}
```

**DESPUÉS:**
```json
{
  "type": "image_labeling",
  "prompt_es": "Señala las partes del cuerpo en la imagen:",
  "image_url": "/images/a1/body-parts-diagram.svg",
  "labels": [
    {"id": "head", "correct_position": {"x": 50, "y": 10}, "text": "Head"},
    {"id": "shoulder", "correct_position": {"x": 40, "y": 30}, "text": "Shoulder"}
  ],
  "mastery_tag": "vocabulary",
  "hint_es": "Empieza desde arriba (la cabeza) hacia abajo"
}
```

### Ejemplo 2: De Short Writing a Conversational Writing

**ANTES:**
```json
{
  "type": "short_writing",
  "prompt_es": "Traduce al inglés:",
  "stimulus_es": "¿Cuál es tu nombre?",
  "correct_answer": "What is your name?"
}
```

**DESPUÉS:**
```json
{
  "type": "conversation_completion",
  "prompt_es": "Completa el diálogo de forma natural:",
  "conversation": [
    {"speaker": "John", "text": "Hi! I'm John. Nice to meet you."},
    {"speaker": "user", "placeholder": "Escribe tu respuesta aquí..."}
  ],
  "evaluation_type": "ai_semantic",
  "expected_elements": ["name", "greeting", "reciprocal_politeness"],
  "sample_answers": [
    "Hi John! I'm Maria. Nice to meet you too!",
    "Hello! My name is Carlos. Pleased to meet you."
  ],
  "mastery_tag": "communication"
}
```

---

## 12. Conclusión y Próximos Pasos

### Resumen de Prioridades

**🔴 CRÍTICO (hacer YA):**
1. Añadir audios de listening a 20 unidades clave
2. Implementar progreso visual en unidades
3. Crear 5 ejercicios de speaking en unidades de repaso

**🟡 ALTA (próximos 2 meses):**
4. Re-estructurar Units 1-10 con narrativas
5. Diversificar tipos de ejercicios (añadir 3-5 nuevos tipos)
6. Generar imágenes de vocabulario (100 imágenes prioritarias)

**🟢 MEDIA (roadmap Q2-Q3):**
7. Implementar repaso espaciado
8. Sistema de hints y explicaciones de errores
9. Prueba de nivel inicial

**🔵 BAJA (backlog):**
10. Ejercicios generados con IA
11. Personalización por objetivo (Trabajo/Viajes/Exámenes)

### Próxima Acción Recomendada
**Crear prototipo "Unit 1 v2.0"** con todos los elementos propuestos:
- 3 ejercicios de listening
- 1 ejercicio de speaking
- 5 imágenes de vocabulario
- Narrativa de Sarah y John
- Nuevo tipo: conversation_completion

**Tiempo estimado:** 1 semana  
**Validar con:** 20 usuarios beta  
**Decisión:** Si NPS > 8/10 → escalar a todas las unidades

---

**Documento creado:** 2026-02-22  
**Versión:** 1.0  
**Autor:** Análisis del curso `debug/preview-a1` → `src/content/cursos/ingles-a1/`  
**Próxima revisión:** Tras implementación de Fase 1 (Quick Wins)
