const fs = require('fs');
const path = require('path');

// Script to generate audio for b2-m1-l1-listening-1 using ElevenLabs API
// Usage: node scripts/generate-b2-m1-l1-listening.js YOUR_ELEVENLABS_API_KEY

const ELEVENLABS_API_KEY = process.argv[2];

if (!ELEVENLABS_API_KEY) {
  console.error('❌ Please provide your ElevenLabs API key as an argument');
  console.error('Usage: node scripts/generate-b2-m1-l1-listening.js YOUR_API_KEY');
  console.error('\nGet your API key from: https://elevenlabs.io/app/settings/api-keys');
  process.exit(1);
}

// Transcript from b2-m1-l1-listening-1
const TRANSCRIPT = `Interviewer: So, tell me about your experience working abroad.

Sarah: Well, I had been thinking about working overseas for quite some time before I actually made the decision to apply for jobs in Singapore. I had been working in marketing for my company in London for five years, and I felt like I needed a new challenge.

Interviewer: What made you choose Singapore specifically?

Sarah: To be honest, I had never considered Asia before. But then I attended a conference where I met some colleagues from our Singapore office. They had been working there for a couple of years and couldn't stop talking about how amazing it was. By the time the conference ended, I had already decided that I wanted to explore opportunities there.

Interviewer: And how did you find the transition?

Sarah: It was definitely challenging at first. I had prepared as much as I could – I had read about the culture, learned some basic phrases, and even visited once before moving. But still, nothing could have fully prepared me for the reality of living there. I had been living in London my entire life, so adapting to such a different culture was quite a shock initially.

Interviewer: What was the biggest challenge?

Sarah: Probably the work culture. I had expected some differences, but I hadn't realized how much the business environment would differ from what I was used to. I had been accustomed to a very direct communication style in London, but in Singapore, people tend to be more indirect and diplomatic.

Interviewer: And would you recommend the experience to others?

Sarah: Absolutely! By the end of my two-year contract, I had grown both personally and professionally in ways I never could have if I had stayed in London. I had made lifelong friends, learned about a completely different way of doing business, and gained a much broader perspective on the world.`;

// Voice configuration
const RACHEL_VOICE_ID = '21m00Tcm4TlvDq8ikWAM'; // Professional British female voice
const MODEL = 'eleven_turbo_v2_5'; // Fast and efficient

const OUTPUT_FILENAME = 'b2-m1-l1-listening-1.mp3';
const OUTPUT_PATH = path.join(__dirname, '../public/audio', OUTPUT_FILENAME);

async function generateAudio() {
  try {
    console.log('\n🎤 Generating audio for b2-m1-l1-listening-1');
    console.log(`📝 Transcript length: ${TRANSCRIPT.length} characters`);
    console.log(`🗣️ Voice: Rachel (Professional British Female)`);
    console.log(`📍 Output: ${OUTPUT_PATH}`);
    console.log('\n⏳ Calling ElevenLabs API...\n');
    
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
          text: TRANSCRIPT,
          model_id: MODEL,
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            speed: 0.95 // Slightly slower for clarity in educational content
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const audioBuffer = await response.arrayBuffer();
    
    // Ensure directory exists
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Save the audio file
    fs.writeFileSync(OUTPUT_PATH, Buffer.from(audioBuffer));
    
    const sizeMB = (audioBuffer.byteLength / 1024 / 1024).toFixed(2);
    console.log(`✅ SUCCESS! Audio file generated`);
    console.log(`📦 Size: ${sizeMB} MB`);
    console.log(`💾 Saved to: ${OUTPUT_PATH}`);
    console.log(`\n🎧 The audio file is now ready and will be available at:`);
    console.log(`   /audio/${OUTPUT_FILENAME}`);
    
  } catch (error) {
    console.error('\n❌ Error generating audio:', error.message);
    console.error('\nPossible issues:');
    console.error('  - Invalid API key');
    console.error('  - Insufficient ElevenLabs credits');
    console.error('  - Network connection issues');
    console.error('  - API rate limits exceeded');
    process.exit(1);
  }
}

generateAudio();
