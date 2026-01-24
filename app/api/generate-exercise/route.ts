import { NextRequest, NextResponse } from 'next/server';
import { generateExerciseV2 } from '@/lib/ai/generator-v2';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Verificación de API KEY
    if (!process.env.OPENAI_API_KEY) {
      console.error('❌ Error: OPENAI_API_KEY no encontrada en el entorno');
      return NextResponse.json({ 
        success: false, 
        error: "Configuración incompleta: Falta la API Key en el servidor." 
      }, { status: 500 });
    }

    console.log(`🤖 Generando ejercicio V2: ${body.exerciseType} - Nivel ${body.level}`);
    
    const exercise = await generateExerciseV2(body);

    return NextResponse.json({
      success: true,
      exercises: [exercise]
    });

  } catch (error: any) {
    console.error('❌ API V2 Error:', error);
    
    return NextResponse.json({ 
      success: false, 
      error: error.message || "Error interno al generar el ejercicio"
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    message: "Generador de IA V2 activo y listo." 
  });
}
