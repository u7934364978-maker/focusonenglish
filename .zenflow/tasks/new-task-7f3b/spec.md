# Technical Specification: Curso de Inglés C1

## Contexto Técnico

### Naturaleza del Proyecto
Este proyecto es un **diseño curricular** (no un proyecto de software). El "artefacto final" es un conjunto de documentos estructurados que conforman la guía del curso C1, incluyendo:
- Programa del curso (syllabus)
- Fichas detalladas por unidad
- Material de referencia para el instructor

### Formato de Entrega
Los documentos se generarán en **Markdown** (`.md`) por su legibilidad, portabilidad y compatibilidad con plataformas de aprendizaje online (LMS, GitHub, Notion, etc.).

### Estructura de Archivos de Salida

```
course-c1-english/
├── README.md                        # Índice general del curso
├── syllabus.md                      # Programa oficial (CEFR C1 alineado)
├── units/
│   ├── unit-01-identity-society.md
│   ├── unit-02-language-communication.md
│   ├── unit-03-science-technology.md
│   ├── unit-04-natural-world.md
│   ├── unit-05-arts-culture.md
│   ├── unit-06-work-economy.md
│   ├── unit-07-health-mind.md
│   ├── unit-08-global-issues.md
│   ├── unit-09-media-information.md
│   └── unit-10-future-beyond.md
├── assessment/
│   └── evaluation-criteria.md       # Rúbricas y criterios de evaluación
└── reference/
    ├── grammar-scope-sequence.md    # Secuencia gramatical progresiva
    └── vocabulary-framework.md      # Marco de vocabulario académico C1
```

---

## Modelo de Datos: Estructura de Unidad

Cada unidad sigue este esquema estandarizado:

```
Unidad {N}: {Título en Inglés} ({Traducción})
├── Metadata
│   ├── Número de unidad
│   ├── Tema central
│   ├── Horas estimadas: 8-12 horas
│   └── Objetivos CEFR C1 cubiertos
│
├── Objetivos de Aprendizaje (Can-do statements CEFR)
│
├── Secuencia Pedagógica (7 fases)
│   ├── 1. Warm-up
│   ├── 2. Reading / Listening (texto/audio principal)
│   ├── 3. Language Focus (gramática)
│   ├── 4. Vocabulary Building
│   ├── 5. Writing Task
│   ├── 6. Speaking Activity
│   └── 7. Review & Assessment
│
├── Gramática Clave
│   ├── Estructura objetivo
│   ├── Forma y uso
│   └── Ejemplos en contexto
│
├── Vocabulario Clave
│   ├── Léxico temático (~30-40 palabras/expresiones)
│   ├── Colocaciones
│   ├── Phrasal verbs (si aplica)
│   └── Expresiones idiomáticas
│
├── Tipos de Texto
│   ├── Reading: tipo(s) de texto trabajados
│   └── Writing: producto escrito de la unidad
│
├── Actividades Sugeridas
│   ├── Reading tasks
│   ├── Listening tasks
│   ├── Grammar exercises
│   ├── Vocabulary exercises
│   ├── Writing task (con criterios)
│   └── Speaking task (con criterios)
│
└── Evaluación de la Unidad
    ├── Checklist de can-do statements
    └── Criterios de éxito
```

---

## Enfoque de Implementación

### Progresión Gramatical del Curso

La gramática avanza de forma espiral — estructuras se introducen, practican y consolidan a lo largo del curso:

| Unidad | Estructura Gramatical Principal |
|--------|--------------------------------|
| 1 | Perfect aspect con matices · Modal verbs (deducción, probabilidad, crítica) |
| 2 | Passive voice (formas avanzadas) · Reported speech (estructuras complejas) |
| 3 | Mixed conditionals · Conditional inversion (*Had I known...*) |
| 4 | Advanced relative clauses · Noun phrases complejas · Reduced clauses |
| 5 | Cleft sentences · Inversion for emphasis (*Never have I...*) |
| 6 | Advanced future forms · Wish / If only |
| 7 | Nominal clauses · Comment clauses · Subjunctive (usos formales) |
| 8 | Participle clauses · Absolute constructions · Ellipsis & substitution |
| 9 | Hedging language · Advanced discourse markers |
| 10 | Consolidación y variedad estilística de todas las estructuras |

### Progresión de Vocabulary

El vocabulario se construye por campos semánticos temáticos y se refuerza con:
- **Academic Word List (AWL)** – integrada en todas las unidades, con mayor concentración en U6-U10
- **Colocaciones** – mínimo 5 colocaciones clave por unidad
- **Phrasal verbs avanzados** – contextualizados en tema de la unidad
- **Formación de palabras** – prefijos, sufijos y derivación integrados en U3, U7 y U10

### Progresión de Habilidades

```
Unidades 1-3  → Activación y expansión de competencias B2 → C1
Unidades 4-6  → Consolidación de competencias C1 centrales
Unidades 7-9  → Refinamiento de precisión, matiz y registro
Unidad 10     → Síntesis, autonomía y preparación para examen
```

---

## Fases de Entrega

### Fase 1: Syllabus y Estructura General
- `README.md` – Índice y descripción del curso
- `syllabus.md` – Programa oficial con objetivos CEFR C1 por competencia

### Fase 2: Fichas Detalladas por Unidad (Unidades 1–5)
- Una ficha completa por unidad (U1–U5)
- Cada ficha incluye todas las secciones del modelo de datos definido arriba
- Actividades y ejemplos concretos por disciplina

### Fase 3: Fichas Detalladas por Unidad (Unidades 6–10)
- Una ficha completa por unidad (U6–U10)
- Mayor enfoque en precisión, registro y preparación para examen

### Fase 4: Material de Referencia y Evaluación
- `grammar-scope-sequence.md` – Tabla de secuencia gramatical
- `vocabulary-framework.md` – Marco de vocabulario con listas temáticas
- `evaluation-criteria.md` – Rúbricas por habilidad (CEFR C1)

---

## Criterios de Calidad (Verificación)

Cada unidad producida se verificará contra:

1. **Alineación CEFR C1** – Los objetivos usan descriptores can-do del CEFR nivel C1
2. **Completitud** – Las 7 fases pedagógicas están presentes
3. **Progresión** – La gramática y vocabulario son coherentes con la secuencia del curso
4. **Variedad de habilidades** – Las 4 macrohabilidades (R/W/L/S) están cubiertas
5. **Coherencia temática** – El vocabulario, textos y actividades giran en torno al tema central
6. **Aplicabilidad** – Las actividades son realizables sin material exclusivo externo

---

## Notas de Diseño

- **Sin dependencias de software**: El curso es agnóstico de plataforma; los documentos Markdown funcionan en cualquier LMS o herramienta editorial.
- **Extensibilidad**: La estructura modular permite añadir unidades, adaptar niveles (B2+/C2) o crear versiones especializadas (Business English, Academic English).
- **Compatibilidad con exámenes**: El diseño cubre los task-types de Cambridge C1 Advanced (CAE), IELTS 7.0+ y TOEFL iBT 100+.
