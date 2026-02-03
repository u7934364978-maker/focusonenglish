import fs from 'fs';
import path from 'path';

const contentDir = './src/content/cursos/ingles-a1';

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.json'));

files.forEach(file => {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern 1: "___ (some word)" -> "___"
    // Pattern 2: "(some word) ___" -> "___"
    let updatedContent = content.replace(/_{2,}\s*\([^)]+\)/g, (match) => {
        return match.split('(')[0].trim();
    });
    
    updatedContent = updatedContent.replace(/\([^)]+\)\s*_{2,}/g, (match) => {
        return match.split(')').pop().trim();
    });

    if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent);
        console.log(`Updated ${file}`);
    }
});
