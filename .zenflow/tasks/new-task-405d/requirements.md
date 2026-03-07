# PRD — Unidad 5 A1: Simple Present: Everyday Actions

## Objetivo

Crear los archivos TypeScript de la Unidad 5 del curso A1 de Focus on English, siguiendo exactamente el mismo patrón estructural y de formato que las unidades 1–3 ya existentes (unidad de referencia principal: Unit 3).

---

## Especificación general

| Campo | Valor |
|---|---|
| **Nivel** | A1 |
| **Unidad** | 5 |
| **Título** | Simple Present: Everyday Actions |
| **Gramática** | Present Simple afirmativo; -s en 3.ª persona (works, eats, plays) |
| **Vocabulario** | Verbos de rutina: work, study, eat, drink, sleep, play, wake up, get up, go, come |
| **Estructura** | 6 lecciones × 15 ejercicios = 90 ejercicios |

---

## Archivos a crear

| Archivo | Exportación principal | Descripción |
|---|---|---|
| `src/lib/course/a1/unit-5-lesson-1-grammar.ts` | `UNIT_5_LESSON_1_GRAMMAR` | 15 ejercicios de gramática |
| `src/lib/course/a1/unit-5-lesson-2-vocabulary.ts` | `UNIT_5_LESSON_2_VOCABULARY` | 15 ejercicios de vocabulario |
| `src/lib/course/a1/unit-5-lesson-3-reading.ts` | `UNIT_5_LESSON_3_READING` | 15 ejercicios de lectura |
| `src/lib/course/a1/unit-5-lesson-4-listening.ts` | `UNIT_5_LESSON_4_LISTENING` | 15 ejercicios de escucha |
| `src/lib/course/a1/unit-5-lesson-5-speaking.ts` | `UNIT_5_LESSON_5_SPEAKING` | 15 ejercicios de expresión oral |
| `src/lib/course/a1/unit-5-lesson-6-writing.ts` | `UNIT_5_LESSON_6_WRITING` | 15 ejercicios de expresión escrita |
| `src/lib/course/a1/unit-5-lessons-index.ts` | `UNIT_5_LESSONS`, `UNIT_5_ALL_LESSONS`, `UNIT_5_ALL_EXERCISES` | Índice de lecciones |
| `src/lib/course/a1/unit-5.ts` | `UNIT_TITLE`, `UNIT_5_EXERCISES` | Punto de entrada de la unidad |

---

## IDs de ejercicios

- Lección 1: `a1-u5-l1-g1` … `a1-u5-l1-g15`
- Lección 2: `a1-u5-l2-v1` … `a1-u5-l2-v15`
- Lección 3: `a1-u5-l3-reading-1` … `a1-u5-l3-reading-15`
- Lección 4: `a1-u5-l4-listening-1` … `a1-u5-l4-listening-15`
- Lección 5: `a1-u5-l5-s1` … `a1-u5-l5-s15`
- Lección 6: `a1-u5-l6-w1` … `a1-u5-l6-w15`

---

## Reglas de formato críticas

### Token `[[English|Spanish]]`
- **Instrucciones** siempre en español puro, sin tokens ni frases modelo en inglés embebidas.  
  - Excepción: si la instrucción cita verbos/palabras inglesas como ejemplos entre comillas, esas palabras SÍ llevan token: `"[[work|trabajar]]"`.
- **Opciones de elección múltiple**: cada opción es un único token `[[opción completa|traducción completa]]`.
- **Opciones V/F**: siempre `['[[True|Verdadero]]', '[[False|Falso]]']`.
- **Enunciado V/F**: token único: `'[[English statement.|Enunciado en español.]]'`.
- **Preguntas**: token único corto (≤55 caracteres en inglés). Si es más larga, acortar.
- **Nombres propios como opciones**: todos con `[[Name|Name]]` o ninguno.
- **Palabras iguales en inglés y español** (ej. "plural", "total"): texto plano, NO dentro de token.

### Matching (Lección 2, ejercicios 7–10)
- `left`: `'[[English|Spanish]]'` — palabra inglesa con traducción al español.
- `right`: `'Spanish'` — texto plano en español, sin token.

---

## Lección 1 — Gramática (15 ejercicios)

**Título de lección**: `'Present Simple: Everyday Actions'`  
**Tema gramatical**: Present Simple afirmativo; -s en 3.ª persona

**Distribución de ejercicios**:
- Ejercicios 1–5: `fill-blank` — completar huecos con la forma correcta del presente simple (conjugaciones: I/you/we/they vs. he/she/it con -s)
- Ejercicios 6–10: `multiple-choice` — elegir la forma correcta del verbo o la oración correcta
- Ejercicios 11–13: `sentence-building` — ordenar palabras para formar frases en presente simple
- Ejercicios 14–15: `true-false` — indicar si la afirmación gramatical es verdadera o falsa

**Campo `topic`**: `'Simple Present'`  
**Campo `topicName`**: `'Grammar'`

---

## Lección 2 — Vocabulario (15 ejercicios)

**Título de lección**: `'Vocabulario: verbos de rutina'`  
**Vocabulario**: work, study, eat, drink, sleep, play, wake up, get up, go, come

