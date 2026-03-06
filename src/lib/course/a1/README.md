# Curso A1 — Dónde está la estructura y los temas

Referencia rápida para seguir produciendo unidades: **estructura de cada unidad** y **temas/títulos por unidad**.

---

## 1. Estructura de cada unidad (cómo debe ser una unidad)

**Documento principal:** `docs/guia-estructural-curso.md`

- **Parte III, sección 8:** Las **6 lecciones obligatorias** por unidad (orden: Gramática → Vocabulario → Comprensión lectora → Comprensión auditiva → Expresión oral → Expresión escrita).
- **Sección 8A y 8A.1:** **15 ejercicios por lección**, plantilla por tipo (completar huecos, elección múltiple, emparejar, V/F, etc.).
- **Resumen:** 6 lecciones × 15 ejercicios = **90 ejercicios por unidad** (en lectura/escucha puede ser 1 ejercicio con 14 preguntas anidadas).

**Implementación de referencia (Unidad 1):**

- `unit-1.ts` — exporta `UNIT_TITLE` y `UNIT_1_EXERCISES`.
- `unit-1-lessons-index.ts` — agrupa las 6 lecciones.
- `unit-1-lesson-1-grammar.ts` … `unit-1-lesson-6-writing.ts` — una lección por archivo, siguiendo la plantilla de la guía.

Para crear una nueva unidad con la misma estructura: copiar el patrón de la Unidad 1 (índice + 6 archivos de lección) y el tipo `Exercise` de `@/lib/exercise-generator`. Contenido bilingüe con formato `[[English|Spanish]]` y componente `TranslatedText`.

---

## 2. Temas y títulos de cada unidad

**Títulos que ve el usuario (listado del curso):**  
Cada archivo `src/content/cursos/ingles-a1/unitN.json` define el título en:

- `course.unit_title` (ej.: `"Greetings and Personal Information"`).
- Opcional: `learning_outcomes`, `blocks`, etc.

La web del curso lee esos JSON para mostrar la lista de unidades y metadatos (`getUnitsWithMetadata('ingles-a1')` → `extractUnitMetadata` en `src/lib/utils/course-metadata.ts`).

**Contenido pedagógico por unidad (qué se aprende):**

- `docs/que-aprende-por-unidad.md` — por unidad: can-do, gramática, vocabulario, comprensión y producción.
- `docs/objetivos-academicos-60-unidades.md` — objetivos académicos (gramatical, léxico, comprensión, producción, pragmático) por unidad.

**Resumen:** Los **temas/títulos** están en los JSON (`unit_title`) y en los docs; la **estructura (6 lecciones, 15 por lección)** está en `docs/guia-estructural-curso.md` y el ejemplo de código en la Unidad 1.
