import type { SupabaseClient } from '@supabase/supabase-js';
import { GlobalContentProvider } from '@/lib/course-engine/global-content-provider';
import type { IndexedInteraction } from '@/lib/course-engine/global-content-provider';
import {
  getA1ContentCatalog,
  objectivesMatchingAnyTag,
  findUnitForObjective,
} from '@/lib/curriculum';

export type SrsDueRow = {
  exercise_id: string;
  topic: string;
  next_review_at: string;
  last_quality: number;
  interval: number;
  repetitions: number;
  ease_factor: number;
};

function isMissingTableError(error: unknown): boolean {
  const e = error as { code?: string };
  return e?.code === 'PGRST205' || e?.code === '42P01';
}

/**
 * Tarjetas SRS vencidas (misma consulta que la sesión diaria, con más columnas para el prompt).
 */
export async function fetchSrsDueRows(
  supabase: SupabaseClient,
  userId: string,
  limit = 40,
): Promise<{ rows: SrsDueRow[]; skipped?: boolean }> {
  const { data, error } = await supabase
    .from('a1_srs_cards')
    .select(
      'exercise_id, topic, next_review_at, last_quality, interval, repetitions, ease_factor',
    )
    .eq('user_id', userId)
    .lte('next_review_at', new Date().toISOString())
    .order('next_review_at', { ascending: true })
    .limit(limit);

  if (error) {
    if (isMissingTableError(error)) {
      return { rows: [], skipped: true };
    }
    throw error;
  }

  const rows = (data ?? []).map((r) => ({
    exercise_id: String(r.exercise_id),
    topic: String(r.topic ?? ''),
    next_review_at: String(r.next_review_at),
    last_quality: Number(r.last_quality) ?? 0,
    interval: Number(r.interval) ?? 1,
    repetitions: Number(r.repetitions) ?? 0,
    ease_factor: Number(r.ease_factor) ?? 2.5,
  }));

  return { rows };
}

function tagsFromInteraction(hit: IndexedInteraction | undefined): string[] {
  if (!hit) return [];
  const fromConcept = Array.isArray(hit.concept_tags) ? hit.concept_tags : [];
  const m = hit.mastery_tag ? [String(hit.mastery_tag)] : [];
  return [...new Set([...fromConcept.map(String), ...m])].filter(Boolean);
}

/**
 * A partir de filas SRS + catálogo, produce líneas para el prompt y tags priorizados.
 */
export function buildSrsPromptBlock(
  rows: SrsDueRow[],
  provider: GlobalContentProvider,
): {
  priorityTags: string[];
  promptLinesEs: string[];
  unitOrdersHint: number[];
} {
  const catalog = getA1ContentCatalog();
  const tagSet = new Set<string>();
  const promptLinesEs: string[] = [];
  const unitOrderSet = new Set<number>();

  const maxLines = 14;
  for (const row of rows.slice(0, maxLines)) {
    const hit = provider.getInteractionById(row.exercise_id);
    const tags = tagsFromInteraction(hit);
    for (const t of tags) tagSet.add(t);
    for (const t of tags) {
      for (const obj of objectivesMatchingAnyTag(catalog, [t])) {
        const u = findUnitForObjective(catalog, obj.id);
        if (u) unitOrderSet.add(u.order);
      }
    }

    const when = new Date(row.next_review_at);
    const dateStr = Number.isNaN(when.getTime())
      ? row.next_review_at
      : when.toISOString().slice(0, 10);
    const tagStr = tags.length ? tags.join(', ') : row.topic || '(sin tag en catálogo)';
    promptLinesEs.push(
      `• Vencido ${dateStr}: ejercicio ${row.exercise_id}; etiquetas ${tagStr}; SM-2 calidad ${row.last_quality}, repeticiones ${row.repetitions}, intervalo ${row.interval} d, EF ${row.ease_factor}.`,
    );
  }

  const unitOrdersHint = [...unitOrderSet].sort((a, b) => a - b);

  return {
    priorityTags: [...tagSet],
    promptLinesEs,
    unitOrdersHint,
  };
}

/** SRS primero (vencidos hoy), luego debilidades de mastery; sin duplicados. */
export function mergePriorityTags(srsTags: string[], masteryWeakTags: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const t of [...srsTags, ...masteryWeakTags]) {
    const x = String(t || '').trim();
    if (!x || seen.has(x)) continue;
    seen.add(x);
    out.push(x);
  }
  return out.slice(0, 14);
}

export function formatUnitOrderHint(unitOrders: number[]): string {
  if (!unitOrders.length) return '';
  return `Orden sugerido de unidades del temario A1 a tocar (según tarjetas SRS vencidas): ${unitOrders.join(', ')}.`;
}
