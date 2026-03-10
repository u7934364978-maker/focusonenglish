# Curso B1 — Objetivos de aprendizaje y diseño de ejercicios

Este documento define **qué aprende el alumno en cada unidad** y **cómo diseñar ejercicios** para garantizar ese aprendizaje.

---

## 1. PRINCIPIOS DE DISEÑO DE EJERCICIOS

### 1.1 Regla de un solo foco
- Cada ejercicio debe evaluar **un solo objetivo** (una regla gramatical o un conjunto de palabras relacionadas).
- Evitar mezclar estructuras no vistas: si la unidad es Present Perfect Continuous, no incluir Third Conditional.

### 1.2 Progresión dentro de la lección
| Orden | Tipo | Función |
|-------|------|---------|
| 1–5 | Reconocimiento | El alumno identifica la forma correcta entre opciones |
| 6–10 | Elección | El alumno elige la opción correcta en contexto |
| 11–15 | Producción/ aplicación | El alumno completa frases, ordena palabras o produce en contexto |

### 1.3 Qué evitar
- Opciones que no sean plausibles (distractores demasiado obvios).
- Frases ambiguas donde varias respuestas sean correctas.
- Vocabulario por encima del nivel B1 (salvo en la lección de vocabulario de esa unidad).
- Ejercicios gramaticales que dependan de vocabulario muy específico.

### 1.4 Respuestas aceptables
- Definir `acceptableAnswers` cuando haya varias formas correctas (ej: "have to" / "must" en contextos de obligación).
- En writing: criterios claros (longitud, estructuras obligatorias).

---

## 2. PLANTILLA POR TIPO DE EJERCICIO

### 2.1 Gramática — fill-blank
- **Objetivo:** Completar la frase con la forma gramatical correcta.
- **Estructura:** `question` con hueco, `options` con 3–4 opciones (incluir 1–2 distractores plausibles).
- **Obligatorio:** `explanation` que cite la regla aplicada.
- **Ejemplo:** "She ____ (study) for two hours" → "has been studying" (Present Perfect Continuous).

### 2.2 Gramática — multiple-choice
- **Objetivo:** Elegir la frase correcta o la forma correcta.
- **Estructura:** `question` + `options` (índice correcto en `correctAnswer`).
- **Obligatorio:** `explanation` con la regla.

### 2.3 Gramática — sentence-building
- **Objetivo:** Ordenar palabras para formar una oración correcta.
- **Estructura:** `content.words` o `content.items` con las palabras desordenadas.
- **Obligatorio:** `explanation` que justifique el orden.

### 2.4 Vocabulario — multiple-choice
- **Objetivo:** Reconocer o producir la palabra correcta según definición o contexto.
- **Estructura:** `question` (definición o frase con hueco) + `options`.
- **Opcional:** `explanation` con la traducción o uso.

### 2.5 Lectura — reading
- **Objetivo:** Comprender un texto y responder preguntas.
- **Estructura:** `transcript` (texto) + `content.questions` (array de preguntas).
- **Regla:** Las preguntas deben poder responderse **solo con el texto** (no con conocimiento previo).
- **Tipos:** Preguntas de información, inferencia, verdadero/falso.

### 2.6 Escucha — listening
- **Objetivo:** Comprender un audio (o texto) y responder preguntas.
- **Estructura:** `transcript` (texto/guion) + `content.questions`.
- **Regla:** Mismo criterio que lectura: respuestas solo con el contenido.

### 2.7 Escritura — writing
- **Objetivo:** Producir texto usando la gramática y vocabulario de la unidad.
- **Estructura:** `instructions` + `expressionHint` (opcional) + `targetLength`.
- **Regla:** La consigna debe exigir explícitamente el uso de la estructura de la unidad.

---

## 3. OBJETIVOS POR UNIDAD (Módulo 1: Unidades 1–10)

### Unidad 1 — Repaso A2 → B1
| # | Objetivo | Cómo verificar |
|---|----------|----------------|
| O1.1 | Repasar estructuras clave de A2 (Present Perfect, comparativos, modales) | fill-blank, multiple-choice |
| O1.2 | Usar vocabulario de información personal y sentimientos | multiple-choice, reading |
| O1.3 | Preparar transición a B1 (frases más largas, contexto) | reading, writing |

