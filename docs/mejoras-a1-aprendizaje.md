# Mejoras A1 para garantizar un correcto aprendizaje

Documento de análisis y propuestas tras completar las 60 unidades del curso A1.

---

## 1. Estado del audio en los listenings

### Hallazgos

- **Ejercicios de listening (lección 4)** en las unidades 41–60 **no definen `audioUrl`**. Solo tienen `transcript` y `content.questions`.
- En **unidades antiguas** (2, 3, 4, 5, 6) sí aparece `audioUrl` en algunos archivos (p. ej. rutas a `/audio/courses/ingles-a1/...`).
- El **renderizador A1** (`src/components/ExerciseRenderer.tsx`) muestra el reproductor de audio **solo si** `exercise.audioUrl` existe (líneas 585–590, 604–608). Si no hay `audioUrl`, no se muestra ni el reproductor ni el transcript en la vista estándar de “listening”, por lo que el alumno solo ve las preguntas sin texto de apoyo.

### Recomendaciones

1. **Corto plazo (fallback)**  
   En `ExerciseRenderer`, cuando `exercise.type === 'listening'` y **no** hay `audioUrl`, mostrar igualmente el **transcript** (p. ej. en un bloque colapsable “Ver texto del audio”) para que el alumno pueda hacer la comprensión en modo “lectura + preguntas” hasta que exista audio.

2. **Mediano plazo (audio real)**  
   - Opción A: generar **audio por TTS** (API de síntesis de voz) a partir de `exercise.transcript` y usar esa URL como `audioUrl` al cargar el ejercicio.  
   - Opción B: grabar o encargar **audios por unidad/lección** y guardarlos en `/public/audio/...`, luego añadir en cada ejercicio de listening el `audioUrl` correspondiente.

3. **Prioridad**  
   Dar prioridad a las unidades más usadas (p. ej. 1–20) para tener al menos una o dos lecciones de listening con audio real y, a partir de ahí, extender al resto.

---

## 2. Minirepasos (repaso distribuido)

### Objetivo

Reforzar lo aprendido sin esperar solo al repaso de final de módulo (u10, u20, …, u60), mejorando la retención a largo plazo.

### Propuesta de ubicación

Insertar un **bloque corto de repaso** cada **5 unidades**:

| Después de unidad | Nombre sugerido   | Contenido (resumen) |
|-------------------|------------------|----------------------|
| 5                 | Repaso 1–5       | to be, pronombres, negativas/preguntas, números/objetos, Present Simple afirmativo |
| 10                | Ya existe        | Module 1 Review (u10) |
| 15                | Repaso 11–15     | hora, días, rutina, Present Simple I/you/we/they, he/she/it |
| 20                | Ya existe        | Module 2 Review (u20) |
| 25                | Repaso 21–25     | casa, muebles, there is/are, preposiciones, barrio |
| 30                | Ya existe        | Module 3 Review (u30) |
| 35                | Repaso 31–35     | can, deportes/hobbies, adverbios frecuencia, and/but/because, tiempo libre |
| 40                | Ya existe        | Module 4 Review (u40) |
| 45                | Repaso 41–45     | aeropuerto, transporte, verbos viaje, tiempo, estaciones |
| 50                | Ya existe        | Module 5 Review (u50) |
| 55                | Repaso 51–55     | supermercado, contables/incontables, some/any, how much/many, tienda ropa |
| 60                | Ya existe        | Module 6 Review (u60) |

### Formato sugerido para cada minirepaso

- **Una “lección” extra** (p. ej. “Repaso 1–5”) con **5–8 ejercicios** que mezclen:
  - 2–3 de gramática (fill-blank o multiple-choice de las unidades recientes).
  - 2–3 de vocabulario (multiple-choice o matching).
  - 1–2 de lectura o listening corto reutilizando frases/transcripts de esas unidades.
- No hace falta crear 6 lecciones completas; basta con un único bloque de ejercicios por minirepaso.
- **Implementado:** archivos `unit-5-recap.ts`, `unit-15-recap.ts`, `unit-25-recap.ts`, `unit-35-recap.ts`, `unit-45-recap.ts`, `unit-55-recap.ts` (8 ejercicios cada uno) integrados en el índice de la unidad correspondiente como última “lección”. Al terminar la unidad 5, 15, 25, 35, 45 o 55, el alumno hace los 8 ejercicios de repaso antes de pasar a la siguiente unidad.

---

## 3. Test final A1

### Objetivo

Que el alumno (y el profesor/sistema) compruebe que ha asimilado los contenidos del A1 antes de dar por cerrado el nivel.

### Estructura propuesta

Un **test único** de fin de A1 (tras la unidad 60), no sustituye al Module 6 Review sino que lo complementa.

- **Duración orientativa:** 15–25 minutos.
- **Número de ítems:** 25–30 preguntas.
- **Tipos de ejercicio:**
  - **Gramática (8–10 ítems):** multiple-choice o fill-blank (to be, Present Simple, there is/are, can, Past Simple básico, some/any, how much/many, too/enough, should, must, etc.).
  - **Vocabulario (6–8 ítems):** multiple-choice o matching (temas de los 6 módulos: presentaciones, rutinas, casa, capacidades, viajes, compras/comida).
  - **Comprensión lectora (3–4 ítems):** un texto corto (100–150 palabras) con 3–4 preguntas de elección múltiple.
  - **Comprensión auditiva (3–4 ítems):** un audio corto (o transcript si no hay audio) con 3–4 preguntas.
  - **Producción escrita (2–3 ítems):** 2–3 frases guiadas (p. ej. “Escribe qué hiciste el fin de semana”, “Escribe qué debes hacer en el aeropuerto”).

### Criterio de “aprobado”

- Opción simple: **≥ 70% de aciertos** en el conjunto del test.
- Opción por destrezas: no bajar de un 60% en ninguna de las partes (gramática, vocabulario, lectura, escucha, escritura) y un 70% global.

### Implementación (realizada)

- **`src/lib/course/a1/final-test-a1.ts`**: exporta `FINAL_TEST_A1_EXERCISES` (28 ítems) y `FINAL_TEST_A1_TITLE`. Ruta `/curso-a1/test-final` carga el test; al finalizar, resumen con aciertos, % y Aprobado (≥70%) o No aprobado. Enlace en la página del curso.
- Opcional a futuro: guardar resultado por usuario para perfil o certificado.
---

## Resumen de prioridades

| Prioridad | Acción |
|----------|--------|
| Alta     | Mostrar transcript en listenings cuando no hay `audioUrl` (fallback en `ExerciseRenderer`). |
| Alta     | Definir y crear el test final A1 (contenido + ruta). |
| Media    | Añadir minirepasos cada 5 unidades (a partir de u5, u15, u25, u35, u45, u55). |
| Media    | Introducir audio real o TTS en lecciones de listening (empezando por unidades 1–20). |
| Baja     | Extender audio a todas las lecciones 4 de las 60 unidades. |

Este documento puede usarse como guía para implementar las mejoras en el orden que mejor encaje con la roadmap del producto.
