
const fs = require('fs');
const path = require('path');

const B2_DIR = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/b2';

function transformUnit(unitId) {
    const filePath = path.join(B2_DIR, `unit-${unitId}.ts`);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    
    const arrayStartMatch = content.match(/export const UNIT_\d+_EXERCISES(?::\s*Exercise\[\])?\s*=\s*\[/);
    if (!arrayStartMatch) return;

    const startIndex = arrayStartMatch.index + arrayStartMatch[0].lastIndexOf('[');
    
    let bracketCount = 0;
    let endIndex = -1;
    for (let i = startIndex; i < content.length; i++) {
        if (content[i] === '[') bracketCount++;
        else if (content[i] === ']') bracketCount--;
        
        if (bracketCount === 0) {
            endIndex = i;
            break;
        }
    }

    if (endIndex === -1) return;

    let arrayStr = content.substring(startIndex, endIndex + 1);
    
    let exercises;
    try {
        // Use new Function which is the safest way to parse valid JS content including trailing commas, unquoted keys, etc.
        exercises = new Function(`return ${arrayStr}`)();
        console.log(`Unit ${unitId}: Found ${exercises.length} exercises`);
    } catch (e) {
        console.error(`Error parsing unit-${unitId}.ts:`, e.message);
        return;
    }

    if (!Array.isArray(exercises) || exercises.length === 0) return;

    const blocks = [];
    for (let i = 0; i < exercises.length; i += 10) {
        const blockNum = (i / 10) + 1;
        const group = exercises.slice(i, i + 10);
        
        const questions = group.map(ex => ({
            id: ex.id,
            type: ex.type,
            ...ex.content
        }));

        blocks.push({
            id: `b2-u${unitId}-b${blockNum}`,
            type: 'mixed',
            title: `Part ${blockNum}: ${group[0]?.content?.title || 'Review'}`,
            questions: questions
        });
    }

    const newContent = `import { Exercise } from "@/types/course";

// ============================================
// B2 COURSE - UNIT ${unitId}
// ================= ::::::::::::::::::::::::::
// Generated Exercises grouped into blocks
// ================= ::::::::::::::::::::::::::

export const UNIT_${unitId}_EXERCISES: Exercise[] = ${JSON.stringify(blocks, null, 2)};
`;

    fs.writeFileSync(filePath, newContent);
    console.log(`Successfully transformed unit-${unitId}.ts`);
}

for (let i = 1; i <= 30; i++) {
    transformUnit(i);
}
