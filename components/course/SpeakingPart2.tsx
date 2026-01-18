'use client';

import { useState } from 'react';
import EnhancedVoiceRecorder from './EnhancedVoiceRecorder';
import Image from 'next/image';

interface Photo {
  url: string;
  alt: string;
}

interface SpeakingPart2Props {
  exerciseId: string;
  instructions: string;
  photos: Photo[];
  comparisonPrompt: string;
  followUpQuestion?: string;
  timeLimit: number; // in seconds
  tips?: string[];
  onComplete: (data: { transcript: string; blob: Blob }) => void;
}

export default function SpeakingPart2({
  exerciseId,
  instructions,
  photos,
  comparisonPrompt,
  followUpQuestion,
  timeLimit,
  tips,
  onComplete
}: SpeakingPart2Props) {
  const [showInstructions, setShowInstructions] = useState(true);
  const [hasCompleted, setHasCompleted] = useState(false);

  const handleRecordingComplete = (data: { transcript: string; blob: Blob }) => {
    setHasCompleted(true);
    onComplete(data);
  };

  if (showInstructions) {
    return (
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-2 border-violet-200 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold text-violet-900">
              FCE Speaking Part 2: Long Turn (Photo Comparison)
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6 border border-violet-200">
            <h3 className="font-semibold text-violet-900 mb-3 flex items-center gap-2">
              <span>📋</span>
              <span>Instrucciones:</span>
            </h3>
            <p className="text-slate-700 mb-4">{instructions}</p>
            
            <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
              <h4 className="font-semibold text-violet-900 mb-2">⏱️ Duración:</h4>
              <p className="text-slate-700">
                <strong>1 minuto</strong> para comparar las fotos y responder la pregunta
              </p>
            </div>
          </div>

          {tips && tips.length > 0 && (
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 mb-6">
              <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                <span>💡</span>
                <span>Consejos para comparar fotos:</span>
              </h3>
              <ul className="space-y-2 text-slate-700">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-violet-50 rounded-lg p-6 border border-violet-200 mb-6">
            <h3 className="font-semibold text-violet-900 mb-3 flex items-center gap-2">
              <span>🎯</span>
              <span>Frases útiles para comparar:</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="bg-white p-3 rounded">
                <strong>Similitudes:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Both photos show...</li>
                  <li>• In both pictures we can see...</li>
                  <li>• Similarly, both...</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Diferencias:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• While in the first photo..., in the second...</li>
                  <li>• In contrast to the first picture...</li>
                  <li>• The main difference is that...</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Especulación:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• It looks like...</li>
                  <li>• They might be...</li>
                  <li>• I'd say that...</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Opinión:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• I think...</li>
                  <li>• In my opinion...</li>
                  <li>• I'd prefer... because...</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowInstructions(false)}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Ver las fotos y comenzar</span>
            <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  if (hasCompleted) {
    return (
      <div className="bg-white rounded-xl border-2 border-green-200 p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            ¡Comparación completada!
          </h3>
          <p className="text-slate-700 mb-6">
            Has completado el Long Turn. Tu respuesta ha sido grabada.
          </p>
          <p className="text-sm text-slate-600">
            Haz clic en "Siguiente Ejercicio" para continuar
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Photos Display */}
      <div className="bg-white rounded-xl border-2 border-violet-200 p-6">
        <h3 className="text-xl font-bold text-violet-900 mb-4 flex items-center gap-2">
          <span>📸</span>
          <span>Compara estas dos fotos:</span>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {photos.map((photo, index) => (
            <div key={index} className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden border-2 border-violet-200 bg-slate-100">
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm text-slate-600 mt-2">
                Foto {index + 1}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
          <h4 className="font-semibold text-violet-900 mb-2 flex items-center gap-2">
            <span>❓</span>
            <span>Tu tarea:</span>
          </h4>
          <p className="text-slate-700 mb-3">
            {comparisonPrompt}
          </p>
          {followUpQuestion && (
            <p className="text-slate-600 italic">
              <strong>También responde:</strong> {followUpQuestion}
            </p>
          )}
        </div>
      </div>

      {/* Recording Section */}
      <div className="bg-white rounded-xl border-2 border-violet-200 p-6">
        <h3 className="text-lg font-bold text-violet-900 mb-4 flex items-center gap-2">
          <span>🎤</span>
          <span>Graba tu comparación ({timeLimit} segundos):</span>
        </h3>
        
        <EnhancedVoiceRecorder
          exerciseId={exerciseId}
          prompt={comparisonPrompt}
          timeLimit={timeLimit}
          onComplete={handleRecordingComplete}
          hints={[
            'Describe ambas fotos brevemente',
            'Compara similitudes y diferencias',
            'Especula sobre la situación',
            'Da tu opinión al final'
          ]}
        />
      </div>

      {/* Quick Reference */}
      <details className="bg-violet-50 rounded-lg border border-violet-200">
        <summary className="cursor-pointer p-4 font-semibold text-violet-900 hover:bg-violet-100 rounded-lg">
          📝 Ver estructura recomendada
        </summary>
        <div className="p-4 pt-2 space-y-3 text-sm text-slate-700">
          <div className="bg-white p-3 rounded">
            <strong>1. Introducción (10s):</strong>
            <p className="mt-1">"Both photos show... In the first picture I can see..."</p>
          </div>
          <div className="bg-white p-3 rounded">
            <strong>2. Comparación (30s):</strong>
            <p className="mt-1">"While in the first photo..., in the second photo... The main difference is..."</p>
          </div>
          <div className="bg-white p-3 rounded">
            <strong>3. Respuesta a la pregunta (20s):</strong>
            <p className="mt-1">"I think... because... In my opinion..."</p>
          </div>
        </div>
      </details>
    </div>
  );
}
