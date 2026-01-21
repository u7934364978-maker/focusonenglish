/**
 * Signup/Register API Route - Supabase Auth
 * Edge Runtime Compatible
 */

import { NextRequest, NextResponse } from 'next/server';
import { createEdgeClient } from '@/lib/supabase/auth-client';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name, metadata } = await request.json();

    // Validación básica
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Validar fortaleza de contraseña
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 8 caracteres' },
        { status: 400 }
      );
    }

    // Crear cliente de Supabase
    const supabase = createEdgeClient();

    // Crear usuario
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || null,
          ...metadata,
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });

    if (error) {
      console.error('Signup error:', error);
      
      // Manejo de errores específicos
      if (error.message.includes('already registered')) {
        return NextResponse.json(
          { error: 'Este email ya está registrado' },
          { status: 409 }
        );
      }
      
      return NextResponse.json(
        { error: error.message || 'Error al crear cuenta' },
        { status: 400 }
      );
    }

    // Registro exitoso
    return NextResponse.json({
      success: true,
      user: data.user,
      session: data.session,
      message: 'Cuenta creada exitosamente. Por favor, verifica tu email.',
    });

  } catch (error: any) {
    console.error('Signup exception:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
