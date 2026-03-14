import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    let callbackUrl = (formData.get('callbackUrl') as string) || '/curso-a1/outline';
    if (callbackUrl.startsWith('http')) {
      try {
        const u = new URL(callbackUrl);
        callbackUrl = u.pathname + u.search;
      } catch {
        callbackUrl = '/curso-a1/outline';
      }
    }

    if (!email || !password) {
      return NextResponse.redirect(
        new URL(`/cuenta/login?error=missing&next=${encodeURIComponent(callbackUrl)}`, request.url)
      );
    }

    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return NextResponse.redirect(
        new URL(`/cuenta/login?error=auth&next=${encodeURIComponent(callbackUrl)}`, request.url)
      );
    }

    if (!data.user) {
      return NextResponse.redirect(
        new URL(`/cuenta/login?error=auth&next=${encodeURIComponent(callbackUrl)}`, request.url)
      );
    }

    // Asegurar perfil existe
    try {
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('subscription_status')
        .eq('user_id', data.user.id)
        .single();

      if (!profile) {
        await supabase.from('user_profiles').insert({
          user_id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.full_name || data.user.user_metadata?.name || '',
          subscription_status: 'inactive',
          subscription_plan: 'free',
        });
      }
    } catch {
      // Continuar
    }

    const url = new URL(callbackUrl, request.url);
    return NextResponse.redirect(url);
  } catch (err) {
    console.error('[auth/login]', err);
    return NextResponse.redirect(
      new URL('/cuenta/login?error=server', request.url)
    );
  }
}
