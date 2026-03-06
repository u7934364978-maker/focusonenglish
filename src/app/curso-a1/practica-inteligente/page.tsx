import { createClient } from '@/lib/supabase/server';
import { GlobalContentProvider } from '@/lib/course-engine/global-content-provider';
import A1SmartPracticeClient from './SmartPracticeClient';

export const dynamic = 'force-dynamic';

export default async function A1SmartPracticePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FEF9F5] px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center space-y-4">
          <p className="text-4xl mb-2">🔒</p>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            Inicia sesión para practicar
          </h1>
          <p className="text-sm text-slate-500">
            La práctica inteligente A1 guarda tu progreso y adapta los ejercicios a tu nivel.
          </p>
        </div>
      </div>
    );
  }

  // Aseguramos que el contenido global esté cargado para el motor adaptativo
  await GlobalContentProvider.getInstance().loadAllContent();

  return <A1SmartPracticeClient />;
}

