import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const contentDir = path.join(rootDir, 'src/content/cursos');
const isFixMode = process.argv.includes('--fix');

const trivialExercises = [];

function isEnglish(text) {
  if (typeof text !== 'string') return false;
  // Expanded list of common English words to avoid false positives
  // Removed 'a', 'no', 'me', 'so' as they are common in Spanish too
  const commonEnglishWords = new Set(['the', 'is', 'are', 'am', 'was', 'were', 'have', 'has', 'had', 'will', 'be', 'it', 'where', 'when', 'why', 'how', 'who', 'what', 'which', 'there', 'here', 'my', 'your', 'his', 'her', 'our', 'their', 'him', 'us', 'them', 'an', 'some', 'any', 'at', 'on', 'in', 'to', 'for', 'with', 'from', 'by', 'up', 'down', 'out', 'off', 'over', 'under', 'again', 'then', 'once', 'all', 'both', 'each', 'few', 'more', 'most', 'other', 'such', 'nor', 'not', 'only', 'own', 'same', 'than', 'too', 'very', 'can', 'just', 'should', 'now', 'do', 'did', 'does', 'done', 'make', 'made', 'go', 'went', 'gone', 'see', 'saw', 'seen', 'eat', 'ate', 'eaten', 'drink', 'drank', 'drunk', 'they', 'we', 'she', 'he', 'speaks', 'speak', 'fast', 'slow', 'good', 'bad', 'well', 'say', 'said', 'tell', 'told', 'like', 'liked', 'love', 'loved', 'hate', 'hated']);
  
  const words = text.toLowerCase().split(/[^a-z]+/).filter(w => w.length > 0);
  
  // If it has at least one strong English word
  if (words.some(w => commonEnglishWords.has(w))) return true;

  // Check for English-only characters or parenthetical English like "(See)"
  if (text.includes('(') && text.includes(')')) return true;
  
  // If it has a quote with words that look English
  const quotes = text.match(/'([^']+)'|"([^"]+)"/);
  if (quotes) {
    const quotedText = quotes[1] || quotes[2];
    const quotedWords = quotedText.toLowerCase().split(/[^a-z]+/).filter(w => w.length > 0);
    const commonSpanishWords = new Set(['el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'es', 'son', 'en', 'de', 'para', 'con', 'por', 'a', 'al', 'del', 'lo', 'su', 'sus', 'si', 'no']);
    if (quotedWords.length > 0 && !quotedWords.every(w => commonSpanishWords.has(w))) return true;
  }

  return false;
}

function isTrivial(exercise) {
  const jsonStr = JSON.stringify(exercise);
  
  // If it has explicit English stimulus or translations, it's probably not trivial
  const hasEnKey = jsonStr.includes('stimulus_en') || jsonStr.includes('audioUrl') || jsonStr.includes('target_language_text') || jsonStr.includes('_en');
  if (hasEnKey) {
    // Even with En keys, it could be trivial if it's identity matching
    if (exercise.type !== 'matching') return { trivial: false };
  }

  const promptEs = exercise.prompt_es || '';
  const promptEn = exercise.prompt_en || '';
  
  // Rule: Identity Matching
  if (exercise.type === 'matching' && exercise.pairs) {
    const identicalPairs = exercise.pairs.filter(p => {
      if (!p.left || !p.right) return false;
      const left = p.left.toLowerCase().trim();
      const right = p.right.toLowerCase().trim();
      return left === right && left.length > 3;
    });
    
    // If ANY pair is identical and length > 3, it's a candidate for triviality
    // especially if it's a common word like "Piano"
    if (identicalPairs.length > 0) {
      const trivialIdentityWords = ['piano', 'guitarra', 'violín', 'doctor', 'hospital', 'actor', 'animal', 'hotel', 'radio', 'televisión', 'metro', 'gas', 'auto', 'taxi', 'banana', 'melón'];
      const hasVeryTrivialWord = identicalPairs.some(p => trivialIdentityWords.includes(p.left.toLowerCase().trim()));
      
      if (hasVeryTrivialWord || identicalPairs.length / exercise.pairs.length >= 0.25) {
        return { trivial: true, reason: `Trivial Identity Matching (${identicalPairs.map(p => p.left).join(', ')})` };
      }
    }
  }

  if (isEnglish(promptEs) || isEnglish(promptEn)) return { trivial: false };

  // Rule: True/False or Multiple Choice with General Knowledge in Spanish
  if ((exercise.type === 'true_false' || exercise.type === 'multiple_choice') && !isEnglish(promptEs)) {
    const gkTerms = ['percusión', 'instrumento', 'música', 'geografía', 'historia', 'planeta', 'sol', 'luna', 'tierra', 'continente', 'océano', 'país', 'capital', 'animal', 'fruta', 'color', 'deporte'];
    const promptLower = promptEs.toLowerCase();
    
    const hasGKTerm = gkTerms.some(term => promptLower.includes(term));
    
    // Check options for English
    let hasEnglishInOptions = false;
    if (exercise.options) {
      hasEnglishInOptions = exercise.options.some(o => isEnglish(o.text));
    }
    
    if (hasGKTerm && !hasEnglishInOptions) {
      return { trivial: true, reason: 'General Knowledge in Spanish with zero English' };
    }

    // Obvious/trivial questions in Spanish
    const trivialPhrases = ['es correcto', 'significa', 'se dice']; // These are usually pedagogical
    if (trivialPhrases.some(phrase => promptLower.includes(phrase))) return { trivial: false };

    // If it's a very short question in Spanish about something common
    if (promptLower.split(' ').length < 10 && !hasEnglishInOptions) {
        // High probability of being trivial if it's just general knowledge
        if (hasGKTerm) return { trivial: true, reason: 'Short General Knowledge question in Spanish' };
    }
  }

  return { trivial: false };
}

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let data;
  try {
    data = JSON.parse(content);
  } catch (e) {
    console.error(`Error parsing ${filePath}: ${e.message}`);
    return;
  }

  let fileChanged = false;
  if (data.blocks) {
    data.blocks.forEach(block => {
      if (block.content) {
        const initialCount = block.content.length;
        const filteredContent = block.content.filter(exercise => {
          const auditResult = isTrivial(exercise);
          if (auditResult.trivial) {
            trivialExercises.push({
              file: path.relative(rootDir, filePath),
              id: exercise.interaction_id,
              reason: auditResult.reason,
              prompt: exercise.prompt_es
            });
            return false; // Remove
          }
          return true; // Keep
        });

        if (filteredContent.length !== initialCount) {
          block.content = filteredContent;
          fileChanged = true;
        }
      }
    });
  }

  if (fileChanged && isFixMode) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (file.endsWith('.json')) {
      auditFile(fullPath);
    }
  });
}

console.log(`Starting audit in ${contentDir}...`);
traverse(contentDir);

console.log('\n--- Trivial Exercises Found ---');
trivialExercises.forEach(ex => {
  console.log(`File: ${ex.file}`);
  console.log(`ID: ${ex.id}`);
  console.log(`Reason: ${ex.reason}`);
  console.log(`Prompt: ${ex.prompt}`);
  console.log('---');
});

console.log(`\nTotal Trivial Exercises: ${trivialExercises.length}`);

if (isFixMode) {
  console.log('Fix mode enabled. Trivial exercises have been removed.');
} else {
  console.log('Dry run completed. Use --fix to remove exercises.');
}
