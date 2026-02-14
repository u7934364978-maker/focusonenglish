'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, ArrowRight, Volume2 } from 'lucide-react';
import Markdown from '../course/Markdown';

interface MatchingPair {
  id: string;
  left: string;
  right: string;
  audio?: string;
}

interface MatchingContent {
  title?: string;
  instructions?: string;
  pairs: MatchingPair[];
  explanation?: string;
}

interface MatchingExerciseProps {
  content: MatchingContent;
  vocabulary?: any[];
  onComplete: (isCorrect: boolean) => void;
}

export default function MatchingExercise({ content, vocabulary, onComplete }: MatchingExerciseProps) {
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const shuffle = <T,>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setLeftItems(shuffle(content.pairs.map(p => (p as any).left || (p as any).front)));
    setRightItems(shuffle(content.pairs.map(p => (p as any).right || (p as any).back)));
    setMatches({});
    setSubmitted(false);
    setIsCorrect(false);
    setSelectedLeft(null);
    setSelectedRight(null);
  }, [content]);

  const handleLeftClick = (item: string) => {
    if (submitted) return;
    if (matches[item]) {
      // Remove match
      const newMatches = { ...matches };
      delete newMatches[item];
      setMatches(newMatches);
    } else {
      setSelectedLeft(item);
      if (selectedRight) {
        setMatches({ ...matches, [item]: selectedRight });
        setSelectedLeft(null);
        setSelectedRight(null);
      }
    }
  };

  const handleRightClick = (item: string) => {
    if (submitted) return;
    // Find if this right item is already matched
    const matchedLeft = Object.keys(matches).find(left => matches[left] === item);
    if (matchedLeft) {
      // Remove match
      const newMatches = { ...matches };
      delete newMatches[matchedLeft];
      setMatches(newMatches);
    } else {
      setSelectedRight(item);
      if (selectedLeft) {
        setMatches({ ...matches, [selectedLeft]: item });
        setSelectedLeft(null);
        setSelectedRight(null);
      }
    }
  };

  const handleCheck = () => {
    let allCorrect = true;
    if (Object.keys(matches).length !== content.pairs.length) {
      allCorrect = false;
    } else {
      for (const pair of content.pairs) {
        const left = (pair as any).left || (pair as any).front;
        const right = (pair as any).right || (pair as any).back;
        if (matches[left] !== right) {
          allCorrect = false;
          break;
        }
      }
    }
    setIsCorrect(allCorrect);
    setSubmitted(true);
  };

  const handleReset = () => {
    setMatches({});
    setSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-lg border border-slate-200">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-900">
          <TranslatedText text={content.title || 'Une las parejas'} />
        </h2>
        <div className="text-slate-600">
          <Markdown content={content.instructions || 'Une cada elemento de la izquierda con su correspondiente a la derecha.'} vocabulary={vocabulary} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Left Column */}
        <div className="space-y-3">
          {leftItems.map((item) => {
            const isMatched = !!matches[item];
            const isSelected = selectedLeft === item;
            
            const matchedPair = content.pairs.find(p => ((p as any).left || (p as any).front) === item);
            const expectedRight = matchedPair ? ((matchedPair as any).right || (matchedPair as any).back) : undefined;
            const isCorrectMatch = submitted && isMatched && matches[item] === expectedRight;
            const isIncorrectMatch = submitted && isMatched && matches[item] !== expectedRight;

            return (
              <div
                role="button"
                tabIndex={0}
                key={item}
                onClick={() => handleLeftClick(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleLeftClick(item);
                  }
                }}
                className={`w-full p-4 rounded-xl border-2 font-bold text-lg transition-all text-left cursor-pointer ${
                  isSelected 
                    ? 'border-orange-500 bg-orange-50 text-orange-700' 
                    : isMatched
                      ? 'border-blue-200 bg-blue-50 text-blue-700'
                      : 'border-slate-100 bg-slate-50 hover:border-slate-300 text-slate-700'
                } ${isCorrectMatch ? 'border-green-500 bg-green-50' : ''} ${isIncorrectMatch ? 'border-red-500 bg-red-50' : ''} ${submitted ? 'cursor-default' : ''}`}
              >
                <Markdown content={item} vocabulary={vocabulary} />
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          {rightItems.map((item) => {
            const matchedLeft = Object.keys(matches).find(left => matches[left] === item);
            const isMatched = !!matchedLeft;
            const isSelected = selectedRight === item;

            const matchedPair = matchedLeft ? content.pairs.find(p => ((p as any).left || (p as any).front) === matchedLeft) : undefined;
            const expectedRight = matchedPair ? ((matchedPair as any).right || (matchedPair as any).back) : undefined;
            const isCorrectMatch = submitted && isMatched && item === expectedRight;
            const isIncorrectMatch = submitted && isMatched && item !== expectedRight;

            return (
              <div
                role="button"
                tabIndex={0}
                key={item}
                onClick={() => handleRightClick(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleRightClick(item);
                  }
                }}
                className={`w-full p-4 rounded-xl border-2 font-bold text-lg transition-all text-left flex items-center justify-between cursor-pointer ${
                  isSelected 
                    ? 'border-orange-500 bg-orange-50 text-orange-700' 
                    : isMatched
                      ? 'border-blue-200 bg-blue-50 text-blue-700'
                      : 'border-slate-100 bg-slate-50 hover:border-slate-300 text-slate-700'
                } ${isCorrectMatch ? 'border-green-500 bg-green-50' : ''} ${isIncorrectMatch ? 'border-red-500 bg-red-50' : ''} ${submitted ? 'cursor-default' : ''}`}
              >
                <Markdown content={item} vocabulary={vocabulary} />
                {(() => {
                  const pair = content.pairs.find(p => ((p as any).right || (p as any).back) === item);
                  if (pair?.audio) {
                    return (
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          const audio = new Audio(pair.audio);
                          audio.play().catch(err => console.error('Error playing audio:', err));
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.stopPropagation();
                            const audio = new Audio(pair.audio);
                            audio.play().catch(err => console.error('Error playing audio:', err));
                          }
                        }}
                        className="p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-all transform hover:scale-110 active:scale-95 ml-2 cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4" />
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-3">
        {!submitted ? (
          <button
            onClick={handleCheck}
            disabled={Object.keys(matches).length === 0}
            className="flex-1 bg-orange-500 text-white px-6 py-4 rounded-2xl font-black hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            Comprobar
          </button>
        ) : (
          <div className="flex gap-3 w-full">
            {!isCorrect && (
              <button
                onClick={handleReset}
                className="flex-1 bg-slate-100 text-slate-600 px-6 py-4 rounded-2xl font-black hover:bg-slate-200 transition-all shadow-sm flex items-center justify-center gap-2 border border-slate-200"
              >
                <RotateCcw className="w-5 h-5" />
                Intentar de nuevo
              </button>
            )}
            <button
              onClick={() => onComplete(isCorrect)}
              className={`flex-1 text-white px-6 py-4 rounded-2xl font-black transition-all shadow-lg flex items-center justify-center gap-2 ${
                isCorrect ? 'bg-green-600 hover:bg-green-700 shadow-green-100' : 'bg-slate-400 hover:bg-slate-500 shadow-slate-100'
              }`}
            >
              Siguiente Ejercicio
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {submitted && content.explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={`mt-6 p-4 rounded-2xl border ${
              isCorrect ? 'bg-green-50 border-green-100 text-green-800' : 'bg-blue-50 border-blue-100 text-blue-800'
            }`}
          >
            <p className="font-bold mb-1 text-sm flex items-center gap-2">
              💡 Explicación:
            </p>
            <div className="text-sm">
              <Markdown content={content.explanation} vocabulary={vocabulary} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
