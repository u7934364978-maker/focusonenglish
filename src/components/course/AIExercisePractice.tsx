'use client';

import { useState, useCallback } from 'react';
import { Sparkles, RefreshCw, ChevronRight, Trophy, AlertCircle, Brain } from 'lucide-react';
import { useSpacedRepetition } from '@/hooks/use-spaced-repetition';

interface AIExercisePracticeProps {
  courseLevel: string;
  mainTopic: string;
  onExercisesReady: (exercises: any[]) => void;
}

export default function AIExercisePractice({
  courseLevel,
  mainTopic,
  onExercisesReady,
}: AIExercisePracticeProps) {
  const { getWeak, getStats, getDue } = useSpacedRepetition(courseLevel);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const weakTopics = getWeak();
  const stats = getStats();
  const dueCards = getDue();

  const topicsSummary = Object.entries(stats).slice(0, 5);
  const hasHistory = topicsSummary.length > 0;

  const generateExercises = useCallback(async (mode: 'weak' | 'review' | 'new') => {
    setLoading(true);
    setError(null);

    const focusTopics = mode === 'weak' ? weakTopics : [];
    const topic = focusTopics[0] || mainTopic;
    const count = mode === 'review' ? Math.min(dueCards.length, 10) : 8;

    try {
      const res = await fetch('/api/generate-exercises', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          level: courseLevel,
          topic,
          weakTopics: mode === 'weak' ? weakTopics : [],
          count,
          exerciseTypes: ['multiple-choice', 'fill-blank', 'true-false', 'translation'],
          focusOn: mode === 'review' ? 'Review and reinforce previously learned material' : '',
          pedagogy: {
            emphasizeSpacedRepetition: mode === 'weak' || mode === 'review',
            spacedRepetitionNotes:
              mode === 'review' && dueCards.length > 0
                ? `Spaced repetition: ~${dueCards.length} items are due for review; mix retrieval with light variation.`
                : undefined,
            learningObjectives: [
              `Consolidate ${courseLevel} language related to: ${topic}`,
              ...(mode === 'weak' ? ['Remediate weak areas with extra exposure and varied contexts'] : []),
              ...(mode === 'review' ? ['Strengthen long-term memory through retrieval practice'] : []),
            ],
            speakingGoals: [
              `Short, natural utterances for "${topic}" at ${courseLevel} (functional phrases the learner should be able to say aloud)`,
            ],
          },
        }),
      });

      if (!res.ok) throw new Error('Error al generar ejercicios');
      const data = await res.json();
      if (!data.exercises?.length) throw new Error('No se generaron ejercicios');
      onExercisesReady(data.exercises);
    } catch (e: any) {
      setError(e.message || 'Error al conectar con la IA');
    } finally {
      setLoading(false);
    }
  }, [courseLevel, mainTopic, weakTopics, dueCards.length, onExercisesReady]);

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-2">
        <Brain className="w-5 h-5 text-purple-400" />
        <h3 className="text-white font-black text-base">Práctica inteligente con IA</h3>
        <span className="text-xs bg-purple-900/50 border border-purple-500/30 text-purple-300 px-2 py-0.5 rounded-full font-semibold">Llama 3.3 70B</span>
      </div>

      {hasHistory && topicsSummary.length > 0 && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Tu progreso por tema</p>
          <div className="space-y-2">
            {topicsSummary.map(([topic, s]) => (
              <div key={topic} className="flex items-center gap-3">
                <span className="text-slate-300 text-xs w-32 truncate">{topic}</span>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      s.avg >= 70 ? 'bg-emerald-400' : s.avg >= 50 ? 'bg-amber-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${s.avg}%` }}
                  />
                </div>
                <span className="text-slate-500 text-xs w-10 text-right">{s.avg}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-3 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      <div className="grid gap-3">
        {dueCards.length > 0 && (
          <button
            onClick={() => generateExercises('review')}
            disabled={loading}
            className="w-full flex items-center justify-between bg-amber-900/30 border border-amber-500/30 hover:bg-amber-900/50 rounded-2xl p-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm">Repasar pendientes</p>
                <p className="text-amber-300/70 text-xs">{dueCards.length} ejercicio{dueCards.length !== 1 ? 's' : ''} programado{dueCards.length !== 1 ? 's' : ''} para hoy</p>
              </div>
            </div>
            {loading ? (
              <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <ChevronRight className="w-4 h-4 text-amber-400" />
            )}
          </button>
        )}

        {weakTopics.length > 0 && (
          <button
            onClick={() => generateExercises('weak')}
            disabled={loading}
            className="w-full flex items-center justify-between bg-red-900/20 border border-red-500/20 hover:bg-red-900/40 rounded-2xl p-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm">Reforzar puntos débiles</p>
                <p className="text-red-300/70 text-xs">Ejercicios sobre: {weakTopics.slice(0, 2).join(', ')}</p>
              </div>
            </div>
            {loading ? (
              <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <ChevronRight className="w-4 h-4 text-red-400" />
            )}
          </button>
        )}

        <button
          onClick={() => generateExercises('new')}
          disabled={loading}
          className="w-full flex items-center justify-between bg-purple-900/30 border border-purple-500/30 hover:bg-purple-900/50 rounded-2xl p-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-white font-black text-sm">Generar práctica extra</p>
              <p className="text-purple-300/70 text-xs">Nuevos ejercicios adaptados a tu nivel {courseLevel}</p>
            </div>
          </div>
          {loading ? (
            <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <ChevronRight className="w-4 h-4 text-purple-400" />
          )}
        </button>
      </div>

      {loading && (
        <p className="text-slate-500 text-xs text-center animate-pulse">La IA está generando ejercicios personalizados para ti...</p>
      )}
    </div>
  );
}
