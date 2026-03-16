# B2 Unidades 41-50 — Syllabus detallado

Referencia para crear las unidades 41-50 del curso B2. Basado en:
- `src/lib/b2-units/curriculum.ts` (mapeo oficial)
- `src/lib/b2-official-syllabus.ts` (gramática y temas CEFR/Cambridge)
- `docs/curso-b2-planificacion.md` (planificación general)

---

## Estructura por unidad

Cada unidad tiene **6 lecciones** con **18 ejercicios** cada una:
1. **Gramática** — Tema gramatical de la unidad
2. **Vocabulario** — Tema léxico
3. **Lectura** — Comprensión lectora
4. **Escucha** — Comprensión auditiva
5. **Speaking** — Expresión oral
6. **Escritura** — Essay, article, report, etc.

**Formato de ejercicios:** `[[English|Spanish]]` para traducciones. IDs: `b2-u{N}-l{L}-{tipo}{n}` (ej: `b2-u41-l1-g1`).

---

## Unidad 41 — Education Systems & Learning

| Campo | Contenido |
|-------|------------|
| **Gramática** | Gerunds and Infinitives (gerunds-infinitives) |
| **Tema** | education-learning |
| **Skills** | grammar, vocabulary, reading |
| **UNIT_TITLE** | Education Systems & Learning |

**Gramática de referencia (b2-official-syllabus):**
- Verb + gerund: enjoy, avoid, consider, finish, mind
- Verb + infinitive: decide, expect, hope, refuse, seem
- Verb + object + infinitive: ask sb to do, want sb to do, allow sb to do
- Verb + gerund OR infinitive (different meaning): remember, forget, stop, try

**Vocabulario:** Education, teaching methods, online learning, university, exams, curriculum, academic achievement

---

## Unidad 42 — Scientific Discoveries

| Campo | Contenido |
|-------|------------|
| **Gramática** | Passive Reporting Structures (passive-reporting) |
| **Tema** | science-research |
| **Skills** | reading, vocabulary, grammar |
| **UNIT_TITLE** | Scientific Discoveries |

**Gramática de referencia:**
- It is said/believed/thought that...
- The company is said to be planning...
- He is thought to have left the country

**Vocabulario:** Scientific method, discoveries, experiments, innovation, medical research, space exploration

---

## Unidad 43 — University Life & Academics

| Campo | Contenido |
|-------|------------|
| **Gramática** | Modals of Obligation and Advice (modal-obligation) |
| **Tema** | education-learning |
| **Skills** | listening, vocabulary, speaking |
| **UNIT_TITLE** | University Life & Academics |

**Gramática de referencia:**
- Should, ought to, must, have to, need to
- You should see a doctor. We must finish this report. You don't have to come.

**Vocabulario:** University life, lectures, assignments, campus, academic writing, seminars

---

## Unidad 44 — Medical Research & Health

| Campo | Contenido |
|-------|------------|
| **Gramática** | Future Perfect (future-perfect) |
| **Tema** | science-research |
| **Skills** | reading, vocabulary, grammar |
| **UNIT_TITLE** | Medical Research & Health |

**Gramática de referencia:**
- By next year, I will have graduated from university.
- She will have finished the project by Friday.

**Vocabulario:** Medical research, clinical trials, healthcare, treatments, breakthroughs, epidemiology

---

## Unidad 45 — Space Exploration

| Campo | Contenido |
|-------|------------|
| **Gramática** | Modal Verbs for Deduction (modal-deduction) |
| **Tema** | science-research |
| **Skills** | listening, vocabulary, grammar |
| **UNIT_TITLE** | Space Exploration |

**Gramática de referencia:**
- Must, might, could, can't para especulación y deducción
- She must be tired. He might have forgotten. That can't be true!

**Vocabulario:** Space, astronomy, missions, satellites, astronauts, exploration, technology

---

## Unidad 46 — Psychology & Human Behavior

