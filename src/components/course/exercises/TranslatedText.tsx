'use client';

/**
 * TranslatedText: texto con tooltips de traducción al hacer hover (tokens [[word|translation]]).
 * Solo se muestra el tooltip de la palabra que toca el cursor (un único tooltip visible a la vez).
 *
 * REGLA FIJA — NO SOLAPAR TRADUCCIONES:
 * Los padres deben usar TRANSLATION_TOOLTIP_SPACING (pb-20, mt-5, space-y-3). No reducir por debajo de lo necesario ni usar overflow-hidden.
 */
import React, { useMemo, useState, useEffect, useId, useRef } from 'react';
import { GLOBAL_LEXICON } from '@/lib/course/engine/lexicon';
import AudioButton from '../AudioButton';

/** Store compartido: solo un tooltip visible a la vez (el que tiene el cursor). */
let activeTooltipId: string | null = null;
const tooltipListeners = new Set<(id: string | null) => void>();
function setActiveTooltipId(id: string | null) {
  if (activeTooltipId === id) return;
  activeTooltipId = id;
  tooltipListeners.forEach((fn) => fn(id));
}
function useActiveTooltipId() {
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    tooltipListeners.add(setActiveId);
    return () => {
      tooltipListeners.delete(setActiveId);
    };
  }, []);
  return activeId;
}

/** Clases Tailwind mínimas para contenedores que están DEBAJO de un bloque con TranslatedText (evitar solapamiento). */
export const TRANSLATION_TOOLTIP_SPACING = {
  /** Padding-bottom del bloque que CONTIENE la pregunta/texto con traducciones. Alto suficiente para que el tooltip (top-full + mt-3 + ~80px) no solape las opciones. */
  blockWithTranslations: 'pb-20',
  /** Margin-top del bloque que va DEBAJO (ej. opciones). Separación de tooltips sin exceso. */
  blockBelow: 'mt-5',
  /** Espacio entre opciones (cada una puede tener TranslatedText). */
  betweenOptions: 'space-y-3',
} as const;

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
    ? `(?<![a-zA-ZÀ-ÖØ-öø-ÿ])(${sortedLexiconWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})(?![a-zA-ZÀ-ÖØ-öø-ÿ])`
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

const Tooltip: React.FC<TooltipProps> = ({ word, translation, useStrong }) => {
  const id = useId();
  const activeId = useActiveTooltipId();
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const isActive = activeId === id;

  const handleLeave = (e: React.MouseEvent) => {
    const next = e.relatedTarget as Node | null;
    if (next && tooltipRef.current?.contains(next)) return;
    setActiveTooltipId(null);
  };

  return (
    <span
      className="relative inline-block border-b-2 border-dotted border-indigo-300 cursor-help transition-all duration-200 mx-0.5 align-baseline"
      style={{ zIndex: isActive ? 201 : undefined }}
      onMouseEnter={() => setActiveTooltipId(id)}
      onMouseLeave={handleLeave}
    >
      <span className={`${isActive ? 'border-indigo-500' : 'hover:border-indigo-500'} ${useStrong ? 'font-bold text-indigo-700 dark:text-indigo-400' : 'text-indigo-600 dark:text-indigo-400 font-medium'}`}>
        {word}
      </span>
      {/* Solo se muestra el tooltip de la palabra que toca el cursor */}
      <span
        ref={tooltipRef}
        className={`absolute top-full left-0 mt-3 w-max max-w-[280px] p-3.5 bg-slate-900 text-white text-xs rounded-xl transition-all duration-200 z-[200] shadow-2xl border border-slate-700 drop-shadow-lg flex flex-col gap-3 ${isActive ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
        aria-hidden="true"
        onMouseLeave={() => setActiveTooltipId(null)}
      >
        <span className="flex items-center justify-between gap-2 min-h-[1.5rem]">
          <span className="font-black text-indigo-400 uppercase tracking-widest text-[10px] leading-relaxed break-words line-clamp-2">
            {word}
          </span>
          <AudioButton text={word} size="sm" className="bg-slate-800 hover:bg-slate-700 text-indigo-400 border-none scale-75 flex-shrink-0" />
        </span>
        <span className="block text-slate-200 leading-relaxed font-medium text-sm min-h-[1.25rem]">
          {translation}
        </span>
        <span className="absolute bottom-full left-4 border-[6px] border-transparent border-b-slate-900 pointer-events-none" />
      </span>
    </span>
  );
};
