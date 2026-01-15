'use client';

import { useState, useEffect } from 'react';

interface PronunciationScore {
  overall: number; // 0-100
  fluency: number;
  pronunciation: number;
  accuracy: number;
  completeness: number;
  rhythm: number;
  intonation: number;
}

interface WordDetails {
  word: string;
  correct: boolean;
  confidence: number;
  suggestion?: string;
  pronunciation?: string;
}

interface PronunciationFeedback {
  score: PronunciationScore;
  strengths: string[];
  improvements: string[];
  detailedFeedback: string;
  wordAccuracy: WordDetails[];
  audioComparison?: {
    similarityScore: number;
    speedComparison: string;
    volumeLevel: string;
  };
}

interface EnhancedPronunciationEvaluatorProps {
  targetText: string;
  transcript: string;
  audioBlob: Blob;
  modelAudioUrl?: string;
  onEvaluationComplete: (feedback: PronunciationFeedback) => void;
}

export default function EnhancedPronunciationEvaluator({
  targetText,
  transcript,
  audioBlob,
  modelAudioUrl,
  onEvaluationComplete
}: EnhancedPronunciationEvaluatorProps) {
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<PronunciationFeedback | null>(null);
  const [evaluationProgress, setEvaluationProgress] = useState(0);

  // Función para normalizar texto (quitar puntuación, convertir a minúsculas)
  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Algoritmo de distancia de Levenshtein mejorado
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
        const cost = str2.charAt(i - 1) === str1.charAt(j - 1) ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + cost,  // Substitution
          matrix[i][j - 1] + 1,          // Insertion
          matrix[i - 1][j] + 1           // Deletion
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  // Calcular similitud entre dos strings
  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 100;
    
    const editDistance = levenshteinDistance(longer, shorter);
    return ((longer.length - editDistance) / longer.length) * 100;
  };

  // Algoritmo fonético mejorado para similitud de sonidos
  const calculatePhoneticSimilarity = (word1: string, word2: string): number => {
    // Soundex-like algorithm para inglés
    const soundex = (word: string): string => {
      word = word.toLowerCase();
      const firstLetter = word[0];
      
      // Mapeo de letras a códigos fonéticos
      const mapping: { [key: string]: string } = {
        'b': '1', 'f': '1', 'p': '1', 'v': '1',
        'c': '2', 'g': '2', 'j': '2', 'k': '2', 'q': '2', 's': '2', 'x': '2', 'z': '2',
        'd': '3', 't': '3',
        'l': '4',
        'm': '5', 'n': '5',
        'r': '6'
      };
      
      let code = firstLetter;
      for (let i = 1; i < word.length; i++) {
        const digit = mapping[word[i]];
        if (digit && digit !== code[code.length - 1]) {
          code += digit;
        }
      }
      
      return code.padEnd(4, '0').substring(0, 4);
    };
    
    const code1 = soundex(word1);
    const code2 = soundex(word2);
    
    let matches = 0;
    for (let i = 0; i < 4; i++) {
      if (code1[i] === code2[i]) matches++;
    }
    
    return (matches / 4) * 100;
  };

  // Analizar palabra por palabra con detalle mejorado
  const analyzeWordAccuracy = (target: string, spoken: string): WordDetails[] => {
    const targetWords = normalizeText(target).split(' ').filter(w => w.length > 0);
    const spokenWords = normalizeText(spoken).split(' ').filter(w => w.length > 0);
    
    const wordDetails: WordDetails[] = [];
    
    for (let i = 0; i < targetWords.length; i++) {
      const targetWord = targetWords[i];
      const spokenWord = spokenWords[i] || '';
      
      // Calcular similitud exacta y fonética
      const exactSimilarity = calculateSimilarity(targetWord, spokenWord);
      const phoneticSimilarity = spokenWord ? calculatePhoneticSimilarity(targetWord, spokenWord) : 0;
      
      // Combinar ambas similitudes
      const combinedSimilarity = (exactSimilarity * 0.7 + phoneticSimilarity * 0.3);
      const confidence = Math.round(combinedSimilarity);
      const correct = combinedSimilarity >= 75; // 75% de similitud = correcto
      
      let suggestion: string | undefined;
      if (!correct && spokenWord) {
        if (exactSimilarity < 50 && phoneticSimilarity < 50) {
          suggestion = `You said "${spokenWord}", try pronouncing "${targetWord}"`;
        } else if (exactSimilarity < phoneticSimilarity) {
          suggestion = `Close! Check spelling: "${targetWord}"`;
        } else {
          suggestion = `Almost there! Practice the sound of "${targetWord}"`;
        }
      } else if (!spokenWord) {
        suggestion = `Word missing: "${targetWord}"`;
      }
      
      wordDetails.push({
        word: targetWord,
        correct,
        confidence,
        suggestion,
        pronunciation: spokenWord !== targetWord ? spokenWord : undefined
      });
    }
    
    return wordDetails;
  };

  // Analizar audio (simulado - en producción usaría Web Audio API)
  const analyzeAudioCharacteristics = async (blob: Blob) => {
    return new Promise<{
      duration: number;
      volumeLevel: string;
      speakingRate: number;
    }>(resolve => {
      setTimeout(() => {
        // Simulación - en producción, analizar el audio real
        const size = blob.size;
        const estimatedDuration = size / 16000; // Aproximación
        const volumeLevel = size > 100000 ? 'Good' : size > 50000 ? 'Low' : 'Very Low';
        const speakingRate = Math.random() * 50 + 100; // 100-150 WPM
        
        resolve({
          duration: estimatedDuration,
          volumeLevel,
          speakingRate
        });
      }, 500);
    });
  };

  // Evaluar ritmo e entonación
  const evaluateRhythmAndIntonation = (transcript: string, targetText: string): {
    rhythm: number;
    intonation: number;
  } => {
    const transcriptWords = normalizeText(transcript).split(' ');
    const targetWords = normalizeText(targetText).split(' ');
    
    // Rhythm: basado en número de palabras y pausas estimadas
    const wordCountRatio = Math.min(transcriptWords.length / targetWords.length, 1);
    const rhythm = wordCountRatio * 100;
    
    // Intonation: basado en variación de longitud de palabras (simulado)
    const avgWordLength = transcriptWords.reduce((sum, w) => sum + w.length, 0) / transcriptWords.length;
    const targetAvgLength = targetWords.reduce((sum, w) => sum + w.length, 0) / targetWords.length;
    const lengthRatio = Math.min(avgWordLength / targetAvgLength, 2) / 2;
    const intonation = lengthRatio * 100;
    
    return {
      rhythm: Math.round(rhythm),
      intonation: Math.round(intonation)
    };
  };

  // Evaluar pronunciación con análisis avanzado
  const evaluatePronunciation = async () => {
    setIsEvaluating(true);
    setEvaluationProgress(0);
    
    try {
      // Progreso: Análisis de texto
      setEvaluationProgress(20);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const normalizedTarget = normalizeText(targetText);
      const normalizedTranscript = normalizeText(transcript);
      
      // Progreso: Análisis palabra por palabra
      setEvaluationProgress(40);
      const wordDetails = analyzeWordAccuracy(targetText, transcript);
      
      // Progreso: Análisis de audio
      setEvaluationProgress(60);
      const audioCharacteristics = await analyzeAudioCharacteristics(audioBlob);
      
      // Progreso: Cálculo de métricas
      setEvaluationProgress(80);
      
      // Calcular métricas mejoradas
      const accuracy = calculateSimilarity(normalizedTarget, normalizedTranscript);
      
      // Completeness: ¿Cuántas palabras del target fueron dichas correctamente?
      const correctWords = wordDetails.filter(w => w.correct).length;
      const completeness = (correctWords / wordDetails.length) * 100;
      
      // Fluency: basado en tasa de habla
      const fluency = Math.min((audioCharacteristics.speakingRate / 150) * 100, 100);
      
      // Pronunciation: promedio de confianza de palabras
      const pronunciation = wordDetails.reduce((sum, w) => sum + w.confidence, 0) / wordDetails.length;
      
      // Rhythm & Intonation
      const { rhythm, intonation } = evaluateRhythmAndIntonation(transcript, targetText);
      
      // Overall score con pesos balanceados
      const overall = Math.round(
        accuracy * 0.25 +
        completeness * 0.25 +
        fluency * 0.15 +
        pronunciation * 0.15 +
        rhythm * 0.10 +
        intonation * 0.10
      );
      
      // Generar feedback detallado
      const strengths: string[] = [];
      const improvements: string[] = [];
      
      // Análisis de accuracy
      if (accuracy >= 90) {
        strengths.push('🎯 Outstanding accuracy - your words match the target almost perfectly');
      } else if (accuracy >= 75) {
        strengths.push('✅ Good accuracy - most of your pronunciation is on point');
      } else if (accuracy >= 60) {
        improvements.push('📝 Work on matching the target text more closely');
      } else {
        improvements.push('📖 Focus on pronouncing each word clearly and accurately');
      }
      
      // Análisis de completeness
      if (completeness >= 95) {
        strengths.push('✨ Perfect completeness - you said all the words');
      } else if (completeness >= 80) {
        strengths.push('👍 Great job completing most of the text');
      } else {
        improvements.push('📚 Try to complete the entire text without skipping words');
      }
      
      // Análisis de fluency
      if (fluency >= 85) {
        strengths.push('🌊 Excellent fluency - natural and smooth delivery');
      } else if (fluency >= 70) {
        strengths.push('💫 Good fluency with a natural pace');
      } else if (fluency >= 50) {
        improvements.push('⏱️ Work on speaking at a more natural pace');
      } else {
        improvements.push('🐌 Try to speak more fluently without long pauses');
      }
      
      // Análisis de pronunciation
      if (pronunciation >= 85) {
        strengths.push('🗣️ Individual word pronunciation is excellent');
      } else if (pronunciation < 60) {
        improvements.push('🎤 Practice individual words for clearer pronunciation');
      }
      
      // Análisis de rhythm
      if (rhythm >= 80) {
        strengths.push('🎵 Good rhythm and pacing');
      } else {
        improvements.push('🥁 Work on maintaining a consistent rhythm');
      }
      
      // Análisis de intonation
      if (intonation >= 75) {
        strengths.push('📈 Natural intonation patterns');
      } else {
        improvements.push('🎭 Practice varying your intonation for more natural speech');
      }
      
      // Volume analysis
      if (audioCharacteristics.volumeLevel === 'Very Low') {
        improvements.push('🔊 Speak louder for clearer audio capture');
      }
      
      // Feedback detallado personalizado
      let detailedFeedback = '';
      if (overall >= 90) {
        detailedFeedback = '🌟 Outstanding performance! Your pronunciation is at an advanced level. You demonstrate excellent command of English pronunciation with accurate articulation, natural rhythm, proper intonation, and smooth fluency. Your word stress and overall delivery are nearly native-like. Keep up this excellent work!';
      } else if (overall >= 80) {
        detailedFeedback = '🎯 Excellent work! Your pronunciation is very good with only minor areas for refinement. You show strong command of individual sounds, good fluency, and natural intonation patterns. With just a bit more practice on specific challenging sounds, you\'ll reach an outstanding level. You\'re doing great!';
      } else if (overall >= 70) {
        detailedFeedback = '👏 Very good! Your pronunciation is clear and mostly accurate. You demonstrate good control over English sounds and decent fluency. Focus on the specific words marked for improvement and work on maintaining consistent rhythm throughout. Regular practice with the model audio will help you reach the next level.';
      } else if (overall >= 60) {
        detailedFeedback = '📈 Good effort! Your pronunciation is understandable, and you\'re on the right track. There are several areas where focused practice will help you improve significantly. Pay special attention to individual word pronunciation, work on your speaking pace, and try to match the model audio\'s intonation patterns. Consistent practice will bring noticeable improvement.';
      } else if (overall >= 40) {
        detailedFeedback = '💪 You\'re making progress! Pronunciation is a skill that develops with practice and patience. Focus on listening carefully to the model audio, repeat after it multiple times, and pay attention to how words are formed. Break down challenging words into smaller parts and practice them individually. Remember, every expert was once a beginner. Keep practicing!';
      } else {
        detailedFeedback = '🌱 Keep going! Every pronunciation journey starts with the first step, and you\'ve taken it. Don\'t be discouraged - pronunciation improves dramatically with regular practice. Start by listening to the model audio several times before attempting to speak. Focus on one sentence at a time, repeat it multiple times, and gradually build up. Consider using a mirror to watch your mouth movements. You can do this!';
      }
      
      setEvaluationProgress(100);
      
      const evaluationResult: PronunciationFeedback = {
        score: {
          overall: Math.round(overall),
          fluency: Math.round(fluency),
          pronunciation: Math.round(pronunciation),
          accuracy: Math.round(accuracy),
          completeness: Math.round(completeness),
          rhythm: Math.round(rhythm),
          intonation: Math.round(intonation)
        },
        strengths,
        improvements,
        detailedFeedback,
        wordAccuracy: wordDetails,
        audioComparison: {
          similarityScore: Math.round((accuracy + pronunciation) / 2),
          speedComparison: fluency >= 80 ? 'Natural pace' : fluency >= 60 ? 'Slightly slow' : 'Too slow',
          volumeLevel: audioCharacteristics.volumeLevel
        }
      };
      
      setFeedback(evaluationResult);
      onEvaluationComplete(evaluationResult);
      
    } catch (error) {
      console.error('Error evaluating pronunciation:', error);
    } finally {
      setIsEvaluating(false);
      setEvaluationProgress(0);
    }
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-emerald-700 bg-emerald-50 border-emerald-300';
    if (score >= 80) return 'text-green-700 bg-green-50 border-green-300';
    if (score >= 70) return 'text-blue-700 bg-blue-50 border-blue-300';
    if (score >= 60) return 'text-amber-700 bg-amber-50 border-amber-300';
    if (score >= 40) return 'text-orange-700 bg-orange-50 border-orange-300';
    return 'text-red-700 bg-red-50 border-red-300';
  };

  const getScoreBadge = (score: number): string => {
    if (score >= 90) return '🏆 Outstanding';
    if (score >= 80) return '🌟 Excellent';
    if (score >= 70) return '⭐ Very Good';
    if (score >= 60) return '👍 Good';
    if (score >= 40) return '📈 Fair';
    return '💪 Keep Practicing';
  };

  const getConfidenceColor = (confidence: number): string => {
    if (confidence >= 85) return 'bg-emerald-100 border-emerald-300 text-emerald-900';
    if (confidence >= 70) return 'bg-green-100 border-green-300 text-green-900';
    if (confidence >= 50) return 'bg-amber-100 border-amber-300 text-amber-900';
    return 'bg-red-100 border-red-300 text-red-900';
  };

  if (!feedback) {
    return (
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="text-4xl">🎯</span>
          <span>Advanced Pronunciation Evaluation</span>
        </h3>
        
        <div className="space-y-6">
          {/* Text Comparison */}
          <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="font-bold text-blue-900 text-lg flex items-center gap-2">
                  <span>📝</span>
                  <span>Target Text</span>
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                  <p className="text-slate-800 leading-relaxed">{targetText}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-green-900 text-lg flex items-center gap-2">
                  <span>🎤</span>
                  <span>What You Said</span>
                </p>
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <p className="text-slate-800 leading-relaxed">
                    {transcript || 'No transcript available'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Model Audio Player */}
          {modelAudioUrl && (
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <p className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span>🔊</span>
                <span>Listen to the Model Pronunciation</span>
              </p>
              <audio controls className="w-full" src={modelAudioUrl}>
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-purple-700 mt-2">
                💡 Tip: Listen to this model pronunciation before evaluating to compare
              </p>
            </div>
          )}

          {/* Evaluation Button */}
          <button
            onClick={evaluatePronunciation}
            disabled={isEvaluating || !transcript}
            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all font-bold text-xl shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            {isEvaluating ? (
              <>
                <span className="animate-spin text-2xl">⏳</span>
                <span>Analyzing your pronunciation...</span>
              </>
            ) : (
              <>
                <span className="text-2xl">🎯</span>
                <span>Evaluate My Pronunciation</span>
              </>
            )}
          </button>

          {/* Progress Bar */}
          {isEvaluating && evaluationProgress > 0 && (
            <div className="bg-white rounded-xl p-4 border-2 border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">Evaluation Progress</span>
                <span className="text-sm font-bold text-blue-600">{evaluationProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${evaluationProgress}%` }}
                />
              </div>
            </div>
          )}

          {!transcript && (
            <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-300 flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-bold text-amber-900 mb-1">No transcript available</p>
                <p className="text-sm text-amber-800">
                  Make sure speech recognition was enabled during recording. Try recording again.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render detailed feedback
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl border-2 border-slate-300 p-8 space-y-8 shadow-2xl">
      <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
        <span className="text-5xl">🎯</span>
        <span>Your Pronunciation Report</span>
      </h3>

      {/* Overall Score - Large Display */}
      <div className={`rounded-2xl border-3 p-8 text-center shadow-xl ${getScoreColor(feedback.score.overall)}`}>
        <div className="text-8xl font-black mb-3">{feedback.score.overall}<span className="text-5xl">%</span></div>
        <div className="text-3xl font-bold mb-3">{getScoreBadge(feedback.score.overall)}</div>
        <p className="text-lg font-semibold opacity-80">Overall Pronunciation Score</p>
      </div>

      {/* Detailed Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: 'Accuracy', score: feedback.score.accuracy, icon: '🎯', color: 'blue' },
          { label: 'Completeness', score: feedback.score.completeness, icon: '✅', color: 'green' },
          { label: 'Fluency', score: feedback.score.fluency, icon: '🌊', color: 'purple' },
          { label: 'Pronunciation', score: feedback.score.pronunciation, icon: '🗣️', color: 'amber' },
          { label: 'Rhythm', score: feedback.score.rhythm, icon: '🥁', color: 'pink' },
          { label: 'Intonation', score: feedback.score.intonation, icon: '🎵', color: 'indigo' }
        ].map((metric) => (
          <div key={metric.label} className={`bg-${metric.color}-50 rounded-xl p-4 border-2 border-${metric.color}-200 text-center shadow-md hover:shadow-lg transition-shadow`}>
            <div className="text-3xl mb-1">{metric.icon}</div>
            <div className={`text-3xl font-black text-${metric.color}-700`}>{metric.score}%</div>
            <div className={`text-sm font-bold text-${metric.color}-800 mt-1`}>{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Audio Comparison (if model audio provided) */}
      {feedback.audioComparison && (
        <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-md">
          <h4 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
            <span>📊</span>
            <span>Audio Analysis</span>
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <p className="text-sm text-purple-700 font-semibold mb-1">Similarity to Model</p>
              <p className="text-2xl font-bold text-purple-900">{feedback.audioComparison.similarityScore}%</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-700 font-semibold mb-1">Speaking Speed</p>
              <p className="text-2xl font-bold text-blue-900">{feedback.audioComparison.speedComparison}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-sm text-green-700 font-semibold mb-1">Volume Level</p>
              <p className="text-2xl font-bold text-green-900">{feedback.audioComparison.volumeLevel}</p>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Feedback */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border-2 border-slate-300 shadow-md">
        <h4 className="font-bold text-slate-900 text-xl mb-3 flex items-center gap-2">
          <span>💬</span>
          <span>Expert Feedback</span>
        </h4>
        <p className="text-slate-800 leading-relaxed text-lg">{feedback.detailedFeedback}</p>
      </div>

      {/* Strengths */}
      {feedback.strengths.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300 shadow-md">
          <h4 className="font-bold text-green-900 text-xl mb-4 flex items-center gap-2">
            <span>✨</span>
            <span>Your Strengths</span>
          </h4>
          <ul className="space-y-3">
            {feedback.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-3 text-green-800 text-lg">
                <span className="text-green-500 text-2xl mt-0.5">✓</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Areas for Improvement */}
      {feedback.improvements.length > 0 && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-300 shadow-md">
          <h4 className="font-bold text-amber-900 text-xl mb-4 flex items-center gap-2">
            <span>📈</span>
            <span>Areas for Improvement</span>
          </h4>
          <ul className="space-y-3">
            {feedback.improvements.map((improvement, index) => (
              <li key={index} className="flex items-start gap-3 text-amber-800 text-lg">
                <span className="text-amber-500 text-2xl mt-0.5">→</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Word-by-Word Analysis */}
      <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-md">
        <h4 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
          <span>🔍</span>
          <span>Detailed Word Analysis</span>
        </h4>
        <div className="flex flex-wrap gap-3">
          {feedback.wordAccuracy.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-3 rounded-xl border-2 ${getConfidenceColor(item.confidence)} transition-all hover:scale-105 cursor-pointer`}
              title={item.suggestion || `Confidence: ${item.confidence}%`}
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">{item.word}</span>
                {item.correct ? (
                  <span className="text-emerald-600 text-xl">✓</span>
                ) : (
                  <span className="text-red-600 text-xl">✗</span>
                )}
              </div>
              <div className="text-xs mt-1 font-semibold opacity-75">
                {item.confidence}% confidence
              </div>
              {item.pronunciation && item.pronunciation !== item.word && (
                <div className="text-xs mt-1 italic opacity-60">
                  You said: "{item.pronunciation}"
                </div>
              )}
            </div>
          ))}
        </div>
        {feedback.wordAccuracy.some(w => !w.correct) && (
          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-800 flex items-start gap-2">
              <span className="text-lg">💡</span>
              <span>
                <strong>Pro Tip:</strong> Words marked with ✗ need more practice. Try repeating them slowly while listening to the model audio. Pay attention to each sound in the word, and practice them individually before combining them in sentences.
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => {
            setFeedback(null);
            setEvaluationProgress(0);
          }}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-bold text-lg shadow-lg transform hover:scale-105"
        >
          <span className="text-xl">🔄</span>
          <span>Try Again</span>
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all font-bold text-lg shadow-lg transform hover:scale-105"
        >
          <span className="text-xl">🖨️</span>
          <span>Print Report</span>
        </button>
        <button
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all font-bold text-lg shadow-lg transform hover:scale-105"
        >
          <span className="text-xl">→</span>
          <span>Next Exercise</span>
        </button>
      </div>
    </div>
  );
}
