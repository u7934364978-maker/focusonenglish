'use client';

export default function ExerciseSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 animate-pulse">
        {/* Header badges */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-7 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-7 w-24 bg-gray-200 rounded-full"></div>
            <div className="h-7 w-20 bg-gray-200 rounded-full"></div>
          </div>
          
          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-300 rounded mb-2"></div>
          
          {/* Instructions */}
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded mt-2"></div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              {/* Question badge */}
              <div className="h-6 w-24 bg-orange-200 rounded-full mb-3"></div>
              
              {/* Question text */}
              <div className="h-5 w-full bg-gray-300 rounded mb-4"></div>
              
              {/* Options */}
              <div className="space-y-2">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-14 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit button */}
        <div className="mt-6">
          <div className="h-12 w-full bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      {/* Info card */}
      <div className="mt-6 bg-white rounded-lg shadow p-4 border border-gray-200 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Loading message */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center gap-2 text-orange-600">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="font-semibold text-lg">Generando tu ejercicio personalizado...</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">✨ Estamos usando IA para crear un ejercicio único para ti</p>
      </div>
    </div>
  );
}
