'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { float32ToInt16, arrayBufferToBase64, base64ToInt16, int16ToFloat32 } from '@/lib/ai/audio-utils';

export interface RealtimeMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  isFinal: boolean;
}

export interface RealtimeState {
  isConnected: boolean;
  isConnecting: boolean;
  isListening: boolean;
  isSpeaking: boolean;
  transcript: RealtimeMessage[];
  error: string | null;
}

export function useRealtimeAI() {
  const [state, setState] = useState<RealtimeState>({
    isConnected: false,
    isConnecting: false,
    isListening: false,
    isSpeaking: false,
    transcript: [],
    error: null,
  });

  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const playbackSourceRef = useRef<AudioBufferSourceNode | null>(null);
  
  // Buffering received audio for smoother playback
  const audioBufferQueue = useRef<Float32Array[]>([]);
  const isPlayingRef = useRef(false);

  const connect = useCallback(async (instructions: string, voice: string = 'shimmer') => {
    if (wsRef.current) return;

    setState(prev => ({ ...prev, isConnecting: true, error: null }));

    try {
      // 1. Get ephemeral token
      const sessionResponse = await fetch('/api/ai-tutor/session', { method: 'POST' });
      if (!sessionResponse.ok) throw new Error('Failed to get session token');
      const sessionData = await sessionResponse.json();
      const clientSecret = sessionData.client_secret.value;

      // 2. Connect to OpenAI Realtime
      const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17";
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        // Authenticate
        ws.send(JSON.stringify({
          type: 'auth.authenticate',
          client_secret: clientSecret
        }));

        // Configure session
        ws.send(JSON.stringify({
          type: 'session.update',
          session: {
            instructions,
            voice,
            input_audio_transcription: { model: 'whisper-1' },
            turn_detection: { type: 'server_vad' }
          }
        }));

        setState(prev => ({ ...prev, isConnected: true, isConnecting: false }));
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        handleServerEvent(data);
      };

      ws.onerror = (err) => {
        console.error('WS Error:', err);
        setState(prev => ({ ...prev, error: 'Connection error', isConnecting: false }));
      };

      ws.onclose = () => {
        cleanup();
        setState(prev => ({ ...prev, isConnected: false, isConnecting: false }));
      };

    } catch (err: any) {
      setState(prev => ({ ...prev, error: err.message, isConnecting: false }));
    }
  }, []);

  const handleServerEvent = (event: any) => {
    switch (event.type) {
      case 'session.created':
        console.log('OpenAI Session Created');
        break;
      
      case 'input_audio_buffer.speech_started':
        setState(prev => ({ ...prev, isListening: true }));
        // Stop AI speaking if user starts talking
        stopPlayback();
        break;

      case 'input_audio_buffer.speech_stopped':
        setState(prev => ({ ...prev, isListening: false }));
        break;

      case 'response.audio.delta':
        // Received audio chunk from AI
        const pcm16Data = base64ToInt16(event.delta);
        const float32Data = int16ToFloat32(pcm16Data);
        queueAudioForPlayback(float32Data);
        break;

      case 'response.audio_transcript.delta':
        updateTranscript('assistant', event.delta, false);
        break;

      case 'response.audio_transcript.done':
        updateTranscript('assistant', event.transcript, true);
        break;

      case 'conversation.item.input_audio_transcription.completed':
        updateTranscript('user', event.transcript, true);
        break;

      case 'error':
        console.error('OpenAI Error Event:', event.error);
        setState(prev => ({ ...prev, error: event.error.message }));
        break;
    }
  };

  const updateTranscript = (role: 'user' | 'assistant', text: string, isFinal: boolean) => {
    setState(prev => {
      const lastMsg = prev.transcript[prev.transcript.length - 1];
      
      if (lastMsg && lastMsg.role === role && !lastMsg.isFinal) {
        // Update existing message
        const updated = [...prev.transcript];
        updated[updated.length - 1] = {
          ...lastMsg,
          text: isFinal ? text : lastMsg.text + text,
          isFinal
        };
        return { ...prev, transcript: updated };
      } else {
        // Add new message
        return {
          ...prev,
          transcript: [...prev.transcript, { id: Math.random().toString(), role, text, isFinal }]
        };
      }
    });
  };

  // --- Audio Input Management ---
  const startRecording = async () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext({ sampleRate: 24000 });
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;

      const source = audioContextRef.current.createMediaStreamSource(stream);
      const processor = audioContextRef.current.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      processor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        const pcm16 = float32ToInt16(inputData);
        
        if (wsRef.current?.readyState === WebSocket.OPEN) {
          wsRef.current.send(JSON.stringify({
            type: 'input_audio_buffer.append',
            audio: arrayBufferToBase64(pcm16.buffer as ArrayBuffer)
          }));
        }
      };

      source.connect(processor);
      processor.connect(audioContextRef.current.destination);
    } catch (err) {
      console.error('Recording error:', err);
    }
  };

  // --- Audio Output Management ---
  const queueAudioForPlayback = (audio: Float32Array) => {
    audioBufferQueue.current.push(audio);
    if (!isPlayingRef.current) {
      processPlaybackQueue();
    }
  };

  const processPlaybackQueue = async () => {
    if (audioBufferQueue.current.length === 0 || !audioContextRef.current) {
      isPlayingRef.current = false;
      setState(prev => ({ ...prev, isSpeaking: false }));
      return;
    }

    isPlayingRef.current = true;
    setState(prev => ({ ...prev, isSpeaking: true }));
    
    const chunk = audioBufferQueue.current.shift()!;
    const audioBuffer = audioContextRef.current.createBuffer(1, chunk.length, 24000);
    audioBuffer.getChannelData(0).set(chunk);

    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContextRef.current.destination);
    
    playbackSourceRef.current = source;
    source.onended = () => processPlaybackQueue();
    source.start();
  };

  const stopPlayback = () => {
    if (playbackSourceRef.current) {
      playbackSourceRef.current.stop();
      playbackSourceRef.current = null;
    }
    audioBufferQueue.current = [];
    isPlayingRef.current = false;
    setState(prev => ({ ...prev, isSpeaking: false }));
  };

  const disconnect = useCallback(() => {
    cleanup();
    setState(prev => ({
      ...prev,
      isConnected: false,
      isConnecting: false,
      isListening: false,
      isSpeaking: false,
    }));
  }, []);

  const cleanup = () => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach(t => t.stop());
      micStreamRef.current = null;
    }
    stopPlayback();
  };

  useEffect(() => {
    return () => cleanup();
  }, []);

  return {
    ...state,
    connect,
    disconnect,
    startRecording,
  };
}
