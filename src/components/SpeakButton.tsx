'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Volume2, Loader2 } from 'lucide-react';

function extractEnglish(text: string): string {
  return text
    .replace(/\[\[(.*?)\|(.*?)\]\]/g, '$1')
    .replace(/\[\[(.*?)\]\]/g, '$1')
    .replace(/[[\]]/g, '')
    .trim();
}

export default function SpeakButton({
  text,
  className = '',
  size = 'sm',
}: {
  text: string;
  className?: string;
  size?: 'sm' | 'md';
}) {
  const english = extractEnglish(text);
  const [loading, setLoading] = useState(false);
  const blobUrlRef = useRef<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const stopAndRevoke = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      stopAndRevoke();
    };
  }, [stopAndRevoke]);

  const speak = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!english || loading) return;

    abortRef.current?.abort();
    abortRef.current = new AbortController();
    const { signal } = abortRef.current;

    stopAndRevoke();
    setLoading(true);

    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: english }),
        signal,
      });
      if (!res.ok) throw new Error('TTS failed');
      const blob = await res.blob();
      if (signal.aborted) return;
      const url = URL.createObjectURL(blob);
      blobUrlRef.current = url;
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        stopAndRevoke();
      };
      await audio.play();
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
      console.error('SpeakButton TTS:', err);
    } finally {
      if (!signal.aborted) setLoading(false);
    }
  };

  if (!english) return null;

  const sz = size === 'sm' ? 'p-1 h-6 w-6' : 'p-1.5 h-8 w-8';
  const ic = size === 'sm' ? 13 : 17;
  const preview = english.length > 48 ? `${english.slice(0, 48)}…` : english;

  return (
    <button
      onClick={speak}
      type="button"
      disabled={loading}
      title={loading ? 'Generando audio…' : `Escuchar (voz modelo): "${preview}"`}
      className={`inline-flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 text-blue-500 transition-colors flex-shrink-0 disabled:opacity-70 ${sz} ${className}`}
    >
      {loading ? (
        <Loader2 size={ic} className="animate-spin" aria-hidden />
      ) : (
        <Volume2 size={ic} aria-hidden />
      )}
    </button>
  );
}
