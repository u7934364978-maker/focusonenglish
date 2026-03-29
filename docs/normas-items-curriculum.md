# Normas de ítems y curriculum — Focus English

Réplica en el repositorio del documento del skill **cambridge-senior-english-teacher** (`NORMAS_ITEMS.md`). Al cambiar reglas, actualizar **ambos** archivos para mantener una sola verdad.

Documento de referencia compartido con el criterio **cambridge-senior-english-teacher** y usable por **senior-programatica-ia** para validación, prompts y generación asistida.  
**Versión:** 1.0 · **Idioma del documento:** español (metalingüística).

---

## 1. Propósito y alcance

- Definir **qué es un ítem aceptable** en la plataforma (calidad pedagógica y formato).
- Delimitar **qué decide el contenido curado** frente a **qué puede hacer la IA** (solo soporte textual bajo estas normas).
- Alinear contenido en **TypeScript** (`src/lib/course/...`) con el **renderer** y futuras **validaciones automáticas**.

---

## 2. Jerarquía: verdad pedagógica vs IA

| Fuente de verdad | Qué cubre |
|------------------|-----------|
| **Datos del ítem en código** | `correctAnswer`, clave de opción, `transcript` oficial, `expectedResponse` para TTS/oral. |
| **Reglas en código** | Comparación normalizada, índices MC/TF, límites de longitud. |
| **IA (si se usa)** | Redacción o variación de **explicaciones**, **pistas**, **feedback largo**, **variaciones** de contexto **sin cambiar** la clave ni contradecir el ítem. |

**Regla de oro:** En ejercicios **cerrados** (MC, TF, hueco con opciones, orden fijo), el sistema debe poder marcar acierto/error **sin depender** del criterio del modelo.

---

## 3. Metadatos obligatorios (por ejercicio)

Cada objeto `Exercise` debe permitir trazabilidad y filtrado adaptativo:

- **`id`**: estable, único en el catálogo (convención por curso: `a1-u1-l3-reading-2`, `rec-b2-u1-l4-listening-1`, etc.).
- **`type`**: uno de los tipos soportados por `ExerciseRenderer` y rutas API.
- **`level`**: `A1` … `C2` (coherente con el lenguaje del ítem).
- **`topic`**: etiqueta técnica (slug o tema corto en inglés, p. ej. `Personal Info`, `Management`).
- **`topicName`**: skill de lección en UI (`Grammar`, `Vocabulary`, `Reading`, `Listening`, `Speaking`, `Writing`).
- **`difficulty`**: `easy` | `medium` | `hard` cuando aplique.
- **`content.title`** e **`content.instructions`**: visibles al alumno; deben ser claros y acordes al nivel.

---

## 4. Formato bilingüe `[[English|Español]]`

### 4.1 Objetivo

- El **inglés** (primera parte) es la **lengua objeto** mostrada por defecto.
- El **español** (segunda parte) es **ayuda metalingüística**, no sustituto del input en L2 cuando el objetivo sea comprensión o producción en inglés.

### 4.2 Cuándo usar bloque completo vs palabra a palabra

- **Preferir un bloque** cuando la unidad de significado en inglés **no coincide** con la del español (ej. *How old is María?* ↔ *¿Cuántos años tiene María?*):

  `[[How old is María?|¿Cuántos años tiene María?]]`

- **Palabra a palabra** solo cuando la equivalencia es **directa y no engaña** (ej. `[[Hello|Hola]]`, `[[from|de]]` en contextos claros).

### 4.3 Prohibido o desaconsejado

- No mapear **`am`** con **`tengo`** en contextos de edad sin una nota explícita: en inglés *I am X years old*; en español *Tengo X años*. Mejor bloque: `[[I am twenty-five years old.|Tengo veinticinco años.]]`.
- No trocear preguntas fijas (*How much*, *How old*, *How many*) de forma que la **primera columna** deje de ser inglés natural si se concatenan segmentos de forma incorrecta. Si hay duda → **bloque entero en inglés** + traducción en el segundo miembro.

---

## 5. Campos por tipo de ejercicio (mínimos editoriales)

### 5.1 Opción múltiple / verdadero-falso / fill-blank con opciones

- `question` (o equivalente): enunciado claro; inglés natural en la columna EN.
- `options`: array coherente; **sin solapamiento** de significado entre opciones correctas.
- `correctAnswer`: índice numérico, literal `True`/`False`, o string que el renderer resuelva de forma **única**.
- **`explanation`**: obligatorio; ver plantilla en §6.

### 5.2 Reading / Listening (texto + preguntas)

- **Un mismo** `transcript` (o audio ficha) por bloque de comprensión; preguntas que **solo** se puedan responder con evidencia del texto/audio.
- Preguntas **inferibles** solo si el nivel (B1+) lo justifica; en A1 priorizar **explícito** en el texto.

### 5.3 Speaking (`pronunciation`)

- **`expectedResponse`**: texto **plano en inglés** para TTS y evaluación (sin `[[ ]]`).
- **`targetText`**: puede llevar `[[en|es]]` para UI; debe alinearse semánticamente con `expectedResponse`.
- Instrucciones al alumno: en español si el producto lo define así; modelo de producción en inglés correcto.

### 5.4 Sentence-building / drag-drop

- `correctSentence` y piezas: inglés **natural** al unirse; no forzar gloss que rompa el orden mental del alumno sin motivo.

### 5.5 Writing / open-answer

- Criterio de corrección documentado (`exampleAnswer` o rúbrica); si hay IA, debe **acotarse** al marco (longitud, no inventar enunciado).

---

## 6. Plantilla de `explanation` (post-respuesta)

