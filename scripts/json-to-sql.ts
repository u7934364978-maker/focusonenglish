import fs from 'fs';
import path from 'path';

const INPUT_DIR = 'scripts/generated-a2-batches';
const OUTPUT_DIR = 'supabase/migrations';

function escapeSql(str: string): string {
  if (!str) return 'NULL';
  // Use dollar quoting for safer SQL insertion of JSON content
  return `$JSON$${str}$JSON$`;
}

async function main() {
  const batchId = process.argv[2]; // e.g. "1-10"
  if (!batchId) {
    console.error('Usage: ts-node scripts/json-to-sql.ts 1-10');
    process.exit(1);
  }

  const [start, end] = batchId.split('-').map(Number);
  const migrationFile = path.join(OUTPUT_DIR, `20260207_seed_a2_units_${batchId}.sql`);
  
  let sql = `-- Seed A2 Units ${batchId}\n\n`;

  for (let unitId = start; unitId <= end; unitId++) {
    const jsonFile = path.join(INPUT_DIR, `unit-${unitId}.json`);
    if (!fs.existsSync(jsonFile)) {
      console.warn(`⚠️ File ${jsonFile} not found, skipping...`);
      continue;
    }

    const exercises = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
    
    // Insert Module if first lesson of module
    const unit = exercises[0];
    const moduleId = unit.moduleId;
    const lessonId = unit.lessonId;
    
    // We assume modules are already created or we create them if they don't exist
    // Using ON CONFLICT DO NOTHING for safety
    sql += `INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title)
VALUES ('a2-m${moduleId}', 'A2', 'general', ${moduleId}, 'Module ${moduleId}')
ON CONFLICT (id) DO NOTHING;\n\n`;

    sql += `INSERT INTO public.course_lessons (id, module_id, order_index, title)
VALUES ('${lessonId}', 'a2-m${moduleId}', ${unitId}, 'Unit ${unitId}')
ON CONFLICT (id) DO NOTHING;\n\n`;

    exercises.forEach((ex: any, index: number) => {
      sql += `INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  '${ex.id}',
  '${lessonId}',
  ${index + 1},
  '${ex.type}',
  ${escapeSql(ex.content.title || 'Exercise')},
  ${escapeSql(JSON.stringify(ex.content))}
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;\n`;
    });
    
    sql += `\n`;
  }

  fs.writeFileSync(migrationFile, sql);
  console.log(`✅ Migration created at ${migrationFile}`);
}

main().catch(console.error);
