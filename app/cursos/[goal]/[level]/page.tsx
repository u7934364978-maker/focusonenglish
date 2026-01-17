import Link from "next/link";
import type { Metadata } from "next";
import { getCurriculumByLevel } from "@/lib/curriculum-data";
import CurriculumSection from "@/components/sections/CurriculumSection";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schemas";

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

const GOAL_SEO_DESCRIPTION: Record<Goal, string> = {
  trabajo: "Domina el inglés profesional para tu trabajo. Vocabulario técnico, presentaciones, emails corporativos y negociación. Certificación oficial incluida.",
  viajes: "Aprende inglés práctico para viajar. Aeropuertos, hoteles, restaurantes y emergencias. Habla inglés con confianza en tus viajes.",
  examenes: "Preparación completa para Cambridge, TOEFL e IELTS. Mock exams ilimitados, estrategias probadas y tutorías personalizadas.",
};

const LEVEL_LABEL: Record<Level, string> = {
  a1: "Nivel A1 - Principiante", 
  a2: "Nivel A2 - Elemental", 
  b1: "Nivel B1 - Intermedio", 
  b2: "Nivel B2 - Intermedio Alto", 
  c1: "Nivel C1 - Avanzado", 
  c2: "Nivel C2 - Maestría",
};

const LEVEL_SEO_DESCRIPTION: Record<Level, string> = {
  a1: "A1 (Principiante) - Comienza desde cero con vocabulario básico y frases esenciales",
  a2: "A2 (Elemental) - Comunícate en situaciones cotidianas con frases simples",
  b1: "B1 (Intermedio) - Mantén conversaciones fluidas sobre temas familiares",
  b2: "B2 (Intermedio Alto) - Argumenta con confianza y prepara Cambridge B2 First",
  c1: "C1 (Avanzado) - Domina el inglés a nivel profesional y académico",
  c2: "C2 (Maestría) - Alcanza nivel nativo con expresiones complejas",
};

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ goal: string; level: string }> }): Promise<Metadata> {
  const { goal: goalParam, level: levelParam } = await params;
  const goal = goalParam as Goal;
  const level = levelParam as Level;

  const title = `Curso de Inglés ${LEVEL_LABEL[level]} para ${GOAL_LABEL[goal]} | Focus English`;
  const description = `${GOAL_SEO_DESCRIPTION[goal]} ${LEVEL_SEO_DESCRIPTION[level]}. Desde €6.99/mes. Prueba gratis 7 días.`;

  return {
    title,
    description,
    keywords: [
      `curso inglés ${level}`,
      `curso inglés ${goal}`,
      `inglés ${level} online`,
      `curso ${GOAL_LABEL[goal].toLowerCase()}`,
      "cursos de inglés online",
      "curso inglés certificado",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://focus-on-english.com/cursos/${goal}/${level}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/cursos/${goal}/${level}`,
    },
  };
}

