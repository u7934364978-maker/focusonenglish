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
    
    const evaluationPrompt = `You are an expert English language teacher evaluating a student's speaking performance.

LEVEL: ${level}
PROMPT GIVEN TO STUDENT: "${prompt}"
${expectedResponse ? `EXPECTED RESPONSE: "${expectedResponse}"` : ''}
${targetWords.length > 0 ? `TARGET WORDS TO USE: ${targetWords.join(', ')}` : ''}

STUDENT'S TRANSCRIBED RESPONSE: "${transcription}"

Evaluate the student's speaking performance and provide scores (0-100) for:
1. Pronunciation - clarity and correctness of sounds
2. Fluency - smoothness, natural pace, hesitations
3. Grammar - correctness of sentence structures and tenses
4. Vocabulary - appropriateness and variety of words used

Also provide:
- Overall feedback (2-3 sentences in Spanish)
- 2-3 specific strengths
- 2-3 areas for improvement
- List of target words they used correctly
- List of target words they missed (if applicable)

Consider the CEFR ${level} level standards when scoring.

Respond in JSON format:
{
  "pronunciationScore": number,
  "fluencyScore": number,
  "grammarScore": number,
  "vocabularyScore": number,
  "overallScore": number,
  "feedback": "Encouraging feedback in Spanish",
  "strengths": ["strength 1", "strength 2"],
  "improvements": ["improvement 1", "improvement 2"],
  "detectedWords": ["word1", "word2"],
  "missedWords": ["word3", "word4"]
}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are an encouraging English teacher providing constructive feedback for ${level} level students. Be supportive but honest about areas for improvement.`
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
      feedback: evaluation.feedback || 'Good effort! Keep practicing.',
      strengths: evaluation.strengths || [],
      improvements: evaluation.improvements || [],
      detectedWords: evaluation.detectedWords || [],
      missedWords: evaluation.missedWords || []
    };

    return NextResponse.json(response);

  } catch (error: any) {
    console.error('❌ Error evaluating speaking:', error);
    
    // Provide helpful error messages
    let errorMessage = 'Failed to evaluate speaking exercise.';
    
    if (error.message?.includes('API key')) {
      errorMessage = 'OpenAI API key is not configured or invalid.';
    } else if (error.message?.includes('audio')) {
      errorMessage = 'Failed to process audio. Please try recording again.';
    } else if (error.message?.includes('rate limit')) {
      errorMessage = 'Rate limit exceeded. Please try again in a moment.';
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: error.message,
        transcription: 'Could not transcribe audio. Please try again.'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'speaking-evaluation',
    version: '1.0.0',
    features: [
      'Speech-to-Text (Whisper)',
      'Pronunciation Analysis',
      'Fluency Evaluation',
      'Grammar Assessment',
      'Vocabulary Analysis'
    ]
  });
}
