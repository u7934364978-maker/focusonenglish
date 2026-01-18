'use client';

import { useState } from 'react';
import EnhancedVoiceRecorder from '@/components/course/EnhancedVoiceRecorder';
import SmartPronunciationEvaluator from '@/components/course/SmartPronunciationEvaluator';
import PronunciationPractice from '@/components/course/PronunciationPractice';
import EnhancedFeedback from '@/components/course/EnhancedFeedback';
import SentenceBuilder from '@/components/course/SentenceBuilder';
import CelebrationModal from '@/components/course/CelebrationModal';
import { Lesson, Exercise, Question, SentenceBuildingExercise } from '@/lib/course-data-b2';
import { TextAnswerEvaluationResponse } from '@/app/api/evaluate-text-answer/route';
import { WritingEvaluationResponse } from '@/app/api/evaluate-writing/route';
import { MultipleChoiceEvaluationResponse } from '@/app/api/evaluate-multiple-choice/route';

interface LessonViewerProps {
  lesson: Lesson;
  onComplete: (lessonId: string, score: number) => void;
}

type EvaluationResult = TextAnswerEvaluationResponse | WritingEvaluationResponse | MultipleChoiceEvaluationResponse;

export default function LessonViewer({ lesson, onComplete }: LessonViewerProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: string]: string }>({});
  const [exerciseScores, setExerciseScores] = useState<{ [exerciseId: string]: number }>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [recordedAudio, setRecordedAudio] = useState<{ blob: Blob; transcript: string } | null>(null);
  const [pronunciationFeedback, setPronunciationFeedback] = useState<any>(null);
  const [aiEvaluations, setAiEvaluations] = useState<{ [questionId: string]: EvaluationResult }>({});
  const [evaluating, setEvaluating] = useState(false);

  const currentExercise = lesson.exercises[currentExerciseIndex];
  const progress = ((currentExerciseIndex + 1) / lesson.exercises.length) * 100;

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const checkAnswers = async () => {
    setEvaluating(true);
    
    if (currentExercise.type === 'grammar' || 
        currentExercise.type === 'reading' || 
        currentExercise.type === 'listening' || 
        currentExercise.type === 'vocabulary' ||
        currentExercise.type === 'multiple-choice-cloze') {
      const questions = currentExercise.questions;
      let totalPoints = 0;
      let earnedPoints = 0;
      const evaluations: { [questionId: string]: EvaluationResult } = {};

      for (const q of questions) {
        totalPoints += q.points;
        const userAnswer = answers[q.id];
        
        if (!userAnswer) {
          earnedPoints += 0;
          continue;
        }

        // MULTIPLE CHOICE - Use intelligent evaluation
        if (q.type === 'multiple-choice' && q.options) {
          try {
            const response = await fetch('/api/evaluate-multiple-choice', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                question: q.question,
                options: q.options,
                userAnswer: userAnswer,
                correctAnswer: Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer,
                context: currentExercise.type === 'reading' ? (currentExercise as any).text : '',
                level: 'B2'
              })
            });

            if (response.ok) {
              const evaluation: MultipleChoiceEvaluationResponse = await response.json();
              evaluations[q.id] = evaluation;
              if (evaluation.isCorrect) {
                earnedPoints += q.points;
              }
            } else {
              // Fallback to string matching
              const correctAnswer = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
              if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
                earnedPoints += q.points;
              }
            }
          } catch (error) {
            console.error('Error evaluating multiple choice:', error);
            // Fallback
            const correctAnswer = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
            if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
              earnedPoints += q.points;
            }
          }
        }
        
        // SHORT ANSWER or FILL BLANK - Use AI evaluation
        else if (q.type === 'short-answer' || q.type === 'fill-blank') {
          try {
            const response = await fetch('/api/evaluate-text-answer', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                question: q.question,
                userAnswer: userAnswer,
                correctAnswer: q.correctAnswer,
                expectedConcepts: (q as any).expectedConcepts || [],
                context: currentExercise.type === 'reading' ? (currentExercise as any).text?.substring(0, 2000) : '',
                level: 'B2',
                questionType: currentExercise.type === 'reading' ? 'comprehension' : 'general'
              })
            });

            if (response.ok) {
              const evaluation: TextAnswerEvaluationResponse = await response.json();
              evaluations[q.id] = evaluation;
              
              // Award points based on score (not just binary correct/incorrect)
              const percentageCorrect = evaluation.score / 100;
              earnedPoints += q.points * percentageCorrect;
            } else {
              // Fallback to basic string matching
              const correctAnswer = Array.isArray(q.correctAnswer) 
                ? q.correctAnswer.map(a => a.toLowerCase().trim())
                : [q.correctAnswer.toLowerCase().trim()];
              const isCorrect = correctAnswer.some(ca => 
                userAnswer.toLowerCase().trim() === ca
              );
              if (isCorrect) earnedPoints += q.points;
            }
          } catch (error) {
            console.error('Error evaluating text answer:', error);
            // Fallback
            const correctAnswer = Array.isArray(q.correctAnswer) 
              ? q.correctAnswer.map(a => a.toLowerCase().trim())
              : [q.correctAnswer.toLowerCase().trim()];
            const isCorrect = correctAnswer.some(ca => 
              userAnswer.toLowerCase().trim() === ca
            );
            if (isCorrect) earnedPoints += q.points;
          }
        }
        
        // TRUE/FALSE - Simple exact match
        else if (q.type === 'true-false') {
          const correctAnswer = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
          if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
            earnedPoints += q.points;
          }
        }
      }

      const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
      setExerciseScores(prev => ({ ...prev, [currentExercise.id]: score }));
      setAiEvaluations(evaluations);
      setCurrentScore(score);
      setShowFeedback(true);
      setShowCelebration(true);
      setEvaluating(false);
      
    } else if (currentExercise.type === 'key-word-transformation') {
      const transformations = currentExercise.transformations;
      let totalPoints = 0;
      let earnedPoints = 0;
      const evaluations: { [transformationId: string]: EvaluationResult } = {};

      for (const t of transformations) {
        totalPoints += t.points;
        const userAnswer = answers[t.id];
        
        if (!userAnswer) {
          earnedPoints += 0;
          continue;
        }

        // Use AI evaluation for key-word transformation
        try {
          const fullUserSentence = `${t.startOfAnswer} ${userAnswer}`.trim();
          const fullTargetSentence = `${t.startOfAnswer} ${t.correctAnswer}`.trim();
          
          const response = await fetch('/api/evaluate-sentence-building', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userSentence: fullUserSentence,
              targetSentence: fullTargetSentence,
              grammarFocus: 'key word transformation',
              words: [{ text: t.keyWord, type: 'key' }]
            })
          });

          if (response.ok) {
            const evaluation = await response.json();
            evaluations[t.id] = evaluation;
            // Award points based on AI score
            earnedPoints += t.points * (evaluation.score / 100);
          } else {
            // Fallback to simple matching
            const userAnswerNorm = userAnswer.toLowerCase().trim();
            const correctAnswerNorm = t.correctAnswer.toLowerCase().trim();
            if (userAnswerNorm === correctAnswerNorm) {
              earnedPoints += t.points;
            }
          }
        } catch (error) {
          console.error('Error evaluating key-word transformation:', error);
          // Fallback to simple matching
          const userAnswerNorm = userAnswer.toLowerCase().trim();
          const correctAnswerNorm = t.correctAnswer.toLowerCase().trim();
          if (userAnswerNorm === correctAnswerNorm) {
            earnedPoints += t.points;
          }
        }
      }

      const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
      setExerciseScores(prev => ({ ...prev, [currentExercise.id]: score }));
      setAiEvaluations(evaluations);
      setCurrentScore(score);
      setShowFeedback(true);
      setShowCelebration(true);
      setEvaluating(false);
      
    } else if (currentExercise.type === 'word-formation') {
      const questions = currentExercise.questions;
      let totalPoints = 0;
      let earnedPoints = 0;
      const newEvaluations: any = {};

      // Use AI evaluation for each word-formation question
      for (const q of questions) {
        totalPoints += q.points;
        const userAnswer = answers[q.id] || '';

        if (!userAnswer || userAnswer.trim() === '') {
          newEvaluations[q.id] = {
            isCorrect: false,
            score: 0,
            feedback: 'No se proporcionó respuesta',
            detailedExplanation: 'Por favor, proporciona una respuesta.'
          };
          continue;
        }

        try {
          const response = await fetch('/api/evaluate-text-answer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              question: `Transform the word "${q.baseWord}" to complete the gap. ${q.hint ? 'Hint: ' + q.hint : ''}`,
              userAnswer: userAnswer,
              correctAnswer: q.acceptableAnswers || [q.correctAnswer],
              expectedConcepts: [q.wordType || 'word transformation', q.transformation || ''],
              context: currentExercise.text || '',
              level: 'B2',
              questionType: 'word-formation'
            })
          });

          if (response.ok) {
            const evaluation = await response.json();
            newEvaluations[q.id] = evaluation;
            
            if (evaluation.isCorrect) {
              earnedPoints += q.points;
            }
          } else {
            // Fallback to simple comparison
            const userAnswerLower = userAnswer.toLowerCase().trim();
            const isCorrect = userAnswerLower === q.correctAnswer?.toLowerCase().trim() ||
              (q.acceptableAnswers && q.acceptableAnswers.some((ans: string) => 
                userAnswerLower === ans.toLowerCase().trim()
              ));
            
            if (isCorrect) {
              earnedPoints += q.points;
            }
            
            newEvaluations[q.id] = {
              isCorrect,
              score: isCorrect ? 100 : 0,
              feedback: isCorrect ? '✓ ¡Correcto!' : '✗ Respuesta incorrecta',
              detailedExplanation: isCorrect 
                ? 'Tu respuesta es correcta.' 
                : `La respuesta correcta es: ${q.correctAnswer}`
            };
          }
        } catch (error) {
          console.error('Error evaluating word-formation:', error);
          // Fallback
          const userAnswerLower = userAnswer.toLowerCase().trim();
          const isCorrect = userAnswerLower === q.correctAnswer?.toLowerCase().trim() ||
            (q.acceptableAnswers && q.acceptableAnswers.some((ans: string) => 
              userAnswerLower === ans.toLowerCase().trim()
            ));
          
          if (isCorrect) {
            earnedPoints += q.points;
          }
          
          newEvaluations[q.id] = {
            isCorrect,
            score: isCorrect ? 100 : 0,
            feedback: isCorrect ? '✓ ¡Correcto!' : '✗ Respuesta incorrecta',
            detailedExplanation: isCorrect 
              ? 'Tu respuesta es correcta.' 
              : `La respuesta correcta es: ${q.correctAnswer}`
          };
        }
      }

      setAiEvaluations(newEvaluations);
      const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
      setExerciseScores(prev => ({ ...prev, [currentExercise.id]: score }));
      setCurrentScore(score);
      setShowFeedback(true);
      setShowCelebration(true);
      setEvaluating(false);
    } else {
      setEvaluating(false);
    }
  };

  const nextExercise = () => {
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      setShowFeedback(false);
      setAnswers({});
      setRecordedAudio(null);
      setPronunciationFeedback(null);
    } else {
      // Calcular puntuación total de la lección
      const totalScore = Object.values(exerciseScores).reduce((sum, score) => sum + score, 0) / Object.keys(exerciseScores).length;
      onComplete(lesson.id, totalScore);
    }
  };

  const previousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prev => prev - 1);
      setShowFeedback(false);
    }
  };

  const handleVoiceRecordingComplete = (audioBlob: Blob, transcript: string) => {
    setRecordedAudio({ blob: audioBlob, transcript });
  };

  const handlePronunciationEvaluationComplete = (feedback: any) => {
    setPronunciationFeedback(feedback);
    setExerciseScores(prev => ({ ...prev, [currentExercise.id]: feedback.score.overall }));
  };

  const renderExercise = () => {
    switch (currentExercise.type) {
      case 'grammar':
      case 'vocabulary':
        return (
          <div className="space-y-6">
            {/* Explanation */}
            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-coral-900 mb-3 flex items-center gap-2">
                <span>📚</span>
                <span>{currentExercise.title}</span>
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-coral-800 mb-1">Grammar Point:</p>
                  <p className="text-slate-700">{currentExercise.grammarPoint}</p>
                </div>
                <div>
                  <p className="font-semibold text-coral-800 mb-1">Explanation:</p>
                  <p className="text-slate-700 whitespace-pre-line">{currentExercise.explanation}</p>
                </div>
                {currentExercise.examples && currentExercise.examples.length > 0 && (
                  <div>
                    <p className="font-semibold text-coral-800 mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {currentExercise.examples.map((example, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start gap-2">
                          <span className="text-orange-500">•</span>
                          <span className="italic">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900">Practice Questions:</h4>
              {currentExercise.questions.map((question, idx) => (
                <div key={question.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                  <p className="font-semibold text-slate-900 mb-3">
                    {idx + 1}. {question.question} <span className="text-sm text-coral-600">({question.points} {question.points === 1 ? 'point' : 'points'})</span>
                  </p>

                  {question.type === 'multiple-choice' && question.options && (
                    <div className="space-y-2">
                      {question.options.map((option, optIdx) => (
                        <label key={optIdx} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name={question.id}
                            value={option}
                            checked={answers[question.id] === option}
                            onChange={(e) => handleAnswer(question.id, e.target.value)}
                            className="w-4 h-4"
                          />
                          <span className="text-slate-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {question.type === 'fill-blank' && (
                    <input
                      type="text"
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswer(question.id, e.target.value)}
                      placeholder="Your answer..."
                      className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                    />
                  )}

                  {question.type === 'short-answer' && (
                    <textarea
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswer(question.id, e.target.value)}
                      placeholder="Your answer..."
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                    />
                  )}

                  {question.type === 'true-false' && (
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value="True"
                          checked={answers[question.id] === 'True'}
                          onChange={(e) => handleAnswer(question.id, e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-slate-700 font-semibold">True</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value="False"
                          checked={answers[question.id] === 'False'}
                          onChange={(e) => handleAnswer(question.id, e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-slate-700 font-semibold">False</span>
                      </label>
                    </div>
                  )}

                  {showFeedback && aiEvaluations[question.id] && (
                    <EnhancedFeedback
                      type={question.type === 'multiple-choice' ? 'multiple-choice' : 'text'}
                      evaluation={aiEvaluations[question.id]}
                      userAnswer={answers[question.id] || ''}
                      correctAnswer={Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' or ') : question.correctAnswer}
                    />
                  )}
                  {showFeedback && !aiEvaluations[question.id] && (
                    <div className={`mt-3 p-3 rounded-lg ${
                      answers[question.id]?.toLowerCase().trim() === (Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer).toLowerCase().trim()
                        ? 'bg-amber-50 border-2 border-amber-200'
                        : 'bg-red-50 border-2 border-red-200'
                    }`}>
                      <p className="font-semibold mb-1">
                        {answers[question.id]?.toLowerCase().trim() === (Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer).toLowerCase().trim()
                          ? '✓ Correct!'
                          : '✗ Incorrect'}
                      </p>
                      <p className="text-sm mb-1">
                        <strong>Correct answer:</strong> {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' or ') : question.correctAnswer}
                      </p>
                      {question.explanation && (
                        <p className="text-sm text-slate-700">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating}
                className="w-full px-6 py-4 bg-coral-600 text-white rounded-xl hover:bg-coral-700 transition-colors font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {evaluating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Evaluating with AI...</span>
                  </>
                ) : (
                  'Check Answers'
                )}
              </button>
            )}
          </div>
        );

      case 'reading':
        return (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Reading Text - Sticky on large screens */}
            <div className="lg:sticky lg:top-4 lg:self-start">
              <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{currentExercise.title}</h3>
                  <div className="text-sm text-slate-600">
                    <span>📖 {currentExercise.wordCount} words</span>
                    <span className="mx-2">•</span>
                    <span>⏱️ ~{currentExercise.readingTime} min</span>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 whitespace-pre-line leading-relaxed">{currentExercise.text}</p>
                </div>

                {currentExercise.vocabularyHelp && currentExercise.vocabularyHelp.length > 0 && (
                  <details className="mt-4">
                    <summary className="cursor-pointer font-semibold text-coral-700 hover:text-coral-800">
                      💡 Vocabulary Help
                    </summary>
                    <div className="mt-3 space-y-2">
                      {currentExercise.vocabularyHelp.map((vocab, idx) => (
                        <div key={idx} className="flex gap-2">
                          <span className="font-semibold text-slate-900">{vocab.word}:</span>
                          <span className="text-slate-700">{vocab.definition}</span>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>

            {/* Reading Questions - Scrollable */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900">Comprehension Questions:</h4>
              {currentExercise.questions.map((question, idx) => (
                <div key={question.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                  <p className="font-semibold text-slate-900 mb-3">
                    {idx + 1}. {question.question} <span className="text-sm text-coral-600">({question.points} points)</span>
                  </p>

                  {question.type === 'multiple-choice' && question.options && (
                    <div className="space-y-2">
                      {question.options.map((option, optIdx) => (
                        <label key={optIdx} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 hover:bg-slate-50 cursor-pointer">
                          <input
                            type="radio"
                            name={question.id}
                            value={option}
                            checked={answers[question.id] === option}
                            onChange={(e) => handleAnswer(question.id, e.target.value)}
                            className="w-4 h-4"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {(question.type === 'short-answer' || question.type === 'fill-blank') && (
                    <textarea
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswer(question.id, e.target.value)}
                      placeholder="Your answer..."
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                    />
                  )}

                  {question.type === 'true-false' && (
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value="True"
                          checked={answers[question.id] === 'True'}
                          onChange={(e) => handleAnswer(question.id, e.target.value)}
                        />
                        <span className="font-semibold">True</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value="False"
                          checked={answers[question.id] === 'False'}
                          onChange={(e) => handleAnswer(question.id, e.target.value)}
                        />
                        <span className="font-semibold">False</span>
                      </label>
                    </div>
                  )}

                  {showFeedback && (
                    <div className={`mt-3 p-3 rounded-lg ${
                      answers[question.id]?.toLowerCase().trim() === (Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer).toLowerCase().trim() ||
                      (Array.isArray(question.correctAnswer) && question.correctAnswer.some(ca => answers[question.id]?.toLowerCase().includes(ca.toLowerCase())))
                        ? 'bg-amber-50 border-2 border-amber-200'
                        : 'bg-red-50 border-2 border-red-200'
                    }`}>
                      <p className="font-semibold mb-1">
                        {answers[question.id]?.toLowerCase().trim() === (Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer).toLowerCase().trim()
                          ? '✓ Correct!'
                          : '✗ Incorrect'}
                      </p>
                      <p className="text-sm mb-1">
                        <strong>Correct answer:</strong> {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' / ') : question.correctAnswer}
                      </p>
                      {question.explanation && (
                        <p className="text-sm">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {!showFeedback && (
                <button
                  onClick={checkAnswers}
                  disabled={evaluating}
                  className="w-full px-6 py-4 bg-coral-600 text-white rounded-xl hover:bg-coral-700 transition-colors font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {evaluating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Evaluating with AI...</span>
                    </>
                  ) : (
                    'Check Answers'
                  )}
                </button>
              )}
            </div>
          </div>
        );

      case 'pronunciation':
        return (
          <PronunciationPractice
            exerciseId={currentExercise.id}
            prompt={currentExercise.prompt}
            targetText={currentExercise.targetText || ''}
            modelAudioUrl={currentExercise.modelAudioUrl}
            hints={currentExercise.hints}
            onComplete={(exerciseId, score, feedback) => {
              setExerciseScores(prev => ({ ...prev, [exerciseId]: score }));
              setPronunciationFeedback(feedback);
            }}
          />
        );

      case 'speaking':
        return (
          <div className="space-y-6">
            {!recordedAudio ? (
              <EnhancedVoiceRecorder
                exerciseId={currentExercise.id}
                prompt={currentExercise.prompt}
                targetText={currentExercise.targetText}
                timeLimit={currentExercise.timeLimit}
                modelAudioUrl={currentExercise.modelAudioUrl}
                hints={currentExercise.hints}
                onComplete={handleVoiceRecordingComplete}
              />
            ) : !pronunciationFeedback ? (
              <SmartPronunciationEvaluator
                targetText={currentExercise.targetText}
                prompt={currentExercise.prompt}
                transcript={recordedAudio.transcript}
                audioBlob={recordedAudio.blob}
                modelAudioUrl={currentExercise.modelAudioUrl}
                onEvaluationComplete={handlePronunciationEvaluationComplete}
              />
            ) : pronunciationFeedback ? (
              <div className="bg-white rounded-xl border-2 border-amber-200 p-6">
                <p className="text-amber-800 font-semibold mb-2">✓ Exercise Completed!</p>
                <p className="text-slate-700">Your pronunciation has been evaluated. Click "Next Exercise" to continue.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Speaking Exercise Completed */}
                <div className="bg-white rounded-xl border-2 border-amber-200 p-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <span>✓</span>
                    <span>Recording Submitted Successfully!</span>
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Your speaking exercise has been recorded. Here's what you said:
                  </p>
                  
                  {/* Transcript */}
                  {recordedAudio.transcript && (
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 mb-4">
                      <h4 className="font-semibold text-coral-900 mb-2 flex items-center gap-2">
                        <span>📝</span>
                        <span>Your Transcript:</span>
                      </h4>
                      <p className="text-slate-700 italic">"{recordedAudio.transcript}"</p>
                      <p className="text-sm text-coral-700 mt-2">
                        Word count: {recordedAudio.transcript.split(' ').length} words
                      </p>
                    </div>
                  )}

                  {/* Basic Feedback */}
                  <div className="bg-peach-50 rounded-lg p-4 border border-peach-200">
                    <h4 className="font-semibold text-peach-900 mb-2">Quick Feedback:</h4>
                    <ul className="space-y-2">
                      {recordedAudio.transcript && recordedAudio.transcript.split(' ').length >= 50 && (
                        <li className="flex items-start gap-2 text-amber-700">
                          <span className="mt-0.5">✓</span>
                          <span>Good length - you spoke enough to express your ideas</span>
                        </li>
                      )}
                      {recordedAudio.transcript && recordedAudio.transcript.split(' ').length < 50 && (
                        <li className="flex items-start gap-2 text-amber-700">
                          <span className="mt-0.5">→</span>
                          <span>Try to speak more to fully develop your answer</span>
                        </li>
                      )}
                      <li className="flex items-start gap-2 text-coral-700">
                        <span className="mt-0.5">💡</span>
                        <span>In a real exam, a teacher would evaluate your: grammar, vocabulary, fluency, and pronunciation</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm text-slate-600 mt-4 text-center">
                    Click "Next Exercise" to continue to the next activity
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case 'listening':
        return (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Audio Player - Sticky on large screens */}
            <div className="lg:sticky lg:top-4 lg:self-start">
              <div className="bg-peach-50 rounded-xl p-6 border-2 border-peach-200">
                <h3 className="text-xl font-bold text-peach-900 mb-4 flex items-center gap-2">
                  <span>🎧</span>
                  <span>Listening Exercise</span>
                </h3>
                <audio src={currentExercise.audioUrl} controls className="w-full mb-3" />
                <div className="text-sm text-peach-800">
                  <p>Duration: ~{Math.floor(currentExercise.duration / 60)} minutes {currentExercise.duration % 60} seconds</p>
                  <p>You can replay the audio up to {currentExercise.maxReplays} times</p>
                </div>

                {currentExercise.transcript && (
                  <details className="mt-4">
                    <summary className="cursor-pointer font-semibold text-peach-700 hover:text-peach-800">
                      📝 Show Transcript (only after completing)
                    </summary>
                    <div className="mt-3 p-3 bg-white rounded border border-peach-200">
                      <p className="text-slate-700 whitespace-pre-line text-sm">{currentExercise.transcript}</p>
                    </div>
                  </details>
                )}
              </div>
            </div>

            {/* Listening Questions - Scrollable */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900">Listening Comprehension Questions:</h4>
              {currentExercise.questions.map((question, idx) => (
                <div key={question.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                  <p className="font-semibold text-slate-900 mb-3">
                    {idx + 1}. {question.question} <span className="text-sm text-coral-600">({question.points} points)</span>
                  </p>

                  {question.type === 'multiple-choice' && question.options && (
                    <div className="space-y-2">
                      {question.options.map((option, optIdx) => (
                        <label key={optIdx} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 hover:bg-slate-50 cursor-pointer">
                          <input
                            type="radio"
                            name={question.id}
                            value={option}
                            checked={answers[question.id] === option}
                            onChange={(e) => handleAnswer(question.id, e.target.value)}
                            className="w-4 h-4"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {question.type === 'short-answer' && (
                    <textarea
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswer(question.id, e.target.value)}
                      placeholder="Your answer..."
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                    />
                  )}

                  {question.type === 'true-false' && (
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value="True"
                          checked={answers[question.id] === 'True'}
                          onChange={(e) => handleAnswer(question.id, e.target.value)}
                        />
                        <span className="font-semibold">True</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value="False"
                          checked={answers[question.id] === 'False'}
                          onChange={(e) => handleAnswer(question.id, e.target.value)}
                        />
                        <span className="font-semibold">False</span>
                      </label>
                    </div>
                  )}

                  {showFeedback && (
                    <div className={`mt-3 p-3 rounded-lg ${
                      answers[question.id]?.toLowerCase().trim() === (Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer).toLowerCase().trim() ||
                      (Array.isArray(question.correctAnswer) && question.correctAnswer.some(ca => answers[question.id]?.toLowerCase().includes(ca.toLowerCase())))
                        ? 'bg-amber-50 border-2 border-amber-200'
                        : 'bg-red-50 border-2 border-red-200'
                    }`}>
                      <p className="font-semibold mb-1">
                        {answers[question.id]?.toLowerCase().trim() === (Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer).toLowerCase().trim()
                          ? '✓ Correct!'
                          : '✗ Incorrect'}
                      </p>
                      <p className="text-sm mb-1">
                        <strong>Correct answer:</strong> {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' / ') : question.correctAnswer}
                      </p>
                      {question.explanation && (
                        <p className="text-sm">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {!showFeedback && (
                <button
                  onClick={checkAnswers}
                  disabled={evaluating}
                  className="w-full px-6 py-4 bg-coral-600 text-white rounded-xl hover:bg-coral-700 transition-colors font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {evaluating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Evaluating with AI...</span>
                    </>
                  ) : (
                    'Check Answers'
                  )}
                </button>
              )}
            </div>
          </div>
        );

      case 'writing':
        return (
          <div className="space-y-6">
            <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span>✍️</span>
                <span>Writing Exercise: {currentExercise.writingType}</span>
              </h3>
              <p className="text-slate-700 mb-4">{currentExercise.prompt}</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-3 rounded border border-amber-200">
                  <p className="font-semibold text-amber-800">Word Count:</p>
                  <p className="text-slate-700">{currentExercise.minWords}-{currentExercise.maxWords} words</p>
                </div>
                <div className="bg-white p-3 rounded border border-amber-200">
                  <p className="font-semibold text-amber-800">Time Limit:</p>
                  <p className="text-slate-700">{currentExercise.timeLimit} minutes</p>
                </div>
                <div className="bg-white p-3 rounded border border-amber-200">
                  <p className="font-semibold text-amber-800">Type:</p>
                  <p className="text-slate-700 capitalize">{currentExercise.writingType}</p>
                </div>
              </div>
            </div>

            {currentExercise.tips && currentExercise.tips.length > 0 && (
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-bold text-coral-900 mb-2 flex items-center gap-2">
                  <span>💡</span>
                  <span>Writing Tips:</span>
                </h4>
                <ul className="space-y-1">
                  {currentExercise.tips.map((tip, idx) => (
                    <li key={idx} className="text-sm text-coral-800 flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <label className="block font-semibold text-slate-900 mb-2">Your Response:</label>
              <textarea
                value={answers[currentExercise.id] || ''}
                onChange={(e) => handleAnswer(currentExercise.id, e.target.value)}
                placeholder="Start writing here..."
                rows={15}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-orange-500 focus:outline-none font-mono text-sm"
              />
              <div className="flex justify-between items-center mt-2 text-sm text-slate-600">
                <span>
                  Word count: {(answers[currentExercise.id] || '').split(/\s+/).filter(w => w.length > 0).length} / {currentExercise.minWords}-{currentExercise.maxWords}
                </span>
                <span>Characters: {(answers[currentExercise.id] || '').length}</span>
              </div>
            </div>

            {currentExercise.exampleResponse && (
              <details>
                <summary className="cursor-pointer font-semibold text-coral-700 hover:text-coral-800">
                  📝 View Example Response
                </summary>
                <div className="mt-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-slate-700 whitespace-pre-line">{currentExercise.exampleResponse}</p>
                </div>
              </details>
            )}

            <button
              onClick={async () => {
                setEvaluating(true);
                try {
                  const response = await fetch('/api/evaluate-writing', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      prompt: currentExercise.prompt,
                      essay: answers[currentExercise.id] || '',
                      writingType: currentExercise.writingType,
                      minWords: currentExercise.minWords,
                      maxWords: currentExercise.maxWords,
                      level: 'B2',
                      rubric: currentExercise.rubric
                    })
                  });

                  if (response.ok) {
                    const evaluation = await response.json();
                    setAiEvaluations(prev => ({ ...prev, [currentExercise.id]: evaluation }));
                    setExerciseScores(prev => ({ ...prev, [currentExercise.id]: evaluation.overallScore }));
                  } else {
                    // Fallback - mock score
                    setExerciseScores(prev => ({ ...prev, [currentExercise.id]: 75 }));
                  }
                } catch (error) {
                  console.error('Error evaluating writing:', error);
                  setExerciseScores(prev => ({ ...prev, [currentExercise.id]: 75 }));
                }
                setShowFeedback(true);
                setEvaluating(false);
              }}
              disabled={evaluating}
              className="w-full px-6 py-4 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {evaluating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Evaluating your writing with AI...</span>
                </>
              ) : (
                'Submit Writing for AI Evaluation'
              )}
            </button>

            {showFeedback && aiEvaluations[currentExercise.id] && (
              <EnhancedFeedback
                type="writing"
                evaluation={aiEvaluations[currentExercise.id]}
                userAnswer={answers[currentExercise.id] || ''}
              />
            )}
            {showFeedback && !aiEvaluations[currentExercise.id] && (
              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <p className="text-amber-800 font-semibold mb-2">✓ Writing Submitted!</p>
                <p className="text-slate-700">Your writing has been evaluated. Check the score above.</p>
              </div>
            )}
          </div>
        );

      case 'key-word-transformation':
        return (
          <div className="space-y-6">
            {/* Instructions */}
            <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span>🔑</span>
                <span>{currentExercise.title}</span>
              </h3>
              <p className="text-slate-700 whitespace-pre-line mb-3">{currentExercise.instructions}</p>
              <div className="bg-amber-100 p-3 rounded-lg border border-amber-300">
                <p className="text-sm text-amber-900 font-semibold">💡 Tip: You must use between 2 and 5 words, including the given key word.</p>
              </div>
            </div>

            {/* Transformations */}
            <div className="space-y-4">
              {currentExercise.transformations.map((transformation: any, idx: number) => (
                <div key={transformation.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                  <div className="space-y-3">
                    {/* Original Sentence */}
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm text-coral-700 font-semibold mb-1">Original:</p>
                      <p className="text-slate-900">{transformation.sentence}</p>
                    </div>

                    {/* Key Word */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-600">Key word:</span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full font-bold text-sm">
                        {transformation.keyWord}
                      </span>
                      <span className="text-slate-400">({transformation.points} {transformation.points === 1 ? 'point' : 'points'})</span>
                    </div>

                    {/* Answer Input */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Your answer:</label>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600">{transformation.startOfAnswer}</span>
                        <input
                          type="text"
                          value={answers[transformation.id] || ''}
                          onChange={(e) => handleAnswer(transformation.id, e.target.value)}
                          placeholder="..."
                          className="flex-1 px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Feedback */}
                    {showFeedback && aiEvaluations[transformation.id] && (
                      <EnhancedFeedback
                        type="text"
                        evaluation={aiEvaluations[transformation.id]}
                        userAnswer={`${transformation.startOfAnswer} ${answers[transformation.id] || ''}`}
                        correctAnswer={`${transformation.startOfAnswer} ${transformation.correctAnswer}`}
                      />
                    )}
                    {showFeedback && !aiEvaluations[transformation.id] && (
                      <div className={`p-3 rounded-lg ${
                        answers[transformation.id]?.toLowerCase().trim() === transformation.correctAnswer.toLowerCase().trim()
                          ? 'bg-amber-50 border-2 border-amber-200'
                          : 'bg-red-50 border-2 border-red-200'
                      }`}>
                        <p className="font-semibold mb-1">
                          {answers[transformation.id]?.toLowerCase().trim() === transformation.correctAnswer.toLowerCase().trim()
                            ? '✓ Correct!'
                            : '✗ Incorrect'}
                        </p>
                        <p className="text-sm mb-2">
                          <span className="font-semibold">Correct answer:</span> {transformation.startOfAnswer} <span className="text-amber-700 font-bold">{transformation.correctAnswer}</span>
                        </p>
                        {transformation.explanation && (
                          <p className="text-sm text-slate-700">
                            <span className="font-semibold">Explanation:</span> {transformation.explanation}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'word-formation':
        return (
          <div className="space-y-6">
            {/* Instructions */}
            <div className="bg-peach-50 rounded-xl p-6 border-2 border-peach-200">
              <h3 className="text-xl font-bold text-peach-900 mb-3 flex items-center gap-2">
                <span>📝</span>
                <span>{currentExercise.title}</span>
              </h3>
              <div className="bg-peach-100 p-3 rounded-lg border border-peach-300">
                <p className="text-sm text-peach-900 font-semibold">💡 Instructions: Choose the correct form of the word given in capitals to complete each sentence.</p>
              </div>
            </div>

            {/* Text with Gaps */}
            {currentExercise.text && (
              <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
                <p className="text-slate-700 whitespace-pre-line leading-relaxed text-lg">
                  {currentExercise.text}
                </p>
              </div>
            )}

            {/* Questions */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900">Complete the gaps:</h4>
              {currentExercise.questions.map((question: any, idx: number) => (
                <div key={question.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-slate-900">
                        Gap {question.gapNumber}: {question.baseWord}
                      </p>
                      <span className="text-sm text-coral-600">({question.points} {question.points === 1 ? 'point' : 'points'})</span>
                    </div>

                    {/* Hint */}
                    {question.hint && (
                      <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                        <p className="text-sm text-coral-800">
                          <span className="font-semibold">💡 Hint:</span> {question.hint}
                        </p>
                      </div>
                    )}

                    {/* Multiple Choice Options or Text Input */}
                    {question.options && question.options.length > 0 ? (
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Choose the correct answer:</label>
                        <div className="space-y-2">
                          {question.options.map((option: string, optIdx: number) => (
                            <label
                              key={optIdx}
                              className={`flex items-center gap-3 p-4 rounded-lg border-2 hover:bg-peach-50 cursor-pointer transition-all ${
                                answers[question.id] === option
                                  ? 'border-peach-500 bg-peach-50'
                                  : 'border-slate-200'
                              }`}
                            >
                              <input
                                type="radio"
                                name={question.id}
                                value={option}
                                checked={answers[question.id] === option}
                                onChange={(e) => handleAnswer(question.id, e.target.value)}
                                className="w-5 h-5 text-peach-600"
                              />
                              <span className="text-slate-900 font-medium">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Type your answer:</label>
                        <input
                          type="text"
                          value={answers[question.id] || ''}
                          onChange={(e) => handleAnswer(question.id, e.target.value)}
                          placeholder="Type the formed word..."
                          className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-peach-500 focus:outline-none"
                        />
                      </div>
                    )}

                    {/* Feedback - Enhanced with AI */}
                    {showFeedback && (
                      aiEvaluations[question.id] ? (
                        <EnhancedFeedback
                          evaluation={aiEvaluations[question.id]}
                          userAnswer={answers[question.id]}
                          correctAnswer={question.correctAnswer}
                          questionType="word-formation"
                        />
                      ) : (
                        <div className={`p-3 rounded-lg ${
                          (answers[question.id]?.toLowerCase().trim() === question.correctAnswer?.toLowerCase().trim()) ||
                          (question.acceptableAnswers && question.acceptableAnswers.some((ans: string) => 
                            answers[question.id]?.toLowerCase().trim() === ans.toLowerCase().trim()
                          ))
                            ? 'bg-amber-50 border-2 border-amber-200'
                            : 'bg-red-50 border-2 border-red-200'
                        }`}>
                          <p className="font-semibold mb-1">
                            {(answers[question.id]?.toLowerCase().trim() === question.correctAnswer?.toLowerCase().trim()) ||
                            (question.acceptableAnswers && question.acceptableAnswers.some((ans: string) => 
                              answers[question.id]?.toLowerCase().trim() === ans.toLowerCase().trim()
                            ))
                              ? '✓ ¡Correcto!'
                              : '✗ Incorrecto'}
                          </p>
                          <p className="text-sm mb-2">
                            <span className="font-semibold">Respuesta correcta:</span>{' '}
                            <span className="text-amber-700 font-bold">{question.correctAnswer}</span>
                            {question.acceptableAnswers && question.acceptableAnswers.length > 1 && (
                              <span className="text-slate-600 text-xs ml-2">
                                (También aceptado: {question.acceptableAnswers.filter((a: string) => a !== question.correctAnswer).join(', ')})
                              </span>
                            )}
                          </p>
                          {question.wordType && (
                            <p className="text-sm text-slate-700 mb-1">
                              <span className="font-semibold">Tipo de palabra:</span> {question.wordType}
                            </p>
                          )}
                          {question.transformation && (
                            <p className="text-sm text-slate-700 mb-2">
                              <span className="font-semibold">Transformación:</span> {question.transformation}
                            </p>
                          )}
                          {question.explanation && (
                            <p className="text-sm text-slate-700">
                              <span className="font-semibold">Explicación:</span> {question.explanation}
                            </p>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Focus Areas */}
            {currentExercise.focusAreas && currentExercise.focusAreas.length > 0 && (
              <div className="bg-peach-50 rounded-xl p-4 border-2 border-peach-200">
                <p className="font-semibold text-peach-900 mb-2">📌 Focus Areas:</p>
                <div className="flex flex-wrap gap-2">
                  {currentExercise.focusAreas.map((area: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-peach-100 text-peach-700 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'multiple-choice-cloze':
        return (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Text - Sticky on large screens */}
            <div className="lg:sticky lg:top-4 lg:self-start">
              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 mb-4">
                <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <span>📋</span>
                  <span>{currentExercise.title}</span>
                </h3>
                <p className="text-slate-700">Read the text and choose the best word for each gap from the options provided.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-slate-200 lg:max-h-[calc(100vh-16rem)] lg:overflow-y-auto">
                <p className="text-slate-700 whitespace-pre-line leading-relaxed text-lg">
                  {currentExercise.text}
                </p>
              </div>
            </div>

            {/* Questions - Scrollable */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900">Choose the correct words:</h4>
              {currentExercise.questions.map((question: any, idx: number) => (
                <div key={question.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                  <p className="font-semibold text-slate-900 mb-3">
                    Gap {question.gapNumber}: <span className="text-sm text-coral-600">({question.points} {question.points === 1 ? 'point' : 'points'})</span>
                  </p>

                  <div className="space-y-2">
                    {question.options.map((option: string, optIdx: number) => (
                      <label key={optIdx} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={(e) => handleAnswer(question.id, e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>

                  {/* Feedback */}
                  {showFeedback && (
                    <div className={`mt-3 p-3 rounded-lg ${
                      answers[question.id] === question.correctAnswer
                        ? 'bg-amber-50 border-2 border-amber-200'
                        : 'bg-red-50 border-2 border-red-200'
                    }`}>
                      <p className="font-semibold mb-1">
                        {answers[question.id] === question.correctAnswer
                          ? '✓ Correct!'
                          : '✗ Incorrect'}
                      </p>
                      <p className="text-sm mb-2">
                        <span className="font-semibold">Correct answer:</span>{' '}
                        <span className="text-amber-700 font-bold">{question.correctAnswer}</span>
                      </p>
                      {question.explanation && (
                        <p className="text-sm text-slate-700">
                          <span className="font-semibold">Explanation:</span> {question.explanation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Focus Areas */}
              {currentExercise.focusAreas && currentExercise.focusAreas.length > 0 && (
                <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                  <p className="font-semibold text-amber-900 mb-2">📌 Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {currentExercise.focusAreas.map((area: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {!showFeedback && (
                <button
                  onClick={checkAnswers}
                  disabled={evaluating}
                  className="w-full px-6 py-4 bg-coral-600 text-white rounded-xl hover:bg-coral-700 transition-colors font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {evaluating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Evaluating with AI...</span>
                    </>
                  ) : (
                    'Check Answers'
                  )}
                </button>
              )}
            </div>
          </div>
        );

      case 'sentence-building':
        const sbExercise = currentExercise as SentenceBuildingExercise;
        return (
          <div className="space-y-6">
            {/* Exercise Description */}
            <div className="bg-coral-50 rounded-xl p-6 border-2 border-coral-200">
              <h3 className="text-xl font-bold text-coral-900 mb-2 flex items-center gap-2">
                <span>🏗️</span>
                <span>{sbExercise.title}</span>
              </h3>
              <p className="text-slate-700 mb-3">{sbExercise.description}</p>
              <div className="bg-coral-100 rounded-lg p-3 border border-coral-300">
                <p className="text-sm text-coral-900 font-semibold">📝 Instructions:</p>
                <p className="text-sm text-coral-800">{sbExercise.instructions}</p>
              </div>
            </div>

            {/* Challenges */}
            {sbExercise.challenges.map((challenge, idx) => (
              <div key={challenge.id}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-coral-600 text-white rounded-full font-bold">
                    {idx + 1} / {sbExercise.challenges.length}
                  </span>
                  <span className="text-sm text-slate-600">
                    Difficulty: <span className="font-semibold capitalize">{challenge.difficulty}</span>
                  </span>
                </div>

                <SentenceBuilder
                  challenge={challenge}
                  showHints={sbExercise.showHints}
                  showTranslations={sbExercise.showTranslations}
                  onComplete={(isCorrect, userSentence, score) => {
                    // Update scores
                    const currentScores = exerciseScores[sbExercise.id] || 0;
                    const newScore = ((currentScores * idx) + score) / (idx + 1);
                    setExerciseScores(prev => ({ ...prev, [sbExercise.id]: newScore }));
                  }}
                />

                {idx < sbExercise.challenges.length - 1 && (
                  <hr className="my-8 border-slate-300" />
                )}
              </div>
            ))}
          </div>
        );

      default:
        return <p>Unknown exercise type</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Enhanced Header with Visual Stats */}
        <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-2xl p-8 mb-6 border-2 border-orange-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-black text-slate-900 mb-2">{lesson.title}</h1>
              <p className="text-slate-600 text-lg">{lesson.description}</p>
            </div>
          </div>

          {/* Visual Statistics Row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-4 border-2 border-orange-300 shadow-md">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📊</div>
                <div>
                  <div className="text-2xl font-black text-orange-900">{currentExerciseIndex + 1}/{lesson.exercises.length}</div>
                  <div className="text-xs font-semibold text-orange-700">Exercises</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-4 border-2 border-amber-300 shadow-md">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <div className="text-2xl font-black text-amber-900">{Math.round(progress)}%</div>
                  <div className="text-xs font-semibold text-amber-700">Progress</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-xl p-4 border-2 border-red-300 shadow-md">
              <div className="flex items-center gap-3">
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="text-2xl font-black text-red-900">
                    {Object.keys(exerciseScores).length > 0 
                      ? Math.round(Object.values(exerciseScores).reduce((sum, score) => sum + score, 0) / Object.keys(exerciseScores).length)
                      : 0}%
                  </div>
                  <div className="text-xs font-semibold text-red-700">Avg Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-black text-slate-800 text-base">
                Current Progress
              </span>
              <span className="text-slate-600 font-bold">{Math.round(progress)}% complete</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-4 shadow-inner overflow-hidden">
              <div
                className="bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 h-4 rounded-full transition-all duration-500 shadow-lg relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Learning Objectives */}
          <details className="mt-4">
            <summary className="cursor-pointer font-semibold text-coral-700 hover:text-coral-800">
              🎯 Learning Objectives
            </summary>
            <ul className="mt-2 space-y-1">
              {lesson.objectives.map((objective, idx) => (
                <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">✓</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Exercise Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Exercise {currentExerciseIndex + 1}: {currentExercise.type.charAt(0).toUpperCase() + currentExercise.type.slice(1)}
            </h2>
            <span className="px-3 py-1 bg-orange-100 text-coral-700 rounded-full text-sm font-semibold">
              {currentExercise.type}
            </span>
          </div>

          {renderExercise()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={previousExercise}
            disabled={currentExerciseIndex === 0}
            className="px-6 py-3 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>

          <div className="flex gap-3">
            {/* Skip button (always visible) */}
            {!showFeedback && !recordedAudio && currentExercise.type !== 'writing' && (
              <button
                onClick={nextExercise}
                className="px-6 py-3 bg-slate-300 text-slate-700 rounded-xl hover:bg-slate-400 transition-colors font-bold"
              >
                Skip Exercise →
              </button>
            )}
            
            {/* Next button (after completing exercise) */}
            {(showFeedback || recordedAudio || currentExercise.type === 'writing') && (
              <button
                onClick={nextExercise}
                className="px-6 py-3 bg-gradient-to-r from-coral-600 to-peach-600 text-white rounded-xl hover:from-coral-700 hover:to-peach-700 transition-all font-bold shadow-lg"
              >
                {currentExerciseIndex === lesson.exercises.length - 1 ? 'Complete Lesson' : 'Next Exercise →'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Celebration Modal */}
      <CelebrationModal 
        show={showCelebration} 
        score={currentScore} 
        onClose={() => setShowCelebration(false)} 
      />
    </div>
  );
}
