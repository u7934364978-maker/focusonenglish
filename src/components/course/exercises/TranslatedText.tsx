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
import { expandExplicitWordPairMarkupInString } from '@/lib/bilingual-word-pairs';
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
  /** Si true, cada [[frase EN|frase ES]] se trocea en tooltips palabra a palabra (p. ej. curso recepcionista). */
  expandWordPairs?: boolean;
}

// Module-level cache for the regex and map to avoid recomputing if not needed
let cachedLexiconMap: Map<string, string> | null = null;
let cachedLexiconRegexPattern: string | null = null;

// Fallback mínimo para cubrir palabras funcionales frecuentes que a veces no están
// en GLOBAL_LEXICON y dejan frases parcialmente sin traducción visible.
const COMMON_FALLBACK_TRANSLATIONS: Record<string, string> = {
  // Pronombres y auxiliares frecuentes
  i: 'yo',
  you: 'tú / usted',
  he: 'él',
  she: 'ella',
  we: 'nosotros/as',
  they: 'ellos/as',
  do: 'hacer / auxiliar de pregunta',
  does: 'hace / auxiliar de pregunta',
  did: 'hizo / auxiliar de pasado',
  is: 'es / está',
  are: 'eres / están',
  am: 'soy / estoy',
  have: 'tener',
  has: 'tiene',
  had: 'tenía / tuvo',
  // Negación y contracciones
  not: 'no',
  "don't": 'no (auxiliar)',
  "doesn't": 'no (auxiliar)',
  "didn't": 'no (pasado)',
  "isn't": 'no es / no está',
  "aren't": 'no son / no están',
  "i'm": 'yo soy / yo estoy',
  "you're": 'tú eres / tú estás',
  "he's": 'él es / él está',
  "she's": 'ella es / ella está',
  "it's": 'es / está',
  "we're": 'nosotros somos / estamos',
  "they're": 'ellos son / están',
  "what's": 'qué es / cuál es',
  "who's": 'quién es',
  "where's": 'dónde está',
  // Palabras de pregunta y conectores
  someone: 'alguien',
  somebody: 'alguien',
  anyone: 'alguien / cualquiera',
  anybody: 'alguien / cualquiera',
  everyone: 'todos',
  everybody: 'todos',
  what: 'qué',
  who: 'quién',
  where: 'dónde',
  how: 'cómo',
  when: 'cuando',
  why: 'por qué',
  which: 'cuál',
  first: 'primero/a',
  second: 'segundo/a',
  third: 'tercero/a',
  time: 'tiempo / vez',
  times: 'veces',
  whom: 'a quién',
  whose: 'de quién',
  for: 'para / por',
  to: 'a / para',
  of: 'de',
  in: 'en',
  on: 'en / sobre',
  at: 'en / a',
  with: 'con',
  and: 'y',
  or: 'o',
  but: 'pero',
  // Deícticos
  this: 'esto / este/a',
  that: 'eso / ese/a',
  these: 'estos/as',
  those: 'esos/as',
  here: 'aquí',
  there: 'allí',
  // Cortesía y conversación básica
  please: 'por favor',
  sorry: 'lo siento',
  thank: 'gracias',
  thanks: 'gracias',
  goodbye: 'adiós',
  hello: 'hola',
  hi: 'hola',
  bye: 'adiós',
  // Verbos comunes del flujo A1
  say: 'decir',
  meet: 'conocer',
  see: 'ver',
  know: 'saber',
  // Frases frecuentes en opciones A1
  'how are you': 'cómo estás',
  'see you later': 'nos vemos luego',
  "what's your name": 'cómo te llamas',
  "i don't know": 'no lo sé',
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

export const TranslatedText: React.FC<TranslatedTextProps> = ({ text, className, useStrong = false, expandWordPairs = false }) => {
  const { lexiconMap, lexiconRegexPattern } = useMemo(() => getLexiconData(), []);

  if (!text || typeof text !== 'string') return text;

  const textForParsing = expandWordPairs ? expandExplicitWordPairMarkupInString(text) : text;

  // 1. Handle explicit translations: [[word|translation]] or [[word]]
  const explicitRegex = /\[\[(.*?)(?:\|(.*?))?\]\]/g;
  const parts: (string | React.ReactNode)[] = [];
  
  let lastIndex = 0;
  let match;
  
  while ((match = explicitRegex.exec(textForParsing)) !== null) {
    if (match.index > lastIndex) {
      parts.push(textForParsing.substring(lastIndex, match.index));
    }

    const word = match[1];
    const translation = match[2] || word;

    parts.push(
      <Tooltip key={`explicit-${match.index}`} word={word} translation={translation} useStrong={useStrong} />
    );
    lastIndex = explicitRegex.lastIndex;
  }

  if (lastIndex < textForParsing.length) {
    parts.push(textForParsing.substring(lastIndex));
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
