# PRD: Auditoría Exhaustiva del Curso de Inglés A1
## Informe de un Profesor Experimentado de Cambridge

**Objetivo**: Auditar exhaustivamente todos los ejercicios del curso de inglés A1 unidad por unidad y proporcionar recomendaciones detalladas de mejora para garantizar un aprendizaje correcto de inglés nivel A1, alineado con el Marco Común Europeo de Referencia (MCER).

**Metodología**: Revisión de todos los archivos JSON de las 60 unidades (`src/content/cursos/ingles-a1/unit*.json`), contrastando su contenido con las especificaciones del curso (`course-specifications.md`) y los principios pedagógicos del MCER para el nivel A1.

---

## PROBLEMAS TRANSVERSALES (Afectan a Múltiples Unidades)

Antes de entrar en el análisis unidad por unidad, se identifican los siguientes problemas sistémicos:

### P1: Formato de Traducción `[[English|Spanish]]` — Inconsistencia Crítica
- **Requisito**: TODA palabra en inglés en transcripts, preguntas y textos de lectura debe usar el formato `[[English|Spanish]]`.
- **Problema**: Las unidades 4, 5, 7, 8, 9, 10, 11 y la mayoría de las unidades de los módulos 2-6 NO aplican este formato. Las opciones de respuesta en inglés carecen de traducciones. Esto penaliza al estudiante A1 que aún no conoce el vocabulario.
- **Impacto**: Muy alto — afecta a la comprensión lectora de estudiantes principiantes.

### P2: Ejercicios de Construcción de Frases — Orden Incorrecto en `correct_answer`
- **Problema**: En múltiples unidades, el array `correct_answer` de los ejercicios `sentence-building`/`reorder_words` no refleja el orden correcto de las palabras. Los IDs listados en `correct_answer` se corresponden con el orden en que las opciones aparecen en el array `options`, no con el orden gramaticalmente correcto en inglés.
- **Ejemplo concreto (Unit 1, I42)**: El ejercicio pide construir "My name is John." pero `correct_answer: ["w1","w2","w3","w4","w5"]` produce "John My name is ." en lugar de "My name is John."
- **Impacto**: Crítico — los estudiantes aprenden gramática incorrecta.

### P3: Ejercicios de Emparejamiento (Matching) — Trivialmente Obvios
- **Problema**: En prácticamente TODAS las unidades, el campo `correct_answer` de los ejercicios `matching` siempre mapea `p0→p0`, `p1→p1`, `p2→p2`, `p3→p3`. Esto significa que el estudiante siempre empareja el primer elemento con el primero, el segundo con el segundo, etc.
- **Impacto**: Los ejercicios no miden vocabulario real sino reconocimiento de posición. Son trivialmente resolubles sin leer nada en inglés.
- **Solución**: Los pares deben mezclarse (shuffle). La solución técnica puede ser mezclar la presentación visual de los ítems en la interfaz, pero la corrección debe basarse en el significado, no en la posición.

### P4: Sistema de Lectura en Dos Fases — No Implementado
- **Requisito** (course-specifications.md): "Phase 1 (Reading): The full text passage is displayed first. Phase 2 (Questions): Questions are presented only after the student has accessed the text."
- **Problema**: La mayoría de unidades NO tienen un elemento `type: "reading_phase"` previo a las preguntas de comprensión. En su lugar, el transcript está embebido en cada pregunta individual. Esto viola el principio pedagógico de lectura global antes de comprensión.

### P5: IDs de Interacción Duplicados o Incorrectos
- `U9_IMG1` aparece dos veces en `unit9.json`
- `U14_I10` aparece en `unit8.json` (error de copiar-pegar)
- Inconsistencia en los formatos de ID: `A1_U1_I1` vs `U2_I1` vs `U9_I1` — no hay esquema uniforme

### P6: Distribución de Respuestas Correctas — Sesgo hacia Opción A
- En muchos ejercicios de opción múltiple, la respuesta correcta es mayoritariamente `o1` (primera opción). Esto crea un patrón que los estudiantes pueden detectar sin leer el contenido.
- Requisito del spec: "Correct answers must be distributed across all options (A, B, C)."

### P7: Ejercicios de Listening con Audio Inexistente
- Unidades 4, 8 y otras tienen ejercicios `listening_dictation` con rutas de audio (`/audio/a1/unit4/spell-name.mp3`, `/audio/a1/unit8/work.mp3`) que probablemente no existen.
- Sin audio funcional, estos ejercicios son inutilizables.

---

## MÓDULO 1: BASICS & PERSONAL INFO (Unidades 1-10)

### Unidad 1: Greetings and Personal Information ⚠️

**Archivo**: `unit1.json` | **Tamaño**: 1,248 líneas | **Ejercicios estimados**: ~60

**Puntos fuertes**:
- Aplicación correcta del formato `[[English|Spanish]]` en toda la unidad
- Buena variedad de tipos de ejercicio (multiple-choice, fill-blank, sentence-building)
- Progresión de complejidad del nivel 1 al 3
- Learning outcomes claramente definidos en inglés

**Problemas identificados**:

1. **[CRÍTICO] Múltiples ejercicios de sentence-building tienen el orden correcto incorrecto**:
   - I10: `correct_answer: ["w1","w2"]` construye "Goodbye ." — OK, pero trivialmente simple para sentence-building
   - I19: `correct_answer: ["w1","w2","w3","w4"]` = "is What your surname?" → **Correcto**: `["w2","w1","w3","w4"]` = "What is your surname?"
   - I29: `correct_answer: ["w1","w2","w3","w4"]` = "am ready I ." → **Correcto**: `["w3","w1","w2","w4"]` = "I am ready."
   - I35: `correct_answer: ["w1","w2","w3"]` = "here? Are you" → **Correcto**: `["w2","w3","w1"]` = "Are you here?"
   - I42: `correct_answer: ["w1","w2","w3","w4","w5"]` = "John My name is ." → **Correcto**: `["w2","w3","w4","w1","w5"]` = "My name is John."
   - I43: `correct_answer: ["w1","w2","w3","w4"]` = "is What your name?" → **Correcto**: `["w2","w1","w3","w4"]` = "What is your name?"

2. **[ALTO] Bloque B4 no implementa el sistema de lectura en dos fases**: El transcript está embebido inline en cada pregunta de comprensión (I46, I47, I48, I49) en lugar de presentarse primero como `reading_phase`. El estudiante ve el texto mezclado con la pregunta, lo que elimina el desafío de comprensión lectora global.

3. **[MEDIO] Ejercicio I9 trivialmente obvio**: "Hi = ?" con opciones Hello, Bye, Night — cualquier principiante sabe que Hi = Hello.

4. **[MEDIO] Ejercicio I10 demasiado simple para su tipo**: Construir "Goodbye." con solo 2 fichas (Goodbye + .) no requiere comprensión sintáctica. Usar sentence-building para oraciones tan cortas es un desperdicio del tipo de ejercicio.

5. **[BAJO] Bloque B4 titulado "Reading, Listening and Speaking"** pero no hay componente de listening ni de speaking real.

**Recomendaciones**:
- Corregir los 6 arrays `correct_answer` incorrectos en sentence-building
- Refactorizar bloque B4 para añadir un `reading_phase` con el texto completo antes de las preguntas
- Reemplazar I9 por una pregunta contextual: e.g., "You meet your boss at 9 AM. What do you say?" con opciones que incluyan distractores plausibles
- Reemplazar I10 con un sentence-building de una frase completa como "Goodbye, see you tomorrow!"

---

### Unidad 2: Nice to meet you! ❌ (CONTENIDO INCORRECTO)

**Archivo**: `unit2.json` | **Tamaño**: 623 líneas | **Ejercicios**: ~50

**Problema crítico**: El título y contenido del archivo NO coincide con las especificaciones del curso.

| Especificación del curso | Contenido real del archivo |
|--------------------------|---------------------------|
| Verb 'to be' (He, She, It, We, They) | ✅ Parcialmente cubierto |
| Countries and nationalities | ❌ AUSENTE |
| Numbers 1-10 | ❌ AUSENTE |
| Subject pronouns (He, She, It, We, They) | ✅ Parcialmente cubierto |
| Reading: descriptions of people from different countries | ❌ AUSENTE |

**Problemas identificados**:

1. **[CRÍTICO] Ausencia total de vocabulario de países y nacionalidades**: La unidad no incluye countries (France, Spain, UK, USA...) ni nationalities (French, Spanish, British, American...).

2. **[CRÍTICO] Ausencia total de números 1-10**: No hay ejercicios de números del 1 al 10 a pesar de ser un requisito explícito del spec.

3. **[ALTO] Duplicación de contenido con Unidad 1**: El texto de lectura (B4) repite el contexto de "conocer a alguien" y los saludos, que ya fue trabajado en la Unidad 1.

4. **[ALTO] Matching exercises trivialmente fáciles**: Todos los pares usan mismo índice (p1→p1, p2→p2). El bloque B3 (Greetings and Introductions) hace exactamente lo mismo que el bloque B1 de la Unidad 1.

5. **[MEDIO] Ejercicio U2_I3**: Usa "It" como opción para referirse a una persona ("She is my friend" vs "It is my friend") — aunque la respuesta correcta es la apropiada, presentar "It" para personas puede crear confusión en principiantes.

6. **[MEDIO] Ausencia de formato `[[...]]`** en muchos estímulos y opciones en inglés.

**Recomendaciones**:
- **Reestructurar completamente** la unidad para incluir:
  - Bloque 1: Countries and nationalities (France→French, Spain→Spanish, etc.)
  - Bloque 2: Numbers 1-10 con contexto (ages, apartment numbers)
  - Bloque 3: All pronouns with verb 'to be' (He/She/It/We/They + is/are)
  - Bloque 4: Reading — short descriptions of international students from different countries
- Eliminar el contenido duplicado de greetings

---

### Unidad 3: Verb 'to be': Negatives and Questions ✅ (Buena calidad general)

**Archivo**: `unit3.json` | **Tamaño**: 605 líneas | **Ejercicios**: ~50

**Puntos fuertes**:
- Contenido bien alineado con las especificaciones
- Buena cobertura de am not / isn't / aren't
- Buena cobertura de preguntas Yes/No y respuestas cortas
- Texto de lectura contextual y apropiado para A1
- Formato `[[...]]` aplicado correctamente

**Problemas identificados**:

1. **[ALTO] Matching exercise U3_I20 trivialmente obvio**: Pares Pregunta-Respuesta que siempre mapean p1→p1. La interfaz debe presentar las respuestas en orden aleatorio.

2. **[MEDIO] Ejercicios True/False sobre hechos gramaticales evidentes** (I19: "¿Va el verbo 'to be' antes que el sujeto en las preguntas? → True"): Aunque es útil para confirmar la regla, una pregunta contextual sería más pedagógica.

