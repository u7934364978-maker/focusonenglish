'use client';

import React, { useState } from 'react';
import { Volume2, Loader2 } from 'lucide-react';

interface AudioButtonProps {
  text: string;
  voiceId?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function AudioButton({ 
  text, 
  voiceId, 
  className = '', 
  size = 'sm' 
}: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playAudio = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isPlaying) {
      audio?.pause();
      if (audio) audio.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    if (audio) {
      audio.play();
      setIsPlaying(true);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/ai-tutor/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          voiceId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate audio');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const newAudio = new Audio(audioUrl);
      
      newAudio.onended = () => {
        setIsPlaying(false);
      };

      setAudio(newAudio);
      newAudio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing audio:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const sizeClasses = {
    sm: 'p-1 h-6 w-6',
    md: 'p-1.5 h-8 w-8',
    lg: 'p-2 h-10 w-10',
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 24,
  };

  return (
    <button
      onClick={playAudio}
      disabled={isLoading}
      className={`inline-flex items-center justify-center rounded-full transition-all bg-indigo-100 hover:bg-indigo-200 text-indigo-600 disabled:opacity-50 ${sizeClasses[size]} ${className}`}
      title={`Listen to "${text}"`}
    >
      {isLoading ? (
        <Loader2 className="animate-spin" size={iconSizes[size]} />
      ) : (
        <Volume2 size={iconSizes[size]} className={isPlaying ? 'animate-pulse' : ''} />
      )}
    </button>
  );
}
