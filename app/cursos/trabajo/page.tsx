import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { CourseLaunchBanner } from '@/components/CourseLaunchBanner';

export const metadata: Metadata = {
  title: 'Inglés para Trabajar | Cursos Profesionales Online | Focus English',
  description: 'Aprende inglés profesional adaptado a tu sector. Cursos online de todos los niveles (A1-C2) para mejorar tu carrera y comunicarte con confianza en el entorno laboral.',
  keywords: 'inglés profesional, inglés negocios, inglés trabajo, business english, cursos inglés empresas, inglés oficina, inglés reuniones',
  openGraph: {
    title: 'Inglés para Trabajar - Cursos Profesionales Online',
    description: 'Domina el inglés profesional. Cursos adaptados a tu sector y nivel.',
    type: 'website',
  },
};

const LEVELS = [
  {
    level: 'A1',
    title: 'Principiante',
    description: 'Primeras palabras y frases básicas para el trabajo. Presentaciones simples, correos básicos.',
    duration: '3 meses',
    price: '€99/mes',
    color: 'from-green-400 to-green-600',
    topics: ['Presentaciones personales', 'Vocabulario de oficina básico', 'Emails simples', 'Números y fechas'],
  },
  {
    level: 'A2',
    title: 'Elemental',
    description: 'Conversaciones cotidianas de oficina. Comprensión de instrucciones laborales básicas.',
    duration: '3 meses',
    price: '€99/mes',
    color: 'from-green-500 to-green-700',
    topics: ['Llamadas telefónicas simples', 'Descripciones de tareas', 'Horarios y planificación', 'Conversaciones informales'],
  },
  {
    level: 'B1',
    title: 'Intermedio',
    description: 'Comunicación efectiva en reuniones. Redacción de informes y presentaciones básicas.',
    duration: '4 meses',
    price: '€119/mes',
    color: 'from-sky-400 to-coral-600',
    topics: ['Reuniones de trabajo', 'Informes y reportes', 'Negociación básica', 'Presentaciones simples'],
  },
  {
    level: 'B2',
    title: 'Intermedio-Alto',
    description: 'Confianza profesional total. Participación activa en reuniones internacionales y presentaciones complejas.',
    duration: '4 meses',
    price: '€119/mes',
    color: 'from-sky-500 to-coral-700',
    popular: true,
    topics: ['Negociación avanzada', 'Presentaciones corporativas', 'Escritura profesional', 'Liderazgo de equipos'],
  },
  {
    level: 'C1',
    title: 'Avanzado',
    description: 'Inglés profesional sofisticado. Manejo de situaciones complejas y comunicación estratégica.',
    duration: '5 meses',
    price: '€139/mes',
    color: 'from-peach-500 to-peach-700',
    topics: ['Estrategia corporativa', 'Comunicación ejecutiva', 'Análisis crítico', 'Networking profesional'],
  },
  {
    level: 'C2',
    title: 'Maestría',
    description: 'Dominio completo del inglés profesional. Comunicación al nivel de un nativo en cualquier contexto laboral.',
    duration: '5 meses',
    price: '€139/mes',
    color: 'from-peach-600 to-peach-900',
    topics: ['Liderazgo global', 'Negociaciones complejas', 'Escritura ejecutiva', 'Consultoría y asesoramiento'],
  },
];

const SECTORS = [
  { icon: '💼', name: 'Finanzas y Banca', description: 'Vocabulario especializado para el sector financiero' },
  { icon: '⚕️', name: 'Medicina y Salud', description: 'Terminología médica y atención al paciente' },
  { icon: '⚖️', name: 'Legal', description: 'Inglés jurídico y documentación legal' },
  { icon: '💻', name: 'Tecnología e IT', description: 'Tech vocabulary y comunicación en proyectos' },
  { icon: '🏭', name: 'Ingeniería', description: 'Inglés técnico y gestión de proyectos' },
  { icon: '📊', name: 'Marketing y Ventas', description: 'Presentaciones comerciales y negociación' },
  { icon: '🏨', name: 'Turismo y Hostelería', description: 'Atención al cliente internacional' },
  { icon: '🎓', name: 'Educación', description: 'Inglés académico y docencia' },
];

