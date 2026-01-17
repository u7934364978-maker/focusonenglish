import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface WritingEvaluationRequest {
  prompt: string;
  essay: string;
  writingType: 'essay' | 'article' | 'email' | 'review' | 'report';
  minWords: number;
  maxWords: number;
  level?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  rubric?: {
    content: number;
    organization: number;
    grammar: number;
    vocabulary: number;
  };
}

export interface WritingEvaluationResponse {
  overallScore: number; // 0-100
  isAcceptable: boolean; // Meets minimum standards
  wordCount: number;
  wordCountFeedback: string;
  
  scores: {
    content: number; // 0-100
    organization: number; // 0-100
    grammar: number; // 0-100
    vocabulary: number; // 0-100
    taskAchievement: number; // 0-100
  };
  
  strengths: string[];
  weaknesses: string[];
  
  detailedFeedback: {
    content: string;
    organization: string;
    grammar: string;
    vocabulary: string;
    taskAchievement: string;
  };
  
  grammarErrors: Array<{
    sentence: string;
    error: string;
    correction: string;
    explanation: string;
    category: string; // e.g., "verb tense", "article", "preposition"
  }>;
  
  vocabularyAnalysis: {
    level: string; // "excellent", "good", "adequate", "basic"
    sophisticatedWords: string[];
    repetitiveWords: string[];
    suggestions: string[];
  };
  
  organizationAnalysis: {
    hasIntroduction: boolean;
    hasBody: boolean;
    hasConclusion: boolean;
    paragraphCount: number;
    coherence: string; // "excellent", "good", "adequate", "poor"
    cohesion: string; // "excellent", "good", "adequate", "poor"
  };
  
  recommendations: string[];
  estimatedCEFRLevel: string;
  bandScore?: number; // For IELTS-style scoring
}

