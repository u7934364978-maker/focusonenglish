# PRD: Reemplazar Ejercicios Triviales de la Unidad 30 (A1)

## Contexto

La Unidad 30 del curso **ingles-a1** es una unidad de repaso del Módulo 3 que cubre vocabulario de casa, habitaciones, muebles, barrio, partes del cuerpo, ropa y animales, junto con estructuras gramaticales (There is/are, preposiciones, Present Continuous, pronombres posesivos).

El archivo afectado es: `src/content/cursos/ingles-a1/unit30.json`

## Problema

Un porcentaje significativo de los ejercicios de la Unidad 30 son triviales y no generan aprendizaje real. El screenshot muestra el caso más claro: un ejercicio de tipo `matching` para "Adjetivos de la casa" (U30_V1_I10) se renderiza como una pregunta de opción múltiple donde la pregunta es "Modern" y la opción correcta es también "Modern" — el alumno simplemente hace clic en lo que ya ve.

### Causa raíz

Todos los ejercicios `matching` de la unidad tienen la estructura:
- `left`: palabra en inglés
- `right`: traducción al español
- `correct_answer`: siempre `{"p1":"p1", "p2":"p2", "p3":"p3", "p4":"p4"}`

La UI renderiza estos ejercicios mostrando las palabras del lado **izquierdo** como pregunta Y como opciones de respuesta, haciendo que la respuesta sea obvia (el alumno ve "Modern" y selecciona "Modern").

### Ejercicios triviales identificados

**17 ejercicios matching con mapeo trivial:**
- B30_V1: U30_V1_I1, I3, I5, I6, I8, I10
- B30_V2: U30_V2_I1, I2, I3, I4, I6, I9
- B30_V3: U30_V3_I1, I3, I5, I7, I9

**11 ejercicios multiple_choice de conocimiento común o traducción directa (sin contexto):**
- U30_V1_I4: "¿Cómo se dice 'camisa'?" → respuesta obvia
- U30_V1_I9: "¿Qué parte del cuerpo usas para ver?" → conocimiento previo, no inglés
- U30_V2_I5: "¿Cómo se dice 'cómodo'?" → traducción directa
- U30_V2_I7: "Un animal peligroso es un:" → conocimiento general, no inglés
- U30_V2_I8: "¿Qué habitación es para dormir?" → trivial
- U30_V2_I10: "¿Cómo se dice 'ruidoso'?" → traducción directa
- U30_V3_I2: "¿Qué te pones en los pies?" → trivial
- U30_V3_I4: "¿Cómo se dice 'espejo'?" → traducción directa
- U30_V3_I6: "¿Cuál es un animal de granja?" → conocimiento general
- U30_V3_I8: "¿Cómo se dice 'cocina'?" → traducción directa
- U30_V3_I10: "¿Qué usas cuando llueve?" → trivial

**Total: 28 ejercicios triviales a reemplazar** de ~57 ejercicios totales.

## Ejercicios buenos (a conservar sin cambios)

- Todos los ejercicios `transformation` (B30_G1, B30_G2, B30_G3): fill-in con contexto oracional
- Todos los ejercicios `reorder_words` (B30_D1, B30_G2_I5, B30_G2_I9, B30_G3_I3): requieren producción activa
- La comprensión lectora (B30_R1_I1) con 5 preguntas
- Ejercicios de dirección con opciones distintas (B30_D1_I2, D1_I5)
- Dictado y pronunciación (B30_L1)

## Requisitos para los ejercicios de reemplazo

### Criterios de calidad

Un ejercicio de **alta calidad** debe cumplir:
1. **Contexto oracional**: la palabra objetivo aparece en una frase completa, no aislada
2. **Distractor creíble**: las opciones incorrectas deben ser plausibles en el contexto
3. **Producción activa preferida**: `fill_blanks`, `short_writing`, `categorization` o `transformation` generan más aprendizaje que reconocimiento pasivo
4. **Alineación con learning outcomes**: cada ejercicio refuerza habilidades específicas de la unidad
5. **Campos de metadata**: incluir `complexity` (1-5) y `concept_tags` como en unidades recientes (ej. unit29)

