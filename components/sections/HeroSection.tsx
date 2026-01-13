import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-violet-50 to-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-bold text-sm mb-6">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
            Programas especializados de 90 días
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
            Inglés Enfocado en{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Tu Objetivo
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Cursos personalizados para trabajar, viajar o preparar exámenes oficiales. 
            Aprende solo lo que necesitas con un plan diseñado para ti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/diagnostico"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black text-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              Hacer Test de Nivel Gratis
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/cursos-especializados"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-800 font-black text-lg hover:border-violet-200 hover:bg-violet-50 transition-all"
            >
              Ver Todos los Cursos
            </Link>
          </div>

          {/* Cursos destacados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <Link 
              href="/cursos/trabajo/b2"
              className="group p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-violet-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-black text-lg mb-2">Inglés para Trabajar</h3>
              <p className="text-sm text-slate-600">Comunicación profesional y vocabulario empresarial</p>
            </Link>

            <Link 
              href="/cursos/viajes/a2"
              className="group p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-black text-lg mb-2">Inglés para Viajar</h3>
              <p className="text-sm text-slate-600">Situaciones prácticas para tu próxima aventura</p>
            </Link>

            <Link 
              href="/cursos/examenes/b2"
              className="group p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-black text-lg mb-2">Preparar Exámenes</h3>
              <p className="text-sm text-slate-600">Certificaciones Cambridge, TOEFL, IELTS</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
