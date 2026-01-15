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
  'narrator': 'TxGEqnHWrfWFTfGW9XjX'
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

// Lista de audios a generar (Listening exercises)
const LISTENING_AUDIOS = [
  // Módulo 1
  {
    lessonId: 'b2-m1-l1',
    exerciseId: 'listening-1',
    text: `Interviewer: So, Sarah, can you tell us about your decision to work abroad?

Sarah: Well, I'd been working in London for about five years when I started to feel that I needed a change. I had been considering overseas opportunities for months, but I hadn't expected it to happen so quickly.

Interviewer: What made you take the final decision?

Sarah: My company had been expanding into Asia, and they offered me a position in Singapore. By that time, I had already been learning Mandarin for two years, which made the opportunity even more appealing.

Interviewer: And how did the move go?

Sarah: It was challenging at first. I'd never lived abroad before, and I hadn't realized how different everything would be. But within six months, I'd settled in completely. Looking back, I can see that all the preparation I'd done before moving really paid off.

Interviewer: That's wonderful. What advice would you give to others considering a similar move?

Sarah: Make sure you've researched the country thoroughly before you go. I'd spent hours reading about Singapore before I arrived, and it helped tremendously. Also, be prepared for culture shock – even if you think you've prepared well, it might still surprise you!`,
    voiceId: VOICES.british_female,
    duration: 180
  },
  {
    lessonId: 'b2-m1-l2',
    exerciseId: 'listening-1',
    text: `News Anchor: Good evening. Tonight we report on the growing trend of renewable energy in the UK. Solar and wind power are being adopted at record rates, and new technologies are being developed every day.

Expert: Yes, that's right. Five years ago, only a small percentage of homes were powered by renewable sources. Now, more than 30% of British households are using green energy. This transformation has been achieved through government incentives and technological advances.

News Anchor: What challenges remain?

Expert: Storage capacity is still being improved. Batteries that can store solar energy for use at night are being designed by several companies. Also, the infrastructure is being upgraded to handle the increased demand.

News Anchor: And what about the future?

Expert: By 2030, it's expected that 70% of the UK's energy will be generated from renewable sources. New wind farms are being built along the coast, and solar panels are being installed on public buildings across the country. The future looks very promising.`,
    voiceId: VOICES.british_male,
    duration: 180
  },
  {
    lessonId: 'b2-m1-l3',
    exerciseId: 'listening-1',
    text: `Manager: Thanks for meeting with me, Tom. I wanted to discuss the client feedback from last week.

Tom: Of course. I heard there were some concerns.

Manager: Yes. The client said that the report had been submitted late, and they complained that some data was missing. They told me they'd been waiting for those figures for over a week.

Tom: I apologize. I thought I'd sent everything on time. I had told my assistant to include all the data, but there must have been a miscommunication.

Manager: I see. Well, the client mentioned that they'd expected a more detailed analysis as well. They said you'd promised to include market projections.

Tom: Yes, I had mentioned that in our initial meeting. I'd been working on those projections, but I ran out of time. I should have communicated that delay to them.

Manager: Going forward, let's make sure we're clear about deadlines and deliverables. If something isn't going to be ready, we need to inform the client immediately.

Tom: Absolutely. I'll be more proactive about communication from now on.`,
    voiceId: VOICES.american_male,
    duration: 180
  },
  {
    lessonId: 'b2-m1-l4',
    exerciseId: 'listening-1',
    text: `Sophie: Hey Mark, I haven't seen you in ages! What have you been up to?

Mark: Hi Sophie! If I'd known you were going to be here, I would have come earlier. I've been so busy with work lately.

Sophie: Really? What would have happened if you'd missed this event?

Mark: Well, I would have regretted it. You know how important networking is in our field. If I hadn't come, I wouldn't have met the director from that production company.

Sophie: Oh, that's fantastic! So what did they say?

Mark: They said that if I'd applied earlier, they might have had a position for me. But they're going to consider me for their next project, which starts in three months.

Sophie: That's still great news! What will you do if they offer you the job?

Mark: I'll take it immediately. This is exactly the kind of opportunity I've been waiting for. If they'd asked me last year, I might have hesitated, but now I'm ready for a change.

Sophie: I'm so happy for you! If you need any references or recommendations, just let me know.

Mark: Thanks, Sophie. That means a lot. If things work out, we might even end up working together!`,
    voiceId: VOICES.british_female,
    duration: 180
  },
  {
    lessonId: 'b2-m1-l5',
    exerciseId: 'listening-1',
    text: `Narrator: Last summer, I decided to take a road trip across Scotland. I'd been planning this journey for months, carefully mapping out each destination and booking accommodations in advance.

On the first morning, I woke up early and set off from Edinburgh. The weather had been perfect all week, and I was confident that nothing would go wrong. I'd been driving for about two hours when I noticed the sky darkening. Within minutes, it started raining heavily.

I had packed an umbrella and waterproof jacket, but I hadn't expected such a dramatic change. By the time I reached Glencoe, the rain had turned into a storm. I'd originally planned to hike through the valley, but the weather made it impossible.

While I was waiting for the storm to pass, I met a local guide at a café. She'd been working in the area for years and told me fascinating stories about the region's history. She explained that these sudden storms were common and suggested alternative routes.

Thanks to her advice, I adjusted my plans and ended up visiting some hidden gems I hadn't known about. By the end of the trip, I realized that sometimes the best experiences come from the unexpected.`,
    voiceId: VOICES.narrator,
    duration: 200
  },
  // Módulo 2
  {
    lessonId: 'b2-m2-l1',
    exerciseId: 'listening-1',
    text: `Doctor: Good morning, Emily. How can I help you today?

Emily: Hi, Doctor. I've been feeling really tired lately, and I can't seem to concentrate at work.

Doctor: I see. You might need to get more rest. Have you been sleeping well?

Emily: Not really. I must have woken up at least five times last night. I could hear the neighbors making noise.

Doctor: That can't be easy. You should try using earplugs. Also, you ought to establish a regular bedtime routine.

Emily: I've been meaning to, but I never have time in the evenings.

Doctor: You have to make time for your health. You could start by turning off electronic devices an hour before bed. The blue light may be affecting your sleep.

Emily: I hadn't thought of that. I must admit, I do spend a lot of time on my phone before sleeping.

Doctor: That might be the main issue. You should also avoid caffeine after 3 PM. How many cups of coffee do you drink?

Emily: Maybe four or five? I must have become dependent on it to stay awake during the day.

Doctor: That's definitely too much. You mustn't rely on caffeine to function. Let's start with reducing it to two cups maximum, and see if that helps your sleep quality.`,
    voiceId: VOICES.british_male,
    duration: 180
  },
  {
    lessonId: 'b2-m2-l2',
    exerciseId: 'listening-1',
    text: `Tour Guide: Welcome everyone to the Tower of London, which is one of the most famous landmarks in England. The tower, which was built by William the Conqueror in 1066, has served many purposes throughout history.

The White Tower, which you can see in the center, is the oldest part of the complex. It's where the royal family used to store their armor and weapons. The Crown Jewels, which are kept in the Jewel House, attract millions of visitors every year.

Over there, you can see the Ravens, which are protected by law. There's a legend that says the kingdom will fall if the ravens ever leave the Tower. That's why we have a Ravenmaster, whose job is to take care of them.

The Bloody Tower, which got its name from the mysterious disappearance of the two princes, is one of the most haunted locations in London. Many visitors have reported strange occurrences in areas where executions took place.

Now, let me tell you about Anne Boleyn, who was Henry VIII's second wife. She was executed here in 1536. The spot where she was beheaded is marked with a memorial.

The Yeoman Warders, whom you might know as Beefeaters, have been guarding the Tower for centuries. They live here with their families and conduct tours like this one.`,
    voiceId: VOICES.british_male,
    duration: 180
  },
  {
    lessonId: 'b2-m2-l3',
    exerciseId: 'listening-1',
    text: `Career Counselor: So, Michael, tell me about your career goals.

Michael: Well, I'm interested in becoming a software developer. I enjoy solving problems and creating new applications.

Career Counselor: That's great. Have you considered learning multiple programming languages? It would make you more employable.

Michael: I've started teaching myself Python. I find working from home more productive than being in an office.

Career Counselor: Many tech companies now allow remote work. However, you should avoid limiting yourself to just one language. Employers appreciate seeing a diverse skill set on your resume.

Michael: That makes sense. I've also been thinking about doing a coding bootcamp. Would you recommend attending one?

Career Counselor: It depends on your learning style. Some people prefer studying at their own pace, while others benefit from structured programs. Joining a bootcamp can be intense, but it offers networking opportunities.

Michael: I worry about failing. What if I'm not good enough?

Career Counselor: That's a common fear, but remember: learning to code is a process. Making mistakes is actually essential for growth. Most successful developers will tell you that they learned more from their errors than their successes.

Michael: That's reassuring. I'll stop doubting myself and start applying to programs.

Career Counselor: Excellent! Taking action is the first step. Let me know if you need help preparing your application.`,
    voiceId: VOICES.american_female,
    duration: 200
  },
  {
    lessonId: 'b2-m2-l4',
    exerciseId: 'listening-1',
    text: `Professor: Good morning, class. Today we're going to discuss a fascinating topic: the power of rhetorical devices in persuasive communication.

Rarely do we stop to think about how language shapes our perceptions, but it does so constantly. Not only does the choice of words matter, but so does the structure of sentences.

Take, for example, Winston Churchill's famous speech: "Never in the field of human conflict was so much owed by so many to so few." Notice how he inverts the typical sentence structure for dramatic effect.

Little did people realize at the time how influential that speech would become. Seldom has a leader used language so effectively to unite a nation during crisis.

On no account should we underestimate the power of emphasis through inversion. Not until we analyze these techniques do we truly appreciate their impact.

Here's another example: "Only when we face our fears can we overcome them." The inversion places focus on the condition – facing fears – before mentioning the result.

Never before have we had such access to information about persuasive techniques. Under no circumstances should modern communicators ignore these classical methods.

So important is this skill that many top executives hire speech coaches. Nowhere is this more evident than in political campaigns, where every word counts.`,
    voiceId: VOICES.british_male,
    duration: 180
  },
  {
    lessonId: 'b2-m2-l5',
    exerciseId: 'listening-1',
    text: `Marketing Director: Team, our campaign has been underperforming. We need a fresh approach.

Designer: What if we used more vibrant colors in our visuals? Research shows that bold designs attract attention.

Marketing Director: Good point. Not only should we update the visuals, but we also need to reconsider our messaging.

Copywriter: I suggest we emphasize the benefits rather than the features. Customers care more about what the product can do for them.

Marketing Director: Absolutely. Furthermore, we ought to highlight testimonials more prominently. Social proof is incredibly powerful.

Data Analyst: The numbers support that. On top of that, our conversion rates increase significantly when we include user reviews.

Marketing Director: Excellent. So, to summarize: we'll redesign the visuals, refocus the messaging on benefits, and prominently feature testimonials. In addition to that, let's create a sense of urgency with limited-time offers.

Designer: Should we also update our social media strategy?

Marketing Director: Yes. As a matter of fact, our social media engagement has been declining. We need to post more consistently and interact with followers more actively.

Copywriter: What about influencer partnerships?

Marketing Director: That's worth exploring. Moreover, we should consider creating video content. Videos typically generate more engagement than static images.

Team: Agreed!

Marketing Director: Great. Let's implement these changes and reconvene next week to assess the impact.`,
    voiceId: VOICES.american_female,
    duration: 200
  },
  // Módulo 3
  {
    lessonId: 'b2-m3-l1',
    exerciseId: 'listening-1',
    text: `Professor: Today I'll lecture on the structure of formal essays. In academic writing, clarity and organization are paramount.

A well-structured essay typically consists of three main parts: the introduction, body paragraphs, and conclusion. Each serves a distinct purpose.

The introduction should present your thesis statement clearly. This is where you outline your main argument and provide context for your reader. Avoid vague statements; be specific and direct.

Body paragraphs must develop your argument systematically. Each paragraph should focus on one key point, supported by evidence and analysis. Use transition words to guide your reader through your reasoning.

Furthermore, it's essential to address counterarguments. Acknowledging opposing views demonstrates critical thinking and strengthens your position.

In the conclusion, synthesize your main points without introducing new information. Restate your thesis in light of the evidence you've presented.

Regarding style, maintain a formal tone throughout. Avoid contractions, colloquialisms, and first-person pronouns unless specifically instructed otherwise.

Finally, always cite your sources properly. Academic integrity is non-negotiable.

Remember, good academic writing takes practice. The more you write, the more natural these structures will become.`,
    voiceId: VOICES.british_male,
    duration: 180
  },
  {
    lessonId: 'b2-m3-l2',
    exerciseId: 'listening-1',
    text: `Lecturer: Good afternoon. Today we're examining advanced connectors and their role in creating cohesive academic texts.

Firstly, let's consider sequential connectors. These include words like "firstly," "secondly," and "finally," which help organize ideas chronologically.

In contrast, contrastive connectors such as "however," "nevertheless," and "on the other hand" highlight differences between ideas. These are particularly useful when presenting balanced arguments.

Moreover, additive connectors like "furthermore," "in addition," and "additionally" allow you to build upon previous points, creating a cumulative effect.

Meanwhile, causal connectors such as "therefore," "consequently," and "as a result" establish cause-and-effect relationships. These are crucial for demonstrating logical reasoning.

Subsequently, we have exemplification connectors: "for instance," "for example," and "such as." These introduce specific cases that support general claims.

Nevertheless, we must be careful not to overuse connectors. While they enhance coherence, excessive use can make writing appear forced or artificial.

Ultimately, the key is to use connectors naturally and appropriately. They should guide your reader smoothly through your argument without drawing attention to themselves.

In conclusion, mastering these linguistic tools will significantly improve the quality and professionalism of your academic writing.`,
    voiceId: VOICES.british_female,
    duration: 200
  },
  {
    lessonId: 'b2-m3-l3',
    exerciseId: 'listening-1',
    text: `Professor: Welcome to today's lecture on critical analysis in academic discourse.

The ability to analyze sources critically is fundamental to academic success. When you encounter a text, you must ask: What is the author's purpose? What evidence do they provide? Are their conclusions justified?

Consider, for instance, the difference between correlation and causation. Many studies demonstrate correlations between variables, but this doesn't necessarily prove that one causes the other.

Furthermore, we must evaluate the credibility of our sources. Is the author qualified to speak on this topic? Has the work been peer-reviewed? Is the publication reputable?

Implicit assumptions in arguments also warrant scrutiny. Authors often build their cases on unstated premises. Our job as critical readers is to identify and evaluate these assumptions.

Moreover, we should be aware of potential biases. Every author writes from a particular perspective, which may influence their interpretation of data.

To illustrate this point, let's examine two studies on the same topic that reach different conclusions. By analyzing their methodologies and underlying assumptions, we can understand why their findings diverge.

In essence, critical analysis is about thinking deeply and questioning thoroughly. It's not about being negative, but rather about engaging meaningfully with ideas.

Consequently, as you develop this skill, your own academic work will become more sophisticated and convincing.`,
    voiceId: VOICES.american_male,
    duration: 200
  }
];

