'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModuleMetadata } from '@/types/premium-course';
import { UnitCard } from './UnitCard';

interface ModuleGroupProps {
  module: ModuleMetadata;
  isInitiallyExpanded?: boolean;
}

export function ModuleGroup({ module, isInitiallyExpanded = false }: ModuleGroupProps) {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-8 py-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${module.title}`}
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="w-16 h-16 rounded-2xl bg-coral-100 text-coral-700 font-black text-2xl flex items-center justify-center border-2 border-coral-200">
            {module.moduleNumber}
          </div>
          
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-black text-slate-900 mb-1">
              {module.title}
            </h2>
            {module.description && (
              <p className="text-slate-600 font-medium">
                {module.description}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span className="font-medium">
                  {module.unitCount} unit{module.unitCount !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{module.totalDuration} min total</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-8 h-8" />
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
            <div className="px-8 pb-8 pt-4 bg-slate-50 border-t-2 border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
