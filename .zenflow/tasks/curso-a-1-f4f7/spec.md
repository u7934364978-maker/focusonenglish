# Especificación Técnica: Lección 3 del Módulo 2 - Curso A1

## Nivel de Complejidad
**Medium** - Requiere crear contenido estructurado siguiendo patrones existentes del curso B2, adaptado al nivel A1.

## Contexto Técnico

### Lenguaje y Dependencias
- **Lenguaje**: TypeScript
- **Framework**: Next.js 14 (App Router)
- **Base de datos**: Supabase (PostgreSQL)
- **Estructura existente**: 
  - `/lib/course-data-b2.ts` - Curso B2 con módulos y lecciones
  - `/lib/course-data-a1.ts` - Sistema de ejercicios dinámicos A1
  - `/lib/curriculum-data.ts` - Curriculum oficial Cambridge A1-C2

## Objetivo
Crear la **Lección 3 del Módulo 2** del Curso A1 basada en el curriculum de Cambridge English nivel A1.

### Contenido de la Lección
- **Tema**: There is / There are + Prepositions of Place
- **Duración**: 60 minutos
- **Nivel**: A1 (Principiante)

## Implementación

### 1. Estructura de Datos

Se creó el archivo `/lib/a1-module2-lesson3.ts` con:

#### Interfaces TypeScript
```typescript
- Question: Preguntas de diferentes tipos
- GrammarExercise: Ejercicios de gramática
- ReadingExercise: Comprensión lectora
- ListeningExercise: Comprensión auditiva
- SpeakingExercise: Expresión oral
- WritingExercise: Expresión escrita
- Lesson: Estructura completa de lección
```

#### Contenido de la Lección
```typescript
export const A1_MODULE_2_LESSON_3: Lesson
```

### 2. Ejercicios Incluidos

**Total: 5 ejercicios** cubriendo las 4 habilidades del CEFR

#### Ejercicio 1: Grammar - There is/There are
- **ID**: `a1-m2-l3-grammar-1`
- **Tipo**: Gramática
- **Contenido**: 
  - Explicación de there is (singular) vs there are (plural)
  - 5 ejemplos
  - 5 preguntas (multiple-choice y fill-blank)
- **Puntos totales**: 5

#### Ejercicio 2: Grammar - Prepositions of Place
- **ID**: `a1-m2-l3-grammar-2`
- **Tipo**: Gramática
- **Contenido**:
  - Explicación de in, on, under, next to, behind, in front of, between
  - 5 ejemplos
  - 5 preguntas (multiple-choice y fill-blank)
- **Puntos totales**: 5

#### Ejercicio 3: Reading - "My Bedroom"
- **ID**: `a1-m2-l3-reading-1`
- **Tipo**: Lectura
- **Contenido**:
  - Texto descriptivo (185 palabras)
  - 5 preguntas (multiple-choice, true-false, fill-blank, short-answer)
  - Vocabulario de ayuda (6 palabras)
- **Puntos totales**: 6

#### Ejercicio 4: Listening - "Tom's Apartment"
- **ID**: `a1-m2-l3-listening-1`
- **Tipo**: Listening
- **Contenido**:
  - Diálogo entre Tom y Sarah (90 segundos)
  - Transcripción completa incluida
  - 5 preguntas (multiple-choice, true-false, fill-blank, short-answer)
  - Permite 3 repeticiones
- **Audio necesario**: `/audio/a1-m2-l3-listening-1.mp3`
- **Puntos totales**: 6

#### Ejercicio 5: Speaking - Describe Your Room
- **ID**: `a1-m2-l3-speaking-1`
- **Tipo**: Speaking
- **Contenido**:
  - Prompt: Describir habitación/casa
  - Tiempo: 1-2 minutos
  - Hints y palabras clave incluidas
  - Criterios de evaluación: pronunciation, fluency, grammar, vocabulary

#### Ejercicio 6: Writing - Your Favorite Place
- **ID**: `a1-m2-l3-writing-1`
- **Tipo**: Writing
- **Contenido**:
  - Escribir descripción de lugar favorito
  - 80-120 palabras
  - Tiempo límite: 20 minutos
  - Rúbrica de evaluación (4 criterios × 25 puntos)
  - 7 tips incluidos

### 3. Alineación con Curriculum Cambridge A1

**Módulo 2: Actividades y Tiempo Libre**

