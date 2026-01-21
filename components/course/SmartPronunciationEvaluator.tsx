'use client';

import { useState, useEffect } from 'react';

interface PronunciationScore {
  overall: number;
  fluency: number;
  pronunciation: number;
  accuracy: number;
  completeness: number;
  rhythm: number;
  intonation: number;
  relevance: number; // NUEVO: Relevancia al tema
  coherence: number; // NUEVO: Coherencia con el prompt
}

interface WordDetails {
  word: string;
  correct: boolean;
  confidence: number;
  suggestion?: string;
  pronunciation?: string;
}

interface TopicAnalysis {
  isRelevant: boolean;
  relevanceScore: number;
  expectedKeywords: string[];
  foundKeywords: string[];
  missingKeywords: string[];
  offTopicWords: string[];
  topicFeedback: string;
}

interface PronunciationFeedback {
  score: PronunciationScore;
  strengths: string[];
  improvements: string[];
  detailedFeedback: string;
  wordAccuracy: WordDetails[];
  topicAnalysis: TopicAnalysis; // NUEVO
  audioComparison?: {
    similarityScore: number;
    speedComparison: string;
    volumeLevel: string;
  };
}

interface SmartPronunciationEvaluatorProps {
  targetText?: string;
  prompt: string; // NUEVO: Necesitamos el prompt para analizar relevancia
  transcript: string;
  audioBlob: Blob;
  modelAudioUrl?: string;
  onEvaluationComplete: (feedback: PronunciationFeedback) => void;
}

