'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Pause, Volume2, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

interface PronunciationPracticeProps {
  exerciseId: string;
  prompt: string;
  targetText: string;
  modelAudioUrl?: string;
  hints?: string[];
  onComplete: (exerciseId: string, score: number, feedback: any) => void;
}

interface EvaluationResult {
  relevanceScore: number;
  contentQualityScore: number;
  coherenceScore: number;
  taskCompletionScore: number;
  expectedConcepts: string[];
  foundConcepts: string[];
  missingConcepts: string[];
  offTopicContent: string[];
  detailedFeedback: string;
  suggestions: string[];
  isOnTopic: boolean;
  overallAssessment: 'excellent' | 'good' | 'fair' | 'poor' | 'off-topic';
}

export default function PronunciationPractice({
  exerciseId,
  prompt,
  targetText,
  modelAudioUrl,
  hints,
  onComplete
}: PronunciationPracticeProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlayingModel, setIsPlayingModel] = useState(false);
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);
  const [transcript, setTranscript] = useState<string>('');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showHints, setShowHints] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const modelAudioRef = useRef<HTMLAudioElement | null>(null);
  const recordingAudioRef = useRef<HTMLAudioElement | null>(null);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Inicializar Web Speech API para transcripción en tiempo real
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
          }
        }
        if (finalTranscript) {
          setTranscript(prev => prev + finalTranscript);
        }
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        
        stream.getTracks().forEach(track => track.stop());
        
        if (recordingTimerRef.current) {
          clearInterval(recordingTimerRef.current);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      setTranscript('');
      
      // Iniciar transcripción en tiempo real
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }

      // Temporizador de grabación
      recordingTimerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Error accessing microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
      }
    }
  };

  const playModelAudio = () => {
    if (modelAudioUrl && modelAudioRef.current) {
      if (isPlayingModel) {
        modelAudioRef.current.pause();
        setIsPlayingModel(false);
      } else {
        modelAudioRef.current.play();
        setIsPlayingModel(true);
      }
    }
  };

  const playRecording = () => {
    if (audioUrl && recordingAudioRef.current) {
      if (isPlayingRecording) {
        recordingAudioRef.current.pause();
        setIsPlayingRecording(false);
      } else {
        recordingAudioRef.current.play();
        setIsPlayingRecording(true);
      }
    }
  };

  const resetRecording = () => {
    setAudioBlob(null);
    setAudioUrl(null);
    setTranscript('');
    setEvaluation(null);
    setRecordingTime(0);
  };

  const evaluatePronunciation = async () => {
    if (!transcript) {
      alert('No transcript available. Please record again.');
      return;
    }

    setIsEvaluating(true);

    try {
      const response = await fetch('/api/evaluate-speaking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          targetText,
          transcript
        })
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate pronunciation');
      }

      const data = await response.json();
      
      if (data.success && data.evaluation) {
        setEvaluation(data.evaluation);
        
        // Calcular score promedio para el ejercicio
        const avgScore = (
          data.evaluation.relevanceScore +
          data.evaluation.contentQualityScore +
          data.evaluation.coherenceScore +
          data.evaluation.taskCompletionScore
        ) / 4;
        
        onComplete(exerciseId, avgScore, data.evaluation);
      } else {
        throw new Error('Invalid response format');
      }

    } catch (error) {
      console.error('Error evaluating pronunciation:', error);
      alert('Error evaluating pronunciation. Please try again.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-amber-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'bg-amber-50 border-amber-200';
    if (score >= 60) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <h3 className="font-semibold text-coral-900 mb-2">📢 Pronunciation Practice</h3>
        <p className="text-coral-800 mb-2">{prompt}</p>
        {targetText && (
          <div className="bg-white rounded p-3 mt-3 border border-orange-100">
            <p className="font-medium text-gray-900 text-lg">&quot;{targetText}&quot;</p>
          </div>
        )}
      </div>

      {/* Model Audio */}
      {modelAudioUrl && (
        <div className="bg-peach-50 border border-peach-200 rounded-lg p-4">
          <h4 className="font-semibold text-peach-900 mb-3 flex items-center gap-2">
            <Volume2 className="h-5 w-5" />
            Listen to the Model
          </h4>
          <audio
            ref={modelAudioRef}
            src={modelAudioUrl}
            onEnded={() => setIsPlayingModel(false)}
            onPause={() => setIsPlayingModel(false)}
            preload="metadata"
          />
          <button
            onClick={playModelAudio}
            className="w-full bg-peach-600 text-white px-4 py-3 rounded-lg hover:bg-peach-700 transition flex items-center justify-center gap-2 font-medium"
          >
            {isPlayingModel ? (
              <>
                <Pause className="h-5 w-5" />
                Pause Model Audio
              </>
            ) : (
              <>
                <Play className="h-5 w-5" />
                Play Model Audio
              </>
            )}
          </button>
        </div>
      )}

      {/* Hints */}
      {hints && hints.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <button
            onClick={() => setShowHints(!showHints)}
            className="font-semibold text-amber-900 hover:text-amber-700 transition"
          >
            💡 {showHints ? 'Hide' : 'Show'} Hints ({hints.length})
          </button>
          {showHints && (
            <ul className="mt-3 space-y-2">
              {hints.map((hint, index) => (
                <li key={index} className="text-amber-800 flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  {hint}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Recording Controls */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Mic className="h-5 w-5" />
          Your Recording
        </h4>

        {!audioBlob ? (
          <div className="space-y-4">
            {isRecording && (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full border border-red-200">
                  <div className="h-3 w-3 bg-red-600 rounded-full animate-pulse" />
                  Recording... {formatTime(recordingTime)}
                </div>
              </div>
            )}

            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-full px-6 py-4 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                isRecording
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-coral-600 hover:bg-coral-700 text-white'
              }`}
            >
              {isRecording ? (
                <>
                  <Square className="h-5 w-5" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Mic className="h-5 w-5" />
                  Start Recording
                </>
              )}
            </button>

            {isRecording && transcript && (
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Live Transcript:</p>
                <p className="text-gray-900">{transcript}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Playback Controls */}
            <audio
              ref={recordingAudioRef}
              src={audioUrl || ''}
              onEnded={() => setIsPlayingRecording(false)}
              onPause={() => setIsPlayingRecording(false)}
              preload="metadata"
            />
            
            <div className="flex gap-2">
              <button
                onClick={playRecording}
                className="flex-1 bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition flex items-center justify-center gap-2 font-medium"
              >
                {isPlayingRecording ? (
                  <>
                    <Pause className="h-5 w-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    Play Recording
                  </>
                )}
              </button>
              
              <button
                onClick={resetRecording}
                className="bg-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-300 transition flex items-center justify-center gap-2"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
            </div>

            {/* Transcript */}
            {transcript && (
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600 mb-2 font-medium">Your Response:</p>
                <p className="text-gray-900">{transcript}</p>
              </div>
            )}

            {/* Evaluate Button */}
            {!evaluation && (
              <button
                onClick={evaluatePronunciation}
                disabled={isEvaluating}
                className="w-full bg-coral-600 text-white px-6 py-4 rounded-lg hover:bg-coral-700 transition font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isEvaluating ? (
                  <>🔄 Evaluating...</>
                ) : (
                  <>✨ Get AI Feedback</>
                )}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Evaluation Results */}
      {evaluation && (
        <div className="space-y-4">
          {/* Overall Assessment */}
          <div className={`rounded-lg p-6 border-2 ${getScoreBackground(
            (evaluation.relevanceScore + evaluation.contentQualityScore + 
             evaluation.coherenceScore + evaluation.taskCompletionScore) / 4
          )}`}>
            <div className="flex items-center gap-3 mb-3">
              {evaluation.isOnTopic ? (
                <CheckCircle2 className="h-8 w-8 text-amber-600" />
              ) : (
                <AlertCircle className="h-8 w-8 text-red-600" />
              )}
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {evaluation.overallAssessment.charAt(0).toUpperCase() + 
                   evaluation.overallAssessment.slice(1)}
                </h3>
                <p className="text-sm text-gray-600">
                  Average Score: {Math.round(
                    (evaluation.relevanceScore + evaluation.contentQualityScore + 
                     evaluation.coherenceScore + evaluation.taskCompletionScore) / 4
                  )}%
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Scores */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Topic Relevance</p>
              <p className={`text-2xl font-bold ${getScoreColor(evaluation.relevanceScore)}`}>
                {evaluation.relevanceScore}%
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Content Quality</p>
              <p className={`text-2xl font-bold ${getScoreColor(evaluation.contentQualityScore)}`}>
                {evaluation.contentQualityScore}%
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Coherence</p>
              <p className={`text-2xl font-bold ${getScoreColor(evaluation.coherenceScore)}`}>
                {evaluation.coherenceScore}%
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Task Completion</p>
              <p className={`text-2xl font-bold ${getScoreColor(evaluation.taskCompletionScore)}`}>
                {evaluation.taskCompletionScore}%
              </p>
            </div>
          </div>

          {/* Detailed Feedback */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3">📋 Detailed Feedback</h4>
            <p className="text-gray-700 whitespace-pre-line">{evaluation.detailedFeedback}</p>
          </div>

          {/* Key Concepts */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 mb-2">✅ Concepts Covered</h4>
              {evaluation.foundConcepts.length > 0 ? (
                <ul className="space-y-1">
                  {evaluation.foundConcepts.map((concept, index) => (
                    <li key={index} className="text-amber-800 flex items-start gap-2">
                      <span>•</span>
                      {concept}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-amber-700 text-sm">None identified</p>
              )}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 mb-2">⚠️ Missing Concepts</h4>
              {evaluation.missingConcepts.length > 0 ? (
                <ul className="space-y-1">
                  {evaluation.missingConcepts.map((concept, index) => (
                    <li key={index} className="text-amber-800 flex items-start gap-2">
                      <span>•</span>
                      {concept}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-amber-700 text-sm">All covered!</p>
              )}
            </div>
          </div>

          {/* Off-topic Content */}
          {evaluation.offTopicContent.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">❌ Off-topic Content</h4>
              <ul className="space-y-1">
                {evaluation.offTopicContent.map((item, index) => (
                  <li key={index} className="text-red-800 flex items-start gap-2">
                    <span>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Suggestions */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-coral-900 mb-3">💡 Suggestions for Improvement</h4>
            <ul className="space-y-2">
              {evaluation.suggestions.map((suggestion, index) => (
                <li key={index} className="text-coral-800 flex items-start gap-2">
                  <span className="font-bold">{index + 1}.</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
