import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test de Nivel de Inglés Gratuito",
  description: "Evalúa tu nivel de inglés actual con nuestro test de diagnóstico gratuito. Descubre qué curso se adapta mejor a tus necesidades y objetivos.",
  keywords: ["test de nivel inglés", "evaluación inglés", "diagnóstico inglés", "nivel de inglés", "test gratuito inglés"],
};

export default function DiagnosticoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-6">
              <span>📊</span>
              <span>Test de Nivel Gratuito</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
              Descubre Tu Nivel de Inglés
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Evalúa tu nivel actual con nuestro test de diagnóstico gratuito y recibe recomendaciones personalizadas de cursos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center bg-violet-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-700 transition-colors">
                Comenzar Test Ahora
              </button>
              <Link
                href="/cursos-especializados"
                className="inline-flex items-center justify-center bg-white text-violet-600 border-2 border-violet-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-50 transition-colors"
              >
                Ver Cursos Disponibles
              </Link>
            </div>
          </div>
        </section>

        {/* Test Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              ¿Qué incluye el test?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-200">
                <div className="w-16 h-16 rounded-xl bg-violet-600 flex items-center justify-center text-white text-2xl font-bold mb-6">
                  📝
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Gramática y Vocabulario
                </h3>
                <p className="text-slate-700">
                  Evaluamos tu conocimiento de estructuras gramaticales y amplitud de vocabulario según el Marco Común Europeo (CEFR).
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-6">
                  👂
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Comprensión Auditiva
                </h3>
                <p className="text-slate-700">
                  Medimos tu capacidad para entender conversaciones y diálogos en diferentes contextos y velocidades.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200">
                <div className="w-16 h-16 rounded-xl bg-emerald-600 flex items-center justify-center text-white text-2xl font-bold mb-6">
                  📖
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Comprensión Lectora
                </h3>
                <p className="text-slate-700">
                  Evaluamos tu habilidad para comprender textos de diferentes niveles de complejidad y temáticas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              ¿Cómo funciona?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-black text-lg flex-shrink-0">
                  1
                </div>
                <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Responde las preguntas</h3>
                  <p className="text-slate-600">El test dura aproximadamente 15-20 minutos. Responde con honestidad para obtener resultados precisos.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-black text-lg flex-shrink-0">
                  2
                </div>
                <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Recibe tu nivel CEFR</h3>
                  <p className="text-slate-600">Obtendrás tu nivel según el Marco Común Europeo: A1, A2, B1, B2, C1 o C2.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-black text-lg flex-shrink-0">
                  3
                </div>
                <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Recomendaciones personalizadas</h3>
                  <p className="text-slate-600">Te sugeriremos el curso más adecuado según tu nivel y objetivos específicos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Levels Reference */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              Niveles según Marco Común Europeo (CEFR)
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-black flex-shrink-0">
                  A1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Principiante</h3>
                  <p className="text-sm text-slate-600">Puedes usar expresiones básicas y presentarte. Comprendes frases sencillas.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-black flex-shrink-0">
                  A2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Elemental</h3>
                  <p className="text-sm text-slate-600">Puedes comunicarte en situaciones cotidianas simples y describir tu entorno.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500 to-lime-500 flex items-center justify-center text-white font-black flex-shrink-0">
                  B1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Intermedio</h3>
                  <p className="text-sm text-slate-600">Puedes manejar situaciones durante viajes y expresar opiniones sobre temas conocidos.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-black flex-shrink-0">
                  B2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Intermedio Alto</h3>
                  <p className="text-sm text-slate-600">Puedes interactuar con fluidez y comprender textos complejos sobre temas especializados.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-black flex-shrink-0">
                  C1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Avanzado</h3>
                  <p className="text-sm text-slate-600">Puedes expresarte con fluidez y usar el idioma de forma flexible en ámbitos sociales, académicos y profesionales.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black flex-shrink-0">
                  C2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Maestría</h3>
                  <p className="text-sm text-slate-600">Puedes comprender y expresarte con total fluidez, incluso en situaciones complejas que requieren matices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-violet-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black mb-6">
              ¿Listo para descubrir tu nivel?
            </h2>
            <p className="text-xl mb-8 text-violet-100">
              El test es completamente gratuito y solo te tomará 15-20 minutos.
            </p>
            <button className="inline-flex items-center justify-center bg-white text-violet-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-50 transition-colors">
              Comenzar Test de Nivel →
            </button>
            <p className="mt-6 text-sm text-violet-200">
              No es necesario registrarse para realizar el test
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400">
            © 2026 Focus English. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
