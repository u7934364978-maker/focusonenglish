# 🏗️ Sentence Builder - Constructor de Frases Interactivo

## 📖 DESCRIPCIÓN GENERAL

El **Sentence Builder** es un nuevo tipo de ejercicio innovador que enseña a los estudiantes a formar frases en inglés de manera **intuitiva, visual e interactiva** mediante **drag-and-drop** (arrastrar y soltar).

---

## 🎯 OBJETIVO PEDAGÓGICO

### **Problema que Resuelve:**
- Los estudiantes saben palabras individuales pero no cómo ordenarlas
- La gramática tradicional es abstracta y difícil de visualizar
- Los estudiantes necesitan práctica para internalizar el orden de palabras del inglés

### **Solución:**
- Aprendizaje **kinestésico** (arrastrar físicamente las palabras)
- Feedback **visual inmediato** con código de colores
- Evaluación **inteligente con IA** que acepta variaciones correctas

---

## ✨ CARACTERÍSTICAS PRINCIPALES

### 1. **Sistema de Drag & Drop Intuitivo**
- ✅ Arrastra palabras desde el área de disponibles a tu frase
- ✅ Reordena palabras dentro de la frase arrastrando
- ✅ Haz clic en palabras para agregarlas/quitarlas rápidamente
- ✅ Zonas de drop visualizadas para insertar entre palabras

### 2. **Color-Coding por Tipo de Palabra**
Cada tipo de palabra tiene un color único para ayudar a identificarla:

| Tipo | Color | Ejemplo |
|------|-------|---------|
| **Subject** (Sujeto) | 🔵 Azul | I, you, he, she, John |
| **Verb** (Verbo) | 🔴 Rojo | go, have, study, is |
| **Object** (Objeto) | 🟢 Verde | book, coffee, homework |
| **Adjective** (Adjetivo) | 🟣 Púrpura | beautiful, big, happy |
| **Adverb** (Adverbio) | 🩷 Rosa | quickly, very, often |
| **Preposition** (Preposición) | 🟠 Naranja | in, on, at, with |
| **Article** (Artículo) | 🟡 Amarillo | a, an, the |
| **Auxiliary** (Auxiliar) | 🟦 Índigo | do, have, will |
| **Conjunction** (Conjunción) | 🟢 Turquesa | and, but, because |
| **Complement** (Complemento) | 🔵 Cian | yesterday, at home |
| **Pronoun** (Pronombre) | 🟣 Violeta | he, she, it, them |
| **Determiner** (Determinante) | 🟠 Ámbar | this, that, some, many |

### 3. **Hints Educativos**
Cada palabra puede tener:
- **Hint:** Explicación de su función ("Auxiliary for questions")
- **Translation:** Traducción al español ("¿Dónde?")
- **Tooltip:** Se muestra al pasar el mouse

### 4. **Tips Contextuales**
Antes de cada ejercicio, se muestran tips como:
- "English sentences follow: Subject + Verb + Object"
- "Questions with 'do' follow: Question word + do + subject + verb"
- "Don't forget the question mark!"

### 5. **Evaluación Inteligente con IA**
- ✅ **Nivel 1:** Match exacto (100 puntos)
- ✅ **Nivel 2:** Variaciones aceptables pre-definidas (95 puntos)
- ✅ **Nivel 3:** Evaluación con GPT-4o-mini (0-100 puntos)
  - Evalúa orden de palabras
  - Evalúa precisión gramatical
  - Evalúa si se preserva el significado
  - Proporciona feedback específico

### 6. **Feedback Visual Detallado**
Después de enviar:
- 🎉 **Correcto:** Badge verde con score y mensaje de felicitación
- 🤔 **Parcialmente correcto:** Badge naranja con sugerencias
- ❌ **Incorrecto:** Explicación + mostrar respuesta correcta

---

## 🎓 NIVELES DE DIFICULTAD

