"use client";

import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle, ArrowRight, Trophy, RefreshCcw, Home } from "lucide-react";
import ExerciseRenderer, { ExerciseRendererRef } from "./ExerciseRenderer";
import type { ExerciseItem } from "./types";
import Link from "next/link";

interface Props {
  items: ExerciseItem[];
  onFinish: (results: { id: string; isCorrect: boolean }[]) => void;
  onExit: () => void;
}

export default function FocusedExerciseInterface({ items, onFinish, onExit }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);
  const [results, setResults] = useState<{ id: string; isCorrect: boolean }[]>([]);
  const [showSummary, setShowSummary] = useState(false);
  
  const rendererRef = useRef<ExerciseRendererRef>(null);
  const currentItem = items[currentIndex];
  const progress = ((currentIndex) / items.length) * 100;

  const handleCheck = () => {
    if (rendererRef.current) {
      const correct = rendererRef.current.check();
      setIsCorrect(correct);
      setIsAnswered(true);
      setResults(prev => [...prev, { id: currentItem.id, isCorrect: correct }]);
    }
  };

  const handleContinue = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsAnswered(false);
      setHasSelection(false);
    } else {
      setShowSummary(true);
    }
  };

  if (showSummary) {
    const correctCount = results.filter(r => r.isCorrect).length;
    const accuracy = Math.round((correctCount / items.length) * 100);

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-6 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6"
        >
          <Trophy className="w-12 h-12" />
        </motion.div>
        
        <h2 className="text-3xl font-black text-slate-900 mb-2">Lesson Complete!</h2>
        <p className="text-slate-600 mb-8 text-lg">You've finished all the exercises in this unit.</p>
        
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-12">
          <div className="bg-white border-2 border-slate-100 rounded-2xl p-4 shadow-sm">
            <div className="text-3xl font-black text-slate-900">{accuracy}%</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Accuracy</div>
          </div>
          <div className="bg-white border-2 border-slate-100 rounded-2xl p-4 shadow-sm">
            <div className="text-3xl font-black text-slate-900">{correctCount}/{items.length}</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Correct</div>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full max-w-sm">
          <button
            onClick={() => onFinish(results)}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-lg shadow-slate-200 hover:brightness-95 transition"
          >
            Finalizar Lección
          </button>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setIsAnswered(false);
              setResults([]);
              setShowSummary(false);
            }}
            className="w-full py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-black text-lg hover:bg-slate-50 transition flex items-center justify-center gap-2"
          >
            <RefreshCcw className="w-5 h-5" />
            Repetir Práctica
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[80vh] bg-white">
      {/* Top Header with Progress Bar */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-8 pb-4 flex items-center gap-4">
        <button 
          onClick={onExit}
          className="p-2 text-slate-400 hover:text-slate-600 transition"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-indigo-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        
        <div className="text-sm font-black text-slate-400 min-w-[3rem] text-right">
          {currentIndex + 1} / {items.length}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ExerciseRenderer 
              ref={rendererRef}
              ex={currentItem}
              onResult={() => {}} // We handle result in local state
              layout="focused"
              onSelectionChange={setHasSelection}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Check/Feedback Bar */}
      <div className={`mt-auto border-t transition-colors duration-300 ${
        !isAnswered ? 'bg-white border-slate-100' : 
        isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'
      }`}>
        <div className="max-w-2xl mx-auto w-full px-6 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            {isAnswered && (
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-start gap-4"
              >
                <div className={`p-2 rounded-full ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
                </div>
                <div>
                  <h4 className={`text-xl font-black ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? '¡Excelente!' : 'Casi, la respuesta es...'}
                  </h4>
                  {(currentItem as any).explanation && (
                    <p className={`mt-1 text-sm ${isCorrect ? 'text-green-700' : 'text-red-700 opacity-80'}`}>
                      {(currentItem as any).explanation}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          <button
            onClick={isAnswered ? handleContinue : handleCheck}
            disabled={!hasSelection && !isAnswered}
            className={`w-full md:w-auto min-w-[12rem] py-4 px-8 rounded-2xl font-black text-lg transition shadow-lg ${
              !isAnswered 
                ? hasSelection ? 'bg-indigo-600 text-white shadow-indigo-100' : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                : isCorrect ? 'bg-green-600 text-white shadow-green-100 hover:bg-green-700' : 'bg-red-600 text-white shadow-red-100 hover:bg-red-700'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {isAnswered ? (
                <>
                  Siguiente
                  <ArrowRight className="w-5 h-5" />
                </>
              ) : 'Comprobar'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
