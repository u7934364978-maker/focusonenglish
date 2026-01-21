/**
 * Get Current User/Session API Route - Supabase Auth
 * Edge Runtime Compatible
 */

import { NextRequest, NextResponse } from 'next/server';
import { createEdgeClient } from '@/lib/supabase/auth-client';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const supabase = createEdgeClient();

    // Obtener token del header Authorization
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'No autorizado', user: null, session: null },
        { status: 401 }
      );
    }

    const token = authHeader.replace('Bearer ', '');

    // Obtener usuario actual usando el token
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return NextResponse.json(
        { error: 'Sesión inválida', user: null, session: null },
        { status: 401 }
      );
    }

    // Obtener perfil adicional si existe
    let userProfile = null;
    try {
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      userProfile = profile;
    } catch (profileError) {
      console.warn('Error obteniendo perfil:', profileError);
    }

    return NextResponse.json({
      success: true,
      user: {
        ...user,
        profile: userProfile,
      },
    });

  } catch (error: any) {
    console.error('Get user exception:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor', user: null },
      { status: 500 }
    );
  }
}
