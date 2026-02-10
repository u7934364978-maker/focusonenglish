import fs from 'fs';
import path from 'path';

const CURSOS_DIR = path.join(process.cwd(), 'src/content/cursos');
const OUTPUT_DIR = path.join(process.cwd(), 'supabase/migrations/full_content_split');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const levels = ['ingles-a1', 'ingles-a2', 'ingles-b1', 'ingles-b2', 'ingles-c1', 'ingles-c2'];

levels.forEach((levelPath, moduleIdx) => {
    const levelDir = path.join(CURSOS_DIR, levelPath);
    if (!fs.existsSync(levelDir)) return;

    let sql = `-- Migration for ${levelPath}
-- Generated on: ${new Date().toISOString()}

BEGIN;

`;

    const cefrLevel = levelPath.split('-')[1]?.toUpperCase() || 'A1';
    const moduleId = levelPath;
    const moduleTitle = cefrLevel === 'A1' ? 'English A1 - Beginner' : 
                       cefrLevel === 'A2' ? 'English A2 - Elementary' :
                       cefrLevel === 'B1' ? 'English B1 - Intermediate' :
                       cefrLevel === 'B2' ? 'English B2 - Upper Intermediate' :
                       cefrLevel === 'C1' ? 'English C1 - Advanced' : 'English C2 - Proficiency';

    // 1. Insert Module
    sql += `INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title)
VALUES ('${moduleId}', '${cefrLevel}', 'generic', ${moduleIdx + 1}, '${moduleTitle}')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, course_level = EXCLUDED.course_level;\n\n`;

    const files = fs.readdirSync(levelDir).filter(f => f.endsWith('.json')).sort((a, b) => {
        const getNum = (s) => parseInt(s.match(/\d+/) || [0]);
        return getNum(a) - getNum(b);
    });

    files.forEach((file, lessonIdx) => {
        const filePath = path.join(levelDir, file);
        const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const unitId = content.course.unit_id || file.replace('.json', '');
        const lessonId = `${moduleId}-${unitId}`;
        const lessonTitle = content.course.unit_title.replace(/'/g, "''");

        // 2. Insert Lesson
        sql += `INSERT INTO public.course_lessons (id, module_id, order_index, title, duration)
VALUES ('${lessonId}', '${moduleId}', ${lessonIdx + 1}, '${lessonTitle}', ${content.course.total_duration_minutes || 60})
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;\n`;

        if (content.blocks) {
            let exerciseOrder = 1;
            content.blocks.forEach(block => {
                if (block.content) {
                    block.content.forEach(interaction => {
                        const exerciseId = interaction.interaction_id;
                        const type = interaction.type;
                        const title = (interaction.prompt_es || interaction.prompt || 'Exercise').replace(/'/g, "''");
                        
                        const cleanInteraction = { ...interaction };
                        delete cleanInteraction.interaction_id;
                        delete cleanInteraction.type;

                        const contentJson = JSON.stringify(cleanInteraction).replace(/'/g, "''");

                        // 3. Insert Exercise
                        sql += `INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES ('${exerciseId}', '${lessonId}', ${exerciseOrder++}, '${type}', '${title}', '${contentJson}')
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, type = EXCLUDED.type;\n`;
                    });
                }
            });
        }
        sql += `\n`;
    });

    sql += `COMMIT;`;
    
    const outputFile = path.join(OUTPUT_DIR, `${levelPath}.sql`);
    fs.writeFileSync(outputFile, sql);
    console.log(`✅ Migration generated for ${levelPath} at ${outputFile}`);
});
