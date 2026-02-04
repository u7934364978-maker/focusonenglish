import { B2_UNITS } from './src/lib/b2-units';

B2_UNITS.forEach((unit) => {
  unit.exercises.forEach((ex: any, exIdx: number) => {
    if (ex.questions) {
      ex.questions.forEach((q: any, qIdx: number) => {
        if (q.correctAnswer && typeof q.correctAnswer !== 'string') {
          console.log(`Unit ${unit.id} Block ${exIdx + 1} Question ${qIdx + 1} has non-string correctAnswer:`, typeof q.correctAnswer, q.correctAnswer);
        }
        if (q.options) {
          q.options.forEach((opt: any, optIdx: number) => {
             if (typeof opt !== 'string') {
               console.log(`Unit ${unit.id} Block ${exIdx + 1} Question ${qIdx + 1} Option ${optIdx + 1} is not a string:`, typeof opt, opt);
             }
          });
        }
      });
    }
  });
});

