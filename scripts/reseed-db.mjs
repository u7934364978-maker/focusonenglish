import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const CURSOS_DIR = path.join(process.cwd(), 'src/content/cursos');
const levels = ['ingles-a1', 'ingles-a2', 'ingles-b1', 'ingles-b2', 'ingles-c1', 'ingles-c2'];

async function reseed() {
    console.log('🚀 Starting Full Reseed...');

    // 1. Delete existing content to avoid "poisoned" data
    console.log('🗑️ Cleaning up existing content...');
    
    // We delete in reverse order of dependencies
    const { error: delExercisesError } = await supabase.from('course_exercises').delete().neq('id', 'placeholder');
    if (delExercisesError) console.error('Error deleting exercises:', delExercisesError);
    
    const { error: delLessonsError } = await supabase.from('course_lessons').delete().neq('id', 'placeholder');
    if (delLessonsError) console.error('Error deleting lessons:', delLessonsError);
    
    const { error: delModulesError } = await supabase.from('course_modules').delete().neq('id', 'placeholder');
    if (delModulesError) console.error('Error deleting modules:', delModulesError);

    console.log('✅ DB Cleaned.');

    for (let moduleIdx = 0; moduleIdx < levels.length; moduleIdx++) {
        const levelPath = levels[moduleIdx];
        const levelDir = path.join(CURSOS_DIR, levelPath);
        if (!fs.existsSync(levelDir)) continue;

        const cefrLevel = levelPath.split('-')[1]?.toUpperCase() || 'A1';
        const moduleId = levelPath;
        const moduleTitle = cefrLevel === 'A1' ? 'English A1 - Beginner' : 
                           cefrLevel === 'A2' ? 'English A2 - Elementary' :
                           cefrLevel === 'B1' ? 'English B1 - Intermediate' :
                           cefrLevel === 'B2' ? 'English B2 - Upper Intermediate' :
                           cefrLevel === 'C1' ? 'English C1 - Advanced' : 'English C2 - Proficiency';

        console.log(`📦 Processing Module: ${moduleTitle} (${cefrLevel})`);

        // Insert Module
        const { error: modError } = await supabase.from('course_modules').insert({
            id: moduleId,
            course_level: cefrLevel,
            course_goal: 'generic',
            order_index: moduleIdx + 1,
            title: moduleTitle
        });

        if (modError) {
            console.error(`Error inserting module ${moduleId}:`, modError);
            continue;
        }

        const files = fs.readdirSync(levelDir).filter(f => f.endsWith('.json')).sort((a, b) => {
            const getNum = (s) => parseInt(s.match(/\d+/) || [0]);
            return getNum(a) - getNum(b);
        });

        for (let lessonIdx = 0; lessonIdx < files.length; lessonIdx++) {
            const file = files[lessonIdx];
            const filePath = path.join(levelDir, file);
            const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            const unitId = content.course.unit_id || file.replace('.json', '');
            const lessonId = `${moduleId}-${unitId}`;
            const lessonTitle = content.course.unit_title;

            // Insert Lesson
            const { error: lessonError } = await supabase.from('course_lessons').insert({
                id: lessonId,
                module_id: moduleId,
                order_index: lessonIdx + 1,
                title: lessonTitle,
                duration: content.course.total_duration_minutes || 60
            });

            if (lessonError) {
                console.error(`Error inserting lesson ${lessonId}:`, lessonError);
                continue;
            }

            if (content.blocks) {
                let exerciseOrder = 1;
                const exerciseBatch = [];

                content.blocks.forEach(block => {
                    if (block.content) {
                        block.content.forEach(interaction => {
                            const exerciseId = interaction.interaction_id;
                            const type = interaction.type;
                            const title = interaction.prompt_es || interaction.prompt || 'Exercise';
                            
                            const cleanInteraction = { ...interaction };
                            delete cleanInteraction.interaction_id;
                            delete cleanInteraction.type;

                            exerciseBatch.push({
                                id: exerciseId,
                                lesson_id: lessonId,
                                order_index: exerciseOrder++,
                                type: type,
                                title: title,
                                content: cleanInteraction
                            });
                        });
                    }
                });

                if (exerciseBatch.length > 0) {
                    const { error: exError } = await supabase.from('course_exercises').insert(exerciseBatch);
                    if (exError) console.error(`Error inserting batch for ${lessonId}:`, exError);
                }
            }
        }
        console.log(`✅ Level ${cefrLevel} completed.`);
    }

    console.log('🎉 Full Reseed Completed Successfully!');
}

reseed().catch(console.error);
