const fs = require('fs');
const path = require('path');

// Extract all audio file references from course-data-b2.ts
const courseDataPath = path.join(__dirname, '../lib/course-data-b2.ts');
const courseData = fs.readFileSync(courseDataPath, 'utf8');

// Find all audio URLs
const audioMatches = courseData.matchAll(/(?:audioUrl|modelAudioUrl):\s*['"]\/audio\/([^'"]+\.mp3)['"]/g);
const referencedFiles = new Set();

for (const match of audioMatches) {
  referencedFiles.add(match[1]);
}

// Get existing files
const audioDir = path.join(__dirname, '../public/audio');
const existingFiles = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3'));

// Find missing files
const missingFiles = Array.from(referencedFiles).filter(ref => !existingFiles.includes(ref));

console.log('📊 Audio File Analysis\n');
console.log(`Referenced files: ${referencedFiles.size}`);
console.log(`Existing files: ${existingFiles.length}`);
console.log(`Missing files: ${missingFiles.length}\n`);

console.log('❌ Missing files:');
missingFiles.sort().forEach((file, idx) => {
  console.log(`${idx + 1}. ${file}`);
});

// Save to JSON for the batch generator
const outputPath = path.join(__dirname, 'missing-audio-files.json');
fs.writeFileSync(outputPath, JSON.stringify(missingFiles, null, 2));
console.log(`\n✅ Missing files list saved to: ${outputPath}`);
