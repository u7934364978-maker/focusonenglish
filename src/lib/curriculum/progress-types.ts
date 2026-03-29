/**
 * Modelo de progreso: cómo debe aprenderse (fases) y reglas de transición.
 * No sustituye a SRS (intervalos); complementa el tipo de práctica esperada por fase.
 */

/**
 * Fases de adquisición → automatización (inspiración: VanPatten, skill acquisition, espaciado).
 * - exposure: primera toma de contacto (input, muy guiado).
 * - recognition: identificar forma correcta entre opciones claras.
 * - controlled_practice: producción corta con andamiaje (huecos, opciones).
 * - guided_production: producción con menos andamiaje (reordenar, mini diálogo).
 * - consolidation: mantenimiento / fluidez básica en el objetivo.
 */
export type LearningPhase =
  | 'exposure'
  | 'recognition'
  | 'controlled_practice'
  | 'guided_production'
  | 'consolidation';

/** Snapshot compatible con filas de `user_mastery` + señales de racha. */
export interface MasterySnapshot {
  masteryScore: number;
  attemptsCount: number;
  successCount: number;
  /** Opcional: racha de fallos recientes (p. ej. desde cliente o agregado). */
  failuresInRow?: number;
}

/**
 * Regla declarativa: la primera condición verdadera en orden de `priority` gana
 * (mayor número = evaluar antes).
 */
export interface PhaseTransitionRule {
  id: string;
  priority: number;
  targetPhase: LearningPhase;
  /** Condición sobre el snapshot actual. */
  condition: (s: MasterySnapshot) => boolean;
  /** Texto para logs / prompts. */
  rationaleEs: string;
}

/** Salida lista para prompts de generación o UI. */
export interface PhaseResolution {
  phase: LearningPhase;
  /** Instrucción corta para el modelo de IA (español). */
  hintForPromptEs: string;
  /** Estilos de ítem recomendados en esta fase (texto libre). */
  recommendedItemStylesEs: string[];
}
