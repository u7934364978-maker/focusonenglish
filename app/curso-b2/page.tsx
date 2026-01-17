import Link from 'next/link';
import { B2_FULL_COURSE, ALL_MODULES } from '@/lib/course-data-b2';

export const metadata = {
  title: 'B2 Exam Preparation Course - Focus English',
  description: 'Complete B2 First (FCE) preparation course with interactive exercises, voice recording, pronunciation evaluation, and comprehensive practice.',
};

export default function B2ExamPrepCoursePage() {
  const course = B2_FULL_COURSE;
  const modules = ALL_MODULES;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2di0ybDEzLjUzNCA0LjU3MUwzNiAyM3YtMmgtMnYxMGgydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0ydi0yaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydi0yaDJ6bTAgMTRoMnYyaC0ydi0yem0tMiAyaC0ydi0yaDF2MWgxdjF6bS00LTJoLTJ2LTJoMXYxaDF2MXptMTAtOGgtMnYtMmgydjJ6bS00LTJoLTJ2LTJoMnYyem0tNCAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30 shadow-lg">
              🎓 B2 First (FCE) Preparation
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
              B2 Exam Preparation Course
            </h1>
            <p className="text-2xl mb-10 opacity-95 max-w-3xl mx-auto drop-shadow-md">
              Complete interactive course following Cambridge English specifications
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="bg-white/25 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/30 shadow-xl hover:bg-white/30 transition-all">
                <div className="text-3xl font-bold">4 Skills</div>
                <div className="text-sm opacity-90">Reading, Writing, Listening, Speaking</div>
              </div>
            </div>
            <Link
              href="/curso-b2/leccion/b2-m1-l1"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-600 rounded-2xl font-black text-xl hover:bg-amber-50 hover:scale-105 transition-all shadow-2xl hover:shadow-amber-500/50"
            >
              <span>Start First Lesson</span>
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
              Course Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to succeed in your B2 exam
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎤</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Voice Recording</h3>
              <p className="text-slate-600 leading-relaxed">
                Record your speaking exercises with live transcription and playback. Practice until you're confident.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 border-2 border-amber-200 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Pronunciation Evaluation</h3>
              <p className="text-slate-600 leading-relaxed">
                Get instant feedback on your pronunciation with detailed word-by-word analysis and improvement suggestions.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-peach-50 to-white rounded-2xl p-8 border-2 border-peach-200 shadow-lg hover:shadow-2xl hover:border-peach-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎧</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Listening Exercises</h3>
              <p className="text-slate-600 leading-relaxed">
                Authentic listening materials with comprehension questions and transcripts to improve your listening skills.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-coral-50 to-white rounded-2xl p-8 border-2 border-coral-200 shadow-lg hover:shadow-2xl hover:border-coral-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">✍️</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Writing Practice</h3>
              <p className="text-slate-600 leading-relaxed">
                Guided writing exercises with detailed rubrics, tips, and example responses for all writing types.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-rose-50 to-white rounded-2xl p-8 border-2 border-rose-200 shadow-lg hover:shadow-2xl hover:border-rose-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Reading Comprehension</h3>
              <p className="text-slate-600 leading-relaxed">
                Authentic texts with vocabulary help and comprehension questions to build your reading skills.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-200 shadow-lg hover:shadow-2xl hover:border-yellow-400 transition-all hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📝</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Grammar & Vocabulary</h3>
              <p className="text-slate-600 leading-relaxed">
                Detailed explanations, examples, and practice exercises for all B2 grammar points and vocabulary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
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
              <div key={module.id} className="group bg-white rounded-3xl p-10 border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-orange-300 transition-all">
                {/* Module Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-5 mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-red-500 text-white flex items-center justify-center font-black text-3xl shadow-lg">
                      {module.number}
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-slate-900 mb-1">{module.title}</h3>
                      <p className="text-slate-600 text-lg">{module.lessons.length} lessons</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">{module.description}</p>
                </div>

                {/* Module Content Preview */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-300 shadow-md hover:shadow-lg transition-all">
                    <h4 className="text-base font-black text-orange-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📖</span>
                      <span>Topics</span>
                    </h4>
                    <ul className="space-y-2">
                      {module.topics.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="text-sm text-orange-800 flex items-start gap-2">
                          <span className="text-orange-500 font-bold mt-0.5">•</span>
                          <span className="font-medium">{topic}</span>
                        </li>
                      ))}
                      {module.topics.length > 3 && (
                        <li className="text-sm text-orange-700 font-bold">+ {module.topics.length - 3} more</li>
                      )}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border-2 border-amber-300 shadow-md hover:shadow-lg transition-all">
                    <h4 className="text-base font-black text-amber-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📝</span>
                      <span>Grammar</span>
                    </h4>
                    <ul className="space-y-2">
                      {module.grammar.slice(0, 3).map((grammar, idx) => (
                        <li key={idx} className="text-sm text-amber-800 flex items-start gap-2">
                          <span className="text-amber-500 font-bold mt-0.5">•</span>
                          <span className="font-medium">{grammar}</span>
                        </li>
                      ))}
                      {module.grammar.length > 3 && (
                        <li className="text-sm text-amber-700 font-bold">+ {module.grammar.length - 3} more</li>
                      )}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-2 border-red-300 shadow-md hover:shadow-lg transition-all">
                    <h4 className="text-base font-black text-red-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">💬</span>
                      <span>Vocabulary</span>
                    </h4>
                    <ul className="space-y-2">
                      {module.vocabulary.slice(0, 3).map((vocab, idx) => (
                        <li key={idx} className="text-sm text-red-800 flex items-start gap-2">
                          <span className="text-red-500 font-bold mt-0.5">•</span>
                          <span className="font-medium">{vocab}</span>
                        </li>
                      ))}
                      {module.vocabulary.length > 3 && (
                        <li className="text-sm text-red-700 font-bold">+ {module.vocabulary.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Lessons List */}
                <div className="space-y-4">
                  {module.lessons.map((lesson, lessonIdx) => (
                    <Link
                      key={lesson.id}
                      href={`/curso-b2/leccion/${lesson.id}`}
                      className="block bg-gradient-to-r from-white to-orange-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-orange-400 hover:shadow-xl transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 transition-transform">
                            {lessonIdx + 1}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-black text-lg text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                              {lesson.title}
                            </h5>
                            <p className="text-sm text-slate-600 font-medium">
                              {lesson.exercises.length} exercises
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex gap-2">
                            {[...new Set(lesson.exercises.map(e => e.type))].slice(0, 4).map(type => (
                              <span
                                key={type}
                                className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-bold border border-orange-200"
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
                          <div className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl group-hover:from-orange-700 group-hover:to-red-700 transition-all text-sm font-black shadow-lg">
                            Start →
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Practice Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              🎓 Cambridge B2 First (FCE) Exam Practice
            </h2>
            <p className="text-xl text-slate-600">
              Full mock exams to prepare you for the real thing
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 border-2 border-amber-300 shadow-2xl">
            <div>
              <h3 className="font-black text-amber-900 mb-6 text-center text-2xl">Exam Parts:</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {['Reading & Use of English', 'Writing', 'Listening', 'Speaking'].map((part, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="font-black text-amber-900 text-lg">{part}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/curso-b2/leccion/b2-m1-l6"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-2xl font-black text-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Start with Mock Exam</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-sm text-slate-600 mt-4 font-medium">Practice with comprehensive mock exams</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-16 text-white overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2di0ybDEzLjUzNCA0LjU3MUwzNiAyM3YtMmgtMnYxMGgydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0yaC0ydi0yaC0ydi0yaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydi0yaDJ6bTAgMTRoMnYyaC0ydi0yem0tMiAyaC0ydi0yaDF2MWgxdjF6bS00LTJoLTJ2LTJoMXYxaDF2MXptMTAtOGgtMnYtMmgydjJ6bS00LTJoLTJ2LTJoMnYyem0tNCAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-black mb-6 drop-shadow-lg">Ready to Start?</h2>
              <p className="text-2xl mb-10 opacity-95">
                Begin your B2 exam preparation journey with our comprehensive interactive course
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/curso-b2/leccion/b2-m1-l1"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 rounded-2xl font-black text-xl hover:bg-orange-50 hover:scale-105 transition-all shadow-2xl"
                >
                  <span>Start First Lesson</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/diagnostico"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white/20 backdrop-blur-md text-white border-2 border-white rounded-2xl font-black text-xl hover:bg-white/30 transition-all"
                >
                  <span>Take Level Test First</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
