import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nprqtjljoekoirlrjxlh.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wcnF0amxqb2Vrb2lybHJqeGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NTMzNzcsImV4cCI6MjA4NDIyOTM3N30.GdTvAPa08RiadT-yxbGHOGPDz1baypAOeDDezqyFJNA';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const redirectTo = 'https://www.focus-on-english.com/cuenta/resetear';

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });

    if (error) {
      console.error('Supabase resetPasswordForEmail error:', error.message);
      return NextResponse.json(
        { error: 'No se pudo procesar la solicitud. Inténtalo de nuevo.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Si el email existe, recibirás las instrucciones en breve.' },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('forgot-password route error:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
