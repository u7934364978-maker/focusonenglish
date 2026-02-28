'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, Zap, BookOpen, AlignLeft, ToggleLeft, List, Edit3, Info } from 'lucide-react';
import type { Exercise } from '@/lib/exercise-generator';
import SpeakingExercise from './SpeakingExercise';
import EnhancedSpeakingExercise from './EnhancedSpeakingExercise';
import WordSearchExercise from './exercises/WordSearchExercise';
import CrosswordExercise from './exercises/CrosswordExercise';
import FlashcardExercise from './exercises/FlashcardExercise';
import DragDropExercise from './exercises/DragDropExercise';
import MatchingExercise from './exercises/MatchingExercise';
import InteractiveDialogueExercise from './exercises/InteractiveDialogueExercise';
import Markdown from './course/Markdown';
import { TranslatedText } from './course/exercises/TranslatedText';
import { AudioPlayer } from './course/preview/AudioPlayer';
import { useGamification } from '@/lib/hooks/use-gamification';

interface ExerciseRendererProps {
  exercise: Exercise;
  vocabulary?: any[];
  onComplete: (result?: { success: boolean; score: number }) => void;
}

const AUTO_ADVANCE_MS = 1400;

const TYPE_LABELS: Record<string, { label: string; icon: typeof BookOpen }> = {
  'multiple-choice': { label: 'Opción múltiple', icon: List },
  'true-false': { label: 'Verdadero / Falso', icon: ToggleLeft },
  'fill-blank': { label: 'Completa la frase', icon: Edit3 },
  'reading': { label: 'Comprensión lectora', icon: BookOpen },
  'reading-comprehension': { label: 'Comprensión lectora', icon: BookOpen },
  'listening': { label: 'Comprensión auditiva', icon: BookOpen },
  'default': { label: 'Ejercicio', icon: AlignLeft },
};

const TYPE_THEMES: Record<string, { badge: string; border: string; ring: string }> = {
  'multiple-choice': { badge: 'bg-[#FF6B6B]/15 text-[#FF6B6B] border-[#FF6B6B]/30', border: 'border-[#FF6B6B]/70', ring: 'ring-[#FF6B6B]/25' },
  'true-false':      { badge: 'bg-violet-100 text-violet-700 border-violet-200',       border: 'border-violet-400/70',    ring: 'ring-violet-200' },
  'fill-blank':      { badge: 'bg-amber-100 text-amber-700 border-amber-200',           border: 'border-amber-400/70',     ring: 'ring-amber-200' },
  'reading':         { badge: 'bg-sky-100 text-sky-700 border-sky-200',                 border: 'border-sky-400/70',       ring: 'ring-sky-200' },
  'reading-comprehension': { badge: 'bg-sky-100 text-sky-700 border-sky-200',           border: 'border-sky-400/70',       ring: 'ring-sky-200' },
  'listening':       { badge: 'bg-teal-100 text-teal-700 border-teal-200',              border: 'border-teal-400/70',      ring: 'ring-teal-200' },
  'default':         { badge: 'bg-slate-100 text-slate-600 border-slate-200',           border: 'border-slate-400/70',     ring: 'ring-slate-200' },
};

function getTypeInfo(type: string) {
  return TYPE_LABELS[type] ?? TYPE_LABELS['default'];
}

