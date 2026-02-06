'use client';

import { useState, useRef } from 'react';
import { Play, Volume2, Copy, Check, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phrase } from '@/lib/phrases';

interface PhraseCardProps {
  phrase: Phrase;
}

export function PhraseCard({ phrase }: PhraseCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (!phrase.audio_url) return;
    
    if (!audioRef.current) {
      audioRef.current = new Audio(phrase.audio_url);
      audioRef.current.onended = () => setIsPlaying(false);
    }
    
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const copyToClipboard = () => {
    const textToCopy = `${phrase.phrase_en}\n${phrase.phrase_es}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
    >
      <div className="flex flex-col h-full">
        {/* EN Phrase */}
        <div className="mb-4">
          <h3 className="text-xl lg:text-2xl font-black text-slate-900 leading-tight group-hover:text-coral-600 transition-colors">
            {phrase.phrase_en}
          </h3>
          <p className="text-slate-500 text-lg mt-2 font-medium">
            {phrase.phrase_es}
          </p>
        </div>

        {/* Tags */}
        {phrase.tags && phrase.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {phrase.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-slate-50 text-slate-400 border border-slate-100">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Context / Hint */}
        {phrase.usage_context && (
          <div className="mb-6 p-4 bg-amber-50/50 rounded-2xl border border-amber-100/50">
            <p className="text-sm text-amber-800 italic leading-relaxed">
              <span className="font-bold not-italic mr-1">Pro Tip:</span> {phrase.usage_context}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2">
            <button
              onClick={playAudio}
              disabled={!phrase.audio_url}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                isPlaying 
                  ? 'bg-coral-600 text-white shadow-lg shadow-coral-200 scale-95' 
                  : 'bg-coral-50 text-coral-600 hover:bg-coral-100 disabled:opacity-30 disabled:grayscale'
              }`}
              title="Escuchar pronunciación"
            >
              {isPlaying ? <Volume2 className="w-6 h-6 animate-pulse" /> : <Play className="w-6 h-6 fill-current" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                copied 
                  ? 'bg-green-50 text-green-600 border border-green-100' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-coral-200 hover:text-coral-600'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar
                </>
              )}
            </button>
            
            <button className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:text-coral-600 hover:border-coral-200 transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
