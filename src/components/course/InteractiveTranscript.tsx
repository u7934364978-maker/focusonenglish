'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TranscriptSentence } from '@/lib/exercise-types';
import { Play, MessageSquare } from 'lucide-react';
import Markdown, { VocabularyItem } from './Markdown';

interface InteractiveTranscriptProps {
  transcript: TranscriptSentence[];
  currentTime: number;
  onSeek: (time: number) => void;
  title?: string;
  vocabulary?: VocabularyItem[];
}

export default function InteractiveTranscript({ 
  transcript, 
  currentTime, 
  onSeek,
  title = "Interactive Transcript",
  vocabulary
}: InteractiveTranscriptProps) {
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeSentenceRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active sentence
  useEffect(() => {
    if (autoScroll && activeSentenceRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const element = activeSentenceRef.current;
      
      const containerTop = container.scrollTop;
      const containerBottom = containerTop + container.clientHeight;
      const elementTop = element.offsetTop - container.offsetTop;
      const elementBottom = elementTop + element.clientHeight;

      if (elementTop < containerTop || elementBottom > containerBottom) {
        container.scrollTo({
          top: elementTop - container.clientHeight / 2 + element.clientHeight / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [currentTime, autoScroll]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl border-2 border-indigo-100 dark:border-indigo-900 overflow-hidden shadow-sm">
      <div className="px-4 py-3 bg-indigo-50 dark:bg-indigo-950/30 border-b border-indigo-100 dark:border-indigo-900 flex justify-between items-center">
        <h3 className="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          {title}
        </h3>
        <label className="flex items-center gap-2 text-xs text-indigo-700 dark:text-indigo-400 cursor-pointer">
          <input 
            type="checkbox" 
            checked={autoScroll} 
            onChange={(e) => setAutoScroll(e.target.checked)}
            className="rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
          />
          Auto-scroll
        </label>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar"
        onWheel={() => {
          // Disable auto-scroll if user scrolls manually
          // setAutoScroll(false); 
        }}
      >
        {transcript.map((sentence, index) => {
          const isActive = currentTime >= sentence.start && currentTime <= sentence.end;
          
          return (
            <div 
              key={index}
              ref={isActive ? activeSentenceRef : null}
              onClick={() => onSeek(sentence.start)}
              className={`group relative p-3 rounded-lg transition-all cursor-pointer border-l-4 ${
                isActive 
                  ? 'bg-indigo-50 dark:bg-indigo-900/40 border-indigo-500 shadow-sm' 
                  : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-200 dark:hover:border-slate-700'
              }`}
            >
              {sentence.speaker && (
                <span className="block text-[10px] font-black uppercase tracking-wider text-indigo-500 dark:text-indigo-400 mb-1">
                  {sentence.speaker}
                </span>
              )}
              <div className={`text-sm leading-relaxed ${
                isActive 
                  ? 'text-indigo-900 dark:text-white font-medium' 
                  : 'text-slate-600 dark:text-slate-400'
              }`}>
                <Markdown content={sentence.text} vocabulary={vocabulary} />
              </div>
              
              <div className={`absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'hidden' : 'block'}`}>
                <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Play className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 text-[10px] text-slate-400 dark:text-slate-500 flex justify-between">
        <span>Click any sentence to jump to that part</span>
        <span>{transcript.length} sentences</span>
      </div>
    </div>
  );
}
