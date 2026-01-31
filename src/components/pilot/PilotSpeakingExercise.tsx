'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Square, RotateCcw, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface PilotSpeakingExerciseProps {
  prompt: string;
  referenceText: string;
  maxAttempts?: number;
  onSuccess: (score: number) => void;
}

export default function PilotSpeakingExercise({ 
  prompt, 
  referenceText, 
  maxAttempts = 3,
  onSuccess 
}: PilotSpeakingExerciseProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [evaluating, setEvaluating] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        evaluateAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setError(null);
    } catch (err) {
      setError('Could not access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const evaluateAudio = async (audioBlob: Blob) => {
    setEvaluating(true);
    setAttempts(prev => prev + 1);

    const formData = new FormData();
    formData.append('audio', audioBlob);
    formData.append('referenceText', referenceText);

    try {
      const res = await fetch('/api/evaluate-speaking-azure', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Evaluation failed');
      
      const data = await res.json();
      setResults(data);

      if (data.overallScore >= 70) {
        onSuccess(data.overallScore);
      }
    } catch (err) {
      setError('Error evaluating audio. Please try again.');
    } finally {
      setEvaluating(false);
    }
  };

  const reset = () => {
    setResults(null);
    setError(null);
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-slate-100 dark:border-slate-800 shadow-xl">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{prompt}</h4>
        <p className="text-slate-500 dark:text-slate-400">Read the phrase clearly into your microphone.</p>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 mb-8 border-2 border-dashed border-slate-200 dark:border-slate-700">
        <p className="text-xl font-bold text-center text-slate-700 dark:text-slate-300 italic">
          "{referenceText}"
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        {!results && !evaluating && (
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-xl ${
              isRecording 
                ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                : 'bg-orange-500 hover:bg-orange-600'
            } text-white`}
          >
            {isRecording ? <Square className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
          </button>
        )}

        {evaluating && (
          <div className="flex flex-col items-center gap-4 py-8">
            <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
            <p className="font-bold text-slate-600">Analyzing pronunciation...</p>
          </div>
        )}

        {results && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full space-y-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ScoreCard label="Accuracy" score={results.accuracyScore} />
              <ScoreCard label="Fluency" score={results.fluencyScore} />
              <ScoreCard label="Pronunciation" score={results.pronunciationScore} />
              <ScoreCard label="Overall" score={results.overallScore} highlight />
            </div>

            {results.overallScore >= 70 ? (
              <div className="bg-green-50 text-green-800 p-4 rounded-xl flex items-center gap-3 border border-green-200">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-bold">Excellent! You can continue.</span>
              </div>
            ) : (
              <div className="bg-amber-50 text-amber-800 p-4 rounded-xl flex items-center gap-3 border border-amber-200">
                <AlertCircle className="w-6 h-6" />
                <span className="font-bold">Keep practicing! Try to be clearer.</span>
              </div>
            )}

            {attempts < maxAttempts && results.overallScore < 70 && (
              <button
                onClick={reset}
                className="w-full py-4 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                Try Again ({attempts}/{maxAttempts})
              </button>
            )}
          </motion.div>
        )}

        {error && (
          <div className="text-red-500 font-bold flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

function ScoreCard({ label, score, highlight = false }: { label: string, score: number, highlight?: boolean }) {
  return (
    <div className={`p-4 rounded-2xl border-2 ${
      highlight 
        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' 
        : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800'
    } text-center shadow-sm`}>
      <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 dark:text-slate-400 mb-1">{label}</p>
      <p className={`text-2xl font-black ${highlight ? 'text-orange-600' : 'text-slate-900 dark:text-white'}`}>{Math.round(score)}</p>
    </div>
  );
}
