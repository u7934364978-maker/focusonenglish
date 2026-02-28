import { Suspense } from 'react';
import { A1CourseSelector } from '@/components/course/preview/A1CourseSelector';
import { A1ProgressSidebar } from '@/components/course/A1ProgressSidebar';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import { BookOpen, Clock, Award, Zap, CheckCircle, Target } from 'lucide-react';
import { WelcomeWrapper } from './WelcomeWrapper';

export const dynamic = 'force-dynamic';

async function A1PreviewContent() {
  const courseMetadata = await premiumCourseServerService.getA1UnitsWithMetadata();
  const totalExercises = courseMetadata.units.reduce((sum, unit) => sum + unit.exerciseCount, 0);
  const totalHours = Math.round(courseMetadata.totalDuration / 60);

  return (
    <div className="min-h-screen bg-[#FEF9F5]">
      <WelcomeWrapper totalUnits={courseMetadata.totalUnits} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#FF6B6B] via-[#FF8E53] to-[#FFA06B]">
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        {/* Radial light bloom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(255,255,255,0.18),transparent_65%)]" />

        {/* Floating emoji decorations */}
        <span className="absolute top-8 right-12 text-5xl opacity-20 select-none rotate-12 hidden md:block" aria-hidden>🇬🇧</span>
        <span className="absolute top-20 right-[20%] text-3xl opacity-15 select-none -rotate-6 hidden lg:block" aria-hidden>💬</span>
        <span className="absolute bottom-16 right-8 text-4xl opacity-15 select-none rotate-3 hidden md:block" aria-hidden>🎯</span>
        <span className="absolute top-12 left-[55%] text-2xl opacity-10 select-none rotate-12 hidden xl:block" aria-hidden>✨</span>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="max-w-3xl">
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-yellow-200" />
              <span className="text-xs font-black tracking-widest uppercase">Nivel A1 · Principiante</span>
            </div>

            {/* Display title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-none mb-5">
              Curso de<br />
              <span className="text-yellow-100">Inglés A1</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl font-medium text-white/85 max-w-xl leading-relaxed mb-8">
              De cero a conversacional en 90 días. {courseMetadata.totalUnits} unidades progresivas diseñadas para hablantes de español.
            </p>

            {/* Learning outcomes */}
            <ul className="space-y-2.5">
              {[
                { text: 'Vocabulario esencial para el trabajo y el viaje', emoji: '💼' },
                { text: 'Gramática básica explicada en español',            emoji: '📝' },
                { text: 'Pronunciación y comprensión auditiva real',        emoji: '🎧' },
              ].map(({ text, emoji }) => (
                <li key={text} className="flex items-center gap-3 text-white/90">
                  <span className="text-lg leading-none" aria-hidden>{emoji}</span>
                  <span className="text-sm font-semibold leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative arc */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#FEF9F5] rounded-t-[60%]" />
      </header>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 -mt-2 mb-12">
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: BookOpen, value: courseMetadata.totalUnits, label: 'Unidades', color: 'text-coral-600', bg: 'bg-coral-50 border-coral-100' },
            { icon: Clock,    value: `${totalHours}h`,         label: 'Duración',  color: 'text-peach-600',  bg: 'bg-peach-50  border-peach-100'  },
            { icon: Zap,      value: totalExercises,            label: 'Ejercicios', color: 'text-amber-600', bg: 'bg-amber-50  border-amber-100'  },
          ].map(({ icon: Icon, value, label, color, bg }) => (
            <div key={label} className={`${bg} border rounded-2xl p-5 text-center shadow-sm`}>
              <div className={`${color} flex justify-center mb-2`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className={`text-3xl font-black tracking-tight ${color} leading-none mb-1`}>{value}</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Units grid */}
          <div className="lg:col-span-3">
            {/* Section header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-4 h-4 text-coral-500" />
                <p className="text-xs font-black tracking-widest text-coral-500 uppercase">Contenido del Curso</p>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Elige tu unidad
              </h2>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Cada unidad incluye vocabulario, gramática, ejercicios y audio nativo.
              </p>
            </div>

            <A1CourseSelector units={courseMetadata.units} />
          </div>

          {/* Progress sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              {/* Sidebar header */}
              <div className="px-5 pt-5 pb-4 border-b border-slate-100">
                <p className="text-xs font-black tracking-widest text-slate-400 uppercase mb-1">Tu avance</p>
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight">Mi Progreso</h3>
              </div>
              <div className="p-5">
                <A1ProgressSidebar units={courseMetadata.units} />
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF9F5]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral-500 mx-auto mb-4" />
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Cargando curso…</p>
      </div>
    </div>
  );
}

export default function A1PreviewPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <A1PreviewContent />
    </Suspense>
  );
}
