import type { LearningPhase, MasterySnapshot, PhaseResolution, PhaseTransitionRule } from './progress-types';

const PHASE_META: Record<
  LearningPhase,
  { hintForPromptEs: string; recommendedItemStylesEs: string[] }
> = {
  exposure: {
    hintForPromptEs:
      'Primera exposición: input muy claro, mucho apoyo visual o traducción, sin exigir producción libre.',
    recommendedItemStylesEs: [
      'Opción múltiple con enunciados muy cortos',
      'Verdadero/falso o reconocimiento de forma',
      'Emparejar palabra–significado',
    ],
  },
  recognition: {
    hintForPromptEs:
      'Fase de reconocimiento: el alumno elige entre opciones; evitar producción abierta aún.',
    recommendedItemStylesEs: [
      'MC con 3–4 distractores plausibles',
      'Completar hueco con banco de palabras',
      'T/F sobre formas correctas',
    ],
  },
  controlled_practice: {
    hintForPromptEs:
      'Práctica controlada: producción corta con andamiaje (huecos, opciones, orden fijo).',
    recommendedItemStylesEs: [
      'Ordenar palabras en frase',
      'Huecos con opciones',
      'Repetición de patrón con sustitución mínima',
    ],
  },
  guided_production: {
    hintForPromptEs:
      'Producción guiada: menos soporte; mini diálogos o frases completas con pista fuerte.',
    recommendedItemStylesEs: [
      'Responder en un turno corto',
      'Completar diálogo con 1–2 huecos',
      'Reformulación guiada',
    ],
  },
  consolidation: {
    hintForPromptEs:
      'Consolidación: mezclar con ítems ya vistos y variar contextos; ligera dificultad creciente.',
    recommendedItemStylesEs: [
      'Mezcla de tipos ya dominados',
      'Repaso espaciado (mismo objetivo, nuevo contexto)',
    ],
  },
};

/**
 * Reglas por defecto (orden por `priority` descendente: primera que cumpla gana).
 * Ajustar umbrales con datos reales de la plataforma.
 */
export const DEFAULT_A1_PHASE_RULES: PhaseTransitionRule[] = [
  {
    id: 'failures-reset',
    priority: 100,
    targetPhase: 'recognition',
    condition: (s) => (s.failuresInRow ?? 0) >= 3,
    rationaleEs: 'Tres o más fallos seguidos: volver a reconocimiento explícito.',
  },
  {
    id: 'consolidation',
    priority: 90,
    targetPhase: 'consolidation',
    condition: (s) => s.masteryScore >= 0.82 && s.attemptsCount >= 4,
    rationaleEs: 'Dominio alto con historial suficiente: consolidar.',
  },
  {
    id: 'guided-production',
    priority: 70,
    targetPhase: 'guided_production',
    condition: (s) => s.masteryScore >= 0.55 && s.attemptsCount >= 3,
    rationaleEs: 'Dominio medio-alto: producción guiada.',
  },
  {
    id: 'controlled',
    priority: 50,
    targetPhase: 'controlled_practice',
    condition: (s) =>
      s.masteryScore >= 0.28 || (s.attemptsCount >= 4 && s.successCount >= 2),
    rationaleEs: 'Algo de práctica o éxito parcial: práctica controlada.',
  },
  {
    id: 'recognition',
    priority: 30,
    targetPhase: 'recognition',
    condition: (s) => s.attemptsCount >= 1,
    rationaleEs: 'Ya hay intentos; priorizar reconocimiento hasta subir dominio.',
  },
  {
    id: 'exposure',
    priority: 10,
    targetPhase: 'exposure',
    condition: () => true,
    rationaleEs: 'Sin datos o primer contacto: exposición.',
  },
];

export function resolveLearningPhase(
  snapshot: MasterySnapshot,
  rules: PhaseTransitionRule[] = DEFAULT_A1_PHASE_RULES,
): PhaseResolution {
  const sorted = [...rules].sort((a, b) => b.priority - a.priority);
  const chosen = sorted.find((r) => r.condition(snapshot))!;
  const meta = PHASE_META[chosen.targetPhase];
  return {
    phase: chosen.targetPhase,
    hintForPromptEs: `${meta.hintForPromptEs} (${chosen.rationaleEs})`,
    recommendedItemStylesEs: meta.recommendedItemStylesEs,
  };
}
