import React from 'react';
import { GLOBAL_LEXICON } from '@/lib/course/engine/lexicon';

interface TranslatedTextProps {
  text: string;
  className?: string;
  useStrong?: boolean;
}

export const TranslatedText: React.FC<TranslatedTextProps> = ({ text, className, useStrong = false }) => {
  if (!text) return null;

  // Sort lexicon by lemma length descending to match longer phrases first (e.g., "wake up" before "wake")
  const sortedLexicon = [...GLOBAL_LEXICON].sort((a, b) => b.lemma.length - a.lemma.length);

  let parts: (string | React.ReactNode)[] = [text];

  sortedLexicon.forEach((item) => {
    const newParts: (string | React.ReactNode)[] = [];
    
    // Match lemma or plural (if exists)
    const patterns = [item.lemma];
    if (item.plural) patterns.push(item.plural);
    
    // Escape patterns for regex
    const escapedPatterns = patterns.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`\\b(${escapedPatterns.join('|')})\\b`, 'gi');

    parts.forEach((part) => {
      if (typeof part !== 'string') {
        newParts.push(part);
        return;
      }

      const splitText = part.split(regex);
      splitText.forEach((t, i) => {
        // Check if t matches one of our patterns (case insensitive)
        const isMatch = patterns.some(p => p.toLowerCase() === t.toLowerCase());
        
        if (isMatch) {
          newParts.push(
            <span key={`${item.lemma}-${i}`} className="group relative inline-block border-b border-dotted border-slate-400 cursor-help">
              <span className={useStrong ? "font-bold" : ""}>{t}</span>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[100] shadow-xl border border-slate-700">
                <span className="block font-black text-indigo-400 mb-0.5 uppercase tracking-tighter text-[9px]">
                  {item.lemma} {item.pos && `(${item.pos})`}
                </span>
                {item.translation}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></span>
              </span>
            </span>
          );
        } else if (t) {
          newParts.push(t);
        }
      });
    });
    parts = newParts;
  });

  return <span className={className}>{parts}</span>;
};
