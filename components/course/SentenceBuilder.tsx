'use client';

import React, { useState, useEffect } from 'react';
import { SentenceBuildingChallenge, Word, WordType } from '@/lib/course-data-b2';

interface SentenceBuilderProps {
  challenge: SentenceBuildingChallenge;
  showHints: boolean;
  showTranslations: boolean;
  onComplete: (isCorrect: boolean, userSentence: string, score: number) => void;
}

// Colores por tipo de palabra
const wordTypeColors: Record<WordType, { bg: string; border: string; text: string }> = {
  subject: { bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-coral-900' },
  verb: { bg: 'bg-red-100', border: 'border-red-400', text: 'text-red-900' },
  object: { bg: 'bg-amber-100', border: 'border-amber-400', text: 'text-amber-900' },
  adjective: { bg: 'bg-peach-100', border: 'border-peach-400', text: 'text-peach-900' },
  adverb: { bg: 'bg-pink-100', border: 'border-pink-400', text: 'text-pink-900' },
  preposition: { bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-orange-900' },
  article: { bg: 'bg-yellow-100', border: 'border-yellow-400', text: 'text-yellow-900' },
  auxiliary: { bg: 'bg-melon-100', border: 'border-melon-400', text: 'text-melon-900' },
  conjunction: { bg: 'bg-amber-100', border: 'border-amber-400', text: 'text-amber-900' },
  complement: { bg: 'bg-peach-100', border: 'border-peach-400', text: 'text-peach-900' },
  pronoun: { bg: 'bg-coral-100', border: 'border-coral-400', text: 'text-coral-900' },
  determiner: { bg: 'bg-amber-100', border: 'border-amber-400', text: 'text-amber-900' },
};

const wordTypeLabels: Record<WordType, string> = {
  subject: 'Subject',
  verb: 'Verb',
  object: 'Object',
  adjective: 'Adjective',
  adverb: 'Adverb',
  preposition: 'Preposition',
  article: 'Article',
  auxiliary: 'Auxiliary',
  conjunction: 'Conjunction',
  complement: 'Complement',
  pronoun: 'Pronoun',
  determiner: 'Determiner',
};

export default function SentenceBuilder({ challenge, showHints, showTranslations, onComplete }: SentenceBuilderProps) {
  const [availableWords, setAvailableWords] = useState<Word[]>([]);
  const [sentenceWords, setSentenceWords] = useState<Word[]>([]);
  const [draggedWord, setDraggedWord] = useState<Word | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string; score: number } | null>(null);

  // Shuffle words on mount
  useEffect(() => {
    const shuffled = [...challenge.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSentenceWords([]);
    setSubmitted(false);
    setFeedback(null);
  }, [challenge]);

  const handleDragStart = (word: Word, source: 'available' | 'sentence') => {
    setDraggedWord({ ...word, source } as any);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDropInSentence = (index?: number) => {
    if (!draggedWord) return;

    const source = (draggedWord as any).source;
    
    if (source === 'available') {
      // Move from available to sentence
      setAvailableWords(prev => prev.filter(w => w.id !== draggedWord.id));
      if (index !== undefined) {
        const newSentence = [...sentenceWords];
        newSentence.splice(index, 0, draggedWord);
        setSentenceWords(newSentence);
      } else {
        setSentenceWords(prev => [...prev, draggedWord]);
      }
    } else if (source === 'sentence') {
      // Reorder within sentence
      const oldIndex = sentenceWords.findIndex(w => w.id === draggedWord.id);
      if (oldIndex !== -1 && index !== undefined && oldIndex !== index) {
        const newSentence = [...sentenceWords];
        newSentence.splice(oldIndex, 1);
        newSentence.splice(index, 0, draggedWord);
        setSentenceWords(newSentence);
      }
    }

    setDraggedWord(null);
  };

  const handleDropInAvailable = () => {
    if (!draggedWord) return;
    
    const source = (draggedWord as any).source;
    if (source === 'sentence') {
      // Move back from sentence to available
      setSentenceWords(prev => prev.filter(w => w.id !== draggedWord.id));
      setAvailableWords(prev => [...prev, draggedWord]);
    }
    
    setDraggedWord(null);
  };

  const handleWordClick = (word: Word, source: 'available' | 'sentence') => {
    if (source === 'available') {
      // Add to sentence
      setAvailableWords(prev => prev.filter(w => w.id !== word.id));
      setSentenceWords(prev => [...prev, word]);
    } else {
      // Remove from sentence
      setSentenceWords(prev => prev.filter(w => w.id !== word.id));
      setAvailableWords(prev => [...prev, word]);
    }
  };

  const checkAnswer = async () => {
    const userSentence = sentenceWords.map(w => w.text).join(' ');
    const normalizedUser = userSentence.toLowerCase().trim().replace(/\s+/g, ' ');
    const normalizedTarget = challenge.targetSentence.toLowerCase().trim().replace(/\s+/g, ' ');

    // Check exact match
    if (normalizedUser === normalizedTarget) {
      setFeedback({
        isCorrect: true,
        message: '🎉 Perfect! Your sentence is exactly correct!',
        score: 100
      });
      setSubmitted(true);
      onComplete(true, userSentence, 100);
      return;
    }

    // Check acceptable variations
    if (challenge.acceptableVariations) {
      const isAcceptable = challenge.acceptableVariations.some(
        variation => variation.toLowerCase().trim().replace(/\s+/g, ' ') === normalizedUser
      );
      if (isAcceptable) {
        setFeedback({
          isCorrect: true,
          message: '✓ Correct! This is an acceptable variation.',
          score: 95
        });
        setSubmitted(true);
        onComplete(true, userSentence, 95);
        return;
      }
    }

    // Use AI to evaluate if close
    try {
      const response = await fetch('/api/evaluate-sentence-building', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userSentence,
          targetSentence: challenge.targetSentence,
          grammarFocus: challenge.grammarFocus,
          words: challenge.words
        })
      });

      if (response.ok) {
        const evaluation = await response.json();
        setFeedback({
          isCorrect: evaluation.isCorrect,
          message: evaluation.feedback,
          score: evaluation.score
        });
        setSubmitted(true);
        onComplete(evaluation.isCorrect, userSentence, evaluation.score);
      } else {
        // Fallback: incorrect
        setFeedback({
          isCorrect: false,
          message: `Not quite right. Try again! The correct answer is: "${challenge.targetSentence}"`,
          score: 0
        });
        setSubmitted(true);
        onComplete(false, userSentence, 0);
      }
    } catch (error) {
      // Fallback
      setFeedback({
        isCorrect: false,
        message: `Not quite right. The correct answer is: "${challenge.targetSentence}"`,
        score: 0
      });
      setSubmitted(true);
      onComplete(false, userSentence, 0);
    }
  };

  const resetChallenge = () => {
    const shuffled = [...challenge.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSentenceWords([]);
    setSubmitted(false);
    setFeedback(null);
  };

  return (
    <div className="space-y-6">
      {/* Prompt */}
      <div className="bg-gradient-to-r from-coral-50 to-peach-50 rounded-xl p-6 border-2 border-coral-200">
        <div className="flex items-start gap-3">
          <span className="text-3xl">🎯</span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-coral-900 mb-2">Build this sentence:</h3>
            <p className="text-lg text-slate-800 font-medium">{challenge.prompt}</p>
            {challenge.grammarFocus && (
              <div className="mt-3 inline-block px-3 py-1 bg-coral-100 text-coral-800 rounded-full text-sm font-semibold">
                📚 Focus: {challenge.grammarFocus}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tips */}
      {challenge.tips && challenge.tips.length > 0 && (
        <details className="bg-orange-50 rounded-lg p-4 border border-orange-200">
          <summary className="cursor-pointer font-semibold text-coral-900 hover:text-coral-700">
            💡 Need help? Click for tips
          </summary>
          <ul className="mt-3 space-y-1">
            {challenge.tips.map((tip, i) => (
              <li key={i} className="text-sm text-coral-800 flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </details>
      )}

      {/* Color Legend */}
      {showHints && (
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <p className="text-sm font-semibold text-slate-700 mb-2">🎨 Color Guide:</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(wordTypeLabels).map(([type, label]) => (
              <span
                key={type}
                className={`px-2 py-1 rounded text-xs font-medium ${wordTypeColors[type as WordType].bg} ${wordTypeColors[type as WordType].border} ${wordTypeColors[type as WordType].text} border`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Sentence Building Area */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📝</span>
          <h4 className="text-lg font-bold text-slate-900">Your Sentence:</h4>
        </div>

        <div
          className={`min-h-[80px] bg-white rounded-xl p-4 border-2 border-dashed ${
            sentenceWords.length === 0 ? 'border-slate-300' : 'border-coral-400'
          } flex flex-wrap items-center gap-2`}
          onDragOver={handleDragOver}
          onDrop={() => handleDropInSentence()}
        >
          {sentenceWords.length === 0 ? (
            <p className="text-slate-400 text-center w-full">Drag words here or click them below</p>
          ) : (
            sentenceWords.map((word, index) => (
              <React.Fragment key={word.id}>
                {/* Drop zone before word */}
                <div
                  className="w-2 h-12 bg-coral-200 rounded opacity-0 hover:opacity-100 transition-opacity"
                  onDragOver={handleDragOver}
                  onDrop={() => handleDropInSentence(index)}
                />
                
                {/* Word */}
                <div
                  draggable
                  onDragStart={() => handleDragStart(word, 'sentence')}
                  onClick={() => handleWordClick(word, 'sentence')}
                  className={`px-4 py-2 rounded-lg border-2 font-medium cursor-move hover:scale-105 transition-transform ${
                    showHints
                      ? `${wordTypeColors[word.type].bg} ${wordTypeColors[word.type].border} ${wordTypeColors[word.type].text}`
                      : 'bg-coral-100 border-coral-300 text-coral-900'
                  }`}
                  title={showHints ? wordTypeLabels[word.type] : undefined}
                >
                  {word.text}
                  {showTranslations && word.translation && (
                    <span className="ml-2 text-xs opacity-70">({word.translation})</span>
                  )}
                </div>
              </React.Fragment>
            ))
          )}
        </div>

        {/* Sentence as text */}
        {sentenceWords.length > 0 && (
          <div className="bg-slate-100 rounded-lg p-3 border border-slate-300">
            <p className="text-sm text-slate-600 mb-1">Preview:</p>
            <p className="text-lg font-medium text-slate-900">
              {sentenceWords.map(w => w.text).join(' ')}
            </p>
          </div>
        )}
      </div>

      {/* Available Words */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔤</span>
          <h4 className="text-lg font-bold text-slate-900">Available Words:</h4>
        </div>

        <div
          className="min-h-[100px] bg-slate-50 rounded-xl p-4 border-2 border-slate-200 flex flex-wrap items-center gap-3"
          onDragOver={handleDragOver}
          onDrop={handleDropInAvailable}
        >
          {availableWords.length === 0 ? (
            <p className="text-slate-400 text-center w-full">All words used! 🎉</p>
          ) : (
            availableWords.map(word => (
              <div
                key={word.id}
                draggable
                onDragStart={() => handleDragStart(word, 'available')}
                onClick={() => handleWordClick(word, 'available')}
                className={`px-4 py-2 rounded-lg border-2 font-medium cursor-pointer hover:scale-105 transition-transform ${
                  showHints
                    ? `${wordTypeColors[word.type].bg} ${wordTypeColors[word.type].border} ${wordTypeColors[word.type].text}`
                    : 'bg-white border-slate-300 text-slate-900'
                }`}
                title={showHints ? `${wordTypeLabels[word.type]}${word.hint ? `: ${word.hint}` : ''}` : word.hint}
              >
                {word.text}
                {showTranslations && word.translation && (
                  <span className="ml-2 text-xs opacity-70">({word.translation})</span>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={checkAnswer}
          disabled={sentenceWords.length === 0 || submitted}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-coral-600 to-peach-600 text-white rounded-xl hover:from-coral-700 hover:to-peach-700 transition-all font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitted ? '✓ Submitted' : 'Check Answer'}
        </button>
        
        <button
          onClick={resetChallenge}
          className="px-6 py-3 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition-colors font-bold"
        >
          🔄 Reset
        </button>
      </div>

      {/* Feedback */}
      {feedback && (
        <div className={`p-6 rounded-xl border-2 ${
          feedback.isCorrect ? 'bg-amber-50 border-amber-300' : 'bg-orange-50 border-orange-300'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{feedback.isCorrect ? '🎉' : '🤔'}</span>
            <div className="flex-1">
              <p className={`font-bold text-lg ${feedback.isCorrect ? 'text-amber-900' : 'text-orange-900'}`}>
                {feedback.isCorrect ? 'Correct!' : 'Not Quite Right'}
              </p>
              <p className={`text-sm ${feedback.isCorrect ? 'text-amber-800' : 'text-orange-800'}`}>
                Score: {feedback.score}/100
              </p>
            </div>
          </div>
          
          <p className={`${feedback.isCorrect ? 'text-amber-800' : 'text-orange-800'} mb-3`}>
            {feedback.message}
          </p>

          {!feedback.isCorrect && (
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-sm font-semibold text-orange-900 mb-1">✏️ Correct Answer:</p>
              <p className="text-lg font-medium text-slate-900">{challenge.targetSentence}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
