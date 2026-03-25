'use client'

import { useState } from 'react'
import type { ComprehensionQuestion } from '@/lib/podcasts/types'

interface PodcastQuestionsProps {
  questions: ComprehensionQuestion[]
  unlocked: boolean
}

export default function PodcastQuestions({ questions, unlocked: initialUnlocked }: PodcastQuestionsProps) {
  const [unlocked, setUnlocked] = useState(initialUnlocked)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  if (!unlocked) {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-4xl mb-3">🎧</div>
        <p className="text-slate-600 font-medium mb-1">Escucha el 80% del episodio para desbloquear las preguntas</p>
        <p className="text-sm text-slate-400 mb-5">Pon a prueba tu comprensión</p>
        <button
          onClick={() => setUnlocked(true)}
          className="text-sm text-slate-500 underline hover:text-slate-700"
        >
          Ver preguntas de todas formas
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {questions.map((q, qi) => {
        const selected = answers[qi]
        const isChecked = checked[qi]
        const isCorrect = selected === q.correctIndex

        return (
          <div key={qi} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <p className="font-semibold text-slate-800 mb-3">{qi + 1}. {q.question}</p>
            <div className="space-y-2 mb-3">
              {q.options.map((opt, oi) => {
                let style = 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                if (isChecked) {
                  if (oi === q.correctIndex) style = 'border-emerald-400 bg-emerald-50 text-emerald-800'
                  else if (oi === selected) style = 'border-red-300 bg-red-50 text-red-700'
                  else style = 'border-slate-100 bg-white text-slate-400'
                } else if (selected === oi) {
                  style = 'border-blue-400 bg-blue-50 text-blue-800'
                }

                return (
                  <button
                    key={oi}
                    disabled={isChecked}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    className={`w-full text-left px-4 py-2.5 rounded-lg border-2 text-sm font-medium transition ${style}`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>

            {!isChecked && selected !== undefined && (
              <button
                onClick={() => setChecked((c) => ({ ...c, [qi]: true }))}
                className="text-sm font-semibold px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition"
              >
                Comprobar
              </button>
            )}

            {isChecked && (
              <div className={`mt-2 text-sm rounded-lg px-3 py-2 ${isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'}`}>
                <span className="font-bold">{isCorrect ? '✓ Correcto' : '✗ Incorrecto'}</span>
                {' — '}{q.explanation}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
