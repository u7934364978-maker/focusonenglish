'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Pause, RotateCcw, Volume2, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { 
  requestMicrophonePermission, 
  checkMicrophonePermission, 
  releaseMicrophoneStream,
  type MicrophoneError 
} from '@/lib/utils/microphone-permission';
import { MicrophonePermissionError, MicrophonePermissionPrompt } from '@/components/MicrophonePermission';

interface SpeakingQuestion {
  id: string;
  prompt: string;
  expectedResponse?: string;
  hints?: string[];
  targetWords?: string[];
}

interface SpeakingEvaluation {
  transcription: string;
  pronunciationScore: number;
  fluencyScore: number;
  grammarScore: number;
  vocabularyScore: number;
  overallScore: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
  detectedWords: string[];
  missedWords: string[];
}

interface SpeakingExerciseProps {
  question: SpeakingQuestion;
  onComplete: (evaluation: SpeakingEvaluation) => void;
  level: string;
}

export default function SpeakingExercise({ question, onComplete, level }: SpeakingExerciseProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<SpeakingEvaluation | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [micError, setMicError] = useState<MicrophoneError | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<'unknown' | 'granted' | 'denied' | 'prompt'>('unknown');
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check initial permission status
    checkMicrophonePermission().then(status => {
      if (status !== 'unsupported') {
        setPermissionStatus(status);
      }
    });

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  const handleRequestPermission = async () => {
    setIsRequestingPermission(true);
    setMicError(null);

    const result = await requestMicrophonePermission();

    setIsRequestingPermission(false);

    if (result.granted && result.stream) {
      setPermissionStatus('granted');
      releaseMicrophoneStream(result.stream);
    } else if (result.error) {
      setMicError(result.error);
      setPermissionStatus('denied');
    }
  };

  const startRecording = async () => {
    try {
      setMicError(null);

      const result = await requestMicrophonePermission();

      if (!result.granted || !result.stream) {
        if (result.error) {
          setMicError(result.error);
          setPermissionStatus('denied');
        }
        return;
      }

      const stream = result.stream;
      setPermissionStatus('granted');
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioBlob(audioBlob);
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setHasRecorded(true);
        
        // Stop all tracks
        releaseMicrophoneStream(stream);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (error: any) {
      console.error('Error accessing microphone:', error);
      setMicError({
        type: 'Other',
        message: error?.message || 'Unknown error',
        userMessage: 'Error inesperado al acceder al micrófono.',
        action: 'Intenta recargar la página o usar otro navegador.',
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const resetRecording = () => {
    setAudioBlob(null);
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setEvaluation(null);
    setRecordingTime(0);
    setHasRecorded(false);
  };

  const playRecording = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const evaluateRecording = async () => {
    if (!audioBlob) return;

    setIsEvaluating(true);

    try {
      // Convert audio blob to base64
      const reader = new FileReader();
      const audioBase64 = await new Promise<string>((resolve) => {
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(',')[1];
          resolve(base64);
        };
        reader.readAsDataURL(audioBlob);
      });

      // Send to API for evaluation
      const response = await fetch('/api/evaluate-speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audioBase64,
          prompt: question.prompt,
          expectedResponse: question.expectedResponse,
          targetWords: question.targetWords,
          level
        })
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate recording');
      }

      const result: SpeakingEvaluation = await response.json();
      setEvaluation(result);
      onComplete(result);

    } catch (error) {
      console.error('Error evaluating recording:', error);
      alert('Failed to evaluate your recording. Please try again.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <Mic className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Speaking Practice</h2>
            <p className="text-sm text-gray-600">Record your response</p>
          </div>
        </div>

        {/* Prompt */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6 mb-6">
          <p className="text-lg font-semibold text-gray-900 mb-3">{question.prompt}</p>
          
          {question.hints && question.hints.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-semibold text-orange-800">💡 Hints:</p>
              {question.hints.map((hint, i) => (
                <p key={i} className="text-sm text-orange-700">• {hint}</p>
              ))}
            </div>
          )}
        </div>

        {/* Recording Controls */}
        <div className="space-y-6">
          {/* Main Recording Button */}
          {!hasRecorded && !isRecording && (
            <div className="flex flex-col items-center gap-4">
              {micError ? (
                <MicrophonePermissionError
                  error={micError}
                  onRetry={handleRequestPermission}
                  onDismiss={() => setMicError(null)}
                />
              ) : (permissionStatus === 'prompt' || permissionStatus === 'unknown') ? (
                <MicrophonePermissionPrompt
                  onRequest={handleRequestPermission}
                  isRequesting={isRequestingPermission}
                />
              ) : (
                <>
                  <button
                    onClick={startRecording}
                    className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    <Mic className="w-10 h-10" />
                  </button>
                  <p className="text-gray-600 font-semibold">Click to start recording</p>
                </>
              )}
            </div>
          )}

          {/* Recording in Progress */}
          {isRecording && (
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <button
                  onClick={stopRecording}
                  className="w-24 h-24 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-2xl animate-pulse"
                >
                  <Square className="w-10 h-10" />
                </button>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600 animate-pulse">
                  🔴 {formatTime(recordingTime)}
                </p>
                <p className="text-gray-600 font-semibold">Recording... Click to stop</p>
              </div>
            </div>
          )}

          {/* Playback Controls */}
          {hasRecorded && audioUrl && !evaluation && (
            <div className="space-y-4">
              <audio
                ref={audioRef}
                src={audioUrl}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
              />

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={playRecording}
                  className="w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
                </button>

                <button
                  onClick={resetRecording}
                  className="w-16 h-16 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
                >
                  <RotateCcw className="w-6 h-6" />
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={evaluateRecording}
                  disabled={isEvaluating}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center gap-3"
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Evaluating...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>Submit</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Evaluation Results */}
          {evaluation && (
            <div className="space-y-4 animate-slide-in">
              {/* Overall Score */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Your Performance</h3>
                  <div className="text-5xl font-black text-green-600">{evaluation.overallScore}</div>
                </div>

                {/* Score Breakdown */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <ScoreBar label="Pronunciation" score={evaluation.pronunciationScore} />
                  <ScoreBar label="Fluency" score={evaluation.fluencyScore} />
                  <ScoreBar label="Grammar" score={evaluation.grammarScore} />
                  <ScoreBar label="Vocabulary" score={evaluation.vocabularyScore} />
                </div>

                {/* Transcription */}
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">📝 What you said:</p>
                  <p className="text-gray-800 italic">"{evaluation.transcription}"</p>
                </div>

                {/* Feedback */}
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-blue-900 mb-2">💬 Feedback:</p>
                  <p className="text-blue-800">{evaluation.feedback}</p>
                </div>

                {/* Strengths */}
                {evaluation.strengths.length > 0 && (
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold text-green-900 mb-2">✓ Strengths:</p>
                    <ul className="space-y-1">
                      {evaluation.strengths.map((strength, i) => (
                        <li key={i} className="text-sm text-green-800 flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">•</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Improvements */}
                {evaluation.improvements.length > 0 && (
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-orange-900 mb-2">💡 Areas for Improvement:</p>
                    <ul className="space-y-1">
                      {evaluation.improvements.map((improvement, i) => (
                        <li key={i} className="text-sm text-orange-800 flex items-start gap-2">
                          <span className="text-orange-500 mt-0.5">•</span>
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Try Again Button */}
              <div className="flex justify-center">
                <button
                  onClick={resetRecording}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Record Again</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Score Bar Component
function ScoreBar({ label, score }: { label: string; score: number }) {
  const getColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-semibold text-gray-700">{label}</span>
        <span className="text-xs font-bold text-gray-900">{score}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all ${getColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
