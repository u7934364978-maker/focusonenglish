'use client';

import { useState, useEffect } from 'react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Lightbulb, ArrowRight, Plus, Minus, Volume2 } from 'lucide-react';
import { TranslatedText } from '../course/exercises/TranslatedText';
import Markdown from '../course/Markdown';

interface DragDropSentence {
  id?: number | string;
  words?: string[];
  correctOrder?: string[];
  shuffledWords?: string[]; 
  correctSentence?: string;
  sentence?: string;
  translation?: string;
  hint?: string;
  explanation?: string;
  audio?: string;
}

interface DragDropContent extends DragDropSentence {
  title?: string;
  instructions?: string;
  sentences?: DragDropSentence[];
}

interface DragDropExerciseProps {
  content: DragDropContent;
  vocabulary?: any[];
  onComplete: (isCorrect: boolean) => void;
}

interface WordTile {
  id: string;
  text: string;
}

export default function DragDropExercise({ content, vocabulary, onComplete }: DragDropExerciseProps) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [availableItems, setAvailableItems] = useState<WordTile[]>([]);
  const [orderedItems, setOrderedItems] = useState<WordTile[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [overallCorrect, setOverallCorrect] = useState(true);

  const sentences = content.sentences || (content as any).questions || [];
  const isMultiSentence = sentences.length > 0;
  
  const currentSentenceData = isMultiSentence 
    ? sentences[currentSentenceIndex] 
    : content;

  const targetSentence = currentSentenceData.correctSentence || 
                         currentSentenceData.sentence || 
                         (currentSentenceData as any).question ||
                         "";

  const initializeSentence = () => {
    const data = currentSentenceData;
    const target = targetSentence;
    let wordsToShuffle: string[] = [];

    if (data.words && data.words.length > 0) {
      wordsToShuffle = [...data.words];
    } else if (data.shuffledWords && data.shuffledWords.length > 0) {
      wordsToShuffle = [...data.shuffledWords];
    } else if ((data as any).options && (data as any).options.length > 0) {
      wordsToShuffle = [...(data as any).options];
    } else if (target) {
      wordsToShuffle = target.split(' ').filter(w => w.trim() !== '');
    }

    // Convert to WordTile objects for stable keys and handling duplicates
    const tiles: WordTile[] = wordsToShuffle.map((text, index) => ({
      id: `${text}-${index}-${currentSentenceIndex}`,
      text
    })).sort(() => Math.random() - 0.5);

    setAvailableItems(tiles);
    setOrderedItems([]);
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  useEffect(() => {
    initializeSentence();
  }, [content, targetSentence, currentSentenceIndex]);

  const handleCheck = () => {
    // Better join that handles punctuation
    const currentSentence = orderedItems.map(item => item.text).join(' ').replace(/\s+([.,!?;:])/g, '$1').trim();
    
    // Robust normalization for comparison
    const normalize = (s: string) => {
      // Remove translation tags [[word|translation]] -> word
      const plainText = s.replace(/\[\[(.*?)\|(.*?)\]\]/g, '$1');
      return plainText
        .toLowerCase()
        .replace(/[.,!?;:]/g, '') // Remove punctuation
        .replace(/\s+/g, ' ')     // Collapse multiple spaces
        .trim();
    };
    
    const normalizedCurrent = normalize(currentSentence);
    const normalizedTarget = normalize(targetSentence);
    
    const correct = normalizedCurrent === normalizedTarget;
    setIsCorrect(correct);
    setSubmitted(true);
    if (!correct) setOverallCorrect(false);
  };

  const handleReset = () => {
    initializeSentence();
  };

  const handleNext = () => {
    if (isMultiSentence && currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(prev => prev + 1);
    } else {
      onComplete(overallCorrect && (isMultiSentence ? true : isCorrect));
    }
  };

  const toggleWord = (tile: WordTile, source: 'available' | 'ordered') => {
    if (submitted) return;
    
    if (source === 'available') {
      setAvailableItems(prev => prev.filter(t => t.id !== tile.id));
      setOrderedItems(prev => [...prev, tile]);
    } else {
      setOrderedItems(prev => prev.filter(t => t.id !== tile.id));
      setAvailableItems(prev => [...prev, tile]);
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
        <div className="text-slate-600">
          <Markdown content={content.instructions || 'Selecciona las palabras en el orden correcto.'} vocabulary={vocabulary} />
        </div>
      </div>

      {/* Target Area */}
      <div className="space-y-4 mb-8">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Tu oración:</h3>
        <div className="min-h-[100px] p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-wrap gap-3 items-center justify-center">
          {orderedItems.length === 0 ? (
            <p className="text-slate-400 italic">Pulsa sobre las palabras de abajo...</p>
          ) : (
            <Reorder.Group 
              axis="x" 
              values={orderedItems} 
              onReorder={setOrderedItems}
              className="flex flex-wrap gap-2 justify-center"
            >
              {orderedItems.map((item) => (
                <Reorder.Item
                  key={item.id}
                  value={item}
                  drag={!submitted}
                  onClick={() => toggleWord(item, 'ordered')}
                  className={`px-4 py-2 bg-white rounded-xl shadow-sm border-2 cursor-pointer font-bold text-lg transition-colors flex items-center gap-2 ${
                    submitted 
                      ? isCorrect 
                        ? 'border-green-500 bg-green-50 text-green-700' 
                        : 'border-red-500 bg-red-50 text-red-700'
                      : 'border-slate-200 hover:border-orange-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <TranslatedText text={item.text} />
                  </span>
                  {!submitted && <Minus className="w-3 h-3 opacity-30" />}
                </Reorder.Item>
              ))}
            </Reorder.Group>
          )}
        </div>
      </div>

      {/* Available Words */}
      {!submitted && (
        <div className="space-y-4 mb-8">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Palabras disponibles:</h3>
          <div className="flex flex-wrap gap-2 justify-center p-4 bg-white rounded-2xl border border-slate-100">
            {availableItems.length === 0 ? (
              <p className="text-slate-300 text-sm italic">Has usado todas las palabras.</p>
            ) : (
              availableItems.map((item) => (
                <motion.button
                  layout
                  key={item.id}
                  onClick={() => toggleWord(item, 'available')}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl border border-slate-200 font-bold text-lg transition-all flex items-center gap-2"
                >
                  <span className="flex items-center gap-2">
                    <TranslatedText text={item.text} />
                  </span>
                  <Plus className="w-3 h-3 opacity-30" />
                </motion.button>
              ))
            )}
          </div>
        </div>
      )}

      {currentSentenceData.translation && (
        <div className="mb-8 p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-center gap-3">
          <span className="text-orange-400 font-bold">ES:</span>
          <div className="text-slate-700 font-medium italic">
            <Markdown content={currentSentenceData.translation} vocabulary={vocabulary} />
          </div>
        </div>
      )}

      <div className="flex flex-col space-y-4">
        <div className="flex gap-3">
          {!submitted ? (
            <>
              <button
                onClick={handleCheck}
                disabled={orderedItems.length === 0}
                className="flex-1 bg-orange-500 text-white px-6 py-4 rounded-2xl font-black hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2 disabled:opacity-50"
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
                  <Markdown content={currentSentenceData.hint} vocabulary={vocabulary} />
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
                <span className="flex-1">¡Excelente trabajo! La oración es correcta.</span>
              </>
            ) : (
              <>
                <X className="w-6 h-6" />
                <span className="flex-1">Casi... la respuesta correcta es: <span className="font-black underline italic ml-1">{targetSentence.replace(/\[\[(.*?)\|(.*?)\]\]/g, '$1')}</span></span>
              </>
            )}
            {currentSentenceData.audio && (
              <button
                onClick={() => {
                  const audio = new Audio(currentSentenceData.audio);
                  audio.play().catch(err => console.error('Error playing audio:', err));
                }}
                className="p-2 bg-white/50 text-current rounded-full hover:bg-white/80 transition-all shadow-sm"
                title="Escuchar oración"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {submitted && currentSentenceData.explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={`mt-4 p-4 rounded-2xl border ${
              isCorrect ? 'bg-green-50 border-green-100 text-green-800' : 'bg-blue-50 border-blue-100 text-blue-800'
            }`}
          >
            <p className="font-bold mb-1 text-sm flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              💡 Explicación:
            </p>
            <div className="text-sm">
              <Markdown content={currentSentenceData.explanation} vocabulary={vocabulary} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