### Tipos de ejercicio preferidos (de mayor a menor calidad)
1. `fill_blanks`: completar huecos en oraciones contextualizadas
2. `short_writing`: traducir o escribir oraciones completas
3. `categorization`: agrupar conceptos en categorías significativas
4. `transformation`: transformar oraciones (ya existen, son buenos)
5. `reorder_words`: ordenar palabras (ya existen, son buenos)
6. `multiple_choice`: acceptable si las opciones son contextuales y los distractores plausibles
7. `matching`: solo si los pares son cross-domain (ej. imagen↔palabra, definición↔término) — **evitar** el patrón English→Spanish que produce trivialidad

### Tipos a evitar
- `matching` con `correct_answer` siempre `p1→p1, p2→p2...` (causa del problema)
- `multiple_choice` de traducción directa sin contexto ("¿Cómo se dice X?")
- Ejercicios cuya respuesta es deducible por conocimiento del mundo, no por conocimiento del inglés

## Plan de cambios por bloque

### B30_V1 — Vocabulary Review: My World (10 ejercicios)
Conservar: I2, I7
Reemplazar los 5 matching (I1, I3, I5, I6, I8) y el matching I10 por:
- 3 ejercicios `fill_blanks` con frases contextuales (rooms, body parts, neighborhood)
- 2 ejercicios `categorization` (ej. Rooms vs Furniture; Pets vs Wild Animals)
- 1 ejercicio `multiple_choice` con contexto real (sentence completion)

### B30_V2 — Comprehensive Vocabulary Review (10 ejercicios)
Conservar: I5, I7, I8, I10 (con mejoras en I5, I7, I8, I10 para añadir contexto)
Reemplazar los 6 matching (I1, I2, I3, I4, I6, I9) por:
- 3 ejercicios `fill_blanks` (animals in sentences, clothes descriptions, body parts in context)
- 2 ejercicios `categorization` (ej. Clothes: Winter vs Summer; Animals: Farm vs Wild)
- 1 ejercicio `short_writing` (describe what you are wearing)

### B30_V3 — Final Vocabulary Check (10 ejercicios)
Conservar: I2, I4, I6, I8, I10 (mejorar con contexto donde sea posible)
Reemplazar los 5 matching (I1, I3, I5, I7, I9) por:
- 2 ejercicios `fill_blanks`
- 2 ejercicios `categorization`
- 1 ejercicio `short_writing`

### Mejoras de multiple_choice existentes
Los 11 ejercicios MC triviales se convierten en `fill_blanks` con una oración que requiere la palabra target en contexto, o se reformulan con opciones contextuales que sean genuinamente confundibles.

## Ejemplo de transformación

**Antes (trivial):**
```json
{
  "interaction_id": "U30_V1_I10",
  "type": "matching",
  "prompt_es": "Adjetivos de la casa:",
  "pairs": [
    { "id": "p1", "left": "Modern", "right": "Moderno" },
    { "id": "p2", "left": "Traditional", "right": "Tradicional" },
    { "id": "p3", "left": "Cozy", "right": "Acogedor" },
    { "id": "p4", "left": "Bright", "right": "Luminoso" }
  ],
  "correct_answer": { "p1": "p1", "p2": "p2", "p3": "p3", "p4": "p4" }
}
```

**Después (alta calidad):**
```json
{
  "interaction_id": "U30_V1_I10",
  "type": "fill_blanks",
  "prompt_es": "Esta casa tiene mucha luz natural. Es una casa muy ________.",
  "stimulus_en": "This house has lots of natural light. It is a very ________ house.",
  "correct_answer": "bright",
  "options": ["bright", "cozy", "modern", "traditional"],
  "mastery_tag": "vocabulary",
  "complexity": 3,
  "concept_tags": ["vocabulary", "adjectives"]
}
```

## Resultado esperado

- Las 28 ejercicios triviales son reemplazados por ejercicios que requieren comprensión en contexto
- Todos los ejercicios incluyen `complexity` y `concept_tags`
- El número total de ejercicios se mantiene igual (no se añaden ni eliminan bloques)
- El JSON sigue siendo válido según la estructura del proyecto
- Los IDs de interacción (`interaction_id`) se conservan para evitar romper referencias