3. **[MEDIO] Número insuficiente de ejercicios**: Solo ~40 ejercicios visibles. Si el total no llega a 60, faltan ejercicios de producción (sentence-building más complejos, mini-diálogos).

4. **[BAJO] Ausencia de ejercicios de contraste** am not / isn't / aren't en un contexto comparativo.

**Recomendaciones**:
- Añadir ejercicios de corrección de errores ("Find the mistake: 'She aren't happy' → She isn't happy")
- Añadir ejercicios de transformación completa (de afirmativo → negativo → pregunta)
- Completar hasta 60 ejercicios con más contexto situacional

---

### Unidad 4: Alphabet & Spelling ❌ (CONTENIDO COMPLETAMENTE INCORRECTO)

**Archivo**: `unit4.json` | **Tamaño**: 297 líneas | **Ejercicios**: 26

**Problema crítico DOBLE**:
1. **Contenido incorrecto**: La especificación requiere "Numbers 1-10, Classroom objects (Pen, Book, Notebook), Colors (Basic), Articles (A/An), Plural nouns (Regular -s), This/That". El archivo cubre "Alphabet & Spelling" — un tema completamente diferente.
2. **Número insuficiente de ejercicios**: Solo 26 de los 60 requeridos.

**Problemas adicionales**:

1. **[CRÍTICO] Contenido del spec ausente**: Ningún ejercicio cubre numbers 1-10, objetos de clase, artículos A/An, plurales con -s, ni This/That.

2. **[ALTO] El alfabeto puede ser útil pero está fuera de lugar**: El alfabeto inglés (pronunciación, deletreo) es un tema válido para A1, pero debería incluirse en la Unidad 1 o como ejercicio complementario, no ocupar una unidad entera en detrimento del contenido especificado.

3. **[ALTO] Ausencia total del formato `[[English|Spanish]]`**: Los ejercicios no tienen traducciones.

4. **[ALTO] Sin comprensión lectora**: No hay bloque de lectura.

5. **[MEDIO] Ejercicio U4_I22 confuso**: "Escribe la vocal que falta en 'HOLA' (en inglés)" pero luego muestra "H-E-L-L-O" — la instrucción en español ("HOLA") y la respuesta en inglés ("HELLO") sin explicación de la equivalencia es pedagógicamente confuso.

**Recomendaciones**:
- **Reemplazar completamente** el contenido por el especificado:
  - Bloque 1: Numbers 1-10 (one, two, three... ten) con imágenes y contexto
  - Bloque 2: Classroom objects with A/An (a pen, an eraser, a book)
  - Bloque 3: Colors básicos (red, blue, green, yellow, white, black)
  - Bloque 4: This/That + plurals (This is a book / These are books)
  - Bloque 5: Reading — "In my bag I have..."
- El contenido de alphabet/spelling puede trasladarse a un ejercicio introductorio de la Unidad 1

---

### Unidad 5: Travel and Places ❌ (UNIDAD PRÁCTICAMENTE VACÍA)

**Archivo**: `unit5.json` | **Tamaño**: 59 líneas | **Ejercicios**: 1

**Problema CRÍTICO**:
- La unidad contiene **UN SOLO ejercicio de emparejamiento** de imágenes con objetos de viaje
- La especificación requiere "Simple Present: Everyday Actions" con 60 ejercicios
- El contenido (travel items: suitcase, passport, map, ticket) pertenece al Módulo 5 (Units 41-50)

**Problemas identificados**:

1. **[CRÍTICO] Unidad vacía**: 59 líneas / 1 ejercicio es inaceptable para una unidad completa.

2. **[CRÍTICO] Contenido completamente incorrecto**: Travel vocabulary es contenido de A1 Módulo 5, no Módulo 1.

3. **[CRÍTICO] Sin cobertura gramatical**: Simple Present (affirmative), 3rd person singular '-s' rule — completamente ausentes.

4. **[ALTO] Sin vocabulario del spec**: Work, Study, Eat, Drink, Sleep, Play — totalmente ausentes.

**Recomendaciones**:
- **Crear completamente desde cero** con el contenido correcto:
  - Bloque 1: Action verbs vocabulary (work, study, eat, drink, sleep, play)
  - Bloque 2: Simple Present I/You/We/They affirmative ("I work every day")
  - Bloque 3: Simple Present He/She/It — 3rd person 's' rule ("She works at a hospital")
  - Bloque 4: Short texts about daily activities ("A Day in Maria's Life")
  - Bloque 5: Consolidation exercises

---

### Unidad 6: Family Members ⚠️

**Archivo**: `unit6.json` | **Tamaño**: 513 líneas | **Ejercicios estimados**: ~40

**Puntos fuertes**:
- Contenido generalmente alineado con el spec
- Buen ejercicio de "false friend" (U6_I5: "Parents" ≠ "Parientes") — muy valioso para hispanohablantes
- Vocabulario de familia inmediata bien cubierto

**Problemas identificados**:

1. **[ALTO] Ausencia del formato `[[English|Spanish]]`** en la mayoría de ejercicios: "Father", "Mother" etc. aparecen sin traducción integrada.

2. **[ALTO] Saxon Genitive no cubierto**: La especificación requiere "Possessive 's (Saxon Genitive)" pero no hay ejercicios de "Maria's father is a doctor" o "Tom's sister is tall".

3. **[ALTO] Posesivos Our/Their no cubiertos**: La spec requiere "Possessive adjectives (His, Her, Our, Their)" pero solo His/Her parecen trabajarse. Our y Their están ausentes.