| Campo | Contenido |
|-------|------------|
| **Gramática** | Mixed Conditionals (mixed-conditionals) |
| **Tema** | personal-relationships |
| **Skills** | reading, vocabulary, speaking |
| **UNIT_TITLE** | Psychology & Human Behavior |

**Gramática de referencia:**
- If I had studied harder, I would be a doctor now.
- If she were more organized, she wouldn't have missed the deadline.

**Vocabulario:** Psychology, behavior, cognition, emotions, mental health, personality, studies

---

## Unidad 47 — Academic Writing & Reports

| Campo | Contenido |
|-------|------------|
| **Gramática** | Cleft Sentences (cleft-sentences) |
| **Tema** | education-learning |
| **Skills** | writing, grammar, vocabulary |
| **UNIT_TITLE** | Academic Writing & Reports |

**Gramática de referencia:**
- What I need is a good night's sleep.
- It was John who broke the window.
- What surprised me was his reaction.

**Vocabulario:** Academic writing, reports, essays, structure, argumentation, formal register

---

## Unidad 48 — Innovation in Teaching

| Campo | Contenido |
|-------|------------|
| **Gramática** | Reporting Verbs (reporting-verbs) |
| **Tema** | education-learning |
| **Skills** | listening, vocabulary, speaking |
| **UNIT_TITLE** | Innovation in Teaching |

**Gramática de referencia:**
- Suggest, recommend, insist, urge
- She suggested going to the cinema. He insisted that we stay.

**Vocabulario:** Teaching methods, innovation, EdTech, pedagogy, student engagement, assessment

---

## Unidad 49 — Sociology & Cultural Shifts

| Campo | Contenido |
|-------|------------|
| **Gramática** | Inversion for Emphasis (inversion) |
| **Tema** | history-society |
| **Skills** | reading, vocabulary, grammar |
| **UNIT_TITLE** | Sociology & Cultural Shifts |

**Gramática de referencia:**
- Never have I seen such a beautiful sunset.
- Only then did I realize my mistake.
- Not only is she talented, but she's also hardworking.

**Vocabulario:** Sociology, culture, society, trends, demographics, social change, identity

---

## Unidad 50 — Repaso 36–39 (Module 5 Review)

| Campo | Contenido |
|-------|------------|
| **Gramática** | Repaso: gerunds-infinitives, modal-obligation, cleft-sentences |
| **Tema** | education-learning |
| **Skills** | grammar, vocabulary, reading, listening, writing, speaking |
| **UNIT_TITLE** | Repaso 41–49 |

**Contenido:** Ejercicios mixtos que repasan las unidades 41-49.

---

## Patrón de archivos por unidad

```
src/lib/course/b2/
├── unit-41.ts
├── unit-41-lessons-index.ts
├── unit-41-lesson-1-grammar.ts
├── unit-41-lesson-2-vocabulary.ts
├── unit-41-lesson-3-reading.ts
├── unit-41-lesson-4-listening.ts
├── unit-41-lesson-5-speaking.ts
└── unit-41-lesson-6-writing.ts
```

Cada lección exporta un array `UNIT_{N}_LESSON_{L}_{TIPO}` con 18 ejercicios tipo `Exercise`.

---

## Ejemplo de ejercicio (formato)

```ts
{
  id: 'b2-u41-l1-g1',
  type: 'fill-blank',
  level: 'B2',
  topic: 'Education',
  difficulty: 'medium',
  content: {
    title: '[[Grammar|Gramática]]: [[Gerunds and Infinitives|Gerundio e infinitivo]]',
    instructions: 'Elige la forma correcta (gerundio o infinitivo).',
    questions: [{
      question: '[[She|Ella]] ____ [[studying|estudiar]] [[when|cuando]] [[I called|llamé]].',
      options: ['[[enjoys|disfruta]]', '[[enjoy|disfruta]]', '[[enjoying|disfrutando]]'],
      correctAnswer: 'enjoys',
      explanation: '[[Enjoy + gerund|Enjoy + gerundio]].'
    }]
  },
  topicName: 'Grammar'
}
```
