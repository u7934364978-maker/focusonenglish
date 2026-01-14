import Link from 'next/link';
import { B2_EXAM_PREP_COURSE, MODULE_1_LESSONS } from '@/lib/course-data-b2';

export const metadata = {
  title: 'B2 Exam Preparation Course - Focus English',
  description: 'Complete B2 First (FCE) preparation course with interactive exercises, voice recording, pronunciation evaluation, and comprehensive practice.',
};

export default function B2ExamPrepCoursePage() {
  const course = B2_EXAM_PREP_COURSE;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-bold mb-4">
              🎓 B2 First (FCE) Preparation
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              B2 Exam Preparation Course
            </h1>
            <p className="text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Complete interactive course following Cambridge English specifications
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                <div className="text-3xl font-bold">{course.duration}</div>
                <div className="text-sm opacity-90">Duration</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                <div className="text-3xl font-bold">{course.lessons.length}</div>
                <div className="text-sm opacity-90">Lessons</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                <div className="text-3xl font-bold">4 Skills</div>
                <div className="text-sm opacity-90">Reading, Writing, Listening, Speaking</div>
              </div>
            </div>
            <Link
              href="/curso-b2/leccion/b2-m1-l1"
              className="inline-block px-8 py-4 bg-white text-amber-600 rounded-xl font-bold text-lg hover:bg-amber-50 transition-all shadow-2xl"
            >
              Start First Lesson →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-12">
            Course Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-lg">
              <div className="text-5xl mb-4">🎤</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Voice Recording</h3>
              <p className="text-slate-600">
                Record your speaking exercises with live transcription and playback. Practice until you're confident.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-lg">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pronunciation Evaluation</h3>
              <p className="text-slate-600">
                Get instant feedback on your pronunciation with detailed word-by-word analysis and improvement suggestions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg">
              <div className="text-5xl mb-4">🎧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Listening Exercises</h3>
              <p className="text-slate-600">
                Authentic listening materials with comprehension questions and transcripts to improve your listening skills.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-amber-200 shadow-lg">
              <div className="text-5xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Writing Practice</h3>
              <p className="text-slate-600">
                Guided writing exercises with detailed rubrics, tips, and example responses for all writing types.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-rose-200 shadow-lg">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Reading Comprehension</h3>
              <p className="text-slate-600">
                Authentic texts with vocabulary help and comprehension questions to build your reading skills.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-indigo-200 shadow-lg">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Grammar & Vocabulary</h3>
              <p className="text-slate-600">
                Detailed explanations, examples, and practice exercises for all B2 grammar points and vocabulary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              {course.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {course.description}
            </p>
          </div>

          {/* Topics, Grammar, Vocabulary */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span>📖</span>
                <span>Topics Covered</span>
              </h3>
              <ul className="space-y-2">
                {course.topics.map((topic, idx) => (
                  <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                <span>📝</span>
                <span>Grammar Points</span>
              </h3>
              <ul className="space-y-2">
                {course.grammar.map((grammar, idx) => (
                  <li key={idx} className="text-sm text-green-800 flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>{grammar}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span>💬</span>
                <span>Vocabulary Focus</span>
              </h3>
              <ul className="space-y-2">
                {course.vocabulary.map((vocab, idx) => (
                  <li key={idx} className="text-sm text-purple-800 flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>{vocab}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lessons List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Course Lessons</h3>
            {MODULE_1_LESSONS.map((lesson, idx) => (
              <Link
                key={lesson.id}
                href={`/curso-b2/leccion/${lesson.id}`}
                className="block bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {lesson.title}
                        </h4>
                        <p className="text-sm text-slate-600">{lesson.duration} minutes • {lesson.exercises.length} exercises</p>
                      </div>
                    </div>
                    <p className="text-slate-700 mb-3">{lesson.description}</p>
                    
                    {/* Objectives */}
                    <details>
                      <summary className="cursor-pointer text-sm font-semibold text-blue-700 hover:text-blue-800">
                        View Learning Objectives
                      </summary>
                      <ul className="mt-2 space-y-1">
                        {lesson.objectives.map((objective, objIdx) => (
                          <li key={objIdx} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-blue-500 mt-0.5">✓</span>
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                  
                  <div className="ml-4">
                    <div className="px-4 py-2 bg-blue-600 text-white rounded-lg group-hover:bg-blue-700 transition-colors font-bold">
                      Start Lesson →
                    </div>
                  </div>
                </div>

                {/* Exercise Types Preview */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[...new Set(lesson.exercises.map(e => e.type))].map(type => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-purple-900 mb-3">🚀 More Lessons Coming Soon!</h3>
            <p className="text-purple-800 mb-4">
              This is Module 1 with 2 complete lessons. Modules 2 and 3 are currently in development and will be added soon with more advanced content covering:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-purple-800">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">•</span>
                <span>Module 2: Speculation, Hypotheses & Argumentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">•</span>
                <span>Module 3: Advanced Communication & Style</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">•</span>
                <span>Full Mock Exams</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">•</span>
                <span>Speaking Interview Practice</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Exam Practice Section */}
      {course.examPractice && (
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4">
                🎓 Cambridge B2 First (FCE) Exam Practice
              </h2>
              <p className="text-xl text-slate-600">
                Full mock exams to prepare you for the real thing
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-amber-200 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Exam Duration:</h3>
                  <p className="text-slate-700">{course.examPractice.examDuration} minutes total</p>
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Mock Exam Available:</h3>
                  <p className="text-slate-700">{course.examPractice.mockExam ? 'Yes, after completing all lessons' : 'Coming soon'}</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-amber-900 mb-3">Exam Parts:</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {course.examPractice.parts.map((part, idx) => (
                    <div key={idx} className="bg-amber-50 rounded-lg p-4 border border-amber-200 text-center">
                      <div className="font-bold text-amber-900">{part}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  disabled
                  className="px-8 py-4 bg-slate-300 text-slate-600 rounded-xl font-bold text-lg cursor-not-allowed"
                >
                  Mock Exam (Unlocks after Module 1)
                </button>
                <p className="text-sm text-slate-600 mt-2">Complete all lessons to unlock the full mock exam</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-black mb-4">Ready to Start?</h2>
            <p className="text-xl mb-8 opacity-90">
              Begin your B2 exam preparation journey with our comprehensive interactive course
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/curso-b2/leccion/b2-m1-l1"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl"
              >
                Start First Lesson
              </Link>
              <Link
                href="/diagnostico"
                className="px-8 py-4 bg-white/20 backdrop-blur text-white border-2 border-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all"
              >
                Take Level Test First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
