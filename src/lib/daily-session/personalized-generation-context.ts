import type { SupabaseClient } from '@supabase/supabase-js';
import type { ExerciseGenerationPedagogyBody } from '@/lib/ai/exercise-generation-pedagogy';
import {
  getA1ContentCatalog,
  objectivesMatchingAnyTag,
  resolveLearningPhase,
} from '@/lib/curriculum';
import { GlobalContentProvider } from '@/lib/course-engine/global-content-provider';
import {
  buildSrsPromptBlock,
  fetchSrsDueRows,
  formatUnitOrderHint,
  mergePriorityTags,
} from '@/lib/daily-session/unified-session-prompt';

const A1_BASE_OBJECTIVES = [
  'Comunicarse en situaciones cotidianas muy simples (presentarse, saludar, pedir información básica).',
  'Usar el presente simple y el verbo be con frases cortas y correctas.',
  'Reconocer y producir léxico esencial (números, familia, tiempo, lugares).',
];

export type SessionOrchestrationMeta = {
  srsDueCount: number;
  srsSkipped?: boolean;
  srsPriorityTags: string[];
  masteryWeakTags: string[];
  mergedPriorityTags: string[];
  unitOrdersFromSrs: number[];
};

/**
 * Tema + pedagogy para generateExercisesWithLlama: unifica
 * - cola SRS vencida (mismos datos que la sesión diaria) → líneas explícitas en el prompt,
 * - temario A1 (`getA1ContentCatalog`) → objetivos medibles,
 * - `user_mastery` → debilidades,
 * - fases de aprendizaje (`resolveLearningPhase`).
 */
export async function buildPersonalizedGenerationContext(
  supabase: SupabaseClient,
  userId: string,
): Promise<{
  weakTopics: string[];
  topic: string;
  focusOn: string;
  pedagogy: ExerciseGenerationPedagogyBody;
  orchestration: SessionOrchestrationMeta;
}> {
  const provider = GlobalContentProvider.getInstance();
  await provider.loadAllContent();

  const { rows: srsDueRows, skipped: srsSkipped } = await fetchSrsDueRows(supabase, userId);
  const srsBlock = buildSrsPromptBlock(srsDueRows, provider);

  const { data: masteryRows } = await supabase
    .from('user_mastery')
    .select('concept_tag, mastery_score, attempts_count, success_count')
    .eq('user_id', userId)
    .order('mastery_score', { ascending: true })
    .limit(24);

  const rows = masteryRows ?? [];

  const masteryWeakTags: string[] = [];
  for (const r of rows) {
    const tag = String(r.concept_tag || '').trim();
    if (!tag) continue;
    const attempts = Number(r.attempts_count) || 0;
    const score = Number(r.mastery_score);
    if (attempts < 1) continue;
    if (score < 0.65 || (attempts >= 2 && score < 0.75)) {
      masteryWeakTags.push(tag);
    }
    if (masteryWeakTags.length >= 10) break;
  }

  const mergedPriorityTags = mergePriorityTags(srsBlock.priorityTags, masteryWeakTags);

  const topic =
    mergedPriorityTags.length > 0
      ? `Repaso focalizado: ${mergedPriorityTags.slice(0, 3).join(', ')}`
      : 'Sesión diaria A1 — práctica general';

  const focusOn =
    mergedPriorityTags.length > 0
      ? `Priorizar: (1) recuperación espaciada según tarjetas vencidas y sus etiquetas; (2) refuerzo de dominio bajo en: ${mergedPriorityTags.join(', ')}. Misma idea pedagógica, enunciados distintos.`
      : 'Equilibrar gramática básica, vocabulario y comprensión oral/lectura en nivel A1.';

  const catalog = getA1ContentCatalog();
  const catalogObjectives = objectivesMatchingAnyTag(catalog, mergedPriorityTags);
  const catalogOutcomeLines = catalogObjectives
    .flatMap((o) => o.measurableOutcomesEs)
    .slice(0, 8);

  const unitOrderLine = formatUnitOrderHint(srsBlock.unitOrdersHint);

  let phaseLine = '';
  if (mergedPriorityTags.length && rows.length) {
    const relevant = rows.filter((r) =>
      mergedPriorityTags.includes(String(r.concept_tag || '').trim()),
    );
    if (relevant.length > 0) {
      const m =
        relevant.reduce((acc, r) => acc + Number(r.mastery_score), 0) / relevant.length;
      const att = Math.max(
        1,
        Math.round(
          relevant.reduce((acc, r) => acc + Number(r.attempts_count), 0) / relevant.length,
        ),
      );
      const suc = Math.round(
        relevant.reduce((acc, r) => acc + Number(r.success_count), 0) / relevant.length,
      );
      const phase = resolveLearningPhase({
        masteryScore: m,
        attemptsCount: att,
        successCount: suc,
      });
      phaseLine = `Fase sugerida (${phase.phase}): ${phase.hintForPromptEs} Estilos: ${phase.recommendedItemStylesEs.join('; ')}.`;
    }
  }

  const srsHeader =
    srsDueRows.length > 0
      ? `Cola SRS (vencida ahora): ${srsDueRows.length} tarjeta(s). Prioriza mismas competencias con variación de contexto.`
      : 'Sin tarjetas SRS vencidas en servidor; prioriza debilidades de mastery y variedad A1.';

  const spacedBlock = [
    srsHeader,
    ...srsBlock.promptLinesEs,
    'Regla: no copies el enunciado literal de un ítem anterior; reformula el mismo objetivo.',
    'Los topics débiles vienen de intentos en la app y de etiquetas ligadas a ejercicios en cola SRS.',
  ].join('\n');

  const pedagogy: ExerciseGenerationPedagogyBody = {
    learningObjectives: [
      ...A1_BASE_OBJECTIVES,
      ...catalogOutcomeLines,
      ...(unitOrderLine ? [unitOrderLine] : []),
      ...(phaseLine ? [phaseLine] : []),
      ...(mergedPriorityTags.length
        ? [
            `Prioridad de tags (SRS + mastery): ${mergedPriorityTags.slice(0, 10).join('; ')}.`,
            'Incluir ítems que reciclen esos puntos con redacción nueva (espaciado).',
          ]
        : ['Introducir variación controlada en unidades ya vistas sin saltar a contenido A2.']),
    ],
    grammarFocus: mergedPriorityTags.length
      ? mergedPriorityTags.slice(0, 8)
      : ['present simple', 'be', 'articles', 'basic questions'],
    emphasizeSpacedRepetition: true,
    spacedRepetitionNotes: spacedBlock,
    vocabulary: mergedPriorityTags.filter((t) => /vocab|word|lex|lexis/i.test(t)).slice(0, 8),
  };

  const orchestration: SessionOrchestrationMeta = {
    srsDueCount: srsDueRows.length,
    srsSkipped,
    srsPriorityTags: srsBlock.priorityTags,
    masteryWeakTags,
    mergedPriorityTags,
    unitOrdersFromSrs: srsBlock.unitOrdersHint,
  };

  return {
    weakTopics: mergedPriorityTags,
    topic,
    focusOn,
    pedagogy,
    orchestration,
  };
}
