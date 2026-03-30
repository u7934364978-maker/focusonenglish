import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { GlobalContentProvider } from '@/lib/course-engine/global-content-provider';
import type { IndexedInteraction } from '@/lib/course-engine/global-content-provider';
import { UltraAdaptiveEngine } from '@/lib/course-engine/ultra-adaptive-engine';
import { interleave } from '@/lib/daily-session/interleave';
import {
  DAILY_SESSION_TOTAL,
  DAILY_REVIEW_CAP,
  DAILY_NEW_CAP,
} from '@/lib/daily-session/constants';
import { validateInteractionForApi } from '@/lib/validation/interaction-api';
import { isPremiumRenderableType } from '@/lib/daily-session/premium-renderable-types';
import {
  buildPersonalizedGenerationContext,
  type SessionOrchestrationMeta,
} from '@/lib/daily-session/personalized-generation-context';
import { generateExercisesWithLlama } from '@/lib/ai/generate-exercises-llama';
import { expandPracticeExerciseTypesForCount } from '@/lib/ai/shared-ai-practice-config';
import { mapExerciseListToInteractions } from '@/lib/daily-session/map-generated-exercise-to-interaction';
import type { PedagogyQualityBatchResult } from '@/lib/validation/pedagogy-quality-rules';
import type { PedagogyDisplayGateSummary } from '@/lib/validation/pedagogy-pre-display-audit';

export const dynamic = 'force-dynamic';

function isMissingTableError(error: unknown): boolean {
  const e = error as { code?: string };
  return e?.code === 'PGRST205' || e?.code === '42P01';
}

type Row = {
  exercise_id: string;
  next_review_at: string;
};

