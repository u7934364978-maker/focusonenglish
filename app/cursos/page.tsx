import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos de Inglés por Niveles - A1, A2, B1, B2, C1, C2",
  description: "Cursos de inglés estructurados por niveles CEFR. Desde principiante (A1) hasta maestría (C2). Elige tu nivel y comienza tu aprendizaje hoy.",
  keywords: ["cursos inglés", "niveles inglés", "A1", "A2", "B1", "B2", "C1", "C2", "aprender inglés", "clases inglés"],
};

const COURSES = [
  {
    level: "A1",
    title: "Nivel Principiante",
    duration: "8 semanas",
    price: "€299",
    color: "amber",
    gradient: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-600",
    hoverBorder: "hover:border-amber-400",
    description: "Curso básico para estudiantes que comienzan desde cero",
    topics: [
      "Alfabeto y pronunciación básica",
      "Números, colores y formas",
      "Saludos y presentaciones",
      "Preguntas y respuestas simples",
      "Vocabulario cotidiano (familia, comida, casa)",
      "Presente simple y verbos básicos"
    ],
    skills: "Podrás presentarte, pedir información básica, entender instrucciones simples"
  },
  {
    level: "A2",
    title: "Nivel Elemental",
    duration: "10 semanas",
    price: "€349",
    color: "lime",
    gradient: "from-lime-500 to-green-500",
    bgGradient: "from-lime-50 to-green-50",
    borderColor: "border-lime-200",
    textColor: "text-lime-600",
    hoverBorder: "hover:border-lime-400",
    description: "Curso para estudiantes con conocimientos básicos del idioma",
    topics: [
      "Pasado simple y futuro básico",
      "Adjetivos comparativos y superlativos",
      "Conversaciones cotidianas",
      "Describir experiencias personales",
      "Vocabulario de viajes y compras",
      "Preposiciones de lugar y tiempo"
    ],
    skills: "Podrás comunicarte en situaciones cotidianas, hablar sobre experiencias pasadas"
  },
  {
    level: "B1",
    title: "Nivel Intermedio",
    duration: "12 semanas",
    price: "€399",
    color: "emerald",
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-400",
    description: "Curso intermedio para desarrollar fluidez conversacional",
    topics: [
      "Tiempos verbales complejos (perfecto, continuo)",
      "Modales y condicionales",
      "Expresión de opiniones y argumentos",
      "Vocabulario profesional básico",
      "Redacción de emails y cartas",
      "Comprensión de textos complejos"
    ],
    skills: "Podrás mantener conversaciones fluidas, entender textos complejos, escribir con claridad"
  },
  {
    level: "B2",
    title: "Nivel Intermedio-Alto",
    duration: "14 semanas",
    price: "€449",
    color: "blue",
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    hoverBorder: "hover:border-blue-400",
    badge: "Más Popular",
    description: "Curso avanzado para dominio del inglés en contextos profesionales",
    topics: [
      "Estructuras gramaticales avanzadas",
      "Vocabulario académico y profesional",
      "Presentaciones y debates",
      "Escritura formal (informes, ensayos)",
      "Comprensión de acentos variados",
      "Expresiones idiomáticas"
    ],
    skills: "Podrás trabajar en inglés, estudiar en universidades internacionales, debatir temas complejos"
  },
  {
    level: "C1",
    title: "Nivel Avanzado",
    duration: "16 semanas",
    price: "€499",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
    hoverBorder: "hover:border-purple-400",
    description: "Curso de dominio avanzado para contextos profesionales de alto nivel",
    topics: [
      "Precisión y sutileza en la expresión",
      "Vocabulario especializado por áreas",
      "Negociación y persuasión",
      "Redacción académica avanzada",
      "Análisis crítico de textos",
      "Comunicación intercultural"
    ],
    skills: "Podrás comunicarte con precisión en cualquier contexto, liderar reuniones internacionales"
  },
  {
    level: "C2",
    title: "Nivel Maestría",
    duration: "18 semanas",
    price: "€549",
    color: "rose",
    gradient: "from-rose-500 to-red-500",
    bgGradient: "from-rose-50 to-red-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-600",
    hoverBorder: "hover:border-rose-400",
    description: "Curso de maestría para perfección cercana al nivel nativo",
    topics: [
      "Dominio total del idioma",
      "Matices y connotaciones",
      "Literatura y cultura anglófona",
      "Escritura creativa y técnica",
      "Interpretación y traducción",
      "Expresión artística y retórica"
    ],
    skills: "Dominio prácticamente nativo del inglés en todos los contextos y registros"
  }
];

