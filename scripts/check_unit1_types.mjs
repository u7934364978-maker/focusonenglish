import { UNIT_1_EXERCISES } from '../src/lib/course/b2/unit-1.ts';

UNIT_1_EXERCISES.forEach((ex, idx) => {
  if (ex.type === 'multiple-choice') {
    if (!ex.content.questions) {
      console.log(`Exercise ${ex.id} is missing questions array!`);
      return;
    }
    ex.content.questions.forEach((q, qIdx) => {
      if (q.correctAnswer === undefined) {
        console.log(`Exercise ${ex.id}, Question ${qIdx} is missing correctAnswer!`);
      }
    });
  }
});