### **Beginner (A1-A2)** 🌱
- Frases simples: "I am a student"
- Presente simple
- Preguntas básicas: "Where do you live?"
- **Características:**
  - ✅ Hints de colores activados
  - ✅ Traducciones visibles
  - ✅ 3-5 palabras por frase
  - ✅ 5 puntos por ejercicio

**Ejemplo:**
```
Prompt: "Form a sentence: 'I am a student'"
Words: [I (subject)] [am (verb)] [a (article)] [student (object)]
```

### **Intermediate (B1-B2)** 📈
- Frases complejas: "I have been studying English for two years"
- Condicionales, pasiva, Present Perfect Continuous
- **Características:**
  - ✅ Hints de colores activados
  - ⚠️ Traducciones opcionales
  - ✅ 6-10 palabras por frase
  - ✅ 10 puntos por ejercicio

**Ejemplo:**
```
Prompt: "Form a conditional: 'If I had more time, I would travel more'"
Words: [If] [I] [had] [more] [time] [,] [I] [would] [travel] [more]
```

### **Advanced (C1-C2)** 🎓
- Estructuras complejas: inversión, cláusulas relativas
- "Not only did she pass, but she also got the highest score"
- **Características:**
  - ❌ Sin hints de colores (más desafiante)
  - ❌ Sin traducciones
  - ✅ 10-15 palabras por frase
  - ✅ 15 puntos por ejercicio

**Ejemplo:**
```
Prompt: "Form with inversion: 'Not only did she pass the exam, but she also got the highest score'"
Words: [Not] [only] [did] [she] [pass] [the] [exam] [,] [but] [she] [also] [got] [the] [highest] [score]
```

---

## 💡 FLUJO DE USO

### **1. Inicio del Ejercicio**
```
┌─────────────────────────────────────┐
│  🎯 Build this sentence:            │
│  "Where do you live?"               │
│  📚 Focus: Present Simple Questions │
└─────────────────────────────────────┘
```

### **2. Área de Construcción (Vacía)**
```
┌─────────────────────────────────────┐
│  📝 Your Sentence:                  │
│  ┌─────────────────────────────┐   │
│  │ Drag words here or click    │   │
│  │ them below                   │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### **3. Palabras Disponibles (Mezcladas)**
```
┌─────────────────────────────────────┐
│  🔤 Available Words:                │
│  ┌───────┬────┬─────┬──────┬───┐  │
│  │ live  │ do │ you │Where │ ? │  │
│  │🔴 verb│🟦 │🔵   │🩷    │🔵 │  │
│  └───────┴────┴─────┴──────┴───┘  │
└─────────────────────────────────────┘
```

### **4. Construcción Parcial**
```
┌─────────────────────────────────────┐
│  📝 Your Sentence:                  │
│  ┌────────┬────┬─────┐             │
│  │ Where  │ do │ you │             │
│  │🩷 adv  │🟦  │🔵   │             │
│  └────────┴────┴─────┘             │
│                                     │
│  Preview: "Where do you"            │
└─────────────────────────────────────┘
```

### **5. Construcción Completa**
```
┌─────────────────────────────────────┐
│  📝 Your Sentence:                  │
│  ┌────────┬────┬─────┬──────┬───┐ │
│  │ Where  │ do │ you │ live │ ? │ │
│  │🩷 adv  │🟦  │🔵   │🔴 v  │🔵 │ │
│  └────────┴────┴─────┴──────┴───┘ │
│                                     │
│  Preview: "Where do you live?"      │
└─────────────────────────────────────┘

     [Check Answer]  [🔄 Reset]
