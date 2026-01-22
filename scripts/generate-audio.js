const fs = require('fs');
const path = require('path');

// Script to generate audio using ElevenLabs API
// Usage: node scripts/generate-audio.js YOUR_ELEVENLABS_API_KEY

const ELEVENLABS_API_KEY = process.argv[2];

if (!ELEVENLABS_API_KEY) {
  console.error('Please provide your ElevenLabs API key as an argument');
  console.error('Usage: node scripts/generate-audio.js YOUR_API_KEY');
  process.exit(1);
}

const transcript = `Interviewer: Today we're talking about productivity techniques with Dr. Emma Richardson. Dr. Richardson, what's your main message about staying focused?

Dr. Richardson: Well, what I want people to understand is that our brains aren't designed for the modern digital environment. It's the constant switching between tasks that drains our mental energy most. What research shows is that every time we shift our attention, we use up cognitive resources.

Interviewer: So it's multitasking that's the problem?

Dr. Richardson: Exactly. What many people don't realize is that multitasking is actually a myth. What we're really doing is task-switching, and it's incredibly inefficient. It was a landmark study from Stanford that proved heavy multitaskers are actually worse at filtering out irrelevant information than people who focus on one thing at a time.

Interviewer: That's fascinating. What can people do to improve their focus?

Dr. Richardson: What I recommend to my clients is something called "time blocking." It's a simple technique where you dedicate specific blocks of time to specific tasks. What makes this effective is that you're not constantly deciding what to work on next—you've already made that decision. It was when I started using this method myself that my productivity doubled.

Interviewer: And what about technology? Should we avoid it entirely?

Dr. Richardson: No, that's not realistic. What we need to do is use technology intentionally. It's not your smartphone that's the problem—it's having notifications turned on all the time. What successful people do is put their devices on "do not disturb" during focus sessions. What surprised me in my research was how much anxiety this initially caused people, but within a week, most felt liberated rather than disconnected.`;

async function generateAudio() {
  try {
    // Use ElevenLabs API - Rachel voice (professional female voice)
    const voiceId = '21m00Tcm4TlvDq8ikWAM'; // Rachel voice
    
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY
        },
        body: JSON.stringify({
          text: transcript,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const audioBuffer = await response.arrayBuffer();
    const outputPath = path.join(__dirname, '../public/audio/b2-m1-l3-listening-1.mp3');
    
    fs.writeFileSync(outputPath, Buffer.from(audioBuffer));
    
    console.log('✅ Audio generated successfully!');
    console.log(`📁 Saved to: ${outputPath}`);
    console.log(`📊 Size: ${(audioBuffer.byteLength / 1024 / 1024).toFixed(2)} MB`);
    
  } catch (error) {
    console.error('❌ Error generating audio:', error.message);
    process.exit(1);
  }
}

generateAudio();
