import { NextResponse } from 'next/server';

export async function POST() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'OPENAI_API_KEY is not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://api.openai.com/v1/realtime/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-realtime-preview-2024-12-17',
        voice: 'shimmer', // Default, will be overridden by tutor settings
        instructions: 'You are a helpful English tutor.',
        modalities: ['audio', 'text'],
        input_audio_format: 'pcm16',
        output_audio_format: 'pcm16',
        input_audio_transcription: {
          model: 'whisper-1'
        },
        turn_detection: {
          type: 'server_vad',
          threshold: 0.5,
          prefix_padding_ms: 300,
          silence_duration_ms: 500
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI Realtime Session Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create OpenAI session', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Return the ephemeral token data to the client
    return NextResponse.json(data);

  } catch (error: unknown) {
    console.error('OpenAI Session API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
