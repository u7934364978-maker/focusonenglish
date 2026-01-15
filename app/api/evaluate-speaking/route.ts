import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import fs from 'fs';
import yaml from 'js-yaml';
import os from 'os';
import path from 'path';

// Cargar configuración desde ~/.genspark_llm.yaml
let config: any = null;
const configPath = path.join(os.homedir(), '.genspark_llm.yaml');

if (fs.existsSync(configPath)) {
  const fileContents = fs.readFileSync(configPath, 'utf8');
  config = yaml.load(fileContents);
}

// Inicializar cliente OpenAI
const client = new OpenAI({
  apiKey: config?.openai?.api_key || process.env.OPENAI_API_KEY,
  baseURL: config?.openai?.base_url || process.env.OPENAI_BASE_URL,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, transcript, targetText } = body;

    if (!transcript || !prompt) {
      return NextResponse.json(
        { error: 'Missing required fields: prompt and transcript' },
        { status: 400 }
      );
    }

    // Construir el prompt para GPT
    const systemPrompt = `You are an expert English language evaluator for B2 level (CEFR) speaking exercises. Your job is to analyze if a student's response correctly addresses the exercise prompt.

Evaluate the response based on these criteria:
1. **Topic Relevance (0-100)**: Does the response address the specific topic asked in the prompt?
2. **Content Quality (0-100)**: Is the content appropriate, detailed, and well-developed?
3. **Coherence (0-100)**: Is the response well-organized and easy to follow?
4. **Task Completion (0-100)**: Did the student complete all parts of the task?

Provide specific, actionable feedback focusing on:
- What the student did well
- What the student missed or misunderstood
- Specific improvements needed
- Whether they answered the correct topic or went off-topic

Be constructive but honest. If the response is completely off-topic, clearly state that.`;

    const userPrompt = `Exercise Prompt: "${prompt}"

${targetText ? `Target Text (for pronunciation exercises): "${targetText}"` : ''}

Student's Response: "${transcript}"

Please evaluate this response and provide:
1. A relevance score (0-100) - how well does it address the prompt?
2. A content quality score (0-100) - is the content appropriate and detailed?
3. A coherence score (0-100) - is it well-organized?
4. A task completion score (0-100) - did they complete the task?
5. Key concepts expected (list of 5-10 keywords/phrases that should be mentioned)
6. Key concepts found (which of those were actually mentioned)
7. Missing concepts (what wasn't mentioned but should have been)
8. Off-topic content (what did they mention that's not relevant)
9. Detailed feedback (2-3 paragraphs explaining the evaluation)
10. Specific suggestions for improvement (3-5 actionable tips)

Format your response as a JSON object with these exact keys:
{
  "relevanceScore": number,
  "contentQualityScore": number,
  "coherenceScore": number,
  "taskCompletionScore": number,
  "expectedConcepts": string[],
  "foundConcepts": string[],
  "missingConcepts": string[],
  "offTopicContent": string[],
  "detailedFeedback": string,
  "suggestions": string[],
  "isOnTopic": boolean,
  "overallAssessment": "excellent" | "good" | "fair" | "poor" | "off-topic"
}`;

    // Llamar a GPT para evaluación real
    const completion = await client.chat.completions.create({
      model: 'gpt-5',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.3, // Más determinístico para evaluación consistente
      response_format: { type: "json_object" }
    });

    const evaluationText = completion.choices[0].message.content;
    
    if (!evaluationText) {
      throw new Error('No response from AI');
    }

    // Parsear la respuesta JSON
    const evaluation = JSON.parse(evaluationText);

    // Validar que tenga todos los campos necesarios
    if (!evaluation.relevanceScore || !evaluation.detailedFeedback) {
      throw new Error('Invalid AI response format');
    }

    return NextResponse.json({
      success: true,
      evaluation
    });

  } catch (error: any) {
    console.error('Error in AI evaluation:', error);
    return NextResponse.json(
      { 
        error: 'Failed to evaluate response',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
