import { ExerciseGenerator } from '../src/lib/course/engine/generator';

const generator = new ExerciseGenerator();

console.log('🚀 DYNAMIC ENGINE DEMO: UNIT 2 (COFFEE BREAK)\n');

// Generate variants for I want + {drink}
const variants = generator.generateVariants('BP-WANT-01', 5);

variants.forEach((ex: any, i: number) => {
  console.log(`Variant ${i + 1}:`);
  console.log(`  English: ${ex.content.questions[0].text}`);
  console.log(`  Answer: ${ex.content.questions[0].correctAnswers[0]}`);
  console.log(`  Exp: ${ex.content.questions[0].explanation}\n`);
});

console.log('🚀 DYNAMIC ENGINE DEMO: UNIT 20 (PREPOSITIONS)\n');

// Generate variants for Prepositions
const prepVariants = generator.generateVariants('BP-PREP-01', 5);

prepVariants.forEach((ex: any, i: number) => {
  console.log(`Variant ${i + 1}:`);
  console.log(`  English: ${ex.content.questions[0].text}`);
  console.log(`  Answer: ${ex.content.questions[0].correctAnswers[0]}`);
  console.log(`  Exp: ${ex.content.questions[0].explanation}\n`);
});
