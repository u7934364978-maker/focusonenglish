import React from 'react';

interface TranslatedTextProps {
  text: string;
  className?: string;
  useStrong?: boolean;
}

export const TranslatedText: React.FC<TranslatedTextProps> = ({ text, className, useStrong = false }) => {
  if (!text) return null;

  // Handle explicit translations: [[word|translation]]
  const explicitRegex = /\[\[(.*?)\|(.*?)\]\]/g;
  const parts: (string | React.ReactNode)[] = [];
  
  let lastIndex = 0;
  let match;
  
  // Use a simple loop to build parts
  while ((match = explicitRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const word = match[1];
    const translation = match[2];

    parts.push(
      <span key={`explicit-${match.index}`} className="group relative inline-block border-b border-dotted border-slate-400 cursor-help mx-0.5">
        <span className={useStrong ? "font-bold text-indigo-600" : "text-indigo-600"}>{word}</span>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[100] shadow-xl border border-slate-700">
          <span className="block font-black text-indigo-400 mb-0.5 uppercase tracking-tighter text-[9px]">
            {word}
          </span>
          {translation}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></span>
        </span>
      </span>
    );
    lastIndex = explicitRegex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // Fallback if no tags found
  if (parts.length === 0) {
    return <span className={className}>{text}</span>;
  }

  return <span className={className}>{parts}</span>;
};
