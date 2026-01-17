import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface TextAnswerEvaluationRequest {
  question: string;
  userAnswer: string;
  correctAnswer?: string | string[];
  expectedConcepts?: string[];
  context?: string; // For reading comprehension or additional context
  level?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  questionType?: 'comprehension' | 'grammar' | 'vocabulary' | 'general';
}

export interface TextAnswerEvaluationResponse {
  isCorrect: boolean;
  score: number; // 0-100
  feedback: string;
  detailedAnalysis: {
    semanticMatch: number; // 0-100
    grammaticalAccuracy: number; // 0-100
    vocabularyLevel: number; // 0-100
    completeness: number; // 0-100
  };
  conceptsCovered: string[];
  missingConcepts: string[];
  suggestions: string[];
  grammarErrors: Array<{
    error: string;
    correction: string;
    explanation: string;
  }>;
  vocabularyFeedback: {
    level: string;
    appropriateWords: string[];
    betterAlternatives?: Array<{ word: string; alternative: string; reason: string }>;
  };
  overallAssessment: 'excellent' | 'good' | 'fair' | 'needs-improvement' | 'incorrect';
}

export async function POST(request: NextRequest) {
  try {
    const body: TextAnswerEvaluationRequest = await request.json();
    
    const {
      question,
      userAnswer,
      correctAnswer,
      expectedConcepts = [],
      context = '',
      level = 'B2',
      questionType = 'general'
    } = body;

    // Validate required fields
    if (!question || !userAnswer) {
      return NextResponse.json(
        { error: 'Missing required fields: question and userAnswer' },
        { status: 400 }
      );
    }

    // Check if user answer is too short or empty
    if (userAnswer.trim().length < 3) {
      return NextResponse.json<TextAnswerEvaluationResponse>({
        isCorrect: false,
        score: 0,
        feedback: 'Your answer is too short. Please provide a more complete response.',
        detailedAnalysis: {
          semanticMatch: 0,
          grammaticalAccuracy: 0,
          vocabularyLevel: 0,
          completeness: 0
        },
        conceptsCovered: [],
        missingConcepts: expectedConcepts,
        suggestions: ['Write a more detailed answer that fully addresses the question.'],
        grammarErrors: [],
        vocabularyFeedback: {
          level: 'insufficient',
          appropriateWords: [],
        },
        overallAssessment: 'incorrect'
      });
    }

    // Build the system prompt for GPT-4o
    const systemPrompt = `You are an expert English language evaluator for ${level} level students.
Your task is to evaluate student answers with ZERO false negatives and ZERO false positives.

CRITICAL EVALUATION PRINCIPLES:
1. SEMANTIC EQUIVALENCE: Accept answers that express the same meaning with different words
2. SYNONYM RECOGNITION: Recognize synonyms and paraphrases as correct
3. GRAMMATICAL FLEXIBILITY: Minor grammar mistakes should not mark a semantically correct answer as wrong
4. CONCEPTUAL ACCURACY: Focus on whether the student understood the concept, not exact wording
5. CONTEXT AWARENESS: Consider the question type and expected response level

SCORING GUIDELINES:
- 90-100: Perfect semantic match with excellent grammar
- 75-89: Correct meaning with minor grammar/vocabulary issues
- 60-74: Partially correct - some key concepts present
- 40-59: Incomplete but shows some understanding
- 0-39: Incorrect or off-topic

Return a JSON response with detailed evaluation.`;

    const userPrompt = `QUESTION TYPE: ${questionType}
ENGLISH LEVEL: ${level}

QUESTION:
"${question}"

${correctAnswer ? `EXPECTED ANSWER(S):
${Array.isArray(correctAnswer) ? correctAnswer.map((a, i) => `${i + 1}. ${a}`).join('\n') : correctAnswer}` : ''}

${expectedConcepts.length > 0 ? `KEY CONCEPTS TO IDENTIFY:
${expectedConcepts.map((c, i) => `${i + 1}. ${c}`).join('\n')}` : ''}

${context ? `CONTEXT/PASSAGE:
${context.substring(0, 1000)}...` : ''}

STUDENT'S ANSWER:
"${userAnswer}"

EVALUATE THIS ANSWER AND RETURN A JSON OBJECT WITH:
{
  "isCorrect": boolean, // true if semantically correct regardless of exact wording
  "score": number, // 0-100
  "feedback": "string", // Clear, encouraging feedback in English
  "detailedAnalysis": {
    "semanticMatch": number, // 0-100, how well meaning matches
    "grammaticalAccuracy": number, // 0-100
    "vocabularyLevel": number, // 0-100, appropriate for ${level}
    "completeness": number // 0-100, all aspects addressed
  },
  "conceptsCovered": ["concept1", "concept2"], // which key concepts were mentioned
  "missingConcepts": ["concept3"], // which key concepts are missing
  "suggestions": ["suggestion1", "suggestion2"], // specific improvements
  "grammarErrors": [
    {
      "error": "specific error in answer",
      "correction": "how to correct it",
      "explanation": "why it's wrong"
    }
  ],
  "vocabularyFeedback": {
    "level": "excellent|good|adequate|needs-improvement",
    "appropriateWords": ["word1", "word2"], // good vocabulary used
    "betterAlternatives": [
      {
        "word": "basic word used",
        "alternative": "more sophisticated option",
        "reason": "why it's better"
      }
    ]
  },
  "overallAssessment": "excellent|good|fair|needs-improvement|incorrect"
}

IMPORTANT EVALUATION RULES:
1. If the meaning is correct but expressed differently, mark as correct
2. Give credit for synonyms and paraphrases
3. Minor grammar errors should NOT fail a semantically correct answer
4. Be encouraging and constructive in feedback
5. For ${level} level, expect vocabulary and grammar appropriate to that level
6. If most key concepts are covered, score should be at least 60`;

    // Call GPT-4o for evaluation
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3, // Lower temperature for more consistent evaluation
      max_tokens: 1500
    });

    const evaluationResult = JSON.parse(completion.choices[0].message.content || '{}');

    // Post-processing to ensure evaluation is fair
    // If user got most key concepts but scored low, boost score
    if (expectedConcepts.length > 0) {
      const conceptCoverage = evaluationResult.conceptsCovered?.length || 0;
      const totalConcepts = expectedConcepts.length;
      const coveragePercent = (conceptCoverage / totalConcepts) * 100;

      // If covered >75% of concepts but scored <60, adjust
      if (coveragePercent >= 75 && evaluationResult.score < 60) {
        evaluationResult.score = Math.max(evaluationResult.score, 70);
        evaluationResult.isCorrect = true;
        evaluationResult.feedback += ' Your answer covers most key concepts, which is excellent!';
      }
    }

    // Ensure proper response structure
    const response: TextAnswerEvaluationResponse = {
      isCorrect: evaluationResult.isCorrect ?? false,
      score: Math.min(100, Math.max(0, evaluationResult.score ?? 0)),
      feedback: evaluationResult.feedback || 'Evaluation completed.',
      detailedAnalysis: evaluationResult.detailedAnalysis || {
        semanticMatch: 50,
        grammaticalAccuracy: 50,
        vocabularyLevel: 50,
        completeness: 50
      },
      conceptsCovered: evaluationResult.conceptsCovered || [],
      missingConcepts: evaluationResult.missingConcepts || [],
      suggestions: evaluationResult.suggestions || [],
      grammarErrors: evaluationResult.grammarErrors || [],
      vocabularyFeedback: evaluationResult.vocabularyFeedback || {
        level: 'adequate',
        appropriateWords: []
      },
      overallAssessment: evaluationResult.overallAssessment || 'fair'
    };

    return NextResponse.json(response);

  } catch (error: any) {
    console.error('Error in text answer evaluation:', error);
    
    // Fallback response in case of error
    return NextResponse.json(
      {
        error: 'Failed to evaluate answer',
        details: error.message,
        fallbackMessage: 'Please try again. If the problem persists, contact support.'
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'text-answer-evaluation',
    version: '1.0.0'
  });
}
