const fs = require('fs');
const path = require('path');
const https = require('https');

// Cargar variables de entorno desde .env.local
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#][^=]+)=(.*)$/);
    if (match) {
      const [, key, value] = match;
      process.env[key.trim()] = value.trim();
    }
  });
}

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

if (!ELEVENLABS_API_KEY) {
  console.error('❌ ELEVENLABS_API_KEY no está configurada en .env.local');
  process.exit(1);
}

const VOICE_ID = '21m00Tcm4TlvDq8ikWAM'; // Rachel (British Female)

async function generateSpeech(text, outputPath) {
  const payload = JSON.stringify({
    text: text,
    model_id: 'eleven_multilingual_v2',
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.75
    }
  });

  const options = {
    hostname: 'api.elevenlabs.io',
    path: `/v1/text-to-speech/${VOICE_ID}`,
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': ELEVENLABS_API_KEY,
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let errorData = '';
        res.on('data', (chunk) => errorData += chunk);
        res.on('end', () => reject(new Error(`API error ${res.statusCode}: ${errorData}`)));
        return;
      }

      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const audioBuffer = Buffer.concat(chunks);
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(outputPath, audioBuffer);
        resolve(outputPath);
      });
    });

    req.on('error', (error) => reject(error));
    req.write(payload);
    req.end();
  });
}

const text = "Hi Mark. Can you send me the invoice for the new computers, please? I don't have it in my inbox. Thank you.";
const outputPath = path.join(__dirname, '..', 'public', 'audio', 'w11-request.mp3');

console.log('Generando audio para Semana 11...');
generateSpeech(text, outputPath)
  .then(path => console.log(`✅ Audio generado con éxito en: ${path}`))
  .catch(err => console.error('❌ Error:', err));
