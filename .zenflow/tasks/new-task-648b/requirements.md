# PRD — Unidad 4 del curso A1 de Focus on English

## 1. Contexto y objetivo

Crear la **Unidad 4** del curso A1 siguiendo exactamente la misma estructura que la Unidad 3 (6 archivos de lección + 1 índice + 1 entry point). La unidad ya tiene un fichero `unit-4.ts` con contenido viejo (formato distinto) que debe ser **reemplazado** por el nuevo entry point que importa desde el índice.

**Tema pedagógico de la Unidad 4:** "Essential Vocabulary: Numbers and Objects"
- **Gramática:** Artículos *a/an*; plural regular (*-s*); demostrativos *this/that/these/those*.
- **Vocabulario:** Números 1–10, objetos del aula (*pen, book, notebook, pencil, ruler, bag, desk, chair, eraser, board*), colores básicos (*red, blue, green, yellow, black, white*).
- **Producción:** Frases del tipo *This is a…*, *These are…*, *It is a red pen.*, *There are three books.*

---

## 2. Archivos a crear / modificar

| Archivo | Acción | Descripción |
|---|---|---|
| `src/lib/course/a1/unit-4-lesson-1-grammar.ts` | Crear | 15 ejercicios de gramática |
| `src/lib/course/a1/unit-4-lesson-2-vocabulary.ts` | Crear | 15 ejercicios de vocabulario |
| `src/lib/course/a1/unit-4-lesson-3-reading.ts` | Crear | 15 ejercicios de comprensión lectora |
| `src/lib/course/a1/unit-4-lesson-4-listening.ts` | Crear | 15 ejercicios de comprensión auditiva |
| `src/lib/course/a1/unit-4-lesson-5-speaking.ts` | Crear | 15 ejercicios de expresión oral |
| `src/lib/course/a1/unit-4-lesson-6-writing.ts` | Crear | 15 ejercicios de expresión escrita |
| `src/lib/course/a1/unit-4-lessons-index.ts` | Crear | Índice que agrupa las 6 lecciones |
| `src/lib/course/a1/unit-4.ts` | Reemplazar | Entry point que importa del índice |

**Total:** 6 × 15 = **90 ejercicios**.

---

## 3. Reglas de formato obligatorias (sin excepción)

### 3.1 Token `[[English|Spanish]]`
- Todos los textos visibles al estudiante usan este formato palabra por palabra o frase por frase.
- **Excepción:** `explanation` y campos de texto interno no visibles pueden ser texto plano.

### 3.2 Instrucciones
- Siempre en **español puro**.
- Sin tokens `[[...|...]]` dentro de las instrucciones.
- Sin frases modelo en inglés embebidas.
- Usar **"Contesta"** en vez de "Responde a la pregunta" (evitar "a" suelta que el motor subraya como artículo inglés).
- Otras palabras peligrosas a evitar como texto suelto: "a", "an", "the", "of", "in", "on", "for", "is", "are".

### 3.3 Opciones de elección múltiple
- Cada opción: **un único token** `[[opción completa|traducción completa]]`, aunque sea una frase larga.
- Nunca texto plano en las opciones.
- Nunca múltiples tokens consecutivos por opción.

### 3.4 Opciones Verdadero/Falso
```ts
options: ['[[True|Verdadero]]', '[[False|Falso]]']
```

### 3.5 Enunciado V/F (campo `question`)
- Token único: `'[[English statement.|Enunciado en español.]]'`

### 3.6 Preguntas (`question` en MC)
- Token único corto: `'[[Question?|¿Pregunta?]]'`
- Máximo ~55 caracteres en inglés para caber en una línea.

### 3.7 Nombres propios como opciones
- Todos con formato o ninguno: `[[Name|Name]]`.
- Tildes donde aplica: `[[María|María]]`, `[[Sofía|Sofía]]`.

---

## 4. Lección 1 — Gramática (15 ejercicios)

**Título:** `'Artículos, plurales y demostrativos'`

**Distribución:**
- Ejercicios 1–5: `fill-blank` — completar con *a*, *an*, o la forma plural
- Ejercicios 6–10: `multiple-choice` — elegir la forma correcta (a/an, plurales, this/that/these/those)
- Ejercicios 11–13: `sentence-building` — ordenar palabras para formar una oración
- Ejercicios 14–15: `true-false` — indicar si la afirmación es correcta

