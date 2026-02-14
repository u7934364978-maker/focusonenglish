import React from 'react';
import { GLOBAL_LEXICON } from '@/lib/course/engine/lexicon';

interface TranslatedTextProps {
  text: string;
  className?: string;
  useStrong?: boolean;
}

// Pre-process lexicon for faster matching
// We do this once at the module level
const lexiconMap = new Map<string, string>();
GLOBAL_LEXICON.forEach(item => {
  lexiconMap.set(item.lemma.toLowerCase(), item.translation);
  if (item.plural) {
    lexiconMap.set(item.plural.toLowerCase(), item.translation);
  }
});

// Sort by length descending to match longer phrases first (e.g., "orange juice" before "orange")
const sortedLexiconWords = Array.from(lexiconMap.keys()).sort((a, b) => b.length - a.length);

// Create a single regex for all lexicon words
// Using word boundaries \b to avoid matching parts of words
// Escape special characters in words
const lexiconRegex = sortedLexiconWords.length > 0 
  ? new RegExp(`\\b(${sortedLexiconWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi')
  : null;

export const TranslatedText: React.FC<TranslatedTextProps> = ({ text, className, useStrong = false }) => {
  if (!text) return null;

  // 1. Handle explicit translations: [[word|translation]]
  const explicitRegex = /\[\[(.*?)\|(.*?)\]\]/g;
  const parts: (string | React.ReactNode)[] = [];
  
  let lastIndex = 0;
  let match;
  
  while ((match = explicitRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const word = match[1];
    const translation = match[2];

    parts.push(
      <Tooltip key={`explicit-${match.index}`} word={word} translation={translation} useStrong={useStrong} />
    );
    lastIndex = explicitRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // 2. Process remaining text parts for Lexicon matches
  const finalParts: React.ReactNode[] = [];
  
  parts.forEach((part, partIndex) => {
    if (typeof part !== 'string') {
      finalParts.push(part);
      return;
    }

    if (!lexiconRegex) {
      finalParts.push(part);
      return;
    }

    let currentLastIndex = 0;
    let lexiconMatch;
    
    // Reset regex lastIndex because it's global
    lexiconRegex.lastIndex = 0;

    while ((lexiconMatch = lexiconRegex.exec(part)) !== null) {
      if (lexiconMatch.index > currentLastIndex) {
        finalParts.push(part.substring(currentLastIndex, lexiconMatch.index));
      }

      const word = lexiconMatch[0];
      const translation = lexiconMap.get(word.toLowerCase()) || word;

      finalParts.push(
        <Tooltip key={`lexicon-${partIndex}-${lexiconMatch.index}`} word={word} translation={translation} useStrong={useStrong} />
      );
      currentLastIndex = lexiconRegex.lastIndex;
    }

    if (currentLastIndex < part.length) {
      finalParts.push(part.substring(currentLastIndex));
    }
  });

  return <span className={className}>{finalParts}</span>;
};

interface TooltipProps {
  word: string;
  translation: string;
  useStrong?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ word, translation, useStrong }) => (
  <span className="group relative inline-block border-b border-dotted border-slate-400 cursor-help mx-0.5">
    <span className={useStrong ? "font-bold text-indigo-600" : "text-indigo-600"}>{word}</span>
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[100] shadow-xl border border-slate-700" aria-hidden="true">
      <span className="block font-black text-indigo-400 mb-0.5 uppercase tracking-tighter text-[9px]">
        {word}
      </span>
      {translation}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></span>
    </span>
  </span>
);
