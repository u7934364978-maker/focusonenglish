'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, RotateCcw, Check, X, Info } from 'lucide-react';

interface FlashcardItem {
  front: string | { text: string; image?: string; audio?: string; phonetic?: string };
  back: string | { text: string; translation: string; explanation?: string; example?: string };
  pronunciation?: string;
}

interface FlashcardContent {
  title?: string;
  instructions?: string;
  items: FlashcardItem[];
}

interface FlashcardExerciseProps {
  content: FlashcardContent;
  onComplete: (quality: number) => void;
}

export default function FlashcardExercise({ content, onComplete }: FlashcardExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [qualities, setQualities] = useState<number[]>([]);

  const currentItem = content.items[currentIndex];
  
  // Normalizar el item actual
  const normalizedFront = typeof currentItem.front === 'string' 
    ? { text: currentItem.front, image: undefined, audio: undefined, phonetic: undefined } 
    : {
        text: currentItem.front.text,
        image: currentItem.front.image,
        audio: currentItem.front.audio,
        phonetic: currentItem.front.phonetic
      };
    
  const normalizedBack = typeof currentItem.back === 'string'
    ? { translation: currentItem.back, text: '', explanation: undefined, example: undefined }
    : { 
        translation: currentItem.back.translation, 
        text: currentItem.back.text || '', 
        explanation: currentItem.back.explanation, 
        example: currentItem.back.example 
      };

  const playAudio = (text: string) => {
    // Si hay un audio específico lo usamos, si no usamos speech synthesis
    if (normalizedFront.audio) {
      const audio = new Audio(normalizedFront.audio);
      audio.play().catch(err => console.error('Error playing audio:', err));
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleQualitySelect = (quality: number) => {
    const newQualities = [...qualities, quality];
    setQualities(newQualities);
    
    if (currentIndex < content.items.length - 1) {
      setIsFlipped(false);
      setShowExplanation(false);
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calcular calidad promedio para el ejercicio completo
      const avgQuality = Math.round(newQualities.reduce((a, b) => a + b, 0) / newQualities.length);
      onComplete(avgQuality);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-lg mx-auto py-4">
      <div className="w-full flex justify-between items-center px-4">
        <span className="text-sm font-bold text-slate-400">TARJETA {currentIndex + 1} DE {content.items.length}</span>
        <div className="h-2 flex-1 mx-4 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-orange-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + (isFlipped ? 1 : 0)) / content.items.length) * 100}%` }}
          />
        </div>
      </div>

      <div 
        className="relative w-full h-80 cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Front Side */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl shadow-xl border-2 border-orange-100 p-8 flex flex-col items-center justify-center text-center">
            {normalizedFront.image && (
              <img 
                src={normalizedFront.image} 
                alt={normalizedFront.text} 
                className="w-32 h-32 object-contain mb-4"
              />
            )}
            <h2 className="text-4xl font-black text-slate-900 mb-2">{normalizedFront.text}</h2>
            {(normalizedFront.phonetic || currentItem.pronunciation) && (
              <p className="text-orange-500 font-mono text-lg">{normalizedFront.phonetic || currentItem.pronunciation}</p>
            )}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                playAudio(normalizedFront.text);
              }}
              className="mt-4 p-3 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-colors"
            >
              <Volume2 className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 text-slate-400 text-sm flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              Haz clic para ver la traducción
            </div>
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden bg-orange-50 rounded-3xl shadow-xl border-2 border-orange-200 p-8 flex flex-col items-center justify-center text-center"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <h2 className="text-2xl text-slate-600 mb-2">Traducción:</h2>
            <h3 className="text-4xl font-black text-orange-600 mb-4">{normalizedBack.translation}</h3>
            
            {normalizedBack.example && (
              <div className="mt-4 bg-white/50 p-4 rounded-xl border border-orange-100 italic text-slate-700">
                "{normalizedBack.example}"
              </div>
            )}

            {normalizedBack.explanation && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowExplanation(!showExplanation);
                }}
                className="mt-4 flex items-center gap-2 text-orange-700 font-bold text-sm hover:underline"
              >
                <Info className="w-4 h-4" />
                {showExplanation ? 'Ocultar explicación' : 'Ver explicación'}
              </button>
            )}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isFlipped && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col items-center space-y-6 w-full"
          >
            {showExplanation && normalizedBack.explanation && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-blue-800 text-sm w-full"
              >
                {normalizedBack.explanation}
              </motion.div>
            )}

            <div className="w-full">
              <p className="text-center text-slate-500 font-bold mb-4 uppercase tracking-wider text-xs">
                ¿Qué tan difícil fue recordarlo?
              </p>
              <div className="grid grid-cols-4 gap-3 w-full">
                {[
                  { label: 'Otra vez', quality: 0, color: 'bg-red-100 text-red-700 border-red-200' },
                  { label: 'Difícil', quality: 3, color: 'bg-orange-100 text-orange-700 border-orange-200' },
                  { label: 'Bien', quality: 4, color: 'bg-green-100 text-green-700 border-green-200' },
                  { label: 'Fácil', quality: 5, color: 'bg-blue-100 text-blue-700 border-blue-200' },
                ].map((btn) => (
                  <button
                    key={btn.quality}
                    onClick={() => handleQualitySelect(btn.quality)}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all hover:scale-105 active:scale-95 font-bold text-sm ${btn.color}`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
