'use client';

import { useState } from 'react';
import EnhancedVoiceRecorder from './EnhancedVoiceRecorder';
import Image from 'next/image';

interface Option {
  id: string;
  text: string;
  imageUrl?: string;
}

interface SpeakingPart3Props {
  exerciseId: string;
  instructions: string;
  scenario: string;
  question: string;
  options: Option[];
  phase1Duration: number; // Discussion phase in seconds
  phase2Duration: number; // Decision phase in seconds
  usefulPhrases?: string[];
  onComplete: (data: { phase1: { transcript: string; blob: Blob }, phase2: { transcript: string; blob: Blob } }) => void;
}

export default function SpeakingPart3({
  exerciseId,
  instructions,
  scenario,
  question,
  options,
  phase1Duration,
  phase2Duration,
  usefulPhrases,
  onComplete
}: SpeakingPart3Props) {
  const [showInstructions, setShowInstructions] = useState(true);
  const [currentPhase, setCurrentPhase] = useState<'instructions' | 'phase1' | 'phase2' | 'completed'>('instructions');
  const [phase1Recording, setPhase1Recording] = useState<{ transcript: string; blob: Blob } | null>(null);
  const [phase2Recording, setPhase2Recording] = useState<{ transcript: string; blob: Blob } | null>(null);

  const handlePhase1Complete = (blob: Blob, transcript: string) => {
    setPhase1Recording({ blob, transcript });
    setCurrentPhase('phase2');
  };

  const handlePhase2Complete = (blob: Blob, transcript: string) => {
    const data = { blob, transcript };
    setPhase2Recording(data);
    setCurrentPhase('completed');
    
    if (phase1Recording) {
      onComplete({
        phase1: phase1Recording,
        phase2: data
      });
    }
  };

  const startExercise = () => {
    setShowInstructions(false);
    setCurrentPhase('phase1');
  };

  if (showInstructions) {
    return (
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold text-emerald-900">
              FCE Speaking Part 3: Collaborative Task
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6 border border-emerald-200">
            <h3 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
              <span>📋</span>
              <span>Instrucciones:</span>
            </h3>
            <p className="text-slate-700 mb-4">{instructions}</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <h4 className="font-semibold text-emerald-900 mb-2">⏱️ Fase 1: Discusión</h4>
                <p className="text-slate-700">
                  <strong>{Math.floor(phase1Duration / 60)} minutos</strong> para discutir todas las opciones
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                <h4 className="font-semibold text-teal-900 mb-2">⏱️ Fase 2: Decisión</h4>
                <p className="text-slate-700">
                  <strong>{Math.floor(phase2Duration / 60)} minuto</strong> para tomar una decisión
                </p>
              </div>
            </div>
          </div>

          {usefulPhrases && usefulPhrases.length > 0 && (
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 mb-6">
              <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                <span>💡</span>
                <span>Frases útiles para negociar y decidir:</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                {usefulPhrases.map((phrase, index) => (
                  <div key={index} className="bg-white p-2 rounded flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{phrase}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200 mb-6">
            <h3 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
              <span>🎯</span>
              <span>Objetivos de evaluación:</span>
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span><strong>Colaboración:</strong> Trabajar juntos, no solo hablar por turnos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span><strong>Negociación:</strong> Expresar y justificar opiniones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span><strong>Decisión:</strong> Llegar a un acuerdo y explicar por qué</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span><strong>Interacción:</strong> Responder y reaccionar a tu compañero</span>
              </li>
            </ul>
          </div>

          <button
            onClick={startExercise}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Comenzar Collaborative Task</span>
            <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  if (currentPhase === 'completed') {
    return (
      <div className="bg-white rounded-xl border-2 border-green-200 p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            ¡Collaborative Task completada!
          </h3>
          <p className="text-slate-700 mb-6">
            Has completado ambas fases: discusión y decisión. Tus respuestas han sido grabadas.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <p className="font-semibold text-emerald-900 mb-2">Fase 1: Discusión</p>
              <p className="text-sm text-slate-600">
                {phase1Recording?.transcript.split(' ').length || 0} palabras grabadas
              </p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <p className="font-semibold text-teal-900 mb-2">Fase 2: Decisión</p>
              <p className="text-sm text-slate-600">
                {phase2Recording?.transcript.split(' ').length || 0} palabras grabadas
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600">
            Haz clic en "Siguiente Ejercicio" para continuar
          </p>
        </div>
      </div>
    );
  }

  const isPhase1 = currentPhase === 'phase1';
  const currentDuration = isPhase1 ? phase1Duration : phase2Duration;
  const phaseTitle = isPhase1 ? 'Fase 1: Discutan todas las opciones' : 'Fase 2: Tomen una decisión';
  const phasePrompt = isPhase1 
    ? `${scenario}\n\n${question}\n\nDiscutan las ventajas y desventajas de cada opción.`
    : 'Ahora decidan cuál es la mejor opción y expliquen por qué.';

  return (
    <div className="space-y-6">
      {/* Phase Indicator */}
      <div className="bg-white rounded-lg border-2 border-emerald-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-emerald-900">
            {isPhase1 ? 'Fase 1 de 2' : 'Fase 2 de 2'}
          </span>
          <span className="text-sm text-slate-600">
            {Math.floor(currentDuration / 60)} minuto{Math.floor(currentDuration / 60) > 1 ? 's' : ''}
          </span>
        </div>
        <div className="w-full bg-emerald-100 rounded-full h-2">
          <div 
            className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
            style={{ width: isPhase1 ? '50%' : '100%' }}
          />
        </div>
      </div>

      {/* Scenario and Options */}
      <div className="bg-white rounded-xl border-2 border-emerald-200 p-6">
        <h3 className="text-xl font-bold text-emerald-900 mb-4">
          {phaseTitle}
        </h3>
        
        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200 mb-6">
          <p className="text-slate-700 font-medium mb-2">{scenario}</p>
          <p className="text-slate-600">{question}</p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {options.map((option) => (
            <div 
              key={option.id}
              className="bg-white border-2 border-emerald-200 rounded-lg p-4 hover:border-emerald-400 transition-all"
            >
              {option.imageUrl && (
                <div className="aspect-square relative mb-3 rounded overflow-hidden bg-slate-100">
                  <Image
                    src={option.imageUrl}
                    alt={option.text}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-slate-700 font-medium text-center">
                {option.text}
              </p>
            </div>
          ))}
        </div>

        {isPhase1 && (
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <p className="text-sm text-amber-900 font-semibold mb-2">💡 Recuerda en Fase 1:</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Habla sobre TODAS las opciones</li>
              <li>• Menciona ventajas y desventajas</li>
              <li>• Pregunta la opinión del otro (imagina un compañero)</li>
              <li>• No decidas todavía, solo discute</li>
            </ul>
          </div>
        )}

        {!isPhase1 && (
          <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
            <p className="text-sm text-teal-900 font-semibold mb-2">🎯 Recuerda en Fase 2:</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Elige UNA opción</li>
              <li>• Explica POR QUÉ es la mejor</li>
              <li>• Justifica tu decisión con razones</li>
              <li>• Muestra que llegaste a un acuerdo</li>
            </ul>
          </div>
        )}
      </div>

      {/* Recording Section */}
      <div className="bg-white rounded-xl border-2 border-emerald-200 p-6">
        <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <span>🎤</span>
          <span>Graba tu {isPhase1 ? 'discusión' : 'decisión'}:</span>
        </h3>
        
        <EnhancedVoiceRecorder
          exerciseId={`${exerciseId}-${isPhase1 ? 'phase1' : 'phase2'}`}
          prompt={phasePrompt}
          timeLimit={currentDuration}
          onComplete={isPhase1 ? handlePhase1Complete : handlePhase2Complete}
          hints={
            isPhase1
              ? [
                  'Habla sobre cada opción',
                  'Menciona pros y contras',
                  'Interactúa (imagina respuestas)'
                ]
              : [
                  'Elige una opción claramente',
                  'Da 2-3 razones sólidas',
                  'Concluye con acuerdo'
                ]
          }
        />
      </div>
    </div>
  );
}
