const fs = require('fs');
const path = require('path');
const https = require('https');

// Cargar variables de entorno
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

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = '21m00Tcm4TlvDq8ikWAM'; // Rachel (British Female) - Buen sustituto para Sonia Neural

if (!API_KEY) {
  console.error('❌ ELEVENLABS_API_KEY no encontrada');
  process.exit(1);
}

const JOBS_DIR = path.join(__dirname, '../src/content/cursos/trabajo/administracion/b2/jobs');
const BASE_DIR = path.join(__dirname, '../src/content/cursos/trabajo/administracion/b2');

async function generateSpeech(text, outputPath) {
  return new Promise((resolve, reject) => {
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
        'xi-api-key': API_KEY,
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let errorData = '';
        res.on('data', (chunk) => errorData += chunk);
        res.on('end', () => reject(new Error(`API Error ${res.statusCode}: ${errorData}`)));
        return;
      }

      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(outputPath, buffer);
        resolve();
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function processJob(jobFile) {
  console.log(`\n🚀 Procesando job: ${jobFile}`);
  const jobPath = path.join(JOBS_DIR, jobFile);
  const job = JSON.parse(fs.readFileSync(jobPath, 'utf8'));
  
  const narrationPath = path.join(BASE_DIR, job.narration_text_path);
  if (!fs.existsSync(narrationPath)) {
    console.error(`❌ No existe el archivo de narración: ${narrationPath}`);
    return;
  }

  const text = fs.readFileSync(narrationPath, 'utf8');
  const paragraphs = text.split('\n\n').map(p => p.trim()).filter(p => p.length > 0);
  
  console.log(`📝 Encontrados ${paragraphs.length} párrafos para ${job.lesson_id}`);

  for (let i = 0; i < paragraphs.length; i++) {
    const slideNum = (i + 1).toString().padStart(3, '0');
    const outputPath = path.join(BASE_DIR, `outputs/${job.lesson_id}/per_slide_audio/slide_${slideNum}.mp3`);
    
    if (fs.existsSync(outputPath)) {
      console.log(`⏩ Slide ${slideNum} ya existe, saltando...`);
      continue;
    }

    console.log(`🎤 Generando audio para slide ${slideNum}...`);
    try {
      await generateSpeech(paragraphs[i], outputPath);
      console.log(`✅ Slide ${slideNum} completado`);
      // Pausa para evitar rate limits
      await new Promise(r => setTimeout(r, 1000));
    } catch (err) {
      console.error(`❌ Error en slide ${slideNum}:`, err.message);
    }
  }
}

async function run() {
  const files = fs.readdirSync(JOBS_DIR).filter(f => f.endsWith('.json')).sort();
  for (const file of files) {
    await processJob(file);
  }
  console.log('\n✨ Proceso de audio finalizado');
}

run().catch(console.error);
