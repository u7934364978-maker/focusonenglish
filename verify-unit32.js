const { CourseUnitSchema } = require('./src/lib/course-engine/schema.ts');
const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./src/content/cursos/ingles-a1/unit32.json', 'utf8'));
  const result = CourseUnitSchema.safeParse(data);
  if (result.success) {
    console.log('✅ unit32.json is valid according to CourseUnitSchema');
  } else {
    console.error('❌ unit32.json validation failed:');
    console.error(JSON.stringify(result.error.issues, null, 2));
    process.exit(1);
  }
} catch (e) {
  console.error('❌ Error reading or parsing unit32.json:', e.message);
  process.exit(1);
}
