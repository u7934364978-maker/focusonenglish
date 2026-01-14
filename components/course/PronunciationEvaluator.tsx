'use client';

import { useState } from 'react';

interface PronunciationScore {
  overall: number; // 0-100
  fluency: number;
  pronunciation: number;
  accuracy: number;
  completeness: number;
}

interface PronunciationFeedback {
  score: PronunciationScore;
  strengths: string[];
  improvements: string[];
  detailedFeedback: string;
  wordAccuracy: { word: string; correct: boolean; suggestion?: string }[];
}

interface PronunciationEvaluatorProps {
  targetText: string;
  transcript: string;
  audioBlob: Blob;
  onEvaluationComplete: (feedback: PronunciationFeedback) => void;
}

export default function PronunciationEvaluator({
  targetText,
  transcript,
  audioBlob,
  onEvaluationComplete
}: PronunciationEvaluatorProps) {
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<PronunciationFeedback | null>(null);

  // Función para normalizar texto (quitar puntuación, convertir a minúsculas)
  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Calcular similitud entre dos strings (algoritmo Levenshtein simplificado)
  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 100;
    
    const editDistance = levenshteinDistance(longer, shorter);
    return ((longer.length - editDistance) / longer.length) * 100;
  };

  // Algoritmo de distancia de Levenshtein
  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix: number[][] = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  // Analizar palabra por palabra
  const analyzeWordAccuracy = (target: string, spoken: string) => {
    const targetWords = normalizeText(target).split(' ');
    const spokenWords = normalizeText(spoken).split(' ');
    
    const wordAccuracy: { word: string; correct: boolean; suggestion?: string }[] = [];
    
    for (let i = 0; i < targetWords.length; i++) {
      const targetWord = targetWords[i];
      const spokenWord = spokenWords[i] || '';
      
      const similarity = calculateSimilarity(targetWord, spokenWord);
      const correct = similarity >= 80; // 80% de similitud = correcto
      
      wordAccuracy.push({
        word: targetWord,
        correct,
        suggestion: !correct && spokenWord ? `You said "${spokenWord}"` : undefined
      });
    }
    
    return wordAccuracy;
  };

  // Evaluar pronunciación
  const evaluatePronunciation = async () => {
    setIsEvaluating(true);
    
    try {
      // Simular delay de evaluación (en producción, esto sería una llamada a API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const normalizedTarget = normalizeText(targetText);
      const normalizedTranscript = normalizeText(transcript);
      
      // Calcular métricas
      const accuracy = calculateSimilarity(normalizedTarget, normalizedTranscript);
      
      // Completeness: ¿Cuántas palabras del target fueron dichas?
      const targetWords = normalizedTarget.split(' ');
      const transcriptWords = normalizedTranscript.split(' ');
      const completeness = (Math.min(transcriptWords.length, targetWords.length) / targetWords.length) * 100;
      
      // Fluency: basado en longitud y palabras por minuto (simulado)
      const wordsPerMinute = transcriptWords.length * 3; // Asumiendo grabación de 20 segundos
      const fluency = Math.min((wordsPerMinute / 150) * 100, 100); // 150 WPM es fluido
      
      // Pronunciación: basado en accuracy
      const pronunciation = accuracy;
      
      // Overall score
      const overall = Math.round((accuracy * 0.4 + completeness * 0.3 + fluency * 0.2 + pronunciation * 0.1));
      
      // Word-by-word analysis
      const wordAccuracy = analyzeWordAccuracy(targetText, transcript);
      
      // Generar feedback
      const strengths: string[] = [];
      const improvements: string[] = [];
      
      if (accuracy >= 90) {
        strengths.push('Excellent accuracy - you matched the target text very closely');
      } else if (accuracy >= 75) {
        strengths.push('Good accuracy - most words were pronounced correctly');
      } else {
        improvements.push('Focus on pronouncing each word more clearly');
      }
      
      if (completeness >= 90) {
        strengths.push('You completed the full text');
      } else {
        improvements.push('Try to complete the entire text without skipping words');
      }
      
      if (fluency >= 80) {
        strengths.push('Great fluency and natural pace');
      } else if (fluency >= 60) {
        strengths.push('Good pace, keep practicing for more fluency');
      } else {
        improvements.push('Try to speak more fluently without long pauses');
      }
      
      if (wordAccuracy.filter(w => w.correct).length / wordAccuracy.length >= 0.9) {
        strengths.push('Most individual words were pronounced correctly');
      }
      
      // Feedback detallado
      let detailedFeedback = '';
      if (overall >= 90) {
        detailedFeedback = 'Outstanding! Your pronunciation is excellent. You have a strong command of English pronunciation with accurate word stress, clear articulation, and natural rhythm.';
      } else if (overall >= 75) {
        detailedFeedback = 'Very good! Your pronunciation is clear and mostly accurate. With a bit more practice on specific sounds and intonation, you\'ll reach an excellent level.';
      } else if (overall >= 60) {
        detailedFeedback = 'Good effort! Your pronunciation is understandable, but there\'s room for improvement. Focus on individual word pronunciation and try to speak more fluently.';
      } else if (overall >= 40) {
        detailedFeedback = 'You\'re making progress! Keep practicing. Focus on matching the target text more closely and work on your fluency. Consider listening to the model audio multiple times.';
      } else {
        detailedFeedback = 'Keep practicing! Pronunciation takes time to develop. Listen to the model audio carefully, repeat after it, and try to match the rhythm and intonation. Don\'t get discouraged - improvement comes with consistent practice.';
      }
      
      const evaluationResult: PronunciationFeedback = {
        score: {
          overall: Math.round(overall),
          fluency: Math.round(fluency),
          pronunciation: Math.round(pronunciation),
          accuracy: Math.round(accuracy),
          completeness: Math.round(completeness)
        },
        strengths,
        improvements,
        detailedFeedback,
        wordAccuracy
      };
      
      setFeedback(evaluationResult);
      onEvaluationComplete(evaluationResult);
      
    } catch (error) {
      console.error('Error evaluating pronunciation:', error);
    } finally {
      setIsEvaluating(false);
    }
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 75) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (score >= 60) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getScoreBadge = (score: number): string => {
    if (score >= 90) return '🏆 Excellent';
    if (score >= 75) return '⭐ Very Good';
    if (score >= 60) return '👍 Good';
    if (score >= 40) return '📈 Fair';
    return '💪 Keep Practicing';
  };

  if (!feedback) {
    return (
      <div className="bg-white rounded-xl border-2 border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🎯</span>
          <span>Pronunciation Evaluation</span>
        </h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
            <p className="text-slate-700 mb-3">
              Click the button below to evaluate your pronunciation based on the target text.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-blue-900 mb-1">Target Text:</p>
                <p className="text-slate-700 italic">"{targetText}"</p>
              </div>
              <div>
                <p className="font-semibold text-green-900 mb-1">What You Said:</p>
                <p className="text-slate-700 italic">"{transcript || 'No transcript available'}"</p>
              </div>
            </div>
          </div>

          <button
            onClick={evaluatePronunciation}
            disabled={isEvaluating || !transcript}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isEvaluating ? (
              <>
                <span className="animate-spin">⏳</span>
                <span>Evaluating your pronunciation...</span>
              </>
            ) : (
              <>
                <span>🎯</span>
                <span>Evaluate Pronunciation</span>
              </>
            )}
          </button>

          {!transcript && (
            <p className="text-sm text-amber-700 text-center bg-amber-50 p-3 rounded-lg border border-amber-200">
              No transcript available. Make sure speech recognition was enabled during recording.
            </p>
          )}
        </div>
      </div>
    );
  }

  // Render feedback
  return (
    <div className="bg-white rounded-xl border-2 border-slate-200 p-6 space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <span>🎯</span>
        <span>Your Pronunciation Feedback</span>
      </h3>

      {/* Overall Score */}
      <div className={`rounded-xl border-2 p-6 text-center ${getScoreColor(feedback.score.overall)}`}>
        <div className="text-6xl font-black mb-2">{feedback.score.overall}%</div>
        <div className="text-2xl font-bold mb-2">{getScoreBadge(feedback.score.overall)}</div>
        <p className="text-sm opacity-80">Overall Pronunciation Score</p>
      </div>

      {/* Individual Scores */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 text-center">
          <div className="text-3xl font-black text-blue-600">{feedback.score.accuracy}%</div>
          <div className="text-sm font-semibold text-blue-800 mt-1">Accuracy</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200 text-center">
          <div className="text-3xl font-black text-green-600">{feedback.score.completeness}%</div>
          <div className="text-sm font-semibold text-green-800 mt-1">Completeness</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200 text-center">
          <div className="text-3xl font-black text-purple-600">{feedback.score.fluency}%</div>
          <div className="text-sm font-semibold text-purple-800 mt-1">Fluency</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-200 text-center">
          <div className="text-3xl font-black text-amber-600">{feedback.score.pronunciation}%</div>
          <div className="text-sm font-semibold text-amber-800 mt-1">Pronunciation</div>
        </div>
      </div>

      {/* Detailed Feedback */}
      <div className="bg-slate-50 rounded-lg p-4 border-2 border-slate-200">
        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span>💬</span>
          <span>Detailed Feedback</span>
        </h4>
        <p className="text-slate-700">{feedback.detailedFeedback}</p>
      </div>

      {/* Strengths */}
      {feedback.strengths.length > 0 && (
        <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
          <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>Your Strengths</span>
          </h4>
          <ul className="space-y-2">
            {feedback.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-2 text-green-800">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Areas for Improvement */}
      {feedback.improvements.length > 0 && (
        <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-200">
          <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
            <span>📈</span>
            <span>Areas for Improvement</span>
          </h4>
          <ul className="space-y-2">
            {feedback.improvements.map((improvement, index) => (
              <li key={index} className="flex items-start gap-2 text-amber-800">
                <span className="text-amber-500 mt-0.5">→</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Word-by-Word Analysis */}
      <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
          <span>🔍</span>
          <span>Word-by-Word Analysis</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {feedback.wordAccuracy.map((item, index) => (
            <div
              key={index}
              className={`px-3 py-1.5 rounded-lg border-2 ${
                item.correct
                  ? 'bg-green-50 border-green-200 text-green-900'
                  : 'bg-red-50 border-red-200 text-red-900'
              }`}
              title={item.suggestion || (item.correct ? 'Correct' : 'Needs improvement')}
            >
              <span className="font-semibold">{item.word}</span>
              {item.correct ? (
                <span className="ml-1 text-green-600">✓</span>
              ) : (
                <span className="ml-1 text-red-600">✗</span>
              )}
            </div>
          ))}
        </div>
        {feedback.wordAccuracy.some(w => !w.correct) && (
          <p className="text-sm text-slate-600 mt-3">
            <strong>Tip:</strong> Words marked in red need more practice. Try listening to the model audio and repeating those specific words.
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setFeedback(null)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold"
        >
          <span>🔄</span>
          <span>Try Again</span>
        </button>
        <button
          onClick={() => window.location.href = '#next-exercise'}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold"
        >
          <span>→</span>
          <span>Next Exercise</span>
        </button>
      </div>
    </div>
  );
}
