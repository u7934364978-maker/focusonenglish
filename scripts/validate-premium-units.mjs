import fs from 'fs';
import path from 'path';

const targetDir = process.argv[2];
if (!targetDir) {
    console.error('Please provide a target directory (e.g., src/content/cursos/ingles-b1)');
    process.exit(1);
}

const errors = [];

function validateUnit(file, data) {
    if (!data.course) errors.push(`${file}: Missing 'course' object`);
    if (!data.course?.unit_title) errors.push(`${file}: Missing 'unit_title'`);
    
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

            // Word formation specific check
            if (exercise.type === 'word-formation' && !exercise.base_word) {
                errors.push(`${file}: ${id} (word-formation) missing base_word`);
            }

            // Gapped text / Cloze check
            const textContent = exercise.stimulus_en || exercise.main_text || '';
            if ((exercise.type === 'multiple_choice_cloze' || exercise.type === 'open-cloze') && !textContent.includes('___') && !textContent.includes('[GAP')) {
                errors.push(`${file}: ${id} (${exercise.type}) text content missing gaps (___ or [GAP n])`);
            }
        });
    });
}

async function main() {
    console.log(`🔍 Validating ${targetDir} JSON files...`);
    
    if (!fs.existsSync(targetDir)) {
        console.error(`Directory not found: ${targetDir}`);
        process.exit(1);
    }

    const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.json'));
    
    files.forEach(file => {
        const filePath = path.join(targetDir, file);
        try {
            const content = fs.readFileSync(filePath, 'utf-8');
            if (content.length < 500 && !file.includes('placeholder')) {
                // Potential empty unit
                const data = JSON.parse(content);
                if (data.blocks?.[0]?.content?.length === 0 || !data.blocks) {
                     errors.push(`${file}: Unit seems empty or too small`);
                }
            }
            const data = JSON.parse(content);
            validateUnit(file, data);
        } catch (e) {
            errors.push(`${file}: Invalid JSON format - ${e.message}`);
        }
    });

    if (errors.length > 0) {
        console.error(`\n❌ Validation failed for ${targetDir} with following errors:`);
        errors.forEach(err => console.error(` - ${err}`));
        process.exit(1);
    } else {
        console.log(`\n✅ All units in ${targetDir} are valid!`);
        process.exit(0);
    }
}

main();
