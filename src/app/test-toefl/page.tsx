import { Navigation } from "@/components/sections/Navigation";
import ToeflLevelTestInteractive from "@/components/test/ToeflLevelTestInteractive";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test de Nivel TOEFL iBT Online: Evalúa tu Inglés Académico Gratis",
  description: "Evalúa tu nivel de inglés académico y descubre qué curso preparatorio de TOEFL iBT es el adecuado para ti. Test de 30 preguntas críticas de nivel B1 a C1.",
  keywords: ["test toefl", "toefl ibt test nivel", "preparacion toefl", "focus english toefl", "nivel ingles academico"],
};

export default function ToeflTestPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-slate-50">
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-6">
                <span>🎓</span>
                <span>Preparación Especializada</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Test de Diagnóstico TOEFL iBT
              </h1>
              
              <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
                Descubre en qué punto te encuentras para alcanzar tu puntuación objetivo en el TOEFL.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Enfoque académico</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>10-15 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Recomendación de curso</span>
                </div>
              </div>
            </div>

            <ToeflLevelTestInteractive />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">
                  Sobre el examen TOEFL iBT
                </h2>
                <p className="text-slate-600 mb-4">
                  El TOEFL iBT mide tu capacidad para utilizar y comprender el inglés a nivel universitario. Evalúa cómo combinas tus habilidades de lectura, audición, habla y escritura para realizar tareas académicas.
                </p>
                <p className="text-slate-600">
                  Nuestros cursos de 36 semanas están diseñados para llevarte desde tu nivel actual hasta la maestría necesaria para obtener puntuaciones competitivas (80-110+).
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4">Estructura del Curso</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 p-1 rounded">✓</span>
                    <span>36 semanas de contenido</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 p-1 rounded">✓</span>
                    <span>Enfoque en las 4 destrezas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 p-1 rounded">✓</span>
                    <span>Simulacros de examen reales</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 p-1 rounded">✓</span>
                    <span>Feedback personalizado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400">
            © 2026 Focus English. Todos los derechos reservados. TOEFL iBT es una marca registrada de ETS.
          </p>
        </div>
      </footer>
    </>
  );
}
