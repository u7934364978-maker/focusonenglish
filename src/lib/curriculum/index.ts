/**
 * Currículo formal: contenido a estudiar (versionado) + fases de aprendizaje y reglas.
 *
 * - Contenido: `content-types`, `build-a1-catalog`, `a1-skill-tag-patterns`
 * - Progreso: `progress-types`, `progress-rules`
 * - Resolución tag → objetivo: `resolve-tags`
 */

export type {
  CefrLevelCode,
  CurriculumVersionId,
  LearningObjectiveRecord,
  CurriculumUnitRecord,
  LevelContentCatalog,
} from './content-types';

export type {
  LearningPhase,
  MasterySnapshot,
  PhaseTransitionRule,
  PhaseResolution,
} from './progress-types';

export { A1_CURRICULUM_VERSION, buildA1ContentCatalog } from './build-a1-catalog';
export {
  A1_SKILL_CONCEPT_PATTERNS,
  conceptPatternsForSkill,
} from './a1-skill-tag-patterns';

export {
  DEFAULT_A1_PHASE_RULES,
  resolveLearningPhase,
} from './progress-rules';

export {
  conceptTagMatchesPattern,
  objectivesMatchingConceptTag,
  objectivesMatchingAnyTag,
  findUnitForObjective,
  getA1ContentCatalog,
} from './resolve-tags';
