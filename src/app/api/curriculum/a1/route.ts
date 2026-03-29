import { NextResponse } from 'next/server';
import { A1_CURRICULUM_VERSION, getA1ContentCatalog } from '@/lib/curriculum';

export const dynamic = 'force-dynamic';

/**
 * GET /api/curriculum/a1
 * Devuelve el catálogo A1 versionado (unidades, objetivos, patrones de tag).
 * Solo lectura; útil para panel / depuración. La fuente de verdad sigue siendo el código en `src/lib/curriculum/`.
 */
export async function GET() {
  const catalog = getA1ContentCatalog();
  return NextResponse.json({
    ...catalog,
    meta: {
      curriculumVersion: A1_CURRICULUM_VERSION,
      source: 'src/lib/curriculum',
      note: 'Un solo currículo A1 en código; esta API solo lo expone como JSON.',
    },
  });
}
