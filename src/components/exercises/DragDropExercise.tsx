'use client';

import { useState, useEffect } from 'react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Lightbulb } from 'lucide-react';

interface DragDropContent {
  title?: string;
  instructions?: string;
  sentence?: string; // Legacy
  correctSentence?: string; // New
  shuffledWords?: string[];
  translation?: string;
  hint?: string;
}

interface DragDropExerciseProps {
  content: DragDropContent;
  onComplete: (isCorrect: boolean) => void;
}

export default function DragDropExercise({ content, onComplete }: DragDropExerciseProps) {
  const [items, setItems] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const targetSentence = content.correctSentence || content.sentence || '';

  useEffect(() => {
    if (content.shuffledWords && content.shuffledWords.length > 0) {
      setItems(content.shuffledWords);
    } else if (targetSentence) {
      // Shuffle words from the correct sentence
      const words = targetSentence.split(' ');
      const shuffled = [...words].sort(() => Math.random() - 0.5);
      // Ensure it's not the same as the target (at least try)
      if (shuffled.join(' ') === targetSentence && words.length > 1) {
        shuffled.reverse();
      }
      setItems(shuffled);
    }
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
  }, [content, targetSentence]);

  const handleCheck = () => {
    const currentSentence = items.join(' ').replace(/\s+([.,!?;:])/g, '$1').trim();
    
    // Simple normalization for comparison
    const normalizedCurrent = currentSentence.toLowerCase().replace(/[.,!?;:]/g, '');
    const normalizedTarget = targetSentence.toLowerCase().replace(/[.,!?;:]/g, '');
    
    const correct = normalizedCurrent === normalizedTarget;
    setIsCorrect(correct);
    setSubmitted(true);
    
    if (correct) {
      onComplete(true);
    }
  };

  const handleReset = () => {
    if (content.shuffledWords && content.shuffledWords.length > 0) {
      setItems(content.shuffledWords);
    } else {
      const words = targetSentence.split(' ');
      setItems([...words].sort(() => Math.random() - 0.5));
    }
    setSubmitted(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-lg border border-slate-200">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-900 mb-2">{content.title || 'Ordena la oración'}</h2>
        <p className="text-slate-600">{content.instructions || 'Arrastra las palabras para formar la oración correcta.'}</p>
      </div>

      <div className="min-h-[120px] p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 mb-8 flex flex-wrap gap-3 items-center justify-center">
        <Reorder.Group 
          axis="x" 
          values={items} 
          onReorder={setItems}
          className="flex flex-wrap gap-2 justify-center"
        >
          {items.map((item, index) => (
            <Reorder.Item
              key={item + index} // Unique key for reordering
              value={item}
              drag={!submitted}
              className={`px-4 py-2 bg-white rounded-xl shadow-sm border-2 cursor-grab active:cursor-grabbing font-bold text-lg transition-colors ${
                submitted 
                  ? isCorrect 
                    ? 'border-green-500 bg-green-50 text-green-700' 
                    : 'border-red-500 bg-red-50 text-red-700'
                  : 'border-slate-200 hover:border-orange-300'
              } ${submitted ? 'cursor-default active:cursor-default' : ''}`}
            >
              {item}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      {content.translation && (
        <div className="mb-8 p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-center gap-3">
          <span className="text-orange-400 font-bold">ES:</span>
          <span className="text-slate-700 font-medium italic">{content.translation}</span>
        </div>
      )}

      <div className="flex flex-col space-y-4">
        <div className="flex gap-3">
          {!submitted ? (
            <>
              <button
                onClick={handleCheck}
                className="flex-1 bg-orange-500 text-white px-6 py-4 rounded-2xl font-black hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                Comprobar
              </button>
              <button
                onClick={handleReset}
                className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:bg-slate-200 transition-all"
                title="Reiniciar"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </>
          ) : (
            <button
              onClick={handleReset}
              className="flex-1 bg-slate-900 text-white px-6 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Intentar de nuevo
            </button>
          )}
        </div>

        {content.hint && (
          <div className="w-full">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 text-slate-500 text-sm font-bold hover:text-orange-500 transition-colors"
            >
              <Lightbulb className="w-4 h-4" />
              {showHint ? 'Ocultar pista' : 'Ver pista'}
            </button>
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-2 text-slate-600 text-sm italic overflow-hidden"
                >
                  {content.hint}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`mt-6 p-4 rounded-2xl flex items-center gap-3 font-bold ${
              isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {isCorrect ? (
              <>
                <Check className="w-6 h-6" />
                <span>¡Excelente trabajo! La oración es correcta.</span>
              </>
            ) : (
              <>
                <X className="w-6 h-6" />
                <span>Casi... revisa el orden de las palabras.</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
