import fs from 'fs';
import path from 'path';

const COURSE_DIR = 'src/content/cursos/ingles-a2';
const EXPECTED_UNITS = 60;
const EXPECTED_EXERCISES = 500;
const errors = [];

function validateUnit(file, data) {
    if (!data.course) {
        errors.push(`${file}: Missing 'course' object`);
        return;
    }
    if (!data.course.unit_title) errors.push(`${file}: Missing 'unit_title'`);
    if (data.course.level !== 'A2') errors.push(`${file}: Incorrect level (expected A2, got ${data.course.level})`);
    
    if (!data.blocks || !Array.isArray(data.blocks)) {
        errors.push(`${file}: Missing or invalid 'blocks' array`);
        return;
    }

    let totalExercisesInUnit = 0;

    data.blocks.forEach((block, bIdx) => {
        if (!block.content || !Array.isArray(block.content)) {
            errors.push(`${file}: Block ${bIdx} missing 'content' array`);
            return;
        }

        totalExercisesInUnit += block.content.length;

        block.content.forEach((exercise, eIdx) => {
            const id = exercise.interaction_id || `Block ${bIdx} Ex ${eIdx}`;
            if (!exercise.type) errors.push(`${file}: ${id} missing 'type'`);
            if (!exercise.prompt_es) errors.push(`${file}: ${id} missing 'prompt_es'`);
            
            // Check for specific type requirements
            if (exercise.type === 'matching') {
                if (!exercise.pairs || exercise.pairs.length === 0) {
                    errors.push(`${file}: ${id} (matching) missing pairs`);
                }
                if (!exercise.correct_answer || typeof exercise.correct_answer !== 'object') {
                    errors.push(`${file}: ${id} (matching) missing or invalid correct_answer`);
                }
            }
            if (exercise.type === 'multiple_choice') {
                if (!exercise.options || exercise.options.length === 0) {
                    errors.push(`${file}: ${id} (multiple_choice) missing options`);
                }
                if (exercise.correct_answer === undefined) {
                    errors.push(`${file}: ${id} (multiple_choice) missing correct_answer`);
                }
            }
            if (exercise.type === 'fill_blanks') {
                if (!exercise.correct_answer) {
                    errors.push(`${file}: ${id} (fill_blanks) missing correct_answer`);
                }
            }
            if (exercise.type === 'true_false') {
                if (exercise.correct_answer === undefined) {
                    errors.push(`${file}: ${id} (true_false) missing correct_answer`);
                }
            }
            if (exercise.type === 'reorder_words') {
                if (!exercise.options || !exercise.correct_answer) {
                    errors.push(`${file}: ${id} (reorder_words) missing options or correct_answer`);
                }
            }
        });
    });

    if (totalExercisesInUnit !== EXPECTED_EXERCISES) {
        errors.push(`${file}: Expected ${EXPECTED_EXERCISES} exercises, but found ${totalExercisesInUnit}`);
    }
}

async function main() {
    console.log('🔍 Validating A2 Course JSON files...');
    
    if (!fs.existsSync(COURSE_DIR)) {
        console.error(`Directory not found: ${COURSE_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(COURSE_DIR).filter(f => f.endsWith('.json') && f.startsWith('unit'));
    
    if (files.length !== EXPECTED_UNITS) {
        errors.push(`Course Directory: Expected ${EXPECTED_UNITS} unit files, but found ${files.length}`);
    }

    files.forEach(file => {
        const filePath = path.join(COURSE_DIR, file);
        try {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            validateUnit(file, data);
        } catch (e) {
            errors.push(`${file}: Invalid JSON format - ${e.message}`);
        }
    });

    if (errors.length > 0) {
        console.error('\n❌ Validation failed with following errors:');
        // Show first 20 errors to avoid flooding
        errors.slice(0, 20).forEach(err => console.error(` - ${err}`));
        if (errors.length > 20) console.error(` ... and ${errors.length - 20} more errors.`);
        process.exit(1);
    } else {
        console.log(`\n✅ All ${files.length} units are valid and contain ${EXPECTED_EXERCISES} exercises each!`);
        process.exit(0);
    }
}

main();
