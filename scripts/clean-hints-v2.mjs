import fs from 'fs';
import path from 'path';

const contentDir = './src/content/cursos/ingles-a1';
const migrationsDir = './supabase/migrations';

function cleanHints(content) {
  // Target JSON keys that contain text
  // We want to remove patterns like (word), (word1 / word2), (word1 / word2 / word3)
  // But keep instructions like (Article), (male parent), (plural), etc.
  
  return content.replace(/"(text|prompt|instructions|stimulus_en|prompt_es|prompt_en|prompt)":\s*"([^"]+)"/g, (match, key, value) => {
    let cleanedValue = value.replace(/\s*\(([^)]+)\)/g, (m, inner) => {
       const trimmedInner = inner.trim();
       
       // Metadata we want to KEEP
       if (/parent|male|female|plural|question|singular|Rule|Article|verb|adjective|pronoun|preposition|negative|interrogative|affirmative/i.test(trimmedInner)) {
         return m; 
       }

       // If it contains a slash, it's almost certainly a hint (e.g., new / coat)
       if (trimmedInner.includes('/')) {
         return '';
       }

       // If it's 1-3 words, it's likely a hint
       if (trimmedInner.split(/\s+/).length <= 3) {
          return '';
       }
       
       return m;
    });

    // Cleanup extra underscores if they were inside parentheses (though they usually aren't)
    // and cleanup double spaces
    cleanedValue = cleanedValue.replace(/\s+/g, ' ').trim();
    
    // Also remove hint from the end of a sentence like "She has a ___ (new / coat)."
    // after the replacement it might leave a trailing space before the period.
    cleanedValue = cleanedValue.replace(/\s+\./g, '.');

    return `"${key}": "${cleanedValue}"`;
  });
}

// Process JSON files
const jsonFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.json'));
for (const file of jsonFiles) {
  const filePath = path.join(contentDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const cleaned = cleanHints(content);
  if (content !== cleaned) {
    console.log(`Cleaned hints in ${file}`);
    fs.writeFileSync(filePath, cleaned);
  }
}

// Process Migrations
const migrationFiles = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql') && f.includes('expand_unit'));
for (const file of migrationFiles) {
  const filePath = path.join(migrationsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const cleaned = cleanHints(content);
  if (content !== cleaned) {
    console.log(`Cleaned hints in migration ${file}`);
    fs.writeFileSync(filePath, cleaned);
  }
}
