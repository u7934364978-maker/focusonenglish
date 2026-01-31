
import { localCourseService } from './src/lib/services/local-course-service.js';

async function test() {
  try {
    const lesson1 = await localCourseService.getTravelLesson('a1', 'preparacion-viaje', 'semana01', 'lesson1');
    console.log('Lesson 1:', lesson1 ? 'Found: ' + lesson1.title : 'Not found');

    const lesson2 = await localCourseService.getTravelLesson('a1', 'preparacion-viaje', 'semana01', 'lesson2');
    console.log('Lesson 2:', lesson2 ? 'Found: ' + lesson2.title : 'Not found');

    const lesson3 = await localCourseService.getTravelLesson('a1', 'preparacion-viaje', 'semana01', 'lesson3');
    console.log('Lesson 3:', lesson3 ? 'Found: ' + lesson3.title : 'Not found');
  } catch (err) {
    console.error('Test failed:', err);
  }
}

test();
