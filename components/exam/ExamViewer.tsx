"use client";

import { useState, useEffect, useMemo } from "react";
import type { Exam, ExamResult } from "./types";
import ExerciseRenderer from "../course/exercises/ExerciseRenderer";
import { CheckCircle, Clock, AlertTriangle, ArrowRight, ArrowLeft } from "lucide-react";

interface Props {
  exam: Exam;
  onComplete: (result: ExamResult) => void;
  onExit: () => void;
}

export default function ExamViewer({ exam, onComplete, onExit }: Props) {
  const [currentSectionIdx, setCurrentSectionIdx] = useState(0);
  const [currentItemIdx, setCurrentItemIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exam.durationInMinutes * 60);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [startTime] = useState(Date.now());

  const currentSection = exam.sections[currentSectionIdx];
  const currentItem = currentSection.items[currentItemIdx];

  const totalItems = useMemo(() => {
    return exam.sections.reduce((acc, section) => acc + section.items.length, 0);
  }, [exam]);

  const completedItems = Object.keys(answers).length;
  const progress = (completedItems / totalItems) * 100;

  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinish();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    if (currentItemIdx < currentSection.items.length - 1) {
      setCurrentItemIdx(currentItemIdx + 1);
    } else if (currentSectionIdx < exam.sections.length - 1) {
      setCurrentSectionIdx(currentSectionIdx + 1);
      setCurrentItemIdx(0);
    }
  };

  const handlePrev = () => {
    if (currentItemIdx > 0) {
      setCurrentItemIdx(currentItemIdx - 1);
    } else if (currentSectionIdx > 0) {
      const prevSection = exam.sections[currentSectionIdx - 1];
      setCurrentSectionIdx(currentSectionIdx - 1);
      setCurrentItemIdx(prevSection.items.length - 1);
    }
  };

  const handleResult = (isCorrect: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [currentItem.id]: isCorrect,
    }));
  };

  const handleFinish = () => {
    const correctCount = Object.values(answers).filter(Boolean).length;
    const score = Math.round((correctCount / totalItems) * 100);
    const passed = score >= exam.passingScore;
    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    const result: ExamResult = {
      examId: exam.id,
      score,
      passed,
      completedAt: Date.now(),
      timeSpent,
      answers,
    };

    setIsFinished(true);
    onComplete(result);
  };

  if (isFinished) {
    const correctCount = Object.values(answers).filter(Boolean).length;
    const score = Math.round((correctCount / totalItems) * 100);
    const passed = score >= exam.passingScore;

    return (
      <div className="mx-auto max-w-2xl py-12 text-center">
        <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${passed ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
          {passed ? <CheckCircle size={40} /> : <AlertTriangle size={40} />}
        </div>
        <h2 className="text-3xl font-black text-slate-900">{passed ? "Congratulations!" : "Keep Practicing"}</h2>
        <p className="mt-2 text-slate-600">You've completed the <strong>{exam.title}</strong></p>
        
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-3xl bg-slate-50 p-6">
            <div className="text-sm font-bold text-slate-500 uppercase tracking-tight">Your Score</div>
            <div className={`mt-1 text-4xl font-black ${passed ? 'text-green-600' : 'text-amber-600'}`}>{score}%</div>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6">
            <div className="text-sm font-bold text-slate-500 uppercase tracking-tight">Result</div>
            <div className={`mt-1 text-2xl font-black ${passed ? 'text-green-600' : 'text-amber-600'}`}>{passed ? "PASSED" : "FAILED"}</div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          <button
            onClick={onExit}
            className="rounded-2xl bg-slate-900 py-4 text-sm font-black text-white hover:brightness-95 transition"
          >
            Return to Course
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <h1 className="text-lg font-black text-slate-900">{exam.title}</h1>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-tight">
              Section {currentSectionIdx + 1}: {currentSection.title}
            </div>
          </div>

          <div className={`flex items-center gap-2 rounded-xl px-4 py-2 font-black ${timeLeft < 300 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-900'}`}>
            <Clock size={18} />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
        
        <div className="mx-auto mt-4 h-2 max-w-5xl overflow-hidden rounded-full bg-slate-100">
          <div 
            className="h-full bg-coral-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-3xl flex-1 p-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-sm font-black text-white">
              {currentItemIdx + 1}
            </span>
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
              {currentItem.type}
            </span>
          </div>

          <ExerciseRenderer 
            key={currentItem.id}
            ex={currentItem}
            onResult={handleResult}
          />
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentSectionIdx === 0 && currentItemIdx === 0}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-50 disabled:opacity-30"
          >
            <ArrowLeft size={18} />
            Previous
          </button>

          <div className="flex gap-3">
            <button
              onClick={handleNext}
              disabled={currentSectionIdx === exam.sections.length - 1 && currentItemIdx === currentSection.items.length - 1}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-700 hover:bg-slate-50 disabled:hidden"
            >
              Next
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                if (confirm("Are you sure you want to submit the exam?")) {
                  handleFinish();
                }
              }}
              className="rounded-2xl bg-coral-600 px-8 py-3 text-sm font-black text-white hover:brightness-95 shadow-lg shadow-coral-200 transition"
            >
              Submit Exam
            </button>
          </div>
        </div>
      </main>

      {/* Warning Footer */}
      {timeLeft < 300 && (
        <footer className="bg-red-600 px-6 py-2 text-center text-xs font-bold text-white uppercase tracking-widest">
          Less than 5 minutes remaining! Your progress will be automatically submitted when time expires.
        </footer>
      )}
    </div>
  );
}
