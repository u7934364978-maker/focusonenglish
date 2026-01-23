const fs = require('fs');
const path = require('path');

// Script to regenerate audio for b2-m1-l2-listening-1 using ElevenLabs API
// Usage: node scripts/generate-b2-m1-l2-listening.js YOUR_ELEVENLABS_API_KEY

const ELEVENLABS_API_KEY = process.argv[2];

if (!ELEVENLABS_API_KEY) {
  console.error('❌ Please provide your ElevenLabs API key as an argument');
  console.error('Usage: node scripts/generate-b2-m1-l2-listening.js YOUR_API_KEY');
  console.error('\nGet your API key from: https://elevenlabs.io/app/settings/api-keys');
  process.exit(1);
}

// Correct transcript for b2-m1-l2-listening-1
const TRANSCRIPT = `Host: Welcome back to "Life Choices," the podcast where we explore the decisions that shape our lives. Today, I'm joined by Dr. Rebecca Chen, a psychologist who specializes in career counseling. Dr. Chen, thank you for being here.

Dr. Chen: My pleasure. Thank you for having me.

Host: So, Dr. Chen, many of our listeners struggle with career regret. They often think, "If I had chosen differently, I would be happier now." What's your perspective on this?

Dr. Chen: That's a very common feeling, and rarely does anyone go through life without experiencing some form of "what if" thinking. However, not only is this thinking usually unproductive, but it also prevents us from appreciating the unique path we've actually traveled.

Host: Can you give us an example?

Dr. Chen: Absolutely. I once worked with a client - let's call him Mark. If Mark had known at age twenty what he knows now, he would have studied engineering instead of literature. But here's the interesting part: if he hadn't studied literature, he wouldn't have the exceptional communication skills that now make him an outstanding engineering manager. Never have I seen someone communicate complex technical concepts so clearly.

Host: So his "mistake" actually became an advantage?

Dr. Chen: Exactly. And seldom do we recognize this while we're living through it. If Mark could go back, would he change his choice? He says no. Under no circumstances would he trade the journey that led him to where he is now.

Host: What about people who feel genuinely stuck in the wrong career?

Dr. Chen: No sooner do I hear "I'm stuck" than I ask: "What's stopping you from making a change now?" If people were truly honest with themselves, they would realize that rarely is it about ability - it's usually about fear. If they had taken action five years ago, yes, they would be in a different place. But hardly ever is it too late to start.

Host: That's encouraging. What advice would you give to our listeners?

Dr. Chen: Not only should you reflect on past choices, but you should also focus on what you can do today. If you had perfect confidence, what would you try? Start there. And remember: if you don't try, you'll never know. Rarely do we regret the things we attempt; we usually regret the things we never tried.`;

// Voice configuration - using Rachel for professional female voice
const RACHEL_VOICE_ID = '21m00Tcm4TlvDq8ikWAM'; // Professional British female voice
const MODEL = 'eleven_turbo_v2_5'; // Fast and efficient

const OUTPUT_FILENAME = 'b2-m1-l2-listening-1.mp3';
const OUTPUT_PATH = path.join(__dirname, '../public/audio', OUTPUT_FILENAME);

async function generateAudio() {
  try {
    console.log('\n🎤 Generating audio for b2-m1-l2-listening-1');
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
    console.log(`\n📋 Next steps:`);
    console.log(`   1. git add public/audio/${OUTPUT_FILENAME}`);
    console.log(`   2. git commit -m "fix: Regenerate b2-m1-l2 listening audio to match transcript"`);
    console.log(`   3. git push`);
    
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