export async function POST(request: NextRequest) {
  try {
    const body: WritingEvaluationRequest = await request.json();
    
    const {
      prompt,
      essay,
      writingType,
      minWords,
      maxWords,
      level = 'B2',
      rubric = { content: 30, organization: 25, grammar: 25, vocabulary: 20 }
    } = body;

    // Validate required fields
    if (!prompt || !essay || !writingType) {
      return NextResponse.json(
        { error: 'Missing required fields: prompt, essay, and writingType' },
        { status: 400 }
      );
    }

    // Calculate word count
    const wordCount = essay.split(/\s+/).filter(w => w.length > 0).length;
    
    // Word count validation
    let wordCountFeedback = '';
    let wordCountPenalty = 0;
    
    if (wordCount < minWords) {
      wordCountFeedback = `Your essay is too short (${wordCount} words). Minimum required: ${minWords} words. (-10 points)`;
      wordCountPenalty = 10;
    } else if (wordCount > maxWords) {
      wordCountFeedback = `Your essay exceeds the word limit (${wordCount} words). Maximum allowed: ${maxWords} words. (-5 points)`;
      wordCountPenalty = 5;
    } else {
      wordCountFeedback = `Good! Your essay has ${wordCount} words, which is within the required range (${minWords}-${maxWords}).`;
    }

    // Build comprehensive system prompt
    const systemPrompt = `You are an expert English writing examiner for ${level} level (CEFR).
You specialize in ${writingType} assessment and follow official Cambridge/IELTS marking criteria.

EVALUATION STANDARDS FOR ${level}:
- Content: Addresses all parts of prompt, develops ideas thoroughly
- Organization: Clear structure with introduction, body, conclusion
- Grammar: Range and accuracy appropriate for ${level}
- Vocabulary: Appropriate range, collocations, less common lexis
- Task Achievement: Fulfills all requirements of the prompt

SCORING PHILOSOPHY:
- ZERO FALSE NEGATIVES: If writing shows ${level} competence, score accordingly
- ZERO FALSE POSITIVES: Be accurate but not overly harsh
- CONSTRUCTIVE: Focus on improvement, not just errors
- FAIR: Credit good attempts even if not perfect

Return detailed JSON evaluation following the rubric weights:
Content: ${rubric.content}%
Organization: ${rubric.organization}%
Grammar: ${rubric.grammar}%
Vocabulary: ${rubric.vocabulary}%`;

    const userPrompt = `WRITING TYPE: ${writingType.toUpperCase()}
LEVEL: ${level}
WORD REQUIREMENT: ${minWords}-${maxWords} words
ACTUAL WORD COUNT: ${wordCount} words

PROMPT:
"${prompt}"

STUDENT'S ${writingType.toUpperCase()}:
${essay}

PROVIDE COMPREHENSIVE EVALUATION IN JSON FORMAT:
{
  "overallScore": number, // 0-100, considering word count penalty if applicable
  "isAcceptable": boolean, // true if meets ${level} standards
  
  "scores": {
    "content": number, // 0-100
    "organization": number, // 0-100
    "grammar": number, // 0-100
    "vocabulary": number, // 0-100
    "taskAchievement": number // 0-100
  },
  
  "strengths": ["strength1", "strength2", "strength3"],
  "weaknesses": ["weakness1", "weakness2"],
  
  "detailedFeedback": {
    "content": "Detailed feedback on ideas, development, relevance",
    "organization": "Feedback on structure, paragraphing, coherence",
    "grammar": "Overall grammar assessment",
    "vocabulary": "Range, accuracy, appropriacy of vocabulary",
    "taskAchievement": "How well all parts of prompt were addressed"
  },
  
  "grammarErrors": [
    {
      "sentence": "exact sentence with error",
      "error": "specific error identified",
      "correction": "corrected version",
      "explanation": "why it's wrong and rule",
      "category": "verb tense|article|preposition|word order|etc"
    }
  ],
  
  "vocabularyAnalysis": {
    "level": "excellent|good|adequate|basic",
    "sophisticatedWords": ["advanced word 1", "advanced word 2"],
    "repetitiveWords": ["word repeated too much"],
    "suggestions": ["Use more varied vocabulary", "Consider synonyms for X"]
  },
  
  "organizationAnalysis": {
    "hasIntroduction": boolean,
    "hasBody": boolean,
    "hasConclusion": boolean,
    "paragraphCount": number,
    "coherence": "excellent|good|adequate|poor",
    "cohesion": "excellent|good|adequate|poor"
  },
  
  "recommendations": [
    "Specific actionable advice 1",
    "Specific actionable advice 2",
    "Specific actionable advice 3"
  ],
  
  "estimatedCEFRLevel": "A1|A2|B1|B2|C1|C2",
  "bandScore": number // IELTS-style 0-9 score
}

IMPORTANT:
1. List MAJOR grammar errors (max 10 most important)
2. Be encouraging but honest
3. Focus on patterns, not every single mistake
4. Recognize good attempts and partial credit
5. Consider ${level} standards - don't expect native-level perfection`;

    // Call GPT-4o for evaluation
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
      max_tokens: 3000 // More tokens for detailed writing feedback
    });

    const evaluationResult = JSON.parse(completion.choices[0].message.content || '{}');

    // Apply word count penalty
    if (wordCountPenalty > 0) {
      evaluationResult.overallScore = Math.max(0, (evaluationResult.overallScore || 0) - wordCountPenalty);
    }

    // Ensure response structure
    const response: WritingEvaluationResponse = {
      overallScore: Math.min(100, Math.max(0, evaluationResult.overallScore ?? 0)),
      isAcceptable: evaluationResult.isAcceptable ?? false,
      wordCount,
      wordCountFeedback,
      
      scores: evaluationResult.scores || {
        content: 50,
        organization: 50,
        grammar: 50,
        vocabulary: 50,
        taskAchievement: 50
      },
      
      strengths: evaluationResult.strengths || [],
      weaknesses: evaluationResult.weaknesses || [],
      
      detailedFeedback: evaluationResult.detailedFeedback || {
        content: 'No feedback available',
        organization: 'No feedback available',
        grammar: 'No feedback available',
        vocabulary: 'No feedback available',
        taskAchievement: 'No feedback available'
      },
      
      grammarErrors: evaluationResult.grammarErrors || [],
      
      vocabularyAnalysis: evaluationResult.vocabularyAnalysis || {
        level: 'adequate',
        sophisticatedWords: [],
        repetitiveWords: [],
        suggestions: []
      },
      
      organizationAnalysis: evaluationResult.organizationAnalysis || {
        hasIntroduction: false,
        hasBody: true,
        hasConclusion: false,
        paragraphCount: 1,
        coherence: 'adequate',
        cohesion: 'adequate'
      },
      
      recommendations: evaluationResult.recommendations || [],
      estimatedCEFRLevel: evaluationResult.estimatedCEFRLevel || level,
      bandScore: evaluationResult.bandScore
    };

    return NextResponse.json(response);

  } catch (error: any) {
    console.error('Error in writing evaluation:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to evaluate writing',
        details: error.message
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'writing-evaluation',
    version: '1.0.0'
  });
}