export default async function CursoLandingPage({ params }: { params: Promise<{ goal: string; level: string }> }) {
  const { goal: goalParam, level: levelParam } = await params;
  const goal = goalParam as Goal;
  const level = levelParam as Level;

  if (!GOALS.includes(goal) || !LEVELS.includes(level)) {
    return (
      <main className="mx-auto max-w-[900px] px-4 py-12">
        <h1 className="text-2xl font-black">Curso no encontrado</h1>
        <Link className="mt-4 inline-block text-coral-700 font-black" href="/">
          Volver a Home →
        </Link>
      </main>
    );
  }

  // Get curriculum data for this level
  const curriculum = getCurriculumByLevel(level.toUpperCase());

  // Generate Course Schema for SEO
  const courseSchema = generateCourseSchema({
    name: `Curso de Inglés ${LEVEL_LABEL[level]} para ${GOAL_LABEL[goal]}`,
    description: `${GOAL_DESCRIPTION[goal]}. ${LEVEL_SEO_DESCRIPTION[level]}. Programa completo basado en especificaciones de Cambridge English.`,
    level: LEVEL_LABEL[level],
    goal: GOAL_LABEL[goal],
    price: "6.99",
    url: `https://focus-on-english.com/cursos/${goal}/${level}`,
  });

  // Generate Breadcrumb Schema for SEO
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: "https://focus-on-english.com" },
    { name: "Cursos", url: "https://focus-on-english.com/cursos-especializados" },
    { name: GOAL_LABEL[goal], url: `https://focus-on-english.com/cursos/${goal}/${level}` },
  ]);

  // Generate FAQ Schema for SEO
  const faqs = [
    {
      question: `¿Qué nivel de inglés alcanzaré con el curso ${LEVEL_LABEL[level]}?`,
      answer: `Al completar este curso de nivel ${level.toUpperCase()}, alcanzarás el nivel ${LEVEL_LABEL[level]} del Marco Común Europeo de Referencia (MCER). ${LEVEL_SEO_DESCRIPTION[level]}. Recibirás certificación oficial que acredita tu nivel.`,
    },
    {
      question: "¿Cuánto dura el curso y cuántas horas debo dedicar?",
      answer: `El curso tiene una duración aproximada de ${curriculum?.duration || '12 semanas'} con ${curriculum?.modules.length || 3} módulos completos. Recomendamos dedicar 1-2 horas diarias para un progreso óptimo, pero puedes avanzar a tu propio ritmo.`,
    },
    {
      question: "¿Necesito conocimientos previos de inglés?",
      answer: level === 'a1' 
        ? "No, este curso está diseñado para principiantes absolutos. Comenzarás desde cero con el vocabulario y gramática básica." 
        : `Sí, este curso requiere haber completado el nivel anterior (${LEVELS[LEVELS.indexOf(level) - 1]?.toUpperCase()}). Te recomendamos hacer nuestro test de nivel gratuito para confirmar que este es el curso adecuado para ti.`,
    },
    {
      question: "¿Qué incluye la suscripción?",
      answer: "Tu suscripción incluye acceso completo a TODOS los niveles (A1-C2), material actualizado, ejercicios interactivos, tutorías personalizadas, mock exams ilimitados y certificación oficial. Puedes cancelar en cualquier momento sin permanencia.",
    },
    {
      question: `¿Este curso me prepara para ${goal === 'examenes' ? 'exámenes oficiales como Cambridge, TOEFL o IELTS' : goal === 'trabajo' ? 'entornos laborales profesionales' : 'viajar con confianza'}?`,
      answer: goal === 'examenes'
        ? `Sí, este curso está específicamente diseñado para prepararte para exámenes oficiales internacionales basados en el MCER. Incluye formato de examen, estrategias específicas, simulacros completos y criterios de evaluación utilizados por Cambridge, TOEFL e IELTS.`
        : goal === 'trabajo'
        ? `Sí, este curso incluye vocabulario técnico y profesional, comunicación en reuniones y presentaciones, emails corporativos, negociación y networking profesional. Todo el contenido está enfocado en situaciones laborales reales.`
        : `Sí, este curso está diseñado para situaciones prácticas de viaje: aeropuertos, hoteles, restaurantes, transporte, compras y emergencias. Aprenderás frases y vocabulario que usarás inmediatamente en tus viajes.`,
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <main className="mx-auto max-w-full px-4 py-12">
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li><Link href="/" className="hover:text-coral-600 transition-colors">Inicio</Link></li>
            <li className="text-slate-400">›</li>
            <li><Link href="/cursos-especializados" className="hover:text-coral-600 transition-colors">Cursos</Link></li>
            <li className="text-slate-400">›</li>
            <li className="font-semibold text-slate-900">{GOAL_LABEL[goal]} - {LEVEL_LABEL[level]}</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <div className="text-[12px] font-extrabold text-slate-500 uppercase tracking-wide">Curso Especializado</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            {GOAL_LABEL[goal]}
          </h1>
          <div className="mt-3 text-2xl font-bold text-coral-600">
            {LEVEL_LABEL[level]}
          </div>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            {GOAL_DESCRIPTION[goal]}. Programa completo basado en especificaciones de Cambridge English.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-coral-600 to-peach-600 px-8 text-base font-bold text-white hover:from-coral-700 hover:to-peach-700 transition-all shadow-lg hover:shadow-xl"
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
          <div className="bg-white rounded-xl border-2 border-orange-200 p-6 text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="font-bold text-slate-900">Duración</div>
            <div className="text-coral-600 font-semibold">{curriculum?.duration || '12 semanas'}</div>
          </div>
          <div className="bg-white rounded-xl border-2 border-peach-200 p-6 text-center">
            <div className="text-3xl mb-2">📚</div>
            <div className="font-bold text-slate-900">Módulos</div>
            <div className="text-peach-600 font-semibold">{curriculum?.modules.length || 3} módulos completos</div>
          </div>
          <div className="bg-white rounded-xl border-2 border-amber-200 p-6 text-center">
            <div className="text-3xl mb-2">🎓</div>
            <div className="font-bold text-slate-900">Certificación</div>
            <div className="text-amber-600 font-semibold">Preparación oficial</div>
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      {curriculum && <CurriculumSection curriculum={curriculum} />}

      {/* Goal-Specific Content */}
      <div className="max-w-6xl mx-auto mt-16">
        <section className="bg-gradient-to-br from-coral-50 to-peach-50 rounded-2xl border-2 border-coral-200 p-8">
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
                  <span className="text-coral-600 mt-1">✓</span>
                  <span>Vocabulario técnico y profesional de tu sector</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral-600 mt-1">✓</span>
                  <span>Comunicación en reuniones y presentaciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral-600 mt-1">✓</span>
                  <span>Emails y escritura corporativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral-600 mt-1">✓</span>
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
                  <span className="text-coral-600 mt-1">✓</span>
                  <span>Situaciones en aeropuertos y hoteles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral-600 mt-1">✓</span>
                  <span>Restaurantes y compras</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral-600 mt-1">✓</span>
                  <span>Pedir direcciones y usar transporte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral-600 mt-1">✓</span>
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
        <section className="mt-12 bg-gradient-to-r from-coral-600 to-peach-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Acceso Completo con Suscripción</h2>
          <p className="text-lg mb-6 text-orange-100">
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
            className="inline-block bg-white text-coral-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg"
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
            className="mt-3 inline-flex items-center text-coral-600 font-bold text-sm hover:text-coral-700"
          >
            Agendar consulta gratuita →
          </Link>
        </div>

        {/* FAQ Section for SEO */}
        <section className="mt-16">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">
            Preguntas Frecuentes - {LEVEL_LABEL[level]}
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-coral-300 transition-colors"
              >
                <summary className="font-bold text-slate-900 cursor-pointer flex items-start gap-3 text-lg">
                  <span className="text-coral-600 flex-shrink-0 mt-1">❓</span>
                  <span className="flex-1">{faq.question}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                </summary>
                <div className="mt-4 text-slate-700 leading-relaxed pl-9">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
