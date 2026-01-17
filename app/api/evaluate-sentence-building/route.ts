import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface SentenceBuildingEvaluationRequest {
  userSentence: string;
  targetSentence: string;
  grammarFocus: string;
  words: Array<{ text: string; type: string }>;
}

export interface SentenceBuildingEvaluationResponse {
  isCorrect: boolean;
  score: number; // 0-100
  feedback: string;
  grammarAnalysis: {
    wordOrder: number; // 0-100
    grammarAccuracy: number; // 0-100
    meaningPreserved: boolean;
  };
  suggestions: string[];
}

export async function POST(request: NextRequest) {
  try {
    const body: SentenceBuildingEvaluationRequest = await request.json();
    
    const { userSentence, targetSentence, grammarFocus, words } = body;

    // Validate required fields
    if (!userSentence || !targetSentence) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Normalize sentences
    const normalizeString = (str: string) => str.toLowerCase().trim().replace(/\s+/g, ' ');
    const normalizedUser = normalizeString(userSentence);
    const normalizedTarget = normalizeString(targetSentence);

    // Quick check for exact match
    if (normalizedUser === normalizedTarget) {
      return NextResponse.json<SentenceBuildingEvaluationResponse>({
        isCorrect: true,
        score: 100,
        feedback: '🎉 Perfect! Your sentence is exactly correct!',
        grammarAnalysis: {
          wordOrder: 100,
          grammarAccuracy: 100,
          meaningPreserved: true
        },
        suggestions: []
      });
    }

    // Use AI to evaluate sentence construction
    const systemPrompt = `You are an expert English grammar teacher specializing in sentence construction.
Your task is to evaluate if a student's sentence is grammatically correct and conveys the same meaning as the target sentence.

EVALUATION CRITERIA:
1. Word Order: Is the word order correct for English grammar?
2. Grammar Accuracy: Are the grammar rules followed correctly?
3. Meaning: Does it preserve the original meaning?

IMPORTANT:
- Accept minor differences if grammar and meaning are correct
- Be encouraging but accurate
- Provide specific, actionable feedback
- Focus on: ${grammarFocus}

Return JSON format.`;

    const userPrompt = `TARGET SENTENCE: "${targetSentence}"
STUDENT'S SENTENCE: "${userSentence}"
GRAMMAR FOCUS: ${grammarFocus}
AVAILABLE WORDS: ${words.map(w => `${w.text} (${w.type})`).join(', ')}

Evaluate the student's sentence and return JSON:
{
  "isCorrect": boolean,
  "score": number (0-100),
  "feedback": "string (encouraging and specific)",
  "grammarAnalysis": {
    "wordOrder": number (0-100),
    "grammarAccuracy": number (0-100),
    "meaningPreserved": boolean
  },
  "suggestions": ["suggestion1", "suggestion2"]
}

SCORING GUIDE:
- 90-100: Perfect or nearly perfect
- 70-89: Good attempt with minor issues
- 50-69: Partially correct but with errors
- 0-49: Significant errors

FEEDBACK GUIDELINES:
- If correct: Praise specific aspects (word order, grammar choice, etc.)
- If partially correct: Point out what's right and what needs fixing
- If incorrect: Explain the main error clearly and suggest the fix
- Always be encouraging and constructive`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Using mini for cost efficiency
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
      max_tokens: 500
    });

    const evaluation = JSON.parse(completion.choices[0].message.content || '{}');

    // Ensure response structure
    const response: SentenceBuildingEvaluationResponse = {
      isCorrect: evaluation.isCorrect ?? false,
      score: Math.min(100, Math.max(0, evaluation.score ?? 0)),
      feedback: evaluation.feedback || 'Evaluation completed.',
      grammarAnalysis: evaluation.grammarAnalysis || {
        wordOrder: 50,
        grammarAccuracy: 50,
        meaningPreserved: false
      },
      suggestions: evaluation.suggestions || []
    };

    return NextResponse.json(response);

  } catch (error: any) {
    console.error('Error in sentence building evaluation:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to evaluate sentence',
        details: error.message
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'sentence-building-evaluation',
    version: '1.0.0'
  });
}