---

### Unidad 2 — Present Perfect Continuous
| # | Objetivo | Cómo verificar |
|---|----------|----------------|
| O2.1 | Formar Present Perfect Continuous: have/has + been + -ing | fill-blank |
| O2.2 | Usar for/since con Present Perfect Continuous (duración hasta ahora) | fill-blank, multiple-choice |
| O2.3 | Diferenciar Present Perfect Continuous (duración) vs Simple (resultado) | multiple-choice |
| O2.4 | Aplicar en contexto de educación (study, work, learn, etc.) | vocabulary, reading, writing |

---

### Unidad 3 — Past Perfect
| # | Objetivo | Cómo verificar |
|---|----------|----------------|
| O3.1 | Formar Past Perfect: had + past participle | fill-blank |
| O3.2 | Usar Past Perfect para secuencia de acciones (acción anterior a otra en el pasado) | fill-blank, multiple-choice |
| O3.3 | Combinar Past Simple y Past Perfect en narrativas | sentence-building, reading |

---

### Unidad 4 — Past Simple vs Present Perfect
| # | Objetivo | Cómo verificar |
|---|----------|----------------|
| O4.1 | Elegir Past Simple cuando hay tiempo definido (yesterday, in 2020) | fill-blank, multiple-choice |
| O4.2 | Elegir Present Perfect cuando hay conexión con el presente (yet, never, ever) | fill-blank, multiple-choice |
| O4.3 | Usar expresiones de tiempo correctas (ago, for, since, last week) | multiple-choice |

---

### Unidad 5 — Repaso 1–4
| # | Objetivo | Cómo verificar |
|---|----------|----------------|
| O5.1 | Integrar Present Perfect Continuous, Past Perfect, contraste Past/PP | fill-blank, multiple-choice |
| O5.2 | Repasar vocabulario de unidades 1–4 | multiple-choice, reading |

---

