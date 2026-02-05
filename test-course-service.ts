import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { courseService } from './src/lib/services/course-service';

async function test() {
  try {
    console.log('Testing getModules for Traveler English A1...');
    const modules = await courseService.getModules('A1', 'viajes');
    console.log(`Successfully fetched ${modules.length} modules.`);
    if (modules.length > 0) {
      console.log('First module:', JSON.stringify(modules[0], null, 2));
    }
  } catch (error) {
    console.error('Test failed:', error);
  }
}

test();