```

### **6. Feedback (Correcto)**
```
┌─────────────────────────────────────┐
│  🎉 Correct!                        │
│  Score: 100/100                     │
│                                     │
│  Perfect! Your sentence is exactly  │
│  correct! You followed the word     │
│  order for questions perfectly:     │
│  Question word + auxiliary + subj-  │
│  ect + main verb                    │
└─────────────────────────────────────┘
```

### **7. Feedback (Parcialmente Correcto)**
```
┌─────────────────────────────────────┐
│  🤔 Not Quite Right                 │
│  Score: 65/100                      │
│                                     │
│  Your answer: "Where you do live?"  │
│                                     │
│  You have the right words, but the  │
│  order isn't correct. In questions  │
│  with 'do', the auxiliary comes     │
│  BEFORE the subject.                │
│                                     │
│  💡 Suggestions:                    │
│  • Place 'do' right after 'Where'   │
│  • Subject 'you' comes next         │
│  • Main verb 'live' goes last       │
│                                     │
│  ✏️ Correct Answer:                 │
│  "Where do you live?"               │
└─────────────────────────────────────┘
```

---

## 🔧 IMPLEMENTACIÓN TÉCNICA

### **Archivos Creados:**

1. **`lib/course-data-b2.ts`** (actualizado)
   - Tipos TypeScript para `SentenceBuildingExercise`
   - Interfaces `Word`, `SentenceBuildingChallenge`
   - Tipos de palabras (`WordType`)

2. **`components/course/SentenceBuilder.tsx`** (nuevo)
   - Componente React con drag & drop
   - Gestión de estado con hooks
   - Evaluación local + API
   - 15.7KB de código

3. **`app/api/evaluate-sentence-building/route.ts`** (nuevo)
   - Endpoint de evaluación con GPT-4o-mini
   - Análisis de orden de palabras
   - Análisis gramatical
   - Feedback específico

4. **`lib/sentence-building-exercises.ts`** (nuevo)
   - 10 ejercicios de ejemplo
   - 3 niveles (Beginner, Intermediate, Advanced)
   - Datos listos para usar

5. **`components/course/LessonViewer.tsx`** (actualizado)
   - Case para `'sentence-building'`
   - Integración con el sistema de lecciones

---

## 📊 ESTRUCTURA DE DATOS

### **SentenceBuildingChallenge**
```typescript
{
  id: 'sb-1',
  prompt: 'Form a sentence: "I am a student"',
  targetSentence: 'I am a student',
  words: [
    { id: 'w1', text: 'I', type: 'subject', hint: 'The speaker', translation: 'Yo' },
    { id: 'w2', text: 'am', type: 'verb', hint: 'To be (1st person)', translation: 'soy' },
    { id: 'w3', text: 'a', type: 'article', hint: 'Indefinite article', translation: 'un/una' },
    { id: 'w4', text: 'student', type: 'object', hint: 'Person who studies', translation: 'estudiante' }
  ],
  difficulty: 'easy',
  grammarFocus: 'Present Simple - To Be',
  tips: [
    'English sentences follow: Subject + Verb + Object',
    '"I" always takes "am" as the verb'
  ],
  points: 5,
  acceptableVariations: []
}
```

---

## 🎨 DISEÑO UI/UX

### **Paleta de Colores:**
- **Violet/Purple:** Color principal del ejercicio (enfoque en construcción)
- **12 colores:** Uno por cada tipo de palabra
- **Verde:** Feedback correcto
- **Naranja:** Feedback parcial
- **Rojo:** Errores específicos

### **Interacciones:**
1. **Drag & Drop:**
   - Cursor cambia a "grab" al arrastrar
   - Drop zones visibles
   - Animación de scale al hover

2. **Click:**
   - Alternativa al drag & drop
   - Más rápido para móviles
   - Añade/quita palabras con un click

3. **Hover:**
   - Tooltips con hints
   - Highlight de drop zones

### **Responsive:**
- ✅ Desktop: Drag & drop completo
- ✅ Tablet: Drag & drop + touch
- ✅ Mobile: Prioriza clicks, drag opcional

---

## 📈 BENEFICIOS PEDAGÓGICOS

### **1. Aprendizaje Activo**
- El estudiante **construye** activamente en lugar de solo leer
- Aprendizaje kinestésico (movimiento físico)

### **2. Feedback Inmediato**
- No espera corrección del profesor
- Puede intentar múltiples veces
- Aprende de sus errores inmediatamente

### **3. Visualización de Gramática**
- Los colores hacen visible la estructura gramatical
- Patrones se vuelven obvios visualmente
- Ej: Subject (azul) + Verb (rojo) + Object (verde)

### **4. Reducción de Ansiedad**
- No hay "página en blanco"
- Todas las palabras ya están dadas
- Solo necesita ordenarlas

### **5. Progresión Natural**
- De simple (3 palabras) a complejo (15 palabras)
- De con hints a sin hints
- De con traducciones a sin traducciones

---

## 💰 COSTOS

### **Por Evaluación:**
- **Exact match:** €0 (sin API call)
- **Acceptable variation:** €0 (sin API call)
- **AI evaluation:** ~€0.003-0.005 (GPT-4o-mini)

### **Estimación Mensual:**
- 100 estudiantes × 20 ejercicios/mes = 2,000 evaluaciones
- ~30% requieren IA (rest exact match): 600 evaluaciones
- Costo: **€1.80-3.00/mes**

**Conclusión:** Muy económico debido a:
- Uso de GPT-4o-mini (no GPT-4o)
- Muchos matches exactos no requieren IA
- Variaciones aceptadas pre-definidas

---

## 🚀 PRÓXIMOS PASOS

### **Implementado ✅**
1. ✅ Estructura de datos completa
2. ✅ Componente drag & drop funcional
3. ✅ Sistema de colores por tipo de palabra
4. ✅ Evaluación con IA
5. ✅ 10 ejercicios de ejemplo (3 niveles)
6. ✅ Integración en LessonViewer
7. ✅ Feedback visual detallado

### **Pendiente ⏳**
1. ⏳ Testing exhaustivo con usuarios reales
2. ⏳ Optimización de drag & drop en móviles
3. ⏳ Dashboard de profesor para ver estadísticas
4. ⏳ Expandir a 50+ ejercicios por nivel
5. ⏳ Modo "practice" sin puntos
6. ⏳ Achievements por completar series

---

## 📖 GUÍA DE USO PARA PROFESORES

### **Cómo Añadir Nuevos Ejercicios:**

```typescript
const newChallenge: SentenceBuildingChallenge = {
  id: 'sb-custom-1',
  prompt: 'Tu instrucción aquí',
  targetSentence: 'La frase correcta',
  words: createWords([
    ['word1', 'subject', 'hint opcional', 'traducción'],
    ['word2', 'verb', 'hint opcional', 'traducción'],
    // ... más palabras
  ]),
  difficulty: 'easy' | 'medium' | 'hard',
  grammarFocus: 'El punto gramatical',
  tips: [
    'Tip 1',
    'Tip 2'
  ],
  points: 5, // 5 easy, 10 medium, 15 hard
  acceptableVariations: [] // Variaciones aceptadas
};
```

### **Mejores Prácticas:**
1. **Mantén las frases relevantes** al nivel del estudiante
2. **Usa palabras del vocabulario** ya aprendido
3. **Proporciona hints claros** pero no obviosos
4. **Incluye tips** que enseñen la regla gramatical
5. **Mezcla bien las palabras** para que no sea obvio

---

## 🎯 CONCLUSIÓN

El **Sentence Builder** es una herramienta pedagógica innovadora que:

✅ **Hace la gramática visual e intuitiva**  
✅ **Proporciona práctica activa y kinestésica**  
✅ **Da feedback inmediato e inteligente**  
✅ **Progresa naturalmente de simple a complejo**  
✅ **Es divertido y reduce la ansiedad**  
✅ **Muy económico de operar** (€1-3/mes para 100 estudiantes)

**Estado:** ✅ LISTO PARA USAR

**Próximo paso:** Integrar en las lecciones del curso B2 y recopilar feedback de estudiantes.

---

**Documentación creada por:** Claude AI  
**Fecha:** 2026-01-17  
**Versión:** 1.0.0
