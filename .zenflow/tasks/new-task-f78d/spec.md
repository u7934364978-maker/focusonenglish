# Especificación Técnica: Ampliación de Ejercicios Curso B2

## Complejidad
**HARD** - Tarea compleja que requiere:
- Generación de 262 ejercicios nuevos
- Mantener coherencia con el contenido existente
- Asegurar diversidad de tipos de ejercicios
- Actualizar estructura de datos masivamente

## Estado Actual

### Análisis de Ejercicios por Lección

**Módulo 1 (55 ejercicios actuales, necesita 65 más):**
- L1: 12/20 → +8 ejercicios
- L2: 10/20 → +10 ejercicios  
- L3: 11/20 → +9 ejercicios
- L4: 9/20 → +11 ejercicios
- L5: 7/20 → +13 ejercicios
- L6: 6/20 → +14 ejercicios

**Módulo 2 (16 ejercicios actuales, necesita 104 más):**
- L1: 4/20 → +16 ejercicios
- L2: 2/20 → +18 ejercicios
- L3: 3/20 → +17 ejercicios
- L4: 2/20 → +18 ejercicios
- L5: 3/20 → +17 ejercicios
- L6: 2/20 → +18 ejercicios

**Módulo 3 (27 ejercicios actuales, necesita 93 más):**
- L1: 3/20 → +17 ejercicios
- L2: 2/20 → +18 ejercicios
- L3: 6/20 → +14 ejercicios
- L4: 6/20 → +14 ejercicios
- L5: 6/20 → +14 ejercicios
- L6: 4/20 → +16 ejercicios

**Total: 98 ejercicios existentes → 360 ejercicios objetivo (262 nuevos)**

## Tipos de Ejercicios Existentes

Actualmente en `course-data-b2.ts`:
1. `grammar` - Ejercicios de gramática
2. `reading` - Comprensión lectora
3. `listening` - Comprensión auditiva
4. `speaking` - Producción oral
5. `writing` - Producción escrita
6. `vocabulary` - Vocabulario
7. `pronunciation` - Pronunciación
8. `pronunciation-practice` - Práctica de pronunciación
9. `key-word-transformation` - Transformación de palabras clave
10. `word-formation` - Formación de palabras
11. `multiple-choice-cloze` - Cloze de opción múltiple

## Nuevos Tipos de Ejercicios a Añadir

Para alcanzar 20 ejercicios por lección con variedad, se añadirán:

12. `sentence-completion` - Completar oraciones
13. `error-identification` - Identificar errores
14. `paraphrasing` - Parafraseo
15. `collocation-matching` - Emparejar colocaciones
16. `phrasal-verbs` - Verbos frasales
17. `idioms-expressions` - Modismos y expresiones
18. `summary-writing` - Escritura de resúmenes
19. `gap-fill-text` - Texto con huecos
20. `sentence-reordering` - Reordenar oraciones

## Enfoque Técnico

### 1. Contexto Técnico
- **Lenguaje**: TypeScript
- **Archivo principal**: `lib/course-data-b2.ts` (5323 líneas)
- **Dependencias**: Ninguna nueva requerida
- **Estructura**: Arrays de interfaces TypeScript fuertemente tipadas

### 2. Estrategia de Implementación

#### Fase 1: Definir Nuevas Interfaces
Añadir interfaces TypeScript para los nuevos tipos de ejercicios en `course-data-b2.ts`:

```typescript
export interface SentenceCompletionExercise {
  id: string;
  type: 'sentence-completion';
  title: string;
  instructions: string;
  sentences: {
    prompt: string;
    correctCompletion: string;
    options?: string[];
  }[];
}

export interface ErrorIdentificationExercise {
  id: string;
  type: 'error-identification';
  title: string;
  sentences: {
    sentence: string;
    hasError: boolean;
    errorWord?: string;
    correction?: string;
    explanation?: string;
  }[];
}

// ... más interfaces para los demás tipos
```

#### Fase 2: Actualizar Type Union
Modificar el tipo `Exercise` para incluir los nuevos tipos:

```typescript
export type Exercise = 
  | GrammarExercise
  | ReadingExercise
  | ListeningExercise
  | VoiceRecordingExercise
  | WritingExercise
  | VocabularyExercise
  | KeyWordTransformationExercise
  | WordFormationExercise
  | MultipleChoiceClozeExercise
  | SentenceCompletionExercise
  | ErrorIdentificationExercise
  | ParaphrasingExercise
  | CollocationMatchingExercise
  | PhrasalVerbsExercise
  | IdiomsExpressionsExercise
  | SummaryWritingExercise
  | GapFillTextExercise
  | SentenceReorderingExercise;
```

