
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { 
  generateInstructionAudio, 
  VOICE_IDS, 
  getUsageInfo 
} from '../src/lib/text-to-speech';

// Load environment variables
dotenv.config({ path: '.env.local' });

/**
 * Clean transcript text from [[English|Spanish]] markers
 */
function cleanTranscript(text: string): string {
  if (!text) return '';
  // Replace [[English|Spanish]] or [[English]] with just English
  return text.replace(/\[\[([^|\]]+)(?:\|[^\]]*)?\]\]/g, '$1');
}

/**
 * Extract exercises from a TS file content
 */
function extractExercises(fileContent: string, unitNumber: number): any[] {
  const exercises: any[] = [];
  
  // 1. Look for standard objects with literal strings
  const exerciseRegex = /\{[\s\S]*?"id":\s*"([^"]+)"[\s\S]*?"transcript":\s*"([^"]+)"[\s\S]*?"audioUrl":\s*"([^"]+)"[\s\S]*?\}/g;
  let match;
  while ((match = exerciseRegex.exec(fileContent)) !== null) {
    exercises.push({
      id: match[1],
      transcript: match[2],
      audioUrl: match[3]
    });
  }

  // 2. Look for GRAMMAR_QUESTIONS that use the createExercise helper
  // Pattern: { id: 'q1', type: 'multiple-choice', question: '...' }
  const grammarRegex = /\{[\s\S]*?id:\s*'([^']+)'[\s\S]*?question:\s*'([^']+)'[\s\S]*?\}/g;
  while ((match = grammarRegex.exec(fileContent)) !== null) {
    // Only add if not already added by standard regex
    const id = match[1];
    if (!exercises.find(ex => ex.id === id)) {
      exercises.push({
        id: id,
        transcript: match[2],
        audioUrl: `audio/a1/unit-${unitNumber}/${id}.mp3`
      });
    }
  }
  
  return exercises;
}

/**
 * Generate audios for a specific unit
 */
async function generateUnitAudios(unitNumber: number) {
  const tsPath = path.join(process.cwd(), 'src/lib/course/a1', `unit-${unitNumber}.ts`);
  
  if (!fs.existsSync(tsPath)) {
    console.log(`⚠️ Unit file not found: ${tsPath}`);
    return;
  }

  console.log(`\n📦 Processing Unit ${unitNumber}...`);
  let content = fs.readFileSync(tsPath, 'utf-8');
  
  // Check if it imports from a detailed file
  const detailedImportMatch = /from\s+'\.\.\/\.\.\/([^']+)'/.exec(content);
  if (detailedImportMatch) {
    const detailedPath = path.join(process.cwd(), 'src/lib', `${detailedImportMatch[1]}.ts`);
    console.log(`🔍 Unit ${unitNumber} uses detailed file: ${detailedPath}`);
    if (fs.existsSync(detailedPath)) {
      content = fs.readFileSync(detailedPath, 'utf-8');
    }
  }

  const exercises = extractExercises(content, unitNumber);
  
  if (exercises.length === 0) {
    console.log(`⚠️ No exercises found in Unit ${unitNumber} (checked for id, transcript and audioUrl)`);
    return;
  }

  console.log(`📝 Found ${exercises.length} exercises with audio required.`);

  for (const ex of exercises) {
    const cleanText = cleanTranscript(ex.transcript);
    const outputPath = path.join(process.cwd(), 'public', ex.audioUrl);
    
    if (fs.existsSync(outputPath)) {
      console.log(`   ⏭️ Skipping existing: ${ex.audioUrl}`);
      continue;
    }

    console.log(`   🎙️ Generating: ${ex.audioUrl} ("${cleanText.substring(0, 30)}...")`);
    
    // Using Narrator voice as default for A1 clear instructions
    const success = await generateInstructionAudio(cleanText, VOICE_IDS.narrator, outputPath);
    
    if (success) {
      console.log(`   ✅ Success!`);
    } else {
      console.log(`   ❌ Failed.`);
    }

    // Small delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

/**
 * Main execution
 */
async function main() {
  const startUnit = parseInt(process.argv[2] || '1');
  const endUnit = parseInt(process.argv[3] || startUnit.toString());

  console.log('🎙️  A1 AUDIO GENERATION (ELEVENLABS)');
  console.log('==================================');
  
  const usage = await getUsageInfo();
  if (usage) {
    console.log(`📊 API Usage: ${usage.character_count} / ${usage.character_limit}`);
  }

  for (let u = startUnit; u <= endUnit; u++) {
    await generateUnitAudios(u);
  }
  
  console.log('\n✨ Done!');
}

main().catch(console.error);
