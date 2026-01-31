import fs from 'fs';
import path from 'path';

const weeks = ['semana15', 'semana16'];
const baseDir = '/Users/lidia/Documents/focusonenglish/src/content/cursos/trabajo/administracion/b2/trimestre2';

let hasErrors = false;

weeks.forEach(week => {
    console.log(`\n--- Validating ${week} ---`);
    
    // Validate theory.json
    const theoryPath = path.join(baseDir, week, 'theory.json');
    try {
        const theory = JSON.parse(fs.readFileSync(theoryPath, 'utf8'));
        console.log(`Theory: ${theory.sections.length} sections found.`);
        if (theory.sections.length !== 8) {
            console.error(`Error: Expected 8 sections, found ${theory.sections.length}`);
            hasErrors = true;
        }
    } catch (e) {
        console.error(`Error parsing theory.json: ${e.message}`);
        hasErrors = true;
    }

    // Validate exercises.json
    const exercisesPath = path.join(baseDir, week, 'exercises.json');
    try {
        const exercises = JSON.parse(fs.readFileSync(exercisesPath, 'utf8'));
        console.log(`Exercises: ${exercises.items.length} items found.`);
        if (exercises.items.length !== 45) {
            console.error(`Error: Expected 45 exercises, found ${exercises.items.length}`);
            hasErrors = true;
        }

        const ids = new Set();
        exercises.items.forEach((ex, index) => {
            if (ids.has(ex.id)) {
                console.error(`Error: Duplicate ID found: ${ex.id}`);
                hasErrors = true;
            }
            ids.add(ex.id);

            if (ex.type === 'multipleChoice' || ex.type === 'reading-comprehension') {
                const qs = ex.questions || [ex];
                qs.forEach(q => {
                    if (q.answerIndex === undefined && ex.type !== 'writingTask') {
                         // Skip for now if it's reading-comprehension top level
                    }
                    if (q.answerIndex !== undefined && !q.explanation) {
                        // console.warn(`Warning: Missing explanation for ${ex.id}`);
                    }
                });
            }
        });
    } catch (e) {
        console.error(`Error parsing exercises.json: ${e.message}`);
        hasErrors = true;
    }
});

if (hasErrors) {
    process.exit(1);
} else {
    console.log('\nAll validations passed!');
}