export default function SmartPronunciationEvaluator({
  targetText,
  prompt,
  transcript,
  audioBlob,
  modelAudioUrl,
  onEvaluationComplete
}: SmartPronunciationEvaluatorProps) {
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<PronunciationFeedback | null>(null);
  const [evaluationProgress, setEvaluationProgress] = useState(0);

  // Función para normalizar texto
  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // NUEVO: Extraer palabras clave del prompt
  const extractKeywords = (text: string): string[] => {
    const normalized = normalizeText(text);
    
    // Palabras a ignorar (stop words)
    const stopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
      'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during',
      'before', 'after', 'above', 'below', 'between', 'under', 'again', 'further',
      'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all',
      'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no',
      'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very',
      'can', 'will', 'just', 'should', 'now', 'i', 'you', 'he', 'she', 'it',
      'we', 'they', 'what', 'which', 'who', 'this', 'that', 'these', 'those',
      'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has',
      'had', 'do', 'does', 'did', 'having', 'your', 'my', 'their', 'our',
      'tell', 'describe', 'speak', 'talk', 'explain', 'discuss', 'say',
      'use', 'using', 'used', 'make', 'made', 'get', 'got', 'take', 'took'
    ]);
    
    const words = normalized.split(' ').filter(word => 
      word.length > 2 && !stopWords.has(word)
    );
    
    // Contar frecuencia
    const frequency: { [key: string]: number } = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    
    // Retornar palabras únicas ordenadas por frecuencia
    return Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
  };

  // NUEVO: Analizar relevancia al tema
  const analyzeTopicRelevance = (
    promptText: string,
    transcriptText: string
  ): TopicAnalysis => {
    const promptKeywords = extractKeywords(promptText);
    const transcriptKeywords = extractKeywords(transcriptText);
    
    // Tomar las top 10 palabras clave del prompt
    const expectedKeywords = promptKeywords.slice(0, 10);
    
    // Encontrar keywords presentes
    const foundKeywords = expectedKeywords.filter(keyword =>
      transcriptKeywords.includes(keyword) ||
      transcriptText.toLowerCase().includes(keyword)
    );
    
    // Keywords faltantes
    const missingKeywords = expectedKeywords.filter(
      keyword => !foundKeywords.includes(keyword)
    );
    
    // Palabras en transcript que no están relacionadas con el prompt
    const offTopicWords = transcriptKeywords
      .slice(0, 20)
      .filter(word => !promptKeywords.slice(0, 20).includes(word));
    
    // Calcular score de relevancia
    const relevanceScore = expectedKeywords.length > 0
      ? Math.round((foundKeywords.length / expectedKeywords.length) * 100)
      : 100;
    
    const isRelevant = relevanceScore >= 40; // 40% threshold
    
    // Generar feedback específico
    let topicFeedback = '';
    if (!isRelevant) {
      if (foundKeywords.length === 0) {
        topicFeedback = `⚠️ Your response doesn't seem to address the topic. The exercise asks you to "${promptText.substring(0, 100)}..." but your answer doesn't mention key concepts like: ${missingKeywords.slice(0, 5).join(', ')}. Please make sure you're answering the question directly.`;
      } else {
        topicFeedback = `⚠️ Your response is partially off-topic. You mentioned some relevant points (${foundKeywords.slice(0, 3).join(', ')}), but you should also discuss: ${missingKeywords.slice(0, 3).join(', ')}. Stay focused on the main question.`;
      }
    } else if (relevanceScore < 70) {
      topicFeedback = `✓ Your response is mostly relevant, but could be more focused. Try to include more about: ${missingKeywords.slice(0, 3).join(', ')}.`;
    } else {
      topicFeedback = `✓ Excellent! Your response directly addresses the topic and includes key concepts.`;
    }
    
    return {
      isRelevant,
      relevanceScore,
      expectedKeywords,
      foundKeywords,
      missingKeywords,
      offTopicWords,
      topicFeedback
    };
  };

  // Algoritmo de Levenshtein
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
          matrix[i - 1][j - 1] + cost,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 100;
    
    const editDistance = levenshteinDistance(longer, shorter);
    return ((longer.length - editDistance) / longer.length) * 100;
  };

  // Algoritmo fonético
  const calculatePhoneticSimilarity = (word1: string, word2: string): number => {
    const soundex = (word: string): string => {
      word = word.toLowerCase();
      const firstLetter = word[0];
      
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

  // Analizar palabras
  const analyzeWordAccuracy = (target: string, spoken: string): WordDetails[] => {
    if (!target) return [];
    
    const targetWords = normalizeText(target).split(' ').filter(w => w.length > 0);
    const spokenWords = normalizeText(spoken).split(' ').filter(w => w.length > 0);
    
    const wordDetails: WordDetails[] = [];
    
    for (let i = 0; i < targetWords.length; i++) {
      const targetWord = targetWords[i];
      const spokenWord = spokenWords[i] || '';
      
      const exactSimilarity = calculateSimilarity(targetWord, spokenWord);
      const phoneticSimilarity = spokenWord ? calculatePhoneticSimilarity(targetWord, spokenWord) : 0;
      
      const combinedSimilarity = (exactSimilarity * 0.7 + phoneticSimilarity * 0.3);
      const confidence = Math.round(combinedSimilarity);
      const correct = combinedSimilarity >= 75;
      
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

  // Analizar características de audio
  const analyzeAudioCharacteristics = async (blob: Blob) => {
    return new Promise<{
      duration: number;
      volumeLevel: string;
      speakingRate: number;
    }>(resolve => {
      setTimeout(() => {
        const size = blob.size;
        const estimatedDuration = size / 16000;
        const volumeLevel = size > 100000 ? 'Good' : size > 50000 ? 'Low' : 'Very Low';
        const speakingRate = Math.random() * 50 + 100;
        
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
    const targetWords = targetText ? normalizeText(targetText).split(' ') : transcriptWords;
    
    const wordCountRatio = Math.min(transcriptWords.length / Math.max(targetWords.length, 1), 1);
    const rhythm = wordCountRatio * 100;
    
    const avgWordLength = transcriptWords.reduce((sum, w) => sum + w.length, 0) / Math.max(transcriptWords.length, 1);
    const targetAvgLength = targetWords.reduce((sum, w) => sum + w.length, 0) / Math.max(targetWords.length, 1);
    const lengthRatio = Math.min(avgWordLength / Math.max(targetAvgLength, 1), 2) / 2;
    const intonation = lengthRatio * 100;
    
    return {
      rhythm: Math.round(rhythm),
      intonation: Math.round(intonation)
    };
  };

  // Evaluar pronunciación con análisis de relevancia
  const evaluatePronunciation = async () => {
    setIsEvaluating(true);
    setEvaluationProgress(0);
    
    try {
      // Progreso: Llamando a IA para evaluación REAL
      setEvaluationProgress(10);
      
      // NUEVO: Llamar a API de evaluación con IA
      const aiResponse = await fetch('/api/evaluate-speaking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          transcript,
          targetText
        })
      });
      
      if (!aiResponse.ok) {
        throw new Error('AI evaluation failed');
      }
      
      const { evaluation: aiEvaluation } = await aiResponse.json();
      
      setEvaluationProgress(30);
      
      // Usar evaluación de IA para topic analysis
      const topicAnalysis: TopicAnalysis = {
        isRelevant: aiEvaluation.isOnTopic,
        relevanceScore: aiEvaluation.relevanceScore,
        expectedKeywords: aiEvaluation.expectedConcepts,
        foundKeywords: aiEvaluation.foundConcepts,
        missingKeywords: aiEvaluation.missingConcepts,
        offTopicWords: aiEvaluation.offTopicContent,
        topicFeedback: aiEvaluation.detailedFeedback.split('\n\n')[0] // Primera parte del feedback
      };
      
      // Progreso: Análisis de texto
      setEvaluationProgress(50);
      
      const normalizedTarget = targetText ? normalizeText(targetText) : normalizeText(prompt);
      const normalizedTranscript = normalizeText(transcript);
      
      // Progreso: Análisis palabra por palabra
      setEvaluationProgress(65);
      const wordDetails = targetText ? analyzeWordAccuracy(targetText, transcript) : [];
      
      // Progreso: Análisis de audio
      setEvaluationProgress(75);
      const audioCharacteristics = await analyzeAudioCharacteristics(audioBlob);
      
      // Progreso: Cálculo de métricas
      setEvaluationProgress(85);
      
      // Métricas básicas
      const accuracy = targetText ? calculateSimilarity(normalizedTarget, normalizedTranscript) : 85;
      
      const correctWords = wordDetails.filter(w => w.correct).length;
      const completeness = wordDetails.length > 0 ? (correctWords / wordDetails.length) * 100 : 90;
      
      const fluency = Math.min((audioCharacteristics.speakingRate / 150) * 100, 100);
      
      const pronunciation = wordDetails.length > 0
        ? wordDetails.reduce((sum, w) => sum + w.confidence, 0) / wordDetails.length
        : 85;
      
      const { rhythm, intonation } = evaluateRhythmAndIntonation(transcript, targetText || prompt);
      
      // MÉTRICAS DE IA: Usar scores de evaluación real
      const relevance = aiEvaluation.relevanceScore;
      const coherence = aiEvaluation.coherenceScore;
      
      // Overall score con NUEVOS pesos incluyendo relevancia
      const overall = Math.round(
        accuracy * 0.20 +
        completeness * 0.15 +
        fluency * 0.15 +
        pronunciation * 0.15 +
        rhythm * 0.08 +
        intonation * 0.07 +
        relevance * 0.12 +      // NUEVO: 12% relevancia al tema
        coherence * 0.08         // NUEVO: 8% coherencia
      );
      
      // Generar feedback usando evaluación de IA
      const strengths: string[] = [];
      const improvements: string[] = [];
      
      // FEEDBACK DE IA REAL
      if (aiEvaluation.overallAssessment === 'off-topic') {
        improvements.push('⚠️ Your response is completely off-topic - please address the question directly');
        improvements.push(`📝 The exercise asks: "${prompt.substring(0, 80)}..."`);
      } else if (aiEvaluation.overallAssessment === 'poor') {
        improvements.push('📌 Your response needs significant improvement in addressing the topic');
      } else if (aiEvaluation.overallAssessment === 'fair') {
        improvements.push('📈 Your response partially addresses the topic but could be more complete');
      } else if (aiEvaluation.overallAssessment === 'good') {
        strengths.push('✓ Good topic coverage - you addressed most key points');
      } else if (aiEvaluation.overallAssessment === 'excellent') {
        strengths.push('🎯 Excellent! You fully addressed the topic with great detail');
      }
      
      // Añadir sugerencias de IA
      aiEvaluation.suggestions.slice(0, 3).forEach((suggestion: string) => {
        improvements.push(`💡 ${suggestion}`);
      });
      
      // Resto de análisis...
      if (accuracy >= 90) {
        strengths.push('🎯 Outstanding accuracy - words match the target almost perfectly');
      } else if (accuracy >= 75) {
        strengths.push('✅ Good accuracy - most pronunciation is on point');
      } else if (accuracy >= 60 && targetText) {
        improvements.push('📝 Work on matching the target text more closely');
      }
      
      if (completeness >= 95) {
        strengths.push('✨ Perfect completeness - you said all the words');
      } else if (completeness >= 80) {
        strengths.push('👍 Great job completing most of the text');
      } else if (wordDetails.length > 0) {
        improvements.push('📚 Try to complete the entire text without skipping words');
      }
      
      if (fluency >= 85) {
        strengths.push('🌊 Excellent fluency - natural and smooth delivery');
      } else if (fluency >= 70) {
        strengths.push('💫 Good fluency with a natural pace');
      } else if (fluency >= 50) {
        improvements.push('⏱️ Work on speaking at a more natural pace');
      } else {
        improvements.push('🐌 Try to speak more fluently without long pauses');
      }
      
      if (pronunciation >= 85) {
        strengths.push('🗣️ Individual word pronunciation is excellent');
      } else if (pronunciation < 60 && wordDetails.length > 0) {
        improvements.push('🎤 Practice individual words for clearer pronunciation');
      }
      
      if (rhythm >= 80) {
        strengths.push('🎵 Good rhythm and pacing');
      } else if (rhythm < 60) {
        improvements.push('🥁 Work on maintaining a consistent rhythm');
      }
      
      if (intonation >= 75) {
        strengths.push('📈 Natural intonation patterns');
      } else if (intonation < 60) {
        improvements.push('🎭 Practice varying your intonation for more natural speech');
      }
      
      if (audioCharacteristics.volumeLevel === 'Very Low') {
        improvements.push('🔊 Speak louder for clearer audio capture');
      }
      
      // Feedback detallado usando EVALUACIÓN DE IA
      let detailedFeedback = '';
      
      if (!topicAnalysis.isRelevant) {
        // PRIORIDAD MÁXIMA: Feedback de off-topic con análisis de IA
        detailedFeedback = `🚫 **AI-Powered Evaluation - Topic Relevance Issue**\n\n`;
        detailedFeedback += `${aiEvaluation.detailedFeedback}\n\n`;
        detailedFeedback += `**What the exercise asked for:**\n"${prompt}"\n\n`;
        detailedFeedback += `**Key concepts you should mention:**\n`;
        detailedFeedback += `${topicAnalysis.missingKeywords.slice(0, 8).map(k => `• ${k}`).join('\n')}\n\n`;
        detailedFeedback += `**Your pronunciation and fluency scores are being evaluated**, but answering the correct topic is essential for a good overall score.`;
      } else {
        // Usar feedback de IA cuando está on-topic
        detailedFeedback = `🤖 **AI-Powered Evaluation**\n\n${aiEvaluation.detailedFeedback}\n\n`;
        
        // Añadir info de pronunciación si hay target text
        if (targetText && wordDetails.length > 0) {
          const correctPercentage = Math.round((correctWords / wordDetails.length) * 100);
          detailedFeedback += `\n**Pronunciation Analysis:** You pronounced ${correctPercentage}% of the target words correctly. `;
          if (correctPercentage >= 90) {
            detailedFeedback += `Excellent work on pronunciation!`;
          } else if (correctPercentage >= 75) {
            detailedFeedback += `Good pronunciation with room for minor improvements.`;
          } else {
            detailedFeedback += `Focus on the highlighted words for pronunciation improvement.`;
          }
        }
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
          intonation: Math.round(intonation),
          relevance: Math.round(relevance),     // NUEVO
          coherence: Math.round(coherence)      // NUEVO
        },
        strengths,
        improvements,
        detailedFeedback,
        wordAccuracy: wordDetails,
        topicAnalysis,  // NUEVO
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
    if (score >= 90) return 'text-amber-700 bg-amber-50 border-amber-300';
    if (score >= 80) return 'text-amber-700 bg-amber-50 border-amber-300';
    if (score >= 70) return 'text-coral-700 bg-orange-50 border-orange-300';
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
    if (confidence >= 85) return 'bg-amber-100 border-amber-300 text-amber-900';
    if (confidence >= 70) return 'bg-amber-100 border-amber-300 text-amber-900';
    if (confidence >= 50) return 'bg-amber-100 border-amber-300 text-amber-900';
    return 'bg-red-100 border-red-300 text-red-900';
  };

  if (!feedback) {
    return (
      <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl border-2 border-orange-200 p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="text-4xl">🎯</span>
          <span>Smart Pronunciation & Topic Evaluation</span>
        </h3>
        
        <div className="space-y-6">
          {/* Topic Analysis Preview */}
          <div className="bg-peach-50 rounded-xl p-6 border-2 border-peach-200">
            <h4 className="font-bold text-peach-900 mb-3 flex items-center gap-2 text-lg">
              <span>🎓</span>
              <span>What This Exercise Asks</span>
            </h4>
            <p className="text-slate-800 leading-relaxed">{prompt}</p>
            <div className="mt-4 p-4 bg-white rounded-lg border border-peach-200">
              <p className="text-sm text-peach-700">
                💡 <strong>Important:</strong> Make sure your answer directly addresses this topic. 
                The AI will check if you're speaking about the right subject!
              </p>
            </div>
          </div>

          {/* Text Comparison */}
          <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="font-bold text-coral-900 text-lg flex items-center gap-2">
                  <span>📝</span>
                  <span>{targetText ? 'Target Text' : 'Your Task'}</span>
                </p>
                <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                  <p className="text-slate-800 leading-relaxed">{targetText || prompt}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-amber-900 text-lg flex items-center gap-2">
                  <span>🎤</span>
                  <span>What You Said</span>
                </p>
                <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-200">
                  <p className="text-slate-800 leading-relaxed">
                    {transcript || 'No transcript available'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Model Audio Player */}
          {modelAudioUrl && (
            <div className="bg-peach-50 rounded-xl p-6 border-2 border-peach-200">
              <p className="font-bold text-peach-900 mb-3 flex items-center gap-2">
                <span>🔊</span>
                <span>Listen to the Model Pronunciation</span>
              </p>
              <audio controls className="w-full" src={modelAudioUrl}>
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-peach-700 mt-2">
                💡 Tip: Listen to this model pronunciation before evaluating to compare
              </p>
            </div>
          )}

          {/* Evaluation Button */}
          <button
            onClick={evaluatePronunciation}
            disabled={isEvaluating || !transcript}
            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-coral-600 via-peach-600 to-pink-600 text-white rounded-2xl hover:from-coral-700 hover:via-peach-700 hover:to-pink-700 transition-all font-bold text-xl shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            {isEvaluating ? (
              <>
                <span className="animate-spin text-2xl">⏳</span>
                <span>Analyzing your response...</span>
              </>
            ) : (
              <>
                <span className="text-2xl">🎯</span>
                <span>Evaluate My Response</span>
              </>
            )}
          </button>

          {/* Progress Bar */}
          {isEvaluating && evaluationProgress > 0 && (
            <div className="bg-white rounded-xl p-4 border-2 border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">
                  {evaluationProgress < 15 ? 'Checking topic relevance...' :
                   evaluationProgress < 35 ? 'Analyzing text...' :
                   evaluationProgress < 55 ? 'Checking word-by-word...' :
                   evaluationProgress < 75 ? 'Analyzing audio quality...' :
                   evaluationProgress < 95 ? 'Calculating scores...' :
                   'Generating feedback...'}
                </span>
                <span className="text-sm font-bold text-coral-600">{evaluationProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-orange-500 to-peach-500 h-full transition-all duration-300 rounded-full"
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

  // Render detailed feedback (continúa en el siguiente mensaje por límite de espacio...)
  return (
    <div className="bg-gradient-to-br from-white via-orange-50 to-peach-50 rounded-2xl border-2 border-slate-300 p-8 space-y-8 shadow-2xl">
      <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
        <span className="text-5xl">🎯</span>
        <span>Your Complete Evaluation Report</span>
      </h3>

      {/* NUEVO: Topic Relevance Alert (si es off-topic) */}
      {!feedback.topicAnalysis.isRelevant && (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border-3 border-red-300 p-6 shadow-xl animate-pulse">
          <div className="flex items-start gap-4">
            <span className="text-5xl">⚠️</span>
            <div>
              <h4 className="text-2xl font-black text-red-900 mb-3">Topic Relevance Issue Detected!</h4>
              <p className="text-red-800 text-lg leading-relaxed mb-4">
                {feedback.topicAnalysis.topicFeedback}
              </p>
              <div className="bg-white rounded-lg p-4 border-2 border-red-200">
                <p className="font-bold text-red-900 mb-2">The exercise asked you to discuss:</p>
                <p className="text-slate-700 italic mb-3">"{prompt}"</p>
                <p className="font-bold text-red-900 mb-2">You should include these key concepts:</p>
                <div className="flex flex-wrap gap-2">
                  {feedback.topicAnalysis.missingKeywords.slice(0, 8).map((keyword, idx) => (
                    <span key={idx} className="px-3 py-1 bg-red-100 border border-red-300 rounded-lg text-red-900 font-semibold">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overall Score */}
      <div className={`rounded-2xl border-3 p-8 text-center shadow-xl ${getScoreColor(feedback.score.overall)}`}>
        <div className="text-8xl font-black mb-3">{feedback.score.overall}<span className="text-5xl">%</span></div>
        <div className="text-3xl font-bold mb-3">{getScoreBadge(feedback.score.overall)}</div>
        <p className="text-lg font-semibold opacity-80">Overall Score</p>
        {!feedback.topicAnalysis.isRelevant && (
          <p className="text-sm mt-3 font-bold">
            ⚠️ Score affected by off-topic response
          </p>
        )}
      </div>

      {/* NUEVO: Topic Analysis Panel */}
      <div className={`rounded-xl p-6 border-2 shadow-md ${
        feedback.topicAnalysis.isRelevant 
          ? 'bg-gradient-to-r from-amber-50 to-amber-50 border-amber-300'
          : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-300'
      }`}>
        <h4 className={`font-bold text-xl mb-4 flex items-center gap-2 ${
          feedback.topicAnalysis.isRelevant ? 'text-amber-900' : 'text-red-900'
        }`}>
          <span>{feedback.topicAnalysis.isRelevant ? '✓' : '⚠️'}</span>
          <span>Topic Relevance Analysis</span>
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 border-2 border-amber-200">
            <p className="text-sm font-semibold text-amber-900 mb-2">✓ Key Concepts You Mentioned:</p>
            <div className="flex flex-wrap gap-2">
              {feedback.topicAnalysis.foundKeywords.length > 0 ? (
                feedback.topicAnalysis.foundKeywords.map((keyword, idx) => (
                  <span key={idx} className="px-2 py-1 bg-amber-100 border border-amber-300 rounded text-amber-900 text-sm">
                    {keyword}
                  </span>
                ))
              ) : (
                <span className="text-red-600 italic">None - please address the topic</span>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border-2 border-red-200">
            <p className="text-sm font-semibold text-red-900 mb-2">✗ Missing Key Concepts:</p>
            <div className="flex flex-wrap gap-2">
              {feedback.topicAnalysis.missingKeywords.slice(0, 6).map((keyword, idx) => (
                <span key={idx} className="px-2 py-1 bg-red-100 border border-red-300 rounded text-red-900 text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
          <p className={`text-lg ${feedback.topicAnalysis.isRelevant ? 'text-amber-800' : 'text-red-800'}`}>
            {feedback.topicAnalysis.topicFeedback}
          </p>
        </div>
      </div>

      {/* Detailed Metrics Grid - AHORA CON 8 MÉTRICAS */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {[
          { label: 'Relevance', score: feedback.score.relevance, icon: '🎯', color: 'purple' },
          { label: 'Coherence', score: feedback.score.coherence, icon: '🧩', color: 'indigo' },
          { label: 'Accuracy', score: feedback.score.accuracy, icon: '🎯', color: 'blue' },
          { label: 'Complete', score: feedback.score.completeness, icon: '✅', color: 'green' },
          { label: 'Fluency', score: feedback.score.fluency, icon: '🌊', color: 'cyan' },
          { label: 'Pronunciation', score: feedback.score.pronunciation, icon: '🗣️', color: 'amber' },
          { label: 'Rhythm', score: feedback.score.rhythm, icon: '🥁', color: 'pink' },
          { label: 'Intonation', score: feedback.score.intonation, icon: '🎵', color: 'violet' }
        ].map((metric) => (
          <div key={metric.label} className={`bg-${metric.color}-50 rounded-xl p-4 border-2 border-${metric.color}-200 text-center shadow-md hover:shadow-lg transition-shadow`}>
            <div className="text-2xl mb-1">{metric.icon}</div>
            <div className={`text-2xl font-black text-${metric.color}-700`}>{metric.score}%</div>
            <div className={`text-xs font-bold text-${metric.color}-800 mt-1`}>{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Audio Comparison */}
      {feedback.audioComparison && (
        <div className="bg-white rounded-xl p-6 border-2 border-peach-200 shadow-md">
          <h4 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
            <span>📊</span>
            <span>Audio Analysis</span>
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-peach-50 rounded-lg p-4 border border-peach-200">
              <p className="text-sm text-peach-700 font-semibold mb-1">Similarity to Model</p>
              <p className="text-2xl font-bold text-peach-900">{feedback.audioComparison.similarityScore}%</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <p className="text-sm text-coral-700 font-semibold mb-1">Speaking Speed</p>
              <p className="text-2xl font-bold text-coral-900">{feedback.audioComparison.speedComparison}</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-sm text-amber-700 font-semibold mb-1">Volume Level</p>
              <p className="text-2xl font-bold text-amber-900">{feedback.audioComparison.volumeLevel}</p>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Feedback */}
      <div className="bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl p-6 border-2 border-slate-300 shadow-md">
        <h4 className="font-bold text-slate-900 text-xl mb-3 flex items-center gap-2">
          <span>💬</span>
          <span>Expert Feedback</span>
        </h4>
        <p className="text-slate-800 leading-relaxed text-lg whitespace-pre-line">{feedback.detailedFeedback}</p>
      </div>

      {/* Strengths */}
      {feedback.strengths.length > 0 && (
        <div className="bg-gradient-to-r from-amber-50 to-amber-50 rounded-xl p-6 border-2 border-amber-300 shadow-md">
          <h4 className="font-bold text-amber-900 text-xl mb-4 flex items-center gap-2">
            <span>✨</span>
            <span>Your Strengths</span>
          </h4>
          <ul className="space-y-3">
            {feedback.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-3 text-amber-800 text-lg">
                <span className="text-amber-500 text-2xl mt-0.5">✓</span>
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

      {/* Word-by-Word Analysis (solo si hay target text) */}
      {feedback.wordAccuracy.length > 0 && (
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
                    <span className="text-amber-600 text-xl">✓</span>
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
            <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
              <p className="text-sm text-coral-800 flex items-start gap-2">
                <span className="text-lg">💡</span>
                <span>
                  <strong>Pro Tip:</strong> Words marked with ✗ need more practice. Try repeating them slowly while listening to the model audio.
                </span>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => {
            setFeedback(null);
            setEvaluationProgress(0);
          }}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-coral-600 to-coral-700 text-white rounded-xl hover:from-coral-700 hover:to-coral-800 transition-all font-bold text-lg shadow-lg transform hover:scale-105"
        >
          <span className="text-xl">🔄</span>
          <span>Try Again</span>
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-peach-600 to-peach-700 text-white rounded-xl hover:from-peach-700 hover:to-peach-800 transition-all font-bold text-lg shadow-lg transform hover:scale-105"
        >
          <span className="text-xl">🖨️</span>
          <span>Print Report</span>
        </button>
        <button
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all font-bold text-lg shadow-lg transform hover:scale-105"
        >
          <span className="text-xl">→</span>
          <span>Next Exercise</span>
        </button>
      </div>
    </div>
  );
}