const BENEFITS = [
  {
    icon: '🎯',
    title: 'Adaptado a tu Sector',
    description: 'Contenido específico para tu industria con vocabulario y situaciones reales de tu trabajo.',
  },
  {
    icon: '👔',
    title: 'Casos Reales de Negocio',
    description: 'Aprende con situaciones auténticas: reuniones, presentaciones, negociaciones y emails.',
  },
  {
    icon: '📈',
    title: 'Avanza en tu Carrera',
    description: 'El inglés profesional abre puertas a mejores oportunidades laborales y salarios más altos.',
  },
  {
    icon: '🎓',
    title: 'Profesores Especializados',
    description: 'Instructores con experiencia en el mundo empresarial y conocimiento de tu sector.',
  },
  {
    icon: '💼',
    title: 'Certificación Profesional',
    description: 'Obtén un certificado reconocido que mejora tu CV y perfil de LinkedIn.',
  },
  {
    icon: '🕐',
    title: 'Flexible y Online',
    description: 'Estudia a tu ritmo, compatible con horarios laborales. Acceso 24/7 desde cualquier lugar.',
  },
];

export default function TrabajoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <Navigation />
      <CourseLaunchBanner />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coral-600/10 to-peach-600/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-sky-100 text-coral-700 rounded-full font-semibold text-sm mb-6">
              💼 Cursos Profesionales
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Inglés para <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-600 to-peach-600">Trabajar</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Domina el inglés profesional y abre las puertas a mejores oportunidades de carrera. 
              Cursos especializados para tu sector con contenido real del mundo laboral.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/test-nivel"
                className="px-8 py-4 bg-gradient-to-r from-coral-600 to-peach-600 text-white rounded-xl hover:from-coral-700 hover:to-peach-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Test de Nivel Gratuito
              </Link>
              <Link
                href="/contacto"
                className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all font-bold text-lg shadow-lg border-2 border-slate-200"
              >
                Consulta Gratuita
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-coral-600 mb-2">87%</div>
                <div className="text-sm text-slate-600">Mejora salarial tras el curso</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-peach-600 mb-2">2,500+</div>
                <div className="text-sm text-slate-600">Profesionales formados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">4.8/5</div>
                <div className="text-sm text-slate-600">Satisfacción media</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Elige tu Nivel</h2>
            <p className="text-xl text-slate-600">
              Desde principiante hasta maestría. Cursos adaptados a tu nivel actual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEVELS.map((level) => (
              <div
                key={level.level}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 ${
                  level.popular ? 'border-sky-500 relative' : 'border-transparent'
                }`}
              >
                {level.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-coral-600 to-peach-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      ⭐ Más Popular
                    </span>
                  </div>
                )}

                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${level.color} text-white rounded-xl font-bold text-lg mb-4`}>
                  {level.level}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{level.title}</h3>
                <p className="text-slate-600 mb-4">{level.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                  <span>📅 {level.duration}</span>
                  <span>💰 {level.price}</span>
                </div>

                <div className="mb-6">
                  <p className="font-semibold text-slate-900 mb-2">Aprenderás:</p>
                  <ul className="space-y-2">
                    {level.topics.map((topic, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-coral-600">✓</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/cursos/trabajo/${level.level.toLowerCase()}`}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-coral-600 to-peach-600 text-white rounded-xl hover:from-coral-700 hover:to-peach-700 transition-all font-bold"
                >
                  Ver Curso {level.level}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Especializado en tu Sector</h2>
            <p className="text-xl text-slate-600">
              Contenido específico para tu industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((sector, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-xl p-6 hover:shadow-lg transition-all border-2 border-slate-200"
              >
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{sector.name}</h3>
                <p className="text-sm text-slate-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">¿Por qué nuestros cursos profesionales?</h2>
            <p className="text-xl text-slate-600">
              Formación de calidad adaptada al mundo laboral real
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-coral-600 to-peach-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para impulsar tu carrera profesional?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Descubre tu nivel actual con nuestro test gratuito y comienza hoy mismo
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/test-nivel"
              className="px-8 py-4 bg-white text-coral-600 rounded-xl hover:bg-sky-50 transition-all font-bold text-lg shadow-lg"
            >
              Test de Nivel Gratuito
            </Link>
            <Link
              href="/planes"
              className="px-8 py-4 bg-coral-700 text-white rounded-xl hover:bg-coral-800 transition-all font-bold text-lg shadow-lg border-2 border-white/30"
            >
              Ver Planes y Precios
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">© 2026 Focus English. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
