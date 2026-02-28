'use client';

import React, { useMemo } from 'react';
import { GLOBAL_LEXICON } from '@/lib/course/engine/lexicon';
import AudioButton from '../AudioButton';

interface TranslatedTextProps {
  text: string;
  className?: string;
  useStrong?: boolean;
}

// Module-level cache for the regex and map to avoid recomputing if not needed
let cachedLexiconMap: Map<string, string> | null = null;
let cachedLexiconRegexPattern: string | null = null;

function getLexiconData() {
  if (cachedLexiconMap && cachedLexiconRegexPattern) {
    return { lexiconMap: cachedLexiconMap, lexiconRegexPattern: cachedLexiconRegexPattern };
  }

  const lexiconMap = new Map<string, string>();
  if (GLOBAL_LEXICON) {
    GLOBAL_LEXICON.forEach(item => {
      lexiconMap.set(item.lemma.toLowerCase(), item.translation);
      if (item.plural) {
        lexiconMap.set(item.plural.toLowerCase(), item.translation);
      }
    });
  }

  const sortedLexiconWords = Array.from(lexiconMap.keys()).sort((a, b) => b.length - a.length);
  
  const lexiconRegexPattern = sortedLexiconWords.length > 0 
    ? `\\b(${sortedLexiconWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`
    : null;

  cachedLexiconMap = lexiconMap;
  cachedLexiconRegexPattern = lexiconRegexPattern;

  return { lexiconMap, lexiconRegexPattern };
}

export const TranslatedText: React.FC<TranslatedTextProps> = ({ text, className, useStrong = false }) => {
  const { lexiconMap, lexiconRegexPattern } = useMemo(() => getLexiconData(), []);

  if (!text || typeof text !== 'string') return text;

  // 1. Handle explicit translations: [[word|translation]] or [[word]]
  const explicitRegex = /\[\[(.*?)(?:\|(.*?))?\]\]/g;
  const parts: (string | React.ReactNode)[] = [];
  
  let lastIndex = 0;
  let match;
  
  while ((match = explicitRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const word = match[1];
    const translation = match[2] || word;

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

    if (!lexiconRegexPattern) {
      finalParts.push(part);
      return;
    }

    // Create a local regex instance to be thread-safe (render-safe)
    const localLexiconRegex = new RegExp(lexiconRegexPattern, 'gi');
    let currentLastIndex = 0;
    let lexiconMatch;
    
    while ((lexiconMatch = localLexiconRegex.exec(part)) !== null) {
      if (lexiconMatch.index > currentLastIndex) {
        finalParts.push(part.substring(currentLastIndex, lexiconMatch.index));
      }

      const word = lexiconMatch[0];
      const translation = lexiconMap.get(word.toLowerCase()) || word;

      finalParts.push(
        <Tooltip key={`lexicon-${partIndex}-${lexiconMatch.index}`} word={word} translation={translation} useStrong={useStrong} />
      );
      currentLastIndex = localLexiconRegex.lastIndex;
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
  <span className="group relative inline-block border-b-2 border-dotted border-indigo-300 hover:border-indigo-500 cursor-help mx-0.5 transition-all duration-200 hover:z-[110]">
    <span className={useStrong ? "font-bold text-indigo-700 dark:text-indigo-400" : "text-indigo-600 dark:text-indigo-400 font-medium"}>
      {word}
    </span>
    <span 
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[220px] p-3 bg-slate-900 text-white text-xs rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] shadow-2xl border border-slate-700 transform translate-y-1 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto" 
      aria-hidden="true"
    >
      <span className="flex items-center justify-between gap-3 mb-2">
        <span className="block font-black text-indigo-400 uppercase tracking-widest text-[10px] truncate">
          {word}
        </span>
        <AudioButton text={word} size="sm" className="bg-slate-800 hover:bg-slate-700 text-indigo-400 border-none scale-75" />
      </span>
      <span className="block text-slate-200 leading-snug font-medium text-sm">
        {translation}
      </span>
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900"></span>
      {/* Invisible bridge to handle the gap between word and tooltip */}
      <div className="absolute top-full left-0 right-0 h-4" />
    </span>
  </span>
);
