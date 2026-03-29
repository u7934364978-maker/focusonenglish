# Checklist de pedagogía (PR)

Usar antes de fusionar cambios que toquen **contenido curricular**, **prompts de generación** o **validación de ejercicios**.

## Contenido y normas

- [ ] Las normas de ítems en `docs/normas-items-curriculum.md` siguen siendo coherentes con este PR (si aplica).
- [ ] Los prompts de generación (`src/lib/ai/generation-prompt-quality.ts`, `generate-exercises-llama.ts`) reflejan las mismas expectativas que las reglas de código.

## Reglas automáticas (`PQ_*`)

Tras generar o editar JSON de ejercicios, los **ruleIds** comprobables en código viven en `PEDAGOGY_QUALITY_RULE_IDS` (`src/lib/validation/pedagogy-quality-rules.ts`):

| ID | Severidad típica | Qué comprueba |
|----|------------------|----------------|
| `PQ_CONTENT_OBJECT` | error | `content` presente y objeto |
| `PQ_TITLE_OR_INSTRUCTIONS` | warn | `title` / `instructions` no vacíos |
| `PQ_STEM_MIN` | warn | enunciado muy corto (MC/TF/fill) |
| `PQ_EXPLANATION_MIN` | error | explicación con valor pedagógico mínimo |
| `PQ_MC_OPTIONS_COUNT` | error | MC con al menos 2 opciones |
| `PQ_MC_OPTIONS_DISTINCT` | warn | opciones no duplicadas (normalizado) |
| `PQ_MC_INDEX_RANGE` | error | índice `correctAnswer` dentro de rango |
| `PQ_TF_OPTIONS` | warn | `True` / `False` en opciones |
| `PQ_FILL_CORRECT_EMPTY` | error | `fill-blank`: respuesta no vacía |
| `PQ_A1_READING_TRANSCRIPT_SHORT` | warn | A1/A2: lectura/escucha con texto/transcript muy corto |

- [ ] `npm run type-check` pasa.
- [ ] Scripts de validación de curso que apliquen al cambio (p. ej. `validate-exercises`) pasan sin fallos nuevos.

## API de generación

La respuesta de `POST /api/generate-exercises` puede incluir `pedagogyQuality` y `warning` cuando fallen reglas `PQ_*` o plantilla A1. Revisar en PRs que tocan **solo** el cliente: si el consumidor debe mostrar avisos, actualizar la UI o ignorar explícitamente.
