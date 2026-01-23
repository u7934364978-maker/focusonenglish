'use client';

import { useState, useEffect } from 'react';
import EnhancedVoiceRecorder from '@/components/course/EnhancedVoiceRecorder';
import SmartPronunciationEvaluator from '@/components/course/SmartPronunciationEvaluator';
import PronunciationPractice from '@/components/course/PronunciationPractice';
import EnhancedFeedback from '@/components/course/EnhancedFeedback';
import SentenceBuilder from '@/components/course/SentenceBuilder';
import CelebrationModal from '@/components/course/CelebrationModal';
import SpeakingPart1 from '@/components/course/SpeakingPart1';
import SpeakingPart2 from '@/components/course/SpeakingPart2';
import SpeakingPart3 from '@/components/course/SpeakingPart3';
import SpeakingPart4 from '@/components/course/SpeakingPart4';
import EnhancedSpeakingExercise from '@/components/EnhancedSpeakingExercise';
import GappedTextExercise from '@/components/exercises/GappedTextExercise';
import MultipleMatchingExercise from '@/components/exercises/MultipleMatchingExercise';
import KeyWordTransformationExercise from '@/components/exercises/KeyWordTransformationExercise';
import MultipleChoiceClozeExercise from '@/components/exercises/MultipleChoiceClozeExercise';
import { GamificationWidget } from '@/components/gamification/GamificationPanel';
import { XPGainAnimation } from '@/components/gamification/XPDisplay';
import { BadgeNotification } from '@/components/gamification/BadgeDisplay';
import { useGamification } from '@/lib/hooks/use-gamification';
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
  
  // Gamification hooks
  const gamification = useGamification();
  const [showXPGain, setShowXPGain] = useState(false);
  const [xpGained, setXPGained] = useState(0);
  const [newBadges, setNewBadges] = useState<any[]>([]);

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
        currentExercise.type === 'multiple-choice-cloze' ||
        (currentExercise.type === 'pronunciation' && (currentExercise as any).exercises)) {
      const questions = currentExercise.type === 'pronunciation' 
        ? (currentExercise as any).exercises 
        : currentExercise.questions;
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
        
        // SHORT ANSWER, FILL BLANK, or ESSAY - Use AI evaluation
        else if (q.type === 'short-answer' || q.type === 'fill-blank' || q.type === 'essay') {
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
              // Check acceptableAnswers first, then correctAnswer
              const acceptableAnswers = (q as any).acceptableAnswers;
              let answersToCheck: string[] = [];
              
              if (acceptableAnswers && Array.isArray(acceptableAnswers)) {
                answersToCheck = acceptableAnswers.map(a => a.toLowerCase().trim());
              } else if (Array.isArray(q.correctAnswer)) {
                answersToCheck = q.correctAnswer.map(a => a.toLowerCase().trim());
              } else {
                answersToCheck = [q.correctAnswer.toLowerCase().trim()];
              }
              
              const isCorrect = answersToCheck.some(ca => 
                userAnswer.toLowerCase().trim() === ca
              );
              if (isCorrect) earnedPoints += q.points;
            }
          } catch (error) {
            console.error('Error evaluating text answer:', error);
            // Fallback
            // Check acceptableAnswers first, then correctAnswer
            const acceptableAnswers = (q as any).acceptableAnswers;
            let answersToCheck: string[] = [];
            
            if (acceptableAnswers && Array.isArray(acceptableAnswers)) {
              answersToCheck = acceptableAnswers.map(a => a.toLowerCase().trim());
            } else if (Array.isArray(q.correctAnswer)) {
              answersToCheck = q.correctAnswer.map(a => a.toLowerCase().trim());
            } else {
              answersToCheck = [q.correctAnswer.toLowerCase().trim()];
            }
            
            const isCorrect = answersToCheck.some(ca => 
              userAnswer.toLowerCase().trim() === ca
            );
            if (isCorrect) earnedPoints += q.points;
          }
        }
        
        // TRUE/FALSE or STRESS-IDENTIFICATION - Simple exact match
        else if (q.type === 'true-false' || q.type === 'stress-identification') {
          const correctAnswer = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
          if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
            earnedPoints += q.points;
          }
        }
        
        // MINIMAL-PAIRS - Informational only, give full points for completion
        else if (q.type === 'minimal-pairs') {
          earnedPoints += q.points;
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
      
    } else if (currentExercise.type === 'gap-fill-text') {
      const gaps = (currentExercise as any).gaps;
      let totalPoints = 0;
      let earnedPoints = 0;
      const evaluations: { [gapId: string]: EvaluationResult } = {};

      for (const gap of gaps) {
        totalPoints += gap.points;
        const userAnswer = answers[gap.id];
        
        if (!userAnswer || userAnswer.trim() === '') {
          earnedPoints += 0;
          evaluations[gap.id] = {
            isCorrect: false,
            score: 0,
            feedback: 'No answer provided',
            detailedExplanation: gap.explanation || ''
          } as any;
          continue;
        }

        // Use AI evaluation for gap-fill answers
        try {
          const context = (currentExercise as any).text || '';
          const acceptableAnswers = [gap.correctAnswer];
          if (gap.acceptableAlternatives) {
            acceptableAnswers.push(...gap.acceptableAlternatives);
          }

          const response = await fetch('/api/evaluate-text-answer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              question: `Fill in gap ${gap.gapNumber}`,
              userAnswer: userAnswer,
              correctAnswer: acceptableAnswers,
              expectedConcepts: [(currentExercise as any).title || 'grammar'],
              context: context.substring(0, 2000),
              level: 'B2',
              questionType: 'gap-fill'
            })
          });

          if (response.ok) {
            const evaluation: TextAnswerEvaluationResponse = await response.json();
            evaluations[gap.id] = evaluation;
            
            // Award full or partial points based on AI score
            if (evaluation.isCorrect) {
              earnedPoints += gap.points;
            } else if (evaluation.score >= 70) {
              // Partial credit for close answers
              earnedPoints += gap.points * (evaluation.score / 100);
            }
          } else {
            // Fallback to simple string matching
            const userAnswerNorm = userAnswer.toLowerCase().trim();
            const isCorrect = acceptableAnswers.some(ans => 
              userAnswerNorm === ans.toLowerCase().trim()
            );
            
            if (isCorrect) {
              earnedPoints += gap.points;
            }
            
            evaluations[gap.id] = {
              isCorrect,
              score: isCorrect ? 100 : 0,
              feedback: isCorrect ? '✓ Correct!' : '✗ Incorrect',
              detailedExplanation: gap.explanation || (isCorrect ? 'Your answer is correct.' : `The correct answer is: ${gap.correctAnswer}`)
            } as any;
          }
        } catch (error) {
          console.error('Error evaluating gap-fill answer:', error);
          // Fallback to simple matching
          const userAnswerNorm = userAnswer.toLowerCase().trim();
          const acceptableAnswers = [gap.correctAnswer];
          if (gap.acceptableAlternatives) {
            acceptableAnswers.push(...gap.acceptableAlternatives);
          }
          const isCorrect = acceptableAnswers.some(ans => 
            userAnswerNorm === ans.toLowerCase().trim()
          );
          
          if (isCorrect) {
            earnedPoints += gap.points;
          }
          
          evaluations[gap.id] = {
            isCorrect,
            score: isCorrect ? 100 : 0,
            feedback: isCorrect ? '✓ Correct!' : '✗ Incorrect',
            detailedExplanation: gap.explanation || (isCorrect ? 'Your answer is correct.' : `The correct answer is: ${gap.correctAnswer}`)
          } as any;
        }
      }

      const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
      setExerciseScores(prev => ({ ...prev, [currentExercise.id]: score }));
      setAiEvaluations(evaluations);
      setCurrentScore(score);
      setShowFeedback(true);
      setShowCelebration(true);
      setEvaluating(false);
      
    } else if (currentExercise.type === 'error-identification' ||
               currentExercise.type === 'collocation-matching' ||
               currentExercise.type === 'phrasal-verbs' ||
               currentExercise.type === 'idioms-expressions' ||
               currentExercise.type === 'key-word-transformations' ||
               currentExercise.type === 'sentence-completion' ||
               currentExercise.type === 'matching') {
      
      const exercise = currentExercise as any;
      const items = exercise.sentences || exercise.pairs || exercise.items || exercise.transformations || [];
      let totalPoints = 0;
      let earnedPoints = 0;
      const evaluations: { [id: string]: EvaluationResult } = {};

      for (const item of items) {
        const itemId = item.id || item.idiom;
        totalPoints += item.points || 1;
        const userAnswer = answers[itemId] || '';
        
        if (!userAnswer || userAnswer.trim() === '') {
          evaluations[itemId] = {
            isCorrect: false,
            score: 0,
            feedback: 'No answer provided',
            detailedExplanation: item.explanation || ''
          } as any;
          continue;
        }

        let correctAnswer = item.correctAnswer || item.correctMatch || item.correctUsage || item.meaning || '';
        
        if (currentExercise.type === 'error-identification') {
          const isCorrect = item.hasError ? userAnswer === 'error' : userAnswer === 'correct';
          if (isCorrect) earnedPoints += item.points || 1;
          evaluations[itemId] = {
            isCorrect,
            score: isCorrect ? 100 : 0,
            feedback: isCorrect ? '✓ Correct!' : '✗ Incorrect',
            detailedExplanation: item.explanation || ''
          } as any;
        } else {
          const userAnswerNorm = userAnswer.toLowerCase().trim();
          const correctAnswerNorm = correctAnswer.toLowerCase().trim();
          const isCorrect = userAnswerNorm === correctAnswerNorm ||
            (item.alternatives && item.alternatives.some((alt: string) => 
              userAnswerNorm === alt.toLowerCase().trim()
            ));
          
          if (isCorrect) earnedPoints += item.points || 1;
          
          evaluations[itemId] = {
            isCorrect,
            score: isCorrect ? 100 : 0,
            feedback: isCorrect ? '✓ Correct!' : '✗ Incorrect',
            detailedExplanation: item.explanation || (isCorrect ? 'Correct!' : `Correct answer: ${correctAnswer}`)
          } as any;
        }
      }

      const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
      setExerciseScores(prev => ({ ...prev, [currentExercise.id]: score }));
      setAiEvaluations(evaluations);
      setCurrentScore(score);
      setShowFeedback(true);
      setShowCelebration(true);
      setEvaluating(false);

    } else if (currentExercise.type === 'paraphrasing' || currentExercise.type === 'paraphrase') {
      const exercise = currentExercise as any;
      const items = exercise.items || exercise.sentences || [];
      let totalPoints = 0;
      let earnedPoints = 0;
      const evaluations: { [id: string]: EvaluationResult } = {};

      for (const item of items) {
        const itemId = item.id || `paraph-${items.indexOf(item)}`;
        totalPoints += item.points || 2;
        const userAnswer = answers[itemId] || '';
        
        if (!userAnswer || userAnswer.trim() === '') {
          evaluations[itemId] = {
            isCorrect: false,
            score: 0,
            feedback: 'No answer provided',
            detailedExplanation: ''
          } as any;
          continue;
        }

        try {
          const response = await fetch('/api/evaluate-text-answer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              question: `Paraphrase: ${item.originalSentence || item.original}`,
              userAnswer: userAnswer,
              correctAnswer: [item.correctParaphrase || item.paraphrase],
              expectedConcepts: ['paraphrasing'],
              level: 'B2',
              questionType: 'paraphrase'
            })
          });

          if (response.ok) {
            const evaluation: TextAnswerEvaluationResponse = await response.json();
            evaluations[itemId] = evaluation;
            if (evaluation.isCorrect || evaluation.score >= 70) {
              earnedPoints += (item.points || 2) * (evaluation.score / 100);
            }
          } else {
            evaluations[itemId] = {
              isCorrect: false,
              score: 50,
              feedback: 'Partial credit',
              detailedExplanation: item.explanation || ''
            } as any;
            earnedPoints += (item.points || 2) * 0.5;
          }
        } catch (error) {
          console.error('Error evaluating paraphrase:', error);
          evaluations[itemId] = {
            isCorrect: false,
            score: 50,
            feedback: 'Partial credit',
            detailedExplanation: item.explanation || ''
          } as any;
          earnedPoints += (item.points || 2) * 0.5;
        }
      }

      const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
      setExerciseScores(prev => ({ ...prev, [currentExercise.id]: score }));
      setAiEvaluations(evaluations);
      setCurrentScore(score);
      setShowFeedback(true);
      setShowCelebration(true);
      setEvaluating(false);

    } else if (currentExercise.type === 'sentence-reordering' || currentExercise.type === 'sentence-ordering') {
      const exercise = currentExercise as any;
      const items = exercise.items || [{ sentences: exercise.sentences, correctOrder: exercise.correctOrder, id: 'single' }];
      let totalPoints = 0;
      let earnedPoints = 0;

      for (const item of items) {
        const sentences = item.shuffledSentences || item.sentences || [];
        const correctOrder = item.correctOrder || Array.from({length: sentences.length}, (_, i) => i);
        totalPoints += sentences.length;
        
        for (let idx = 0; idx < sentences.length; idx++) {
          const numberId = `${item.id || 'reorder-0'}-${idx}`;
          const userOrder = parseInt(answers[numberId] || '0');
          if (userOrder === correctOrder[idx] + 1) {
            earnedPoints += 1;
          }
        }
      }

      const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
      setExerciseScores(prev => ({ ...prev, [currentExercise.id]: score }));
      setCurrentScore(score);
      setShowFeedback(true);
      setShowCelebration(true);
      setEvaluating(false);

    } else if (currentExercise.type === 'gap-fill' || 
               currentExercise.type === 'extended-gap-fill' || 
               currentExercise.type === 'open-cloze') {
      const exercise = currentExercise as any;
      const gaps = exercise.gaps || [];
      let totalPoints = 0;
      let earnedPoints = 0;
      const evaluations: { [id: string]: EvaluationResult } = {};

      for (const gap of gaps) {
        const gapId = gap.id || `gap-${gaps.indexOf(gap) + 1}`;
        totalPoints += 1;
        const userAnswer = answers[gapId] || '';
        
        if (!userAnswer || userAnswer.trim() === '') {
          evaluations[gapId] = {
            isCorrect: false,
            score: 0,
            feedback: 'No answer provided',
            detailedExplanation: gap.explanation || ''
          } as any;
          continue;
        }

        const correctAnswers = gap.correctAnswers || [gap.correctAnswer];
        const userAnswerNorm = userAnswer.toLowerCase().trim();
        const isCorrect = correctAnswers.some((ans: string) => 
          userAnswerNorm === ans.toLowerCase().trim()
        );
        
        if (isCorrect) earnedPoints += 1;
        
        evaluations[gapId] = {
          isCorrect,
          score: isCorrect ? 100 : 0,
          feedback: isCorrect ? '✓ Correct!' : '✗ Incorrect',
          detailedExplanation: gap.explanation || ''
        } as any;
      }

      const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
      setExerciseScores(prev => ({ ...prev, [currentExercise.id]: score }));
      setAiEvaluations(evaluations);
      setCurrentScore(score);
      setShowFeedback(true);
      setShowCelebration(true);
      setEvaluating(false);

    } else if (currentExercise.type === 'summary-writing') {
      const exercise = currentExercise as any;
      const userSummary = answers[exercise.id] || '';

      if (!userSummary || userSummary.trim() === '') {
        setEvaluating(false);
        return;
      }

      try {
        const response = await fetch('/api/evaluate-writing', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            writingText: userSummary,
            taskType: 'summary',
            sourceText: exercise.originalText || exercise.sourceText,
            level: 'B2',
            rubric: exercise.rubric || {
              content: 40,
              conciseness: 20,
              accuracy: 20,
              grammar: 20
            }
          })
        });

        if (response.ok) {
          const evaluation: WritingEvaluationResponse = await response.json();
          setAiEvaluations({ [exercise.id]: evaluation });
          setExerciseScores(prev => ({ ...prev, [exercise.id]: evaluation.score }));
          setCurrentScore(evaluation.score);
        }
      } catch (error) {
        console.error('Error evaluating summary:', error);
      }

      setShowFeedback(true);
      setShowCelebration(true);
      setEvaluating(false);

    } else if (currentExercise.type === 'integrated-reading-writing') {
      const exercise = currentExercise as any;
      const questions = exercise.questions || [];
      let totalPoints = 0;
      let earnedPoints = 0;
      const evaluations: { [id: string]: EvaluationResult } = {};

      for (const q of questions) {
        totalPoints += q.points || 1;
        const userAnswer = answers[q.id] || '';
        
        if (!userAnswer) {
          evaluations[q.id] = {
            isCorrect: false,
            score: 0,
            feedback: 'No answer provided',
            detailedExplanation: ''
          } as any;
          continue;
        }

        if (q.type === 'multiple-choice' && q.options) {
          const isCorrect = userAnswer === q.correctAnswer;
          if (isCorrect) earnedPoints += q.points || 1;
          evaluations[q.id] = {
            isCorrect,
            score: isCorrect ? 100 : 0,
            feedback: isCorrect ? '✓ Correct!' : '✗ Incorrect',
            detailedExplanation: q.explanation || ''
          } as any;
        } else {
          try {
            const response = await fetch('/api/evaluate-text-answer', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                question: q.question,
                userAnswer: userAnswer,
                correctAnswer: [q.correctAnswer],
                expectedConcepts: ['reading comprehension'],
                context: exercise.readingText,
                level: 'B2',
                questionType: 'short-answer'
              })
            });

            if (response.ok) {
              const evaluation: TextAnswerEvaluationResponse = await response.json();
              evaluations[q.id] = evaluation;
              if (evaluation.isCorrect || evaluation.score >= 70) {
                earnedPoints += (q.points || 1) * (evaluation.score / 100);
              }
            }
          } catch (error) {
            console.error('Error evaluating answer:', error);
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

    } else {
      setEvaluating(false);
    }
  };

  const nextExercise = async () => {
    // Award XP for completed exercise if it has a score
    if (exerciseScores[currentExercise.id] !== undefined) {
      const exerciseScore = exerciseScores[currentExercise.id];
      const maxScore = 100; // Assume 100 as max for percentage calculation
      
      const result = await gamification.completeExercise(
        currentExercise.id, 
        exerciseScore, 
        maxScore
      );
      
      if (result?.newBadges && result.newBadges.length > 0) {
        setNewBadges(result.newBadges);
      }
      
      // Show XP gain animation
      const xpAmount = Math.floor((exerciseScore / maxScore) * 20) + (exerciseScore === maxScore ? 10 : 0);
      setXPGained(xpAmount);
      setShowXPGain(true);
      
      setTimeout(() => setShowXPGain(false), 2000);
    }
    
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      setShowFeedback(false);
      setAnswers({});
      setRecordedAudio(null);
      setPronunciationFeedback(null);
    } else {
      // Calcular puntuación total de la lección
      const totalScore = Object.values(exerciseScores).reduce((sum, score) => sum + score, 0) / Object.keys(exerciseScores).length;
      
      // Award XP for completing the lesson
      await gamification.completeLesson(lesson.id, totalScore, 100);
      
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

  const handleTryAgain = () => {
    setAnswers({});
    setShowFeedback(false);
    setAiEvaluations({});
    setCurrentScore(0);
  };

  const handleNext = () => {
    nextExercise();
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
                      placeholder="Tu respuesta..."
                      className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                    />
                  )}

                  {question.type === 'short-answer' && (
                    <textarea
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswer(question.id, e.target.value)}
                      placeholder="Tu respuesta..."
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
                      correctAnswer={Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' o ') : question.correctAnswer}
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
                          ? '✓ ¡Correcto!'
                          : '✗ Incorrecto'}
                      </p>
                      <p className="text-sm mb-1">
                        <strong>Respuesta correcta:</strong> {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' o ') : question.correctAnswer}
                      </p>
                      {question.explanation && (
                        <p className="text-sm text-slate-700">
                          <strong>Explicación:</strong> {question.explanation}
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
                    <span>Evaluando con IA...</span>
                  </>
                ) : (
                  'Evaluar Respuestas'
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
                      placeholder="Tu respuesta..."
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none"
                    />
                  )}

                  {question.type === 'essay' && (
                    <div className="space-y-2">
                      <textarea
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswer(question.id, e.target.value)}
                        placeholder="Write your essay here..."
                        rows={8}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none font-sans"
                      />
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>Word count: {(answers[question.id] || '').split(/\s+/).filter(w => w.length > 0).length} words</span>
                        {question.explanation && !showFeedback && (
                          <span className="text-xs italic">💡 {question.explanation}</span>
                        )}
                      </div>
                    </div>
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

                  {question.type === 'writing' && (
                    <div className="space-y-3">
                      {(question as any).writingPrompt && (
                        <div className="bg-violet-50 border-l-4 border-violet-500 p-4 rounded">
                          <p className="text-violet-900 font-medium">✍️ Writing Task:</p>
                          <p className="text-slate-700 mt-1">{(question as any).writingPrompt}</p>
                          {(question as any).minWords && (question as any).maxWords && (
                            <p className="text-sm text-violet-700 mt-2">
                              📏 Word count: {(question as any).minWords}-{(question as any).maxWords} words
                            </p>
                          )}
                        </div>
                      )}
                      <textarea
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswer(question.id, e.target.value)}
                        placeholder="Write your essay here..."
                        rows={10}
                        className="w-full px-4 py-3 rounded-lg border-2 border-violet-200 focus:border-violet-500 focus:outline-none font-sans"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span className={`font-semibold ${
                          (answers[question.id] || '').split(/\s+/).filter(w => w.length > 0).length >= ((question as any).minWords || 0) &&
                          (answers[question.id] || '').split(/\s+/).filter(w => w.length > 0).length <= ((question as any).maxWords || 999)
                            ? 'text-green-600'
                            : 'text-amber-600'
                        }`}>
                          Word count: {(answers[question.id] || '').split(/\s+/).filter(w => w.length > 0).length} words
                        </span>
                        {(question as any).rubric && (
                          <span className="text-xs text-slate-600">
                            📊 Grading: Content {(question as any).rubric.content}% | Organization {(question as any).rubric.organization}% | Grammar {(question as any).rubric.grammar}% | Vocabulary {(question as any).rubric.vocabulary}%
                          </span>
                        )}
                      </div>
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
                      <span>Evaluando con IA...</span>
                    </>
                  ) : (
                    'Evaluar Respuestas'
                  )}
                </button>
              )}
            </div>
          </div>
        );

      case 'pronunciation':
        const pronExercise = currentExercise as any;
        return (
          <div className="space-y-6">
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

            {pronExercise.exercises && pronExercise.exercises.length > 0 && (
              <div className="space-y-4 mt-6">
                <h4 className="text-lg font-bold text-slate-900">📝 Pronunciation Exercises:</h4>
                {pronExercise.exercises.map((exercise: any, idx: number) => (
                  <div key={exercise.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                    {exercise.type === 'stress-identification' && (
                      <>
                        <p className="font-semibold text-slate-900 mb-3">
                          {idx + 1}. {exercise.question} <span className="text-sm text-coral-600">({exercise.points} points)</span>
                        </p>
                        <div className="space-y-2">
                          {exercise.options.map((option: string, optIdx: number) => (
                            <label key={optIdx} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 hover:bg-slate-50 cursor-pointer">
                              <input
                                type="radio"
                                name={exercise.id}
                                value={option}
                                checked={answers[exercise.id] === option}
                                onChange={(e) => handleAnswer(exercise.id, e.target.value)}
                                disabled={showFeedback}
                                className="w-4 h-4"
                              />
                              <span>{option} syllable</span>
                            </label>
                          ))}
                        </div>
                        {showFeedback && (
                          <div className={`mt-3 p-3 rounded-lg ${
                            answers[exercise.id] === exercise.correctAnswer
                              ? 'bg-green-50 border-2 border-green-200'
                              : 'bg-red-50 border-2 border-red-200'
                          }`}>
                            <p className="font-semibold mb-1">
                              {answers[exercise.id] === exercise.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
                            </p>
                            <p className="text-sm">
                              <strong>Correct answer:</strong> {exercise.correctAnswer} syllable
                            </p>
                          </div>
                        )}
                      </>
                    )}

                    {exercise.type === 'minimal-pairs' && (
                      <>
                        <p className="font-semibold text-slate-900 mb-3">
                          {idx + 1}. Minimal Pairs Practice <span className="text-sm text-coral-600">({exercise.points} points)</span>
                        </p>
                        <div className="space-y-3">
                          {exercise.pairs.map((pair: any, pairIdx: number) => (
                            <div key={pairIdx} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                              <div className="flex items-center gap-4 mb-2">
                                <span className="font-semibold text-lg">{pair.word1}</span>
                                <span className="text-slate-400">vs</span>
                                <span className="font-semibold text-lg">{pair.word2}</span>
                              </div>
                              <p className="text-sm text-slate-600 italic">
                                📢 {pair.difference}
                              </p>
                            </div>
                          ))}
                        </div>
                        {showFeedback && (
                          <div className="mt-3 p-3 rounded-lg bg-blue-50 border-2 border-blue-200">
                            <p className="text-sm text-blue-900">
                              💡 Practice these pairs to improve your pronunciation accuracy. Pay attention to the differences noted above.
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}

                {!showFeedback && pronExercise.exercises.some((e: any) => e.type === 'stress-identification') && (
                  <button
                    onClick={checkAnswers}
                    disabled={evaluating}
                    className="w-full px-6 py-4 bg-coral-600 text-white rounded-xl hover:bg-coral-700 transition-colors font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {evaluating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Evaluating...</span>
                      </>
                    ) : (
                      'Check Answers'
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        );

      case 'speaking':
        return (
          <EnhancedSpeakingExercise
            question={{
              id: currentExercise.id,
              prompt: currentExercise.prompt,
              expectedResponse: currentExercise.expectedResponse,
              hints: currentExercise.hints,
              targetWords: currentExercise.targetWords,
              modelAudioUrl: currentExercise.modelAudioUrl,
              timeLimit: currentExercise.timeLimit
            }}
            onComplete={(evaluation) => {
              // Calculate score from evaluation
              const score = evaluation.overallScore;
              setExerciseScores(prev => ({
                ...prev,
                [currentExercise.id]: score
              }));
              // Mark as completed to enable next button
              setShowFeedback(true);
              console.log('Speaking evaluation:', evaluation);
            }}
            level="B2"
          />
        );

      case 'speaking-part1':
        return (
          <SpeakingPart1
            exerciseId={currentExercise.id}
            instructions={currentExercise.instructions}
            questions={currentExercise.questions}
            timeLimit={currentExercise.timeLimit}
            onComplete={(data) => {
              // Handle completion of Speaking Part 1
              console.log('Speaking Part 1 completed:', data);
              // Calculate a score based on number of recordings
              const score = (data.recordings.length / currentExercise.questions.length) * 100;
              setExerciseScores(prev => ({
                ...prev,
                [currentExercise.id]: score
              }));
              // Auto-advance to next exercise after a short delay
              setTimeout(() => {
                nextExercise();
              }, 2000);
            }}
          />
        );

      case 'speaking-part2':
        return (
          <SpeakingPart2
            exerciseId={currentExercise.id}
            instructions={currentExercise.instructions}
            photos={currentExercise.photos}
            comparisonPrompt={currentExercise.comparisonPrompt}
            followUpQuestion={currentExercise.followUpQuestion}
            timeLimit={currentExercise.timeLimit}
            tips={currentExercise.tips}
            onComplete={(data) => {
              // Handle completion of Speaking Part 2
              console.log('Speaking Part 2 completed:', data);
              // Full score for completing the long turn
              setExerciseScores(prev => ({
                ...prev,
                [currentExercise.id]: 100
              }));
              // Don't auto-advance, let user click Next
            }}
          />
        );

      case 'speaking-part3':
        return (
          <SpeakingPart3
            exerciseId={currentExercise.id}
            instructions={currentExercise.instructions}
            scenario={currentExercise.scenario}
            question={currentExercise.question}
            options={currentExercise.options}
            phase1Duration={currentExercise.phase1Duration}
            phase2Duration={currentExercise.phase2Duration}
            usefulPhrases={currentExercise.usefulPhrases}
            onComplete={(data) => {
              // Handle completion of Speaking Part 3
              console.log('Speaking Part 3 completed:', data);
              // Full score for completing both phases
              setExerciseScores(prev => ({
                ...prev,
                [currentExercise.id]: 100
              }));
              // Don't auto-advance, let user click Next
            }}
          />
        );

      case 'speaking-part4':
        return (
          <SpeakingPart4
            exerciseId={currentExercise.id}
            instructions={currentExercise.instructions}
            topic={currentExercise.topic}
            questions={currentExercise.questions}
            usefulExpressions={currentExercise.usefulExpressions}
            timeLimit={currentExercise.timeLimit}
            onComplete={(data) => {
              // Handle completion of Speaking Part 4
              console.log('Speaking Part 4 completed:', data);
              // Calculate score based on number of recordings
              const score = (data.recordings.length / currentExercise.questions.length) * 100;
              setExerciseScores(prev => ({
                ...prev,
                [currentExercise.id]: score
              }));
              // Auto-advance after short delay
              setTimeout(() => {
                nextExercise();
              }, 2000);
            }}
          />
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
                <audio 
                  src={currentExercise.audioUrl} 
                  controls 
                  className="w-full mb-3"
                  preload="metadata"
                  controlsList="nodownload"
                />
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
                      placeholder="Tu respuesta..."
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
                      <span>Evaluando con IA...</span>
                    </>
                  ) : (
                    'Evaluar Respuestas'
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
        return <KeyWordTransformationExercise exercise={currentExercise as any} onComplete={(score) => {
          setCurrentScore(score);
          setShowFeedback(true);
          setShowCelebration(true);
        }} />;

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
                <p className="text-sm text-peach-900 font-semibold">💡 Instrucciones: Elige la forma correcta de la palabra indicada en mayúsculas para completar cada oración.</p>
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
              <h4 className="text-lg font-bold text-slate-900">Completa los huecos:</h4>
              {currentExercise.questions.map((question: any, idx: number) => (
                <div key={question.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-slate-900">
                        Hueco {question.gapNumber}: {question.baseWord}
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
                        <label className="text-sm font-semibold text-slate-700">Elige la respuesta correcta:</label>
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
                        <label className="text-sm font-semibold text-slate-700">Escribe tu respuesta:</label>
                        <input
                          type="text"
                          value={answers[question.id] || ''}
                          onChange={(e) => handleAnswer(question.id, e.target.value)}
                          placeholder={`Enter the correct form of "${question.baseWord}"...`}
                          disabled={showFeedback}
                          className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none transition-all ${
                            showFeedback
                              ? 'bg-gray-50 border-gray-300 cursor-not-allowed'
                              : 'border-slate-200 focus:border-peach-500'
                          }`}
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

            {/* Check Answers Button */}
            {!showFeedback && (
              <div className="flex justify-center">
                <button
                  onClick={checkAnswers}
                  disabled={evaluating || Object.keys(answers).length === 0}
                  className="px-8 py-4 bg-peach-600 text-white rounded-xl hover:bg-peach-700 transition-colors font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {evaluating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Evaluating with AI...</span>
                    </>
                  ) : (
                    <>
                      <span>✓</span>
                      <span>Check Answers</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Try Again / Next Button */}
            {showFeedback && (
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleTryAgain}
                  className="px-8 py-4 bg-slate-200 text-slate-900 rounded-xl hover:bg-slate-300 transition-colors font-bold text-lg flex items-center justify-center gap-2"
                >
                  <span>↻</span>
                  <span>Try Again</span>
                </button>
                <button
                  onClick={handleNext}
                  className="px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-bold text-lg flex items-center justify-center gap-2"
                >
                  <span>Next Exercise</span>
                  <span>→</span>
                </button>
              </div>
            )}

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

      case 'gapped-text':
        return <GappedTextExercise exercise={currentExercise as any} onComplete={(score) => {
          setCurrentScore(score);
          setShowFeedback(true);
          setShowCelebration(true);
        }} />;

      case 'multiple-matching':
        return <MultipleMatchingExercise exercise={currentExercise as any} onComplete={(score) => {
          setCurrentScore(score);
          setShowFeedback(true);
          setShowCelebration(true);
        }} />;

      case 'multiple-choice-cloze':
        return <MultipleChoiceClozeExercise exercise={currentExercise as any} onComplete={(score) => {
          setCurrentScore(score);
          setShowFeedback(true);
          setShowCelebration(true);
        }} />;

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

      case 'gap-fill-text':
        const gapFillExercise = currentExercise as any;
        return (
          <div className="space-y-6">
            {/* Instructions */}
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                <span>📝</span>
                <span>{gapFillExercise.title}</span>
              </h3>
              {gapFillExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {gapFillExercise.instructions}</p>
              )}
            </div>

            {/* Text with gaps */}
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <div className="text-lg leading-relaxed text-slate-800 whitespace-pre-line">
                {(gapFillExercise.text || '').split(/(\{\{\d+\}\})/).map((part: string, index: number) => {
                  const gapMatch = part.match(/\{\{(\d+)\}\}/);
                  if (gapMatch) {
                    const gapNum = parseInt(gapMatch[1]);
                    const gap = gapFillExercise.gaps.find((g: any) => g.gapNumber === gapNum);
                    if (!gap) return part;
                    
                    const isAnswered = !!answers[gap.id];
                    const userAnswer = answers[gap.id] || '';
                    const isCorrect = aiEvaluations[gap.id]?.isCorrect;
                    
                    return (
                      <span key={index} className="inline-block mx-1 align-bottom">
                        <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => handleAnswer(gap.id, e.target.value)}
                          disabled={showFeedback}
                          placeholder={`(${gapNum})`}
                          className={`px-3 py-1 border-2 rounded-lg w-40 text-center font-semibold transition-all ${
                            showFeedback
                              ? isCorrect
                                ? 'border-green-500 bg-green-50 text-green-900'
                                : 'border-red-500 bg-red-50 text-red-900'
                              : isAnswered
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-slate-300 hover:border-blue-400'
                          } disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        />
                        {showFeedback && !isCorrect && (
                          <div className="block mt-1 text-xs text-green-700 font-semibold">
                            ✓ {gap.correctAnswer}
                          </div>
                        )}
                      </span>
                    );
                  }
                  return <span key={index}>{part}</span>;
                })}
              </div>
            </div>

            {/* Show feedback for each gap */}
            {showFeedback && (
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-slate-900">📊 Detailed Feedback:</h4>
                {gapFillExercise.gaps.map((gap: any) => {
                  const userAnswer = answers[gap.id] || '';
                  const evaluation = aiEvaluations[gap.id];
                  const isCorrect = evaluation?.isCorrect;
                  
                  return (
                    <div
                      key={gap.id}
                      className={`rounded-lg p-4 border-2 ${
                        isCorrect
                          ? 'bg-green-50 border-green-300'
                          : 'bg-red-50 border-red-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 mb-1">
                            Gap {gap.gapNumber}
                          </div>
                          <div className="text-sm space-y-1">
                            <div>
                              <span className="text-slate-600">Your answer:</span>{' '}
                              <span className={isCorrect ? 'text-green-700 font-semibold' : 'text-red-700 font-semibold'}>
                                {userAnswer || '(empty)'}
                              </span>
                            </div>
                            {!isCorrect && (
                              <div>
                                <span className="text-slate-600">Correct answer:</span>{' '}
                                <span className="text-green-700 font-semibold">
                                  {gap.correctAnswer}
                                </span>
                                {gap.acceptableAlternatives && gap.acceptableAlternatives.length > 0 && (
                                  <span className="text-slate-500">
                                    {' '}(Also: {gap.acceptableAlternatives.join(', ')})
                                  </span>
                                )}
                              </div>
                            )}
                            {gap.explanation && (
                              <div className="mt-2 text-slate-700">
                                💡 <span className="italic">{gap.explanation}</span>
                              </div>
                            )}
                            {evaluation && evaluation.detailedExplanation && (
                              <div className="mt-2 bg-white/50 rounded p-2 text-slate-700">
                                <strong>AI Feedback:</strong> {evaluation.detailedExplanation}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Submit button */}
            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating || Object.keys(answers).length === 0}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {evaluating ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Evaluating...
                  </>
                ) : (
                  'Check Answers'
                )}
              </button>
            )}
          </div>
        );

      case 'sentence-completion':
        const scExercise = currentExercise as any;
        return (
          <div className="space-y-6">
            {/* Instructions */}
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-2 flex items-center gap-2">
                <span>✏️</span>
                <span>{scExercise.title}</span>
              </h3>
              {scExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {scExercise.instructions}</p>
              )}
            </div>

            {/* Sentences */}
            <div className="space-y-4">
              {scExercise.sentences.map((sentence: any, idx: number) => {
                const sentenceId = sentence.id;
                const userAnswer = answers[sentenceId] || '';
                const evaluation = aiEvaluations[sentenceId];
                const isCorrect = evaluation?.isCorrect;

                return (
                  <div key={sentenceId} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                    {/* Sentence prompt */}
                    <div className="mb-4">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm flex-shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-lg text-slate-800 flex-1">{sentence.prompt}</p>
                      </div>
                    </div>

                    {/* Multiple choice options */}
                    {sentence.options && sentence.options.length > 0 ? (
                      <div className="space-y-2">
                        {sentence.options.map((option: string, optIdx: number) => {
                          const isSelected = userAnswer === option;
                          const isCorrectOption = option === sentence.correctCompletion;
                          const showAsCorrect = showFeedback && isCorrectOption;
                          const showAsIncorrect = showFeedback && isSelected && !isCorrectOption;

                          return (
                            <button
                              key={optIdx}
                              onClick={() => !showFeedback && handleAnswer(sentenceId, option)}
                              disabled={showFeedback}
                              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                isSelected && !showFeedback
                                  ? 'border-purple-500 bg-purple-50'
                                  : 'border-slate-200 hover:border-purple-300 bg-white'
                              } ${
                                showAsCorrect
                                  ? 'border-green-500 bg-green-50'
                                  : ''
                              } ${
                                showAsIncorrect
                                  ? 'border-red-500 bg-red-50'
                                  : ''
                              } disabled:cursor-not-allowed`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`font-bold ${
                                  showAsCorrect ? 'text-green-600' : showAsIncorrect ? 'text-red-600' : 'text-slate-500'
                                }`}>
                                  {showAsCorrect && '✓'}
                                  {showAsIncorrect && '✗'}
                                  {!showFeedback && `${String.fromCharCode(65 + optIdx)}.`}
                                  {showFeedback && !showAsCorrect && !showAsIncorrect && `${String.fromCharCode(65 + optIdx)}.`}
                                </span>
                                <span className="text-slate-800">{option}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      /* Text input for open completion */
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => handleAnswer(sentenceId, e.target.value)}
                        disabled={showFeedback}
                        placeholder="Type your completion here..."
                        className={`w-full px-4 py-3 border-2 rounded-lg text-lg transition-all ${
                          showFeedback
                            ? isCorrect
                              ? 'border-green-500 bg-green-50 text-green-900'
                              : 'border-red-500 bg-red-50 text-red-900'
                            : userAnswer
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-slate-300 hover:border-purple-400'
                        } disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-400`}
                      />
                    )}

                    {/* Feedback */}
                    {showFeedback && (
                      <div className={`mt-4 p-4 rounded-lg border-2 ${
                        isCorrect
                          ? 'bg-green-50 border-green-300'
                          : 'bg-red-50 border-red-300'
                      }`}>
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
                          <div className="flex-1 space-y-2">
                            <div>
                              <span className="text-sm text-slate-600">Your answer:</span>{' '}
                              <span className={`font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                {userAnswer || '(empty)'}
                              </span>
                            </div>
                            {!isCorrect && (
                              <div>
                                <span className="text-sm text-slate-600">Correct answer:</span>{' '}
                                <span className="font-semibold text-green-700">
                                  {sentence.correctCompletion}
                                </span>
                              </div>
                            )}
                            {sentence.explanation && (
                              <div className="text-sm text-slate-700 mt-2">
                                💡 <span className="italic">{sentence.explanation}</span>
                              </div>
                            )}
                            {evaluation && evaluation.detailedExplanation && (
                              <div className="mt-2 bg-white/50 rounded p-2 text-sm text-slate-700">
                                <strong>AI Feedback:</strong> {evaluation.detailedExplanation}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit button */}
            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating || Object.keys(answers).length === 0}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {evaluating ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Evaluating...
                  </>
                ) : (
                  'Check Answers'
                )}
              </button>
            )}
          </div>
        );

      case 'error-identification':
        const eiExercise = currentExercise as any;
        return (
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-2 flex items-center gap-2">
                <span>🔍</span>
                <span>{eiExercise.title}</span>
              </h3>
              {eiExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {eiExercise.instructions}</p>
              )}
            </div>

            <div className="space-y-4">
              {eiExercise.sentences.map((item: any, idx: number) => {
                const userAnswer = answers[item.id] || '';
                const evaluation = aiEvaluations[item.id];
                
                return (
                  <div key={item.id} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-lg text-slate-800 flex-1">{item.sentence || item.question}</p>
                    </div>

                    <div className="ml-11 space-y-3">
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={item.id}
                            value="correct"
                            checked={userAnswer === 'correct'}
                            onChange={() => handleAnswer(item.id, 'correct')}
                            disabled={showFeedback}
                            className="w-4 h-4 text-red-600"
                          />
                          <span>✓ Correct</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={item.id}
                            value="error"
                            checked={userAnswer === 'error'}
                            onChange={() => handleAnswer(item.id, 'error')}
                            disabled={showFeedback}
                            className="w-4 h-4 text-red-600"
                          />
                          <span>✗ Has Error</span>
                        </label>
                      </div>

                      {userAnswer === 'error' && (
                        <input
                          type="text"
                          placeholder="What's the error? (optional)"
                          value={answers[`${item.id}-detail`] || ''}
                          onChange={(e) => handleAnswer(`${item.id}-detail`, e.target.value)}
                          disabled={showFeedback}
                          className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-red-500 focus:outline-none"
                        />
                      )}

                      {showFeedback && (
                        <div className={`mt-3 p-4 rounded-lg border-2 ${
                          evaluation?.isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
                        }`}>
                          <div className="flex items-start gap-2">
                            <span className="text-2xl">{evaluation?.isCorrect ? '✅' : '❌'}</span>
                            <div className="flex-1 space-y-2">
                              {item.hasError ? (
                                <>
                                  <p className="font-semibold text-red-700">Error: {item.errorWord}</p>
                                  {item.correction && (
                                    <p className="text-sm">
                                      <span className="font-semibold">Correction:</span> {item.correction}
                                    </p>
                                  )}
                                  {item.explanation && (
                                    <p className="text-sm text-slate-700">💡 {item.explanation}</p>
                                  )}
                                </>
                              ) : (
                                <p className="font-semibold text-green-700">This sentence is correct!</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating || Object.keys(answers).length === 0}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {evaluating ? 'Evaluating...' : 'Check Answers'}
              </button>
            )}
          </div>
        );

      case 'collocation-matching':
        const cmExercise = currentExercise as any;
        return (
          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200">
              <h3 className="text-xl font-bold text-indigo-900 mb-2 flex items-center gap-2">
                <span>🔗</span>
                <span>{cmExercise.title}</span>
              </h3>
              {cmExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {cmExercise.instructions}</p>
              )}
            </div>

            <div className="space-y-4">
              {cmExercise.pairs.map((pair: any, idx: number) => {
                const userAnswer = answers[pair.id] || '';
                const isCorrect = aiEvaluations[pair.id]?.isCorrect;
                const allOptions = [pair.correctMatch, ...(pair.distractors || [])].sort(() => Math.random() - 0.5);
                
                return (
                  <div key={pair.id} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-indigo-900 mb-3">{pair.word}</p>
                        
                        <div className="space-y-2">
                          {allOptions.map((option: string) => {
                            const isSelected = userAnswer === option;
                            const isCorrectOption = option === pair.correctMatch;
                            const showAsCorrect = showFeedback && isCorrectOption;
                            const showAsIncorrect = showFeedback && isSelected && !isCorrectOption;
                            const optIdx = allOptions.indexOf(option);
                            
                            return (
                              <button
                                key={`${pair.id}-${option}`}
                                onClick={() => !showFeedback && handleAnswer(pair.id, option)}
                                disabled={showFeedback}
                                className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                                  isSelected && !showFeedback
                                    ? 'border-indigo-500 bg-indigo-50'
                                    : 'border-slate-200 hover:border-indigo-300 bg-white'
                                } ${
                                  showAsCorrect ? 'border-green-500 bg-green-50' : ''
                                } ${
                                  showAsIncorrect ? 'border-red-500 bg-red-50' : ''
                                } disabled:cursor-not-allowed`}
                              >
                                <div className="flex items-center gap-3">
                                  <span className={`font-bold ${
                                    showAsCorrect ? 'text-green-600' : showAsIncorrect ? 'text-red-600' : 'text-slate-500'
                                  }`}>
                                    {showAsCorrect && '✓'}
                                    {showAsIncorrect && '✗'}
                                    {!showFeedback && `${String.fromCharCode(65 + optIdx)}.`}
                                  </span>
                                  <span>{option}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {showFeedback && (
                          <div className={`mt-4 p-3 rounded-lg ${
                            isCorrect ? 'bg-green-50' : 'bg-amber-50'
                          }`}>
                            {!isCorrect && (
                              <p className="text-sm mb-2">
                                <span className="font-semibold">Correct:</span> {pair.word} + {pair.correctMatch}
                              </p>
                            )}
                            {pair.example && (
                              <p className="text-sm text-slate-700">
                                <span className="font-semibold">Example:</span> {pair.example}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {evaluating ? 'Evaluating...' : 'Check Answers'}
              </button>
            )}
          </div>
        );

      case 'paraphrasing':
      case 'paraphrase':
        const paraphExercise = currentExercise as any;
        return (
          <div className="space-y-6">
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
              <h3 className="text-xl font-bold text-teal-900 mb-2 flex items-center gap-2">
                <span>🔄</span>
                <span>{paraphExercise.title}</span>
              </h3>
              {paraphExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {paraphExercise.instructions}</p>
              )}
            </div>

            <div className="space-y-4">
              {(paraphExercise.items || paraphExercise.sentences || []).map((item: any, idx: number) => {
                const originalSentence = item.originalSentence || item.original;
                const correctParaphrase = item.correctParaphrase || item.paraphrase;
                const userAnswer = answers[item.id || `paraph-${idx}`] || '';
                const evaluation = aiEvaluations[item.id || `paraph-${idx}`];
                const isCorrect = evaluation?.isCorrect;
                
                return (
                  <div key={item.id || `paraph-${idx}`} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-600 text-white font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <div className="mb-3 p-3 bg-slate-50 rounded-lg border-l-4 border-teal-500">
                          <p className="text-sm text-slate-600 font-semibold mb-1">Original:</p>
                          <p className="text-slate-800 italic">"{originalSentence}"</p>
                        </div>
                        
                        <textarea
                          value={userAnswer}
                          onChange={(e) => handleAnswer(item.id || `paraph-${idx}`, e.target.value)}
                          disabled={showFeedback}
                          placeholder="Write your paraphrase here..."
                          rows={3}
                          className={`w-full px-4 py-3 border-2 rounded-lg transition-all ${
                            showFeedback
                              ? isCorrect
                                ? 'border-green-500 bg-green-50'
                                : 'border-amber-500 bg-amber-50'
                              : userAnswer
                              ? 'border-teal-500 bg-teal-50'
                              : 'border-slate-300 hover:border-teal-400'
                          } disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-teal-400`}
                        />

                        {showFeedback && (
                          <div className={`mt-4 p-4 rounded-lg border-2 ${
                            isCorrect ? 'bg-green-50 border-green-300' : 'bg-amber-50 border-amber-300'
                          }`}>
                            <div className="space-y-2">
                              <div>
                                <p className="text-sm text-slate-600 mb-1">Model Answer:</p>
                                <p className="font-semibold text-teal-700">{correctParaphrase}</p>
                              </div>
                              {item.explanation && (
                                <p className="text-sm text-slate-700 mt-2">
                                  💡 {item.explanation}
                                </p>
                              )}
                              {evaluation?.detailedExplanation && (
                                <div className="mt-2 bg-white/50 rounded p-2 text-sm text-slate-700">
                                  <strong>AI Feedback:</strong> {evaluation.detailedExplanation}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating}
                className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {evaluating ? 'Evaluating...' : 'Check Answers'}
              </button>
            )}
          </div>
        );

      case 'sentence-reordering':
      case 'sentence-ordering':
        const srExercise = currentExercise as any;
        return (
          <div className="space-y-6">
            <div className="bg-pink-50 rounded-xl p-6 border-2 border-pink-200">
              <h3 className="text-xl font-bold text-pink-900 mb-2 flex items-center gap-2">
                <span>🔢</span>
                <span>{srExercise.title}</span>
              </h3>
              {srExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {srExercise.instructions}</p>
              )}
            </div>

            <div className="space-y-6">
              {(srExercise.items || [{ sentences: srExercise.sentences, correctOrder: srExercise.correctOrder, id: 'single' }]).map((item: any, itemIdx: number) => {
                const sentences = item.shuffledSentences || item.sentences || [];
                const correctOrder = item.correctOrder || Array.from({length: sentences.length}, (_, i) => i);
                const itemId = item.id || `reorder-${itemIdx}`;
                
                return (
                  <div key={itemId} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                    {item.context && (
                      <div className="mb-4 p-3 bg-pink-50 rounded-lg">
                        <p className="text-sm text-slate-700">{item.context}</p>
                      </div>
                    )}

                    <div className="space-y-3">
                      {sentences.map((sentence: any, idx: number) => {
                        const numberId = `${itemId}-${idx}`;
                        const userOrder = answers[numberId] || '';
                        const sentenceText = typeof sentence === 'string' ? sentence : sentence.text;
                        
                        return (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                            <input
                              type="number"
                              min="1"
                              max={sentences.length}
                              value={userOrder}
                              onChange={(e) => handleAnswer(numberId, e.target.value)}
                              disabled={showFeedback}
                              placeholder="#"
                              className={`w-16 px-2 py-1 border-2 rounded text-center font-bold ${
                                showFeedback
                                  ? parseInt(userOrder) === correctOrder[idx] + 1
                                    ? 'border-green-500 bg-green-50 text-green-700'
                                    : 'border-red-500 bg-red-50 text-red-700'
                                  : 'border-pink-300 focus:border-pink-500'
                              } disabled:cursor-not-allowed`}
                            />
                            <p className="flex-1 text-slate-800">{sentenceText}</p>
                            {showFeedback && (
                              <span className={`px-2 py-1 rounded text-xs font-bold ${
                                parseInt(userOrder) === correctOrder[idx] + 1
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {correctOrder[idx] + 1}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {showFeedback && item.explanation && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-slate-700">💡 {item.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating}
                className="w-full py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {evaluating ? 'Evaluating...' : 'Check Answers'}
              </button>
            )}
          </div>
        );

      case 'phrasal-verbs':
        const pvExercise = currentExercise as any;
        
        // Handle nested exercises format (verbs + exercises array)
        if (pvExercise.verbs && pvExercise.exercises) {
          return (
            <div className="space-y-6">
              <div className="bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
                <h3 className="text-xl font-bold text-cyan-900 mb-2 flex items-center gap-2">
                  <span>🚀</span>
                  <span>{pvExercise.title}</span>
                </h3>
                {pvExercise.instructions && (
                  <p className="text-slate-700 mt-2">💡 {pvExercise.instructions}</p>
                )}
              </div>

              {/* Reference section showing all phrasal verbs */}
              <div className="bg-white rounded-xl p-6 border-2 border-cyan-200">
                <h4 className="font-bold text-cyan-900 mb-4">📚 Phrasal Verbs Reference</h4>
                <div className="grid gap-4">
                  {pvExercise.verbs.map((verb: any, idx: number) => (
                    <div key={idx} className="p-4 bg-cyan-50 rounded-lg">
                      <p className="font-bold text-cyan-900 mb-1">{verb.verb}</p>
                      <p className="text-sm text-slate-700 mb-2">{verb.meaning}</p>
                      {verb.examples && verb.examples.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {verb.examples.map((ex: string, exIdx: number) => (
                            <p key={exIdx} className="text-xs italic text-slate-600">• {ex}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Practice exercises */}
              <div className="space-y-4">
                <h4 className="font-bold text-cyan-900">✏️ Practice Exercises</h4>
                {pvExercise.exercises.map((ex: any, idx: number) => {
                  const userAnswer = answers[ex.id] || '';
                  const isCorrect = userAnswer.toLowerCase().trim() === (ex.correctAnswer || '').toLowerCase().trim();
                  
                  return (
                    <div key={ex.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                      <p className="text-slate-900 mb-3">
                        {idx + 1}. {ex.sentence || ex.question}
                      </p>
                      
                      {ex.options ? (
                        <div className="space-y-2">
                          {ex.options.map((opt: string, optIdx: number) => (
                            <label key={optIdx} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 hover:bg-slate-50 cursor-pointer">
                              <input
                                type="radio"
                                name={ex.id}
                                value={opt}
                                checked={userAnswer === opt}
                                onChange={(e) => handleAnswer(ex.id, e.target.value)}
                                disabled={showFeedback}
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => handleAnswer(ex.id, e.target.value)}
                          disabled={showFeedback}
                          placeholder="Type your answer..."
                          className="w-full px-4 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:outline-none disabled:bg-slate-50"
                        />
                      )}
                      
                      {showFeedback && (
                        <div className={`mt-3 p-3 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-amber-50'}`}>
                          {!isCorrect && (
                            <p className="text-sm mb-1">
                              <strong>Correct:</strong> {ex.correctAnswer}
                            </p>
                          )}
                          {ex.explanation && (
                            <p className="text-sm text-slate-700">💡 {ex.explanation}</p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!showFeedback && (
                <button
                  onClick={checkAnswers}
                  disabled={evaluating}
                  className="w-full py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-xl hover:from-cyan-700 hover:to-cyan-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
                >
                  {evaluating ? 'Evaluating...' : 'Check Answers'}
                </button>
              )}
            </div>
          );
        }
        
        // Handle standard items format
        return (
          <div className="space-y-6">
            <div className="bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
              <h3 className="text-xl font-bold text-cyan-900 mb-2 flex items-center gap-2">
                <span>🚀</span>
                <span>{pvExercise.title}</span>
              </h3>
              {pvExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {pvExercise.instructions}</p>
              )}
            </div>

            <div className="space-y-4">
              {(pvExercise.items || []).map((item: any, idx: number) => {
                const userAnswer = answers[item.id] || '';
                const evaluation = aiEvaluations[item.id];
                const hasOptions = item.options && item.options.length > 0;
                
                return (
                  <div key={item.id} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 text-white font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <div className="mb-3 p-3 bg-cyan-50 rounded-lg">
                          <p className="text-sm text-cyan-800 font-semibold mb-1">
                            Phrasal Verb: <span className="text-cyan-900 text-base">{item.phrasalVerb}</span>
                          </p>
                          <p className="text-sm text-slate-600">Meaning: {item.meaning}</p>
                        </div>

                        <p className="text-lg text-slate-800 mb-3">{item.sentence}</p>

                        {hasOptions ? (
                          <div className="space-y-2">
                            {item.options.map((option: string, optIdx: number) => {
                              const isSelected = userAnswer === option;
                              const isCorrectOption = option === item.correctAnswer;
                              const showAsCorrect = showFeedback && isCorrectOption;
                              const showAsIncorrect = showFeedback && isSelected && !isCorrectOption;
                              
                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => !showFeedback && handleAnswer(item.id, option)}
                                  disabled={showFeedback}
                                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                                    isSelected && !showFeedback
                                      ? 'border-cyan-500 bg-cyan-50'
                                      : 'border-slate-200 hover:border-cyan-300 bg-white'
                                  } ${
                                    showAsCorrect ? 'border-green-500 bg-green-50' : ''
                                  } ${
                                    showAsIncorrect ? 'border-red-500 bg-red-50' : ''
                                  } disabled:cursor-not-allowed`}
                                >
                                  <div className="flex items-center gap-3">
                                    <span className={`font-bold ${
                                      showAsCorrect ? 'text-green-600' : showAsIncorrect ? 'text-red-600' : 'text-slate-500'
                                    }`}>
                                      {showAsCorrect && '✓'}
                                      {showAsIncorrect && '✗'}
                                      {!showFeedback && `${String.fromCharCode(65 + optIdx)}.`}
                                    </span>
                                    <span>{option}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => handleAnswer(item.id, e.target.value)}
                            disabled={showFeedback}
                            placeholder="Type your answer..."
                            className={`w-full px-4 py-3 border-2 rounded-lg ${
                              showFeedback
                                ? evaluation?.isCorrect
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-red-500 bg-red-50'
                                : 'border-cyan-300 focus:border-cyan-500'
                            } disabled:cursor-not-allowed`}
                          />
                        )}

                        {showFeedback && (
                          <div className={`mt-4 p-3 rounded-lg ${
                            evaluation?.isCorrect ? 'bg-green-50' : 'bg-amber-50'
                          }`}>
                            {!evaluation?.isCorrect && (
                              <p className="text-sm mb-2">
                                <span className="font-semibold">Correct:</span> {item.correctAnswer}
                              </p>
                            )}
                            {item.explanation && (
                              <p className="text-sm text-slate-700">💡 {item.explanation}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-xl hover:from-cyan-700 hover:to-cyan-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {evaluating ? 'Evaluating...' : 'Check Answers'}
              </button>
            )}
          </div>
        );

      case 'idioms-expressions':
        const ieExercise = currentExercise as any;
        
        // Handle nested exercises format (idioms + exercises array)
        if (ieExercise.idioms && ieExercise.exercises) {
          return (
            <div className="space-y-6">
              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                <h3 className="text-xl font-bold text-yellow-900 mb-2 flex items-center gap-2">
                  <span>💬</span>
                  <span>{ieExercise.title}</span>
                </h3>
                {ieExercise.instructions && (
                  <p className="text-slate-700 mt-2">💡 {ieExercise.instructions}</p>
                )}
              </div>

              {/* Reference section showing all idioms */}
              <div className="bg-white rounded-xl p-6 border-2 border-yellow-200">
                <h4 className="font-bold text-yellow-900 mb-4">📚 Idioms & Expressions Reference</h4>
                <div className="grid gap-4">
                  {ieExercise.idioms.map((idiom: any, idx: number) => (
                    <div key={idx} className="p-4 bg-yellow-50 rounded-lg">
                      <p className="font-bold text-yellow-900 mb-1">{idiom.expression || idiom.idiom}</p>
                      <p className="text-sm text-slate-700 mb-2">{idiom.meaning}</p>
                      {idiom.examples && idiom.examples.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {idiom.examples.map((ex: string, exIdx: number) => (
                            <p key={exIdx} className="text-xs italic text-slate-600">• {ex}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Practice exercises */}
              <div className="space-y-4">
                <h4 className="font-bold text-yellow-900">✏️ Practice Exercises</h4>
                {ieExercise.exercises.map((ex: any, idx: number) => {
                  const userAnswer = answers[ex.id] || '';
                  const isCorrect = userAnswer.toLowerCase().trim() === (ex.correctAnswer || '').toLowerCase().trim();
                  
                  return (
                    <div key={ex.id} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                      <p className="text-slate-900 mb-3">
                        {idx + 1}. {ex.sentence || ex.question}
                      </p>
                      
                      {ex.options ? (
                        <div className="space-y-2">
                          {ex.options.map((opt: string, optIdx: number) => (
                            <label key={optIdx} className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 hover:bg-slate-50 cursor-pointer">
                              <input
                                type="radio"
                                name={ex.id}
                                value={opt}
                                checked={userAnswer === opt}
                                onChange={(e) => handleAnswer(ex.id, e.target.value)}
                                disabled={showFeedback}
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => handleAnswer(ex.id, e.target.value)}
                          disabled={showFeedback}
                          placeholder="Type your answer..."
                          className="w-full px-4 py-2 border-2 border-yellow-300 rounded-lg focus:border-yellow-500 focus:outline-none disabled:bg-slate-50"
                        />
                      )}
                      
                      {showFeedback && (
                        <div className={`mt-3 p-3 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-amber-50'}`}>
                          {!isCorrect && (
                            <p className="text-sm mb-1">
                              <strong>Correct:</strong> {ex.correctAnswer}
                            </p>
                          )}
                          {ex.explanation && (
                            <p className="text-sm text-slate-700">💡 {ex.explanation}</p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!showFeedback && (
                <button
                  onClick={checkAnswers}
                  disabled={evaluating}
                  className="w-full py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-xl hover:from-yellow-700 hover:to-yellow-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
                >
                  {evaluating ? 'Evaluating...' : 'Check Answers'}
                </button>
              )}
            </div>
          );
        }
        
        // Handle standard items format
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <span>💬</span>
                <span>{ieExercise.title}</span>
              </h3>
              {ieExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {ieExercise.instructions}</p>
              )}
            </div>

            <div className="space-y-4">
              {(ieExercise.items || []).map((item: any, idx: number) => {
                const userAnswer = answers[item.id] || '';
                const evaluation = aiEvaluations[item.id];
                const hasOptions = item.options && item.options.length > 0;
                
                return (
                  <div key={item.id} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-600 text-white font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <div className="mb-3 p-3 bg-yellow-50 rounded-lg">
                          <p className="text-sm text-yellow-800 font-semibold mb-1">
                            Idiom: <span className="text-yellow-900 text-base">"{item.idiom}"</span>
                          </p>
                          <p className="text-sm text-slate-600">Meaning: {item.meaning}</p>
                        </div>

                        <p className="text-lg text-slate-800 mb-3">{item.context}</p>

                        {hasOptions ? (
                          <div className="space-y-2">
                            {item.options.map((option: string, optIdx: number) => {
                              const isSelected = userAnswer === option;
                              const isCorrectOption = option === item.correctUsage;
                              const showAsCorrect = showFeedback && isCorrectOption;
                              const showAsIncorrect = showFeedback && isSelected && !isCorrectOption;
                              
                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => !showFeedback && handleAnswer(item.id, option)}
                                  disabled={showFeedback}
                                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                                    isSelected && !showFeedback
                                      ? 'border-yellow-500 bg-yellow-50'
                                      : 'border-slate-200 hover:border-yellow-300 bg-white'
                                  } ${
                                    showAsCorrect ? 'border-green-500 bg-green-50' : ''
                                  } ${
                                    showAsIncorrect ? 'border-red-500 bg-red-50' : ''
                                  } disabled:cursor-not-allowed`}
                                >
                                  <div className="flex items-center gap-3">
                                    <span className={`font-bold ${
                                      showAsCorrect ? 'text-green-600' : showAsIncorrect ? 'text-red-600' : 'text-slate-500'
                                    }`}>
                                      {showAsCorrect && '✓'}
                                      {showAsIncorrect && '✗'}
                                      {!showFeedback && `${String.fromCharCode(65 + optIdx)}.`}
                                    </span>
                                    <span>{option}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => handleAnswer(item.id, e.target.value)}
                            disabled={showFeedback}
                            placeholder="Type your answer..."
                            className={`w-full px-4 py-3 border-2 rounded-lg ${
                              showFeedback
                                ? evaluation?.isCorrect
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-red-500 bg-red-50'
                                : 'border-yellow-300 focus:border-yellow-500'
                            } disabled:cursor-not-allowed`}
                          />
                        )}

                        {showFeedback && (
                          <div className={`mt-4 p-3 rounded-lg ${
                            evaluation?.isCorrect ? 'bg-green-50' : 'bg-amber-50'
                          }`}>
                            {!evaluation?.isCorrect && (
                              <p className="text-sm mb-2">
                                <span className="font-semibold">Correct:</span> {item.correctUsage}
                              </p>
                            )}
                            {item.explanation && (
                              <p className="text-sm text-slate-700">💡 {item.explanation}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating}
                className="w-full py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-xl hover:from-yellow-700 hover:to-yellow-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {evaluating ? 'Evaluating...' : 'Check Answers'}
              </button>
            )}
          </div>
        );

      case 'gap-fill':
      case 'extended-gap-fill':
      case 'open-cloze':
        const gapExercise = currentExercise as any;
        
        // Handle gap-fill exercises with sentences format (not text-based)
        if (gapExercise.sentences && !gapExercise.text) {
          return (
            <div className="space-y-6">
              <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200">
                <h3 className="text-xl font-bold text-emerald-900 mb-2 flex items-center gap-2">
                  <span>📋</span>
                  <span>{gapExercise.title}</span>
                </h3>
                {gapExercise.instructions && (
                  <p className="text-slate-700 mt-2">💡 {gapExercise.instructions}</p>
                )}
              </div>

              <div className="space-y-4">
                {gapExercise.sentences.map((item: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-lg p-5 border-2 border-slate-200">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <div className="flex-1 space-y-2">
                        <p className="text-slate-900">{item.sentence}</p>
                        <input
                          type="text"
                          value={answers[`gap-${idx}`] || ''}
                          onChange={(e) => handleAnswer(`gap-${idx}`, e.target.value)}
                          disabled={showFeedback}
                          placeholder="Your answer..."
                          className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none disabled:bg-slate-50"
                        />
                        {showFeedback && (
                          <div className={`p-3 rounded-lg ${
                            (answers[`gap-${idx}`] || '').toLowerCase().trim() === item.correctAnswer.toLowerCase().trim() ||
                            (item.acceptableAnswers && item.acceptableAnswers.some((a: string) => 
                              a.toLowerCase().trim() === (answers[`gap-${idx}`] || '').toLowerCase().trim()
                            ))
                              ? 'bg-green-50 border-2 border-green-200'
                              : 'bg-red-50 border-2 border-red-200'
                          }`}>
                            <p className="font-semibold mb-1">
                              {(answers[`gap-${idx}`] || '').toLowerCase().trim() === item.correctAnswer.toLowerCase().trim() ||
                              (item.acceptableAnswers && item.acceptableAnswers.some((a: string) => 
                                a.toLowerCase().trim() === (answers[`gap-${idx}`] || '').toLowerCase().trim()
                              ))
                                ? '✓ Correct!'
                                : '✗ Incorrect'}
                            </p>
                            <p className="text-sm">
                              <strong>Correct answer:</strong> {item.correctAnswer}
                              {item.acceptableAnswers && item.acceptableAnswers.length > 0 && (
                                <span> (also acceptable: {item.acceptableAnswers.join(', ')})</span>
                              )}
                            </p>
                            {item.explanation && (
                              <p className="text-sm mt-1 text-slate-700">💡 {item.explanation}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {!showFeedback && (
                <button
                  onClick={checkAnswers}
                  disabled={evaluating}
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
                >
                  {evaluating ? 'Evaluating...' : 'Check Answers'}
                </button>
              )}
            </div>
          );
        }
        
        // Handle text-based gap-fill exercises (open-cloze format)
        return (
          <div className="space-y-6" data-testid="open-cloze-exercise">
            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200" data-testid="exercise-header">
              <h3 className="text-xl font-bold text-emerald-900 mb-2 flex items-center gap-2" data-testid="exercise-title">
                <span>📋</span>
                <span>{gapExercise.title}</span>
              </h3>
              {gapExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {gapExercise.instructions}</p>
              )}
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <div className="text-lg leading-relaxed text-slate-800">
                {(gapExercise.text || '').split(/(\[\d+\]|\(\d+\)___+|___+)/).map((part: string, index: number) => {
                  // Support both [1], [2] and (1)___ patterns
                  const gapMatch = part.match(/\[(\d+)\]/) || part.match(/\((\d+)\)___+/);
                  if (gapMatch) {
                    const gapNum = parseInt(gapMatch[1]);
                    const gap = gapExercise.gaps?.find((g: any) => (g.number === gapNum || g.id === gapNum || g.id === `gap${gapNum}`));
                    const gapId = gap ? `gap-${gapNum}` : `gap-${gapNum}`;
                    const userAnswer = answers[gapId] || '';
                    const correctAnswer = gap?.correctAnswer || '';
                    const acceptableAnswers = gap?.acceptableAnswers || [];
                    
                    // Check if answer is correct
                    const isCorrect = showFeedback && (
                      userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim() ||
                      acceptableAnswers.some((a: string) => a.toLowerCase().trim() === userAnswer.toLowerCase().trim())
                    );
                    
                    return (
                      <span key={index} className="inline-block mx-1 align-bottom">
                        <span className="text-sm text-slate-500 mr-1">[{gapNum}]</span>
                        <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => handleAnswer(gapId, e.target.value)}
                          disabled={showFeedback}
                          placeholder="..."
                          className={`px-3 py-1 border-2 rounded-lg w-32 text-center font-semibold transition-all ${
                            showFeedback
                              ? isCorrect
                                ? 'border-green-500 bg-green-50 text-green-900'
                                : 'border-red-500 bg-red-50 text-red-900'
                              : userAnswer
                              ? 'border-emerald-500 bg-emerald-50'
                              : 'border-slate-300 hover:border-emerald-400'
                          } disabled:cursor-not-allowed`}
                        />
                      </span>
                    );
                  }
                  return <span key={index}>{part}</span>;
                })}
              </div>

              {showFeedback && gapExercise.gaps && (
                <div className="mt-6 space-y-3">
                  {gapExercise.gaps.map((gap: any, idx: number) => {
                    const gapNum = gap.number || (idx + 1);
                    const gapId = `gap-${gapNum}`;
                    const userAnswer = answers[gapId] || '';
                    const correctAnswer = gap.correctAnswer || '';
                    const acceptableAnswers = gap.acceptableAnswers || [];
                    const isCorrect = userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim() ||
                      acceptableAnswers.some((a: string) => a.toLowerCase().trim() === userAnswer.toLowerCase().trim());
                    
                    return (
                      <div key={gapId} className={`p-3 rounded-lg border ${
                        isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
                      }`}>
                        <p className="font-semibold mb-1">
                          <span className="text-slate-600">Gap {gapNum}:</span>{' '}
                          {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
                        </p>
                        <p className="text-sm">
                          <strong>Your answer:</strong> {userAnswer || '(no answer)'}
                        </p>
                        <p className="text-sm">
                          <strong>Correct answer:</strong> {correctAnswer}
                          {acceptableAnswers.length > 0 && (
                            <span className="text-slate-600"> (also: {acceptableAnswers.join(', ')})</span>
                          )}
                        </p>
                        {gap.explanation && (
                          <p className="text-sm mt-1 text-slate-700">
                            💡 <strong>Explanation:</strong> {gap.explanation}
                          </p>
                        )}
                        {gap.category && (
                          <p className="text-xs mt-1 text-slate-500">
                            Category: {gap.category}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating}
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {evaluating ? 'Evaluating...' : 'Check Answers'}
              </button>
            )}
          </div>
        );


      case 'summary-writing':
        const swExercise = currentExercise as any;
        const wordCount = (answers[swExercise.id] || '').trim().split(/\s+/).filter(w => w.length > 0).length;
        const targetMin = swExercise.minWords || swExercise.summaryTargetRange?.min || swExercise.summaryTargetWords - 10;
        const targetMax = swExercise.maxWords || swExercise.summaryTargetRange?.max || swExercise.summaryTargetWords + 10;
        const isWithinRange = wordCount >= targetMin && wordCount <= targetMax;
        
        return (
          <div className="space-y-6">
            <div className="bg-violet-50 rounded-xl p-6 border-2 border-violet-200">
              <h3 className="text-xl font-bold text-violet-900 mb-2 flex items-center gap-2">
                <span>✍️</span>
                <span>{swExercise.title}</span>
              </h3>
              {swExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {swExercise.instructions}</p>
              )}
              <div className="mt-3 flex gap-4 text-sm">
                <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full">
                  Target: {swExercise.summaryTargetWords || swExercise.targetWordCount} words
                </span>
                <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full">
                  Range: {targetMin}-{targetMax} words
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Source Text:</h4>
              <div className="p-4 bg-slate-50 rounded-lg max-h-96 overflow-y-auto">
                <p className="text-slate-700 whitespace-pre-line">{swExercise.originalText || swExercise.sourceText}</p>
              </div>
            </div>

            {swExercise.keyPoints && (
              <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                <p className="font-semibold text-violet-900 mb-2">Key Points to Include:</p>
                <ul className="space-y-1">
                  {swExercise.keyPoints.map((point: string, idx: number) => (
                    <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="text-violet-600">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-slate-900">Your Summary:</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  isWithinRange
                    ? 'bg-green-100 text-green-700'
                    : wordCount < targetMin
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {wordCount} / {swExercise.summaryTargetWords || swExercise.targetWordCount} words
                </span>
              </div>
              
              <textarea
                value={answers[swExercise.id] || ''}
                onChange={(e) => handleAnswer(swExercise.id, e.target.value)}
                disabled={showFeedback}
                placeholder="Write your summary here..."
                rows={8}
                className={`w-full px-4 py-3 border-2 rounded-lg resize-none ${
                  showFeedback
                    ? 'border-violet-500 bg-violet-50'
                    : 'border-slate-300 focus:border-violet-500'
                } focus:outline-none disabled:cursor-not-allowed`}
              />

              {showFeedback && aiEvaluations[swExercise.id] && (
                <div className="mt-4 p-4 rounded-lg bg-violet-50 border border-violet-200">
                  <p className="font-semibold text-violet-900 mb-2">
                    Score: {aiEvaluations[swExercise.id].score}/100
                  </p>
                  {aiEvaluations[swExercise.id].detailedExplanation && (
                    <p className="text-sm text-slate-700">
                      {aiEvaluations[swExercise.id].detailedExplanation}
                    </p>
                  )}
                </div>
              )}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating || !isWithinRange}
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-violet-700 text-white rounded-xl hover:from-violet-700 hover:to-violet-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {evaluating ? 'Evaluating...' : 'Submit Summary'}
              </button>
            )}
          </div>
        );

      case 'key-word-transformations':
        const kwtExercise = currentExercise as any;
        return (
          <div className="space-y-6">
            <div className="bg-rose-50 rounded-xl p-6 border-2 border-rose-200">
              <h3 className="text-xl font-bold text-rose-900 mb-2 flex items-center gap-2">
                <span>🔑</span>
                <span>{kwtExercise.title}</span>
              </h3>
              {kwtExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {kwtExercise.instructions}</p>
              )}
            </div>

            <div className="space-y-4">
              {kwtExercise.transformations.map((t: any, idx: number) => {
                const userAnswer = answers[t.id] || '';
                const evaluation = aiEvaluations[t.id];
                
                return (
                  <div key={t.id} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-600 text-white font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1 space-y-3">
                        <div className="p-3 bg-slate-50 rounded-lg">
                          <p className="text-slate-800">{t.sentence}</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <p className="text-slate-600">{t.startOfAnswer}</p>
                          <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded font-bold text-sm">
                            {t.keyWord}
                          </span>
                        </div>

                        <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => handleAnswer(t.id, e.target.value)}
                          disabled={showFeedback}
                          placeholder="Complete the transformation..."
                          className={`w-full px-4 py-3 border-2 rounded-lg ${
                            showFeedback
                              ? evaluation?.isCorrect
                                ? 'border-green-500 bg-green-50'
                                : 'border-red-500 bg-red-50'
                              : 'border-rose-300 focus:border-rose-500'
                          } disabled:cursor-not-allowed`}
                        />

                        {showFeedback && (
                          <div className={`p-3 rounded-lg ${
                            evaluation?.isCorrect ? 'bg-green-50' : 'bg-amber-50'
                          }`}>
                            {!evaluation?.isCorrect && (
                              <p className="text-sm mb-2">
                                <span className="font-semibold">Correct:</span> {t.correctAnswer}
                              </p>
                            )}
                            {t.explanation && (
                              <p className="text-sm text-slate-700">💡 {t.explanation}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating}
                className="w-full py-4 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-xl hover:from-rose-700 hover:to-rose-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {evaluating ? 'Evaluating...' : 'Check Answers'}
              </button>
            )}
          </div>
        );

      case 'pronunciation-practice':
        const ppExercise = currentExercise as any;
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-orange-900 mb-2 flex items-center gap-2">
                <span>🗣️</span>
                <span>{ppExercise.title}</span>
              </h3>
              {ppExercise.instructions && (
                <p className="text-slate-700 mt-2">💡 {ppExercise.instructions}</p>
              )}
              {ppExercise.focusPoints && (
                <div className="mt-3">
                  <p className="text-sm font-semibold text-orange-800 mb-2">Focus Points:</p>
                  <div className="flex flex-wrap gap-2">
                    {ppExercise.focusPoints.map((point: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {ppExercise.targetSentences.map((item: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex-1 space-y-3">
                      <p className="text-lg font-semibold text-slate-900">{item.sentence}</p>
                      {item.translation && (
                        <p className="text-sm text-slate-600 italic">{item.translation}</p>
                      )}
                      {item.phonetic && (
                        <p className="text-sm text-orange-700 font-mono">/{item.phonetic}/</p>
                      )}
                      {item.audioUrl && (
                        <audio 
                          controls 
                          className="w-full mt-2"
                          preload="metadata"
                          controlsList="nodownload"
                        >
                          <source src={item.audioUrl} type="audio/mpeg" />
                        </audio>
                      )}
                      <div className="pt-2">
                        <EnhancedVoiceRecorder
                          targetText={item.sentence}
                          onRecordingComplete={(blob, transcript) => {
                            setRecordedAudio({ blob, transcript });
                            handleAnswer(`pronunciation-${idx}`, transcript);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'integrated-reading-writing':
        const irwExercise = currentExercise as any;
        return (
          <div className="space-y-6">
            <div className="bg-fuchsia-50 rounded-xl p-6 border-2 border-fuchsia-200">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2 flex items-center gap-2">
                <span>📖✍️</span>
                <span>{irwExercise.title}</span>
              </h3>
              <div className="flex gap-3 text-sm mt-2">
                <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-700 rounded-full">
                  Reading Time: {irwExercise.readingTime} min
                </span>
                <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-700 rounded-full">
                  {irwExercise.wordCount} words
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Reading Text:</h4>
              <div className="prose max-w-none">
                <div className="text-slate-700 whitespace-pre-line">{irwExercise.readingText}</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Questions:</h4>
              {irwExercise.questions.map((q: any, idx: number) => {
                const userAnswer = answers[q.id] || '';
                const evaluation = aiEvaluations[q.id];
                
                return (
                  <div key={q.id} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-fuchsia-600 text-white font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-lg text-slate-800 mb-3">{q.question}</p>

                        {q.type === 'multiple-choice' && q.options ? (
                          <div className="space-y-2">
                            {q.options.map((option: string, optIdx: number) => {
                              const isSelected = userAnswer === option;
                              const isCorrectOption = option === q.correctAnswer;
                              const showAsCorrect = showFeedback && isCorrectOption;
                              const showAsIncorrect = showFeedback && isSelected && !isCorrectOption;
                              
                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => !showFeedback && handleAnswer(q.id, option)}
                                  disabled={showFeedback}
                                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                                    isSelected && !showFeedback
                                      ? 'border-fuchsia-500 bg-fuchsia-50'
                                      : 'border-slate-200 hover:border-fuchsia-300 bg-white'
                                  } ${
                                    showAsCorrect ? 'border-green-500 bg-green-50' : ''
                                  } ${
                                    showAsIncorrect ? 'border-red-500 bg-red-50' : ''
                                  } disabled:cursor-not-allowed`}
                                >
                                  <div className="flex items-center gap-3">
                                    <span className={`font-bold ${
                                      showAsCorrect ? 'text-green-600' : showAsIncorrect ? 'text-red-600' : 'text-slate-500'
                                    }`}>
                                      {showAsCorrect && '✓'}
                                      {showAsIncorrect && '✗'}
                                      {!showFeedback && `${String.fromCharCode(65 + optIdx)}.`}
                                    </span>
                                    <span>{option}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <textarea
                            value={userAnswer}
                            onChange={(e) => handleAnswer(q.id, e.target.value)}
                            disabled={showFeedback}
                            placeholder="Type your answer..."
                            rows={4}
                            className={`w-full px-4 py-3 border-2 rounded-lg ${
                              showFeedback
                                ? evaluation?.isCorrect
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-amber-500 bg-amber-50'
                                : 'border-fuchsia-300 focus:border-fuchsia-500'
                            } disabled:cursor-not-allowed`}
                          />
                        )}

                        {showFeedback && q.explanation && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-slate-700">💡 {q.explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating}
                className="w-full py-4 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 text-white rounded-xl hover:from-fuchsia-700 hover:to-fuchsia-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {evaluating ? 'Evaluating...' : 'Submit Answers'}
              </button>
            )}
          </div>
        );

      case 'matching':
        const matchExercise = currentExercise as any;
        return (
          <div className="space-y-6">
            <div className="bg-lime-50 rounded-xl p-6 border-2 border-lime-200">
              <h3 className="text-xl font-bold text-lime-900 mb-2 flex items-center gap-2">
                <span>🔀</span>
                <span>{matchExercise.title}</span>
              </h3>
              {matchExercise.instruction && (
                <p className="text-slate-700 mt-2">💡 {matchExercise.instruction}</p>
              )}
            </div>

            <div className="space-y-4">
              {matchExercise.pairs.map((pair: any, idx: number) => {
                const userAnswer = answers[pair.idiom || `match-${idx}`] || '';
                
                return (
                  <div key={idx} className="bg-white rounded-xl p-6 border-2 border-slate-200">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-lime-600 text-white font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-lime-900 mb-3">{pair.idiom}</p>
                        
                        <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => handleAnswer(pair.idiom || `match-${idx}`, e.target.value)}
                          disabled={showFeedback}
                          placeholder="Type the matching meaning..."
                          className={`w-full px-4 py-3 border-2 rounded-lg ${
                            showFeedback
                              ? userAnswer.toLowerCase().includes(pair.meaning.toLowerCase())
                                ? 'border-green-500 bg-green-50'
                                : 'border-red-500 bg-red-50'
                              : 'border-lime-300 focus:border-lime-500'
                          } disabled:cursor-not-allowed`}
                        />

                        {showFeedback && (
                          <div className="mt-3 p-3 bg-green-50 rounded-lg">
                            <p className="text-sm">
                              <span className="font-semibold">Correct meaning:</span> {pair.meaning}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!showFeedback && (
              <button
                onClick={checkAnswers}
                disabled={evaluating}
                className="w-full py-4 bg-gradient-to-r from-lime-600 to-lime-700 text-white rounded-xl hover:from-lime-700 hover:to-lime-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {evaluating ? 'Evaluating...' : 'Check Answers'}
              </button>
            )}
          </div>
        );

      default:
        return <p>Unknown exercise type</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Gamification Widgets and Animations */}
        {showXPGain && <XPGainAnimation amount={xpGained} />}
        
        {newBadges.map((badge) => (
          <BadgeNotification
            key={badge.badge_id}
            badge={badge}
            onClose={() => setNewBadges(prev => prev.filter(b => b.badge_id !== badge.badge_id))}
          />
        ))}

        {/* Gamification Widget */}
        {!gamification.isLoading && (
          <div className="mb-6">
            <GamificationWidget variant="compact" />
          </div>
        )}

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
          {lesson.objectives && lesson.objectives.length > 0 && (
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
          )}
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
