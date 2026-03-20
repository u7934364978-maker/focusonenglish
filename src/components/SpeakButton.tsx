'use client';

import { Volume2 } from 'lucide-react';

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

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(english);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  if (!english) return null;

  const sz = size === 'sm' ? 'p-1 h-6 w-6' : 'p-1.5 h-8 w-8';
  const ic = size === 'sm' ? 13 : 17;

  return (
    <button
      onClick={speak}
      type="button"
      title={`Escuchar pronunciación: "${english}"`}
      className={`inline-flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 text-blue-500 transition-colors flex-shrink-0 ${sz} ${className}`}
    >
      <Volume2 size={ic} />
    </button>
  );
}
