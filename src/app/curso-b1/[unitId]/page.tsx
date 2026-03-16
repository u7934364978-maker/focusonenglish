import B1UnitClient from './B1UnitClient';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ unitId: string }>;
}

export default async function B1UnitPage({ params }: Props) {
  const { unitId } = await params;
  const unitNumber = unitId.replace('unit-', '');
  const unitNum = parseInt(unitNumber, 10);
  const isValidUnit =
    unitId === 'test-final' || (!isNaN(unitNum) && unitNum >= 1 && unitNum <= 60);

  if (!isValidUnit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-2">Unidad no encontrada</h2>
          <p className="text-slate-600 mb-6">La unidad {unitId} no existe.</p>
          <a
            href="/curso-b1"
            className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-all"
          >
            Volver al Curso B1
          </a>
        </div>
      </div>
    );
  }

  return <B1UnitClient />;
}
