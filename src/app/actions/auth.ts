'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export type LoginResult = { success: true; redirectTo: string } | { success: false; error: string };

export async function signInAction(
  email: string,
  password: string,
  callbackUrl: string = '/curso-a1/outline'
): Promise<LoginResult> {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { success: false, error: error.message };
  }

  if (!data.user) {
    return { success: false, error: 'Error al iniciar sesión' };
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
    // Continuar aunque falle el perfil
  }

  redirect(callbackUrl);
}
