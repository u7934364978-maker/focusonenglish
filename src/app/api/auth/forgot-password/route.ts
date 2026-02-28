import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

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

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.focus-on-english.com'}/cuenta/resetear`;

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
