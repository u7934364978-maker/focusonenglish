'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, HelpCircle, CheckCircle2, Video } from 'lucide-react';

interface Interaction {
  type: 'hotspot' | 'mcq';
  atSeconds: number;
  label?: string;
  content?: { text: string };
  question?: string;
  options?: string[];
  answerIndex?: number;
  explanation?: string;
}

interface PilotVideoPlayerProps {
  streamVideoId: string;
  interactions: Interaction[];
  onComplete?: () => void;
}

export default function PilotVideoPlayer({ streamVideoId, interactions, onComplete }: PilotVideoPlayerProps) {
  const [playbackUrl, setPlaybackUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeInteraction, setActiveInteraction] = useState<Interaction | null>(null);
  const [mcqAnswer, setMcqAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const [isPlaying, setIsPlaying] = useState(false);
  
  const videoRef = useRef<HTMLIFrameElement>(null);
  const mockVideoRef = useRef<HTMLVideoElement>(null);

  // Sync mock video playback
  useEffect(() => {
    if (mockVideoRef.current) {
      if (isPlaying && !activeInteraction) {
        mockVideoRef.current.play().catch(() => {});
      } else {
        mockVideoRef.current.pause();
      }
    }
  }, [isPlaying, activeInteraction]);

  // Fetch playback URL
  useEffect(() => {
    if (streamVideoId === 'mock') {
      setPlaybackUrl(null);
      setLoading(false);
      return;
    }
    async function fetchPlayback() {
      try {
        const res = await fetch(`/api/stream/playback?videoId=${streamVideoId}`);
        if (!res.ok) throw new Error('Failed to load video');
        const data = await res.json();
        setPlaybackUrl(data.playbackUrl);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPlayback();
  }, [streamVideoId]);

  // Track time and show interactions
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Cloudflare Stream Player emits messages
      // Documentation: https://developers.cloudflare.com/stream/viewing-videos/using-the-stream-player/
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data.event === 'timeupdate') {
          setCurrentTime(data.seconds);
        }
      } catch (e) {
        // Not a JSON message or not from Stream player
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Check for interactions at current time
  useEffect(() => {
    const interaction = interactions.find(i => Math.floor(i.atSeconds) === Math.floor(currentTime));
    if (interaction && activeInteraction !== interaction) {
      setActiveInteraction(interaction);
      // If it's an MCQ, we might want to pause the video
      // videoRef.current?.contentWindow?.postMessage('{"method":"pause"}', '*');
    }
  }, [currentTime, interactions, activeInteraction]);

  if (loading) return <div className="aspect-video bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center">Loading video...</div>;
  if (error) return <div className="aspect-video bg-red-50 text-red-600 rounded-2xl flex items-center justify-center p-4 text-center">Error: {error}</div>;

  return (
    <div className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
      {streamVideoId === 'mock' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6">
          {/* Real Video for Simulation Mode */}
          <video
            ref={mockVideoRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
            playsInline
            muted={!isPlaying}
            loop
            onTimeUpdate={(e) => {
              if (isPlaying && !activeInteraction) {
                setCurrentTime(Math.floor(e.currentTarget.currentTime));
              }
            }}
            src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          />
          <div className="absolute inset-0 bg-black/20 z-0" />
          
          {!isPlaying && (
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl mb-6">
                <Video className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-black mb-6 text-center">Video Lesson Simulation</h3>
              <button 
                onClick={() => setIsPlaying(true)}
                className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-2xl"
              >
                Play with Audio
              </button>
            </div>
          )}
          
          {isPlaying && activeInteraction && (
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-0" />
          )}
        </div>
      ) : (
        <iframe
          ref={videoRef}
          src={playbackUrl || ''}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; gyroscope; autoplay; encrypted-media"
          allowFullScreen
        />
      )}

      {/* Progress Bar for simulation */}
      {streamVideoId === 'mock' && (
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-slate-800">
          <div 
            className="h-full bg-orange-500 transition-all duration-1000" 
            style={{ width: `${Math.min((currentTime / 30) * 100, 100)}%` }}
          />
        </div>
      )}

      {/* Interactions Overlay */}
      <AnimatePresence>
        {activeInteraction && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm z-10"
          >
            {activeInteraction.type === 'hotspot' ? (
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl max-w-sm border-2 border-orange-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <Info className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white">{activeInteraction.label}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{activeInteraction.content?.text}</p>
                <button
                  onClick={() => {
                    setActiveInteraction(null);
                    if (streamVideoId === 'mock') setCurrentTime(prev => prev + 1);
                  }}
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
                >
                  Continue Video
                </button>
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl max-w-lg w-full border-2 border-blue-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white">Quick Question</h4>
                </div>
                
                <p className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-6">{activeInteraction.question}</p>
                
                <div className="space-y-3 mb-6">
                  {activeInteraction.options?.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => !showExplanation && setMcqAnswer(idx)}
                      className={`w-full p-4 rounded-xl text-left font-bold transition-all border-2 ${
                        mcqAnswer === idx 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'border-slate-100 dark:border-slate-800 hover:border-blue-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {mcqAnswer !== null && !showExplanation && (
                  <button
                    onClick={() => setShowExplanation(true)}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all"
                  >
                    Check Answer
                  </button>
                )}

                {showExplanation && (
                  <div className={`p-4 rounded-xl mb-6 ${
                    mcqAnswer === activeInteraction.answerIndex 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-bold">{mcqAnswer === activeInteraction.answerIndex ? 'Correct!' : 'Incorrect'}</span>
                    </div>
                    <p className="text-sm">{activeInteraction.explanation}</p>
                  </div>
                )}

                {showExplanation && (
                  <button
                    onClick={() => {
                      setActiveInteraction(null);
                      setMcqAnswer(null);
                      setShowExplanation(false);
                      if (streamVideoId === 'mock') setCurrentTime(prev => prev + 1);
                    }}
                    className="w-full py-4 bg-slate-900 dark:bg-slate-800 text-white font-black rounded-xl transition-all"
                  >
                    Continue Video
                  </button>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
