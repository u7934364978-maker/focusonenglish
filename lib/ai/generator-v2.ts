import OpenAI from 'openai';
import { GenerateExerciseRequest, GeneratedExercise, CEFRLevel } from '@/lib/exercise-types';
import { generateFallbackExercise } from '@/lib/ai/fallback-exercises';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const systemPrompt = `You are an expert English language teacher. 
Your task is to generate high-quality English exercises for students.

GUIDELINES:
1. Level: Strictly follow the CEFR level requested (A1-C2).
2. Content: 
   - All questions, options, and exercises must be in ENGLISH.
   - All explanations MUST be in SPANISH to help the student understand the reasoning.
3. Format: Return ONLY a JSON object with the following structure:
   {
     "title": "Clear exercise title",
     "instructions": "Clear instructions in English",
     "text": "Reading passage if applicable (only for reading-comprehension)",
     "questions": [
       {
         "question": "The question text",
         "options": ["Option A", "Option B", "Option C", "Option D"], (Include only for multiple-choice)
         "correctAnswer": "The exact correct answer",
         "explanation": "Brief explanation in Spanish"
       }
     ]
   }
4. Exercise Types:
   - fill-blank: A sentence with a missing word. No options.
   - multiple-choice: A question or sentence with 4 options.
   - reading-comprehension: A text followed by questions about it.
   - writing-analysis: A short prompt or sentence to correct/improve.
   - pronunciation-practice: Focus on phonetics or word stress.
   - speaking-analysis: A situational prompt for the student to respond to.

5. Topic: Adapt the content to the requested topic if provided.
6. Difficulty: Adjust the complexity within the CEFR level based on "easy", "medium", or "hard".`;

export async function generateExerciseV2(request: GenerateExerciseRequest): Promise<GeneratedExercise> {
  const { exerciseType, level, difficulty, topic } = request;
  
  // Inyectar aleatoriedad para evitar repeticiones de la IA
  const randomSeed = Math.floor(Math.random() * 10000);
  const contextExtra = [
    "Focus on a specific, real-world scenario.",
    "Use contemporary vocabulary.",
    "Avoid common textbook examples.",
    "Make the context professionally relevant.",
    "Include subtle nuances appropriate for the level."
  ][randomSeed % 5];

  console.log(`[IA V2] Solicitando ejercicio: ${exerciseType}, Nivel: ${level}, Tema: ${topic}, Semilla: ${randomSeed}`);

  if (!process.env.OPENAI_API_KEY) {
    console.warn("[IA V2] API Key no configurada. Usando fallback.");
    return generateFallbackExercise(request);
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { 
          role: "user", 
          content: `Generate a ${exerciseType} exercise with 5 questions. 
          Level: ${level} 
          Difficulty: ${difficulty} 
          Topic: ${topic || 'General English'}
          Random context seed: ${randomSeed}
          Special instruction: ${contextExtra}
          
          Ensure it is pedagogically sound and unique.` 
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.9, // Aumentamos la temperatura para más creatividad
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
    console.error("[IA V2] Error en OpenAI, usando fallback:", error.message);
    // Si falla la cuota (429) o cualquier otro error de red/servidor, usamos el fallback
    return generateFallbackExercise(request);
  }
}
