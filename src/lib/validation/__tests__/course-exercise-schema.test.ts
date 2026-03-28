import {
  courseExerciseSchema,
  courseExerciseSchemaNormsStrict,
  getExerciseContent,
  parseCourseExercise,
  parseCourseExerciseNormsStrict,
  parseExerciseContent,
} from '../course-exercise-schema';

describe('courseExerciseSchema', () => {
  const minimal = {
    id: 'a1-u1-l1-ex1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    topicName: 'Grammar',
    content: {
      title: 'Test',
      instructions: 'Choose.',
      questions: [
        {
          question: '[[Hello|Hola]]?',
          options: ['A', 'B'],
          correctAnswer: 0,
          explanation: '[[Hello is a greeting.|Hola es un saludo.]]',
        },
      ],
    },
  };

  it('acepta un ejercicio mínimo válido', () => {
    const r = parseCourseExercise(minimal);
    expect(r.success).toBe(true);
  });

  it('rechaza id vacío', () => {
    const r = parseCourseExercise({ ...minimal, id: '' });
    expect(r.success).toBe(false);
  });

  it('rechaza content que no es objeto', () => {
    const r = parseCourseExercise({ ...minimal, content: 'oops' });
    expect(r.success).toBe(false);
  });

  it('getExerciseContent devuelve content cuando existe', () => {
    expect(getExerciseContent(minimal as any).title).toBe('Test');
  });
});

describe('courseExerciseSchemaNormsStrict', () => {
  const base = {
    id: 'x',
    type: 'multiple-choice',
    level: 'B1' as const,
    topic: 't',
    topicName: 'Grammar',
    content: {
      questions: [
        {
          question: 'Q?',
          options: ['a', 'b'],
          correctAnswer: 0,
          explanation: 'This is long enough to pass.',
        },
      ],
    },
  };

  it('falla si falta explanation en MC', () => {
    const r = parseCourseExerciseNormsStrict({
      ...base,
      content: {
        questions: [{ question: 'Q?', options: ['a', 'b'], correctAnswer: 0 }],
      },
    });
    expect(r.success).toBe(false);
  });

  it('pasa MC con explanation suficiente', () => {
    const r = parseCourseExerciseNormsStrict(base);
    expect(r.success).toBe(true);
  });

  it('pronunciation: rechaza expectedResponse con gloss', () => {
    const r = parseCourseExerciseNormsStrict({
      ...base,
      type: 'pronunciation',
      content: {
        expectedResponse: '[[Hello|Hola]]',
        questions: [{ question: 'Say hi' }],
      },
    });
    expect(r.success).toBe(false);
  });

  it('pronunciation: acepta expectedResponse plano', () => {
    const r = parseCourseExerciseNormsStrict({
      ...base,
      type: 'pronunciation',
      content: {
        expectedResponse: 'Hello there',
        questions: [{ question: 'Say hi' }],
      },
    });
    expect(r.success).toBe(true);
  });
});

describe('exerciseContentSchema', () => {
  it('parseExerciseContent acepta campos extra (passthrough)', () => {
    const r = parseExerciseContent({ title: 'T', customField: 1 });
    expect(r.success).toBe(true);
    if (r.success) expect((r.data as { customField?: number }).customField).toBe(1);
  });
});
