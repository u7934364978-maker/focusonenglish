'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Loader2, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface VoiceInterfaceProps {
  onTranscription: (text: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

export const VoiceInterface: React.FC<VoiceInterfaceProps> = ({ 
  onTranscription, 
  isLoading: isProcessing,
  disabled 
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Setup visualization
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

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await handleSTT(audioBlob);
        
        // Cleanup
        stream.getTracks().forEach(track => track.stop());
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      updateAudioLevel();
    } catch (err) {
      console.error('Error starting recording:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  };

  const updateAudioLevel = () => {
    if (analyserRef.current && isRecording) {
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      analyserRef.current.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
      setAudioLevel(average);
      animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
    }
  };

  const handleSTT = async (blob: Blob) => {
    const formData = new FormData();
    formData.append('audio', blob, 'recording.webm');

    try {
      const response = await fetch('/api/ai-lab/stt', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.transcription) {
        onTranscription(data.transcription);
      }
    } catch (err) {
      console.error('STT failed:', err);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {isRecording && (
        <div className="flex items-center gap-1 h-8 px-4 bg-red-50 rounded-full border border-red-100">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [4, Math.max(4, audioLevel * (0.5 + Math.random())), 4] }}
              transition={{ duration: 0.2, repeat: Infinity }}
              className="w-1 bg-red-500 rounded-full"
            />
          ))}
        </div>
      )}
      
      <button
        onClick={isRecording ? stopRecording : startRecording}
        disabled={disabled || isProcessing}
        className={`p-4 rounded-full transition-all shadow-lg ${
          isRecording 
            ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' 
            : 'bg-slate-900 hover:bg-slate-800 text-white'
        } disabled:opacity-50`}
      >
        {isProcessing ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : isRecording ? (
          <Square className="w-6 h-6 fill-current" />
        ) : (
          <Mic className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};
