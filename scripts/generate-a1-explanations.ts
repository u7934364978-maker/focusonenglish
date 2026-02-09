import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
dotenv.config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const CONTENT_DIR = path.join(process.cwd(), 'src/content/cursos/ingles-a1');

async function getCachedExplanations() {
  console.log('Fetching existing cache from Supabase...');
  const { data, error } = await supabase
    .from('exercise_explanations_cache')
    .select('exercise_id');

  if (error) {
    console.error('Error fetching cache:', error);
    return new Set<string>();
  }

  return new Set(data.map(item => item.exercise_id));
}

async function generateExplanation(interaction: any) {
  const systemPrompt = `Eres un tutor de inglés experto para hispanohablantes. 
Tu tarea es explicar de forma clara, concisa y pedagógica por qué la respuesta correcta a un ejercicio es la que es.

Contexto del ejercicio:
- Tipo: ${interaction.type}
- Enunciado (ES): ${interaction.prompt_es || 'No disponible'}
- Estímulo (EN): ${interaction.stimulus_en || 'No disponible'}
- Respuesta Correcta: ${JSON.stringify(interaction.correct_answer) || 'No disponible'}

Instrucciones:
1. Escribe en español.
2. Sé breve (máximo 2-3 frases).
3. Enfócate en la regla gramatical o el matiz de vocabulario clave.
4. Si hay una confusión común (ej. falsos amigos), menciónala brevemente.
5. No des la bienvenida ni uses introducciones innecesarias. Ve directo al grano.`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: "Explícame este ejercicio." }
      ],
      temperature: 0.5,
    });

    return response.choices[0].message.content?.trim() || 'No se pudo generar una explicación.';
  } catch (error) {
    console.error(`Error generating explanation for ${interaction.interaction_id}:`, error);
    return null;
  }
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY is not configured');
    process.exit(1);
  }

  const cachedIds = await getCachedExplanations();
  console.log(`Currently ${cachedIds.size} explanations in cache.`);

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.json'));
  console.log(`Found ${files.length} unit files.`);

  let totalProcessed = 0;
  let totalGenerated = 0;
  let totalSkipped = 0;

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    console.log(`Processing ${file}...`);

    for (const block of content.blocks || []) {
      for (const interaction of block.content || []) {
        totalProcessed++;

        // 1. Skip if it already has an explanation in the JSON
        if (interaction.explanation) {
          totalSkipped++;
          continue;
        }

        // 2. Skip if it's already in the Supabase cache
        if (cachedIds.has(interaction.interaction_id)) {
          totalSkipped++;
          continue;
        }

        // 3. Generate with AI
        console.log(`Generating for ${interaction.interaction_id}...`);
        const explanation = await generateExplanation(interaction);

        if (explanation) {
          // 4. Save to Cache
          const { error } = await supabase.from('exercise_explanations_cache').insert({
            exercise_id: interaction.interaction_id,
            explanation: explanation
          });

          if (error) {
            console.error(`Error saving ${interaction.interaction_id} to cache:`, error.message);
          } else {
            totalGenerated++;
            cachedIds.add(interaction.interaction_id);
            console.log(`✅ Saved: ${interaction.interaction_id}`);
          }
        }

        // Add a small delay to avoid hitting rate limits too fast (optional but safer)
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }
  }

  console.log('\n--- Generation Summary ---');
  console.log(`Total Exercises Processed: ${totalProcessed}`);
  console.log(`Total Skipped (Already existed): ${totalSkipped}`);
  console.log(`Total Generated & Saved: ${totalGenerated}`);
}

main().catch(console.error);