**Contenido gramatical:**
- *a* + consonante: *a book*, *a pen*, *a ruler*
- *an* + vocal: *an eraser*, *an apple*
- Plural regular: *book → books*, *pen → pens*
- Demonstrativos singulares: *This is a desk.* / *That is a chair.*
- Demonstrativos plurales: *These are pens.* / *Those are books.*

---

## 5. Lección 2 — Vocabulario (15 ejercicios)

**Título:** `'Vocabulario: números, objetos y colores'`

**Distribución:**
- Ejercicios 1–6: `multiple-choice` — definición/imagen → palabra
- Ejercicios 7–10: `matching` — pares inglés-español
- Ejercicios 11–13: `fill-blank` — completar la frase con el vocabulario correcto
- Ejercicios 14–15: `multiple-choice` — vocabulario en contexto

**Vocabulario a cubrir:**
- Números: *one, two, three, four, five, six, seven, eight, nine, ten*
- Objetos del aula: *pen, pencil, book, notebook, ruler, eraser, bag, desk, chair, board*
- Colores: *red, blue, green, yellow, black, white*

---

## 6. Lección 3 — Comprensión lectora (15 ejercicios individuales)

**Título:** `'Comprensión lectora'`

**Texto (transcript):** Descripción de un aula en primera persona. Ejemplo:

> "Hi! My name is Pablo. This is my classroom. It is a big room. There is a board on the wall. There are twenty chairs and ten desks. On my desk, there is a blue pen, a red notebook and an eraser. My pencil is green. My bag is black. Are there books on your desk? Yes, there are three books. Is that a ruler? Yes, it is! This is a great classroom!"

Transcript en formato `[[word|palabra]]` palabra por palabra.

**Distribución:**
- Ejercicios 1–8: `reading` con `multiple-choice` (4 opciones, cada una token único)
- Ejercicios 9–12: `reading` con `true-false`
- Ejercicios 13–15: `reading` (síntesis, `multiple-choice`)

**Regla crítica:** Repetir `transcript: READING_TRANSCRIPT` en **cada uno** de los 15 ejercicios individuales.

---

## 7. Lección 4 — Comprensión auditiva (15 ejercicios individuales)

**Título:** `'Comprensión auditiva'`

**Diálogo (transcript):** Diálogo entre dos estudiantes describiendo objetos en el aula. Ejemplo:

> Student 1: "What is this?" / Student 2: "It is a pencil. It is yellow." / Student 1: "And those?" / Student 2: "Those are erasers. There are four erasers." / Student 1: "Is that a bag?" / Student 2: "Yes, it is. It is a red bag." / Student 1: "How many books are there?" / Student 2: "There are six books on the desk."

Transcript en formato `[[word|palabra]]` palabra por palabra.

**Audio:** `// audioUrl: '/audio/a1-u4-l4-listening.mp3'` (comentado en cada ejercicio).

**Distribución:**
- Ejercicios 1–8: `listening` con `multiple-choice`
- Ejercicios 9–12: `listening` con `true-false`
- Ejercicios 13–15: `listening` (síntesis, `multiple-choice`)

**Regla crítica:** Repetir `transcript: LISTENING_TRANSCRIPT` y `// audioUrl: '...'` en **cada uno** de los 15 ejercicios individuales.

---

## 8. Lección 5 — Expresión oral (15 ejercicios)

**Título:** `'Expresión oral'`

**Tipo único:** `pronunciation`

**Distribución:**
- Ejercicios 1–4: Repetir frases (pronunciación)
- Ejercicios 5–7: Leer en voz alta
- Ejercicios 8–11: Contestar oralmente preguntas cerradas
- Ejercicios 12–15: Describir/producir frase guiada

**Reglas críticas:**
- `instructions`: español puro, sin modelos en inglés embebidos.
- `targetText`: texto en inglés en formato `[[word|palabra]]` palabra por palabra.
- `expectedResponse`: texto en inglés **plano** (sin tokens).
- Si la instrucción menciona un ejemplo, ese ejemplo va en `targetText`, no en `instructions`.

