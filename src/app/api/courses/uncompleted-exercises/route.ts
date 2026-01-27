import { NextRequest, NextResponse } from 'next/server';
import { getUncompletedExercises } from '@/lib/course-progress';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const sector = searchParams.get('sector') || 'finanzas';
  const level = searchParams.get('level') || 'b1';
  const trimester = searchParams.get('trimester') || 'trimestre1';
  const weekId = searchParams.get('weekId') || 'semana01';

  if (!userId) {
    return NextResponse.json({ error: 'userId is required' }, { status: 400 });
  }

  const result = await getUncompletedExercises(userId, sector, level, trimester, weekId);

  if (!result) {
    return NextResponse.json({ error: 'Course week not found or error occurred' }, { status: 404 });
  }

  return NextResponse.json(result);
}
