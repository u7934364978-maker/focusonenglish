'use client';

import React, { useState, useMemo } from 'react';
import { Languages } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TranslationToggleProps {
  text: string;
  className?: string;
  defaultShowTranslation?: boolean;
  showToggleButton?: boolean;
}

interface BilingualSegment {
  type: 'text' | 'bilingual';
  content: string;
  translation?: string;
}

/**
 * Parses text with [[English|Spanish]] syntax into segments
 */
function parseBilingualText(text: string): BilingualSegment[] {
  const segments: BilingualSegment[] = [];
  const regex = /\[\[([^\]|]+)\|([^\]]*)\]\]/g;
  
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        content: text.substring(lastIndex, match.index)
      });
    }
    
    // Add bilingual segment
    segments.push({
      type: 'bilingual',
      content: match[1], // English
      translation: match[2] // Spanish
    });
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({
      type: 'text',
      content: text.substring(lastIndex)
    });
  }
  
  return segments;
}

/**
 * TranslationToggle component for displaying bilingual text with toggle functionality
 * 
 * Parses [[English|Spanish]] syntax and allows toggling between languages.
 * Shows translation preview on hover without toggling.
 */
export function TranslationToggle({
  text,
  className,
  defaultShowTranslation = false,
  showToggleButton = true
}: TranslationToggleProps) {
  const [showTranslation, setShowTranslation] = useState(defaultShowTranslation);
  
  const segments = useMemo(() => parseBilingualText(text), [text]);
  
  // Check if there are any bilingual segments
  const hasBilingualContent = segments.some(seg => seg.type === 'bilingual');
  
  if (!hasBilingualContent) {
    return <span className={className}>{text}</span>;
  }
  
  return (
    <div className={cn('relative', className)}>
      {showToggleButton && (
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1.5 mb-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all',
            showTranslation
              ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          )}
          aria-label={showTranslation ? 'Hide translations' : 'Show translations'}
        >
          <Languages className="w-3.5 h-3.5" />
          <span>{showTranslation ? 'ES' : 'EN'}</span>
        </button>
      )}
      
      <span className="inline">
        {segments.map((segment, index) => {
          if (segment.type === 'text') {
            return <React.Fragment key={index}>{segment.content}</React.Fragment>;
          }
          
          return (
            <BilingualWord
              key={index}
              english={segment.content}
              spanish={segment.translation!}
              showTranslation={showTranslation}
            />
          );
        })}
      </span>
    </div>
  );
}

interface BilingualWordProps {
  english: string;
  spanish: string;
  showTranslation: boolean;
}

/**
 * Individual bilingual word/phrase component with hover tooltip
 */
function BilingualWord({ english, spanish, showTranslation }: BilingualWordProps) {
  const displayText = showTranslation ? spanish : english;
  const tooltipText = showTranslation ? english : spanish;
  
  return (
    <span className="group relative inline-block">
      <span
        className={cn(
          'border-b-2 border-dotted cursor-help mx-0.5 transition-all duration-200',
          showTranslation
            ? 'border-indigo-300 hover:border-indigo-500 text-indigo-700 font-medium'
            : 'border-emerald-300 hover:border-emerald-500 text-emerald-700 font-medium'
        )}
      >
        {displayText}
      </span>
      
      {/* Hover tooltip */}
      <span
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[220px] p-3 bg-slate-900 text-white text-xs rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] shadow-2xl border border-slate-700 transform translate-y-1 group-hover:translate-y-0 pointer-events-none"
        role="tooltip"
        aria-hidden="true"
      >
        <span className="flex items-center justify-between gap-3 mb-1">
          <span className="block font-black text-amber-400 uppercase tracking-widest text-[10px]">
            {showTranslation ? 'EN' : 'ES'}
          </span>
        </span>
        <span className="block text-slate-200 leading-snug font-medium text-sm">
          {tooltipText}
        </span>
        
        {/* Tooltip arrow */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900"></span>
        
        {/* Invisible bridge to handle the gap between word and tooltip */}
        <div className="absolute top-full left-0 right-0 h-4" />
      </span>
    </span>
  );
}

/**
 * Utility function to render bilingual text (alternative API)
 * Returns the parsed and rendered content without the toggle button
 */
export function renderBilingualText(
  text: string,
  showTranslation: boolean = false
): React.ReactNode {
  const segments = parseBilingualText(text);
  
  return segments.map((segment, index) => {
    if (segment.type === 'text') {
      return <React.Fragment key={index}>{segment.content}</React.Fragment>;
    }
    
    return (
      <BilingualWord
        key={index}
        english={segment.content}
        spanish={segment.translation!}
        showTranslation={showTranslation}
      />
    );
  });
}

/**
 * Hook to parse bilingual text and manage translation state
 */
export function useBilingualText(text: string, defaultShowTranslation: boolean = false) {
  const [showTranslation, setShowTranslation] = useState(defaultShowTranslation);
  const segments = useMemo(() => parseBilingualText(text), [text]);
  const hasBilingualContent = segments.some(seg => seg.type === 'bilingual');
  
  return {
    segments,
    showTranslation,
    setShowTranslation,
    toggleTranslation: () => setShowTranslation(!showTranslation),
    hasBilingualContent
  };
}

export { parseBilingualText };
export type { BilingualSegment, TranslationToggleProps };
