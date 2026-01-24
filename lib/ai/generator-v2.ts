import OpenAI from 'openai';
import { GenerateExerciseRequest, GeneratedExercise, CEFRLevel } from '@/lib/exercise-types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function generateExerciseV2(request: GenerateExerciseRequest): Promise<GeneratedExercise> {
  const { exerciseType, level, difficulty, topic } = request;

  console.log(`[IA V2] Solicitando ejercicio: ${exerciseType}, Nivel: ${level}, Tema: ${topic}`);

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("La API Key de OpenAI no está definida en el servidor.");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Generate a ${exerciseType} exercise with 5 questions. Make sure it is strictly ${level} level.` }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const rawContent = response.choices[0].message.content;
    console.log("[IA V2] Respuesta recibida de OpenAI");
    
    const content = JSON.parse(rawContent || '{}');

    return {
      id: `ai_${Date.now()}`,
      type: exerciseType,
      category: 'practice',
      topic: topic || 'General',
      difficulty: difficulty as any,
      level: level as any,
      content: content,
      createdAt: new Date(),
    };
  } catch (error: any) {
    console.error("[IA V2] Error en la llamada a OpenAI:", error.message);
    throw error;
  }
}