### Unidades 6–10 (resumen)
| Unidad | Objetivos gramaticales | Objetivos vocabulario |
|--------|------------------------|------------------------|
| 6 | Will vs going to vs present continuous; elegir forma futura correcta | Travel & transport |
| 7 | Was/were going to (planes no realizados) | Plans & intentions |
| 8 | Modal verbs of deduction (must, might, can't) | Personal feelings |
| 9 | Used to, be used to, get used to | Habits & lifestyle |
| 10 | Repaso 6–9 | — |

---

## 4. EJEMPLO COMPLETO: UNIDAD 2 — Present Perfect Continuous

### 4.1 Objetivos de la unidad
1. **O2.1** Formar have/has been + -ing correctamente.
2. **O2.2** Usar for + duración y since + punto en el tiempo.
3. **O2.3** Diferenciar Present Perfect Continuous (énfasis en duración) vs Present Perfect Simple (énfasis en resultado).
4. **O2.4** Aplicar en contexto de educación (study, work, learn, teach, etc.).

### 4.2 Mapeo objetivo → ejercicios

| Objetivo | Lección | Tipo ejercicio | Ejemplo |
|----------|---------|---------------|---------|
| O2.1 | L1 Grammar | fill-blank | "She ____ (study) for two hours" → has been studying |
| O2.1 | L1 Grammar | fill-blank | "They ____ (work) on the project" → have been working |
| O2.2 | L1 Grammar | fill-blank | "I've been learning English ____ three years" → for |
| O2.2 | L1 Grammar | fill-blank | "He's been teaching ____ 2019" → since |
| O2.3 | L1 Grammar | multiple-choice | "Her hands are dirty. She ___" → has been gardening (no "has gardened") |
| O2.4 | L2 Vocabulary | multiple-choice | Palabras: degree, course, subject, exam, etc. |
| O2.4 | L3 Reading | reading | Texto sobre estudiante que lleva estudiando X años |
| O2.4 | L4 Listening | listening | Audio sobre alguien que lleva trabajando en un proyecto |
| O2.4 | L6 Writing | writing | "Escribe sobre cuánto tiempo llevas estudiando algo" |

### 4.3 Ejemplo de ejercicios L1 Grammar (primeros 5)

```typescript
// Ejercicio 1 — O2.1: Formar have/has been + -ing
{
  id: 'b1-u2-l1-g1',
  type: 'fill-blank',
  level: 'B1',
  topic: 'Present Perfect Continuous',
  content: {
    questions: [{
      question: '[[She|Ella]] ____ ____ ____ [[studying|estudiando]] [[for|para]] [[two|dos]] [[hours|horas]].',
      options: ['[[has been|ha estado]]', '[[have been|he estado]]', '[[is been|está estado]]'],
      correctAnswer: 'has been',
      explanation: '[[Present Perfect Continuous|Presente perfecto continuo]]: [[has/have + been + -ing|has/have + been + -ing]]. [[She|Ella]] → [[has been|ha estado]].',
    }],
  },
}

// Ejercicio 2 — O2.1: Formar con they
{
  question: '[[They|Ellos]] ____ ____ ____ [[working|trabajando]] [[on|en]] [[the|el]] [[project|proyecto]] [[all|todo]] [[day|día]].',
  options: ['[[has been|ha estado]]', '[[have been|han estado]]', '[[are been|están estado]]'],
  correctAnswer: 'have been',
}

// Ejercicio 3 — O2.2: for + duración
{
  question: '[[I|Yo]] [[have|he]] [[been|estado]] [[learning|aprendiendo]] [[English|inglés]] ____ [[three|tres]] [[years|años]].',
  options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
  correctAnswer: 'for',
  explanation: '[[For|Durante]] + [[duration|duración]] ([[three years|tres años]], [[two hours|dos horas]]).',
}

// Ejercicio 4 — O2.2: since + punto
{
  question: '[[He|Él]] [[has|ha]] [[been|estado]] [[teaching|enseñando]] ____ [[2019|2019]].',
  options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
  correctAnswer: 'since',
  explanation: '[[Since|Desde]] + [[point|punto]] [[in|en]] [[time|tiempo]] ([[2019|2019]], [[Monday|lunes]]).',
}

// Ejercicio 5 — O2.3: Continuous vs Simple (duración vs resultado)
{
  type: 'multiple-choice',
  question: '[[Her|Sus]] [[hands|manos]] [[are|están]] [[dirty|sucias]]. [[She|Ella]] ____.',
  options: [
    '[[has been gardening|ha estado jardineando]]',
    '[[has gardened|ha jardinado]]',
    '[[gardens|jardinea]]'],
  correctAnswer: 0,
  explanation: '[[Present Perfect Continuous|Presente perfecto continuo]]: [[emphasis|énfasis]] [[on|en]] [[duration|duración]] [[and|y]] [[result|resultado]] [[visible|visible]] ([[dirty hands|manos sucias]]).',
}
```

### 4.4 Checklist antes de publicar una unidad
- [ ] Cada objetivo tiene al menos 2 ejercicios que lo evalúan.
- [ ] Las opciones de fill-blank/multiple-choice son plausibles (distractores reales).
- [ ] Todas las explicaciones citan la regla aplicada.
- [ ] El vocabulario de L2 aparece en L3 (reading) y L4 (listening).
- [ ] La consigna de L6 (writing) exige usar la gramática de la unidad.
- [ ] No hay estructuras gramaticales de unidades posteriores.

---

## 5. OBJETIVOS MÓDULOS 2–6 (resumen)

| Módulo | Unidades | Objetivos gramaticales clave |
|--------|----------|------------------------------|
| 2 | 11–20 | Condicionales 1–3, passive, reported speech |
| 3 | 21–30 | Gerund/infinitive, phrasal verbs, quantifiers, articles |
| 4 | 31–40 | Relative clauses, question tags, -ed/-ing, so/such, clauses |
| 5 | 41–50 | Preposiciones, had better, would rather, need |
| 6 | 51–60 | Repaso integrado, preparación examen |

---

## 6. REFERENCIA RÁPIDA: TIPOS DE EJERCICIO SOPORTADOS

| Tipo | Uso principal | Campos clave |
|------|---------------|--------------|
| `fill-blank` | Gramática, vocabulario | options, correctAnswer, acceptableAnswers? |
| `multiple-choice` | Gramática, vocabulario, lectura, escucha | options, correctAnswer (índice) |
| `sentence-building` | Gramática (orden) | content.words o items |
| `true-false` | Lectura, escucha | correctAnswer: 'True' \| 'False' |
| `reading` | Comprensión lectora | transcript, content.questions |
| `listening` | Comprensión auditiva | transcript, content.questions |
| `writing` | Producción escrita | instructions, expressionHint?, targetLength? |

---

## 7. APÉNDICE: OBJETIVOS POR UNIDAD (TODAS)

| U | Gramática | Objetivos principales |
|---|-----------|------------------------|
| 1 | Repaso A2 | O1: Repasar PP, comparativos, modales. O2: Vocab personal/feelings. |
| 2 | Present Perfect Continuous | O1: have/has been + -ing. O2: for/since. O3: Continuous vs Simple. |
| 3 | Past Perfect | O1: had + pp. O2: Secuencia pasado (acción anterior). O3: Narrativas. |
| 4 | Past vs Present Perfect | O1: Past Simple con tiempo definido. O2: PP con conexión presente. |
| 5 | Repaso 1–4 | Integrar objetivos O1–O4. |
| 6 | Future: will/going to/continuous | O1: Elegir forma correcta. O2: Planes vs predicciones vs arreglos. |
| 7 | Was/were going to | O1: Planes no realizados. O2: Contraste con going to. |
| 8 | Modal verbs of deduction | O1: must/might/can't para deducir. O2: Certeza vs posibilidad. |
| 9 | Used to / be used to / get used to | O1: Hábitos pasados. O2: Adaptación. O3: Diferenciar los tres. |
| 10 | Repaso 6–9 | Integrar objetivos O6–O9. |
| 11 | First conditional + time clauses | O1: If + present, will. O2: When, as soon as, until, before, after. |
| 12 | Second conditional | O1: If + past, would. O2: Situaciones irreales/hipotéticas. |
| 13 | First vs second conditional | O1: Elegir condicional correcto según realidad. |
| 14 | Third conditional | O1: If + had done, would have done. O2: Regret, situaciones pasadas. |
| 15 | Repaso 11–14 | Integrar condicionales. |
| 16 | Passive (present & past) | O1: be + past participle. O2: Cuándo usar pasiva. |
| 17 | Modal passive | O1: must/can/should be done. |
| 18 | Reported speech (statements) | O1: say/tell + that. O2: Cambios de tiempo (present→past). |
| 19 | Reported speech (questions/commands) | O1: ask + wh-/if. O2: tell/ask + to infinitive. |
| 20 | Repaso 16–19 | Integrar passive y reported. |
| 21–24 | Gerund/infinitive, phrasal verbs | O: Elegir forma correcta; phrasal verbs en contexto. |
| 25 | Repaso 21–24 | Integrar. |
| 26–29 | Quantifiers, both/either/neither, articles, reflexives | O: Usar correctamente en contexto. |
| 30 | Repaso 26–29 | Integrar. |
| 31–34 | Relative clauses, question tags, -ed/-ing | O: Definir vs no definir; tags; bored vs boring. |
| 35 | Repaso 31–34 | Integrar. |
| 36–39 | So/such, compound adj, clauses contrast/purpose/reason | O: Intensificar; explicar contraste/propósito/razón. |
| 40 | Repaso 36–39 | Integrar. |
| 41–44 | Verb+prep, adj+prep, during/for/while, for/since/from | O: Preposiciones dependientes; tiempo. |
| 45 | Repaso 41–44 | Integrar. |
| 46–49 | Had better, would rather, phrasal verbs 3, need | O: Consejos; preferencias; necesidad. |
| 50 | Repaso 46–49 | Integrar. |
| 51–54 | Review condicionales, passive, modales, tiempos | Repaso integrado. |
| 55 | Repaso 51–54 | Consolidación. |
| 56–60 | Mixed practice, exam prep, final review | Aplicación y cierre. |
