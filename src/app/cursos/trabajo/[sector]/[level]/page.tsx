import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/sections/Navigation';
import { SECTOR_CURRICULUMS, SECTOR_NAMES } from '@/lib/sectors';
import { CURRICULUM_BY_LEVEL } from '@/lib/curriculum-data';

interface Props {
  params: Promise<{
    sector: string;
    level: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sector: sectorSlug, level: levelSlug } = await params;
  const sectorName = SECTOR_NAMES[sectorSlug];
  const level = levelSlug.toUpperCase();
  
  if (!sectorName) return { title: 'Curso no encontrado' };

  return {
    title: `Inglés para ${sectorName} (${level}) | Focus English`,
    description: `Curso especializado de inglés para profesionales de ${sectorName}. Nivel ${level}. 9 meses de formación intensiva.`,
  };
}

export async function generateStaticParams() {
  const sectors = Object.keys(SECTOR_CURRICULUMS);
  const levels = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  
  const params = [];
  for (const sector of sectors) {
    for (const level of levels) {
      params.push({ sector, level });
    }
  }
  return params;
}

export default async function SectorLevelPage({ params }: Props) {
  const { sector: sectorSlug, level: levelParam } = await params;
  const levelKey = levelParam.toUpperCase();
  
  const sectorName = SECTOR_NAMES[sectorSlug];
  const sectorCurriculum = SECTOR_CURRICULUMS[sectorSlug]?.[levelKey];
  const baseCurriculum = CURRICULUM_BY_LEVEL[levelKey];

  if (!sectorName || !sectorCurriculum || !baseCurriculum) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/cursos/trabajo" 
            className="text-coral-600 font-bold mb-4 inline-block hover:underline"
          >
            ← Volver a Cursos Profesionales
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-block px-3 py-1 bg-orange-100 text-coral-700 rounded-full text-sm font-bold mb-4">
                Especialización: {sectorName}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Programa Superior: <span className="text-coral-600">Nivel {levelKey}</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl">
                Un programa de 9 meses diseñado específicamente para profesionales de {sectorName} que necesitan dominar el inglés en su entorno laboral real.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-sm font-bold opacity-80 uppercase tracking-wider mb-1">Carga Lectiva</div>
                <div className="text-3xl font-black">10h <span className="text-lg font-normal opacity-80">/ semana</span></div>
                <div className="mt-4 pt-4 border-t border-white/10 flex gap-4 text-sm">
                  <div><strong>9</strong> Meses</div>
                  <div><strong>3</strong> Trimestres</div>
                  <div><strong>36</strong> Semanas</div>
                </div>
              </div>
              <Link
                href="/test-nivel"
                className="w-full text-center py-4 bg-coral-600 text-white rounded-xl font-bold hover:bg-coral-700 transition-all shadow-lg"
              >
                Empezar Test de Nivel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Course Structure */}
            <div className="lg:col-span-2 space-y-12">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="bg-coral-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">1</span>
                Programa Especializado (9 Meses)
              </h2>

              <div className="space-y-8">
                {sectorCurriculum.map((trimester, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-slate-900 p-6 text-white">
                      <h3 className="text-xl font-bold">{trimester.title}</h3>
                    </div>
                    <div className="p-8 grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <span className="text-coral-600">●</span> Temas Principales
                        </h4>
                        <ul className="space-y-3">
                          {trimester.topics.map((topic, i) => (
                            <li key={i} className="text-slate-600 flex items-start gap-2">
                              <span className="text-coral-600/50 mt-1.5">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="font-bold text-slate-900 mb-4">Competencias (Skills)</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-bold text-coral-600 text-xs uppercase mb-1">Reading</div>
                            <div className="text-slate-600">{trimester.skills.reading[0]}</div>
                          </div>
                          <div>
                            <div className="font-bold text-coral-600 text-xs uppercase mb-1">Writing</div>
                            <div className="text-slate-600">{trimester.skills.writing[0]}</div>
                          </div>
                          <div>
                            <div className="font-bold text-coral-600 text-xs uppercase mb-1">Listening</div>
                            <div className="text-slate-600">{trimester.skills.listening[0]}</div>
                          </div>
                          <div>
                            <div className="font-bold text-coral-600 text-xs uppercase mb-1">Speaking</div>
                            <div className="text-slate-600">{trimester.skills.speaking[0]}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-8 py-6 bg-orange-50/50 border-t border-slate-100">
                      <div className="mb-4">
                        <span className="font-bold text-slate-900 text-sm">Gramática: </span>
                        <span className="text-slate-600 text-sm">{trimester.grammar.join(', ')}</span>
                      </div>
                      
                      <div className="space-y-3">
                        <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest">Lecciones Disponibles</h5>
                        <div className="flex flex-wrap gap-2">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((w) => {
                            const weekNum = (idx * 12) + w;
                            const weekStr = weekNum < 10 ? `0${weekNum}` : `${weekNum}`;
                            return (
                              <Link
                                key={w}
                                href={`/cursos/trabajo/${sectorSlug}/${levelParam}/trimestre${idx + 1}/semana${weekStr}`}
                                className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:border-coral-500 hover:text-coral-600 transition-all shadow-sm"
                              >
                                Semana {weekNum}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 pt-8">
                <span className="bg-coral-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">2</span>
                Base Lingüística CEFR (Nivel {levelKey})
              </h2>
              <div className="bg-white rounded-3xl border border-slate-200 p-8">
                <p className="text-slate-600 mb-8">
                  Además del contenido especializado, el programa incluye la base lingüística necesaria para consolidar el nivel {levelKey} según el Marco Común Europeo.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {baseCurriculum.modules.slice(0, 4).map((mod, i) => (
                    <div key={i} className="border-b border-slate-100 pb-6 last:border-0">
                      <h4 className="font-bold text-slate-900 mb-2">{mod.title}</h4>
                      <p className="text-sm text-slate-500 line-clamp-2">{mod.topics.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-white rounded-3xl border-2 border-orange-500 p-8 shadow-xl">
                  <h3 className="text-2xl font-black text-slate-900 mb-4">¿Por qué este curso?</h3>
                  <ul className="space-y-4">
                    {[
                      'Vocabulario técnico 100% relevante',
                      'Simulaciones de situaciones reales',
                      'Networking con otros profesionales',
                      'Certificado de especialización al finalizar',
                      'Acceso a la plataforma 24/7'
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-600 rounded-full p-0.5 mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </span>
                        <span className="text-slate-700 font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                    <div className="text-sm text-slate-500 mb-1">Próxima convocatoria</div>
                    <div className="text-xl font-bold text-slate-900 mb-6">Lunes, 2 de Febrero</div>
                    <Link
                      href="/planes"
                      className="block w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
                    >
                      Ver Planes y Precios
                    </Link>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-coral-600 to-peach-600 rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-2">¿Dudas con tu nivel?</h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Realiza nuestra prueba de nivel gratuita y recibe una recomendación personalizada en menos de 10 minutos.
                  </p>
                  <Link
                    href="/test-nivel"
                    className="block w-full text-center py-3 bg-white text-coral-600 rounded-xl font-bold hover:bg-orange-50 transition-all"
                  >
                    Hacer Test Gratis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Impulsa tu carrera en {sectorName}</h2>
          <p className="text-xl text-slate-400 mb-10">
            No dejes que el idioma sea una barrera para tu crecimiento profesional. Únete a Focus English hoy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all"
            >
              Hablar con un Asesor
            </Link>
            <Link
              href="/planes"
              className="px-8 py-4 bg-coral-600 text-white rounded-xl font-bold hover:bg-coral-700 transition-all"
            >
              Inscribirse Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
