import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/Navigation';
import { CourseLaunchBanner } from '@/components/CourseLaunchBanner';

export const metadata: Metadata = {
  title: 'Inglés para Viajar | Aprende Inglés para Turismo | Focus English',
  description: 'Aprende inglés para viajar con confianza. Cursos prácticos para turismo, aeropuerto, hoteles, restaurantes. Desde A1 hasta C2.',
  keywords: 'inglés viajes, inglés turismo, inglés aeropuerto, travel english',
};

const LEVELS = [
  { level: 'A1', title: 'Supervivencia', price: '€79/mes', duration: '2 meses', color: 'from-orange-400 to-orange-600' },
  { level: 'A2', title: 'Viajero Básico', price: '€79/mes', duration: '2 meses', color: 'from-orange-500 to-orange-700', popular: true },
  { level: 'B1', title: 'Independiente', price: '€99/mes', duration: '3 meses', color: 'from-teal-400 to-teal-600' },
  { level: 'B2', title: 'Experto', price: '€99/mes', duration: '3 meses', color: 'from-teal-500 to-teal-700' },
  { level: 'C1', title: 'Sofisticado', price: '€119/mes', duration: '4 meses', color: 'from-cyan-500 to-cyan-700' },
  { level: 'C2', title: 'Ciudadano Mundial', price: '€119/mes', duration: '4 meses', color: 'from-cyan-600 to-cyan-900' },
];

export default function ViajesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-teal-50">
      <Navigation />
      <CourseLaunchBanner />
      
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold text-sm mb-6">
            ✈️ Cursos para Viajeros
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Inglés para <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-teal-600">Viajar</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Viaja con confianza. Aprende inglés práctico para aeropuertos, hoteles, restaurantes y todas tus aventuras.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/test-nivel" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-teal-600 text-white rounded-xl hover:from-orange-700 hover:to-teal-700 font-bold text-lg shadow-lg">
              Test de Nivel Gratuito
            </Link>
            <Link href="/contacto" className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 font-bold text-lg shadow-lg border-2 border-slate-200">
              Consulta Gratuita
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Elige tu Nivel de Viajero</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEVELS.map((level) => (
              <div key={level.level} className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${level.popular ? 'border-orange-500' : 'border-transparent'}`}>
                {level.popular && <div className="text-center mb-4"><span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold">⭐ Más Popular</span></div>}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${level.color} text-white rounded-xl font-bold mb-4`}>{level.level}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{level.title}</h3>
                <div className="flex gap-4 mb-4 text-sm text-slate-600">
                  <span>📅 {level.duration}</span>
                  <span>💰 {level.price}</span>
                </div>
                <Link href={`/cursos/viajes/${level.level.toLowerCase()}`} className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange-600 to-teal-600 text-white rounded-xl hover:from-orange-700 hover:to-teal-700 font-bold">
                  Ver Curso {level.level}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para tu próxima aventura?</h2>
          <p className="text-xl text-orange-100 mb-8">Descubre tu nivel y empieza a hablar inglés con confianza</p>
          <Link href="/test-nivel" className="inline-block px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 font-bold text-lg shadow-lg">
            Test de Nivel Gratuito
          </Link>
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
