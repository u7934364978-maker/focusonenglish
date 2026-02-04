
import * as fs from 'fs';
import * as path from 'path';

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');
const unitFiles = fs.readdirSync(unitsDir).filter(f => f.startsWith('unit-') && f.endsWith('.ts'));

unitFiles.forEach(file => {
  const filePath = path.join(unitsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // This regex matches question objects that have type "key-word-transformation"
  // We look for "id": "c2-u...-q..." to ensure it's a question, not an exercise
  // We use [^{}]*? to ensure we stay within the same object
  const questionRegex = /\{\s*"id":\s*"c2-u[^"]+?-q[^"]+?"[^{}]*?"type":\s*"key-word-transformation"[^{}]*?\}/g;

  content = content.replace(questionRegex, (match) => {
    console.log(`Found match: ${match.substring(0, 50)}...`);
    // Skip if it already has a proper question field (we might have manually fixed it)
    if (match.includes('"question":') && match.includes('__________')) {
      return match;
    }

    // Extract fields
    const sentenceMatch = match.match(/"sentence":\s*"([^"]+)"/);
    const keyWordMatch = match.match(/"keyWord":\s*"([^"]+)"/);
    const startOfAnswerMatch = match.match(/"startOfAnswer":\s*"([^"]+)"/);
    const correctAnswerMatch = match.match(/"correctAnswer":\s*"([^"]+)"/);
    const questionMatch = match.match(/"question":\s*"([^"]+)"/);

    const sentence = sentenceMatch ? sentenceMatch[1] : (questionMatch ? questionMatch[1] : '');
    const keyWord = keyWordMatch ? keyWordMatch[1] : '';
    const startOfAnswer = startOfAnswerMatch ? startOfAnswerMatch[1] : '';
    const correctAnswer = correctAnswerMatch ? correctAnswerMatch[1] : '';

    if (!sentence || !keyWord) return match;

    // Generate new question field
    const newQuestion = `${sentence} (${keyWord.toUpperCase()})\\n\\n${startOfAnswer} __________`;
    
    // Determine new correct answer (missing part)
    let newCorrectAnswer = correctAnswer;
    if (startOfAnswer && correctAnswer.toLowerCase().startsWith(startOfAnswer.toLowerCase())) {
        newCorrectAnswer = correctAnswer.substring(startOfAnswer.length).trim();
        // Remove trailing period if user is not expected to type it
        if (newCorrectAnswer.endsWith('.')) {
            newCorrectAnswer = newCorrectAnswer.slice(0, -1);
        }
    }

    // Replace or add fields
    let updatedMatch = match;
    
    // Add/Update question
    if (updatedMatch.includes('"question":')) {
        updatedMatch = updatedMatch.replace(/"question":\s*"[^"]*"/, `"question": "${newQuestion}"`);
    } else {
        updatedMatch = updatedMatch.replace(/"type":\s*"key-word-transformation",/, `"type": "key-word-transformation",\n      "question": "${newQuestion}",`);
    }

    // Update correctAnswer
    updatedMatch = updatedMatch.replace(/"correctAnswer":\s*"[^"]*"/, `"correctAnswer": "${newCorrectAnswer}"`);

    return updatedMatch;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log('Finished fixing transformations.');
