import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Initialize Supabase only if credentials are available
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      // Check if table exists and insert
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          { 
            email: email.toLowerCase().trim(),
            subscribed_at: new Date().toISOString(),
            source: 'home_banner'
          }
        ])
        .select();

      if (error) {
        // Log the error with details
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        
        // Return error to user so we can debug
        return NextResponse.json({ 
          success: false,
          error: `Error al guardar: ${error.message}`,
          details: error.details || 'No additional details',
          hint: error.hint || 'No hint available'
        }, { status: 500 });
      }

      return NextResponse.json({ 
        success: true,
        message: '¡Gracias! Te avisaremos cuando lancemos los cursos.',
        data 
      });
    } else {
      // No Supabase configured, return error
      console.error('Supabase not configured - missing env variables');
      
      return NextResponse.json({ 
        success: false,
        error: 'Configuración de base de datos incompleta',
        details: `URL: ${supabaseUrl ? 'configured' : 'missing'}, Key: ${supabaseServiceKey ? 'configured' : 'missing'}`
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
