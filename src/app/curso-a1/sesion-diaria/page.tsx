import { Suspense } from 'react';
import { createClient } from '@/lib/supabase/server';
import { GlobalContentProvider } from '@/lib/course-engine/global-content-provider';
import { a1SesionDelDiaEnOracion } from '@/lib/copy/a1-sesion-del-dia';
import DailySessionClient from './DailySessionClient';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function SesionDiariaPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FEF9F5] px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center space-y-4">
          <p className="text-4xl mb-2">🔒</p>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">Inicia sesión</h1>
          <p className="text-sm text-slate-500">
            La {a1SesionDelDiaEnOracion()} guarda tu racha y sincroniza repasos con tu cuenta.
          </p>
          <Link
            href="/cuenta/login?next=/curso-a1/sesion-diaria"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-emerald-700 text-white text-sm font-bold hover:bg-emerald-800 w-full"
          >
            Entrar
          </Link>
        </div>
      </div>
    );
  }

  await GlobalContentProvider.getInstance().loadAllContent();

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#0c4a3e] px-4">
          <p className="text-sm font-bold text-emerald-100/80">
            Cargando {a1SesionDelDiaEnOracion()}…
          </p>
        </div>
      }
    >
      <DailySessionClient />
    </Suspense>
  );
}
