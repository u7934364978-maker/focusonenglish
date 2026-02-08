import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { createClient } from '@/lib/supabase/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OPENAI_API_KEY is not configured' }, { status: 500 });
  }

  try {
    const { interaction } = await req.json();

    if (!interaction || !interaction.id) {
      return NextResponse.json({ error: 'Interaction data with ID is required' }, { status: 400 });
    }

    const supabase = await createClient();

    // 1. Check Cache
    const { data: cached } = await supabase
      .from('exercise_explanations_cache')
      .select('explanation')
      .eq('exercise_id', interaction.id)
      .single();

    if (cached) {
      return NextResponse.json({
        success: true,
        explanation: cached.explanation,
        cached: true
      });
    }

    // 2. Generate with AI if not in cache
    const systemPrompt = `Eres un tutor de inglés experto para hispanohablantes. 
Tu tarea es explicar de forma clara, concisa y pedagógica por qué la respuesta correcta a un ejercicio es la que es.

Contexto del ejercicio:
- Tipo: ${interaction.type}
- Enunciado (ES): ${interaction.prompt_es || 'No disponible'}
- Estímulo (EN): ${interaction.stimulus_en || 'No disponible'}
- Respuesta Correcta: ${interaction.correct_answer || 'No disponible'}

Instrucciones:
1. Escribe en español.
2. Sé breve (máximo 2-3 frases).
3. Enfócate en la regla gramatical o el matiz de vocabulario clave.
4. Si hay una confusión común (ej. falsos amigos), menciónala brevemente.
5. No des la bienvenida ni uses introducciones innecesarias. Ve directo al grano.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: "Explícame este ejercicio." }
      ],
      temperature: 0.5,
    });

    const explanation = response.choices[0].message.content?.trim() || 'No se pudo generar una explicación.';

    // 3. Save to Cache (Background)
    // We don't await this to keep the response fast, or we do await it to ensure it's saved.
    // Given it's an API route, better await it or use supabase.from().insert().then()
    await supabase.from('exercise_explanations_cache').insert({
      exercise_id: interaction.id,
      explanation: explanation
    });

    return NextResponse.json({
      success: true,
      explanation,
      cached: false
    });

  } catch (error: unknown) {
    console.error('Explanation Generation Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
