
const fs = require('fs');
const path = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/b2/unit-7.ts';

let content = fs.readFileSync(path, 'utf8');

// Fix sentence-building exercises (1-25)
// The structure is:
// "questions": [
//   {
//     "question": [
//       "[[Word|Translation]]",
//       ...
//     ],
//     "audio": "..."
//   }
// ]
// Should be:
// "correctSentence": "[[Word|Translation]] [[Word|Translation]] ...",
// "words": shuffledArrayOfWords,
// "explanation": "...",
// "audio": "..."

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const exerciseRegex = /\{\s+"id": "b2-u7-e(\d+)",\s+"type": "sentence-building"[\s\S]*?\}\s+(?=,\s+\{|\s+\])/g;

let fixedContent = content.replace(exerciseRegex, (match, id) => {
  const exercise = JSON.parse(match.replace(/,$/, ''));
  const questions = exercise.content.questions;
  if (questions && questions.length > 0 && Array.isArray(questions[0].question)) {
    const wordObjects = questions[0].question;
    const correctSentence = wordObjects.join(' ');
    const words = shuffle([...wordObjects]);
    const audio = questions[0].audio;
    
    const newContent = {
      title: exercise.content.title,
      instructions: exercise.content.instructions,
      correctSentence: correctSentence,
      words: words,
      explanation: exercise.transcript, // Fallback explanation
      audio: audio
    };
    
    exercise.content = newContent;
  }
  return JSON.stringify(exercise, null, 2);
});

// Fix multiple-choice exercises (26-50)
// Ensure "question" uses _______ and instructions are clean
// And fix any leaks in multiple-choice question text

const mcRegex = /\{\s+"id": "b2-u7-e(\d+)",\s+"type": "multiple-choice"[\s\S]*?\}\s+(?=,\s+\{|\s+\])/g;

fixedContent = fixedContent.replace(mcRegex, (match, id) => {
  const exercise = JSON.parse(match.replace(/,$/, ''));
  const qObj = exercise.content.questions[0];
  
  // Example leak fix: [[must|_______]] [[comply|con]] -> should be [[must|debes]] [[_______|cumplir con]]
  // If the gap _______ is inside a [[...|...]] tag, it should be the key if possible, but the logic is complex.
  // Actually, the user complained that the English word is visible.
  
  // Let's just do a simple check for English words in the Spanish part of [[English|Spanish]] tags in MC questions.
  if (typeof qObj.question === 'string') {
    // No action needed if it's already a string, but let's check for leaks.
  }
  
  return JSON.stringify(exercise, null, 2);
});

// Since I can't easily run complex regex on the whole file and keep imports, 
// I'll just write the core logic to fix the JSON-like objects and manually re-assemble or use a more robust script.

// Re-running with a simpler approach:
fs.writeFileSync('fix_unit7.js', `
const fs = require('fs');
const path = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/b2/unit-7.ts';

let content = fs.readFileSync(path, 'utf8');

// Extract the array content
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
const arrayStr = content.substring(startIdx, endIdx + 1);

let exercises;
try {
    // This might fail if there are trailing commas or non-standard JSON
    // So we use a safer approach
    exercises = eval(arrayStr); 
} catch (e) {
    console.error("Failed to parse exercises array:", e);
    process.exit(1);
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

exercises.forEach((ex, index) => {
    if (ex.type === 'sentence-building') {
        if (ex.content.questions && ex.content.questions[0] && Array.isArray(ex.content.questions[0].question)) {
            const wordObjects = ex.content.questions[0].question;
            const correctSentence = wordObjects.join(' ');
            const words = shuffle([...wordObjects]);
            const audio = ex.content.questions[0].audio;
            
            ex.content = {
                title: ex.content.title,
                instructions: ex.content.instructions,
                correctSentence: correctSentence,
                words: words,
                explanation: ex.explanation || ex.transcript,
                audio: audio
            };
        }
    } else if (ex.type === 'multiple-choice') {
        const q = ex.content.questions[0];
        // Fix leaks in question string
        // If we see [[Word|Translation]] where Word is same as option, replace with _______
        const correctAnswer = ex.content.questions[0].options[ex.content.questions[0].correctAnswer];
        const correctEnglish = correctAnswer.split('|')[0].replace('[[', '').trim();
        
        // Replace occurrences of the English answer in the question with _______
        // But be careful with words that are part of other words
        let questionText = q.question;
        
        // If the question already has _______, check if it's leaking elsewhere
        // But often the leak is like [[English|Spanish]] where English is the answer.
        // The rule is: the gap should be in the English part.
        
        // Unit 7 specific fix for exercise 37:
        // "[[You|Debes]] [[must|_______]] [[comply|con]] [[with|las]] [[the|normas]] [[university|universitarias.]] [[regulations.| ]]"
        // Should be: "[[You|Debes]] [[must|debes]] [[_______|cumplir con]] [[with|las]] [[the|normas]] [[university|universitarias.]] [[regulations.| ]]"
        // Wait, if it's multiple choice, the options are the answers.
        
        // Let's just ensure the gap is present and the English word is NOT visible if it's the answer.
    }
});

const newFileContent = "import { Exercise } from \\"@/types/course\\";\\n\\nexport const UNIT_7_EXERCISES: Exercise[] = " + JSON.stringify(exercises, null, 2) + ";\\n";
fs.writeFileSync(path, newFileContent);
`);
