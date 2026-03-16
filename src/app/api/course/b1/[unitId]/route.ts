import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { B1_COURSE } from '@/lib/course/b1';
import { FINAL_TEST_B1_EXERCISES, FINAL_TEST_B1_TITLE } from '@/lib/course/b1/final-test-b1';

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
      const exercises = Array.isArray(FINAL_TEST_B1_EXERCISES) ? FINAL_TEST_B1_EXERCISES : [];
      const title = FINAL_TEST_B1_TITLE ?? 'Test final B1';
      return NextResponse.json({ exercises, title });
    }

    const unitNumber = unitId.replace('unit-', '');
    const unitNum = parseInt(unitNumber, 10);
    if (isNaN(unitNum) || unitNum < 1 || unitNum > 60) {
      return NextResponse.json({ error: 'Unidad no encontrada' }, { status: 404 });
    }

    const unit = B1_COURSE.units.find((u) => u.id === unitNum);
    if (!unit) {
      return NextResponse.json({ error: 'Unidad no encontrada' }, { status: 404 });
    }

    const exercises = Array.isArray(unit.exercises) ? unit.exercises : [];
    const title = unit.title ?? `Unidad ${unitNum}`;
    return NextResponse.json({ exercises, title });
  } catch (err) {
    console.error('[API course/b1]', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Error al cargar la unidad' },
      { status: 500 }
    );
  }
}