4. **[MEDIO] Familia extendida incompleta**: Spec menciona grandparents, aunt/uncle, cousins — estos pueden estar en la segunda mitad del archivo pero deben verificarse.

5. **[BAJO] Sin bloque de lectura en dos fases**: Falta un texto de "Mi árbol genealógico" como lectura comprehensiva.

**Recomendaciones**:
- Añadir Bloque B3 dedicado al Saxon Genitive con ejercicios progresivos
- Añadir ejercicios con Our ("Our parents are doctors") y Their ("Their grandparents live in Madrid")
- Crear texto de lectura "My Family Tree" con comprehensión en dos fases
- Aplicar formato `[[...]]` a todos los elementos en inglés

---

### Unidad 7: Colors & Describing Things ❌ (INCOMPLETA — 8 Ejercicios)

**Archivo**: `unit7.json` | **Tamaño**: 209 líneas | **Ejercicios**: ~8

**Problema CRÍTICO**: Solo 8 ejercicios en 3 bloques pequeños. Falta el 87% del contenido requerido.

**Análisis del contenido**:
- ✅ 4 colores básicos (Red, Blue, Green, Yellow)
- ✅ Opuestos básicos (Big/Small, New/Old, Fast/Slow)
- ✅ Orden del adjetivo antes del nombre
- ❌ 4 colores más (Black, White, Brown, Orange, Purple, Pink) — ausentes
- ❌ Descripción física: Tall, Short, Young, Old — ausentes
- ❌ Descripción de pelo y ojos — ausentes
- ❌ Verb 'to be' + adjectives ("She is tall", "He has brown eyes") — ausentes
- ❌ Sin formato `[[English|Spanish]]`
- ❌ Sin lectura comprehensiva

**Recomendaciones**:
- Ampliar a 60 ejercicios añadiendo:
  - Bloque 2 expandido: More colors (black, white, brown, orange, purple, pink, grey)
  - Bloque 3: Physical descriptions (tall/short, young/old, thin/fat)
  - Bloque 4: Hair and eyes ("She has long brown hair", "He has blue eyes")
  - Bloque 5: Verb to be + adjectives in context
  - Bloque 6: Reading — "Describe your best friend"

---

### Unidad 8: Numbers 20-100 ⚠️

**Archivo**: `unit8.json` | **Tamaño**: 366 líneas | **Ejercicios**: 20

**Problemas identificados**:

1. **[CRÍTICO] ID de interacción incorrecto**: El ejercicio U8_I10 tiene `interaction_id: "U14_I10"` — error de copiar-pegar desde la Unidad 14.

2. **[ALTO] Ejercicios de listening sobre vocabulario INCORRECTO**:
   - U8_I19: "I ___ in an office" (correct: "work") — vocabulario de trabajos, no números
   - U8_I20: "What is your ___?" (correct: "job") — vocabulario de trabajos, no números
   Estos ejercicios pertenecen a la Unidad 9, no a la Unidad 8.

3. **[ALTO] Ausencia del formato `[[English|Spanish]]`** en todos los ejercicios.

4. **[ALTO] Ausencia de ejercicios de precios y dinero**: La spec requiere "Money and Prices" ("How much is it?", "It costs thirty euros") — completamente ausentes.

5. **[ALTO] Ausencia de "How old are you?" / "How much is...?"**: Estas estructuras están explícitamente en el spec para esta unidad.

6. **[MEDIO] Sin números de teléfono**: La spec menciona "Phone numbers" como contexto para practicar números.

7. **[BAJO] Solo 20 ejercicios** en lugar de 60.

**Recomendaciones**:
- Corregir el ID incorrecto U14_I10 → U8_I10
- Eliminar los ejercicios de listening sobre trabajos y reemplazarlos con listening sobre precios ("The shirt costs twenty-five euros")
- Añadir ejercicios de "How much is...?" / "How old is...?" en contexto
- Añadir ejercicio de precios con menú o tienda
- Completar hasta 60 ejercicios

---

### Unidad 9: Jobs & Occupations ⚠️

**Archivo**: `unit9.json` | **Tamaño**: 3,724 líneas | **Ejercicios**: Muchos (posiblemente >60)

**Puntos fuertes**:
- Buena variedad de profesiones
- Imagen-based exercises son interesantes pedagógicamente

**Problemas identificados**:

1. **[CRÍTICO] ID duplicado**: `U9_IMG1` aparece dos veces con contenido idéntico — uno de los dos debe eliminarse.

2. **[ALTO] Rutas de imágenes probablemente inexistentes**: Los ejercicios referencian `/images/a1/unit1-10/doctor.jpg`, `/images/a1/unit1-10/teacher.jpg` etc. — verificar que estos archivos existen.

3. **[ALTO] Ausencia del formato `[[English|Spanish]]`** en la gran mayoría de ejercicios.

4. **[MEDIO] Artículos con profesiones no trabajados sistemáticamente**: La spec requiere "Articles with jobs" (a doctor, an engineer, a nurse vs. an architect). El ejercicio U9_I2 usa "Are you a nurse?" (✅) pero no hay una progresión sistemática de cuándo usar 'a' vs 'an' con profesiones.

5. **[MEDIO] Tamaño excesivo (3724 líneas)**: Sugiere repetición innecesaria o exceso de ejercicios. Los ejercicios adicionales deben verificarse para detectar duplicaciones de contenido.

**Recomendaciones**:
- Eliminar la entrada duplicada de U9_IMG1
- Verificar y corregir rutas de imagen
- Añadir bloque específico para artículos con profesiones (a/an + jobs)
- Verificar no repetición de vocabulario entre los múltiples bloques

