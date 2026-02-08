'use client';

import { useState, useEffect } from 'react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Lightbulb, ArrowRight } from 'lucide-react';

interface DragDropSentence {
  id?: number | string;
  words?: string[];
  correctOrder?: string[];
  shuffledWords?: string[]; // Add to unify
  correctSentence?: string;
  sentence?: string;
  translation?: string;
  hint?: string;
}

interface DragDropContent extends DragDropSentence {
  title?: string;
  instructions?: string;
  sentences?: DragDropSentence[];
}

interface DragDropExerciseProps {
  content: DragDropContent;
  onComplete: (isCorrect: boolean) => void;
}

export default function DragDropExercise({ content, onComplete }: DragDropExerciseProps) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [items, setItems] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [overallCorrect, setOverallCorrect] = useState(true);

  const sentences = content.sentences || [];
  const isMultiSentence = sentences.length > 0;
  
  const currentSentenceData = isMultiSentence 
    ? sentences[currentSentenceIndex] 
    : content;

  const targetSentence = currentSentenceData.correctSentence || 
                         currentSentenceData.sentence || 
                         (currentSentenceData.correctOrder ? currentSentenceData.correctOrder.join(' ') : '');

  useEffect(() => {
    const data = currentSentenceData;
    const target = targetSentence;

    if (data.shuffledWords && data.shuffledWords.length > 0) {
      setItems(data.shuffledWords);
    } else if (data.words && data.words.length > 0) {
      setItems([...data.words].sort(() => Math.random() - 0.5));
    } else if (target) {
      // Shuffle words from the correct sentence
      const words = target.split(' ').filter(w => w.trim() !== '');
      const shuffled = [...words].sort(() => Math.random() - 0.5);
      // Ensure it's not the same as the target (at least try)
      if (shuffled.join(' ') === target && words.length > 1) {
        shuffled.reverse();
      }
      setItems(shuffled);
    }
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
  }, [content, targetSentence, currentSentenceIndex]);

  const handleCheck = () => {
    // Better join that handles punctuation
    const currentSentence = items.join(' ').replace(/\s+([.,!?;:])/g, '$1').trim();
    
    // Robust normalization for comparison
    const normalize = (s: string) => s
      .toLowerCase()
      .replace(/[.,!?;:]/g, '') // Remove punctuation
      .replace(/\s+/g, ' ')     // Collapse multiple spaces
      .trim();
    
    const normalizedCurrent = normalize(currentSentence);
    const normalizedTarget = normalize(targetSentence);
    
    const correct = normalizedCurrent === normalizedTarget;
    setIsCorrect(correct);
    setSubmitted(true);
    if (!correct) setOverallCorrect(false);
  };

  const handleReset = () => {
    const data = currentSentenceData;
    const target = targetSentence;

    if (data.shuffledWords && data.shuffledWords.length > 0) {
      setItems(data.shuffledWords);
    } else if (data.words && data.words.length > 0) {
      setItems([...data.words].sort(() => Math.random() - 0.5));
    } else if (target) {
      const words = target.split(' ').filter(w => w.trim() !== '');
      setItems([...words].sort(() => Math.random() - 0.5));
    }
    setSubmitted(false);
  };

  const handleNext = () => {
    if (isMultiSentence && currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(prev => prev + 1);
    } else {
      onComplete(overallCorrect && (isMultiSentence ? true : isCorrect));
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-lg border border-slate-200">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-black text-slate-900">{content.title || 'Ordena la oración'}</h2>
          {isMultiSentence && (
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold">
              {currentSentenceIndex + 1} / {sentences.length}
            </span>
          )}
        </div>
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
              key={`${item}-${index}-${currentSentenceIndex}`} // Stable enough for unique items per sentence
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

      {currentSentenceData.translation && (
        <div className="mb-8 p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-center gap-3">
          <span className="text-orange-400 font-bold">ES:</span>
          <span className="text-slate-700 font-medium italic">{currentSentenceData.translation}</span>
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
                onClick={handleNext}
                className={`flex-1 text-white px-6 py-4 rounded-2xl font-black transition-all shadow-lg flex items-center justify-center gap-2 ${
                  isCorrect ? 'bg-green-600 hover:bg-green-700 shadow-green-100' : 'bg-slate-400 hover:bg-slate-500 shadow-slate-100'
                }`}
              >
                {isMultiSentence && currentSentenceIndex < sentences.length - 1 ? 'Siguiente oración' : 'Finalizar'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {currentSentenceData.hint && (
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
                  {currentSentenceData.hint}
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
