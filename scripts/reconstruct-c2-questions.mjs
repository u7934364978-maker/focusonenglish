
import * as fs from 'fs';
import * as path from 'path';

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');
const unitFiles = fs.readdirSync(unitsDir).filter(f => f.startsWith('unit-') && f.endsWith('.ts'));

unitFiles.forEach(file => {
  const filePath = path.join(unitsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  const individualQuestionRegex = /\{\s*"id":\s*"c2-u[^"]+?-q[^"]+?"[\s\S]*?\}/g;
  
  content = content.replace(individualQuestionRegex, (qMatch) => {
    try {
        const typeMatch = qMatch.match(/"type":\s*"([^"]+)"/);
        const type = typeMatch ? typeMatch[1] : '';
        
        const optionsMatch = qMatch.match(/"options":\s*\[/);
        if (optionsMatch) {
            // If it has options, it's multiple choice or similar. 
            // Don't try to transform it even if the question text is weird.
            return qMatch;
        }

        const sentenceMatch = qMatch.match(/"sentence":\s*"([^"]+)"/);
        const sentence = sentenceMatch ? sentenceMatch[1] : '';
        
        const keyWordMatch = qMatch.match(/"keyWord":\s*"([^"]+)"/);
        const keyWord = keyWordMatch ? keyWordMatch[1] : '';
        
        const startOfAnswerMatch = qMatch.match(/"startOfAnswer":\s*"([^"]+)"/);
        const startOfAnswer = startOfAnswerMatch ? startOfAnswerMatch[1] : '';
        
        const correctAnswerMatch = qMatch.match(/"correctAnswer":\s*"([^"]+)"/);
        const correctAnswer = correctAnswerMatch ? correctAnswerMatch[1] : '';
        
        const questionMatch = qMatch.match(/"question":\s*"([\s\S]*?)"/);
        const existingQuestion = questionMatch ? questionMatch[1] : '';
        
        const idMatch = qMatch.match(/"id":\s*"([^"]+)"/);
        const id = idMatch ? idMatch[1] : '';

        // Check if this IS a transformation
        const isTransformation = type === 'key-word-transformation' || 
                                 existingQuestion.includes('__________') || 
                                 (sentence && keyWord);
        
        if (isTransformation) {
          let finalSentence = sentence || '';
          let finalKeyWord = keyWord || '';
          let finalStartOfAnswer = startOfAnswer || '';
          let finalCorrectAnswer = correctAnswer || '';
          
          // Try to extract from existingQuestion if fields are missing
          if (existingQuestion.includes('__________')) {
            const parts = existingQuestion.split(/\\n\\n|\n\n/);
            if (parts.length >= 2) {
                // First part usually has sentence and keyword
                const firstPart = parts[0].trim();
                if (!finalSentence) {
                    const kwMatch = firstPart.match(/\(([^)]+)\)$/);
                    if (kwMatch) {
                        finalKeyWord = kwMatch[1];
                        finalSentence = firstPart.replace(/\([^)]+\)$/, '').trim();
                    } else {
                        finalSentence = firstPart;
                    }
                }
                
                // Second part has startOfAnswer and __________
                if (!finalStartOfAnswer) {
                    const secondPart = parts[1].trim();
                    finalStartOfAnswer = secondPart.replace('__________', '').trim();
                }
            }
          }
          
          if (!finalSentence && existingQuestion && !existingQuestion.includes('__________')) {
            finalSentence = existingQuestion;
          }

          // Fix correctAnswer to exclude startOfAnswer
          if (finalStartOfAnswer && finalCorrectAnswer.toLowerCase().startsWith(finalStartOfAnswer.toLowerCase())) {
            finalCorrectAnswer = finalCorrectAnswer.substring(finalStartOfAnswer.length).trim();
            if (finalCorrectAnswer.endsWith('.')) {
              finalCorrectAnswer = finalCorrectAnswer.slice(0, -1);
            }
          }

          const newQuestionText = `${finalSentence} (${finalKeyWord.toUpperCase()})\\n\\n${finalStartOfAnswer} __________`;
          
          let updatedQ = qMatch;
          
          if (type !== 'key-word-transformation') {
            updatedQ = updatedQ.replace(/"type":\s*"[^"]*"/, '"type": "key-word-transformation"');
          }
          
          if (updatedQ.includes('"question":')) {
            updatedQ = updatedQ.replace(/"question":\s*"[\s\S]*?"/, `"question": "${newQuestionText}"`);
          } else {
            updatedQ = updatedQ.replace(/"type":\s*"key-word-transformation",?/, `"type": "key-word-transformation",\n      "question": "${newQuestionText}",`);
          }
          
          updatedQ = updatedQ.replace(/"correctAnswer":\s*"[^"]*"/, `"correctAnswer": "${finalCorrectAnswer}"`);
          
          // Sync fields
          if (!updatedQ.includes('"sentence":') && finalSentence) {
             updatedQ = updatedQ.replace(/"id":\s*"[^"]*",/, (m) => `${m}\n      "sentence": "${finalSentence}",`);
          } else if (finalSentence) {
             updatedQ = updatedQ.replace(/"sentence":\s*"[^"]*"/, `"sentence": "${finalSentence}"`);
          }

          if (!updatedQ.includes('"keyWord":') && finalKeyWord) {
             updatedQ = updatedQ.replace(/"id":\s*"[^"]*",/, (m) => `${m}\n      "keyWord": "${finalKeyWord}",`);
          } else if (finalKeyWord) {
             updatedQ = updatedQ.replace(/"keyWord":\s*"[^"]*"/, `"keyWord": "${finalKeyWord}"`);
          }

          if (!updatedQ.includes('"startOfAnswer":') && finalStartOfAnswer) {
             updatedQ = updatedQ.replace(/"id":\s*"[^"]*",/, (m) => `${m}\n      "startOfAnswer": "${finalStartOfAnswer}",`);
          } else if (finalStartOfAnswer) {
             updatedQ = updatedQ.replace(/"startOfAnswer":\s*"[^"]*"/, `"startOfAnswer": "${finalStartOfAnswer}"`);
          }

          return updatedQ;
        }
        
        return qMatch;
    } catch (e) {
      console.error(`Error processing question in ${file}:`, e);
      return qMatch;
    }
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log('Finished reconstruction.');
