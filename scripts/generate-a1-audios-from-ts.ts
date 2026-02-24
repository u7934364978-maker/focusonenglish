
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
  
  // 1. Find all potential exercise IDs
  const idRegex = /"id":\s*["'](a1-u(\d+)-e\d+)["']/g;
  let match;
  const matches = [];
  
  while ((match = idRegex.exec(fileContent)) !== null) {
    // Only process IDs for the current unit
    if (parseInt(match[2]) === unitNumber) {
      matches.push({
        id: match[1],
        index: match.index
      });
    }
  }

  for (let i = 0; i < matches.length; i++) {
    const currentMatch = matches[i];
    const nextIndex = i < matches.length - 1 ? matches[i + 1].index : fileContent.length;
    
    // Search for transcript and audioUrl in the block between current ID and next ID
    const startSearch = Math.max(0, currentMatch.index - 50);
    const endSearch = Math.min(fileContent.length, nextIndex);
    const block = fileContent.substring(startSearch, endSearch);
    
    // Extract transcript - look for "transcript" or "question"
    const transcriptMatch = /"(?:transcript|question)":\s*"([^"]+)"/.exec(block) || 
                            /'(?:transcript|question)':\s*'([^']+)'/.exec(block);
    
    if (transcriptMatch) {
      // Extract audioUrl if exists
      const audioMatch = /"audioUrl":\s*"([^"]+)"/.exec(block) || 
                         /'audioUrl':\s*'([^']+)'/.exec(block);
      
      const id = currentMatch.id;
      const exerciseNum = id.split('-').pop(); // e.g. "e1"
      
      exercises.push({
        id: id,
        transcript: transcriptMatch[1],
        audioUrl: audioMatch ? audioMatch[1] : `audio/a1/unit-${unitNumber}/${exerciseNum}.mp3`
      });
    }
  }

  // 2. Fallback for GRAMMAR_QUESTIONS style
  const grammarRegex = /\{[\s\S]*?id:\s*'([^']+)'[\s\S]*?question:\s*'([^']+)'[\s\S]*?\}/g;
  while ((match = grammarRegex.exec(fileContent)) !== null) {
    const id = match[1];
    if (!exercises.find(ex => ex.id === id)) {
      // Basic check if it belongs to current unit (optional)
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
