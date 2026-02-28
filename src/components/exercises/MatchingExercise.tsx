'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, ArrowRight, Volume2 } from 'lucide-react';
import Markdown from '../course/Markdown';
import { TranslatedText } from '../course/exercises/TranslatedText';

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
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
          <TranslatedText text={content.title || 'Une las parejas'} />
        </h2>
        <div className="flex items-center gap-3">
          <div className="text-slate-500 text-sm font-medium flex-1">
            <Markdown content={content.instructions || 'Une cada elemento de la izquierda con su correspondiente a la derecha.'} vocabulary={vocabulary} />
          </div>
          <span className="text-xs font-black text-slate-400 tabular-nums whitespace-nowrap">
            {Object.keys(matches).length} / {content.pairs.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-3">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400 text-center pb-1 border-b border-slate-100">
            <TranslatedText text="[[English|Inglés]]" />
          </p>
          {leftItems.map((item, idx) => {
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
                className={`w-full p-4 rounded-2xl border-2 font-bold text-lg md:text-xl transition-all text-left cursor-pointer select-none active:scale-[0.98] flex items-center gap-2 ${
                  isSelected 
                    ? 'border-[#FF6B6B] bg-orange-50 text-[#FF6B6B] shadow-md shadow-orange-200 scale-[1.03]' 
                    : isMatched
                      ? 'border-blue-400 bg-blue-50/80 text-blue-800 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-sm'
                } ${isCorrectMatch ? '!border-green-400 !bg-green-50 !text-green-700' : ''} ${isIncorrectMatch ? '!border-red-400 !bg-red-50 !text-red-700' : ''} ${submitted ? 'cursor-default' : ''}`}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-black flex items-center justify-center">{idx + 1}</span>
                <Markdown content={item} vocabulary={vocabulary} />
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400 text-center pb-1 border-b border-slate-100">
            <TranslatedText text="[[Spanish|Español]]" />
          </p>
          {rightItems.map((item, idx) => {
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
                className={`w-full p-4 rounded-2xl border-2 font-bold text-lg md:text-xl transition-all text-left flex items-center justify-between cursor-pointer select-none active:scale-[0.98] gap-2 ${
                  isSelected 
                    ? 'border-[#FF6B6B] bg-orange-50 text-[#FF6B6B] shadow-md shadow-orange-200 scale-[1.03]' 
                    : isMatched
                      ? 'border-blue-400 bg-blue-50/80 text-blue-800 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-sm'
                } ${isCorrectMatch ? '!border-green-400 !bg-green-50 !text-green-700' : ''} ${isIncorrectMatch ? '!border-red-400 !bg-red-50 !text-red-700' : ''} ${submitted ? 'cursor-default' : ''}`}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-black flex items-center justify-center">{idx + 1}</span>
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
            className="flex-1 bg-gradient-to-r from-[#FF6B6B] to-[#ff5252] text-white px-6 py-4 rounded-2xl font-black hover:-translate-y-0.5 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
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
