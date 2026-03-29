import { parseCourseExercise } from '../course-exercise-schema';
import {
  partitionExercisesByPedagogyGate,
  summarizePedagogyGateRejected,
} from '../pedagogy-pre-display-audit';
import type { PedagogyDisplayGateRejected } from '../pedagogy-pre-display-audit';

function exerciseFrom(raw: unknown) {
  const r = parseCourseExercise(raw);
  if (!r.success) {
    throw new Error(`parseCourseExercise: ${JSON.stringify(r.error.format())}`);
  }
  return r.data;
}

describe('partitionExercisesByPedagogyGate', () => {
  const goodMc = exerciseFrom({
    id: 'mc-good',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'grammar',
    topicName: 'Grammar',
    content: {
      title: 'Artículos',
      instructions: 'Responde la pregunta.',
      questions: [
        {
          question: 'Choose the correct article: ____ apple.',
          options: ['a', 'an', 'the', '—'],
          correctAnswer: 1,
          explanation:
            'We use "an" before words that begin with a vowel sound. "Apple" starts with a vowel sound.',
        },
      ],
    },
  });

  /** Caso real incoherente: V/F + “choose verb” + hueco (sesión diaria IA). */
  const badTfVerbGap = exerciseFrom({
    id: 'tf-bad-verb-gap',
    type: 'true-false',
    level: 'A1',
    topic: 'grammar',
    topicName: 'Grammar',
    content: {
      title: 'Verbo',
      instructions: 'Responde la pregunta.',
      questions: [
        {
          question: 'Choose the correct verb: I ___ a student.',
          options: ['True', 'False'],
          correctAnswer: true,
          explanation:
            'This item is badly formed: you cannot answer a verb gap with true/false. Pedagogy gate should drop it.',
        },
      ],
    },
  });

  const spoilerMc = exerciseFrom({
    id: 'mc-spoiler-paren',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'family',
    topicName: 'Vocabulary',
    content: {
      title: 'Family',
      instructions: 'Responde la pregunta.',
      questions: [
        {
          question: 'Choose the correct word: This is my ____ (mother)',
          options: ['mother', 'brother', 'teacher', 'name'],
          correctAnswer: 0,
          explanation:
            '"Mother" is the English word for "madre". The other options are other family or words.',
        },
      ],
    },
  });

  it('acepta lista vacía', () => {
    const { accepted, rejected } = partitionExercisesByPedagogyGate([], 'A1');
    expect(accepted).toEqual([]);
    expect(rejected).toEqual([]);
  });

  it('acepta multiple-choice coherente', () => {
    const { accepted, rejected } = partitionExercisesByPedagogyGate([goodMc], 'A1');
    expect(rejected).toHaveLength(0);
    expect(accepted.map((e) => e.id)).toEqual(['mc-good']);
  });

  it('excluye true-false incoherente (elección verbal + hueco)', () => {
    const { accepted, rejected } = partitionExercisesByPedagogyGate([badTfVerbGap], 'A1');
    expect(accepted).toHaveLength(0);
    expect(rejected).toHaveLength(1);
    expect(rejected[0].id).toBe('tf-bad-verb-gap');
    const ruleIds = rejected[0].issues.map((i) => i.ruleId);
    expect(ruleIds).toEqual(
      expect.arrayContaining(['PQ_TF_VS_MC_INSTRUCTION', 'PQ_TF_FILLBLANK_STEM']),
    );
  });

  it('mezcla: solo pasan los ítems sin bloqueo por error', () => {
    const { accepted, rejected } = partitionExercisesByPedagogyGate(
      [goodMc, badTfVerbGap, spoilerMc],
      'A1',
    );
    expect(accepted.map((e) => e.id).sort()).toEqual(['mc-good', 'mc-spoiler-paren'].sort());
    expect(rejected).toHaveLength(1);
    expect(rejected[0].id).toBe('tf-bad-verb-gap');
  });

  it('por defecto no bloquea solo warnings (spoiler entre paréntesis)', () => {
    const { accepted, rejected } = partitionExercisesByPedagogyGate([spoilerMc], 'A1');
    expect(rejected).toHaveLength(0);
    expect(accepted.map((e) => e.id)).toEqual(['mc-spoiler-paren']);
  });

  it('con treatWarningsAsBlocking excluye MC con PQ_MC_SPOILER_PAREN', () => {
    const { accepted, rejected } = partitionExercisesByPedagogyGate([spoilerMc], 'A1', {
      treatWarningsAsBlocking: true,
    });
    expect(accepted).toHaveLength(0);
    expect(rejected).toHaveLength(1);
    expect(rejected[0].issues.some((i) => i.ruleId === 'PQ_MC_SPOILER_PAREN')).toBe(true);
  });
});

describe('summarizePedagogyGateRejected', () => {
  it('agrupa ruleIds sin duplicados', () => {
    const rejected: PedagogyDisplayGateRejected[] = [
      {
        id: 'a',
        issues: [
          { ruleId: 'PQ_X', severity: 'error', message: 'm1' },
          { ruleId: 'PQ_X', severity: 'error', message: 'm2' },
          { ruleId: 'PQ_Y', severity: 'warn', message: 'w' },
        ],
      },
    ];
    const s = summarizePedagogyGateRejected(rejected);
    expect(s.rejectedCount).toBe(1);
    expect(s.rejected[0].id).toBe('a');
    expect(s.rejected[0].ruleIds.sort()).toEqual(['PQ_X', 'PQ_Y']);
  });
});