// Función principal
async function generateAllAudios() {
  console.log('\n🎵 ===== GENERACIÓN DE AUDIOS PARA CURSO B2 ===== 🎵\n');
  console.log(`📝 Total de audios a generar: ${LISTENING_AUDIOS.length}`);
  console.log('🔑 API Key configurada correctamente\n');
  
  let successCount = 0;
  let errorCount = 0;
  const errors = [];

  for (let i = 0; i < LISTENING_AUDIOS.length; i++) {
    const audio = LISTENING_AUDIOS[i];
    const filename = `b2-${audio.lessonId.split('-')[1]}-${audio.lessonId.split('-')[2]}-${audio.exerciseId}.mp3`;
    const outputPath = path.join(__dirname, '..', 'public', 'audio', filename);
    
    console.log(`\n[${i + 1}/${LISTENING_AUDIOS.length}] 🎙️  Generando: ${filename}`);
    console.log(`   Lección: ${audio.lessonId}`);
    console.log(`   Duración estimada: ${audio.duration}s`);
    console.log(`   Voz: ${Object.keys(VOICES).find(key => VOICES[key] === audio.voiceId)}`);
    
    try {
      await generateSpeech(audio.text, audio.voiceId, outputPath);
      const stats = fs.statSync(outputPath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`   ✅ Generado exitosamente (${sizeMB} MB)`);
      successCount++;
      
      // Esperar 1 segundo entre peticiones para no saturar la API
      if (i < LISTENING_AUDIOS.length - 1) {
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
  console.log('📊 RESUMEN DE GENERACIÓN DE AUDIOS');
  console.log('═══════════════════════════════════════════════════════\n');
  console.log(`✅ Exitosos: ${successCount}/${LISTENING_AUDIOS.length}`);
  console.log(`❌ Errores: ${errorCount}/${LISTENING_AUDIOS.length}`);
  console.log(`📈 Tasa de éxito: ${((successCount / LISTENING_AUDIOS.length) * 100).toFixed(1)}%`);
  
  if (errors.length > 0) {
    console.log('\n❌ Errores encontrados:');
    errors.forEach((err, idx) => {
      console.log(`   ${idx + 1}. ${err.lesson}: ${err.error}`);
    });
  }
  
  console.log('\n═══════════════════════════════════════════════════════');
  console.log('✨ Generación de audios completada');
  console.log('═══════════════════════════════════════════════════════\n');
}

// Ejecutar
generateAllAudios().catch(console.error);
