import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/sections/Navigation';

export const metadata: Metadata = {
  title: 'Preparación de Exámenes de Inglés | Cambridge, IELTS, TOEFL | Focus English',
  description: 'Prepara tu examen oficial de inglés. Cursos especializados para Cambridge (FCE, CAE, CPE), IELTS, TOEFL. Tasas de aprobación del 95%.',
  keywords: 'cambridge english, FCE, CAE, CPE, IELTS, TOEFL, examen inglés, preparación oficial',
};

const EXAMS = [
  { 
    level: 'B1', 
    exam: 'PET (B1 Preliminary)', 
    price: '€99/mes', 
    duration: '3 meses',
    color: 'from-blue-400 to-blue-600',
    description: 'Certifica inglés intermedio para estudios y trabajo básico'
  },
  { 
    level: 'B2', 
    exam: 'FCE (B2 First)', 
    price: '€119/mes', 
    duration: '4 meses',
    color: 'from-blue-500 to-blue-700',
    popular: true,
    description: 'El examen más solicitado para universidad y trabajo profesional'
  },
  { 
    level: 'C1', 
    exam: 'CAE (C1 Advanced)', 
    price: '€139/mes', 
    duration: '5 meses',
    color: 'from-indigo-500 to-indigo-700',
    description: 'Nivel avanzado para postgrados y posiciones ejecutivas'
  },
  { 
    level: 'C2', 
    exam: 'CPE (C2 Proficiency)', 
    price: '€139/mes', 
    duration: '5 meses',
    color: 'from-indigo-600 to-indigo-900',
    description: 'Máximo nivel, equivalente a nativo educado'
  },
  { 
    level: 'A2-C2', 
    exam: 'IELTS', 
    price: '€119/mes', 
    duration: '4 meses',
    color: 'from-purple-500 to-purple-700',
    description: 'Para inmigración, estudios en UK, Australia, Canadá'
  },
  { 
    level: 'A2-C2', 
    exam: 'TOEFL', 
    price: '€119/mes', 
    duration: '4 meses',
    color: 'from-violet-500 to-violet-700',
    description: 'Requerido por universidades americanas y canadienses'
  },
];

const FEATURES = [
  { icon: '✅', title: '95% Tasa Aprobación', desc: 'Nuestros alumnos aprueban al primer intento' },
  { icon: '📚', title: 'Material Oficial', desc: 'Cambridge Assessment y ETS autorizado' },
  { icon: '🎯', title: 'Exámenes Simulacro', desc: 'Practica con tests reales en condiciones de examen' },
  { icon: '👨‍🏫', title: 'Examinadores Oficiales', desc: 'Profesores certificados y experimentados' },
  { icon: '📊', title: 'Seguimiento Personalizado', desc: 'Identifica tus puntos débiles y mejóralos' },
  { icon: '🎓', title: 'Garantía de Resultado', desc: 'Repite gratis si no alcanzas tu objetivo' },
];

export default function ExamenesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-6">
            🎓 Preparación Oficial
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Preparación de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Exámenes</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Aprueba tu examen oficial al primer intento. Preparación especializada para Cambridge, IELTS y TOEFL con garantía de resultado.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/test-nivel" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 font-bold text-lg shadow-lg">
              Test de Nivel Gratuito
            </Link>
            <Link href="/contacto" className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 font-bold text-lg shadow-lg border-2 border-slate-200">
              Consulta Gratuita
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-slate-600">Tasa de aprobación</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">1,200+</div>
              <div className="text-sm text-slate-600">Alumnos aprobados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-sm text-slate-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Elige tu Examen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXAMS.map((exam) => (
              <div key={exam.exam} className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${exam.popular ? 'border-blue-500 relative' : 'border-transparent'}`}>
                {exam.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">⭐ Más Demandado</span>
                  </div>
                )}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${exam.color} text-white rounded-xl font-bold mb-4`}>
                  {exam.level}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{exam.exam}</h3>
                <p className="text-slate-600 mb-4 text-sm">{exam.description}</p>
                <div className="flex gap-4 mb-6 text-sm text-slate-600">
                  <span>📅 {exam.duration}</span>
                  <span>💰 {exam.price}</span>
                </div>
                <Link href={`/cursos/examenes/${exam.level.toLowerCase()}`} className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 font-bold">
                  Ver Curso
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">¿Por qué prepararte con nosotros?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para aprobar tu examen?</h2>
          <p className="text-xl text-blue-100 mb-8">Descubre qué examen necesitas y comienza tu preparación hoy</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/test-nivel" className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 font-bold text-lg shadow-lg">
              Test de Nivel Gratuito
            </Link>
            <Link href="/planes" className="px-8 py-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 font-bold text-lg shadow-lg border-2 border-white/30">
              Ver Planes
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">© 2026 Focus English. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
