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

// Voces disponibles
const VOICES = {
  'british_male': 'cgSgspJ2msm6clMCkdW9',
  'british_female': '21m00Tcm4TlvDq8ikWAM',  // Rachel
  'american_male': 'ErXwobaYiN019PkySvjV',
  'american_female': 'EXAVITQu4vr4xnSDxMaL', // Bella
};

// Configuración de audio
const DEFAULT_SETTINGS = {
  stability: 0.5,
  similarity_boost: 0.75,
  style: 0.0,
  use_speaker_boost: true
};

// Función para generar audio con ElevenLabs
function generateSpeech(text, voiceId, outputPath) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      text: text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: DEFAULT_SETTINGS
    });

    const options = {
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let errorData = '';
        res.on('data', (chunk) => errorData += chunk);
        res.on('end', () => {
          reject(new Error(`API error ${res.statusCode}: ${errorData}`));
        });
        return;
      }

      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const audioBuffer = Buffer.concat(chunks);
        
        // Crear directorio si no existe
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(outputPath, audioBuffer);
        resolve(outputPath);
      });
    });

    req.on('error', (error) => reject(error));
    req.write(payload);
    req.end();
  });
}

// Esperar entre peticiones
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Audios modelo para Pronunciation exercises
const PRONUNCIATION_MODEL_AUDIOS = [
  {
    lessonId: 'b2-m1-l1',
    text: `I'd been waiting for hours before she arrived. They'd never seen anything like it. We'd already eaten when you called. She'd been studying all night. Had you finished your homework?`,
    voiceId: VOICES.british_female,
    filename: 'b2-m1-l1-pronunciation-model.mp3'
  },
  {
    lessonId: 'b2-m1-l2',
    text: `The report is being reviewed by the committee. New policies are being implemented across all departments. The building was designed by a famous architect. This technology has been used for decades. A solution will be found soon.`,
    voiceId: VOICES.british_male,
    filename: 'b2-m1-l2-pronunciation-model.mp3'
  },
  {
    lessonId: 'b2-m1-l3',
    text: `She said she had finished the project. He told me he was moving to Spain. They asked if I could help them. She mentioned that she'd been waiting for hours. He claimed he hadn't received the email.`,
    voiceId: VOICES.american_female,
    filename: 'b2-m1-l3-pronunciation-model.mp3'
  },
  {
    lessonId: 'b2-m1-l4',
    text: `If I had known about the meeting, I would have attended. She would have passed the exam if she had studied harder. If we'd left earlier, we wouldn't have missed the train. I'd be happier if I lived closer to the beach. What would you do if you won the lottery?`,
    voiceId: VOICES.british_female,
    filename: 'b2-m1-l4-pronunciation-model.mp3'
  },
  {
    lessonId: 'b2-m2-l1',
    text: `You must submit the form by Friday. She can't have forgotten about the appointment. They might be running late. You should have called me earlier. He ought to apologize for his behavior. We needn't have worried so much.`,
    voiceId: VOICES.british_male,
    filename: 'b2-m2-l1-pronunciation-model.mp3'
  },
  {
    lessonId: 'b2-m2-l2',
    text: `The book, which I bought yesterday, is fascinating. People who exercise regularly tend to be healthier. This is the place where we first met. That's the reason why I'm here. The woman whose car was stolen called the police.`,
    voiceId: VOICES.american_female,
    filename: 'b2-m2-l2-pronunciation-model.mp3'
  },
  {
    lessonId: 'b2-m2-l3',
    text: `I enjoy reading in the evening. She decided to learn a new language. They finished painting the house. He suggested going to the cinema. We agreed to meet at six o'clock. I can't stand waiting in long queues.`,
    voiceId: VOICES.british_female,
    filename: 'b2-m2-l3-pronunciation-model.mp3'
  },
  {
    lessonId: 'b2-m2-l4',
    text: `Never have I seen such dedication. Rarely does she complain about anything. Not only is he talented, but he's also hardworking. Little did they know what awaited them. Only when we arrived did we realize our mistake.`,
    voiceId: VOICES.british_male,
    filename: 'b2-m2-l4-pronunciation-model.mp3'
  },
  {
    lessonId: 'b2-m3-l1',
    text: `Furthermore, it should be noted that these findings require further investigation. In addition to the quantitative data, qualitative analysis was conducted. Nevertheless, the results indicate a positive correlation. Consequently, we recommend implementing the proposed changes.`,
    voiceId: VOICES.american_male,
    filename: 'b2-m3-l1-pronunciation-model.mp3'
  },
  {
    lessonId: 'b2-m3-l2',
    text: `However, the evidence suggests otherwise. On the other hand, alternative explanations exist. Moreover, recent studies support this hypothesis. Nevertheless, caution should be exercised when interpreting these results. In conclusion, further research is necessary.`,
    voiceId: VOICES.british_female,
    filename: 'b2-m3-l2-pronunciation-model.mp3'
  }
];

