import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Navigation } from '@/components/sections/Navigation';

export const dynamic = 'force-dynamic';

type CourseSummary = {
  courseId: string;
  startedUnits: number;
  completedUnits: number;
  totalExercisesDone: number;
  totalExercisesPlanned: number;
};

const COURSE_LABELS: Record<string, { label: string; href: string }> = {
  'ingles-a1': { label: 'Ingles A1', href: '/curso-a1/outline' },
  'ingles-a2': { label: 'Ingles A2', href: '/curso-a2/outline' },
  'ingles-b1': { label: 'Ingles B1', href: '/curso-b1/outline' },
  'ingles-b2': { label: 'Ingles B2', href: '/curso-b2/outline' },
};

function normalizeStatus(status: string | null | undefined): string {
  if (!status) return 'not_started';
  return status;
}

export default async function MiPanelPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/cuenta/login?next=/mi-panel');
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle();

  const { data: lessonProgress } = await supabase
    .from('user_lesson_progress')
    .select('course_id, unit_id, status, exercises_completed, exercises_total')
    .eq('user_id', user.id);

  const now = new Date().toISOString();
  const { data: srsDueCards } = await supabase
    .from('a1_srs_cards')
    .select('id')
    .eq('user_id', user.id)
    .lte('next_review_at', now);
  const srsA1DueCount = srsDueCards?.length ?? 0;

  const byCourse = new Map<string, CourseSummary>();
  for (const row of lessonProgress ?? []) {
    const courseId = String(row.course_id ?? '').trim();
    if (!courseId) continue;

    if (!byCourse.has(courseId)) {
      byCourse.set(courseId, {
        courseId,
        startedUnits: 0,
        completedUnits: 0,
        totalExercisesDone: 0,
        totalExercisesPlanned: 0,
      });
    }

    const current = byCourse.get(courseId)!;
    const status = normalizeStatus(row.status);
    const done = Number(row.exercises_completed ?? 0);
    const planned = Number(row.exercises_total ?? 0);

    if (status === 'in_progress' || status === 'completed' || done > 0) {
      current.startedUnits += 1;
    }
    if (status === 'completed' || (planned > 0 && done >= planned)) {
      current.completedUnits += 1;
    }
    current.totalExercisesDone += done;
    current.totalExercisesPlanned += planned;
  }

  const summaries = Array.from(byCourse.values()).sort((a, b) => a.courseId.localeCompare(b.courseId));

  const studentName =
    (profile?.name as string | undefined) ||
    (user.user_metadata?.full_name as string | undefined) ||
    (user.email ?? 'Alumno');
  const subscriptionStatus = (profile?.subscription_status as string | undefined) ?? 'inactive';
  const subscriptionPlan = (profile?.subscription_plan as string | undefined) ?? 'free';
  const languageLevel = (profile?.language_level as string | undefined) ?? 'A1';

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <section className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-sm text-slate-500">Panel del alumno</p>
            <h1 className="text-3xl font-black text-slate-900 mt-1">Hola, {studentName}</h1>
            <p className="text-slate-600 mt-2">
              Aqui tienes tu centro de control: cursos, progreso, suscripcion, pagos y soporte.
            </p>
          </section>

          {srsA1DueCount > 0 && (
            <section className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black">
                    {srsA1DueCount}
                  </span>
                  <span className="text-lg font-black text-blue-900">Repasos pendientes A1</span>
                </div>
                <p className="text-sm text-blue-700 mt-1">
                  Tienes {srsA1DueCount} {srsA1DueCount === 1 ? 'ejercicio que repasa' : 'ejercicios que repasan'} hoy segun tu sistema de repeticion espaciada.
                </p>
              </div>
              <Link
                href="/curso-a1/practica-inteligente?mode=srs"
                className="flex-shrink-0 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition"
              >
                Repasar ahora
              </Link>
            </section>
          )}

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <Link href="/curso-a1/outline" className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition">
              <div className="text-lg font-black text-slate-900">Mis cursos</div>
              <div className="text-sm text-slate-600 mt-1">Entrar al contenido y continuar clases.</div>
            </Link>
            <Link href="/support/ticket" className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition">
              <div className="text-lg font-black text-slate-900">Soporte y tickets</div>
              <div className="text-sm text-slate-600 mt-1">Enviar dudas y ver estado de tus consultas.</div>
            </Link>
            <Link href="/planes" className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition">
              <div className="text-lg font-black text-slate-900">Suscripcion y pago</div>
              <div className="text-sm text-slate-600 mt-1">Cambiar plan o revisar tu suscripcion actual.</div>
            </Link>
            <Link href="/test-nivel" className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition">
              <div className="text-lg font-black text-slate-900">Test de nivel</div>
              <div className="text-sm text-slate-600 mt-1">Repetir test para ajustar tu ruta de aprendizaje.</div>
            </Link>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl p-5">
              <h2 className="text-xl font-black text-slate-900">Mi suscripcion</h2>
              <div className="mt-3 space-y-2 text-sm">
                <p className="text-slate-600">
                  Estado: <span className="font-bold text-slate-900">{subscriptionStatus}</span>
                </p>
                <p className="text-slate-600">
                  Plan: <span className="font-bold text-slate-900">{subscriptionPlan}</span>
                </p>
                <p className="text-slate-600">
                  Nivel: <span className="font-bold text-slate-900">{languageLevel}</span>
                </p>
              </div>
              <Link
                href="/planes"
                className="inline-flex mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition"
              >
                Gestionar plan
              </Link>
              <Link
                href="/api/stripe/customer-portal"
                className="inline-flex mt-2 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition"
              >
                Gestionar en Stripe
              </Link>
            </div>

            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5">
              <h2 className="text-xl font-black text-slate-900">Mi progreso academico</h2>
              {summaries.length === 0 ? (
                <p className="text-slate-600 mt-3 text-sm">
                  Aun no hay progreso registrado. Empieza por tu curso para ver avance por unidades.
                </p>
              ) : (
                <div className="mt-4 space-y-3">
                  {summaries.map((s) => {
                    const meta = COURSE_LABELS[s.courseId] ?? {
                      label: s.courseId,
                      href: '/curso-a1/outline',
                    };
                    return (
                      <div key={s.courseId} className="border border-slate-200 rounded-xl p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-bold text-slate-900">{meta.label}</p>
                            <p className="text-xs text-slate-500 mt-1">
                              Unidades iniciadas: {s.startedUnits} · completadas: {s.completedUnits}
                            </p>
                          </div>
                          <Link href={meta.href} className="text-sm font-semibold text-coral-700 hover:text-coral-800">
                            Ir al curso
                          </Link>
                        </div>
                        <div className="mt-2 text-xs text-slate-500">
                          Ejercicios: {s.totalExercisesDone}/{s.totalExercisesPlanned || 0}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
