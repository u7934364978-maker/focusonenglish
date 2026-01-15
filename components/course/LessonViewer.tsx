'use client';

import { useState } from 'react';
import VoiceRecorder from '@/components/course/VoiceRecorder';
import EnhancedPronunciationEvaluator from '@/components/course/EnhancedPronunciationEvaluator';
import { Lesson, Exercise, Question } from '@/lib/course-data-b2';

interface LessonViewerProps {
  lesson: Lesson;
  onComplete: (lessonId: string, score: number) => void;
}

export default function LessonViewer({ lesson, onComplete }: LessonViewerProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: string]: string }>({});
  const [exerciseScores, setExerciseScores] = useState<{ [exerciseId: string]: number }>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<{ blob: Blob; transcript: string } | null>(null);
  const [pronunciationFeedback, setPronunciationFeedback] = useState<any>(null);

  const currentExercise = lesson.exercises[currentExerciseIndex];
  const progress = ((currentExerciseIndex + 1) / lesson.exercises.length) * 100;

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const checkAnswers = () => {
    if (currentExercise.type === 'grammar' || currentExercise.type === 'reading' || currentExercise.type === 'listening' || currentExercise.type === 'vocabulary') {
      const questions = currentExercise.questions;
      let correctCount = 0;
      let totalPoints = 0;
      let earnedPoints = 0;

      questions.forEach(q => {
        totalPoints += q.points;
        const userAnswer = answers[q.id]?.toLowerCase().trim();
        const correctAnswer = Array.isArray(q.correctAnswer)
          ? q.correctAnswer.map(a => a.toLowerCase().trim())
          : [q.correctAnswer.toLowerCase().trim()];

        const isCorrect = correctAnswer.some(ca => userAnswer === ca || userAnswer?.includes(ca));
        if (isCorrect) {
          correctCount++;
          earnedPoints += q.points;
        }
      });

      const score = (earnedPoints / totalPoints) * 100;
      setExerciseScores(prev => ({ ...prev, [currentExercise.id]: score }));
      setShowFeedback(true);
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
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span>📚</span>
                <span>{currentExercise.title}</span>
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-blue-800 mb-1">Grammar Point:</p>
                  <p className="text-slate-700">{currentExercise.grammarPoint}</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-800 mb-1">Explanation:</p>
                  <p className="text-slate-700 whitespace-pre-line">{currentExercise.explanation}</p>
                </div>
                {currentExercise.examples && currentExercise.examples.length > 0 && (
                  <div>
                    <p className="font-semibold text-blue-800 mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {currentExercise.examples.map((example, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start gap-2">
                          <span className="text-blue-500">•</span>
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
                    {idx + 1}. {question.question} <span className="text-sm text-blue-600">({question.points} {question.points === 1 ? 'point' : 'points'})</span>
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
                      className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:outline-none"
                    />
                  )}

                  {question.type === 'short-answer' && (
                    <textarea
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswer(question.id, e.target.value)}
                      placeholder="Your answer..."
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:outline-none"
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

                  {showFeedback && (
                    <div className={`mt-3 p-3 rounded-lg ${
                      answers[question.id]?.toLowerCase().trim() === (Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer).toLowerCase().trim()
                        ? 'bg-green-50 border-2 border-green-200'
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
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold text-lg shadow-lg"
              >
                Check Answers
              </button>
            )}
          </div>
        );

      case 'reading':
        return (
          <div className="space-y-6">
            {/* Reading Text */}
            <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
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
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800">
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

            {/* Reading Questions - same as grammar questions */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900">Comprehension Questions:</h4>
              {currentExercise.questions.map((question, idx) => (
                <div key={question.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                  <p className="font-semibold text-slate-900 mb-3">
                    {idx + 1}. {question.question} <span className="text-sm text-blue-600">({question.points} points)</span>
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
                      className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:outline-none"
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
                        ? 'bg-green-50 border-2 border-green-200'
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
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold text-lg"
              >
                Check Answers
              </button>
            )}
          </div>
        );

      case 'speaking':
      case 'pronunciation':
        return (
          <div className="space-y-6">
            {!recordedAudio ? (
              <VoiceRecorder
                exerciseId={currentExercise.id}
                prompt={currentExercise.prompt}
                targetText={currentExercise.targetText}
                timeLimit={currentExercise.timeLimit}
                modelAudioUrl={currentExercise.modelAudioUrl}
                hints={currentExercise.hints}
                onComplete={handleVoiceRecordingComplete}
              />
            ) : currentExercise.type === 'pronunciation' && !pronunciationFeedback ? (
              <EnhancedPronunciationEvaluator
                targetText={currentExercise.targetText || ''}
                transcript={recordedAudio.transcript}
                audioBlob={recordedAudio.blob}
                modelAudioUrl={currentExercise.modelAudioUrl}
                onEvaluationComplete={handlePronunciationEvaluationComplete}
              />
            ) : pronunciationFeedback ? (
              <div className="bg-white rounded-xl border-2 border-green-200 p-6">
                <p className="text-green-800 font-semibold mb-2">✓ Exercise Completed!</p>
                <p className="text-slate-700">Your pronunciation has been evaluated. Click "Next Exercise" to continue.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Speaking Exercise Completed */}
                <div className="bg-white rounded-xl border-2 border-green-200 p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                    <span>✓</span>
                    <span>Recording Submitted Successfully!</span>
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Your speaking exercise has been recorded. Here's what you said:
                  </p>
                  
                  {/* Transcript */}
                  {recordedAudio.transcript && (
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <span>📝</span>
                        <span>Your Transcript:</span>
                      </h4>
                      <p className="text-slate-700 italic">"{recordedAudio.transcript}"</p>
                      <p className="text-sm text-blue-700 mt-2">
                        Word count: {recordedAudio.transcript.split(' ').length} words
                      </p>
                    </div>
                  )}

                  {/* Basic Feedback */}
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Quick Feedback:</h4>
                    <ul className="space-y-2">
                      {recordedAudio.transcript && recordedAudio.transcript.split(' ').length >= 50 && (
                        <li className="flex items-start gap-2 text-green-700">
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
                      <li className="flex items-start gap-2 text-blue-700">
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
          <div className="space-y-6">
            {/* Audio Player */}
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                <span>🎧</span>
                <span>Listening Exercise</span>
              </h3>
              <audio src={currentExercise.audioUrl} controls className="w-full mb-3" />
              <div className="text-sm text-purple-800">
                <p>Duration: ~{Math.floor(currentExercise.duration / 60)} minutes {currentExercise.duration % 60} seconds</p>
                <p>You can replay the audio up to {currentExercise.maxReplays} times</p>
              </div>

              {currentExercise.transcript && (
                <details className="mt-4">
                  <summary className="cursor-pointer font-semibold text-purple-700 hover:text-purple-800">
                    📝 Show Transcript (only after completing)
                  </summary>
                  <div className="mt-3 p-3 bg-white rounded border border-purple-200">
                    <p className="text-slate-700 whitespace-pre-line text-sm">{currentExercise.transcript}</p>
                  </div>
                </details>
              )}
            </div>

            {/* Listening Questions */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900">Listening Comprehension Questions:</h4>
              {currentExercise.questions.map((question, idx) => (
                <div key={question.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                  <p className="font-semibold text-slate-900 mb-3">
                    {idx + 1}. {question.question} <span className="text-sm text-blue-600">({question.points} points)</span>
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
                      className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:outline-none"
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
                        ? 'bg-green-50 border-2 border-green-200'
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
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold text-lg"
              >
                Check Answers
              </button>
            )}
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
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <span>💡</span>
                  <span>Writing Tips:</span>
                </h4>
                <ul className="space-y-1">
                  {currentExercise.tips.map((tip, idx) => (
                    <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
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
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-blue-500 focus:outline-none font-mono text-sm"
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
                <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800">
                  📝 View Example Response
                </summary>
                <div className="mt-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-slate-700 whitespace-pre-line">{currentExercise.exampleResponse}</p>
                </div>
              </details>
            )}

            <button
              onClick={() => {
                setExerciseScores(prev => ({ ...prev, [currentExercise.id]: 85 })); // Mock score
                setShowFeedback(true);
              }}
              className="w-full px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-bold text-lg"
            >
              Submit Writing (Teacher will review)
            </button>

            {showFeedback && (
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <p className="text-green-800 font-semibold mb-2">✓ Writing Submitted!</p>
                <p className="text-slate-700">Your writing has been submitted for review. Your teacher will provide detailed feedback within 24-48 hours.</p>
              </div>
            )}
          </div>
        );

      default:
        return <p>Unknown exercise type</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900">{lesson.title}</h1>
              <p className="text-slate-600 mt-1">{lesson.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-600">Lesson Duration</div>
              <div className="text-2xl font-bold text-blue-600">{lesson.duration} min</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-700">
                Exercise {currentExerciseIndex + 1} of {lesson.exercises.length}
              </span>
              <span className="text-slate-600">{Math.round(progress)}% complete</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Learning Objectives */}
          <details className="mt-4">
            <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800">
              🎯 Learning Objectives
            </summary>
            <ul className="mt-2 space-y-1">
              {lesson.objectives.map((objective, idx) => (
                <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✓</span>
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
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
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
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-bold shadow-lg"
              >
                {currentExerciseIndex === lesson.exercises.length - 1 ? 'Complete Lesson' : 'Next Exercise →'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
