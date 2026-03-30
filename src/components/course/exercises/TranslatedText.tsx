'use client';

/**
 * TranslatedText: texto con tooltips de traducción al hacer hover (tokens [[word|translation]]).
 *
 * UN SOLO TOOLTIP A LA VEZ (global): activeTooltipId es compartido; solo el span bajo el cursor
 * muestra su tooltip. Al pasar a otra palabra, el anterior se oculta. Así no se solapan y
 * el espaciado puede ser mínimo (solo para un tooltip).
 *
 * Los padres usan TRANSLATION_TOOLTIP_SPACING para dejar hueco a ese único tooltip.
 */
import React, { useMemo, useState, useEffect, useId, useRef } from 'react';
import { GLOBAL_LEXICON } from '@/lib/course/engine/lexicon';
import AudioButton from '../AudioButton';

/** Store global: solo un tooltip visible en toda la app (el de la palabra bajo el cursor). */
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

/** Espacio mínimo entre pregunta y opciones (solo un tooltip a la vez). */
export const TRANSLATION_TOOLTIP_SPACING = {
  blockWithTranslations: 'pb-10',
  blockBelow: 'mt-0',
  betweenOptions: 'space-y-2',
} as const;

interface TranslatedTextProps {
  text: string;
  className?: string;
  useStrong?: boolean;
}

// Module-level cache for the regex and map to avoid recomputing if not needed
let cachedLexiconMap: Map<string, string> | null = null;
let cachedLexiconRegexPattern: string | null = null;

// Fallback mínimo para cubrir palabras funcionales frecuentes que a veces no están
// en GLOBAL_LEXICON y dejan frases parcialmente sin traducción visible.
const COMMON_FALLBACK_TRANSLATIONS: Record<string, string> = {
  someone: 'alguien',
  somebody: 'alguien',
  anyone: 'alguien / cualquiera',
  anybody: 'alguien / cualquiera',
  everyone: 'todos',
  everybody: 'todos',
  first: 'primero/a',
  second: 'segundo/a',
  third: 'tercero/a',
  time: 'tiempo / vez',
  times: 'veces',
  when: 'cuando',
  where: 'dónde',
  why: 'por qué',
  who: 'quién',
  whom: 'a quién',
  whose: 'de quién',
  this: 'esto / este/a',
  that: 'eso / ese/a',
  these: 'estos/as',
  those: 'esos/as',
  here: 'aquí',
  there: 'allí',
  please: 'por favor',
  sorry: 'lo siento',
  thank: 'gracias',
  goodbye: 'adiós',
  hello: 'hola',
  meet: 'conocer',
};

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

  Object.entries(COMMON_FALLBACK_TRANSLATIONS).forEach(([k, v]) => {
    if (!lexiconMap.has(k)) lexiconMap.set(k, v);
  });

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
  /** Solo este tooltip se muestra; los demás tienen opacity-0 invisible (un único tooltip global). */
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
      {/* Solo visible cuando isActive (cursor sobre esta palabra); resto ocultos por opacity-0 */}
      <span
        ref={tooltipRef}
        className={`absolute top-full left-0 mt-2 w-max max-w-[280px] p-3 bg-slate-900 text-white text-xs rounded-xl transition-all duration-200 z-[200] shadow-2xl border border-slate-700 drop-shadow-lg flex flex-col gap-2 ${isActive ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
        aria-hidden="true"
        onMouseLeave={() => setActiveTooltipId(null)}
      >
        <span className="flex items-center justify-between gap-2 min-h-[1.25rem]">
          <span className="font-black text-indigo-400 uppercase tracking-widest text-[10px] leading-relaxed break-words line-clamp-2">
            {word}
          </span>
          <AudioButton text={word} size="sm" className="bg-slate-800 hover:bg-slate-700 text-indigo-400 border-none scale-75 flex-shrink-0" />
        </span>
        <span className="block text-slate-200 leading-relaxed font-medium text-sm min-h-[1rem]">
          {translation}
        </span>
        <span className="absolute bottom-full left-4 border-[6px] border-transparent border-b-slate-900 pointer-events-none" />
      </span>
    </span>
  );
};
