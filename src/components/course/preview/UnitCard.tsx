'use client';

import { motion } from 'framer-motion';
import { Star, Clock, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { UnitMetadata } from '@/types/premium-course';

interface UnitCardProps {
  unit: UnitMetadata;
}

export function UnitCard({ unit }: UnitCardProps) {
  const difficultyStars = Array.from({ length: 5 }, (_, i) => i < unit.difficulty);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-coral-200 transition-all relative overflow-hidden"
    >
      <div className="flex flex-col h-full">
        {/* Unit Number Badge */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-coral-50 text-coral-600 font-black text-lg flex items-center justify-center border border-coral-100">
          {unit.unitNumber}
        </div>

        {/* Title */}
        <div className="mb-4 pr-16">
          <h3 className="text-xl lg:text-2xl font-black text-slate-900 leading-tight group-hover:text-coral-600 transition-colors line-clamp-2">
            {unit.title}
          </h3>
        </div>

        {/* Topics */}
        {unit.topics && unit.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {unit.topics.slice(0, 4).map((topic, index) => (
              <span
                key={`${topic}-${index}`}
                className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-slate-50 text-slate-400 border border-slate-100"
              >
                {topic}
              </span>
            ))}
            {unit.topics.length > 4 && (
              <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-slate-50 text-slate-400 border border-slate-100">
                +{unit.topics.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Metadata */}
        <div className="flex flex-col gap-3 mb-6 mt-auto">
          {/* Difficulty */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {difficultyStars.map((filled, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    filled ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Difficulty
            </span>
          </div>

          {/* Duration & Exercise Count */}
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="font-medium">{unit.estimatedDuration} min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span className="font-medium">{unit.exerciseCount} exercises</span>
            </div>
          </div>
        </div>

        {/* Preview Button */}
        <Link
          href={`/debug/a1-preview/${unit.unitId}`}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-coral-50 text-coral-600 rounded-xl font-bold text-sm hover:bg-coral-100 hover:shadow-coral transition-all group-hover:bg-coral-600 group-hover:text-white"
        >
          <span>Preview Unit</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
