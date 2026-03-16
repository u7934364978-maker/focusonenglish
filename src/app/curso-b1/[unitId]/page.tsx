import { getB1UnitData, getB1FinalTestData } from '@/lib/course/b1/loader';
import B1UnitClient from './B1UnitClient';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ unitId: string }>;
  searchParams: Promise<{ index?: string }>;
}

export default async function B1UnitPage({ params, searchParams }: Props) {
  const { unitId } = await params;
  const { index } = await searchParams;
  const initialIndex = index ? parseInt(index, 10) : 0;

  if (unitId === 'test-final') {
    try {
      const { exercises, title } = await getB1FinalTestData();
      return (
        <B1UnitClient
          exercises={exercises}
          unitTitle={title}
          initialIndex={Number.isFinite(initialIndex) ? initialIndex : 0}
        />
      );
    } catch (err) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-800 mb-2">Error de Carga</h2>
            <p className="text-slate-600 mb-6">No se pudo cargar el test final.</p>
            <Link
              href="/curso-b1"
              className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-all"
            >
              Volver al Curso B1
            </Link>
          </div>
        </div>
      );
    }
  }

  const unitNumber = unitId.replace('unit-', '');
  const unitNum = parseInt(unitNumber, 10);
  if (isNaN(unitNum) || unitNum < 1 || unitNum > 60) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-2">Unidad no encontrada</h2>
          <p className="text-slate-600 mb-6">La unidad {unitId} no existe.</p>
          <Link
            href="/curso-b1"
            className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-all"
          >
            Volver al Curso B1
          </Link>
        </div>
      </div>
    );
  }

  try {
    const { exercises, title } = await getB1UnitData(unitNumber);
    return (
      <B1UnitClient
        exercises={exercises}
        unitTitle={title}
        initialIndex={Number.isFinite(initialIndex) && initialIndex >= 0 ? initialIndex : 0}
      />
    );
  } catch (err) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl text-center">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-800 mb-2">Error de Carga</h2>
          <p className="text-slate-600 mb-6">
            Error al cargar la unidad: {err instanceof Error ? err.message : 'Error desconocido'}
          </p>
          <Link
            href="/curso-b1"
            className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-all"
          >
            Volver al Curso B1
          </Link>
        </div>
      </div>
    );
  }
}
