import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

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

    const cookieStore = await cookies();
    const cookiesToSet: { name: string; value: string; options?: Record<string, unknown> }[] = [];

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookies: { name: string; value: string; options?: Record<string, unknown> }[]) {
            cookiesToSet.push(...cookies);
            cookies.forEach(({ name, value, options }) => {
              try {
                cookieStore.set(name, value, options ?? {});
              } catch {
                // Ignorar en Server Components
              }
            });
          },
        },
      }
    );

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
    const response = NextResponse.redirect(url);
    // Asegurar que las cookies de sesión se envían en el redirect (fix: contenido no cargaba)
    cookiesToSet.forEach(({ name, value, options }) => {
      response.cookies.set(name, value, options ?? {});
    });
    return response;
  } catch (err) {
    console.error('[auth/login]', err);
    return NextResponse.redirect(
      new URL('/cuenta/login?error=server', request.url)
    );
  }
}