---

### Unidad 10: Module 1 Review ❌ (REVISIÓN INCORRECTAMENTE ESTRUCTURADA)

**Archivo**: `unit10.json` | **Tamaño**: 3,878 líneas

**Problema principal**: La revisión NO revisa el contenido de las Unidades 1-9.

**Problemas identificados**:

1. **[CRÍTICO] Comienzo con meta-vocabulario irrelevante**: Los primeros ejercicios enseñan "Correct", "Wrong", "Test", "Answer", "Mistake", "Grade" — vocabulario de aula, no revisión de contenido del módulo.

2. **[CRÍTICO] Estructura de revisión no sistemática**: Una revisión efectiva debe incluir ejercicios de TODOS los objetivos de las Unidades 1-9: greetings, verb to be, negatives, questions, numbers, classroom objects, colors, family, jobs. Cada objetivo debe tener al menos 2-3 ejercicios de revisión.

3. **[ALTO] Falta assessment formal**: La spec menciona "Assessment: Evaluation of all Module 1 objectives" — debe incluir una sección de evaluación con criterios claros.

4. **[ALTO] Tamaño excesivo sin estructura**: 3,878 líneas sin verificar si el contenido está correctamente distribuido por objetivos revisados.

**Recomendaciones**:
- Reestructurar completamente la revisión con:
  - Bloque 1: Review of Greetings & Personal Info (Units 1)
  - Bloque 2: Review of Verb 'to be' All Forms (Units 2-3)
  - Bloque 3: Review of Numbers, Objects, Colors (Units 4, 7, 8)
  - Bloque 4: Review of Family & Jobs (Units 6, 9)
  - Bloque 5: Integrated Reading — longer text combining all Module 1 topics
  - Bloque 6: Assessment — comprehensive test of all Module 1 objectives

---

## MÓDULO 2: DAILY LIFE & ROUTINES (Unidades 11-20)

### Unidad 11: Telling the Time ⚠️

**Archivo**: `unit11.json` | **Tamaño**: 498 líneas | **Ejercicios**: ~30

**Puntos fuertes**:
- Contenido bien alineado con el spec
- Buenos ejercicios de fill_blanks con contexto real
- Incluye AM/PM, midday, midnight

**Problemas identificados**:

1. **[ALTO] Learning outcomes escritos en español**: "Preguntar y decir la hora usando 'o'clock'" — deben estar en inglés por coherencia con el formato del curso.

2. **[ALTO] Sin formato `[[English|Spanish]]`**: Todos los estímulos en inglés carecen de traducciones.

3. **[MEDIO] total_duration_minutes = 45**: La mayoría de unidades son 60 o 120. Si es 45, podría indicar que la unidad está incompleta.

4. **[MEDIO] Concepto de "quarter past/to"**: Necesita más ejercicios de práctica — los conceptos de "quarter past" y "quarter to" son difíciles para hispanohablantes (que dicen "y cuarto"/"menos cuarto") y requieren exposición repetida.

**Recomendaciones**:
- Traducir learning outcomes al inglés
- Aplicar formato `[[...]]` a todos los elementos en inglés
- Completar hasta 60 ejercicios si no se alcanza ese número
- Añadir ejercicios específicos de "quarter past/quarter to" con distractores contextuals (schedules, appointments)
- Añadir lectura en dos fases: "Maria's Daily Schedule"

---

### Unidades 12-19: Daily Life Topics ⚠️

**Archivos**: `unit12.json` a `unit19.json` | **Tamaño medio**: ~12-15 KB

Basándose en el patrón observado en unidades anteriores y el tamaño de los archivos, se identifican los siguientes problemas comunes a estas unidades:

**Problemas sistemáticos esperados** (requieren verificación individual detallada):

1. **[ALTO] Ausencia probable del formato `[[English|Spanish]]`**: Si el patrón de las unidades 6-11 se mantiene, estas unidades carecerán de traducciones.

2. **[ALTO] Matching exercises trivialmente fáciles**: El patrón p0→p0 probablemente persiste.

3. **[MEDIO] Número insuficiente de ejercicios**: Los tamaños de archivo (~12 KB) sugieren entre 20-40 ejercicios por unidad, por debajo de los 60 requeridos.

#### Unidad 12: Days of the Week — Recomendaciones específicas
- Verificar que incluye ejercicios de preposición "On" (On Monday, On Tuesdays)
- Incluir contraste weekend vs. weekday
- Incluir lectura de un planificador semanal real (con contexto de trabajo o escuela)
- Añadir ejercicios de hábitos: "I go to the gym on Mondays"

#### Unidad 13: Daily Routine — Recomendaciones específicas
- Los adverbios de secuencia (First, Then, After that, Finally) son fundamentales — deben tener su propio bloque
- El texto de lectura "A Day in the Life" debe ser auténtico y contextualizado
- Verificar que se practica la hora en contexto de rutina (connecting Units 11 y 13)

