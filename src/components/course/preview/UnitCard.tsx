'use client';

import { motion } from 'framer-motion';
import { Clock, BookOpen, ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';
import { UnitMetadata } from '@/types/premium-course';
import { trackUnitCardClick } from '@/lib/analytics';

interface UnitCardProps {
  unit: UnitMetadata;
}

const MODULE_COLORS = [
  { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', hover: 'hover:border-orange-300 hover:bg-orange-50/50' },
  { bg: 'bg-blue-500',   light: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-600',   hover: 'hover:border-blue-300 hover:bg-blue-50/50' },
  { bg: 'bg-emerald-500',light: 'bg-emerald-50', border: 'border-emerald-200',text: 'text-emerald-600',hover: 'hover:border-emerald-300 hover:bg-emerald-50/50' },
  { bg: 'bg-purple-500', light: 'bg-purple-50',  border: 'border-purple-200', text: 'text-purple-600', hover: 'hover:border-purple-300 hover:bg-purple-50/50' },
  { bg: 'bg-rose-500',   light: 'bg-rose-50',    border: 'border-rose-200',   text: 'text-rose-600',   hover: 'hover:border-rose-300 hover:bg-rose-50/50' },
];

function getModuleColor(unitNumber: number) {
  const moduleIndex = Math.floor((unitNumber - 1) / 5) % MODULE_COLORS.length;
  return MODULE_COLORS[moduleIndex];
}

export function UnitCard({ unit }: UnitCardProps) {
  const color = getModuleColor(unit.unitNumber);

  const handleCardClick = () => {
    trackUnitCardClick(unit.unitId, unit.unitNumber);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`group bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden focus-within:ring-2 focus-within:ring-offset-2 ${color.hover}`}
    >
      {/* Decorative blob */}
      <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-10 ${color.bg}`} />

      <div className="flex flex-col h-full">
        {/* Unit Number Badge */}
        <div className={`absolute top-4 right-4 w-11 h-11 rounded-2xl ${color.bg} text-white font-black text-base flex items-center justify-center shadow-md`}>
          {unit.unitNumber}
        </div>

        {/* Title */}
        <div className="mb-4 pr-14">
          <h3 className={`text-xl lg:text-2xl font-black text-slate-900 leading-tight group-hover:${color.text} transition-colors line-clamp-2`}>
            {unit.title}
          </h3>
        </div>

        {/* Topics */}
        {unit.topics && unit.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {unit.topics.slice(0, 3).map((topic, index) => (
              <span
                key={`${topic}-${index}`}
                className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-slate-50 text-slate-400 border border-slate-100"
              >
                {topic}
              </span>
            ))}
            {unit.topics.length > 3 && (
              <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-slate-50 text-slate-400 border border-slate-100">
                +{unit.topics.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-5 mt-auto">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-300" />
            <span className="font-medium">{unit.estimatedDuration} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-slate-300" />
            <span className="font-medium">{unit.exerciseCount} ejercicios</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={`/curso-a1/${unit.unitId}`}
          prefetch
          onClick={handleCardClick}
          className={`flex items-center justify-center gap-2 px-5 py-3 min-h-[48px] ${color.light} ${color.text} rounded-2xl font-bold text-sm border ${color.border} group-hover:${color.bg} group-hover:text-white group-hover:border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-offset-2`}
          aria-label={`Practicar ${unit.title}`}
        >
          <span>Practicar</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
