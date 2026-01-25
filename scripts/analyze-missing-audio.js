const fs = require('fs');
const path = require('path');

// Extract all audio file references from course-data-b2.ts
const courseDataPath = path.join(__dirname, '../src/lib/course-data-b2.ts');
const courseData = fs.readFileSync(courseDataPath, 'utf8');

// Find all audio URLs
const audioMatches = courseData.matchAll(/(?:audioUrl|modelAudioUrl):\s*['"]\/audio\/([^'"]+\.mp3)['"]/g);
const referencedFiles = new Set();

for (const match of audioMatches) {
  referencedFiles.add(match[1]);
}

// Get existing files (recursively)
const audioDir = path.join(__dirname, '../public/audio');
function getAudioFiles(dir, baseDir = dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAudioFiles(fullPath, baseDir));
    } else if (item.name.endsWith('.mp3')) {
      const relativePath = path.relative(baseDir, fullPath);
      files.push(relativePath);
    }
  }
  return files;
}
const existingFiles = getAudioFiles(audioDir);

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