#### Fase 3: Distribución de Ejercicios por Lección
Cada lección debe tener una mezcla equilibrada:

**Lecciones con 12 ejercicios actuales (necesitan 8 más):**
- 2 sentence-completion
- 2 error-identification
- 1 paraphrasing
- 1 collocation-matching
- 1 phrasal-verbs
- 1 gap-fill-text

**Lecciones con 6-10 ejercicios (necesitan 10-14 más):**
- 3 sentence-completion
- 2 error-identification
- 2 paraphrasing
- 2 collocation-matching
- 2 phrasal-verbs
- 2 idioms-expressions
- 1 summary-writing
- Resto: gap-fill-text o sentence-reordering

**Lecciones con 2-4 ejercicios (necesitan 16-18 más):**
- 4 sentence-completion
- 3 error-identification
- 2 paraphrasing
- 2 collocation-matching
- 2 phrasal-verbs
- 2 idioms-expressions
- 2 gap-fill-text
- 2 sentence-reordering
- Resto distribuido según tema de la lección

#### Fase 4: Generación de Contenido
Para cada ejercicio nuevo:
1. Revisar el tema/objetivo de la lección
2. Crear contenido relevante al grammar point/vocabulario de la lección
3. Asegurar nivel B2 (CEFR)
4. Incluir explicaciones claras
5. Proporcionar puntuación adecuada

### 3. Archivos a Modificar

**Archivo principal:**
- `lib/course-data-b2.ts` - Añadir interfaces y 262 ejercicios nuevos

**Posibles archivos relacionados (verificar si necesitan actualización):**
- `src/components/course/exercises/types.ts` - Puede necesitar tipos de ejercicios actualizados
- Componentes de renderizado de ejercicios (si existen)

### 4. Modelo de Datos

#### Antes:
```typescript
{
  id: 'b2-m1-l1',
  title: 'Lección 1: Past Perfect...',
  exercises: [
    // 12 ejercicios variados
  ]
}
```

#### Después:
```typescript
{
  id: 'b2-m1-l1',
  title: 'Lección 1: Past Perfect...',
  exercises: [
    // 12 ejercicios originales
    // + 8 ejercicios nuevos
    // = 20 ejercicios total
  ]
}
```

### 5. Estrategia de Verificación

1. **Type checking**: `npm run type-check` o `tsc --noEmit`
2. **Lint**: `npm run lint` (si existe)
3. **Verificación manual**: 
   - Contar ejercicios por lección
   - Verificar que todos los IDs sean únicos
   - Asegurar coherencia temática

### 6. Consideraciones Importantes

- **IDs únicos**: Seguir patrón `b2-m{module}-l{lesson}-{type}-{number}`
- **Nivel apropiado**: Todo el contenido debe ser nivel B2
- **Coherencia**: Ejercicios deben relacionarse con los objetivos de la lección
- **Diversidad**: Mezclar tipos de ejercicios para evitar monotonía
- **Puntuación**: Asignar puntos apropiados (1-3 puntos por pregunta típicamente)

### 7. Riesgos y Mitigaciones

| Riesgo | Mitigación |
|--------|------------|
| IDs duplicados | Script de verificación al final |
| Contenido inconsistente con lección | Revisar objectives de cada lección antes de crear ejercicios |
| Archivo demasiado grande | Considerar split en múltiples archivos si supera 10k líneas |
| Errores de tipado | Ejecutar tsc después de cada módulo completado |

## Plan de Implementación

Debido al volumen (262 ejercicios), se recomienda implementación incremental:

1. **Módulo 1 completo** (65 ejercicios) - Prioridad alta
2. **Módulo 2 completo** (104 ejercicios) - Prioridad media  
3. **Módulo 3 completo** (93 ejercicios) - Prioridad media

O alternativamente:
1. **Todas las L1** (primeras lecciones de cada módulo)
2. **Todas las L2-L3** (lecciones intermedias)
3. **Todas las L4-L6** (lecciones finales)

## Estimación de Esfuerzo

- Definición de interfaces: ~30 minutos
- Ejercicios Módulo 1: ~2-3 horas
- Ejercicios Módulo 2: ~3-4 horas
- Ejercicios Módulo 3: ~3-4 horas
- Verificación y ajustes: ~1 hora

**Total estimado: 10-13 horas**
