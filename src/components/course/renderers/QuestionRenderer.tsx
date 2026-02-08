'use client';

import React from 'react';
import { Question, EvaluationResult } from '@/lib/exercise-types';
import EnhancedFeedback from '@/components/course/EnhancedFeedback';

interface QuestionRendererProps {
  question: Question;
  index: number;
  userAnswer: string;
  onChange: (id: string, answer: string) => void;
  showFeedback: boolean;
  evaluation?: EvaluationResult;
}

export default function QuestionRenderer({
  question,
  index,
  userAnswer,
  onChange,
  showFeedback,
  evaluation
}: QuestionRendererProps) {
  const isAnswerCorrect = (userAns: string, questionData: Question) => {
    if (!userAns) return false;
    
    const normalizedUser = userAns.trim();
    const correctAnswers = [
      ...(Array.isArray(questionData.correctAnswer) ? questionData.correctAnswer : [questionData.correctAnswer]),
      ...( (questionData as any).acceptableAnswers || [] ),
      ...( (questionData as any).acceptableAlternatives || [] ),
      ...( (questionData as any).correctAnswers || [] )
    ].filter(Boolean).map(ans => String(ans).trim());

    // Check for exact match or letter-based match
    return correctAnswers.some(ans => {
      // Exact match (case insensitive)
      if (ans.toLowerCase() === normalizedUser.toLowerCase()) return true;
      
      // Letter match: check if userAnswer starts with "A. " or "A) " where ans is "A"
      const letterMatchRegex = new RegExp(`^${ans}[.)]\\s*`, 'i');
      if (letterMatchRegex.test(normalizedUser)) return true;

      return false;
    });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
      <p className="font-bold text-slate-900 dark:text-white mb-4 flex items-start gap-2">
        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-xs">
          {index + 1}
        </span>
        <span className="flex-1">
          {question.question} 
          {question.type === 'word-formation' && (question as any).baseWord && (
            <span className="ml-2 px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded font-black text-xs uppercase tracking-widest">
              {(question as any).baseWord}
            </span>
          )}
          <span className="ml-2 text-sm font-medium text-coral-600 dark:text-coral-500 italic">
            ({question.points} {question.points === 1 ? 'point' : 'points'})
          </span>
        </span>
      </p>

      {question.type === 'word-formation' && (question as any).hint && (
        <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800 flex gap-2 items-start">
          <span className="text-amber-500 text-xs">💡</span>
          <p className="text-xs text-amber-800 dark:text-amber-300 italic leading-snug">
            {(question as any).hint}
          </p>
        </div>
      )}

      {question.type === 'multiple-choice' && question.options && (
        <div className="space-y-3">
          {question.options.map((option: string, optIdx: number) => (
            <label 
              key={optIdx} 
              className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                userAnswer === option
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                  : 'border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-slate-50 dark:hover:bg-slate-700/50'
              } ${showFeedback && 'pointer-events-none'}`}
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={userAnswer === option}
                onChange={(e) => onChange(question.id, e.target.value)}
                disabled={showFeedback}
                className="w-5 h-5 text-indigo-600 border-slate-300 focus:ring-indigo-500"
              />
              <span className={`font-medium ${
                userAnswer === option ? 'text-indigo-900 dark:text-indigo-200' : 'text-slate-700 dark:text-slate-300'
              }`}>{option}</span>
            </label>
          ))}
        </div>
      )}

      {(question.type === 'fill-blank' || question.type === 'short-answer') && (
        <div className="relative">
          {question.type === 'short-answer' ? (
            <textarea
              value={userAnswer || ''}
              onChange={(e) => onChange(question.id, e.target.value)}
              disabled={showFeedback}
              placeholder="Type your answer here..."
              rows={3}
              className={`w-full px-5 py-4 rounded-xl border-2 transition-all focus:outline-none font-medium ${
                showFeedback
                  ? 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500'
              } text-slate-900 dark:text-white`}
            />
          ) : (
            <input
              type="text"
              value={userAnswer || ''}
              onChange={(e) => onChange(question.id, e.target.value)}
              disabled={showFeedback}
              placeholder="Type your answer here..."
              className={`w-full px-5 py-4 rounded-xl border-2 transition-all focus:outline-none font-medium ${
                showFeedback
                  ? 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500'
              } text-slate-900 dark:text-white`}
            />
          )}
        </div>
      )}

      {question.type === 'true-false' && (
        <div className="flex flex-wrap gap-4">
          {['True', 'False'].map((val) => (
            <label 
              key={val}
              className={`flex-1 min-w-[120px] flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                userAnswer === val
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                  : 'border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800'
              } ${showFeedback && 'pointer-events-none'}`}
            >
              <input
                type="radio"
                name={question.id}
                value={val}
                checked={userAnswer === val}
                onChange={(e) => onChange(question.id, e.target.value)}
                disabled={showFeedback}
                className="w-5 h-5 text-indigo-600"
              />
              <span className="font-bold text-slate-700 dark:text-slate-300">{val}</span>
            </label>
          ))}
        </div>
      )}

      {showFeedback && (
        <div className="mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
          {evaluation ? (
            <EnhancedFeedback
              type={question.type === 'multiple-choice' ? 'multiple-choice' : 'text'}
              evaluation={evaluation}
              userAnswer={userAnswer || ''}
              correctAnswer={Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' / ') : (question.correctAnswer as string)}
            />
          ) : (
            <div className={`p-5 rounded-xl border-2 ${
              isAnswerCorrect(userAnswer, question)
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300'
                : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">
                  {isAnswerCorrect(userAnswer, question) ? '✓' : '✗'}
                </span>
                <p className="font-black">
                  {isAnswerCorrect(userAnswer, question)
                    ? 'Correct!'
                    : 'Incorrect'}
                </p>
              </div>
              <p className="text-sm">
                <strong className="opacity-70 uppercase tracking-wider text-[10px]">Correct answer:</strong><br/>
                <span className="font-bold">{Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' / ') : (question.correctAnswer as string)}</span>
              </p>
              {question.explanation && (
                <div className="mt-3 pt-3 border-t border-current/10">
                  <p className="text-sm italic opacity-90 leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
