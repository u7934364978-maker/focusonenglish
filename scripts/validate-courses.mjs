import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CourseEngine } from '../src/lib/course-engine/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COURSES_DIR = path.join(__dirname, '..', 'src', 'content', 'cursos');

async function validateDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let totalFiles = 0;
  let errorFiles = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const results = await validateDirectory(fullPath);
      totalFiles += results.totalFiles;
      errorFiles += results.errorFiles;
    } else if (entry.name.endsWith('.json')) {
      totalFiles++;
      console.log(`🔍 Validating: ${path.relative(COURSES_DIR, fullPath)}`);
      
      try {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const raw = JSON.parse(content);
        
        const normalized = CourseEngine.normalize(raw);
        const result = CourseEngine.validate(normalized);
        
        if (!result.success) {
          errorFiles++;
          console.error(`❌ Validation failed for ${entry.name}:`);
          result.errors.forEach(err => console.error(`   - ${err}`));
        }
      } catch (error) {
        errorFiles++;
        console.error(`❌ Error processing ${entry.name}: ${error.message}`);
        console.error(error.stack);
      }
    }
  }

  return { totalFiles, errorFiles };
}

async function main() {
  console.log('🚀 Starting Universal Course Validation\n');
  
  const { totalFiles, errorFiles } = await validateDirectory(COURSES_DIR);
  
  console.log('\n' + '='.repeat(40));
  console.log(`📊 Summary:`);
  console.log(`   Total Files: ${totalFiles}`);
  console.log(`   Passed:      ${totalFiles - errorFiles}`);
  console.log(`   Failed:      ${errorFiles}`);
  console.log('='.repeat(40));

  if (errorFiles > 0) {
    process.exit(1);
  } else {
    console.log('\n✅ All courses validated successfully!');
    process.exit(0);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
