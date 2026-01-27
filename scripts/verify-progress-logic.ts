import { getUncompletedExercises } from '../src/lib/course-progress';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function verify() {
  const userId = 'bddd168d-9869-465b-bb7d-41a3be09931d'; // Admin user
  const result = await getUncompletedExercises(
    userId,
    'finanzas',
    'b1',
    'trimestre1',
    'semana01'
  );

  if (result) {
    console.log(`Course: ${result.courseTitle}`);
    console.log(`Week: ${result.weekTitle}`);
    console.log(`Uncompleted Exercises: ${result.uncompletedExercises.length}`);
    if (result.uncompletedExercises.length > 0) {
      console.log('Sample:', result.uncompletedExercises[0]);
    }
  } else {
    console.log('No exercises found or error occurred.');
  }
}

verify();
