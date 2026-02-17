'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, Sparkles, Zap, Loader2, Volume2 } from 'lucide-react';
import type { Exercise } from '@/lib/exercise-generator';
import SpeakingExercise from './SpeakingExercise';
import WordSearchExercise from './exercises/WordSearchExercise';
import CrosswordExercise from './exercises/CrosswordExercise';
import FlashcardExercise from './exercises/FlashcardExercise';
import DragDropExercise from './exercises/DragDropExercise';
import MatchingExercise from './exercises/MatchingExercise';
import InteractiveDialogueExercise from './exercises/InteractiveDialogueExercise';
import Markdown from './course/Markdown';
import { TranslatedText } from './course/exercises/TranslatedText';
import { useGamification } from '@/lib/hooks/use-gamification';
import { updateSRSItem } from '@/lib/srs';

interface ExerciseRendererProps {
  exercise: Exercise;
  vocabulary?: any[];
  onComplete: (result?: { success: boolean; score: number }) => void;
}

export default function ExerciseRenderer({ exercise, vocabulary, onComplete }: ExerciseRendererProps) {
  const { completeExercise } = useGamification();
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [finishScore, setFinishScore] = useState(0);
  const [showReadingText, setShowReadingText] = useState(true);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [evaluation, setEvaluation] = useState<{
    isCorrect: boolean;
    score: number;
    feedback: string;
  } | null>(null);

  const [mounted, setMounted] = useState(false);

  // Normalize exercise data
  const exerciseContent = exercise.content || exercise;
  const questions = exerciseContent.questions || [];
  
  const isReadingExercise = (
    exercise.topicName?.toLowerCase().includes('reading') || 
    exercise.topic?.toLowerCase().includes('reading') || 
    exercise.type === 'reading-comprehension'
  ) && !!exercise.transcript;

  useEffect(() => {
    setMounted(true);
    setUserAnswer(null);
    setSubmitted(false);
    setIsCorrect(false);
    setShowConfetti(false);
    setShowFinishButton(false);
    setFinishScore(0);
    setEvaluation(null);
    setIsAnimating(true);
    setShowReadingText(true);
    setCurrentQuestionIdx(0);
    
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [exercise.id]);

  const stripTags = (s: string) => s.replace(/\[\[(.*?)\|(.*?)\]\]/g, '$1');

  const normalize = (s: string) => stripTags(s)
    .toLowerCase()
    .trim()
    .replace(/\s*[\/\\]\s*/g, ' / ')
    .replace(/\s+/g, ' ');

  const checkMultipleChoiceCorrect = (q: any, selectedIdx: number) => {
    if (q.correctAnswer === undefined) return false;
    
    if (typeof q.correctAnswer === 'number') {
      return q.correctAnswer === selectedIdx;
    }
    
    const answers = Array.isArray(q.correctAnswer) 
      ? q.correctAnswer.map(a => String(a).trim()) 
      : [String(q.correctAnswer).trim()];
    
    for (const answer of answers) {
      if (/^[A-D]$/i.test(answer)) {
        const answerIdx = answer.toUpperCase().charCodeAt(0) - 65;
        if (answerIdx === selectedIdx) return true;
      }
      
      const selectedOption = q.options[selectedIdx];
      const selectedText = typeof selectedOption === 'string' ? selectedOption : selectedOption.text;
      
      if (normalize(answer) === normalize(selectedText)) return true;
    }
    
    return false;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    
    // For exercises with questions array
    if (questions && questions.length > 0) {
      const q = questions[currentQuestionIdx];
      let correct = false;

      if (q.type === 'true-false') {
        correct = String(q.correctAnswer).toLowerCase() === String(userAnswer).toLowerCase();
      } else if (q.options && Array.isArray(q.options) && exercise.type !== 'fill-blank') {
        correct = checkMultipleChoiceCorrect(q, userAnswer);
      } else {
        const userAnswerText = typeof userAnswer === 'string' ? userAnswer : '';
        const userAnswerNormalized = normalize(userAnswerText);
        const correctAnswers = [
          ...(Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer]),
          ...(Array.isArray(q.acceptableAnswers) ? q.acceptableAnswers : (q.acceptableAnswers ? [q.acceptableAnswers] : [])),
          ...(Array.isArray(q.acceptableAlternatives) ? q.acceptableAlternatives : (q.acceptableAlternatives ? [q.acceptableAlternatives] : []))
        ].filter(Boolean).map(a => normalize(String(a)));
        
        correct = correctAnswers.includes(userAnswerNormalized);
      }

      setIsCorrect(correct);
      const displayCorrectAnswer = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
      setEvaluation({
        isCorrect: correct,
        score: correct ? 100 : 0,
        feedback: correct ? '¡Excelente! Respuesta correcta.' : `Respuesta incorrecta. La respuesta correcta era: **${stripTags(String(displayCorrectAnswer))}**`,
      });

      if (correct) setShowConfetti(true);
    } else {
      // Single question format
      let correct = false;
      if (exerciseContent.options && Array.isArray(exerciseContent.options) && userAnswer !== null) {
        correct = checkMultipleChoiceCorrect(exerciseContent, userAnswer);
      } else {
        correct = userAnswer !== null && userAnswer !== '';
      }
      
      setIsCorrect(correct);
      if (correct) {
        setShowConfetti(true);
        completeExercise(exercise.id, 1, 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (questions && currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setUserAnswer(null);
      setSubmitted(false);
      setEvaluation(null);
      setShowConfetti(false);
      setIsCorrect(false);
    } else {
      completeExercise(exercise.id, 1, 1);
      onComplete({ success: true, score: 100 });
    }
  };

  const handleFinishSingle = () => {
    onComplete({ success: isCorrect, score: isCorrect ? 100 : 0 });
  };

  const renderCurrentQuestion = (q: any, qIndex: number) => {
    return (
      <div key={qIndex} className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 transition-all hover:shadow-md">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-wider">
              Pregunta {qIndex + 1} de {questions.length}
            </span>
          </div>
          <div className="text-2xl text-gray-900 font-black leading-tight">
            <TranslatedText text={q.question || q.text || q.prompt} />
          </div>
        </div>

        {/* Options Rendering */}
        <div className="space-y-4">
          {/* True/False */}
          {q.type === 'true-false' && (
            <div className="flex gap-4">
              {['True', 'False'].map((option) => {
                const isUserAnswer = userAnswer === option;
                const isCorrectAnswer = String(q.correctAnswer).toLowerCase() === option.toLowerCase();
                const showAsCorrect = submitted && isCorrectAnswer;
                const showAsIncorrect = submitted && isUserAnswer && !isCorrectAnswer;

                return (
                  <button
                    key={option}
                    onClick={() => !submitted && setUserAnswer(option)}
                    disabled={submitted}
                    className={`flex-1 p-8 rounded-3xl border-4 font-black text-2xl transition-all duration-200 ${
                      isUserAnswer && !submitted
                        ? 'border-orange-500 bg-orange-50 shadow-xl ring-4 ring-orange-100 text-orange-700'
                        : 'border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-600'
                    } ${
                      showAsCorrect ? 'border-green-500 bg-green-50 text-green-700 shadow-green-100' : ''
                    } ${
                      showAsIncorrect ? 'border-red-500 bg-red-50 text-red-700 shadow-red-100' : ''
                    } disabled:cursor-not-allowed`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <span>{option === 'True' ? 'Verdadero' : 'Falso'}</span>
                      {showAsCorrect && <CheckCircle className="w-8 h-8 text-green-500" />}
                      {showAsIncorrect && <XCircle className="w-8 h-8 text-red-500" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Multiple Choice */}
          {q.options && Array.isArray(q.options) && q.type !== 'fill-blank' && (
            <div className="space-y-3">
              {q.options.map((option: any, optIndex: number) => {
                const isUserAnswer = userAnswer === optIndex;
                const isCorrectAnswer = checkMultipleChoiceCorrect(q, optIndex);
                const showAsCorrect = submitted && isCorrectAnswer;
                const showAsIncorrect = submitted && isUserAnswer && !isCorrectAnswer;
                
                return (
                  <button
                    key={optIndex}
                    onClick={() => !submitted && setUserAnswer(optIndex)}
                    disabled={submitted}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                      isUserAnswer && !submitted
                        ? 'border-orange-500 bg-orange-50 shadow-md ring-2 ring-orange-200'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    } ${showAsCorrect ? 'border-green-500 bg-green-50' : ''} ${showAsIncorrect ? 'border-red-500 bg-red-50' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg ${
                        showAsCorrect ? 'bg-green-500 text-white' : showAsIncorrect ? 'bg-red-500 text-white' : isUserAnswer && !submitted ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {String.fromCharCode(65 + optIndex)}
                      </div>
                      <div className="text-lg font-bold text-gray-800 flex-1">
                        <TranslatedText text={typeof option === 'string' ? option : option.text} />
                      </div>
                      {showAsCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}
                      {showAsIncorrect && <XCircle className="w-6 h-6 text-red-500" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Fill Blank */}
          {q.type === 'fill-blank' && (
            <input
              type="text"
              value={userAnswer || ''}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={submitted}
              placeholder="Escribe tu respuesta..."
              className="w-full p-6 border-4 border-gray-200 rounded-3xl focus:border-orange-500 focus:outline-none text-2xl font-bold"
            />
          )}
        </div>

        {/* Action Button */}
        <div className="mt-10 flex justify-center">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={userAnswer === null || userAnswer === ''}
              className="group bg-orange-600 text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 transform hover:scale-105 active:scale-95"
            >
              <Zap className="w-7 h-7 group-hover:animate-pulse" />
              Confirmar Respuesta
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="group bg-green-600 text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-green-700 transition-all shadow-xl hover:shadow-green-200 flex items-center gap-3 transform hover:scale-105 active:scale-95 animate-in fade-in zoom-in duration-300"
            >
              {currentQuestionIdx < questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Ejercicio'}
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Feedback */}
        {submitted && evaluation && (
          <div className={`mt-8 p-8 rounded-3xl border-4 animate-slide-in ${
            evaluation.isCorrect ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <div className="flex items-center gap-4 mb-3">
              {evaluation.isCorrect ? <CheckCircle className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
              <span className="text-2xl font-black">{evaluation.isCorrect ? '¡Excelente!' : 'Casi...'}</span>
            </div>
            <div className="text-xl font-bold opacity-90">
              <Markdown content={evaluation.feedback} vocabulary={vocabulary} />
            </div>
            {q.explanation && (
              <div className="mt-6 p-5 bg-white/50 rounded-2xl text-lg border border-current/10">
                <p className="font-black mb-2 flex items-center gap-2">💡 Explicación:</p>
                <Markdown content={q.explanation} vocabulary={vocabulary} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  if (!mounted) return null;

  // Dedicated Renderers
  if (exercise.type === 'speaking-analysis' && questions.length > 0) {
    return (
      <div className="space-y-6">
        <SpeakingExercise
          question={questions[0]}
          vocabulary={vocabulary}
          level={exercise.level}
          onComplete={(evalResult) => {
            setShowFinishButton(true);
            setFinishScore(evalResult.overallScore || 100);
          }}
        />
        {showFinishButton && (
          <button onClick={() => onComplete({ success: finishScore >= 70, score: finishScore })} className="...">Siguiente</button>
        )}
      </div>
    );
  }

  // Common types logic ... (skipping for brevity but keeping structure)
  if (exercise.type === 'word-search') return <div className="bg-white p-8 rounded-3xl shadow-xl"><WordSearchExercise words={exerciseContent.words} onComplete={() => onComplete({ success: true, score: 100 })} /></div>;
  if (exercise.type === 'crossword') return <div className="bg-white p-8 rounded-3xl shadow-xl"><CrosswordExercise items={exerciseContent.items} onComplete={() => onComplete({ success: true, score: 100 })} /></div>;
  if (exercise.type === 'flashcard') return <FlashcardExercise content={exerciseContent as any} onComplete={() => onComplete({ success: true, score: 100 })} />;
  if (exercise.type === 'drag-drop' || exercise.type === 'sentence-building') return <DragDropExercise content={exerciseContent as any} onComplete={(success) => onComplete({ success, score: success ? 100 : 0 })} />;
  if (exercise.type === 'matching') return <MatchingExercise content={exerciseContent as any} onComplete={(success) => onComplete({ success, score: success ? 100 : 0 })} />;
  if (exercise.type === 'interactive-dialogue') return <InteractiveDialogueExercise content={exerciseContent as any} onComplete={(success) => onComplete({ success, score: success ? 100 : 0 })} />;

  // Default Renderer
  return (
    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="p-8 border-b border-gray-50 bg-slate-50/50">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest">{exercise.level}</span>
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest">{exercise.type}</span>
            <span className="bg-purple-500 text-white px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest">{exercise.topicName}</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight"><TranslatedText text={exerciseContent.title || 'Ejercicio'} /></h2>
          {exerciseContent.instructions && <div className="text-gray-500 mt-2 text-lg font-medium"><Markdown content={exerciseContent.instructions} /></div>}
        </div>

        <div className="p-8">
          {isReadingExercise && showReadingText ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-10 bg-white border-l-8 border-purple-500 rounded-r-3xl shadow-inner text-slate-800 text-2xl leading-relaxed font-medium italic relative">
                <Markdown content={exercise.transcript!} />
              </div>
              <div className="flex justify-center">
                <button onClick={() => setShowReadingText(false)} className="bg-purple-600 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-purple-700 shadow-2xl flex items-center gap-3 transform hover:scale-105 active:scale-95">
                  Comprender texto y responder <ArrowRight className="w-7 h-7" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {questions.length > 0 ? renderCurrentQuestion(questions[currentQuestionIdx], currentQuestionIdx) : (
                <div className="text-center p-10">
                  <p className="text-xl text-gray-500">Este ejercicio no tiene preguntas configuradas.</p>
                  <button onClick={() => onComplete({ success: true, score: 100 })} className="mt-6 bg-slate-800 text-white px-8 py-3 rounded-xl font-bold">Continuar</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 bg-white/80 backdrop-blur rounded-2xl p-6 border border-gray-200 flex justify-between items-center text-gray-500 font-bold">
        <div className="flex items-center gap-2">⏱️ Tiempo estimado: {exercise.estimatedTime || 5} min</div>
        <div className="flex items-center gap-2">📅 {mounted && new Date().toLocaleDateString()}</div>
      </div>
    </div>
  );
}
