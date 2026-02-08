import { CourseEngine } from './src/lib/course-engine/index';
import fs from 'fs';

const filePath = './src/content/cursos/ingles-a1/unit1.json';
const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
const normalized = CourseEngine.normalize(raw);
const result = CourseEngine.validate(normalized);

if (result.success) {
  console.log('✅ Validation successful');
} else {
  console.log('❌ Validation failed:');
  console.log(JSON.stringify(result.errors, null, 2));
}
