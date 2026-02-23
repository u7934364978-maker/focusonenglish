'use client';

import { motion } from 'framer-motion';
import { Clock, Target, BookOpen, CheckCircle } from 'lucide-react';
import { UnitMetadata } from '@/types/premium-course';

interface UnitOverviewHeaderProps {
  unit: UnitMetadata;
}

export function UnitOverviewHeader({ unit }: UnitOverviewHeaderProps) {
  const exerciseTypeLabels: Record<string, string> = {
    multiple_choice: 'Multiple Choice',
    fill_in_the_blank: 'Fill in the Blank',
    matching: 'Matching',
    drag_and_drop: 'Drag & Drop',
    categorization: 'Categorization',
    short_answer: 'Short Answer',
    audio_matching: 'Audio Matching',
    listening: 'Listening',
    video_narrative: 'Video Narrative',
    flashcards: 'Flashcards',
    other: 'Other',
  };

  const exerciseTypes = Object.entries(unit.exerciseBreakdown)
    .filter(([key, count]) => key !== 'total' && count > 0)
    .map(([type, count]) => ({
      type,
      label: exerciseTypeLabels[type] || type,
      count,
    }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm mb-8"
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-coral-100 text-coral-600 flex items-center justify-center font-black text-lg">
            {unit.unitNumber}
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Unit {unit.unitNumber}</p>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              {unit.title}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-slate-600">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-slate-400" />
            <span className="font-medium">{unit.estimatedDuration} minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-slate-400" />
            <span className="font-medium">{unit.exerciseCount} exercises</span>
          </div>
        </div>
      </div>

      {unit.learningOutcomes && unit.learningOutcomes.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-coral-600" />
            <h2 className="text-xl font-black text-slate-900">Learning Outcomes</h2>
          </div>
          <ul className="space-y-3">
            {unit.learningOutcomes.map((outcome, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 leading-relaxed">{outcome}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {unit.topics && unit.topics.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
            Topics Covered
          </h3>
          <div className="flex flex-wrap gap-2">
            {unit.topics.map((topic, index) => (
              <span
                key={`${topic}-${index}`}
                className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-100"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {exerciseTypes.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
            Exercise Types
          </h3>
          <div className="flex flex-wrap gap-3">
            {exerciseTypes.map(({ type, label, count }) => (
              <div
                key={type}
                className="flex items-center gap-2 px-4 py-2 bg-coral-50 text-coral-700 rounded-xl border border-coral-100"
              >
                <span className="font-bold">{count}</span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
