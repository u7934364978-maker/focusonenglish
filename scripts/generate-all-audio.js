const fs = require('fs');
const path = require('path');

// Script to generate all missing audio files using ElevenLabs API
// Usage: node scripts/generate-all-audio.js YOUR_ELEVENLABS_API_KEY

const ELEVENLABS_API_KEY = process.argv[2];
const START_FROM = parseInt(process.argv[3] || '0'); // Optional: start from specific index

if (!ELEVENLABS_API_KEY) {
  console.error('Please provide your ElevenLabs API key as an argument');
  console.error('Usage: node scripts/generate-all-audio.js YOUR_API_KEY [START_INDEX]');
  console.error('Example: node scripts/generate-all-audio.js sk-xxx 0');
  process.exit(1);
}

// Load transcripts
const transcriptsPath = path.join(__dirname, 'audio-transcripts.json');
const transcripts = JSON.parse(fs.readFileSync(transcriptsPath, 'utf8'));

// Voice configuration
const RACHEL_VOICE_ID = '21m00Tcm4TlvDq8ikWAM'; // Professional female voice
const MODEL = 'eleven_turbo_v2_5'; // Free tier compatible

// Rate limiting: ElevenLabs free tier allows ~10,000 chars/month
// We'll add delays between requests to avoid hitting rate limits
const DELAY_BETWEEN_REQUESTS = 2000; // 2 seconds

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateAudio(filename, text, index, total) {
  try {
    console.log(`\n[${index + 1}/${total}] 🎤 Generating: ${filename}`);
    console.log(`📝 Text (${text.length} chars): ${text.substring(0, 80)}${text.length > 80 ? '...' : ''}`);
    
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${RACHEL_VOICE_ID}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY
        },
        body: JSON.stringify({
          text: text,
          model_id: MODEL,
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            speed: 1.0
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const audioBuffer = await response.arrayBuffer();
    const outputPath = path.join(__dirname, '../public/audio', filename);
    
    // Ensure subdirectory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, Buffer.from(audioBuffer));
    
    const sizeMB = (audioBuffer.byteLength / 1024 / 1024).toFixed(2);
    console.log(`✅ Saved: ${outputPath} (${sizeMB} MB)`);
    
    return { success: true, filename, size: audioBuffer.byteLength };
    
  } catch (error) {
    console.error(`❌ Failed: ${filename} - ${error.message}`);
    return { success: false, filename, error: error.message };
  }
}

async function generateAll() {
  const entries = Object.entries(transcripts);
  const total = entries.length;
  const results = [];
  
  console.log(`🚀 Starting batch audio generation`);
  console.log(`📊 Total files to generate: ${total}`);
  console.log(`🎯 Starting from index: ${START_FROM}`);
  console.log(`⏱️  Delay between requests: ${DELAY_BETWEEN_REQUESTS}ms\n`);
  
  let totalChars = 0;
  let successCount = 0;
  let failCount = 0;
  
  for (let i = START_FROM; i < entries.length; i++) {
    const [filename, text] = entries[i];
    
    const result = await generateAudio(filename, text, i, total);
    results.push(result);
    
    if (result.success) {
      successCount++;
      totalChars += text.length;
    } else {
      failCount++;
    }
    
    // Add delay between requests (except for last one)
    if (i < entries.length - 1) {
      await sleep(DELAY_BETWEEN_REQUESTS);
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 BATCH GENERATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successful: ${successCount}/${total}`);
  console.log(`❌ Failed: ${failCount}/${total}`);
  console.log(`📝 Total characters processed: ${totalChars.toLocaleString()}`);
  
  if (failCount > 0) {
    console.log('\n❌ Failed files:');
    results.filter(r => !r.success).forEach((r, idx) => {
      console.log(`${idx + 1}. ${r.filename}: ${r.error}`);
    });
  }
  
  // Save results
  const resultsPath = path.join(__dirname, 'generation-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`\n💾 Results saved to: ${resultsPath}`);
}

generateAll().catch(console.error);
