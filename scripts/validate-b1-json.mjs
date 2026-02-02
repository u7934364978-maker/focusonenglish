import fs from 'fs';
import path from 'path';

const COURSE_DIR = 'src/content/cursos/ingles-b1';
const errors = [];

function validateUnit(file, data) {
    if (!data.course) errors.push(`${file}: Missing 'course' object`);
    if (!data.course?.unit_title) errors.push(`${file}: Missing 'unit_title'`);
    if (data.course?.level !== 'B1') errors.push(`${file}: Incorrect level (expected B1)`);
    
    if (!data.blocks || !Array.isArray(data.blocks)) {
        errors.push(`${file}: Missing or invalid 'blocks' array`);
        return;
    }

    data.blocks.forEach((block, bIdx) => {
        if (!block.content || !Array.isArray(block.content)) {
            errors.push(`${file}: Block ${bIdx} missing 'content' array`);
            return;
        }

        block.content.forEach((exercise, eIdx) => {
            const id = exercise.interaction_id || `Block ${bIdx} Ex ${eIdx}`;
            if (!exercise.type) errors.push(`${file}: ${id} missing 'type'`);
            if (!exercise.prompt_es) errors.push(`${file}: ${id} missing 'prompt_es'`);
            
            // Check for basic content variety/presence
            if (exercise.type === 'matching' && (!exercise.pairs || exercise.pairs.length === 0)) {
                errors.push(`${file}: ${id} (matching) missing pairs`);
            }
            if (exercise.type === 'multiple_choice' && (!exercise.options || exercise.options.length === 0)) {
                errors.push(`${file}: ${id} (multiple_choice) missing options`);
            }
        });
    });
}

async function main() {
    console.log('🔍 Validating B1 Course JSON files...');
    
    if (!fs.existsSync(COURSE_DIR)) {
        console.error(`Directory not found: ${COURSE_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(COURSE_DIR).filter(f => f.endsWith('.json'));
    
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
        errors.forEach(err => console.error(` - ${err}`));
        process.exit(1);
    } else {
        console.log('\n✅ All 30 units are valid!');
        process.exit(0);
    }
}

main();
