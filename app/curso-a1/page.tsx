import Link from 'next/link';
import { A1_COURSE_CONFIG, A1_COURSE_MODULES } from '@/lib/course-data-a1-full';

export const metadata = {
  title: 'Curso A1 Inglés Gratis - Focus English',
  description: 'Curso completo de inglés nivel A1 (principiante) GRATIS. Aprende inglés desde cero con ejercicios interactivos, grabación de voz y seguimiento de progreso. Sin registro requerido.',
  keywords: 'curso inglés A1, inglés principiante, aprender inglés gratis, Cambridge KET, inglés básico',
};

export default function A1CoursePageFull() {
  const course = A1_COURSE_CONFIG;
  const modules = A1_COURSE_MODULES;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2di0ybDEzLjUzNCA0LjU3MUwzNiAyM3YtMmgtMnYxMGgydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0ydi0yaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydi0yaDJ6bTAgMTRoMnYyaC0ydi0yem0tMiAyaC0ydi0yaDF2MWgxdjF6bS00LTJoLTJ2LTJoMXYxaDF2MXptMTAtOGgtMnYtMmgydjJ6bS00LTJoLTJ2LTJoMnYyem0tNCAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30 shadow-lg">
              🎓 Nivel A1 - Principiante (Beginner) ✨ CURSO GRATIS
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
              Curso de Inglés A1 Gratis
            </h1>
            <p className="text-2xl mb-10 opacity-95 max-w-3xl mx-auto drop-shadow-md">
              Aprende inglés desde cero con ejercicios interactivos siguiendo el Marco Común Europeo (CEFR)
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="bg-white/25 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/30 shadow-xl hover:bg-white/30 transition-all">
                <div className="text-3xl font-bold">{course.totalLessons} Lecciones</div>
                <div className="text-sm opacity-90">{course.totalDuration}</div>
              </div>
              <div className="bg-white/25 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/30 shadow-xl hover:bg-white/30 transition-all">
                <div className="text-3xl font-bold">100% GRATIS</div>
                <div className="text-sm opacity-90">Sin registro ni tarjeta</div>
              </div>
            </div>
            <Link
              href="/curso-a1/leccion/a1-m1-l1"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-green-600 rounded-2xl font-black text-xl hover:bg-green-50 hover:scale-105 transition-all shadow-2xl hover:shadow-green-500/50"
            >
              <span>Empezar Primera Lección</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              Características del Curso
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Todo lo que necesitas para aprender inglés desde cero
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-2xl hover:border-green-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎤</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Grabación de Voz</h3>
              <p className="text-slate-600 leading-relaxed">
                Graba tus ejercicios de speaking con transcripción en vivo y reproducción. Practica hasta que te sientas seguro.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-200 shadow-lg hover:shadow-2xl hover:border-emerald-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Evaluación de Pronunciación</h3>
              <p className="text-slate-600 leading-relaxed">
                Recibe feedback instantáneo sobre tu pronunciación con análisis detallado palabra por palabra y sugerencias de mejora.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border-2 border-teal-200 shadow-lg hover:shadow-2xl hover:border-teal-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎧</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Ejercicios de Listening</h3>
              <p className="text-slate-600 leading-relaxed">
                Materiales de listening auténticos con preguntas de comprensión y transcripciones para mejorar tu escucha.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 border-2 border-cyan-200 shadow-lg hover:shadow-2xl hover:border-cyan-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">✍️</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Práctica de Writing</h3>
              <p className="text-slate-600 leading-relaxed">
                Ejercicios de escritura guiados con rúbricas detalladas, tips y respuestas de ejemplo para todos los tipos de writing.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-lime-50 to-white rounded-2xl p-8 border-2 border-lime-200 shadow-lg hover:shadow-2xl hover:border-lime-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Comprensión Lectora</h3>
              <p className="text-slate-600 leading-relaxed">
                Textos auténticos con ayuda de vocabulario y preguntas de comprensión para desarrollar tu lectura en inglés.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-200 shadow-lg hover:shadow-2xl hover:border-yellow-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📝</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Gramática y Vocabulario</h3>
              <p className="text-slate-600 leading-relaxed">
                Explicaciones detalladas, ejemplos y ejercicios prácticos para todos los puntos gramaticales y vocabulario del nivel A1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              {course.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {course.description}
            </p>
          </div>

          {/* Modules */}
          <div className="space-y-12">
            {modules.map((module, moduleIdx) => (
              <div key={module.id} className="group bg-white rounded-3xl p-10 border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-green-300 transition-all">
                {/* Module Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-5 mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white flex items-center justify-center font-black text-3xl shadow-lg">
                      {module.number}
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-slate-900 mb-1">{module.title}</h3>
                      <p className="text-slate-600 text-lg">{module.lessons.length} lecciones • {module.duration}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">{module.description}</p>
                </div>

                {/* Module Content Preview */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-300 shadow-md hover:shadow-lg transition-all">
                    <h4 className="text-base font-black text-green-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📖</span>
                      <span>Topics</span>
                    </h4>
                    <ul className="space-y-2">
                      {module.topics.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="text-sm text-green-800 flex items-start gap-2">
                          <span className="text-green-500 font-bold mt-0.5">•</span>
                          <span className="font-medium">{topic}</span>
                        </li>
                      ))}
                      {module.topics.length > 3 && (
                        <li className="text-sm text-green-700 font-bold">+ {module.topics.length - 3} más</li>
                      )}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border-2 border-emerald-300 shadow-md hover:shadow-lg transition-all">
                    <h4 className="text-base font-black text-emerald-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📝</span>
                      <span>Gramática</span>
                    </h4>
                    <ul className="space-y-2">
                      {module.grammar.slice(0, 3).map((grammar, idx) => (
                        <li key={idx} className="text-sm text-emerald-800 flex items-start gap-2">
                          <span className="text-emerald-500 font-bold mt-0.5">•</span>
                          <span className="font-medium">{grammar}</span>
                        </li>
                      ))}
                      {module.grammar.length > 3 && (
                        <li className="text-sm text-emerald-700 font-bold">+ {module.grammar.length - 3} más</li>
                      )}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border-2 border-teal-300 shadow-md hover:shadow-lg transition-all">
                    <h4 className="text-base font-black text-teal-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">💬</span>
                      <span>Vocabulario</span>
                    </h4>
                    <ul className="space-y-2">
                      {module.vocabulary.slice(0, 3).map((vocab, idx) => (
                        <li key={idx} className="text-sm text-teal-800 flex items-start gap-2">
                          <span className="text-teal-500 font-bold mt-0.5">•</span>
                          <span className="font-medium">{vocab}</span>
                        </li>
                      ))}
                      {module.vocabulary.length > 3 && (
                        <li className="text-sm text-teal-700 font-bold">+ {module.vocabulary.length - 3} más</li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Lessons List */}
                {module.lessons.length > 0 ? (
                  <div className="space-y-4">
                    {module.lessons.map((lesson, lessonIdx) => (
                      <Link
                        key={lesson.id}
                        href={`/curso-a1/leccion/${lesson.id}`}
                        className="block bg-gradient-to-r from-white to-green-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-green-400 hover:shadow-xl transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 text-white flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 transition-transform">
                              {lessonIdx + 1}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-black text-lg text-slate-900 group-hover:text-green-600 transition-colors mb-1">
                                {lesson.title}
                              </h5>
                              <p className="text-sm text-slate-600 font-medium">
                                {lesson.exercises.length} ejercicios
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex gap-2">
                              {[...new Set(lesson.exercises.map(e => e.type))].slice(0, 4).map(type => (
                                <span
                                  key={type}
                                  className="px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-bold border border-green-200"
                                  title={type}
                                >
                                  {type === 'reading' && '📖'}
                                  {type === 'writing' && '✍️'}
                                  {type === 'listening' && '🎧'}
                                  {type === 'speaking' && '🎤'}
                                  {type === 'grammar' && '📝'}
                                  {type === 'vocabulary' && '💬'}
                                  {type === 'pronunciation' && '🗣️'}
                                </span>
                              ))}
                            </div>
                            <div className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl group-hover:from-green-700 group-hover:to-teal-700 transition-all text-sm font-black shadow-lg">
                              Empezar →
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 text-center">
                    <div className="text-5xl mb-4">🚧</div>
                    <p className="text-lg font-bold text-amber-900">Lecciones en desarrollo</p>
                    <p className="text-sm text-amber-700 mt-2">Este módulo estará disponible próximamente</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEFR Descriptors Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              🎓 Nivel A1 según Marco CEFR
            </h2>
            <p className="text-xl text-slate-600">
              Al finalizar este curso podrás:
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 border-2 border-emerald-300 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300">
                <h3 className="font-black text-green-900 mb-3 text-xl flex items-center gap-2">
                  <span className="text-3xl">🎧</span>
                  Listening (Escuchar)
                </h3>
                <p className="text-green-800 leading-relaxed">{course.cefrDescriptors.listening}</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border-2 border-emerald-300">
                <h3 className="font-black text-emerald-900 mb-3 text-xl flex items-center gap-2">
                  <span className="text-3xl">📖</span>
                  Reading (Leer)
                </h3>
                <p className="text-emerald-800 leading-relaxed">{course.cefrDescriptors.reading}</p>
              </div>

              <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border-2 border-teal-300">
                <h3 className="font-black text-teal-900 mb-3 text-xl flex items-center gap-2">
                  <span className="text-3xl">💬</span>
                  Speaking (Hablar)
                </h3>
                <p className="text-teal-800 leading-relaxed">{course.cefrDescriptors.spokenInteraction}</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-6 border-2 border-cyan-300">
                <h3 className="font-black text-cyan-900 mb-3 text-xl flex items-center gap-2">
                  <span className="text-3xl">✍️</span>
                  Writing (Escribir)
                </h3>
                <p className="text-cyan-800 leading-relaxed">{course.cefrDescriptors.writing}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-16 text-white overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2di0ybDEzLjUzNCA0LjU3MUwzNiAyM3YtMmgtMnYxMGgydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0ydi0yaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydi0yaDJ6bTAgMTRoMnYyaC0ydi0yem0tMiAyaC0ydi0yaDF2MWgxdjF6bS00LTJoLTJ2LTJoMXYxaDF2MXptMTAtOGgtMnYtMmgydjJ6bS00LTJoLTJ2LTJoMnYyem0tNCAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-black mb-6 drop-shadow-lg">¿Listo para Empezar?</h2>
              <p className="text-2xl mb-10 opacity-95">
                Comienza tu viaje en el aprendizaje del inglés con nuestro curso completo e interactivo
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/curso-a1/leccion/a1-m1-l1"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-green-600 rounded-2xl font-black text-xl hover:bg-green-50 hover:scale-105 transition-all shadow-2xl"
                >
                  <span>Empezar Primera Lección</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/diagnostico"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white/20 backdrop-blur-md text-white border-2 border-white rounded-2xl font-black text-xl hover:bg-white/30 transition-all"
                >
                  <span>Hacer Test de Nivel Primero</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