function getTypeTheme(type: string) {
  return TYPE_THEMES[type] ?? TYPE_THEMES['default'];
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
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const exerciseContent = exercise.content || exercise;
  const questions = exerciseContent.questions || [];

  const isReadingExercise = (
    exercise.type === 'reading' ||
    exercise.type === 'reading-comprehension' ||
    (
      (exercise.topicName?.toLowerCase().includes('reading') ||
       exercise.topic?.toLowerCase().includes('reading')) &&
      exercise.type !== 'multiple-choice'
    )
  ) && (!!exercise.transcript || !!exerciseContent.text);

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
    setExerciseCompleted(false);
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);

    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [exercise.id]);

  useEffect(() => {
    if (!submitted || !evaluation?.isCorrect || exerciseCompleted) return;
    autoAdvanceRef.current = setTimeout(() => {
      handleNextQuestion();
    }, AUTO_ADVANCE_MS);
    return () => { if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current); };
  }, [submitted, evaluation?.isCorrect, exerciseCompleted]);

  const stripTags = (s: string) => s.replace(/\[\[(.*?)\|(.*?)\]\]/g, '$1');

  const normalize = (s: string): string => stripTags(s)
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
      ? q.correctAnswer.map((a: any) => String(a).trim())
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

    if (questions && questions.length > 0) {
      const q = questions[currentQuestionIdx];
      let correct = false;

      if (q.type === 'true-false') {
        correct = String(q.correctAnswer).toLowerCase() === String(userAnswer).toLowerCase();
      } else if (q.options && Array.isArray(q.options)) {
        correct = checkMultipleChoiceCorrect(q, userAnswer);
      } else {
        const userAnswerText = typeof userAnswer === 'string' ? userAnswer : '';
        const userAnswerNormalized = normalize(userAnswerText);
        const correctAnswers = [
          ...(Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer]),
          ...(Array.isArray(q.acceptableAnswers) ? q.acceptableAnswers : (q.acceptableAnswers ? [q.acceptableAnswers] : [])),
          ...(Array.isArray(q.acceptableAlternatives) ? q.acceptableAlternatives : (q.acceptableAlternatives ? [q.acceptableAlternatives] : []))
        ].filter(Boolean).map((a: any) => normalize(String(a)));

        correct = correctAnswers.includes(userAnswerNormalized);
      }

      setIsCorrect(correct);
      const displayCorrectAnswer = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
      setEvaluation({
        isCorrect: correct,
        score: correct ? 100 : 0,
        feedback: correct
          ? '[[Excellent! Correct answer.|¡Excelente! Respuesta correcta.]]'
          : `[[Incorrect. The correct answer was:|Respuesta incorrecta. La respuesta correcta era:]] **${stripTags(String(displayCorrectAnswer))}**`,
      });

      if (correct) setShowConfetti(true);
    } else {
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
      setExerciseCompleted(true);
      completeExercise(exercise.id, 1, 1);
      onComplete({ success: true, score: 100 });
    }
  };

  const handleFinishSingle = () => {
    onComplete({ success: isCorrect, score: isCorrect ? 100 : 0 });
  };

  const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  const renderCurrentQuestion = (q: any, qIndex: number) => {
    const totalQ = questions.length || 1;
    return (
      <div key={qIndex} className="space-y-6">
        {/* Question header: counter only if multiple questions */}
        {totalQ > 1 && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">
              <TranslatedText text={`[[Question|Pregunta]] ${qIndex + 1} / ${totalQ}`} />
            </span>
            <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#ff9a3c] rounded-full transition-all duration-500"
                style={{ width: `${((qIndex + 1) / totalQ) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Image */}
        {q.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50 flex justify-center items-center" data-testid="exercise-image-container">
            <img
              src={q.imageUrl}
              alt="Exercise visual aid"
              className="max-h-[280px] object-contain w-full block"
            />
          </div>
        )}

        {/* Question text */}
        <div className="relative pl-4 border-l-4 border-[#FF6B6B]/70 rounded-r-sm mt-2">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-[#FF6B6B]/70 mb-1.5">
            <TranslatedText text="[[Question|Pregunta]]" />
          </p>
          <div className="text-2xl md:text-3xl text-slate-900 font-black leading-tight tracking-tight">
            <TranslatedText text={q.question || q.text || q.prompt} />
          </div>
        </div>

        {/* Audio */}
        {q.audioUrl && (
          <div>
            <AudioPlayer
              audioUrl={q.audioUrl.startsWith('/') ? q.audioUrl : `/${q.audioUrl}`}
              className="!p-3"
            />
          </div>
        )}

        {/* Options */}
        <div className="space-y-3">
          {/* True/False */}
          {q.type === 'true-false' && (
            <div className="grid grid-cols-2 gap-3">
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
                    className={`relative p-6 rounded-2xl border-2 font-black text-xl transition-all duration-200 active:scale-95 ${
                      showAsCorrect
                        ? 'border-green-400 bg-green-50 text-green-700 shadow-green-100 shadow-lg'
                        : showAsIncorrect
                        ? 'border-red-400 bg-red-50 text-red-700'
                        : isUserAnswer
                        ? 'border-[#FF6B6B] bg-orange-50 text-[#FF6B6B] shadow-lg shadow-orange-100 scale-[1.02]'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:scale-[1.01]'
                    } disabled:cursor-not-allowed`}
                  >
                    <span className="block text-2xl mb-1">{option === 'True' ? '✅' : '❌'}</span>
                    <TranslatedText text={option === 'True' ? '[[True|Verdadero]]' : '[[False|Falso]]'} />
                    {showAsCorrect && <CheckCircle className="absolute top-3 right-3 w-5 h-5 text-green-500" />}
                    {showAsIncorrect && <XCircle className="absolute top-3 right-3 w-5 h-5 text-red-500" />}
                  </button>
                );
              })}
            </div>
          )}

          {/* Multiple Choice (including fill-blank with options) */}
          {q.options && Array.isArray(q.options) && (
            <div className="space-y-2.5">
              {q.options.map((option: any, optIndex: number) => {
                const isUserAnswer = userAnswer === optIndex;
                const isCorrectAnswer = checkMultipleChoiceCorrect(q, optIndex);
                const showAsCorrect = submitted && isCorrectAnswer;
                const showAsIncorrect = submitted && isUserAnswer && !isCorrectAnswer;
                const letter = OPTION_LETTERS[optIndex] ?? String(optIndex + 1);

                return (
                  <motion.button
                    key={optIndex}
                    onClick={() => !submitted && setUserAnswer(optIndex)}
                    disabled={submitted}
                    whileTap={!submitted ? { scale: 0.97 } : {}}
                    animate={isUserAnswer && !submitted ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                    transition={{ duration: 0.18 }}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-colors duration-200 group ${
                      showAsCorrect
                        ? 'border-green-400 bg-green-50 shadow-sm'
                        : showAsIncorrect
                        ? 'border-red-400 bg-red-50'
                        : isUserAnswer
                        ? 'border-[#FF6B6B] bg-orange-50 shadow-md shadow-orange-100 ring-2 ring-[#FF6B6B]/30'
                        : 'border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50 hover:shadow-md'
                    } disabled:cursor-not-allowed`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-base flex-shrink-0 transition-colors ${
                        showAsCorrect
                          ? 'bg-green-500 text-white'
                          : showAsIncorrect
                          ? 'bg-red-500 text-white'
                          : isUserAnswer
                          ? 'bg-[#FF6B6B] text-white'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}>
                        {showAsCorrect ? <CheckCircle size={18} /> : showAsIncorrect ? <XCircle size={18} /> : letter}
                      </div>
                      <span className={`text-base md:text-lg font-bold flex-1 leading-snug tracking-tight ${
                        showAsCorrect ? 'text-green-800' : showAsIncorrect ? 'text-red-800' : isUserAnswer ? 'text-slate-900' : 'text-slate-700'
                      }`}>
                        <TranslatedText text={typeof option === 'string' ? option : option.text} />
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Fill Blank (only if no options) */}
          {(q.type === 'fill-blank' || exercise.type === 'fill-blank') && (!q.options || !Array.isArray(q.options)) && (
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-[0.12em] text-slate-400 pl-1">
                ✏️ <TranslatedText text="[[Your answer|Tu respuesta]]" />
              </label>
              <div className="relative">
              <input
                type="text"
                value={userAnswer || ''}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && userAnswer && !submitted && handleSubmit()}
                disabled={submitted}
                placeholder="Escribe tu respuesta..."
                className={`w-full p-5 border-2 rounded-2xl focus:outline-none text-xl font-bold transition-colors ${
                  submitted
                    ? isCorrect
                      ? 'border-green-400 bg-green-50 text-green-800'
                      : 'border-red-400 bg-red-50 text-red-800'
                    : 'border-slate-200 focus:border-[#FF6B6B] bg-white'
                }`}
              />
              {submitted && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  {isCorrect ? <CheckCircle className="w-6 h-6 text-green-500" /> : <XCircle className="w-6 h-6 text-red-500" />}
                </div>
              )}
              </div>
            </div>
          )}
        </div>

        {/* Confirm button (before submit) */}
        {!submitted && (
          <div className="pt-2">
            <button
              onClick={handleSubmit}
              disabled={userAnswer === null || userAnswer === ''}
              data-testid="confirm-button"
              className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#ff5252] text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-orange-200 hover:-translate-y-0.5 hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none active:scale-[0.98]"
            >
              <TranslatedText text="[[Confirm Answer|Confirmar]]" />
            </button>
          </div>
        )}

        {/* Spacer so content isn't hidden behind fixed feedback panel */}
        {submitted && !exerciseCompleted && <div className="h-52" />}

        {/* Fixed bottom feedback panel (Duolingo style) */}
        <AnimatePresence>
        {submitted && !exerciseCompleted && evaluation && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          >
            <div className={`border-t-4 bg-white shadow-2xl ${evaluation.isCorrect ? 'border-green-400' : 'border-red-400'}`}>
              <div className="max-w-2xl mx-auto px-5 pt-4 pb-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${evaluation.isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                    {evaluation.isCorrect
                      ? <CheckCircle className="w-6 h-6 text-green-600" />
                      : <XCircle className="w-6 h-6 text-red-600" />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-black text-lg leading-tight ${evaluation.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      {evaluation.isCorrect
                        ? <TranslatedText text="[[Great! Correct answer.|¡Correcto!]]" />
                        : <TranslatedText text="[[Incorrect. Keep going!|Incorrecto. ¡Sigue así!]]" />
                      }
                    </p>
                    <div className={`text-sm mt-0.5 leading-snug ${evaluation.isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                      <Markdown content={evaluation.feedback} vocabulary={vocabulary} />
                    </div>
                  </div>
                </div>

                {q.explanation && (
                  <div className="bg-slate-50 rounded-2xl px-4 py-3 mb-3 border border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      💡 <TranslatedText text="[[Explanation|Explicación]]" />
                    </p>
                    <div className="text-sm text-slate-700 leading-relaxed">
                      <Markdown content={q.explanation} vocabulary={vocabulary} />
                    </div>
                  </div>
                )}

                <button
                  onClick={handleNextQuestion}
                  data-testid="next-button"
                  className={`w-full py-4 rounded-2xl font-black text-base text-white shadow-lg transition-all hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 ${
                    evaluation.isCorrect
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-200'
                      : 'bg-gradient-to-r from-slate-700 to-slate-800 shadow-slate-200'
                  }`}
                >
                  {currentQuestionIdx < questions.length - 1
                    ? <TranslatedText text="[[Next Question|Siguiente pregunta]]" />
                    : <TranslatedText text="[[Continue|Continuar]]" />
                  }
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
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
          <div className="flex justify-center mt-8">
            <button
              onClick={() => onComplete({ success: finishScore >= 70, score: finishScore })}
              className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#ff5252] text-white py-4 rounded-2xl font-black text-lg shadow-lg flex items-center justify-center gap-2"
            >
              <TranslatedText text="[[Continue|Continuar]]" />
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    );
  }

  if (exercise.type === 'pronunciation') {
    const pronunciationQuestion = {
      id: exercise.id,
      prompt: exerciseContent.instructions || "Repite la frase:",
      expectedResponse: exerciseContent.expectedResponse || exercise.transcript,
      modelAudioUrl: exercise.audioUrl,
      hints: exerciseContent.evaluationCriteria || []
    };

    return (
      <div className="space-y-6">
        <EnhancedSpeakingExercise
          question={pronunciationQuestion}
          level={exercise.level}
          onComplete={(evalResult) => {
            setShowFinishButton(true);
            setFinishScore(evalResult.overallScore || 100);
          }}
        />
        {showFinishButton && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => onComplete({ success: finishScore >= 70, score: finishScore })}
              className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#ff5252] text-white py-4 rounded-2xl font-black text-lg shadow-lg flex items-center justify-center gap-2"
            >
              <TranslatedText text="[[Continue|Continuar]]" />
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    );
  }

  if (exercise.type === 'word-search') return <div className="bg-white p-8 rounded-3xl shadow-xl"><WordSearchExercise words={exerciseContent.words} gridSize={exerciseContent.gridSize ?? 10} onComplete={() => onComplete({ success: true, score: 100 })} /></div>;
  if (exercise.type === 'crossword') return <div className="bg-white p-8 rounded-3xl shadow-xl"><CrosswordExercise items={exerciseContent.items} onComplete={() => onComplete({ success: true, score: 100 })} /></div>;
  if (exercise.type === 'flashcard') return <FlashcardExercise content={exerciseContent as any} onComplete={() => onComplete({ success: true, score: 100 })} />;
  if (exercise.type === 'drag-drop' || exercise.type === 'sentence-building') return <DragDropExercise content={exerciseContent as any} onComplete={(success) => onComplete({ success, score: success ? 100 : 0 })} />;
  if (exercise.type === 'matching') return <MatchingExercise content={exerciseContent as any} onComplete={(success) => onComplete({ success, score: success ? 100 : 0 })} />;
  if (exercise.type === 'interactive-dialogue') return <InteractiveDialogueExercise content={exerciseContent as any} onComplete={(success) => onComplete({ success, score: success ? 100 : 0 })} />;

  // Default Renderer
  const typeInfo = getTypeInfo(exercise.type);
  const typeTheme = getTypeTheme(exercise.type);
  const TypeIcon = typeInfo.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: isAnimating ? 0 : 1, y: isAnimating ? 16 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="space-y-6">
        {/* Exercise title + type pill */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-bold border ${typeTheme.badge}`}>
              <TypeIcon size={14} />
              <span>{typeInfo.label}</span>
            </div>
          </div>
          <div className={`relative pl-4 border-l-4 ${typeTheme.border} rounded-r-sm`}>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400 mb-1.5">
              <TranslatedText text="[[Exercise|Ejercicio]]" />
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">
              <TranslatedText text={exerciseContent.title || 'Ejercicio'} />
            </h2>
          </div>
          {exerciseContent.instructions && (
            <div className="mt-4 flex gap-2.5 p-3.5 bg-slate-50 border border-slate-100 border-l-4 border-l-slate-300 rounded-2xl">
              <Info size={18} className="text-slate-400 flex-shrink-0 mt-0.5" />
              <div className="text-slate-700 text-base font-semibold leading-relaxed">
                <Markdown content={exerciseContent.instructions} />
              </div>
            </div>
          )}
        </div>

        {/* Audio (exercise-level) */}
        {exercise.audioUrl && (
          <AudioPlayer
            audioUrl={exercise.audioUrl.startsWith('/') ? exercise.audioUrl : `/${exercise.audioUrl}`}
            transcript={exercise.transcript}
          />
        )}

        {/* Reading text */}
        {isReadingExercise && showReadingText ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative p-6 bg-amber-50/30 rounded-2xl border border-slate-100 shadow-sm">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF6B6B] to-[#ff9a3c] rounded-l-2xl" />
              <div className="flex items-center gap-2 mb-3 pl-1">
                <BookOpen size={16} className="text-[#FF6B6B]/70" />
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#FF6B6B]/70">
                  <TranslatedText text="[[Reading|Lectura]]" />
                </p>
              </div>
              <div className="text-slate-800 text-[18px] leading-[1.85] font-normal pl-1">
                <Markdown content={(exerciseContent.text || exercise.transcript)!} />
              </div>
            </div>
            {exercise.audioUrl && (
              <AudioPlayer
                audioUrl={exercise.audioUrl.startsWith('/') ? exercise.audioUrl : `/${exercise.audioUrl}`}
                transcript={exercise.transcript}
              />
            )}
            <button
              onClick={() => setShowReadingText(false)}
              className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#ff5252] text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              Responder preguntas <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div>
            {questions.length > 0
              ? renderCurrentQuestion(questions[currentQuestionIdx], currentQuestionIdx)
              : (exerciseContent.question || exerciseContent.text || exerciseContent.prompt)
                ? renderCurrentQuestion(exerciseContent, 0)
                : (
                  <div className="text-center py-10">
                    <p className="text-slate-400 font-medium mb-4">Este ejercicio no tiene preguntas configuradas.</p>
                    <button
                      onClick={() => onComplete({ success: true, score: 100 })}
                      className="bg-slate-800 text-white px-8 py-3 rounded-xl font-bold"
                    >
                      Continuar
                    </button>
                  </div>
                )
            }
          </div>
        )}
      </div>
    </motion.div>
  );
}