Tras enviar la respuesta, el texto debe **enseñar**, no solo etiquetar.

**Estructura recomendada (1–4 frases cortas):**

1. **Resultado**: Correcto / Incorrecto (puede venir de la UI, no hace falta repetir en exceso).
2. **Regla o patrón**: nombre la estructura (ej. *with «you» we use «are»*).
3. **Anclaje al ítem**: cite la forma correcta o el fragmento del texto si aplica.
4. **Opcional**: contraste ES/EN o falso amigo **solo si** aporta al objetivo.

**Evitar:** “Estudia más”, “Repasa la unidad” sin decir **qué** corregir.

**IA:** Solo puede generar texto **dentro** de esta plantilla y del **mismo** `correctAnswer` aprobado en el ítem; no debe introducir otra clave como correcta.

---

## 7. Coherencia de producto (metadatos visibles)

- **`UNIT_TITLE`** y títulos de lección: **un criterio** por curso o por línea de producto (ej. todo en español para el alumno hispanohablante, o todo en inglés); no mezclar sin decisión explícita.
- Nombres propios: decidir **María** vs *Maria* en inglés y ser **consistentes** en la unidad.

---

## 8. Lista de comprobación extendida (publicación)

- [ ] Objetivo didáctico claro (implícito o en comentario de commit/PR).
- [ ] Respuesta correcta **única** en cerrados.
- [ ] Distractores plausibles, sin doble interpretación no intencionada.
- [ ] Nivel CEFR honesto en `level` y en el lenguaje del ítem.
- [ ] `explanation` con regla + anclaje (§6).
- [ ] `[[EN|ES]]` revisado (§4); bloques enteros donde haya calco peligroso.
- [ ] Listening/speaking alineados con TTS (`expectedResponse` limpio).
- [ ] `id` estable y convención del curso respetada.
- [ ] Accesibilidad: longitud razonable; comillas y apóstrofos escapados/consistentes en TS.

---

## 9. Qué puede y no puede hacer la IA (para senior-programatica-ia)

**Puede (con prompt + validación):**

- Redactar o acortar **explicaciones** según §6 a partir del `correctAnswer` y del enunciado.
- Proponer **variaciones** de contexto en generación de ejercicios **nuevos**, siempre pasando **esquema** y revisión muestral.
- Resumir errores del alumno para **selección** de ítems (tags), no para cambiar la clave.

**No puede (sin intervención humana o reglas fuertes):**

- Ser la **única** fuente de `correctAnswer` en cerrados.
- Contradecir el `transcript` o el ítem curado.
- Inventar datos personales, normas oficiales Cambridge inexistentes o “certificación” falsa.

---

## 10. Conjunto oro y regresión (recomendado)

- Mantener una lista **fija** de ítems por nivel/tipo (p. ej. 20–50) con respuesta y explicación **aprobada**.
- Cualquier cambio de generador, prompt o modelo debe comprobar que esos ítems **siguen** validando contra el esquema y que las explicaciones cacheadas **no contradicen** la clave.

---

## 11. Revisiones de este documento

- Subir **versión** (1.1, 1.2…) al cambiar reglas que afecten a validación o prompts.
- Quien implemente IA debe **leer** la versión vigente antes de tocar rutas de generación/explicación.

---

## 12. Implementación Zod (repositorio)

- **Archivo:** `src/lib/validation/course-exercise-schema.ts`
- **API helpers:** `src/lib/validation/course-exercise-api.ts` — `sanitizeForCourseExerciseEnvelope`, `validateExercisePayloadForApi`, `validateExerciseListForApi` (respuestas JSON incluyen `validation: { ok, errors }` donde aplica). Motor adaptativo: `src/lib/validation/interaction-api.ts` — `validateInteractionForApi` sobre `InteractionSchema`.
- **Rutas API enlazadas:** `POST /api/generate-exercises`, `GET /api/game-content/first-10-lessons`, `GET /api/course/b1/[unitId]` (envelope `courseExerciseSchema`); `POST /api/adaptive/next` (`InteractionSchema` vía `validateInteractionForApi` — motor adaptativo).
- **`courseExerciseSchema`:** metadatos §3 (`id`, `type`, `level`, `topic`, `topicName`, `difficulty`, `content` objeto, `transcript`, `audioUrl`, …); `type` como `string` para no bloquear tipos nuevos del catálogo.
- **`exerciseQuestionSchema` / `exerciseContentSchema`:** forma alineada con `ExerciseRenderer` (preguntas, opciones, `correctAnswer`, campos de listening/reading/writing).
- **`courseExerciseSchemaNormsStrict`:** reglas extra — `explanation` mínima en preguntas **cerradas** (MC/TF con opciones); `pronunciation` con `expectedResponse` sin `[[EN|ES]]` y con fallback documentado si falta texto plano.
- **Helpers:** `parseCourseExercise`, `parseCourseExerciseNormsStrict`, `getExerciseContent` (paridad con `exercise.content || exercise` del renderer).
- **Scripts:** `npm run validate-course-exercises-zod` (ts-node). Tras las comprobaciones heurísticas, también se ejecuta vía `scripts/zod-runner.mjs` desde `validate-exercises.mjs`, `validate-exercise-types.mjs` y `validate-c2-structure.mjs`.
- **Tests:** `src/lib/validation/__tests__/course-exercise-schema.test.ts`
- **Nota:** JSON de cursos en `src/content/cursos` sigue validándose con `CourseEngine` (`scripts/validate-courses.mjs`), no con este envelope.

Actualizar este apartado si se cambian nombres de export o umbrales (p. ej. longitud mínima de `explanation`).

---

*Fin del documento de normas v1.0.*