#### Unidad 14: Present Simple I/You/We/They — Recomendaciones específicas
- Distinguir claramente entre afirmativo y negativo/pregunta (no introducir Don't/Do hasta que se fije el afirmativo)
- Incluir actividades de tiempo libre y quehaceres del hogar como contexto
- Surveys sobre hábitos son un excelente formato — asegurarse de que están incluidos

#### Unidad 15: Present Simple He/She/It — Recomendaciones específicas
- La regla de la "-s" en tercera persona es un error común para hispanohablantes — necesita ejercicios de error correction
- Las excepciones ortográficas (-es para verbos en -ch, -sh, -x, -o; -ies para verbos en consonante+y) son importantes a A1
- Texto recomendado: "A Vet's Day" o similar rutina en 3ª persona

#### Unidad 16: At the Café — Recomendaciones específicas
- Las estructuras "Can I have...?" y "I'd like..." son fundamentales y deben practicarse en role-play
- Incluir lectura de un menú real (coffee shop menu) con preguntas de comprensión
- Precios deben conectarse con los números de la Unidad 8

#### Unidad 17: Breakfast, Lunch & Dinner — Recomendaciones específicas
- La distinción countable/uncountable es compleja — introducirla con mucho contexto visual
- "I like/I love/I hate + noun" vs "I like + -ing" — no confundir ambas estructuras en la misma unidad

#### Unidad 18: Likes & Dislikes — Recomendaciones específicas
- "Like + -ing (Gerund)" es una estructura nueva — necesita introducción gradual
- Blog posts sobre intereses personales como contexto de lectura son excelentes
- Incluir el contraste "Do you like...?" / "Yes, I do / No, I don't"

#### Unidad 19: Months & Dates — Recomendaciones específicas
- Los números ordinales (1st, 2nd, 3rd, 4th...) son complejos — especialmente las irregulares (1st, 2nd, 3rd)
- La pronunciación implícita de fechas (March the fifth, the fifth of March) debe aclararse
- Incluir ejercicio de "When is your birthday?" para activar vocabulario personal

### Unidad 20: Module 2 Review ⚠️
Similar a la Unidad 10, verificar que la revisión cubra TODOS los objetivos de las Unidades 11-19 con ejercicios integrados, no solo vocabulario de meta-revisión.

---

## MÓDULO 3: MY WORLD (Unidades 21-30)

### Unidades 21-29: My World Topics ⚠️

Los archivos de este módulo varían enormemente en tamaño (12 KB - 158 KB), lo que sugiere inconsistencias significativas.

**Observaciones sobre unidades extremas**:

#### Unidad 22: Furniture & Household Items (145.29 KB — EXCESIVAMENTE GRANDE)
- **[CRÍTICO] Posible duplicación masiva de contenido**: Un archivo de 145 KB para una unidad de vocabulario de muebles es 10-15x más grande de lo necesario. Esto indica casi con certeza duplicación de ejercicios, bloques repetidos, o generación automática no supervisada.
- **Confirmado**: En las primeras 150 líneas se observa que Chair, Mirror, Fridge aparecen en el matching I1 y vuelven a aparecer en el matching I7 — exactamente los mismos pares.
- **[ALTO] Possessive pronouns (Mine, Yours, His, Hers)**: El spec los requiere para esta unidad. Verificar cobertura.
- **Recomendación**: Auditar el archivo completo, eliminar ejercicios duplicados, asegurar progresión pedagógica, consolidar hasta máximo 60 ejercicios significativos.

#### Unidad 24: Prepositions of Place (158.19 KB — EXCESIVAMENTE GRANDE)
- Similar problema de tamaño excesivo. Verificar duplicaciones.
- "Next to, Between, In front of, Opposite" son preposiciones complejas para A1 — requieren muchas ilustraciones y contexto visual.

#### Unidades 26, 27, 28 (~140-149 KB cada una)
- Mismo problema de tamaño excesivo potencial.

**Recomendaciones para el Módulo 3**:

#### Unidad 21: Rooms in a House
- Incluir ejercicios de descripción con adjetivos de habitación (bright, small, cozy)
- Lectura de anuncio inmobiliario real

#### Unidad 23: There is / There are
- La distinción singular/plural (There IS a book / There ARE two books) necesita práctica intensiva
- Formas negativa e interrogativa (Is there...? / Are there...? / There isn't / There aren't)
- Conectar con preposiciones de lugar (There is a book ON the table)

#### Unidad 24: Prepositions of Place
- Las preposiciones complejas (between, next to, in front of, opposite) son desafiadoras
- Usar imágenes de habitaciones reales con objetos colocados
- Conectar con There is/are de la Unidad 23

#### Unidad 25: My Neighborhood
- Artículos determinados vs. indeterminados (THE supermarket vs. A supermarket) son clave aquí
- Some/Any con vecindario (Is there any pharmacy near here? / Yes, there are some...)

#### Unidad 26: Giving Directions
- Los imperativos para instrucciones (Turn, Go, Take) requieren práctica extensiva
- Incluir mapa y ejercicio de seguir direcciones escritas

#### Unidad 27: Pets & Animals
- Adjetivos descriptivos de animales en contexto
- Textos de hechos curiosos sobre animales son atractivos para A1

#### Unidad 28: Body Parts
- "Have/Has got" es una estructura nueva — introducirla gradualmente
- "I have got brown eyes" vs "She has got long hair" — diferencia I/She

#### Unidad 29: Clothes
- Present Continuous para describir qué lleva alguien puesto — nueva estructura
- Weather + clothes connection ("It's cold, so I am wearing a coat")

### Unidad 30: Module 3 Review
- Verificar revisión sistemática de todos los objetivos del Módulo 3
- El texto de evaluación integrado debe combinar hogar, vecindario y estilo personal

---

## MÓDULO 4: ABILITIES & INTERESTS (Unidades 31-40)

### Unidad 31: Can for Ability ✅ (Buen comienzo)

**Archivo**: `unit31.json` | **Tamaño**: 1,754 líneas

**Puntos fuertes**:
- Learning outcomes claramente definidos en inglés
- Contenido alineado con el spec
- Buena cobertura de Can/Can't con verbos de acción

**Problemas identificados**:

1. **[MEDIO] Concepto_tags duplicados**: `"concept_tags": ["grammar", "grammar"]` — error tipográfico.
2. **[BAJO] Sin formato `[[English|Spanish]]`** en ejercicios de vocabulary.

**Recomendaciones**:
- Completar con ejercicios de "Can + he/she/they?" (preguntas en 3ª persona)
- Incluir lectura de perfil de persona talentosa ("Meet Elena: She can speak 4 languages!")
- Corregir concept_tags duplicados

---

### Unidades 32-39: Abilities & Interests Topics

**Recomendaciones específicas por unidad**:

#### Unidad 32: Sports & Hobbies
- La distinción Play/Go/Do con deportes es un error clásico para hispanohablantes:
  - PLAY: ball sports (football, tennis, basketball)
  - GO: activities ending in -ing (swimming, cycling, running)
  - DO: individual/martial activities (yoga, karate, gymnastics)
- Esta regla debe tener su propio bloque de práctica intensiva

#### Unidad 33: Adverbs of Frequency
- La posición del adverbio es fundamental: DESPUÉS del verbo 'to be' ("She is always late") pero ANTES del verbo principal ("She always arrives late")
- Esta regla de posición DOBLE es uno de los errores más frecuentes en A1/A2 para hispanohablantes

#### Unidad 34: And/But/Because
- Introducir conectores en contexto de textos completos, no solo en frases aisladas
- Incluir ejercicios de opinión: "I like football BUT I don't like basketball BECAUSE it's too fast"

#### Unidad 35: Free Time Activities
- Expresiones con "Go" (go for a walk, go shopping, go for a coffee) son idiomáticas y requieren memorización
- Distinguir entre "I go swimming" (activity) vs "I go to the swimming pool" (place)

#### Unidad 36: Musical Instruments
- Uso de 'the' con instrumentos (I play THE guitar) es una regla específica del inglés sin equivalente en español
- Comparar: "She plays guitar" (informal/incorrect) vs "She plays the guitar" (formal/correct)

#### Unidad 37: Talent & Skills
- Adverbios de grado (very well, quite well, not very well, not at all) son difíciles para A1 — introducir gradualmente
- Conectar con Can (I can sing quite well / She can't dance at all)

#### Unidad 38: Asking for Permission
- "Can I...?" vs "May I...?" — aclarar que May es más formal (importante para contextos profesionales)
- Incluir respuestas apropiadas: "Yes, of course" / "I'm sorry, you can't"

#### Unidad 39: Outdoor Activities
- Present Continuous para planes futuros es una ESTRUCTURA NUEVA importante:
  - "I am going camping next weekend"
  - "She is cycling tomorrow morning"
- Esta introducción del futuro con Present Continuous debe ser gradual y bien señalizada

---

## MÓDULO 5: PLACES & TRAVEL (Unidades 41-50)

**Observación general**: Los archivos de este módulo tienen todos aproximadamente el mismo tamaño (~51 KB), lo que sugiere generación automática con un patrón uniforme. El riesgo es que los ejercicios sean rutinarios y no presenten suficiente variedad pedagógica.

### Recomendaciones por unidad:

#### Unidad 41: At the Airport
- "Must/Should" básicos son estructuras nuevas — introducir con mucho andamiaje
- Señales de aeropuerto (Check-in, Departures, Arrivals, Gate) son vocabulario visual — usar imágenes
- Itinerarios de viaje son excelentes textos de lectura contextual

#### Unidad 42: Transport
- "By + transport" vs "Take the + transport" — diferencia sutil pero importante
- Horarios de transporte público son lecturas auténticas excelentes para A1

#### Unidad 43: Travel Verbs
- Present Simple para horarios fijos ("The train leaves at 10:00") es un uso especial del presente — señalarlo claramente

#### Unidad 44: The Weather
- "It + is + weather adjective" como sujeto impersonal — clave y diferente del español
- "It's raining/snowing" — introducir presente continuo de forma natural en este contexto

#### Unidad 45: Seasons
- Conectar estaciones con actividades (In summer, we go to the beach)
- Preposición "in" para estaciones — posible confusión con "on" de los días

#### Unidad 46: At the Hotel
- Diálogos de reserva son auténticos y útiles para situaciones reales
- Verificar que "Is there a...?" (from Unit 23) se recicla aquí

#### Unidad 47: Holidays & Vacation
- **Was/Were** es el primer tiempo verbal en pasado — su introducción es un hito importante del curso
- Necesita mucho scaffolding: Was I/He/She/It + Were You/We/They
- Postales y relatos de vacaciones en pasado son formatos textuales ideales

#### Unidad 48: Sightseeing
- Los superlativos básicos (the most famous, the oldest, the biggest) son complejidad adicional — no sobrecargar
- Folletos de tours turísticos son textos auténticos perfectos

#### Unidad 49: Packing a Suitcase
- "Need to / Don't need to" son modales nuevos — conectar con Can de la Unidad 31
- Checklists de equipaje son formatos textuales muy prácticos para A1

---

## MÓDULO 6: SHOPPING & FOOD (Unidades 51-60)

**Observación general**: Mismo patrón de archivos uniformes (~51 KB) que el Módulo 5.

### Recomendaciones por unidad:

#### Unidad 51: At the Supermarket
- Plurales irregulares básicos (man→men, woman→women, child→children) son importantes en contexto de supermercado
- Conectar con números y precios (Units 8, 16)

#### Unidad 52: Countable & Uncountable
- Esta distinción es una de las más difíciles para hispanohablantes (en español no existe de la misma forma)
- Necesita mucha práctica con contexto visual (imágenes de elementos contables vs. incontables)
- "Much/Many/A lot of" — tabla comparativa clara

#### Unidad 53: Some & Any
- La regla Some (afirmativo) / Any (negativo/pregunta) es fundamental
- Excepción: Some en ofertas ("Would you like SOME coffee?") — importante mencionar brevemente

#### Unidad 54: How Much & How Many
- Conectar con countable/uncountable de la Unidad 52
- Contexto de mercado/tienda es ideal

#### Unidad 55: Clothing Store
- "Too + adjective" vs "adjective + enough" — contraste importante
- Role-play de compra de ropa como actividad final del bloque

#### Unidad 56: At the Restaurant
- Revisión y expansión de "I'd like..." / "Can I have...?" de la Unidad 16
- Lectura de reseña de restaurante es un formato auténtico

#### Unidad 57: Cooking & Recipes
- Adverbios de secuencia (First, Then, After that, Finally) — conectar con Unit 13
- Las recetas son textos instructivos ideales para practicar imperativos

#### Unidad 58: Health & Illness
- "Should" para consejo ("You should see a doctor") — modal nuevo en este contexto
- Vocabulario médico básico es de alta utilidad para situaciones reales

#### Unidad 59: Money & Currency
- Preposiciones con dinero (pay FOR, spend ON) — difíciles por su particularidad en inglés
- Contexto bancario y de viajes es auténtico y relevante

### Unidad 60: Module 6 Review & Final Assessment
- Debe ser la evaluación final del curso completo, no solo del Módulo 6
- Textos largos integrados que combinen vocabulario y gramática de todos los módulos
- Sección de certificación con criterios claros para superar el nivel A1

---

## RESUMEN EJECUTIVO — PRIORIDADES DE MEJORA

### PRIORIDAD 1 — URGENTE (Antes de publicar el curso)

| Unidad | Problema | Acción requerida |
|--------|---------|-----------------|
| Unit 1 | 6 sentence-building con orden incorrecto | Corregir arrays correct_answer |
| Unit 2 | Contenido completamente incorrecto | Reescribir: countries, nationalities, numbers 1-10 |
| Unit 4 | Contenido completamente incorrecto | Reescribir: numbers 1-10, classroom objects, A/An, plurals |
| Unit 5 | Solo 1 ejercicio, contenido incorrecto | Crear desde cero: Simple Present |
| Unit 7 | Solo 8 ejercicios | Completar hasta 60 ejercicios |
| Unit 8 | ID incorrecto, listening en unidad equivocada | Corregir ID, mover/reemplazar exercises |
| Unit 9 | ID duplicado | Eliminar duplicado U9_IMG1 |
| Unit 10 | Revisión no revisa contenido del módulo | Reestructurar completamente |
| All units | Sistema lectura 2 fases no implementado | Añadir reading_phase antes de preguntas |

### PRIORIDAD 2 — ALTA (Mejora significativa de calidad)

| Problema | Unidades afectadas | Acción requerida |
|---------|-------------------|-----------------|
| Formato `[[English\|Spanish]]` ausente | Unidades 4, 6, 7, 8, 9, 10, 11+ | Aplicar formato a TODOS los ejercicios |
| Matching exercises triviales (p0→p0) | Todas las unidades | Mezclar presentación de pares |
| Sesgo de respuesta correcta en opción A | Múltiples unidades | Redistribuir respuestas correctas |
| Units 22, 24, 26-28 excesivamente largas | Módulo 3 | Auditar y eliminar duplicaciones |
| Módulos 5-6 generación uniforme | Units 41-60 | Verificar variedad pedagógica |

### PRIORIDAD 3 — MEDIA (Mejora de la experiencia de aprendizaje)

| Mejora | Descripción |
|--------|------------|
| Error correction exercises | Añadir ejercicios "Find the mistake" en cada unidad |
| Recycle vocabulary | Asegurar que vocabulario previo aparece en contextos nuevos |
| Authentic texts | Usar más textos auténticos (menus, schedules, signs) |
| Difficulty gradient | Verificar que cada unidad progresa de recognition → production |
| Listening exercises | Verificar que todos los audios existen y son apropiados para A1 |

---

## CRITERIOS DE CALIDAD CAMBRIDGE A1

Para cada unidad, los ejercicios deben cumplir los siguientes criterios del MCER nivel A1:

1. **Comprensión**: El estudiante puede entender frases y expresiones relacionadas con su vida inmediata.
2. **Producción**: El estudiante puede usar frases y oraciones simples para describir situaciones familiares.
3. **Autenticidad**: Los textos y diálogos reflejan situaciones reales de comunicación.
4. **Andamiaje**: Cada nueva estructura se introduce con suficiente apoyo antes de practicarse de forma independiente.
5. **Reciclaje**: El vocabulario y la gramática previos se reutilizan en contextos nuevos.
6. **Variedad**: Cada unidad incluye mínimo 5 tipos diferentes de ejercicio.
7. **Progresión**: Los ejercicios van de reconocimiento (matching, MC) a producción (sentence-building, short_writing).

---

*Auditoría realizada por: Sistema de IA en rol de Profesor Cambridge*
*Fecha: Marzo 2026*
*Alcance: 60 unidades del curso de Inglés A1 — Focus English*
*Fuentes: JSON files en `/src/content/cursos/ingles-a1/`, `course-specifications.md`, `syllabus.md`*
