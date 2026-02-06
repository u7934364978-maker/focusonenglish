import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OPENAI_API_KEY is not configured' }, { status: 500 });
  }

  try {
    const { text, targetLanguage = 'Spanish' } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { 
          role: 'system', 
          content: `You are a helpful translator. Translate the given English text to ${targetLanguage}. 
          Return ONLY the translated text without any explanations or additional formatting.` 
        },
        { role: 'user', content: text }
      ],
      temperature: 0.3,
    });

    const translatedText = response.choices[0].message.content?.trim();

    return NextResponse.json({
      success: true,
      translation: translatedText
    });

  } catch (error: unknown) {
    console.error('Translation Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
