import Link from "next/link";
import { getCurriculumByLevel } from "@/lib/curriculum-data";
import CurriculumSection from "@/components/sections/CurriculumSection";

const GOALS = ["trabajo", "viajes", "examenes"] as const;
const LEVELS = ["a1","a2","b1","b2","c1","c2"] as const;

type Goal = (typeof GOALS)[number];
type Level = (typeof LEVELS)[number];

const GOAL_LABEL: Record<Goal, string> = {
  trabajo: "Inglés para Trabajar",
  viajes: "Inglés para Viajar",
  examenes: "Preparación de Exámenes Oficiales",
};

const GOAL_DESCRIPTION: Record<Goal, string> = {
  trabajo: "Curso especializado en inglés profesional para entornos laborales",
  viajes: "Curso práctico de inglés para viajes y situaciones cotidianas",
  examenes: "Preparación siguiendo criterios de evaluación de exámenes oficiales internacionales (MCER)",
};

const LEVEL_LABEL: Record<Level, string> = {
  a1: "Nivel A1 - Principiante", 
  a2: "Nivel A2 - Elemental", 
  b1: "Nivel B1 - Intermedio", 
  b2: "Nivel B2 - Intermedio Alto", 
  c1: "Nivel C1 - Avanzado", 
  c2: "Nivel C2 - Maestría",
};

export default async function CursoLandingPage({ params }: { params: Promise<{ goal: string; level: string }> }) {
  const { goal: goalParam, level: levelParam } = await params;
  const goal = goalParam as Goal;
  const level = levelParam as Level;

  if (!GOALS.includes(goal) || !LEVELS.includes(level)) {
    return (
      <main className="mx-auto max-w-[900px] px-4 py-12">
        <h1 className="text-2xl font-black">Curso no encontrado</h1>
        <Link className="mt-4 inline-block text-violet-700 font-black" href="/">
          Volver a Home →
        </Link>
      </main>
    );
  }

  // Get curriculum data for this level
  const curriculum = getCurriculumByLevel(level.toUpperCase());

  return (
    <main className="mx-auto max-w-full px-4 py-12">
  return (
    <main className="mx-auto max-w-full px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[12px] font-extrabold text-slate-500 uppercase tracking-wide">Curso Especializado</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            {GOAL_LABEL[goal]}
          </h1>
          <div className="mt-3 text-2xl font-bold text-blue-600">
            {LEVEL_LABEL[level]}
          </div>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            {GOAL_DESCRIPTION[goal]}. Programa completo basado en especificaciones de Cambridge English.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-base font-bold text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Inscribirme Ahora →
            </Link>
            <Link
              href="/diagnostico"
              className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 text-base font-bold text-slate-800 hover:bg-slate-50 transition-all"
            >
              Hacer Test de Nivel
            </Link>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl border-2 border-blue-200 p-6 text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="font-bold text-slate-900">Duración</div>
            <div className="text-blue-600 font-semibold">{curriculum?.duration || '12 semanas'}</div>
          </div>
          <div className="bg-white rounded-xl border-2 border-purple-200 p-6 text-center">
            <div className="text-3xl mb-2">📚</div>
            <div className="font-bold text-slate-900">Módulos</div>
            <div className="text-purple-600 font-semibold">{curriculum?.modules.length || 3} módulos completos</div>
          </div>
          <div className="bg-white rounded-xl border-2 border-green-200 p-6 text-center">
            <div className="text-3xl mb-2">🎓</div>
            <div className="font-bold text-slate-900">Certificación</div>
            <div className="text-green-600 font-semibold">Preparación oficial</div>
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      {curriculum && <CurriculumSection curriculum={curriculum} />}

      {/* Goal-Specific Content */}
      <div className="max-w-6xl mx-auto mt-16">
        <section className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border-2 border-violet-200 p-8">
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {goal === 'trabajo' && '💼 Enfoque Profesional'}
            {goal === 'viajes' && '✈️ Enfoque en Viajes'}
            {goal === 'examenes' && '🎓 Enfoque en Exámenes'}
          </h2>
          
          {goal === 'trabajo' && (
            <div className="space-y-4 text-slate-700">
              <p>Este curso está diseñado específicamente para entornos laborales y profesionales:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Vocabulario técnico y profesional de tu sector</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Comunicación en reuniones y presentaciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Emails y escritura corporativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Negociación y networking profesional</span>
                </li>
              </ul>
            </div>
          )}

          {goal === 'viajes' && (
            <div className="space-y-4 text-slate-700">
              <p>Aprende inglés práctico para viajar con confianza:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Situaciones en aeropuertos y hoteles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Restaurantes y compras</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Pedir direcciones y usar transporte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Emergencias y situaciones médicas</span>
                </li>
              </ul>
            </div>
          )}

          {goal === 'examenes' && (
            <div className="space-y-4 text-slate-700">
              <p>Preparación completa para exámenes oficiales internacionales basados en el Marco Común Europeo de Referencia (MCER):</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span>Formato y estructura de exámenes oficiales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span>Estrategias específicas para cada sección</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span>Simulacros de examen completos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span>Criterios de evaluación internacionales</span>
                </li>
              </ul>
            </div>
          )}
        </section>

        {/* Pricing CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Acceso Completo con Suscripción</h2>
          <p className="text-lg mb-6 text-blue-100">
            Accede a este curso y todos los niveles (A1-C2) con nuestra suscripción mensual
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold">€6.99</div>
              <div className="text-sm">Plan con Publicidad</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold">€14.99</div>
              <div className="text-sm">Plan Premium</div>
              <div className="text-xs mt-1">(Sin anuncios + extras)</div>
            </div>
          </div>
          <Link
            href="/planes"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
          >
            Ver Planes y Características →
          </Link>
        </section>

        <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-sm text-slate-700">
            <strong className="text-slate-900">¿Necesitas orientación?</strong> Agenda una consulta gratuita 
            con nuestro equipo para identificar el mejor programa para ti.
          </p>
          <Link 
            href="/contact" 
            className="mt-3 inline-flex items-center text-violet-600 font-bold text-sm hover:text-violet-700"
          >
            Agendar consulta gratuita →
          </Link>
        </div>
      </div>
    </main>
  );
}
