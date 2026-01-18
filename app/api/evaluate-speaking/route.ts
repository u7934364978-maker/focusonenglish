import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface SpeakingEvaluationRequest {
  audioBase64: string;
  prompt: string;
  expectedResponse?: string;
  targetWords?: string[];
  level?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
}

export interface SpeakingEvaluationResponse {
  transcription: string;
  pronunciationScore: number;
  fluencyScore: number;
  grammarScore: number;
  vocabularyScore: number;
  overallScore: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
  detectedWords: string[];
  missedWords: string[];
}

/**
 * API Route: Evaluate Speaking Exercise
 * POST /api/evaluate-speaking
 * 
 * Evaluates student's speaking recording using:
 * 1. OpenAI Whisper for transcription (Speech-to-Text)
 * 2. GPT-4 for pronunciation, fluency, grammar, vocabulary analysis
 */
export async function POST(request: NextRequest) {
  try {
    const body: SpeakingEvaluationRequest = await request.json();
    
    const {
      audioBase64,
      prompt,
      expectedResponse,
      targetWords = [],
      level = 'B2'
    } = body;

    // Validate required fields
    if (!audioBase64 || !prompt) {
      return NextResponse.json(
        { error: 'Missing required fields: audioBase64 and prompt' },
        { status: 400 }
      );
    }

    // Step 1: Convert base64 to buffer
    const audioBuffer = Buffer.from(audioBase64, 'base64');

    // Step 2: Transcribe audio using Whisper
    console.log('🎤 Transcribing audio with Whisper...');
    
    // Create a File-like object for OpenAI
    const audioFile = new File([audioBuffer], 'recording.webm', { type: 'audio/webm' });
    
    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
      language: 'en', // English
      response_format: 'text'
    });

    console.log('✅ Transcription:', transcription);

    // Step 3: Evaluate with GPT-4
    console.log('🤖 Evaluating with GPT-4...');
    
    const evaluationPrompt = `Eres un profesor experto de inglés evaluando el desempeño oral de un estudiante.

NIVEL: ${level}
INSTRUCCIÓN DADA AL ESTUDIANTE: "${prompt}"
${expectedResponse ? `RESPUESTA ESPERADA: "${expectedResponse}"` : ''}
${targetWords.length > 0 ? `PALABRAS OBJETIVO A USAR: ${targetWords.join(', ')}` : ''}

RESPUESTA TRANSCRITA DEL ESTUDIANTE: "${transcription}"

Evalúa el desempeño oral del estudiante y proporciona puntuaciones (0-100) para:
1. Pronunciación - claridad y corrección de los sonidos
2. Fluidez - suavidad, ritmo natural, vacilaciones
3. Gramática - corrección de estructuras de oraciones y tiempos verbales
4. Vocabulario - adecuación y variedad de palabras utilizadas

También proporciona:
- Retroalimentación general (2-3 oraciones en español)
- 2-3 fortalezas específicas
- 2-3 áreas de mejora
- Lista de palabras objetivo que usaron correctamente
- Lista de palabras objetivo que omitieron (si aplica)

Considera los estándares del nivel MCER ${level} al calificar.

Responde en formato JSON:
{
  "pronunciationScore": number,
  "fluencyScore": number,
  "grammarScore": number,
  "vocabularyScore": number,
  "overallScore": number,
  "feedback": "Retroalimentación alentadora en español",
  "strengths": ["fortaleza 1", "fortaleza 2"],
  "improvements": ["mejora 1", "mejora 2"],
  "detectedWords": ["palabra1", "palabra2"],
  "missedWords": ["palabra3", "palabra4"]
}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `Eres un profesor alentador de inglés que proporciona retroalimentación constructiva para estudiantes de nivel ${level}. Sé comprensivo pero honesto sobre las áreas de mejora. Proporciona todas las respuestas en español.`
        },
        {
          role: 'user',
          content: evaluationPrompt
        }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3
    });

    const evaluation = JSON.parse(completion.choices[0].message.content || '{}');

    console.log('✅ Evaluation complete:', evaluation);

    // Combine results
    const response: SpeakingEvaluationResponse = {
      transcription,
      pronunciationScore: evaluation.pronunciationScore || 70,
      fluencyScore: evaluation.fluencyScore || 70,
      grammarScore: evaluation.grammarScore || 70,
      vocabularyScore: evaluation.vocabularyScore || 70,
      overallScore: evaluation.overallScore || 70,
      feedback: evaluation.feedback || '¡Buen esfuerzo! Sigue practicando.',
      strengths: evaluation.strengths || [],
      improvements: evaluation.improvements || [],
      detectedWords: evaluation.detectedWords || [],
      missedWords: evaluation.missedWords || []
    };

    return NextResponse.json(response);

  } catch (error: any) {
    console.error('❌ Error evaluating speaking:', error);
    
    // Provide helpful error messages
    let errorMessage = 'Error al evaluar el ejercicio de expresión oral.';
    
    if (error.message?.includes('API key')) {
      errorMessage = 'La clave API de OpenAI no está configurada o es inválida.';
    } else if (error.message?.includes('audio')) {
      errorMessage = 'Error al procesar el audio. Por favor, intenta grabar nuevamente.';
    } else if (error.message?.includes('rate limit')) {
      errorMessage = 'Límite de tasa excedido. Por favor, intenta nuevamente en un momento.';
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: error.message,
        transcription: 'No se pudo transcribir el audio. Por favor, intenta nuevamente.'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'evaluacion-expresion-oral',
    version: '1.0.0',
    features: [
      'Conversión de voz a texto (Whisper)',
      'Análisis de pronunciación',
      'Evaluación de fluidez',
      'Evaluación de gramática',
      'Análisis de vocabulario'
    ]
  });
}
