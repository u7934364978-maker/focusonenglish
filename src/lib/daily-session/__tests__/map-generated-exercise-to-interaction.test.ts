import { mapCourseExerciseToIndexedInteraction } from '../map-generated-exercise-to-interaction';
import { parseCourseExercise } from '@/lib/validation/course-exercise-schema';

function ex(raw: unknown) {
  const r = parseCourseExercise(raw);
  if (!r.success) throw new Error(String(r.error));
  return r.data;
}

describe('mapCourseExerciseToIndexedInteraction', () => {
  it('mapea fill-blank con banco a fill_blank', () => {
    const m = mapCourseExerciseToIndexedInteraction(
      ex({
        id: 'fb-1',
        type: 'fill-blank',
        level: 'A1',
        topic: 't',
        topicName: 'Grammar',
        content: {
          title: 'T',
          instructions: 'Completa.',
          questions: [
            {
              question: 'I ___ a student.',
              options: ['am', 'is', 'are', 'be'],
              correctAnswer: 'am',
              explanation: 'With "I" we use "am" in present simple.',
            },
          ],
        },
      }),
      0,
    );
    expect(m).not.toBeNull();
    expect(m!.type).toBe('fill_blank');
    expect(m!.stimulus_en).toContain('___');
    expect(m!.correct_answer).toBe('am');
    expect(m!.options?.length).toBe(4);
  });

  it('si translation trae enunciado de hueco + opciones, reinterpreta como fill-blank', () => {
    const m = mapCourseExerciseToIndexedInteraction(
      ex({
        id: 'tr-mc',
        type: 'translation',
        level: 'A1',
        topic: 't',
        topicName: 'Vocab',
        content: {
          title: 'T',
          instructions: 'Responde la pregunta.',
          questions: [
            {
              question:
                '[[Choose the correct word: This is my ____.|Elige la palabra correcta: This is my ____.]]',
              options: ['mother', 'brother', 'teacher', 'name'],
              correctAnswer: 0,
              explanation: 'Mother means madre.',
            },
          ],
        },
      }),
      0,
    );
    expect(m).not.toBeNull();
    expect(m!.type).toBe('fill_blank');
    expect(m!.stimulus_en).toContain('___');
    expect(m!.correct_answer).toBe('mother');
  });

  it('mapea translation a short_writing', () => {
    const m = mapCourseExerciseToIndexedInteraction(
      ex({
        id: 'tr-1',
        type: 'translation',
        level: 'A1',
        topic: 't',
        topicName: 'Vocab',
        content: {
          title: 'T',
          instructions: 'Traduce al inglés.',
          questions: [
            {
              question: 'Hola',
              correctAnswer: 'Hello',
              explanation: '"Hola" is "Hello" in English.',
            },
          ],
        },
      }),
      0,
    );
    expect(m).not.toBeNull();
    expect(m!.type).toBe('short_writing');
    expect(m!.stimulus_es).toBe('Hola');
    expect(m!.correct_answer).toBe('Hello');
  });
});
