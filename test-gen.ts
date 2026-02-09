import { generateExerciseV2 } from './src/lib/ai/generator-v2';
import dotenv from 'dotenv';
dotenv.config();
async function test() {
  const result = await generateExerciseV2({
    exerciseType: 'word-formation',
    level: 'B1',
    difficulty: 'medium',
    topic: 'b1-entertainment'
  });
  console.log(JSON.stringify(result, null, 2));
}
test();
