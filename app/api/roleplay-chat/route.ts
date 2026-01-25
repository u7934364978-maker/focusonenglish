import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const { scenario, history, message, level } = await req.json();

    const systemPrompt = `You are an English teacher acting as an AI character in a roleplay scenario.
Character: ${scenario.aiCharacter.name} (${scenario.aiCharacter.role})
Personality: ${scenario.aiCharacter.personality}
Context: ${scenario.context}
Student Level: ${level}

STUDENT GOAL: ${scenario.goal}
TASKS TO COVER:
${scenario.tasks.map((t: string) => `- ${t}`).join('\n')}

GUIDELINES:
1. Stay in character at all times.
2. Adapt your language complexity to the student's level (${level}).
3. Be helpful but realistic for the scenario.
4. If the student makes a significant mistake, gently correct them while staying in character, OR provide a brief correction at the end of your message.
5. If you believe the student has successfully achieved the goal and covered the tasks, include the exact phrase "GOAL_ACHIEVED" at the end of your response.

Return a JSON object with:
{
  "reply": "Your message in character",
  "isGoalAchieved": boolean
}`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...history.map((h: any) => ({ role: h.role === 'ai' ? 'assistant' : 'user', content: h.content })),
      { role: "user", content: message }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages as any,
      response_format: { type: "json_object" },
    });

    const content = JSON.parse(response.choices[0].message.content || '{}');
    
    // Check for goal achieved marker in text if not explicitly set in JSON
    const isGoalAchieved = content.isGoalAchieved || content.reply.includes("GOAL_ACHIEVED");
    const cleanReply = content.reply.replace("GOAL_ACHIEVED", "").trim();

    return NextResponse.json({
      success: true,
      reply: cleanReply,
      isGoalAchieved: isGoalAchieved
    });

  } catch (error: any) {
    console.error('Roleplay Chat Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
