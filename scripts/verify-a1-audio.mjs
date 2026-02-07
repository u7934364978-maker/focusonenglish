import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content/cursos/ingles-a1');
const PUBLIC_DIR = path.join(__dirname, '../public');

/**
 * Recursively find all values for a specific key in an object
 */
function findValues(obj, targetKey, results = []) {
  if (!obj || typeof obj !== 'object') return results;

  for (const [key, value] of Object.entries(obj)) {
    if (key === targetKey && typeof value === 'string') {
      results.push(value);
    } else if (typeof value === 'object') {
      findValues(value, targetKey, results);
    }
  }
  return results;
}

async function verifyAudio() {
  console.log('🔍 Starting Audio Verification for English A1...');
  
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`❌ Content directory not found: ${CONTENT_DIR}`);
    return;
  }

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.json'));
  console.log(`found ${files.length} JSON files.`);

  const allAudioUrls = new Set();
  const fileToAudioMap = new Map();

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    try {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const urls = findValues(content, 'audioUrl');
      
      urls.forEach(url => {
        allAudioUrls.add(url);
        if (!fileToAudioMap.has(url)) {
          fileToAudioMap.set(url, []);
        }
        fileToAudioMap.get(url).push(file);
      });
    } catch (e) {
      console.error(`❌ Error parsing ${file}: ${e.message}`);
    }
  }

  console.log(`Found ${allAudioUrls.size} unique audio references.`);

  const missing = [];
  const found = [];

  for (const url of allAudioUrls) {
    // Normalize URL: remove leading slash if present
    const relativePath = url.startsWith('/') ? url.slice(1) : url;
    const fullPath = path.join(PUBLIC_DIR, relativePath);

    if (fs.existsSync(fullPath)) {
      found.push(url);
    } else {
      missing.push({
        url,
        referencedIn: fileToAudioMap.get(url)
      });
    }
  }

  console.log('\n--- Results ---');
  console.log(`✅ Found: ${found.length}`);
  console.log(`❌ Missing: ${missing.length}`);

  if (missing.length > 0) {
    console.log('\n❌ Missing Audio Files:');
    missing.sort((a, b) => a.url.localeCompare(b.url)).forEach((item, idx) => {
      console.log(`${idx + 1}. ${item.url} (Used in: ${[...new Set(item.referencedIn)].join(', ')})`);
    });
  } else {
    console.log('\n✨ All audio files are present!');
  }
}

verifyAudio().catch(console.error);
