'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, ArrowRight } from 'lucide-react';

interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

interface MatchingContent {
  title?: string;
  instructions?: string;
  pairs: MatchingPair[];
}

interface MatchingExerciseProps {
  content: MatchingContent;
  onComplete: (isCorrect: boolean) => void;
}

export default function MatchingExercise({ content, onComplete }: MatchingExerciseProps) {
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setLeftItems(content.pairs.map(p => p.left).sort(() => Math.random() - 0.5));
    setRightItems(content.pairs.map(p => p.right).sort(() => Math.random() - 0.5));
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
        if (matches[pair.left] !== pair.right) {
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
        <h2 className="text-2xl font-black text-slate-900">{content.title || 'Une las parejas'}</h2>
        <p className="text-slate-600">{content.instructions || 'Une cada elemento de la izquierda con su correspondiente a la derecha.'}</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Left Column */}
        <div className="space-y-3">
          {leftItems.map((item) => {
            const isMatched = !!matches[item];
            const isSelected = selectedLeft === item;
            return (
              <button
                key={item}
                onClick={() => handleLeftClick(item)}
                disabled={submitted}
                className={`w-full p-4 rounded-xl border-2 font-bold text-lg transition-all text-left ${
                  isSelected 
                    ? 'border-orange-500 bg-orange-50 text-orange-700' 
                    : isMatched
                      ? 'border-blue-200 bg-blue-50 text-blue-700'
                      : 'border-slate-100 bg-slate-50 hover:border-slate-300 text-slate-700'
                } ${submitted && isMatched && (matches[item] === content.pairs.find(p => p.left === item)?.right ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')}`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          {rightItems.map((item) => {
            const matchedLeft = Object.keys(matches).find(left => matches[left] === item);
            const isMatched = !!matchedLeft;
            const isSelected = selectedRight === item;
            return (
              <button
                key={item}
                onClick={() => handleRightClick(item)}
                disabled={submitted}
                className={`w-full p-4 rounded-xl border-2 font-bold text-lg transition-all text-left ${
                  isSelected 
                    ? 'border-orange-500 bg-orange-50 text-orange-700' 
                    : isMatched
                      ? 'border-blue-200 bg-blue-50 text-blue-700'
                      : 'border-slate-100 bg-slate-50 hover:border-slate-300 text-slate-700'
                } ${submitted && isMatched && (item === content.pairs.find(p => p.left === matchedLeft)?.right ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')}`}
              >
                {item}
              </button>
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
    </div>
  );
}
