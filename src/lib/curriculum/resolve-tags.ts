import type { LearningObjectiveRecord, LevelContentCatalog } from './content-types';
import { buildA1ContentCatalog } from './build-a1-catalog';

/**
 * Coincide si el tag del ítem empieza por el patrón o es igual (case-sensitive como en contenido).
 */
export function conceptTagMatchesPattern(tag: string, pattern: string): boolean {
  const t = tag.trim();
  const p = pattern.trim();
  if (!t || !p) return false;
  return t === p || t.startsWith(p);
}

/**
 * Busca objetivos cuyo `conceptTagPatterns` case al tag del ítem (p. ej. `grammar/be`).
 */
export function objectivesMatchingConceptTag(
  catalog: LevelContentCatalog,
  conceptTag: string,
): LearningObjectiveRecord[] {
  const out: LearningObjectiveRecord[] = [];
  for (const unit of catalog.units) {
    for (const obj of unit.objectives) {
      if (obj.conceptTagPatterns.some((p) => conceptTagMatchesPattern(conceptTag, p))) {
        out.push(obj);
      }
    }
  }
  return out;
}

/**
 * Todos los objetivos que coinciden con cualquiera de los tags dados.
 */
export function objectivesMatchingAnyTag(
  catalog: LevelContentCatalog,
  tags: string[],
): LearningObjectiveRecord[] {
  const seen = new Set<string>();
  const out: LearningObjectiveRecord[] = [];
  for (const tag of tags) {
    for (const o of objectivesMatchingConceptTag(catalog, tag)) {
      if (!seen.has(o.id)) {
        seen.add(o.id);
        out.push(o);
      }
    }
  }
  return out;
}

/** Unidad que contiene el objetivo (si existe). */
export function findUnitForObjective(
  catalog: LevelContentCatalog,
  objectiveId: string,
): LevelContentCatalog['units'][0] | undefined {
  return catalog.units.find((u) => u.objectives.some((o) => o.id === objectiveId));
}

let cachedA1: LevelContentCatalog | null = null;

export function getA1ContentCatalog(): LevelContentCatalog {
  if (!cachedA1) cachedA1 = buildA1ContentCatalog();
  return cachedA1;
}