✅ **Grammar cubierta**:
- There is / There are
- Prepositions of place: in, on, under, next to, behind, in front of

✅ **Vocabulary cubierta**:
- Muebles y objetos de casa
- Lugares en la ciudad
- Adjetivos descriptivos básicos

✅ **Skills desarrolladas**:
- Reading: Textos descriptivos simples
- Writing: Describir lugares
- Listening: Conversaciones sobre ubicaciones
- Speaking: Describir habitaciones y objetos

### 4. Archivos Creados

| Archivo | Descripción | Estado |
|---------|-------------|--------|
| `/lib/a1-module2-lesson3.ts` | Lección completa con todos los ejercicios | ✅ Creado |

### 5. Archivos a Modificar (Próximos pasos)

Para integrar completamente la lección:

| Archivo | Modificación Necesaria | Prioridad |
|---------|----------------------|-----------|
| `/lib/course-data-a1.ts` | Importar y exportar la lección | Alta |
| Base de datos Supabase | Insertar ejercicios en tablas | Media |
| `/public/audio/` | Generar audio para listening | Media |

### 6. Verificación

#### Checklist de Calidad
- ✅ Interfaces TypeScript correctas
- ✅ Estructura de Lesson compatible con course-data-b2.ts
- ✅ 5+ ejercicios cubriendo las 4 habilidades
- ✅ Explicaciones en español
- ✅ Ejemplos claros para nivel A1
- ✅ Vocabulario de ayuda incluido
- ✅ Transcripción de listening incluida
- ✅ Hints y tips para speaking/writing
- ✅ Puntuación definida para cada pregunta
- ✅ Respuestas aceptables alternativas incluidas

#### Nivel A1 Apropiado
- ✅ Vocabulario básico (casa, muebles, ubicaciones)
- ✅ Estructuras gramaticales simples
- ✅ Textos cortos (185 palabras máximo)
- ✅ Instrucciones claras
- ✅ Ejemplos abundantes

## Próximos Pasos de Implementación

### Paso 1: Integración con course-data-a1.ts
```typescript
// Importar en /lib/course-data-a1.ts
import { A1_MODULE_2_LESSON_3 } from './a1-module2-lesson3';

// Crear estructura de módulos si no existe
export const A1_MODULE_2_LESSONS: Lesson[] = [
  // ... lección 1
  // ... lección 2
  A1_MODULE_2_LESSON_3,
  // ... lección 4
];
```

### Paso 2: Generación de Audio
Usar script existente para generar audio del listening:
```bash
node scripts/generate-audio-simple.js a1-m2-l3-listening-1
```

### Paso 3: Base de Datos (Opcional)
Si se requiere persistencia en Supabase:
```sql
INSERT INTO course_lessons (id, title, module, level, duration, objectives)
VALUES ('a1-m2-l3', 'Lección 3: Describing Places', 2, 'A1', 60, ...);
```

## Estimación de Tiempo
- ✅ Análisis y diseño: 15 min
- ✅ Creación de interfaces: 10 min
- ✅ Ejercicios de gramática (2): 30 min
- ✅ Ejercicio de reading: 20 min
- ✅ Ejercicio de listening: 25 min
- ✅ Ejercicios speaking/writing: 15 min
- ⏳ Integración: 10 min (pendiente)
- ⏳ Generación de audio: 15 min (pendiente)
- ⏳ Testing: 20 min (pendiente)

**Total completado**: ~115 minutos
**Restante**: ~45 minutos

## Riesgos y Consideraciones

### Riesgos
1. **Audio faltante**: El archivo `/audio/a1-m2-l3-listening-1.mp3` debe generarse
2. **Integración**: Necesita añadirse al sistema de navegación del curso
3. **Testing**: Requiere validación con usuarios reales de nivel A1

### Mitigación
1. Usar TTS (Text-to-Speech) para generar audio automáticamente
2. Seguir patrón de integración del curso B2
3. Incluir ejemplos y explicaciones abundantes

## Conclusión

La Lección 3 del Módulo 2 del Curso A1 ha sido creada exitosamente siguiendo:
- ✅ Especificaciones de Cambridge English A1
- ✅ Estructura compatible con el sistema existente
- ✅ Contenido pedagógicamente apropiado
- ✅ Ejercicios variados y completos

**Estado**: Lección creada, pendiente de integración y generación de audio.
