'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

function PracticeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const category = searchParams.get('category');
  const exercise = searchParams.get('exercise');
  const difficulty = searchParams.get('difficulty');

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push('/curso-a1')}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
          >
            <span>←</span>
            <span>Back to Course</span>
          </button>
          <div className="text-sm font-medium text-slate-600">
            {category && <span className="capitalize">{category}</span>}
            {exercise && <span> • {exercise}</span>}
            {difficulty && <span> • {difficulty}</span>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-12 border-2 border-slate-200 shadow-xl text-center">
          <div className="text-6xl mb-6">🚧</div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">
            Exercise Generator Coming Soon
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            The AI-powered exercise generation system for A1 level is currently being integrated.
          </p>
          
          <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 mb-8">
            <h3 className="font-bold text-orange-900 mb-3">Your Selection:</h3>
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-slate-600">Category:</span>
                <span className="font-bold text-slate-900 capitalize">{category || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Exercise Type:</span>
                <span className="font-bold text-slate-900">{exercise || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Difficulty:</span>
                <span className="font-bold text-slate-900 capitalize">{difficulty || 'Not selected'}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 mb-3">What's Next?</h3>
            <div className="bg-slate-50 rounded-xl p-4 text-left space-y-2">
              <p className="text-sm text-slate-700">
                ✅ <strong>Course structure created</strong> - 30+ exercise types across 8 categories
              </p>
              <p className="text-sm text-slate-700">
                ✅ <strong>Metadata configured</strong> - AI prompts ready for each exercise type
              </p>
              <p className="text-sm text-slate-700">
                ⏳ <strong>Integration pending</strong> - Connect with existing AI exercise generator
              </p>
              <p className="text-sm text-slate-700">
                ⏳ <strong>Testing required</strong> - Validate A1 level appropriateness
              </p>
            </div>
          </div>

          <button
            onClick={() => router.push('/curso-a1')}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg"
          >
            Back to Course Selection
          </button>
        </div>

        {/* Alternative: Use Existing Practice System */}
        <div className="mt-8 bg-amber-50 rounded-2xl p-8 border-2 border-amber-200">
          <h3 className="text-2xl font-black text-amber-900 mb-4">
            Try the Existing Practice System
          </h3>
          <p className="text-amber-800 mb-6">
            While the dedicated A1 course is being finalized, you can use our existing unlimited practice generator and select A1 level content.
          </p>
          <button
            onClick={() => router.push('/practica')}
            className="px-8 py-4 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-all shadow-lg"
          >
            Go to Practice Generator
          </button>
        </div>
      </div>
    </main>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin text-6xl">⏳</div>
      </div>
    }>
      <PracticeContent />
    </Suspense>
  );
}
