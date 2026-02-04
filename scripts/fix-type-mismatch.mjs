import * as fs from 'fs';
import * as path from 'path';

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');
const unitFiles = fs.readdirSync(unitsDir).filter(f => f.startsWith('unit-') && f.endsWith('.ts'));

unitFiles.forEach(file => {
  const filePath = path.join(unitsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  const individualQuestionRegex = /\{\s*"id":\s*"c2-u[^"]+?-q[^"]+?"[\s\S]*?\n\s+\}/g;
  
  content = content.replace(individualQuestionRegex, (qMatch) => {
    try {
        const typeMatch = qMatch.match(/"type":\s*"([^"]+)"/);
        const type = typeMatch ? typeMatch[1] : '';
        
        const optionsMatch = qMatch.match(/"options":\s*\[([\s\S]*?)\]/);
        const hasOptions = !!optionsMatch;

        if (type === 'key-word-transformation' && hasOptions) {
            console.log(`Fixing ${file}: Removing options from transformation item ${qMatch.match(/"id":\s*"([^"]+)"/)[1]}`);
            return qMatch.replace(/\s*"options":\s*\[[\s\S]*?\],?/g, '');
        }

        if (type === 'multiple-choice' && hasOptions) {
            const optionsStr = optionsMatch[1];
            const correctMatch = qMatch.match(/"correctAnswer":\s*"([^"]+)"/);
            if (correctMatch) {
                const correct = correctMatch[1];
                if (!optionsStr.includes(`"${correct}"`)) {
                    console.log(`Fixing ${file}: Correct answer mismatch in multiple-choice item ${qMatch.match(/"id":\s*"([^"]+)"/)[1]}`);
                    // Add correct answer to options if missing
                    return qMatch.replace(/"options":\s*\[([\s\S]*?)\]/, (m, optBody) => {
                        const options = optBody.split(',').map(s => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
                        if (!options.includes(correct)) {
                            options[0] = correct; // Replace first option or add it
                        }
                        return `"options": ${JSON.stringify(options, null, 2)}`;
                    });
                }
            }
        }
        
        return qMatch;
    } catch (e) {
        return qMatch;
    }
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log('Finished fixing type mismatches.');
