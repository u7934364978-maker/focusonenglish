'use client';

import { useState, useEffect } from 'react';
import EnhancedVoiceRecorder from './EnhancedVoiceRecorder';

interface Question {
  id: string;
  question: string;
  followUp?: string;
  topic: string;
  suggestedDuration: number; // in seconds
  sampleAnswer?: string;
}

interface SpeakingPart1Props {
  exerciseId: string;
  instructions: string;
  questions: Question[];
  timeLimit?: number;
  onComplete: (data: { recordings: Array<{ questionId: string; transcript: string; blob: Blob }> }) => void;
}

export default function SpeakingPart1({ 
  exerciseId, 
  instructions, 
  questions, 
  timeLimit,
  onComplete 
}: SpeakingPart1Props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [recordings, setRecordings] = useState<Array<{ questionId: string; transcript: string; blob: Blob }>>([]);
  const [showInstructions, setShowInstructions] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleRecordingComplete = (blob: Blob, transcript: string) => {
    const newRecordings = [
      ...recordings,
      {
        questionId: currentQuestion.id,
        transcript: transcript,
        blob: blob
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
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl border-2 border-sky-200 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold text-sky-900">
              FCE Speaking Part 1: Interview
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6 border border-sky-200">
            <h3 className="font-semibold text-sky-900 mb-3 flex items-center gap-2">
              <span>📋</span>
              <span>Instrucciones:</span>
            </h3>
            <p className="text-slate-700 mb-4">{instructions}</p>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 mb-6">
            <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <span>💡</span>
              <span>Consejos:</span>
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>Responde de forma natural y espontánea</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>Da respuestas completas, no solo "sí" o "no"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>Usa ejemplos personales cuando sea posible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>No te preocupes por pequeños errores, mantén la fluidez</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setShowInstructions(false)}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Comenzar Interview</span>
            <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-white rounded-lg border-2 border-sky-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-sky-900">
            Progress
          </span>
          <span className="text-sm text-slate-600">
            {currentQuestion.topic}
          </span>
        </div>
        <div className="w-full bg-sky-100 rounded-full h-2">
          <div 
            className="bg-sky-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl border-2 border-sky-200 p-6">
        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 mt-1">
              {currentQuestionIndex + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-sky-900 mb-2">
                {currentQuestion.question}
              </h3>
              {currentQuestion.followUp && (
                <p className="text-slate-600 italic">
                  {currentQuestion.followUp}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Voice Recorder */}
        <EnhancedVoiceRecorder
          exerciseId={`${exerciseId}-q${currentQuestionIndex + 1}`}
          prompt={currentQuestion.question}
          timeLimit={currentQuestion.suggestedDuration}
          onComplete={handleRecordingComplete}
          hints={[
            'Habla con claridad y naturalidad',
            'Da ejemplos específicos si puedes',
            'No te preocupes por pausas ocasionales'
          ]}
        />

        {/* Sample Answer (Optional) */}
        {currentQuestion.sampleAnswer && (
          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-sky-700 hover:text-sky-900 font-semibold">
              Ver respuesta de ejemplo
            </summary>
            <div className="mt-3 bg-sky-50 rounded-lg p-4 border border-sky-200">
              <p className="text-slate-700 italic">
                "{currentQuestion.sampleAnswer}"
              </p>
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
