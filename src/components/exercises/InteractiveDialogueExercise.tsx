'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Headphones, Play, Pause, RotateCcw, CheckCircle2, XCircle, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import InteractiveTranscript from '../course/InteractiveTranscript';
import { TranscriptSentence } from '@/lib/exercise-types';

interface Question {
  id: string;
  time: number; // Time in seconds when the dialogue pauses for this question
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface InteractiveDialogueContent {
  title: string;
  instructions: string;
  audioUrl: string;
  transcript: TranscriptSentence[];
  questions: Question[];
}

interface InteractiveDialogueExerciseProps {
  content: InteractiveDialogueContent;
  onComplete: (isCorrect: boolean) => void;
}

export default function InteractiveDialogueExercise({ content, onComplete }: InteractiveDialogueExerciseProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastTriggeredTime = useRef<number>(-1);

  // Sync state with audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      const time = audio.currentTime;
      setCurrentTime(time);

      // Check for break points (questions)
      const pendingQuestion = content.questions.find(q => 
        !answeredQuestions.has(q.id) && 
        time >= q.time && 
        time < q.time + 1 && // Check within 1s window
        lastTriggeredTime.current !== q.time // Don't trigger multiple times for the same time
      );

      if (pendingQuestion) {
        audio.pause();
        setIsPlaying(false);
        setActiveQuestion(pendingQuestion);
        lastTriggeredTime.current = pendingQuestion.time;
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      if (answeredQuestions.size === content.questions.length) {
        setFinished(true);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [content.questions, answeredQuestions]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Error playing audio:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleAnswerSubmit = () => {
    if (selectedOption === null || !activeQuestion) return;
    
    setSubmitted(true);
    const isCorrect = selectedOption === activeQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Short delay before continuing
    setTimeout(() => {
      setAnsweredQuestions(prev => new Set([...prev, activeQuestion.id]));
      setActiveQuestion(null);
      setSelectedOption(null);
      setSubmitted(false);
      
      // Auto-resume if not finished
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 3000);
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (finished) {
    const finalScore = Math.round((score / content.questions.length) * 100);
    return (
      <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-xl text-center space-y-6 animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">¡Dialogue Completed!</h2>
          <p className="text-slate-600 font-medium">You have finished the interactive dialogue.</p>
        </div>
        
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 max-w-xs mx-auto">
          <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Your Score</div>
          <div className="text-5xl font-black text-indigo-600">{finalScore}%</div>
          <div className="mt-2 text-xs font-bold text-slate-400">
            {score} of {content.questions.length} questions correct
          </div>
        </div>

        <button
          onClick={() => onComplete(finalScore >= 70)}
          className="bg-indigo-600 text-white px-12 py-4 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-lg flex items-center justify-center gap-2 mx-auto"
        >
          Continue
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-xl overflow-hidden relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
            <Headphones className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-black text-slate-900 leading-tight">
              {content.title}
            </h3>
            <div className="flex items-center gap-3 mt-1 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatTime(duration)}
              </span>
              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full">
                Interactive Dialogue
              </span>
            </div>
          </div>
        </div>

        <p className="text-slate-600 mb-8 italic">{content.instructions}</p>

        {/* Audio Player UI */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
          <audio ref={audioRef} src={content.audioUrl} preload="auto" />
          
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              disabled={activeQuestion !== null}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                activeQuestion 
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'
              }`}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            
            <div className="flex-1 space-y-2">
              <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-indigo-500 transition-all duration-100"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
                {/* Break points markers */}
                {content.questions.map(q => (
                  <div 
                    key={q.id}
                    className={`absolute top-0 w-1 h-full z-10 ${answeredQuestions.has(q.id) ? 'bg-green-400' : 'bg-orange-400'}`}
                    style={{ left: `${(q.time / duration) * 100}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-400 tabular-nums">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <button
              onClick={() => handleSeek(0)}
              className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 h-[500px]">
          {/* Transcript Section */}
          <div className="h-full">
            <InteractiveTranscript 
              transcript={content.transcript}
              currentTime={currentTime}
              onSeek={handleSeek}
              title="Dialogue Transcript"
            />
          </div>

          {/* Interaction Section */}
          <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
            {activeQuestion ? (
              <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200 space-y-6 animate-in slide-in-from-right duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-100">
                    <MessageSquare className="text-white w-5 h-5" />
                  </div>
                  <h4 className="font-black text-orange-900">Comprehension Check</h4>
                </div>

                <p className="text-lg font-bold text-slate-900 leading-snug">
                  {activeQuestion.question}
                </p>

                <div className="space-y-3">
                  {activeQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => !submitted && setSelectedOption(idx)}
                      disabled={submitted}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        selectedOption === idx
                          ? submitted
                            ? idx === activeQuestion.correctAnswer
                              ? 'border-green-500 bg-green-50 text-green-900'
                              : 'border-red-500 bg-red-50 text-red-900'
                            : 'border-indigo-500 bg-indigo-50 text-indigo-900'
                          : 'border-white bg-white hover:border-slate-200 text-slate-700'
                      } ${
                        submitted && idx === activeQuestion.correctAnswer && selectedOption !== idx
                          ? 'border-green-500 bg-green-50 text-green-900'
                          : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {submitted && idx === activeQuestion.correctAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        )}
                        {submitted && selectedOption === idx && idx !== activeQuestion.correctAnswer && (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {!submitted ? (
                  <button
                    onClick={handleAnswerSubmit}
                    disabled={selectedOption === null}
                    className="w-full py-4 bg-orange-500 text-white rounded-xl font-black shadow-lg hover:bg-orange-600 transition-all disabled:opacity-50"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <div className="p-4 bg-white/50 rounded-xl text-sm italic text-slate-600 border border-orange-100">
                    {activeQuestion.explanation}
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-300 shadow-sm">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-400">Listening in progress...</h4>
                  <p className="text-xs text-slate-400 mt-1">Questions will appear automatically at key moments.</p>
                </div>
                
                <div className="w-full max-w-[200px] space-y-2">
                   <div className="flex justify-between text-[10px] font-bold text-slate-400">
                     <span>Progress</span>
                     <span>{answeredQuestions.size} / {content.questions.length}</span>
                   </div>
                   <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-green-400 transition-all duration-500"
                       style={{ width: `${(answeredQuestions.size / content.questions.length) * 100}%` }}
                     />
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