export default function CursosPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-6">
                <span>📚</span>
                <span>Cursos por Niveles</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-black text-slate-900 mb-6">
                Encuentra Tu{" "}
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Nivel Perfecto
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Cursos estructurados siguiendo el Marco Común Europeo de Referencia (CEFR). Desde principiante hasta maestría, encuentra el curso ideal para ti.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/diagnostico"
                  className="inline-flex items-center justify-center bg-violet-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-700 transition-colors"
                >
                  Descubre tu Nivel
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-violet-600 border-2 border-violet-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-50 transition-colors"
                >
                  Consulta Gratuita
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {COURSES.map((course) => (
                <div 
                  key={course.level}
                  className={`bg-gradient-to-br ${course.bgGradient} rounded-2xl shadow-xl border-2 ${course.borderColor} overflow-hidden ${course.hoverBorder} hover:shadow-2xl transition-all`}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-white font-black text-2xl`}>
                        {course.level}
                      </div>
                      {course.badge && (
                        <span className={`px-3 py-1 rounded-full bg-${course.color}-600 text-white text-xs font-bold`}>
                          {course.badge}
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-3xl font-black text-slate-900 mb-2">
                      {course.title}
                    </h2>
                    
                    <p className="text-slate-700 mb-6">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                      <div>
                        <p className="text-sm text-slate-600">Duración</p>
                        <p className="font-bold text-slate-900">{course.duration}</p>
                      </div>
                      <div className="h-8 w-px bg-slate-200"></div>
                      <div>
                        <p className="text-sm text-slate-600">Precio</p>
                        <p className={`font-black text-2xl ${course.textColor}`}>{course.price}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold text-slate-900 mb-3">Contenido del Curso:</h3>
                      <ul className="space-y-2">
                        {course.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className={`${course.textColor} mt-0.5`}>✓</span>
                            <span className="text-slate-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`mb-6 p-4 bg-white rounded-xl border border-${course.color}-200`}>
                      <p className="text-sm font-bold text-slate-900 mb-1">Al finalizar el curso:</p>
                      <p className="text-sm text-slate-600">{course.skills}</p>
                    </div>

                    <Link
                      href="/signup"
                      className={`block w-full text-center bg-gradient-to-r ${course.gradient} text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity`}
                    >
                      Inscribirme Ahora →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">
              ¿Por Qué Elegir Nuestros Cursos?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Metodología Probada</h3>
                <p className="text-slate-600">
                  Currículum estructurado siguiendo el Marco Común Europeo de Referencia para garantizar progreso efectivo.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Profesores Nativos</h3>
                <p className="text-slate-600">
                  Instructores certificados con experiencia en enseñanza de inglés como lengua extranjera.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Seguimiento Personalizado</h3>
                <p className="text-slate-600">
                  Evaluaciones continuas y feedback personalizado para maximizar tu progreso.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Plataforma 24/7</h3>
                <p className="text-slate-600">
                  Acceso ilimitado a materiales, ejercicios interactivos y recursos multimedia.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Certificado al Finalizar</h3>
                <p className="text-slate-600">
                  Recibe tu certificado oficial que acredita el nivel alcanzado según el CEFR.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Garantía de Satisfacción</h3>
                <p className="text-slate-600">
                  Si no estás satisfecho en las primeras 2 semanas, te devolvemos el 100% de tu inversión.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black mb-6">
              ¿No Estás Seguro de Tu Nivel?
            </h2>
            <p className="text-xl mb-8 text-violet-100 max-w-2xl mx-auto">
              Realiza nuestro test de nivel gratuito en 15 minutos y descubre qué curso es perfecto para ti.
            </p>
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center bg-white text-violet-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-50 transition-colors"
            >
              Hacer Test de Nivel Gratis
            </Link>
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
