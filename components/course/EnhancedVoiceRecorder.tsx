'use client';

import { useState, useRef, useEffect } from 'react';

interface EnhancedVoiceRecorderProps {
  exerciseId: string;
  prompt: string;
  targetText?: string;
  timeLimit?: number;
  modelAudioUrl?: string;
  hints?: string[];
  onComplete: (audioBlob: Blob, transcript: string) => void;
}

export default function EnhancedVoiceRecorder({
  exerciseId,
  prompt,
  targetText,
  timeLimit = 180,
  modelAudioUrl,
  hints = [],
  onComplete
}: EnhancedVoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPlayingModel, setIsPlayingModel] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [recordingQuality, setRecordingQuality] = useState<'good' | 'low' | 'none'>('none');

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const recognitionRef = useRef<any>(null);
  const modelAudioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

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
          setError('No speech detected. Try speaking closer to the microphone.');
        }
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
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

  // Audio level visualization
  const updateAudioLevel = () => {
    if (analyserRef.current && isRecording && !isPaused) {
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      analyserRef.current.getByteFrequencyData(dataArray);
      
      const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
      setAudioLevel(average);
      
      // Determine recording quality based on audio level
      if (average > 30) {
        setRecordingQuality('good');
      } else if (average > 10) {
        setRecordingQuality('low');
      } else {
        setRecordingQuality('none');
      }
      
      animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
    }
  };

  const startRecording = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      
      // Setup audio visualization
      audioContextRef.current = new AudioContext();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
      source.connect(analyserRef.current);
      
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
        
        // Stop audio visualization
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
        
        // Close audio context
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      setTranscript('');
      setAudioLevel(0);

      // Start speech recognition
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }
      
      // Start audio level monitoring
      updateAudioLevel();

    } catch (err) {
      console.error('Error accessing microphone:', err);
      setError('Could not access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      setAudioLevel(0);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
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
        updateAudioLevel();
      } else {
        mediaRecorderRef.current.pause();
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
        setIsPaused(true);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      }
    }
  };

  const deleteRecording = () => {
    setAudioURL(null);
    setTranscript('');
    setRecordingTime(0);
    setRecordingQuality('none');
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
  const isLowTime = timeRemaining < 30 && isRecording;

  return (
    <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl border-2 border-orange-200 p-8 space-y-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-peach-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
          🎤
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Speaking Exercise</h3>
          <p className="text-sm text-slate-600">Record your response in English</p>
        </div>
      </div>

      {/* Prompt */}
      <div className="bg-white rounded-xl p-6 border-2 border-orange-200 shadow-md">
        <h4 className="font-bold text-coral-900 mb-3 flex items-center gap-2 text-lg">
          <span>📝</span>
          <span>Your Task</span>
        </h4>
        <p className="text-slate-800 text-lg leading-relaxed">{prompt}</p>
        {targetText && (
          <div className="mt-4 p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
            <p className="text-sm font-bold text-coral-900 mb-2">Target Text:</p>
            <p className="text-slate-700 italic leading-relaxed">{targetText}</p>
          </div>
        )}
      </div>

      {/* Model Audio */}
      {modelAudioUrl && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-300 shadow-md">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔊</span>
              <div>
                <p className="font-bold text-amber-900 text-lg">Model Pronunciation</p>
                <p className="text-sm text-amber-700">Listen first for perfect pronunciation</p>
              </div>
            </div>
            <button
              onClick={playModelAudio}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all font-bold shadow-lg transform hover:scale-105"
            >
              {isPlayingModel ? (
                <>
                  <span className="text-xl">⏸️</span>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <span className="text-xl">▶️</span>
                  <span>Play Model</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Hints */}
      {hints.length > 0 && (
        <div className="bg-gradient-to-r from-peach-50 to-pink-50 rounded-xl p-6 border-2 border-peach-200 shadow-md">
          <h4 className="font-bold text-peach-900 mb-4 flex items-center gap-2 text-lg">
            <span>💡</span>
            <span>Helpful Tips</span>
          </h4>
          <ul className="space-y-3">
            {hints.map((hint, index) => (
              <li key={index} className="flex items-start gap-3 text-peach-800">
                <span className="text-peach-500 text-xl mt-0.5 font-bold">•</span>
                <span className="text-base">{hint}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recording Interface */}
      <div className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-md space-y-6">
        {/* Timer Display */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${
                isRecording && !isPaused ? 'bg-red-500 animate-pulse' : 
                isPaused ? 'bg-amber-500' : 
                audioURL ? 'bg-amber-500' : 'bg-slate-300'
              }`} />
              <span className="font-bold text-slate-900 text-lg">
                {isRecording && !isPaused ? '🔴 Recording...' : 
                 isPaused ? '⏸️ Paused' :
                 audioURL ? '✓ Recording Complete' : '⚪ Ready to Record'}
              </span>
            </div>
            <div className="text-right">
              <div className={`font-mono font-black text-3xl ${isLowTime ? 'text-red-600 animate-pulse' : 'text-slate-900'}`}>
                {formatTime(recordingTime)}
              </div>
              <div className="text-sm text-slate-600 font-semibold">
                {formatTime(timeLimit)} limit
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner">
            <div 
              className={`h-full rounded-full transition-all duration-300 ${
                progressPercentage > 90 ? 'bg-gradient-to-r from-red-500 to-red-600' : 
                progressPercentage > 70 ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 
                'bg-gradient-to-r from-orange-500 to-peach-500'
              }`}
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-md">
              {Math.round(progressPercentage)}%
            </div>
          </div>
          
          {isLowTime && (
            <div className="text-center">
              <p className="text-red-600 font-bold animate-bounce">
                ⏰ Only {timeRemaining} seconds remaining!
              </p>
            </div>
          )}
        </div>

        {/* Audio Level Indicator */}
        {isRecording && !isPaused && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">Microphone Level:</span>
              <span className={`text-sm font-bold ${
                recordingQuality === 'good' ? 'text-amber-600' :
                recordingQuality === 'low' ? 'text-amber-600' :
                'text-red-600'
              }`}>
                {recordingQuality === 'good' ? '✓ Good' :
                 recordingQuality === 'low' ? '⚠ Low' :
                 '✗ No Signal'}
              </span>
            </div>
            
            {/* Visual Audio Level */}
            <div className="flex gap-1 items-end h-16">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-lg transition-all duration-100 ${
                    audioLevel > (i * 12) ? 
                      audioLevel > 180 ? 'bg-red-500' :
                      audioLevel > 120 ? 'bg-amber-500' :
                      'bg-amber-500'
                    : 'bg-slate-200'
                  }`}
                  style={{ 
                    height: audioLevel > (i * 12) ? 
                      `${Math.min((audioLevel / 255) * 100, 100)}%` : 
                      '10%'
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Control Buttons */}
        <div className="flex flex-wrap gap-3">
          {!isRecording && !audioURL && (
            <button
              onClick={startRecording}
              className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all font-bold text-lg shadow-xl transform hover:scale-105"
            >
              <span className="text-2xl">🔴</span>
              <span>Start Recording</span>
            </button>
          )}

          {isRecording && (
            <>
              <button
                onClick={pauseRecording}
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all font-bold shadow-lg transform hover:scale-105"
              >
                <span className="text-xl">{isPaused ? '▶️' : '⏸️'}</span>
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </button>
              <button
                onClick={stopRecording}
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all font-bold shadow-lg transform hover:scale-105"
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
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all font-bold shadow-lg transform hover:scale-105"
              >
                <span className="text-xl">🗑️</span>
                <span>Delete & Retry</span>
              </button>
              <button
                onClick={submitRecording}
                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-amber-600 to-amber-600 text-white rounded-xl hover:from-amber-700 hover:to-amber-700 transition-all font-bold text-lg shadow-xl transform hover:scale-105"
              >
                <span className="text-2xl">✓</span>
                <span>Submit & Get Feedback</span>
              </button>
            </>
          )}
        </div>

        {/* Audio Playback */}
        {audioURL && (
          <div className="p-6 bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl border-2 border-slate-200 shadow-inner">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎧</span>
              <p className="font-bold text-slate-900 text-lg">Your Recording</p>
            </div>
            <audio src={audioURL} controls className="w-full" />
          </div>
        )}

        {/* Live Transcript */}
        {transcript && (
          <div className="p-6 bg-gradient-to-r from-amber-50 to-amber-50 rounded-xl border-2 border-amber-200 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📝</span>
              <div>
                <p className="font-bold text-amber-900 text-lg">Live Transcript</p>
                <p className="text-sm text-amber-700">Real-time speech recognition</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <p className="text-slate-800 leading-relaxed">{transcript}</p>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-amber-700">
              <span>📊</span>
              <span>Word count: <strong>{transcript.trim().split(/\s+/).length}</strong> words</span>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-2 border-red-200 shadow-md">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-bold text-red-900 text-lg mb-1">Error</p>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tips Panel */}
      <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-200">
        <h4 className="font-bold text-coral-900 mb-3 flex items-center gap-2">
          <span>📌</span>
          <span>Recording Tips</span>
        </h4>
        <ul className="space-y-2 text-sm text-coral-800">
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">•</span>
            <span>Speak clearly and at a moderate pace</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">•</span>
            <span>Keep your microphone 6-12 inches from your mouth</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">•</span>
            <span>Monitor the audio level - aim for "Good" quality</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">•</span>
            <span>Listen to the model audio first for reference</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">•</span>
            <span>You can pause and resume if you need a moment to think</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
