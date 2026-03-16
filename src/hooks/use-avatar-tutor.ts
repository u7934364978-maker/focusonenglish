'use client';

import { useState, useRef, useCallback } from 'react';
import type { OrbState } from '@/components/tutor/AvatarOrb';

export interface TutorMessage {
  id: string;
  role: 'user' | 'tutor';
  text: string;
}

export interface TutorFeedback {
  original: string;
  correction: string;
  explanation: string;
}

interface UseTutorConfig {
  tutorId: string;
  tutorGender: 'male' | 'female';
  level: string;
  topic: string;
}

export function useAvatarTutor(config: UseTutorConfig) {
  const [orbState, setOrbState] = useState<OrbState>('idle');
  const [messages, setMessages] = useState<TutorMessage[]>([]);
  const [feedback, setFeedback] = useState<TutorFeedback | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const historyRef = useRef<{ role: string; content: string }[]>([]);

  const unlockAudio = useCallback(async () => {
    try {
      const ctx = new AudioContext();
      await ctx.resume();
      ctx.close();
    } catch { /* ignore */ }
  }, []);

  const playAudioBase64 = useCallback((base64: string): Promise<void> => {
    return new Promise((resolve) => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(`data:audio/mpeg;base64,${base64}`);
      audioRef.current = audio;
      setOrbState('speaking');
      audio.onended = () => {
        setOrbState('idle');
        resolve();
      };
      audio.onerror = () => {
        setOrbState('idle');
        resolve();
      };
      audio.play().catch(() => {
        setOrbState('idle');
        resolve();
      });
    });
  }, []);

  const start = useCallback(async () => {
    setError(null);
    setMessages([]);
    setFeedback(null);
    historyRef.current = [];
    setOrbState('thinking');

    try {
      const res = await fetch('/api/tutor-avatar/greet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tutorId: config.tutorId,
          tutorGender: config.tutorGender,
          topic: config.topic,
        }),
      });
      if (!res.ok) throw new Error('Failed to greet');
      const { greeting, audioBase64 } = await res.json();

      const id = crypto.randomUUID();
      setMessages([{ id, role: 'tutor', text: greeting }]);
      historyRef.current = [{ role: 'assistant', content: greeting }];

      setIsActive(true);
      await playAudioBase64(audioBase64);
    } catch (e: any) {
      setError(e.message);
      setOrbState('idle');
    }
  }, [config, playAudioBase64]);

  const startListening = useCallback(async () => {
    if (orbState !== 'idle') return;
    setError(null);
    await unlockAudio();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });

        setOrbState('thinking');

        try {
          const base64 = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
            reader.readAsDataURL(blob);
          });

          const res = await fetch('/api/tutor-avatar/turn', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              audioBase64: base64,
              history: historyRef.current,
              tutorId: config.tutorId,
              tutorGender: config.tutorGender,
              level: config.level,
              topic: config.topic,
            }),
          });

          if (!res.ok) throw new Error('Turn failed');
          const { transcription, reply, feedback: fb, audioBase64: replyAudio } = await res.json();

          const userId = crypto.randomUUID();
          const tutorId2 = crypto.randomUUID();

          setMessages((prev) => [
            ...prev,
            { id: userId, role: 'user', text: transcription },
            { id: tutorId2, role: 'tutor', text: reply },
          ]);

          historyRef.current = [
            ...historyRef.current,
            { role: 'user', content: transcription },
            { role: 'assistant', content: reply },
          ];

          if (fb) setFeedback(fb);
          else setFeedback(null);

          await playAudioBase64(replyAudio);
        } catch (e: any) {
          setError(e.message);
          setOrbState('idle');
        }
      };

      mediaRecorder.start();
      setOrbState('listening');
    } catch (e: any) {
      setError('No se pudo acceder al micrófono. Revisa los permisos.');
      setOrbState('idle');
    }
  }, [orbState, config, playAudioBase64]);

  const stopListening = useCallback(() => {
    if (mediaRecorderRef.current && orbState === 'listening') {
      mediaRecorderRef.current.stop();
    }
  }, [orbState]);

  const stop = useCallback(() => {
    if (audioRef.current) audioRef.current.pause();
    if (mediaRecorderRef.current) {
      try { mediaRecorderRef.current.stop(); } catch { /* ignore */ }
    }
    setIsActive(false);
    setOrbState('idle');
    historyRef.current = [];
  }, []);

  return {
    orbState,
    messages,
    feedback,
    error,
    isActive,
    start,
    startListening,
    stopListening,
    stop,
    unlockAudio,
  };
}
