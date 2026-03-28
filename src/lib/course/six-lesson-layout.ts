/**
 * Agrupa ejercicios de una unidad en 6 franjas pedagógicas fijas:
 * gramática, vocabulario/contexto, reading, listening, writing, speaking.
 * Detecta por id (C1: -g/-v/-r/-l/-w/-s; resto: -l1- … -l6-), luego topicName y type.
 */

import type { Exercise } from '@/lib/exercise-generator';

export const SIX_LESSON_KEYS = [
  'grammar',
  'vocabulary',
  'reading',
  'listening',
  'writing',
  'speaking',
] as const;

export type SixLessonKey = (typeof SIX_LESSON_KEYS)[number];

/** Etiquetas UI (español), alineadas con el producto: lección 2 incluye gramática en contexto. */
export const SIX_LESSON_LABEL_ES: Record<SixLessonKey, string> = {
  grammar: 'Gramática',
  vocabulary: 'Vocabulario / contexto',
  reading: 'Reading',
  listening: 'Listening',
  writing: 'Writing',
  speaking: 'Speaking',
};

/** Etiquetas UI para curso C1: 6 lecciones fijas (ids `c1-uN-g|v|r|l|w|s`…). */
export const SIX_LESSON_LABEL_ES_C1: Record<SixLessonKey, string> = {
  grammar: 'Gramática',
  vocabulary: 'Vocabulario',
  reading: 'Comprensión lectora',
  listening: 'Listening',
  writing: 'Expresión escrita',
  speaking: 'Speaking',
};

export interface SixLessonLayout {
  /** Ejercicios reordenados por franja (0→5) y, al final, cola no clasificada. */
  orderedExercises: Exercise[];
  lessonCounts: [number, number, number, number, number, number];
  lessonStarts: [number, number, number, number, number, number];
  /** Ítems que no encajaron en heurística (p. ej. IA); van al final de la franja speaking. */
  tailCount: number;
}

const SLOT_BY_C1_LETTER: Record<string, number> = {
  g: 0,
  v: 1,
  r: 2,
  l: 3,
  w: 4,
  s: 5,
};

/** Orden dentro de franja C1: `c1-u3-g12` → 12 (para unidades con >9 ítems por lección). */
export function getC1LessonItemOrder(id: string | undefined): number | null {
  const m = (id ?? '').trim().match(/^c1-u\d+-[gvrwls](\d+)$/i);
  return m ? parseInt(m[1], 10) : null;
}

function detectLessonSlot(ex: Exercise): number | null {
  const id = (ex.id ?? '').trim();
  if (/^c1-u\d+-[gvrwls]\d+$/i.test(id)) {
    const m = id.match(/^c1-u\d+-([gvrwls])\d+$/i);
    if (m) return SLOT_BY_C1_LETTER[m[1].toLowerCase()] ?? null;
  }
  const mL = id.match(/-l([1-6])-/i);
  if (mL) {
    const n = parseInt(mL[1], 10);
    if (n >= 1 && n <= 6) return n - 1;
  }
  const tn = (ex.topicName || '').trim().toLowerCase();
  if (tn === 'grammar') return 0;
  if (tn === 'vocabulary') return 1;
  if (tn === 'reading') return 2;
  if (tn === 'listening') return 3;
  if (tn === 'writing') return 4;
  if (tn === 'speaking') return 5;

  const ty = (ex.type || '').toLowerCase();
  if (ty.includes('reading')) return 2;
  if (ty.includes('listening')) return 3;
  if (ty === 'writing' || ty.includes('writing')) return 4;
  if (ty.includes('speaking') || ty === 'pronunciation') return 5;
  return null;
}

export function buildSixLessonLayout(exercises: Exercise[]): SixLessonLayout {
  const buckets: Exercise[][] = [[], [], [], [], [], []];
  const tail: Exercise[] = [];

  for (const ex of exercises) {
    const slot = detectLessonSlot(ex);
    if (slot !== null && slot >= 0 && slot < 6) {
      buckets[slot].push(ex);
    } else {
      tail.push(ex);
    }
  }

  if (tail.length) {
    buckets[5].push(...tail);
  }

  for (let i = 0; i < 6; i++) {
    buckets[i].sort((a, b) => {
      const oa = getC1LessonItemOrder(a.id);
      const ob = getC1LessonItemOrder(b.id);
      if (oa !== null && ob !== null && oa !== ob) return oa - ob;
      return 0;
    });
  }

  const lessonCounts = buckets.map((b) => b.length) as [
    number,
    number,
    number,
    number,
    number,
    number,
  ];

  const lessonStarts: [number, number, number, number, number, number] = [0, 0, 0, 0, 0, 0];
  let acc = 0;
  for (let i = 0; i < 6; i++) {
    lessonStarts[i] = acc;
    acc += lessonCounts[i];
  }

  return {
    orderedExercises: buckets.flat(),
    lessonCounts,
    lessonStarts,
    tailCount: tail.length,
  };
}

/** Índice de franja 0–5 para un índice global en `orderedExercises`. */
export function getSixLessonSlotAtGlobalIndex(layout: SixLessonLayout, globalIndex: number): number {
  for (let k = 0; k < 6; k++) {
    const start = layout.lessonStarts[k];
    const count = layout.lessonCounts[k];
    if (globalIndex >= start && globalIndex < start + count) {
      return k;
    }
  }
  return 0;
}

export interface SixLessonNavState {
  lessonSlot: number;
  /** 1–6 para el usuario */
  lessonNumber: number;
  lessonLabelEs: string;
  exerciseInLesson: number;
  exercisesInThisLesson: number;
  totalPedagogicalLessons: number;
}

export function getSixLessonNavState(
  layout: SixLessonLayout,
  globalIndex: number,
  labels: Record<SixLessonKey, string> = SIX_LESSON_LABEL_ES
): SixLessonNavState {
  const slot = getSixLessonSlotAtGlobalIndex(layout, globalIndex);
  const start = layout.lessonStarts[slot];
  const count = layout.lessonCounts[slot];
  const exerciseInLesson = globalIndex - start + 1;
  return {
    lessonSlot: slot,
    lessonNumber: slot + 1,
    lessonLabelEs: labels[SIX_LESSON_KEYS[slot]],
    exerciseInLesson,
    exercisesInThisLesson: Math.max(1, count),
    totalPedagogicalLessons: 6,
  };
}

/** Tras completar un ejercicio: ¿cerramos franja (no es el último de la unidad)? */
export function shouldShowSixLessonCompleteInterstitial(
  layout: SixLessonLayout,
  globalIndex: number,
  totalExercises: number
): boolean {
  if (globalIndex < 0 || globalIndex >= totalExercises - 1) return false;
  const slot = getSixLessonSlotAtGlobalIndex(layout, globalIndex);
  const start = layout.lessonStarts[slot];
  const count = layout.lessonCounts[slot];
  if (count === 0) return false;
  return globalIndex === start + count - 1;
}
