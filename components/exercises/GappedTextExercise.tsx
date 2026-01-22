'use client';

import { useState } from 'react';

interface GappedTextParagraph {
  letter: string;
  text: string;
  isDistractor: boolean;
}

interface GappedTextAnswer {
  gapNumber: number;
  correctLetter: string;
  explanation: string;
}

interface GappedTextExerciseProps {
  exercise: {
    id: string;
    title: string;
    difficulty: string;
    topic: string;
    mainText: string;
    removedParagraphs: GappedTextParagraph[];
    correctAnswers: GappedTextAnswer[];
  };
  onComplete?: (score: number) => void;
}

export default function GappedTextExercise({ exercise, onComplete }: GappedTextExerciseProps) {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [evaluating, setEvaluating] = useState(false);

  const handleAnswer = (gapNumber: number, letter: string) => {
    setAnswers(prev => ({ ...prev, [gapNumber]: letter }));
  };

  const checkAnswers = () => {
    setEvaluating(true);
    
    // Calculate score
    let correct = 0;
    const totalGaps = exercise.correctAnswers.length;
    
    exercise.correctAnswers.forEach(answer => {
      if (answers[answer.gapNumber]?.toUpperCase() === answer.correctLetter.toUpperCase()) {
        correct++;
      }
    });
    
    const score = (correct / totalGaps) * 100;
    setShowFeedback(true);
    setEvaluating(false);
    
    if (onComplete) {
      onComplete(score);
    }
  };

  const resetExercise = () => {
    setAnswers({});
    setShowFeedback(false);
  };

  // Split main text by [GAP X] markers
  const renderMainText = () => {
    const parts = exercise.mainText.split(/(\[GAP \d+\])/);
    
    return parts.map((part, index) => {
      const gapMatch = part.match(/\[GAP (\d+)\]/);
      
      if (gapMatch) {
        const gapNum = parseInt(gapMatch[1]);
        const userAnswer = answers[gapNum];
        const correctAnswer = exercise.correctAnswers.find(a => a.gapNumber === gapNum);
        const isCorrect = showFeedback && userAnswer?.toUpperCase() === correctAnswer?.correctLetter.toUpperCase();
        const isIncorrect = showFeedback && userAnswer && userAnswer?.toUpperCase() !== correctAnswer?.correctLetter.toUpperCase();

        return (
          <div key={index} className="my-6 p-4 bg-slate-50 rounded-lg border-2 border-slate-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-bold text-slate-600">GAP {gapNum}</span>
              {!showFeedback ? (
                <select
                  value={userAnswer || ''}
                  onChange={(e) => handleAnswer(gapNum, e.target.value)}
                  className="px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none bg-white"
                >
                  <option value="">-- Select paragraph --</option>
                  {exercise.removedParagraphs.map(para => (
                    <option key={para.letter} value={para.letter}>
                      Paragraph {para.letter}
                    </option>
                  ))}
                </select>
              ) : (
                <span className={`px-4 py-2 rounded-lg font-bold ${
                  isCorrect 
                    ? 'bg-green-100 text-green-800 border-2 border-green-300' 
                    : isIncorrect
                    ? 'bg-red-100 text-red-800 border-2 border-red-300'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {isCorrect && '✅ '}{isIncorrect && '❌ '}
                  Your answer: {userAnswer || '(no answer)'}
                </span>
              )}
            </div>
            
            {showFeedback && correctAnswer && (
              <div className="mt-2 p-3 bg-white rounded-lg border">
                <p className="text-sm">
                  <strong className="text-emerald-700">Correct answer:</strong> Paragraph {correctAnswer.correctLetter}
                </p>
                <p className="text-sm mt-1 text-slate-700">
                  💡 {correctAnswer.explanation}
                </p>
              </div>
            )}
          </div>
        );
      }
      
      return (
        <p key={index} className="mb-4 text-lg leading-relaxed text-slate-800">
          {part}
        </p>
      );
    });
  };

  const calculateScore = () => {
    let correct = 0;
    exercise.correctAnswers.forEach(answer => {
      if (answers[answer.gapNumber]?.toUpperCase() === answer.correctLetter.toUpperCase()) {
        correct++;
      }
    });
    return Math.round((correct / exercise.correctAnswers.length) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
        <h3 className="text-2xl font-bold text-purple-900 mb-2 flex items-center gap-2">
          <span>📄</span>
          <span>{exercise.title}</span>
        </h3>
        <div className="flex gap-4 text-sm text-slate-700 mt-3">
          <span className="px-3 py-1 bg-white rounded-full border border-purple-200">
            📊 {exercise.difficulty}
          </span>
          <span className="px-3 py-1 bg-white rounded-full border border-purple-200">
            🏷️ {exercise.topic}
          </span>
          <span className="px-3 py-1 bg-white rounded-full border border-purple-200">
            🔢 {exercise.correctAnswers.length} gaps
          </span>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
        <h4 className="font-bold text-blue-900 mb-2">📋 Instructions:</h4>
        <p className="text-slate-700">
          You are going to read an article from which <strong>six paragraphs have been removed</strong>. 
          Choose from paragraphs <strong>A-G</strong> the one which fits each gap <strong>(1-6)</strong>. 
          There is <strong>one extra paragraph</strong> which you do not need to use.
        </p>
      </div>

      {/* Main Text with Gaps */}
      <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
        <h4 className="text-xl font-bold text-slate-800 mb-4">Main Text</h4>
        <div className="prose max-w-none">
          {renderMainText()}
        </div>
      </div>

      {/* Removed Paragraphs */}
      <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
        <h4 className="text-xl font-bold text-slate-800 mb-4">
          Removed Paragraphs (A-G)
          {showFeedback && (
            <span className="ml-3 text-sm font-normal text-slate-600">
              ⭐ One paragraph is not needed
            </span>
          )}
        </h4>
        <div className="grid gap-4">
          {exercise.removedParagraphs.map(para => {
            const isUsed = showFeedback && Object.values(answers).some(
              ans => ans?.toUpperCase() === para.letter.toUpperCase()
            );
            const isCorrectlyUsed = showFeedback && exercise.correctAnswers.some(
              correctAns => answers[correctAns.gapNumber]?.toUpperCase() === para.letter.toUpperCase() &&
                correctAns.correctLetter.toUpperCase() === para.letter.toUpperCase()
            );
            const isDistractor = showFeedback && para.isDistractor;

            return (
              <div 
                key={para.letter} 
                className={`p-4 rounded-lg border-2 transition-all ${
                  showFeedback
                    ? isDistractor
                      ? 'bg-yellow-50 border-yellow-300'
                      : isCorrectlyUsed
                      ? 'bg-green-50 border-green-300'
                      : isUsed
                      ? 'bg-red-50 border-red-300'
                      : 'bg-slate-50 border-slate-200'
                    : 'bg-slate-50 border-slate-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {para.letter}
                  </span>
                  <div className="flex-1">
                    <p className="text-slate-800 leading-relaxed">{para.text}</p>
                    {showFeedback && isDistractor && (
                      <p className="text-sm text-yellow-800 font-semibold mt-2">
                        ⚠️ This is the extra paragraph (not needed)
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Score Display */}
      {showFeedback && (
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-300">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-emerald-900 mb-1">Your Score</h4>
              <p className="text-slate-700">
                {Object.values(answers).filter((ans, idx) => 
                  ans?.toUpperCase() === exercise.correctAnswers[idx]?.correctLetter.toUpperCase()
                ).length} / {exercise.correctAnswers.length} correct
              </p>
            </div>
            <div className="text-5xl font-bold text-emerald-600">
              {calculateScore()}%
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {!showFeedback ? (
          <button
            onClick={checkAnswers}
            disabled={evaluating || Object.keys(answers).length === 0}
            className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {evaluating ? 'Evaluating...' : 'Check Answers'}
          </button>
        ) : (
          <>
            <button
              onClick={resetExercise}
              className="flex-1 py-4 bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-all font-bold text-lg shadow-lg"
            >
              Try Again
            </button>
            <button
              onClick={() => {/* Navigate to next exercise */}}
              className="flex-1 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all font-bold text-lg shadow-lg"
            >
              Next Exercise →
            </button>
          </>
        )}
      </div>

      {/* Tips */}
      {!showFeedback && (
        <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
          <h4 className="font-bold text-amber-900 mb-2">💡 Tips:</h4>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>• Read the whole text first to understand the main idea</li>
            <li>• Look for linking words and pronouns that connect paragraphs</li>
            <li>• Pay attention to the topic and flow of ideas</li>
            <li>• One paragraph will not fit anywhere (the distractor)</li>
          </ul>
        </div>
      )}
    </div>
  );
}