**Contenido:** Practicar *This is a…*, *That is a…*, *These are…*, *Those are…*, preguntas *What is this?*, *How many…are there?*, respuestas cortas *Yes, it is.* / *No, it isn't.*, etc.

---

## 9. Lección 6 — Expresión escrita (15 ejercicios)

**Título:** `'Expresión escrita'`

**Distribución:**
- Ejercicios 1–5: `fill-blank` — completar frases por escrito
- Ejercicios 6–8: `sentence-building` — ordenar palabras y escribir la frase
- Ejercicios 9–12: `writing` — redacción corta guiada (1–3 frases)
- Ejercicios 13–15: `writing` — redacción libre corta (4–6 frases)

**Reglas críticas:**
- `instructions`: español puro. No usar "a" suelta. Usar "Completa", "Ordena", "Escribe".
- Todo texto visible al estudiante en formato `[[...|...]]`.
- Campos `prompt` en formato `[[...|...]]`.
- `instructions` para los writing exercises: texto plano en español (sin tokens), instrucciones claras.

**Contenido:** Escribir frases con *a/an*, plurales, demostrativos; describir objetos del aula; usar colores y números en contexto escrito.

---

## 10. Índice de lecciones (`unit-4-lessons-index.ts`)

Mismo patrón que `unit-3-lessons-index.ts`:
```ts
export const UNIT_4_LESSONS = { grammar, vocabulary, reading, listening, speaking, writing }
export const UNIT_4_ALL_LESSONS: Exercise[][]
export const UNIT_4_ALL_EXERCISES: Exercise[]
```

---

## 11. Entry point (`unit-4.ts`)

Reemplazar el contenido actual por el patrón de `unit-3.ts`:
```ts
import { UNIT_4_ALL_EXERCISES } from './unit-4-lessons-index';
export const UNIT_TITLE = 'Essential Vocabulary: Numbers and Objects';
export const UNIT_4_EXERCISES = UNIT_4_ALL_EXERCISES;
```

---

## 12. IDs de ejercicios

Seguir el patrón `a1-u4-lN-{tipo}{N}`:
- Gramática: `a1-u4-l1-g1` … `a1-u4-l1-g15`
- Vocabulario: `a1-u4-l2-v1` … `a1-u4-l2-v15`
- Reading: `a1-u4-l3-reading-1` … `a1-u4-l3-reading-15`
- Listening: `a1-u4-l4-listening-1` … `a1-u4-l4-listening-15`
- Speaking: `a1-u4-l5-s1` … `a1-u4-l5-s15`
- Writing: `a1-u4-l6-w1` … `a1-u4-l6-w15`

---

## 13. Campos de cada ejercicio

```ts
{
  id: string,          // Patrón definido arriba
  type: ExerciseType,  // 'fill-blank' | 'multiple-choice' | 'matching' | 'true-false' | 'sentence-building' | 'reading' | 'listening' | 'pronunciation' | 'writing'
  level: 'A1',
  topic: string,       // 'Articles and Plurals' | 'Numbers and Objects' | 'Colors' | etc.
  difficulty: 'easy',
  content: { title, instructions, questions/pairs/correctSentence/words/targetText/expectedResponse/prompt/... },
  transcript?: string, // Solo en reading y listening
  // audioUrl?: string, // Solo en listening (comentado)
  topicName: string,   // 'Grammar' | 'Vocabulary' | 'Reading' | 'Listening' | 'Speaking' | 'Writing'
}
```

---

## 14. Restricciones y no-hacer

- **No** crear scripts temporales de verificación en el proyecto.
- **No** dejar texto inglés plano en opciones de elección múltiple.
- **No** usar "a" suelta en instrucciones en español.
- **No** anidar preguntas en un solo ejercicio para L3 y L4 — cada ejercicio tiene exactamente una pregunta.
- **No** poner frases modelo en inglés dentro del campo `instructions` de L5.
- **No** mezclar múltiples tokens por opción (e.g., `'[[This|Esto]]' + ' ' + '[[is|es]]'` — incorrecto; usar `'[[This is a pen.|Esto es un bolígrafo.]]'`).
