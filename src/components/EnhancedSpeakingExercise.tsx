'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Mic, Square, Play, Pause, RotateCcw, Volume2, Loader2, CheckCircle, 
  AlertCircle, Headphones, Activity, Clock, Target, TrendingUp, Award,
  Zap, Eye, EyeOff
} from 'lucide-react';
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
  modelAudioUrl?: string;
  timeLimit?: number;
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
  wordsPerMinute?: number;
  pauseCount?: number;
  recordingDuration?: number;
}

interface EnhancedSpeakingExerciseProps {
  question: SpeakingQuestion;
  onComplete: (evaluation: SpeakingEvaluation) => void;
  level: string;
}

export default function EnhancedSpeakingExercise({ question, onComplete, level }: EnhancedSpeakingExerciseProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingModel, setIsPlayingModel] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<SpeakingEvaluation | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [micError, setMicError] = useState<MicrophoneError | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<'unknown' | 'granted' | 'denied' | 'prompt'>('unknown');
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [attemptNumber, setAttemptNumber] = useState(1);
  const [volumeLevel, setVolumeLevel] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const modelAudioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Check initial permission status
    checkMicrophonePermission().then(status => {
      if (status !== 'unsupported') {
        setPermissionStatus(status);
      }
    });

    // Initialize Web Speech API if available
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        setLiveTranscript(finalTranscript + interimTranscript);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsTranscribing(false);
      };
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      if (recognitionRef.current) recognitionRef.current.stop();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, [audioUrl]);

  const visualizeAudio = (stream: MediaStream) => {
    audioContextRef.current = new AudioContext();
    analyserRef.current = audioContextRef.current.createAnalyser();
    const source = audioContextRef.current.createMediaStreamSource(stream);
    source.connect(analyserRef.current);
    analyserRef.current.fftSize = 256;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const updateVolume = () => {
      if (!analyserRef.current) return;
      
      analyserRef.current.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((a, b) => a + b) / bufferLength;
      setVolumeLevel(Math.min(100, average));
      
      animationRef.current = requestAnimationFrame(updateVolume);
    };

    updateVolume();
  };

  const handleRequestPermission = async () => {
    setIsRequestingPermission(true);
    setMicError(null);

    const result = await requestMicrophonePermission();

    setIsRequestingPermission(false);

    if (result.granted && result.stream) {
      setPermissionStatus('granted');
      // Release the stream immediately, we'll request again when recording
      releaseMicrophoneStream(result.stream);
    } else if (result.error) {
      setMicError(result.error);
      setPermissionStatus('denied');
    }
  };

  const startRecording = async () => {
    try {
      setMicError(null);

      // Request permission with comprehensive error handling
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

      // Start audio visualization
      visualizeAudio(stream);

      // Start speech recognition
      if (recognitionRef.current) {
        setLiveTranscript('');
        setIsTranscribing(true);
        try {
          recognitionRef.current.start();
        } catch (e) {
          console.log('Recognition already started or error:', e);
        }
      }

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

        // Stop speech recognition
        if (recognitionRef.current) {
          try {
            recognitionRef.current.stop();
          } catch (e) {
            console.log('Recognition already stopped:', e);
          }
          setIsTranscribing(false);
        }

        // Stop audio visualization
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          setVolumeLevel(0);
        }
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => {
          const newTime = prev + 1;
          // Auto-stop at time limit
          if (question.timeLimit && newTime >= question.timeLimit) {
            stopRecording();
          }
          return newTime;
        });
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
    setLiveTranscript('');
    setAttemptNumber(prev => prev + 1);
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

  const playModelAudio = () => {
    if (modelAudioRef.current) {
      if (isPlayingModel) {
        modelAudioRef.current.pause();
      } else {
        modelAudioRef.current.play();
      }
      setIsPlayingModel(!isPlayingModel);
    }
  };

  const evaluateRecording = async () => {
    if (!audioBlob) return;

    setIsEvaluating(true);

    try {
      const reader = new FileReader();
      const audioBase64 = await new Promise<string>((resolve) => {
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(',')[1];
          resolve(base64);
        };
        reader.readAsDataURL(audioBlob);
      });

      const response = await fetch('/api/evaluate-speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audioBase64,
          prompt: question.prompt,
          expectedResponse: question.expectedResponse,
          targetWords: question.targetWords,
          level,
          liveTranscript,
          recordingDuration: recordingTime
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

  const getProgressColor = (percent: number) => {
    if (!question.timeLimit) return 'bg-blue-500';
    if (percent > 90) return 'bg-red-500';
    if (percent > 70) return 'bg-orange-500';
    return 'bg-green-500';
  };

  const timePercent = question.timeLimit ? (recordingTime / question.timeLimit) * 100 : 0;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header with Model Audio */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <Mic className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Speaking Practice</h2>
              <p className="text-orange-100">Intento #{attemptNumber} • {level}</p>
            </div>
          </div>
          
          {question.modelAudioUrl && (
            <div className="flex items-center gap-3">
              <audio
                ref={modelAudioRef}
                src={question.modelAudioUrl}
                onPlay={() => setIsPlayingModel(true)}
                onPause={() => setIsPlayingModel(false)}
                onEnded={() => setIsPlayingModel(false)}
                preload="metadata"
              />
              <button
                onClick={playModelAudio}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur px-6 py-3 rounded-xl transition-all font-semibold"
              >
                {isPlayingModel ? (
                  <>
                    <Pause className="w-5 h-5" />
                    <span>Pausar Modelo</span>
                  </>
                ) : (
                  <>
                    <Headphones className="w-5 h-5" />
                    <span>Escuchar Modelo</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Time Limit Progress */}
        {question.timeLimit && isRecording && (
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Tiempo restante</span>
              <span className="text-lg font-bold">{formatTime(question.timeLimit - recordingTime)}</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${getProgressColor(timePercent)}`}
                style={{ width: `${Math.min(100, timePercent)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column: Prompt & Hints */}
        <div className="space-y-6">
          {/* Prompt Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-200">
            <div className="flex items-start gap-3 mb-4">
              <Target className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tu tarea:</h3>
                <p className="text-gray-800 leading-relaxed">{question.prompt}</p>
              </div>
            </div>

            {question.timeLimit && (
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 rounded-lg p-3">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Tiempo sugerido: <strong>{formatTime(question.timeLimit)}</strong></span>
              </div>
            )}

            {question.expectedResponse && (
              <div className="mt-6 p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Frase a repetir:</h4>
                <p className="text-2xl font-black text-slate-800 leading-tight">
                  {question.expectedResponse}
                </p>
              </div>
            )}
          </div>

          {/* Target Words */}
          {question.targetWords && question.targetWords.length > 0 && (
            <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-purple-900">Palabras clave a usar:</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {question.targetWords.map((word, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold text-sm border border-purple-300"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Hints */}
          {question.hints && question.hints.length > 0 && (
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
              <button
                onClick={() => setShowHints(!showHints)}
                className="flex items-center justify-between w-full mb-3"
              >
                <div className="flex items-center gap-2">
                  {showHints ? <EyeOff className="w-5 h-5 text-amber-700" /> : <Eye className="w-5 h-5 text-amber-700" />}
                  <h3 className="font-bold text-amber-900">Consejos útiles</h3>
                </div>
                <span className="text-sm text-amber-700">
                  {showHints ? 'Ocultar' : 'Mostrar'} ({question.hints.length})
                </span>
              </button>
              
              {showHints && (
                <ul className="space-y-2">
                  {question.hints.map((hint, i) => (
                    <li key={i} className="flex items-start gap-2 text-amber-800">
                      <span className="text-amber-500 mt-1">💡</span>
                      <span className="text-sm">{hint}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Recording Interface */}
        <div className="space-y-6">
          {/* Recording Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 min-h-[400px] flex flex-col">
            {/* Not Recording State */}
            {!hasRecorded && !isRecording && (
              <div className="flex-1 flex flex-col items-center justify-center gap-6">
                {micError ? (
                  <MicrophonePermissionError
                    error={micError}
                    onRetry={handleRequestPermission}
                    onDismiss={() => setMicError(null)}
                  />
                ) : permissionStatus === 'prompt' || permissionStatus === 'unknown' ? (
                  <MicrophonePermissionPrompt
                    onRequest={handleRequestPermission}
                    isRequesting={isRequestingPermission}
                  />
                ) : (
                  <>
                    <button
                      onClick={startRecording}
                      className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 shadow-2xl group"
                    >
                      <Mic className="w-14 h-14 group-hover:scale-110 transition-transform" />
                    </button>
                    
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900 mb-1">Presiona para grabar</p>
                      <p className="text-sm text-gray-600">Habla claramente cerca del micrófono</p>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Recording in Progress */}
            {isRecording && (
              <div className="flex-1 flex flex-col items-center justify-center gap-6">
                <div className="relative">
                  <button
                    onClick={stopRecording}
                    className="w-32 h-32 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 shadow-2xl"
                  >
                    <Square className="w-14 h-14" />
                  </button>
                  
                  {/* Animated recording indicator */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full animate-ping"></div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Recording Timer */}
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600 mb-2 animate-pulse">
                    🔴 {formatTime(recordingTime)}
                  </p>
                  <p className="text-gray-600 font-semibold">Presiona para detener</p>
                </div>

                {/* Volume Indicator */}
                <div className="w-full max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Volume2 className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600 font-medium">Nivel de voz</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 transition-all duration-100"
                      style={{ width: `${volumeLevel}%` }}
                    />
                  </div>
                </div>

                {/* Live Transcription */}
                {liveTranscript && (
                  <div className="w-full bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
                      <p className="text-xs font-semibold text-blue-900">Transcripción en vivo:</p>
                    </div>
                    <p className="text-sm text-blue-800 italic">"{liveTranscript}"</p>
                  </div>
                )}
              </div>
            )}

            {/* Playback Controls */}
            {hasRecorded && audioUrl && !evaluation && (
              <div className="flex-1 flex flex-col justify-between">
                <audio
                  ref={audioRef}
                  src={audioUrl}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  preload="metadata"
                />

                <div className="flex-1 flex flex-col items-center justify-center gap-6">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={playRecording}
                      className="w-20 h-20 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 shadow-lg"
                    >
                      {isPlaying ? <Pause className="w-9 h-9" /> : <Play className="w-9 h-9 ml-1" />}
                    </button>

                    <button
                      onClick={resetRecording}
                      className="w-20 h-20 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
                    >
                      <RotateCcw className="w-7 h-7" />
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-900 font-bold text-lg mb-1">Grabación completada</p>
                    <p className="text-gray-600">Duración: {formatTime(recordingTime)}</p>
                  </div>

                  {/* Live Transcript Preview */}
                  {liveTranscript && (
                    <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <p className="text-xs font-semibold text-slate-700 mb-1">📝 Lo que dijiste:</p>
                      <p className="text-sm text-slate-600 italic">"{liveTranscript}"</p>
                    </div>
                  )}
                </div>

                <button
                  onClick={evaluateRecording}
                  disabled={isEvaluating}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-5 rounded-xl text-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl flex items-center justify-center gap-3"
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="w-7 h-7 animate-spin" />
                      <span>Evaluando tu pronunciación...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-7 h-7" />
                      <span>Evaluar mi Speaking</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Evaluation Results */}
      {evaluation && (
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-green-300 animate-slide-in">
          {/* Overall Score Banner */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-8 mb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-2">¡Excelente trabajo!</h3>
                <p className="text-green-100">Aquí está tu evaluación detallada</p>
              </div>
              <div className="flex items-center gap-4">
                <Award className="w-16 h-16 text-yellow-300" />
                <div className="text-right">
                  <p className="text-6xl font-black">{evaluation.overallScore}</p>
                  <p className="text-green-100 text-sm">de 100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <MetricCard 
              icon={<Volume2 />}
              label="Pronunciación" 
              score={evaluation.pronunciationScore}
              color="blue"
            />
            <MetricCard 
              icon={<TrendingUp />}
              label="Fluidez" 
              score={evaluation.fluencyScore}
              color="purple"
            />
            <MetricCard 
              icon={<CheckCircle />}
              label="Gramática" 
              score={evaluation.grammarScore}
              color="green"
            />
            <MetricCard 
              icon={<Target />}
              label="Vocabulario" 
              score={evaluation.vocabularyScore}
              color="orange"
            />
          </div>

          {/* Additional Stats */}
          {(evaluation.wordsPerMinute || evaluation.pauseCount !== undefined) && (
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {evaluation.wordsPerMinute && (
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <p className="text-sm font-semibold text-indigo-900">Velocidad</p>
                  </div>
                  <p className="text-2xl font-bold text-indigo-600">{evaluation.wordsPerMinute} <span className="text-sm font-normal">PPM</span></p>
                  <p className="text-xs text-indigo-700 mt-1">Palabras por minuto</p>
                </div>
              )}
              {evaluation.pauseCount !== undefined && (
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Pause className="w-4 h-4 text-pink-600" />
                    <p className="text-sm font-semibold text-pink-900">Pausas</p>
                  </div>
                  <p className="text-2xl font-bold text-pink-600">{evaluation.pauseCount}</p>
                  <p className="text-xs text-pink-700 mt-1">Pausas prolongadas detectadas</p>
                </div>
              )}
              {evaluation.recordingDuration && (
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <p className="text-sm font-semibold text-teal-900">Duración</p>
                  </div>
                  <p className="text-2xl font-bold text-teal-600">{formatTime(evaluation.recordingDuration)}</p>
                  <p className="text-xs text-teal-700 mt-1">Tiempo total grabado</p>
                </div>
              )}
            </div>
          )}

          {/* Transcription */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-slate-600" />
              <h4 className="font-bold text-slate-900">📝 Transcripción de tu respuesta:</h4>
            </div>
            <p className="text-slate-800 text-lg italic leading-relaxed">"{evaluation.transcription}"</p>
          </div>

          {/* Target Words Analysis */}
          {(evaluation.detectedWords.length > 0 || evaluation.missedWords.length > 0) && (
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {evaluation.detectedWords.length > 0 && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-green-900">✓ Palabras clave usadas:</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {evaluation.detectedWords.map((word, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm border border-green-300"
                      >
                        ✓ {word}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {evaluation.missedWords.length > 0 && (
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    <h4 className="font-bold text-orange-900">Palabras clave no usadas:</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {evaluation.missedWords.map((word, i) => (
                      <span
                        key={i}
                        className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold text-sm border border-orange-300"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Feedback */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">💬</span>
              <h4 className="font-bold text-blue-900">Feedback general:</h4>
            </div>
            <p className="text-blue-800 leading-relaxed">{evaluation.feedback}</p>
          </div>

          {/* Strengths & Improvements */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {evaluation.strengths.length > 0 && (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🎯</span>
                  <h4 className="font-bold text-green-900">Fortalezas:</h4>
                </div>
                <ul className="space-y-2">
                  {evaluation.strengths.map((strength, i) => (
                    <li key={i} className="flex items-start gap-2 text-green-800">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {evaluation.improvements.length > 0 && (
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💡</span>
                  <h4 className="font-bold text-orange-900">Áreas de mejora:</h4>
                </div>
                <ul className="space-y-2">
                  {evaluation.improvements.map((improvement, i) => (
                    <li key={i} className="flex items-start gap-2 text-orange-800">
                      <TrendingUp className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={resetRecording}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg"
            >
              <RotateCcw className="w-6 h-6" />
              <span>Intentar de nuevo</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Metric Card Component
function MetricCard({ icon, label, score, color }: { 
  icon: React.ReactNode; 
  label: string; 
  score: number; 
  color: 'blue' | 'purple' | 'green' | 'orange';
}) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-600',
    purple: 'bg-purple-50 border-purple-200 text-purple-600',
    green: 'bg-green-50 border-green-200 text-green-600',
    orange: 'bg-orange-50 border-orange-200 text-orange-600'
  };

  const barColors = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500'
  };

  return (
    <div className={`${colorClasses[color]} border-2 rounded-xl p-5`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">{icon}</div>
          <p className="font-bold text-gray-900">{label}</p>
        </div>
        <p className="text-3xl font-black">{score}</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`${barColors[color]} h-full transition-all duration-1000 ease-out`}
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="text-xs text-gray-600 mt-1 text-right">{score >= 80 ? 'Excelente' : score >= 60 ? 'Bien' : 'Mejorable'}</p>
    </div>
  );
}
