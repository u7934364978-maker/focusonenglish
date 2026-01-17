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
        // If table doesn't exist or other DB error, log but don't fail
        console.error('Supabase error:', error);
        
        // Return success anyway for better UX
        return NextResponse.json({ 
          success: true,
          message: '¡Gracias! Te avisaremos cuando lancemos los cursos.',
          fallback: true
        });
      }

      return NextResponse.json({ 
        success: true,
        message: '¡Gracias! Te avisaremos cuando lancemos los cursos.',
        data 
      });
    } else {
      // No Supabase configured, just log to console
      console.log('Newsletter subscription (no DB):', email);
      
      return NextResponse.json({ 
        success: true,
        message: '¡Gracias! Te avisaremos cuando lancemos los cursos.',
        fallback: true
      });
    }

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
