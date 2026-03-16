import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getB1UnitData, getB1FinalTestData } from '@/lib/course/b1/loader';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ unitId: string }> }
) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const { unitId } = await params;

    if (unitId === 'test-final') {
      const { exercises, title } = await getB1FinalTestData();
      return NextResponse.json({ exercises, title });
    }

    const unitNumber = unitId.replace('unit-', '');
    const unitNum = parseInt(unitNumber, 10);
    if (isNaN(unitNum) || unitNum < 1 || unitNum > 60) {
      return NextResponse.json({ error: 'Unidad no encontrada' }, { status: 404 });
    }

    const { exercises, title } = await getB1UnitData(unitNumber);
    return NextResponse.json({ exercises, title });
  } catch (err) {
    console.error('[API course/b1]', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Error al cargar la unidad' },
      { status: 500 }
    );
  }
}