// Función principal
async function generateModelAudios() {
  console.log('\n🎙️  ===== GENERACIÓN DE AUDIOS MODELO (PRONUNCIATION) ===== 🎙️\n');
  console.log(`📝 Total de audios modelo a generar: ${PRONUNCIATION_MODEL_AUDIOS.length}`);
  console.log('🔑 API Key configurada correctamente\n');
  
  let successCount = 0;
  let errorCount = 0;
  const errors = [];

  for (let i = 0; i < PRONUNCIATION_MODEL_AUDIOS.length; i++) {
    const audio = PRONUNCIATION_MODEL_AUDIOS[i];
    const outputPath = path.join(__dirname, '..', 'public', 'audio', audio.filename);
    
    console.log(`\n[${i + 1}/${PRONUNCIATION_MODEL_AUDIOS.length}] 🎙️  Generando: ${audio.filename}`);
    console.log(`   Lección: ${audio.lessonId}`);
    console.log(`   Voz: ${Object.keys(VOICES).find(key => VOICES[key] === audio.voiceId)}`);
    
    try {
      await generateSpeech(audio.text, audio.voiceId, outputPath);
      const stats = fs.statSync(outputPath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`   ✅ Generado exitosamente (${sizeMB} MB)`);
      successCount++;
      
      // Esperar 1 segundo entre peticiones
      if (i < PRONUNCIATION_MODEL_AUDIOS.length - 1) {
        console.log('   ⏳ Esperando 1 segundo...');
        await wait(1000);
      }
    } catch (error) {
      console.error(`   ❌ Error: ${error.message}`);
      errorCount++;
      errors.push({ lesson: audio.lessonId, error: error.message });
    }
  }

  // Resumen final
  console.log('\n\n═══════════════════════════════════════════════════════');
  console.log('📊 RESUMEN DE GENERACIÓN DE AUDIOS MODELO');
  console.log('═══════════════════════════════════════════════════════\n');
  console.log(`✅ Exitosos: ${successCount}/${PRONUNCIATION_MODEL_AUDIOS.length}`);
  console.log(`❌ Errores: ${errorCount}/${PRONUNCIATION_MODEL_AUDIOS.length}`);
  console.log(`📈 Tasa de éxito: ${((successCount / PRONUNCIATION_MODEL_AUDIOS.length) * 100).toFixed(1)}%`);
  
  if (errors.length > 0) {
    console.log('\n❌ Errores encontrados:');
    errors.forEach((err, idx) => {
      console.log(`   ${idx + 1}. ${err.lesson}: ${err.error}`);
    });
  }
  
  console.log('\n═══════════════════════════════════════════════════════');
  console.log('✨ Generación de audios modelo completada');
  console.log('═══════════════════════════════════════════════════════\n');
}

// Ejecutar
generateModelAudios().catch(console.error);
