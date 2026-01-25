const fs = require('fs');
const path = require('path');

// Read missing audio files list
const missingFilesPath = path.join(__dirname, 'missing-audio-files.json');
const missingFiles = JSON.parse(fs.readFileSync(missingFilesPath, 'utf8'));

// Read course data
const courseDataPath = path.join(__dirname, '../src/lib/course-data-b2.ts');
const courseData = fs.readFileSync(courseDataPath, 'utf8');

// Map to store filename -> transcript
const transcripts = {};

console.log('🔍 Extracting transcripts for missing audio files...\n');

// Process each missing file
for (const filename of missingFiles) {
  const baseName = filename.replace('pronunciation/', '').replace('.mp3', '');
  
  // Category 1: Listening/debate exercises with full transcripts
  if (filename.includes('listening') || filename.includes('debate')) {
    // Find the exercise with this audioUrl
    const audioPattern = new RegExp(`audioUrl:\\s*['"]/audio/${filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]([^}]+?)transcript:\\s*\`([^\`]+?)\``, 's');
    const match = courseData.match(audioPattern);
    
    if (match) {
      transcripts[filename] = match[2].trim();
      console.log(`✅ ${filename}: Found transcript (${match[2].length} chars)`);
    } else {
      console.log(`⚠️  ${filename}: No transcript found - needs manual review`);
    }
  }
  // Category 2: Pronunciation practice sentences (pronun-1a, pronun-1b, etc.)
  else if (filename.includes('pronun-')) {
    // Find the sentence in targetSentences array
    const audioPattern = new RegExp(`audioUrl:\\s*['"]/audio/${filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`, 's');
    const match = courseData.match(audioPattern);
    
    if (match) {
      // Find the sentence field just before this audioUrl
      const contextStart = Math.max(0, match.index - 300);
      const context = courseData.substring(contextStart, match.index);
      const sentenceMatch = context.match(/sentence:\s*['"]([^'"]+)['"]/);
      
      if (sentenceMatch) {
        transcripts[filename] = sentenceMatch[1];
        console.log(`✅ ${filename}: Sentence "${sentenceMatch[1]}"`);
      } else {
        transcripts[filename] = baseName;
        console.log(`⚠️  ${filename}: Sentence not found, using fallback`);
      }
    } else {
      transcripts[filename] = baseName;
      console.log(`⚠️  ${filename}: Context not found`);
    }
  }
  // Category 3: Single word pronunciations
  else {
    // These are simple word pronunciations
    const word = baseName
      .replace(/-/g, ' ')  // "could-have" -> "could have"
      .replace(/[_]/g, ' ');
    
    transcripts[filename] = word;
    console.log(`✅ ${filename}: Single word "${word}"`);
  }
}

// Save transcripts to JSON
const outputPath = path.join(__dirname, 'audio-transcripts.json');
fs.writeFileSync(outputPath, JSON.stringify(transcripts, null, 2));

console.log(`\n📝 Extracted ${Object.keys(transcripts).length} transcripts`);
console.log(`💾 Saved to: ${outputPath}`);
