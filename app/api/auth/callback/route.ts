/**
 * Auth Callback Handler - Supabase Auth
 * Maneja callbacks de OAuth y email verification
 */

import { NextRequest, NextResponse } from 'next/server';
import { createEdgeClient } from '@/lib/supabase/auth-client';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');

    // Si hay error en el callback
    if (error) {
      console.error('Auth callback error:', error, errorDescription);
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_SITE_URL}/cuenta/login?error=${encodeURIComponent(errorDescription || error)}`
      );
    }

    // Si no hay código, redirigir a login
    if (!code) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/cuenta/login`);
    }

    const supabase = createEdgeClient();

    // Intercambiar código por sesión
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

    if (exchangeError) {
      console.error('Code exchange error:', exchangeError);
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_SITE_URL}/cuenta/login?error=${encodeURIComponent(exchangeError.message)}`
      );
    }

    // Redirigir al dashboard después de login exitoso
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`);

  } catch (error: any) {
    console.error('Auth callback exception:', error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}/cuenta/login?error=${encodeURIComponent('Error procesando callback')}`
    );
  }
}
