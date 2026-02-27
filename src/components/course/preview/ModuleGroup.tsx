'use client';

import { useState } from 'react';
import { ChevronDown, Clock, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModuleMetadata } from '@/types/premium-course';
import { UnitCard } from './UnitCard';

interface ModuleGroupProps {
  module: ModuleMetadata;
  isInitiallyExpanded?: boolean;
}

const MODULE_COLORS = [
  { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', badgeBg: 'bg-orange-500' },
  { bg: 'bg-blue-500',   light: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-600',   badgeBg: 'bg-blue-500' },
  { bg: 'bg-emerald-500',light: 'bg-emerald-50', border: 'border-emerald-200',text: 'text-emerald-600',badgeBg: 'bg-emerald-500' },
  { bg: 'bg-purple-500', light: 'bg-purple-50',  border: 'border-purple-200', text: 'text-purple-600', badgeBg: 'bg-purple-500' },
  { bg: 'bg-rose-500',   light: 'bg-rose-50',    border: 'border-rose-200',   text: 'text-rose-600',   badgeBg: 'bg-rose-500' },
];

export function ModuleGroup({ module, isInitiallyExpanded = false }: ModuleGroupProps) {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);
  const color = MODULE_COLORS[(module.moduleNumber - 1) % MODULE_COLORS.length];

  return (
    <div className={`bg-white rounded-3xl border-2 overflow-hidden shadow-sm hover:shadow-md transition-all ${isExpanded ? color.border : 'border-slate-100'}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-5 min-h-[72px] flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-inset"
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? 'Colapsar' : 'Expandir'} módulo ${module.moduleNumber}`}
      >
        <div className="flex items-center gap-4 flex-1">
          <div className={`w-14 h-14 rounded-2xl ${color.badgeBg} text-white font-black text-xl flex items-center justify-center shadow-md flex-shrink-0`}>
            {module.moduleNumber}
          </div>

          <div className="flex-1 text-left">
            <h2 className="text-xl font-black text-slate-900 leading-tight">
              {module.title}
            </h2>
            {module.description && (
              <p className="text-slate-500 font-medium text-sm mt-0.5 line-clamp-1">
                {module.description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-400 font-bold">
              <div className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{module.unitCount} unidad{module.unitCount !== 1 ? 'es' : ''}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{module.totalDuration} min</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
          isExpanded ? `${color.bg} text-white` : 'bg-slate-100 text-slate-400'
        }`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`px-6 pb-6 pt-4 ${color.light} border-t ${color.border}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {module.units.map((unit) => (
                  <UnitCard key={unit.unitId} unit={unit} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