/**
 * POST /api/a1/daily-session
 * Body opcional: { reviewCap?: number, newCap?: number, sessionTotal?: number }
 *
 * Construye una sesión con repasos reales (IDs en `a1_srs_cards` resueltos vía GlobalContentProvider)
 * + ítems nuevos (UltraAdaptiveEngine, nivel A1).
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const generation = body.generation === 'ai' ? 'ai' : 'catalog';
    const excludeExerciseIds: string[] = Array.isArray(body.excludeExerciseIds)
      ? body.excludeExerciseIds.map((x: unknown) => String(x))
      : [];
    const excludeSet = new Set(excludeExerciseIds);
    const sessionTotal = Math.min(
      16,
      Math.max(4, Number(body.sessionTotal) || DAILY_SESSION_TOTAL),
    );
    const reviewCap = Math.min(12, Math.max(0, Number(body.reviewCap) || DAILY_REVIEW_CAP));
    const newCap = Math.min(12, Math.max(0, Number(body.newCap) || DAILY_NEW_CAP));

    let dueRows: Row[] = [];
    const { data: dueData, error: dueErr } = await supabase
      .from('a1_srs_cards')
      .select('exercise_id, next_review_at')
      .eq('user_id', user.id)
      .lte('next_review_at', new Date().toISOString())
      .order('next_review_at', { ascending: true })
      .limit(40);

    if (dueErr) {
      if (!isMissingTableError(dueErr)) {
        console.error('[api/a1/daily-session] due query', dueErr);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
      }
    } else {
      dueRows = (dueData ?? []) as Row[];
    }

    const provider = GlobalContentProvider.getInstance();
    await provider.loadAllContent();

    const reviewInteractions: IndexedInteraction[] = [];
    const missedExerciseIds: string[] = [];

    for (const row of dueRows) {
      if (reviewInteractions.length >= reviewCap) break;
      if (excludeSet.has(row.exercise_id)) continue;
      const hit = provider.getInteractionById(row.exercise_id);
      if (hit && hit.level === 'A1' && isPremiumRenderableType(hit.type)) {
        reviewInteractions.push(hit);
      } else {
        missedExerciseIds.push(row.exercise_id);
      }
    }

    const slotsForNew = Math.max(0, sessionTotal - reviewInteractions.length);
    const newLimit = reviewInteractions.length === 0 ? sessionTotal : newCap;
    const neededNew = Math.min(newLimit, slotsForNew);

    const newInteractions: IndexedInteraction[] = [];
    const seen = new Set<string>([
      ...reviewInteractions.map((i) => i.interaction_id),
      ...excludeExerciseIds,
    ]);

    let aiWarning: string | undefined;
    let sessionOrchestration: SessionOrchestrationMeta | undefined;
    let pedagogyQuality: PedagogyQualityBatchResult | undefined;
    let pedagogyGate: PedagogyDisplayGateSummary | undefined;

    if (generation === 'ai' && neededNew > 0) {
      try {
        const ctx = await buildPersonalizedGenerationContext(supabase, user.id);
        sessionOrchestration = ctx.orchestration;
        // Generamos solo una parte: el resto lo cubre UltraAdaptiveEngine (para variedad de tipos).
        const aiCount = Math.min(3, neededNew);
        const gen = await generateExercisesWithLlama({
          level: 'A1',
          topic: ctx.topic,
          weakTopics: ctx.weakTopics,
          count: aiCount,
          exerciseTypes: expandPracticeExerciseTypesForCount(aiCount),
          focusOn: ctx.focusOn,
          pedagogy: ctx.pedagogy,
        });
        pedagogyQuality = gen.pedagogyQuality;
        pedagogyGate = gen.pedagogyGate;
        if (gen.warning) aiWarning = gen.warning;
        if (gen.pedagogyGate?.rejectedCount) {
          console.warn(
            '[api/a1/daily-session] pedagogy gate rejected:',
            gen.pedagogyGate.rejected,
          );
        }
        const mapped = mapExerciseListToInteractions(gen.exercises);
        for (const m of mapped) {
          if (newInteractions.length >= neededNew) break;
          const id = m.interaction_id || `ai-${Date.now()}-${newInteractions.length}`;
          if (seen.has(id)) continue;
          seen.add(id);
          newInteractions.push({ ...m, interaction_id: id });
        }
      } catch (e) {
        console.error('[api/a1/daily-session] AI generation', e);
        aiWarning = 'AI generation unavailable; using catalog items.';
      }
    }

    let attempts = 0;
    const maxAttempts = Math.max(neededNew * 12, 24);
    while (newInteractions.length < neededNew && attempts < maxAttempts) {
      attempts += 1;
      const ex = await UltraAdaptiveEngine.getNextExercise(user.id, 'A1');
      if (!ex?.interaction_id) continue;
      if (!isPremiumRenderableType(ex.type)) continue;
      if (seen.has(ex.interaction_id)) continue;
      seen.add(ex.interaction_id);
      newInteractions.push(ex);
    }

    const interleaved = interleave(reviewInteractions, newInteractions);

    // Orden pedagógico simple por fases:
    // 1) Reconocimiento (MC/TF/matching/fill-blank)
    // 2) Comprensión (reading/listening)
    // 3) Producción (writing/speaking)
    // Esto reduce la sensación de "random" y acerca la consecución a un guion.
    const phaseRank: Record<string, number> = {
      // Fase 1: reconocimiento / práctica guiada
      true_false: 0,
      'multiple_choice': 0,
      multiple_choice: 0,
      odd_one_out: 0,
      matching: 1,
      'vocabulary-match': 1,
      'multiple_matching': 1,
      fill_blank: 2,
      'fill_blanks': 2,
      'fill-blank': 2,
      'fill-blanks': 2,
      transformation: 3,
      categorization: 3,
      reorder_words: 3,

      // Fase 2: comprensión
      'reading-comprehension': 4,
      gapped_text: 4,
      multiple_choice_cloze: 4,
      'listening_image_mc': 5,
      'listening_dictation': 5,

      // Fase 3: producción
      short_writing: 6,
      dictation_guided: 6,
      writing_task: 6,
      speaking_task: 6,
      role_play: 6,
      chat_simulation: 6,
      'ai-mission': 6,
      pronunciation: 6,
    };

    const ordered = interleaved
      .map((ex, i) => ({ ex, i }))
      .sort((a, b) => {
        const ra = phaseRank[a.ex.type] ?? 10;
        const rb = phaseRank[b.ex.type] ?? 10;
        if (ra !== rb) return ra - rb;
        // Mantiene estabilidad: conserva el orden original dentro de la fase.
        return a.i - b.i;
      })
      .map((x) => x.ex);

    const validationNotes: string[] = [];
    for (const ex of ordered) {
      const v = validateInteractionForApi(ex);
      if (!v.ok) {
        validationNotes.push(
          `${ex.interaction_id}: ${v.issues.slice(0, 2).join('; ')}`,
        );
      }
    }

    return NextResponse.json({
      success: true,
      exercises: ordered,
      plan: {
        reviewCount: reviewInteractions.length,
        newCount: newInteractions.length,
        sessionTotal: ordered.length,
        missedExerciseIds,
        dueQueueLength: dueRows.length,
        validationWarnings: validationNotes.slice(0, 5),
        generation,
        aiWarning,
        ...(sessionOrchestration ? { orchestration: sessionOrchestration } : {}),
        ...(pedagogyQuality ? { pedagogyQuality } : {}),
        ...(pedagogyGate ? { pedagogyGate } : {}),
      },
    });
  } catch (e) {
    console.error('[api/a1/daily-session]', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
