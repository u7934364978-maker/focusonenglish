import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificaciones Oficiales de Inglés - Cambridge, TOEFL, IELTS",
  description: "Prepárate para las certificaciones oficiales más reconocidas: Cambridge B2 First, C1 Advanced, TOEFL iBT e IELTS Academic. Cursos especializados con estrategias probadas.",
  keywords: ["certificaciones inglés", "Cambridge B2", "Cambridge C1", "TOEFL", "IELTS", "exámenes oficiales inglés", "preparación exámenes"],
};

export default function CertificacionesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
                <span>🎓</span>
                <span>Certificaciones Oficiales</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-black text-slate-900 mb-6">
                Obtén Tu Certificación{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Oficial de Inglés
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Cursos especializados para todos los niveles (A1 a C1) siguiendo los criterios de evaluación de los exámenes más reconocidos internacionalmente: Cambridge, TOEFL e IELTS
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/diagnostico"
                  className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-colors"
                >
                  Hacer Test de Nivel Gratis
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-colors"
                >
                  Consulta Gratuita
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Level Info Banner */}
        <section className="py-8 bg-gradient-to-r from-slate-100 to-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Preparación para Todos los Niveles
              </h2>
              <p className="text-slate-600">
                Desde nivel básico A1 hasta avanzado C1, ofrecemos cursos especializados para cada certificación
              </p>
            </div>
          </div>
        </section>

        {/* Certification Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* A1 Level Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white font-black text-xl">
                  A1
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-900">Nivel Básico</h2>
                  <p className="text-slate-600">Para principiantes y estudiantes que comienzan</p>
                </div>
              </div>

              {/* Cambridge A1 Movers / YLE Starters */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-xl border-2 border-amber-200 overflow-hidden hover:shadow-2xl transition-shadow max-w-2xl mx-auto">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white font-black text-2xl">
                      A1
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold">
                      BÁSICO
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-900 mb-4">
                    Cambridge A1 Movers / YLE Starters
                  </h3>
                  
                  <p className="text-slate-700 mb-6">
                    Certificación de nivel básico ideal para estudiantes que están comenzando su aprendizaje del inglés. Reconocida internacionalmente por Cambridge Assessment.
                  </p>

                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-4">Estructura del Examen:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1">📖</span>
                        <div>
                          <span className="font-bold">Reading & Writing</span>
                          <p className="text-sm text-slate-600">5 partes - 30 minutos - Comprensión básica</p>
                          <p className="text-xs text-slate-500 mt-1">• Nombres, palabras simples, frases cortas</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1">🎧</span>
                        <div>
                          <span className="font-bold">Listening</span>
                          <p className="text-sm text-slate-600">4 partes - 20 minutos - Conversaciones simples</p>
                          <p className="text-xs text-slate-500 mt-1">• Instrucciones y conversaciones cotidianas básicas</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-600 mt-1">🗣️</span>
                        <div>
                          <span className="font-bold">Speaking</span>
                          <p className="text-sm text-slate-600">3 partes - 5-7 minutos - Interacción básica</p>
                          <p className="text-xs text-slate-500 mt-1">• Presentación personal, responder preguntas simples</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-white rounded-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-bold text-slate-900 mb-2">Duración del curso:</p>
                        <p className="text-2xl font-black text-amber-600">8 semanas</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 mb-2">Habilidades clave:</p>
                        <p className="text-sm text-slate-600">Vocabulario básico, gramática elemental, conversación simple</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-amber-100 rounded-xl border border-amber-300">
                    <h4 className="font-bold text-amber-900 mb-3">¿Qué aprenderás?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-amber-800">
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600">✓</span>
                        <span>Presentarte en inglés</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600">✓</span>
                        <span>Números y colores</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600">✓</span>
                        <span>Pedir información básica</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600">✓</span>
                        <span>Describir objetos simples</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600">✓</span>
                        <span>Entender instrucciones</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600">✓</span>
                        <span>Hablar de tu familia</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/cursos/examenes/a1"
                    className="block w-full text-center bg-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition-colors"
                  >
                    Ver Programa Completo →
                  </Link>
                </div>
              </div>
            </div>

            {/* B2 and C1 Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-black text-xl">
                  B2+
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-900">Niveles Intermedio y Avanzado</h2>
                  <p className="text-slate-600">Para estudiantes con base sólida de inglés</p>
                </div>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Cambridge B2 First */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-xl border-2 border-emerald-200 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white font-black text-2xl">
                      B2
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold">
                      MÁS POPULAR
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-black text-slate-900 mb-4">
                    Cambridge B2 First (FCE)
                  </h2>
                  
                  <p className="text-slate-700 mb-6">
                    Certificación de nivel intermedio-alto reconocida por miles de empresas y universidades en todo el mundo.
                  </p>

                  <div className="mb-8">
                    <h3 className="font-bold text-slate-900 mb-4">Estructura del Examen:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-1">📖</span>
                        <div>
                          <span className="font-bold">Reading & Use of English</span>
                          <p className="text-sm text-slate-600">7 partes - 75 minutos - 40% de la nota</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-1">✍️</span>
                        <div>
                          <span className="font-bold">Writing</span>
                          <p className="text-sm text-slate-600">2 partes - 80 minutos - 20% de la nota</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-1">🎧</span>
                        <div>
                          <span className="font-bold">Listening</span>
                          <p className="text-sm text-slate-600">4 partes - 40 minutos - 20% de la nota</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-1">🗣️</span>
                        <div>
                          <span className="font-bold">Speaking</span>
                          <p className="text-sm text-slate-600">4 partes - 14 minutos - 20% de la nota</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-white rounded-xl">
                    <p className="text-sm font-bold text-slate-900 mb-2">Duración del curso:</p>
                    <p className="text-2xl font-black text-emerald-600">12 semanas</p>
                  </div>

                  <Link
                    href="/cursos/examenes/b2"
                    className="block w-full text-center bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors"
                  >
                    Ver Programa Completo →
                  </Link>
                </div>
              </div>

              {/* Cambridge C1 Advanced */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-black text-2xl">
                      C1
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                      AVANZADO
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-black text-slate-900 mb-4">
                    Cambridge C1 Advanced (CAE)
                  </h2>
                  
                  <p className="text-slate-700 mb-6">
                    Certificación de nivel avanzado ideal para estudios universitarios de posgrado y puestos profesionales de alto nivel.
                  </p>

                  <div className="mb-8">
                    <h3 className="font-bold text-slate-900 mb-4">Estructura del Examen:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">📖</span>
                        <div>
                          <span className="font-bold">Reading & Use of English</span>
                          <p className="text-sm text-slate-600">8 partes - 90 minutos - 40% de la nota</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">✍️</span>
                        <div>
                          <span className="font-bold">Writing</span>
                          <p className="text-sm text-slate-600">2 partes - 90 minutos - 20% de la nota</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">🎧</span>
                        <div>
                          <span className="font-bold">Listening</span>
                          <p className="text-sm text-slate-600">4 partes - 40 minutos - 20% de la nota</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">🗣️</span>
                        <div>
                          <span className="font-bold">Speaking</span>
                          <p className="text-sm text-slate-600">4 partes - 15 minutos - 20% de la nota</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-white rounded-xl">
                    <p className="text-sm font-bold text-slate-900 mb-2">Duración del curso:</p>
                    <p className="text-2xl font-black text-blue-600">16 semanas</p>
                  </div>

                  <Link
                    href="/cursos/examenes/c1"
                    className="block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors"
                  >
                    Ver Programa Completo →
                  </Link>
                </div>
              </div>

              {/* TOEFL iBT */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl border-2 border-purple-200 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-lg">
                      iBT
                    </div>
                    <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold">
                      EE.UU.
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-black text-slate-900 mb-4">
                    TOEFL iBT
                  </h2>
                  
                  <p className="text-slate-700 mb-6">
                    Certificación académica estadounidense aceptada por más de 11,000 universidades en 150 países. Formato 100% online.
                  </p>

                  <div className="mb-8">
                    <h3 className="font-bold text-slate-900 mb-4">Estructura del Examen:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 mt-1">📖</span>
                        <div>
                          <span className="font-bold">Reading</span>
                          <p className="text-sm text-slate-600">3-4 pasajes - 54-72 minutos - 30 puntos</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 mt-1">🎧</span>
                        <div>
                          <span className="font-bold">Listening</span>
                          <p className="text-sm text-slate-600">5-7 audios - 41-57 minutos - 30 puntos</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 mt-1">🗣️</span>
                        <div>
                          <span className="font-bold">Speaking</span>
                          <p className="text-sm text-slate-600">4 tareas - 17 minutos - 30 puntos</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 mt-1">✍️</span>
                        <div>
                          <span className="font-bold">Writing</span>
                          <p className="text-sm text-slate-600">2 tareas - 50 minutos - 30 puntos</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-white rounded-xl">
                    <p className="text-sm font-bold text-slate-900 mb-2">Duración del curso:</p>
                    <p className="text-2xl font-black text-purple-600">12 semanas</p>
                  </div>

                  <Link
                    href="/cursos/examenes/b2"
                    className="block w-full text-center bg-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors"
                  >
                    Ver Programa Completo →
                  </Link>
                </div>
              </div>

              {/* IELTS Academic */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl border-2 border-red-200 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-black text-sm">
                      IELTS
                    </div>
                    <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold">
                      UK/AUS/CA
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-black text-slate-900 mb-4">
                    IELTS Academic
                  </h2>
                  
                  <p className="text-slate-700 mb-6">
                    Certificación británica reconocida por universidades en Reino Unido, Australia, Canadá y Nueva Zelanda. Sistema de bandas 0-9.
                  </p>

                  <div className="mb-8">
                    <h3 className="font-bold text-slate-900 mb-4">Estructura del Examen:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">🎧</span>
                        <div>
                          <span className="font-bold">Listening</span>
                          <p className="text-sm text-slate-600">4 secciones - 30 minutos + 10 min - Banda 0-9</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">📖</span>
                        <div>
                          <span className="font-bold">Reading</span>
                          <p className="text-sm text-slate-600">3 pasajes - 60 minutos - Banda 0-9</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">✍️</span>
                        <div>
                          <span className="font-bold">Writing</span>
                          <p className="text-sm text-slate-600">2 tareas - 60 minutos - Banda 0-9</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">🗣️</span>
                        <div>
                          <span className="font-bold">Speaking</span>
                          <p className="text-sm text-slate-600">3 partes - 11-14 minutos - Banda 0-9</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-white rounded-xl">
                    <p className="text-sm font-bold text-slate-900 mb-2">Duración del curso:</p>
                    <p className="text-2xl font-black text-red-600">12 semanas</p>
                  </div>

                  <Link
                    href="/cursos/examenes/b2"
                    className="block w-full text-center bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors"
                  >
                    Ver Programa Completo →
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">
              ¿Por Qué Prepararte Con Nosotros?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Enfoque Específico</h3>
                <p className="text-slate-600">
                  Estrategias adaptadas a cada tipo de examen, no un curso genérico de inglés.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Simulacros Reales</h3>
                <p className="text-slate-600">
                  Practica con exámenes de prueba cronometrados que replican el formato oficial.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Examinadores Certificados</h3>
                <p className="text-slate-600">
                  Tutores con experiencia como examinadores oficiales de Cambridge e IELTS.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Progreso Medible</h3>
                <p className="text-slate-600">
                  Evaluaciones semanales para medir tu avance y ajustar la preparación.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Garantía de Aprobado</h3>
                <p className="text-slate-600">
                  Si no apruebas, te devolvemos el 100% o repites el curso gratis.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Material Oficial</h3>
                <p className="text-slate-600">
                  Acceso a libros y recursos oficiales de Cambridge, ETS y British Council.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black mb-6">
              ¿Listo Para Obtener Tu Certificación?
            </h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Descubre tu nivel actual con nuestro test gratuito y recibe recomendaciones personalizadas sobre qué certificación es mejor para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostico"
                className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-colors"
              >
                Hacer Test de Nivel Gratis
              </Link>
              <Link
                href="/blog/preparar-examenes-oficiales"
                className="inline-flex items-center justify-center bg-emerald-700 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-800 transition-colors"
              >
                Leer Guía Completa
              </Link>
            </div>
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