**Distribución de ejercicios**:
- Ejercicios 1–6: `multiple-choice` — elegir la palabra correcta para una definición o contexto
- Ejercicios 7–10: `matching` — relacionar verbo inglés con su traducción española
- Ejercicios 11–13: `fill-blank` — completar la frase con el verbo de rutina correcto
- Ejercicios 14–15: `multiple-choice` — contexto situacional

**Campo `topic`**: `'Daily Routines'`  
**Campo `topicName`**: `'Vocabulary'`

---

## Lección 3 — Lectura (15 ejercicios)

**Título de lección**: `'Comprensión lectora'`

**Texto**: Párrafo sobre "María" y su rutina diaria en presente simple, 3.ª persona singular. El texto mostrará el uso de verbos con -s (works, eats, drinks, sleeps, plays, gets up, goes, comes). Transcrito en formato token `[[word|palabra]]` por palabra.

**Transcript**: Definido como constante `READING_TRANSCRIPT` al inicio del archivo.

**Distribución de ejercicios**:
- Ejercicios 1–8: `reading` con `multiple-choice` — preguntas de comprensión del texto
- Ejercicios 9–12: `reading` con `true-false` — verdadero/falso sobre el texto
- Ejercicios 13–15: `reading` con síntesis — elección múltiple de comprensión global

Cada ejercicio individual incluye el `transcript` completo y la instrucción correspondiente.

**Campo `topic`**: `'Daily Routines'`  
**Campo `topicName`**: `'Reading'`

---

## Lección 4 — Escucha (15 ejercicios)

**Título de lección**: `'Comprensión auditiva'`

**Diálogo**: Conversación entre dos personas (p.ej. David y Sara) sobre sus rutinas diarias. Usa presente simple con formas de 1.ª, 2.ª y 3.ª persona. Transcrito en formato token `[[word|palabra]]` por palabra.

**Transcript**: Definido como constante `LISTENING_TRANSCRIPT` al inicio del archivo.

**audioUrl**: comentado: `// audioUrl: '/audio/a1-u5-l4-listening.mp3'`

**Distribución de ejercicios**:
- Ejercicios 1–8: `listening` con `multiple-choice`
- Ejercicios 9–12: `listening` con `true-false`
- Ejercicios 13–15: `listening` con síntesis

Cada ejercicio individual incluye el `transcript` completo y `// audioUrl:` comentado.

**Campo `topic`**: `'Daily Routines'`  
**Campo `topicName`**: `'Listening'`

---

## Lección 5 — Speaking (15 ejercicios)

**Título de lección**: `'Expresión oral'`

**Tipo de ejercicio**: `pronunciation`

**Reglas**:
- Instrucciones en español, sin frases modelo en inglés embebidas.
- El modelo va solo en `targetText` (formato token palabra por palabra).
- `expectedResponse`: texto inglés plano.

**Distribución de ejercicios**:
- Ejercicios 1–4: repetir frases en presente simple
- Ejercicios 5–7: leer en voz alta
- Ejercicios 8–11: responder oralmente a preguntas en presente simple
- Ejercicios 12–15: producir frases guiadas sobre rutinas propias

**Campo `topic`**: `'Daily Routines'`  
**Campo `topicName`**: `'Speaking'`

---

## Lección 6 — Writing (15 ejercicios)

**Título de lección**: `'Expresión escrita'`

**Reglas**:
- Instrucciones en español, sin "a" suelta.
- Si la instrucción cita verbos ingleses como referencia, usa token: `"[[work|trabajar]]"`.
- `prompt` en formato token.

**Distribución de ejercicios**:
- Ejercicios 1–5: `fill-blank` — completar frases con el verbo correcto en presente simple
- Ejercicios 6–8: `sentence-building` — ordenar palabras y escribir la frase
- Ejercicios 9–12: `writing` — redacción corta guiada (1–3 frases)
- Ejercicios 13–15: `writing` — redacción libre corta (4–6 frases sobre rutinas)

**Campo `topic`**: `'Daily Routines'`  
**Campo `topicName`**: `'Writing'`

---

## Archivo índice (unit-5-lessons-index.ts)

Patrón idéntico a `unit-3-lessons-index.ts`:
```typescript
import { UNIT_5_LESSON_1_GRAMMAR } from './unit-5-lesson-1-grammar';
// ... demás imports

export const UNIT_5_LESSONS = { grammar, vocabulary, reading, listening, speaking, writing };
export const UNIT_5_ALL_LESSONS: Exercise[][];
export const UNIT_5_ALL_EXERCISES: Exercise[];
```

---

## Archivo unit-5.ts

Patrón idéntico a `unit-3.ts`:
```typescript
import { UNIT_5_ALL_EXERCISES } from './unit-5-lessons-index';
export const UNIT_TITLE = 'Simple Present: Everyday Actions';
export const UNIT_5_EXERCISES = UNIT_5_ALL_EXERCISES;
```

---

## Restricciones técnicas

- Sin comentarios en el código (salvo el comentario de `audioUrl` en la lección 4).
- Sin scripts de verificación temporales.
- Todos los archivos importan `Exercise` de `@/lib/exercise-generator`.
- Nivel: `'A1'`, dificultad: `'easy'` en todos los ejercicios.
- Cada ejercicio tiene exactamente 1 pregunta en el array `questions` (no preguntas anidadas).
