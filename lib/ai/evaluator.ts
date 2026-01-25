import OpenAI from 'openai';
import { CEFRLevel } from '@/lib/exercise-types';

export interface EvaluationResponse {
  score: number;
  feedback: string;
  corrections: string[];
  suggestions: string[];
}

export async function evaluateWithAI(
  prompt: string,
  userResponse: string,
  level: CEFRLevel,
  type: 'writing' | 'speaking'
): Promise<EvaluationResponse> {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '',
  });

  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured');
  }

  const systemPrompt = `Eres un profesor experto de inglés especializado en el Marco Común Europeo de Referencia (MCER).
Tu tarea es evaluar la respuesta de un estudiante de nivel ${level} para un ejercicio de ${type === 'writing' ? 'escritura' : 'expresión oral'}.

Proporciona una evaluación pedagógica, constructiva y detallada en español.
Para el nivel ${level}, sé ${level.startsWith('A') ? 'más tolerante con errores gramaticales menores' : 'más exigente con la precisión y el vocabulario'}.

Responde SIEMPRE en formato JSON con la siguiente estructura exacta:
{
  "score": número del 0 al 100,
  "feedback": "Retroalimentación general positiva y constructiva en español (máx 200 caracteres)",
  "corrections": ["lista de errores específicos encontrados y su corrección"],
  "suggestions": ["lista de sugerencias para mejorar la respuesta o usar vocabulario más avanzado"]
}`;

  const userPrompt = `
NIVEL MCER: ${level}
TIPO DE EJERCICIO: ${type}
PREGUNTA/INSTRUCCIÓN: "${prompt}"
RESPUESTA DEL ESTUDIANTE: "${userResponse}"
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error('No se recibió contenido de la IA');
    }

    const evaluation = JSON.parse(content);
    
    // Asegurar que los campos existan
    return {
      score: evaluation.score ?? 0,
      feedback: evaluation.feedback ?? 'No se pudo generar feedback.',
      corrections: Array.isArray(evaluation.corrections) ? evaluation.corrections : [],
      suggestions: Array.isArray(evaluation.suggestions) ? evaluation.suggestions : []
    };
  } catch (error: any) {
    console.error('Error in AI evaluation:', error);
    throw error;
  }
}
