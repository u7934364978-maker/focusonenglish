import OpenAI from 'openai';
import { GenerateExerciseRequest, GeneratedExercise, CEFRLevel } from '@/lib/exercise-types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function generateExerciseV2(request: GenerateExerciseRequest): Promise<GeneratedExercise> {
  const { exerciseType, level, difficulty, topic } = request;

  const systemPrompt = `You are an expert English teacher. 
Create a high-quality ${level} level exercise about "${topic}".
Difficulty: ${difficulty}.
Return ONLY a JSON object. 
Format:
{
  "title": "Exercise Title",
  "instructions": "Instructions in Spanish",
  "text": "Reading passage (only if reading-comprehension)",
  "questions": [
    {
      "question": "Question text",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correctAnswer": "The exact correct option text",
      "explanation": "Explanation in Spanish"
    }
  ]
}`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: `Generate a ${exerciseType} exercise with 5 questions.` }
    ],
    response_format: { type: "json_object" },
    temperature: 0.7,
  });

  const content = JSON.parse(response.choices[0].message.content || '{}');

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
}
