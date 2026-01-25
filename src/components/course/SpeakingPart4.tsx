'use client';

import { useState } from 'react';
import EnhancedVoiceRecorder from './EnhancedVoiceRecorder';

interface Question {
  id: string;
  question: string;
  topic: string;
  suggestedDuration: number; // in seconds
}

interface SpeakingPart4Props {
  exerciseId: string;
  instructions: string;
  topic: string;
  questions: Question[];
  usefulExpressions?: string[];
  timeLimit?: number;
  onComplete: (data: { recordings: Array<{ questionId: string; transcript: string; blob: Blob }> }) => void;
}

export default function SpeakingPart4({
  exerciseId,
  instructions,
  topic,
  questions,
  usefulExpressions,
  timeLimit,
  onComplete
}: SpeakingPart4Props) {
  const [showInstructions, setShowInstructions] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [recordings, setRecordings] = useState<Array<{ questionId: string; transcript: string; blob: Blob }>>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleRecordingComplete = (data: { transcript: string; blob: Blob }) => {
    const newRecordings = [
      ...recordings,
      {
        questionId: currentQuestion.id,
        transcript: data.transcript,
        blob: data.blob
      }
    ];
    
    setRecordings(newRecordings);

    if (isLastQuestion) {
      // All questions completed
      onComplete({ recordings: newRecordings });
    } else {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (showInstructions) {
    return (
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border-2 border-indigo-200 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              4
            </div>
            <h2 className="text-2xl font-bold text-indigo-900">
              FCE Speaking Part 4: Discussion
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6 border border-indigo-200">
            <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
              <span>📋</span>
              <span>Instrucciones:</span>
            </h3>
            <p className="text-slate-700 mb-4">{instructions}</p>
            
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">⏱️ Duración:</h4>
              <p className="text-slate-700">
                <strong>4 minutos</strong> de discusión sobre el tema: <em>{topic}</em>
              </p>
              <p className="text-sm text-slate-600 mt-2">
                {questions.length} preguntas, aproximadamente {Math.floor((timeLimit || 240) / questions.length)} segundos cada una
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 mb-6">
            <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <span>💡</span>
              <span>Consejos para la discusión:</span>
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>Da opiniones personales claras y justifícalas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>Desarrolla tus ideas con ejemplos y razones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>Usa expresiones para dar opiniones, estar de acuerdo/en desacuerdo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>Mantén fluidez, no te preocupes por pequeños errores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>Relaciona tus respuestas con el tema anterior (Part 3)</span>
              </li>
            </ul>
          </div>

          {usefulExpressions && usefulExpressions.length > 0 && (
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200 mb-6">
              <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                <span>🎯</span>
                <span>Expresiones útiles:</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                {usefulExpressions.map((expression, index) => (
                  <div key={index} className="bg-white p-2 rounded flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{expression}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200 mb-6">
            <h3 className="font-semibold text-indigo-900 mb-3">📌 Vista previa de preguntas:</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {questions.map((q, index) => (
                <li key={q.id} className="flex items-start gap-2">
                  <span className="font-semibold text-indigo-700">{index + 1}.</span>
                  <span>{q.question}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setShowInstructions(false)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Comenzar Discussion</span>
            <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-white rounded-lg border-2 border-indigo-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-indigo-900">
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </span>
          <span className="text-sm text-slate-600 bg-indigo-50 px-3 py-1 rounded-full">
            {currentQuestion.topic}
          </span>
        </div>
        <div className="w-full bg-indigo-100 rounded-full h-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Topic Context */}
      <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-4">
        <p className="text-sm text-indigo-900">
          <span className="font-semibold">Tema de discusión:</span> {topic}
        </p>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl border-2 border-indigo-200 p-6">
        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 mt-1">
              {currentQuestionIndex + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                {currentQuestion.question}
              </h3>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Duración sugerida:</span> {currentQuestion.suggestedDuration} segundos
            </p>
          </div>
        </div>

        {/* Voice Recorder */}
        <EnhancedVoiceRecorder
          exerciseId={`${exerciseId}-q${currentQuestionIndex + 1}`}
          prompt={currentQuestion.question}
          timeLimit={currentQuestion.suggestedDuration}
          onComplete={handleRecordingComplete}
          hints={[
            'Expresa tu opinión claramente',
            'Justifica con ejemplos o razones',
            'Desarrolla tu respuesta completamente',
            'Usa las expresiones útiles'
          ]}
        />

        {/* Quick Reference */}
        {usefulExpressions && usefulExpressions.length > 0 && (
          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-indigo-700 hover:text-indigo-900 font-semibold">
              Ver expresiones útiles
            </summary>
            <div className="mt-3 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
                {usefulExpressions.slice(0, 8).map((expression, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{expression}</span>
                  </div>
                ))}
              </div>
            </div>
          </details>
        )}
      </div>

      {/* Structure Reminder */}
      <div className="bg-amber-50 rounded-lg border border-amber-200 p-4">
        <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
          <span>📝</span>
          <span>Estructura de respuesta:</span>
        </h4>
        <ol className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="font-semibold">1.</span>
            <span><strong>Opinión directa:</strong> "I think...", "In my opinion...", "I believe..."</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold">2.</span>
            <span><strong>Justificación:</strong> "because...", "the reason is...", "for example..."</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold">3.</span>
            <span><strong>Desarrollo:</strong> Agrega detalles, ejemplos personales o generales</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold">4.</span>
            <span><strong>Conclusión:</strong> "So overall...", "That's why I think..."</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
