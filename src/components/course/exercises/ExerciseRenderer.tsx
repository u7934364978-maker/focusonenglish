"use client";

import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import type { 
  ExerciseItem, 
  ReadingExercise, 
  ListeningExercise, 
  MatchingExercise,
  ReadingQuestion,
  WordSearchExercise as WordSearchType,
  CrosswordExercise as CrosswordType,
  FlashcardExercise as FlashcardType,
  DragDropExercise as DragDropType
} from "./types";
import { Headphones, BookOpen, Volume2, Info, Check, X } from "lucide-react";
import WordSearchExercise from "../../exercises/WordSearchExercise";
import CrosswordExercise from "../../exercises/CrosswordExercise";
import FlashcardExercise from "../../exercises/FlashcardExercise";
import DragDropExercise from "../../exercises/DragDropExercise";

export interface ExerciseRendererRef {
  check: () => boolean;
}

interface Props {
  ex: ExerciseItem;
  onResult: (isCorrect: boolean) => void;
  layout?: "default" | "focused";
  onSelectionChange?: (hasSelection: boolean) => void;
}

const ExerciseRenderer = forwardRef<ExerciseRendererRef, Props>(({ ex, onResult, layout = "default", onSelectionChange }, ref) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [fillAnswers, setFillAnswers] = useState<string[]>([]);
  const [multiAnswers, setMultiAnswers] = useState<Record<string, number>>({});
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    check: () => {
      if (ex.type === "multipleChoice" || ex.type === "grammar") {
        const correct = selectedOption === (ex as any).answerIndex;
        setIsCorrect(correct);
        setSubmitted(true);
        onResult(correct);
        return correct;
      }
      if (ex.type === "reading" || ex.type === "listening") {
        const questions = (ex as any).questions as ReadingQuestion[];
        const allCorrect = questions.every((q, idx) => multiAnswers[q.id || idx] === q.answerIndex);
        setIsCorrect(allCorrect);
        setSubmitted(true);
        onResult(allCorrect);
        return allCorrect;
      }
      if (ex.type === "fillBlanks") {
        const correctAnswers = (ex as any).answers.map((a: string) => a.toLowerCase().trim());
        const userAnswers = fillAnswers.map((a: string) => (a || "").toLowerCase().trim());
        const allCorrect = correctAnswers.every((a: string, i: number) => a === userAnswers[i]);
        setIsCorrect(allCorrect);
        setSubmitted(true);
        onResult(allCorrect);
        return allCorrect;
      }
      if (ex.type === "matching") {
        const mex = ex as MatchingExercise;
        const allCorrect = mex.pairs.every((p, idx) => {
          const opts = [p.correctMatch, ...p.distractors].sort();
          return opts[multiAnswers[p.id || idx]] === p.correctMatch;
        });
        setIsCorrect(allCorrect);
        setSubmitted(true);
        onResult(allCorrect);
        return allCorrect;
      }
      return false;
    }
  }));

  // Update selection status
  useEffect(() => {
    if (onSelectionChange) {
      if (ex.type === "multipleChoice" || ex.type === "grammar") {
        onSelectionChange(selectedOption !== null);
      } else if (ex.type === "reading" || ex.type === "listening") {
        const questions = (ex as any).questions as ReadingQuestion[];
        const answeredCount = Object.keys(multiAnswers).length;
        onSelectionChange(answeredCount === questions.length);
      } else if (ex.type === "fillBlanks") {
        const correctAnswers = (ex as any).answers;
        const filledCount = fillAnswers.filter(a => a && a.trim().length > 0).length;
        onSelectionChange(filledCount === correctAnswers.length);
      } else if (ex.type === "matching") {
        const mex = ex as MatchingExercise;
        const answeredCount = Object.keys(multiAnswers).length;
        onSelectionChange(answeredCount === mex.pairs.length);
      } else {
        // For other types like word-search, drag-drop, they handle their own internal completion
        onSelectionChange(true);
      }
    }
  }, [selectedOption, multiAnswers, fillAnswers, ex, onSelectionChange]);

  // Reset state when exercise changes
  useEffect(() => {
    setSubmitted(false);
    setSelectedOption(null);
    setFillAnswers([]);
    setMultiAnswers({});
    setIsCorrect(null);
  }, [ex.id]);

  function handleMultipleChoice(idx: number) {
    if (submitted) return;
    setSelectedOption(idx);
    const correct = idx === (ex as any).answerIndex;
    setIsCorrect(correct);
    setSubmitted(true);
    onResult(correct);
  }

  function handleFillBlanks() {
    if (submitted) return;
    const correctAnswers = (ex as any).answers.map((a: string) => a.toLowerCase().trim());
    const userAnswers = fillAnswers.map((a: string) => (a || "").toLowerCase().trim());
    
    const allCorrect = correctAnswers.every((a: string, i: number) => a === userAnswers[i]);
    setIsCorrect(allCorrect);
    setSubmitted(true);
    onResult(allCorrect);
  }

  function handleMultiQuestionSubmit() {
    if (submitted) return;
    const questions = (ex as any).questions as ReadingQuestion[];
    const allCorrect = questions.every((q, idx) => multiAnswers[q.id || idx] === q.answerIndex);
    setIsCorrect(allCorrect);
    setSubmitted(true);
    onResult(allCorrect);
  }

  function renderVocabularyTooltips(text: string, vocab?: { word: string; definition: string }[]) {
    if (!vocab || vocab.length === 0) return text;
    
    let parts: (string | React.ReactNode)[] = [text];
    
    vocab.forEach((v) => {
      const newParts: (string | React.ReactNode)[] = [];
      const regex = new RegExp(`\\b(${v.word})\\b`, 'gi');
      
      parts.forEach((part) => {
        if (typeof part !== 'string') {
          newParts.push(part);
          return;
        }
        
        const splitText = part.split(regex);
        splitText.forEach((t, i) => {
          if (t.toLowerCase() === v.word.toLowerCase()) {
            newParts.push(
              <span key={`${v.word}-${i}`} className="group relative inline-block border-b-2 border-dotted border-indigo-500 cursor-help">
                <span className="text-indigo-700 font-bold">{t}</span>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-900 text-white text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl border border-slate-700">
                  <span className="block font-black text-indigo-400 mb-1 uppercase tracking-widest">{v.word}</span>
                  {v.definition}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900"></span>
                </span>
              </span>
            );
          } else if (t) {
            newParts.push(t);
          }
        });
      });
      parts = newParts;
    });
    
    return <>{parts}</>;
  }

  // --- RENDERERS ---

  if (ex.type === "multipleChoice" || ex.type === "grammar") {
    return (
      <div className="space-y-4">
        <p className="text-lg font-medium text-slate-800">{ex.prompt}</p>
        <div className="grid gap-2">
          {ex.options.map((opt, i) => {
            let statusClass = "border-slate-200 hover:border-slate-300 bg-white text-slate-700";
            if (submitted) {
              if (i === ex.answerIndex) statusClass = "border-green-500 bg-green-50 text-green-700";
              else if (i === selectedOption) statusClass = "border-red-500 bg-red-50 text-red-700";
              else statusClass = "border-slate-100 bg-slate-50 text-slate-400";
            } else if (i === selectedOption) {
              statusClass = "border-slate-900 bg-slate-900 text-white";
            }

            return (
              <button
                key={i}
                onClick={() => handleMultipleChoice(i)}
                disabled={submitted}
                className={`rounded-xl border p-4 text-left text-sm font-bold transition flex items-center justify-between ${statusClass}`}
              >
                <span>{opt}</span>
                {submitted && i === ex.answerIndex && <Check className="w-4 h-4" />}
                {submitted && i === selectedOption && i !== ex.answerIndex && <X className="w-4 h-4" />}
              </button>
            );
          })}
        </div>
        {layout === "default" && submitted && ex.explanation && (
          <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-sm text-blue-800">
            <div className="flex items-center gap-2 mb-1">
              <Info className="w-4 h-4" />
              <span className="font-black">Explanation</span>
            </div>
            {ex.explanation}
          </div>
        )}
      </div>
    );
  }

  if (ex.type === "reading") {
    const rex = ex as ReadingExercise;
    return (
      <div className="space-y-8">
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative">
          <div className="flex items-center gap-2 mb-4 text-indigo-600 font-bold text-xs uppercase tracking-widest">
            <BookOpen className="w-4 h-4" />
            <span>Reading Passage</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 mb-4">{rex.title}</h3>
          <div className="text-slate-700 leading-relaxed whitespace-pre-line prose prose-slate max-w-none">
            {renderVocabularyTooltips(rex.text, rex.vocabularyHelp)}
          </div>
          <p className="mt-4 text-[10px] text-slate-400 italic">Hover over dotted words for definitions.</p>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 bg-slate-900 text-white text-[10px] flex items-center justify-center rounded-lg">Q</span>
            Comprehension Questions
          </h4>
          {rex.questions.map((q, qIdx) => (
            <div key={q.id || qIdx} className="space-y-3 p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
              <p className="font-bold text-slate-800 text-sm">{qIdx + 1}. {q.question}</p>
              <div className="grid gap-2">
                {q.options.map((opt, i) => {
                  const isSelected = multiAnswers[q.id || qIdx] === i;
                  let btnClass = "border-slate-100 bg-slate-50 text-slate-600";
                  if (submitted) {
                    if (i === q.answerIndex) btnClass = "border-green-500 bg-green-50 text-green-700";
                    else if (isSelected) btnClass = "border-red-500 bg-red-50 text-red-700";
                    else btnClass = "opacity-50 border-slate-100 bg-slate-50 text-slate-400";
                  } else if (isSelected) {
                    btnClass = "border-slate-900 bg-slate-900 text-white";
                  }

                  return (
                    <button
                      key={i}
                      disabled={submitted}
                      onClick={() => setMultiAnswers({ ...multiAnswers, [q.id || qIdx]: i })}
                      className={`p-3 text-left text-xs font-bold rounded-lg border transition ${btnClass}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && q.explanation && (
                <p className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg italic">
                  <span className="font-bold not-italic">Note:</span> {q.explanation}
                </p>
              )}
            </div>
          ))}
          {layout === "default" && !submitted && (
            <button
              onClick={handleMultiQuestionSubmit}
              className="w-full rounded-xl bg-slate-900 py-4 text-sm font-black text-white hover:brightness-95 transition"
            >
              Check Reading Answers
            </button>
          )}
        </div>
      </div>
    );
  }

  if (ex.type === "listening") {
    const lex = ex as ListeningExercise;
    return (
      <div className="space-y-8">
        <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-sm border border-orange-100">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">{lex.title}</h3>
              <p className="text-xs text-orange-700 font-bold">Audio Track · {Math.floor(lex.duration / 60)}:{(lex.duration % 60).toString().padStart(2, '0')}</p>
            </div>
          </div>
          <audio 
            ref={audioRef}
            src={lex.audioUrl} 
            className="w-full h-10 accent-orange-600"
            controls
            controlsList="nodownload"
          />
          {lex.transcript && (
            <details className="mt-4">
              <summary className="text-xs font-black text-orange-800 cursor-pointer hover:underline list-none">View Transcript</summary>
              <div className="mt-2 p-4 bg-white/50 rounded-xl text-sm italic text-slate-600 leading-relaxed">
                {lex.transcript}
              </div>
            </details>
          )}
        </div>

        <div className="space-y-6">
          {lex.questions.map((q, qIdx) => (
            <div key={q.id || qIdx} className="space-y-3 p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
              <p className="font-bold text-slate-800 text-sm">{qIdx + 1}. {q.question}</p>
              <div className="grid gap-2">
                {q.options.map((opt, i) => {
                  const isSelected = multiAnswers[q.id || qIdx] === i;
                  let btnClass = "border-slate-100 bg-slate-50 text-slate-600";
                  if (submitted) {
                    if (i === q.answerIndex) btnClass = "border-green-500 bg-green-50 text-green-700";
                    else if (isSelected) btnClass = "border-red-500 bg-red-50 text-red-700";
                  } else if (isSelected) {
                    btnClass = "border-orange-600 bg-orange-600 text-white";
                  }

                  return (
                    <button
                      key={i}
                      disabled={submitted}
                      onClick={() => setMultiAnswers({ ...multiAnswers, [q.id || qIdx]: i })}
                      className={`p-3 text-left text-xs font-bold rounded-lg border transition ${btnClass}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          {layout === "default" && !submitted && (
            <button
              onClick={handleMultiQuestionSubmit}
              className="w-full rounded-xl bg-orange-600 py-4 text-sm font-black text-white hover:brightness-95 transition"
            >
              Check Listening Answers
            </button>
          )}
        </div>
      </div>
    );
  }

  if (ex.type === "matching") {
    const mex = ex as MatchingExercise;
    return (
      <div className="space-y-6">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-tight">{mex.instructions}</p>
        <div className="space-y-4">
          {mex.pairs.map((pair, pIdx) => (
            <div key={pair.id || pIdx} className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black px-2 py-1 bg-slate-900 text-white rounded-lg">{pair.word}</span>
                <span className="text-slate-400">matches with...</span>
              </div>
              <div className="grid gap-2">
                {[pair.correctMatch, ...pair.distractors].sort().map((opt, i) => {
                  const isSelected = multiAnswers[pair.id || pIdx] === i;
                  let btnClass = "border-slate-100 bg-slate-50 text-slate-600";
                  if (submitted) {
                    if (opt === pair.correctMatch) btnClass = "border-green-500 bg-green-50 text-green-700";
                    else if (isSelected) btnClass = "border-red-500 bg-red-50 text-red-700";
                  } else if (isSelected) {
                    btnClass = "border-indigo-600 bg-indigo-600 text-white";
                  }

                  return (
                    <button
                      key={i}
                      disabled={submitted}
                      onClick={() => setMultiAnswers({ ...multiAnswers, [pair.id || pIdx]: i })}
                      className={`p-3 text-left text-xs font-bold rounded-lg border transition ${btnClass}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {layout === "default" && !submitted && (
          <button
            onClick={() => {
              const allCorrect = mex.pairs.every((p, idx) => {
                const opts = [p.correctMatch, ...p.distractors].sort();
                return opts[multiAnswers[p.id || idx]] === p.correctMatch;
              });
              setIsCorrect(allCorrect);
              setSubmitted(true);
              onResult(allCorrect);
            }}
            className="w-full rounded-xl bg-slate-900 py-4 text-sm font-black text-white"
          >
            Check Matches
          </button>
        )}
      </div>
    );
  }

  if (ex.type === "word-search") {
    const wsex = ex as WordSearchType;
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-900">{wsex.title}</h3>
        <WordSearchExercise 
          words={wsex.words} 
          gridSize={wsex.gridSize || 10} 
          onComplete={() => {
            setIsCorrect(true);
            setSubmitted(true);
            onResult(true);
          }} 
        />
      </div>
    );
  }

  if (ex.type === "crossword") {
    const cex = ex as CrosswordType;
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-900">{cex.title}</h3>
        <CrosswordExercise 
          items={cex.items} 
          onComplete={() => {
            setIsCorrect(true);
            setSubmitted(true);
            onResult(true);
          }} 
        />
      </div>
    );
  }

  if (ex.type === "flashcard") {
    const fex = ex as FlashcardType;
    return (
      <div className="space-y-4">
        <FlashcardExercise 
          content={fex.content} 
          onComplete={(quality) => {
            // Quality >= 3 is considered "correct" for progress purposes
            const correct = quality >= 3;
            setIsCorrect(correct);
            setSubmitted(true);
            onResult(correct);
          }} 
        />
      </div>
    );
  }

  if (ex.type === "drag-drop") {
    const ddex = ex as DragDropType;
    return (
      <div className="space-y-4">
        <DragDropExercise 
          content={ddex.content} 
          onComplete={(correct) => {
            setIsCorrect(correct);
            setSubmitted(true);
            onResult(correct);
          }} 
        />
      </div>
    );
  }

  // --- FALLBACK FOR FILL BLANKS ---
  if (ex.type === "fillBlanks") {
    const parts = ex.text.split("___");
    return (
      <div className="space-y-4">
        {ex.instructions && <p className="text-sm font-bold text-slate-500 uppercase tracking-tight">{ex.instructions}</p>}
        <div className="leading-loose text-slate-800 font-medium">
          {parts.map((part, i) => (
            <span key={i}>
              {part}
              {i < parts.length - 1 && (
                <input
                  type="text"
                  value={fillAnswers[i] || ""}
                  onChange={(e) => {
                    const next = [...fillAnswers];
                    next[i] = e.target.value;
                    setFillAnswers(next);
                  }}
                  disabled={submitted}
                  className={`mx-1 inline-block w-32 rounded-lg border px-2 py-1 text-center font-bold outline-none transition ${
                    submitted
                      ? isCorrect
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-red-500 bg-red-50 text-red-700"
                      : "border-slate-300 focus:border-slate-900 shadow-sm"
                  }`}
                />
              )}
            </span>
          ))}
        </div>
        {layout === "default" && !submitted && (
          <button
            onClick={handleFillBlanks}
            className="rounded-xl bg-slate-900 px-6 py-2 text-sm font-black text-white hover:brightness-95"
          >
            Check Answers
          </button>
        )}
        {layout === "default" && submitted && ex.explanation && (
          <div className="rounded-xl bg-slate-100 p-4 text-sm text-slate-700">
            <span className="font-black">Explanation:</span> {ex.explanation}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500 italic">
      Renderer for "{ex.type}" not fully implemented yet.
    </div>
  );
});

ExerciseRenderer.displayName = "ExerciseRenderer";

export default ExerciseRenderer;
