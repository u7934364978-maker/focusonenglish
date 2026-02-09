import fs from 'fs';
import path from 'path';

const LEVELS = [
  'ingles-a1',
  'ingles-a2',
  'ingles-b1',
  'ingles-b2'
];

function audit() {
  let globalTotal = 0;
  
  for (const level of LEVELS) {
    const levelDir = path.join(process.cwd(), 'src/content/cursos', level);
    if (!fs.existsSync(levelDir)) {
      console.warn(`Directory not found: ${levelDir}`);
      continue;
    }

    const files = fs.readdirSync(levelDir).filter(f => f.endsWith('.json'));
    let levelTotal = 0;

    for (const file of files) {
      const filePath = path.join(levelDir, file);
      try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        for (const block of content.blocks || []) {
          for (const interaction of block.content || []) {
            if (interaction.interaction_id) {
              levelTotal++;
            }
          }
        }
      } catch (e) {
        console.error(`Error reading ${file}:`, e.message);
      }
    }
    console.log(`Level ${level}: ${levelTotal} exercises`);
    globalTotal += levelTotal;
  }
  console.log(`\nGlobal Total: ${globalTotal} exercises`);
}

audit();
