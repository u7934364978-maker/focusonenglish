'use client';

import { useState, useRef, useEffect } from 'react';

interface VoiceRecorderProps {
  exerciseId: string;
  prompt: string;
  targetText?: string;
  timeLimit?: number;
  modelAudioUrl?: string;
  hints?: string[];
  onComplete: (audioBlob: Blob, transcript: string) => void;
}

export default function VoiceRecorder({
  exerciseId,
  prompt,
  targetText,
  timeLimit = 180,
  modelAudioUrl,
  hints = [],
  onComplete
}: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [transcript, setTranscript] = useState('');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPlayingModel, setIsPlayingModel] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const recognitionRef = useRef<any>(null);
  const modelAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptPiece = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcriptPiece + ' ';
          }
        }
        if (finalTranscript) {
          setTranscript(prev => prev + finalTranscript);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'no-speech') {
          setError('No se detectó habla. Intenta hablar más cerca del micrófono.');
        }
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Timer
  useEffect(() => {
    if (isRecording && !isPaused) {
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => {
          if (prev >= timeLimit) {
            stopRecording();
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRecording, isPaused, timeLimit]);

  const startRecording = async () => {
    try {
      setError(null);
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
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        
        // Stop speech recognition
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      setTranscript('');

      // Start speech recognition
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }

    } catch (err) {
      console.error('Error accessing microphone:', err);
      setError('No se pudo acceder al micrófono. Por favor, verifica los permisos.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      if (isPaused) {
        mediaRecorderRef.current.resume();
        if (recognitionRef.current) {
          recognitionRef.current.start();
        }
        setIsPaused(false);
      } else {
        mediaRecorderRef.current.pause();
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
        setIsPaused(true);
      }
    }
  };

  const deleteRecording = () => {
    setAudioURL(null);
    setTranscript('');
    setRecordingTime(0);
    audioChunksRef.current = [];
  };

  const submitRecording = () => {
    if (audioURL && audioChunksRef.current.length > 0) {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      onComplete(audioBlob, transcript);
    }
  };

  const playModelAudio = () => {
    if (modelAudioUrl) {
      if (!modelAudioRef.current) {
        modelAudioRef.current = new Audio(modelAudioUrl);
        modelAudioRef.current.onended = () => setIsPlayingModel(false);
      }
      
      if (isPlayingModel) {
        modelAudioRef.current.pause();
        modelAudioRef.current.currentTime = 0;
        setIsPlayingModel(false);
      } else {
        modelAudioRef.current.play();
        setIsPlayingModel(true);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const timeRemaining = timeLimit - recordingTime;
  const progressPercentage = (recordingTime / timeLimit) * 100;

  return (
    <div className="bg-white rounded-xl border-2 border-slate-200 p-6 space-y-6">
      {/* Prompt */}
      <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
        <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
          <span>🎤</span>
          <span>Speaking Exercise</span>
        </h3>
        <p className="text-slate-700">{prompt}</p>
        {targetText && (
          <div className="mt-3 p-3 bg-white rounded border border-blue-200">
            <p className="text-sm font-semibold text-blue-800 mb-1">Target Text:</p>
            <p className="text-slate-700 italic">{targetText}</p>
          </div>
        )}
      </div>

      {/* Model Audio */}
      {modelAudioUrl && (
        <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
          <button
            onClick={playModelAudio}
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
          >
            {isPlayingModel ? (
              <>
                <span>⏸️</span>
                <span>Pause Model</span>
              </>
            ) : (
              <>
                <span>▶️</span>
                <span>Play Model Audio</span>
              </>
            )}
          </button>
          <span className="text-sm text-amber-800">Listen to the model pronunciation first</span>
        </div>
      )}

      {/* Hints */}
      {hints.length > 0 && (
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
            <span>💡</span>
            <span>Hints:</span>
          </h4>
          <ul className="space-y-1">
            {hints.map((hint, index) => (
              <li key={index} className="text-sm text-purple-800 flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">•</span>
                <span>{hint}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recording Controls */}
      <div className="space-y-4">
        {/* Timer and Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-slate-700">
              {isRecording ? 'Recording...' : audioURL ? 'Recording Complete' : 'Ready to Record'}
            </span>
            <span className={`font-mono font-bold ${timeRemaining < 30 && isRecording ? 'text-red-600' : 'text-slate-700'}`}>
              {formatTime(recordingTime)} / {formatTime(timeLimit)}
            </span>
          </div>
          
          {isRecording && (
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  progressPercentage > 90 ? 'bg-red-500' : 
                  progressPercentage > 70 ? 'bg-amber-500' : 'bg-blue-500'
                }`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          )}
        </div>

        {/* Control Buttons */}
        <div className="flex flex-wrap gap-3">
          {!isRecording && !audioURL && (
            <button
              onClick={startRecording}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold shadow-lg"
            >
              <span className="text-xl">🔴</span>
              <span>Start Recording</span>
            </button>
          )}

          {isRecording && (
            <>
              <button
                onClick={pauseRecording}
                className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-bold"
              >
                <span className="text-xl">{isPaused ? '▶️' : '⏸️'}</span>
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </button>
              <button
                onClick={stopRecording}
                className="flex items-center gap-2 px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors font-bold"
              >
                <span className="text-xl">⏹️</span>
                <span>Stop</span>
              </button>
            </>
          )}

          {audioURL && (
            <>
              <button
                onClick={deleteRecording}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold"
              >
                <span className="text-xl">🗑️</span>
                <span>Delete</span>
              </button>
              <button
                onClick={submitRecording}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold shadow-lg"
              >
                <span className="text-xl">✓</span>
                <span>Submit Recording</span>
              </button>
            </>
          )}
        </div>

        {/* Audio Playback */}
        {audioURL && (
          <div className="p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
            <p className="text-sm font-semibold text-slate-700 mb-2">Your Recording:</p>
            <audio src={audioURL} controls className="w-full" />
          </div>
        )}

        {/* Transcript */}
        {transcript && (
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
            <p className="text-sm font-semibold text-green-900 mb-2 flex items-center gap-2">
              <span>📝</span>
              <span>Live Transcript:</span>
            </p>
            <p className="text-slate-700 italic">{transcript}</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200">
            <p className="text-sm font-semibold text-red-900 mb-1">Error:</p>
            <p className="text-red-700">{error}</p>
          </div>
        )}
      </div>

      {/* Recording Indicator */}
      {isRecording && !isPaused && (
        <div className="flex items-center justify-center gap-3 p-4 bg-red-50 rounded-lg border-2 border-red-200 animate-pulse">
          <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse" />
          <span className="font-bold text-red-900">Recording in progress...</span>
        </div>
      )}

      {isPaused && (
        <div className="flex items-center justify-center gap-3 p-4 bg-amber-50 rounded-lg border-2 border-amber-200">
          <span className="text-2xl">⏸️</span>
          <span className="font-bold text-amber-900">Recording paused</span>
        </div>
      )}
    </div>
  );
}
