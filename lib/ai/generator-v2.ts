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
         "explanation": "Brief explanation in Spanish",
         "correctiveFeedback": "Specific feedback in Spanish for why common mistakes might happen in this question (ONLY if useful)",
         "suggestions": ["Native-like alternatives or related vocabulary"],
         "translation": "Spanish translation of the question (ONLY for A1 level)",
         "visualHint": "Simple emoji or description that represents the concept (ONLY for A1 level)"
       }
     ]
   }
4. Exercise Types:
   - fill-blank: A sentence with a missing word. No options.
   - multiple-choice: A question or sentence with 4 options.
   - reading-comprehension: A text followed by questions about it.
   - writing-analysis: A short prompt or sentence to correct/improve.
   - pronunciation-practice: Focus on phonetics or word stress.
   - dictation: Generate a short sentence (5-10 words) as "correctAnswer". The "question" should be "Escucha y escribe lo que oyes."
   - speaking-analysis: A situational prompt for the student to respond to.
   - roleplay: Instead of "questions", return a "scenario" object:
     {
       "scenario": {
         "title": "Scenario Title",
         "description": "General description",
         "aiCharacter": { "name": "Name", "role": "Role", "personality": "Personality" },
         "studentRole": "What the student should do",
         "context": "The setting",
         "goal": "What to achieve",
         "tasks": ["Task 1", "Task 2"],
         "startingMessage": "Hello!"
       }
     }

5. Topic: Adapt the content to the requested topic if provided.
6. Difficulty: Adjust the complexity within the CEFR level based on "easy", "medium", or "hard".

**SPECIAL INSTRUCTIONS FOR A1 LEVEL (ABSOLUTE BEGINNERS):**
- Include "translation" field in each question with Spanish translation
- Include "visualHint" field with relevant emoji or simple description (e.g., "👋" for greetings, "🏠" for house, "🍎" for apple)
- Use VERY SIMPLE vocabulary (max 500 most common words)
- Use present simple tense primarily
- Include cognates when possible (words similar in Spanish: "hotel", "hospital", "family")
- Questions should focus on: greetings, numbers, colors, family, food, daily routines, basic objects
- Provide contextual images hints through emojis
- All options should be single words or very short phrases (2-3 words max)`;

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
    // Instrucciones especiales para nivel A1
    const a1Instructions = level === 'A1' ? `
    
    🎯 CRITICAL A1 BEGINNER REQUIREMENTS:
    - Add "translation" field to EVERY question (Spanish translation)
    - Add "visualHint" field to EVERY question (emoji that represents the concept)
    - Use ONLY the 500 most common English words
    - Focus on: greetings, numbers (1-20), colors, family members, basic food, daily actions
    - Examples of good A1 questions:
      * "What is this? 🍎" (options: apple, orange, banana, grape) 
      * "How do you greet someone? 👋" (options: Hello, Goodbye, Please, Sorry)
      * "This is my ___. 👨‍👩‍👧" (Fill: family/mother/father)
    - Make it VISUAL and INTUITIVE for someone with ZERO English knowledge
    - Include everyday situations: home, family, food, basic actions` 
    : '';

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
          ${request.recentErrors && request.recentErrors.length > 0 ? `
          IMPORTANT: The student has recently struggled with the following topics/errors:
          ${request.recentErrors.map((e: any) => `- Topic: ${e.topic}, Mistake: "${e.wrong_answer}" (Expected: "${e.correct_answer}")`).join('\n')}
          
          Please include at least 2 questions that specifically address these weak areas or similar concepts.` : ''}
          Random context seed: ${randomSeed}
          Special instruction: ${contextExtra}
          ${a1Instructions}
          
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
