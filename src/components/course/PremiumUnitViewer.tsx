'use client';

import React, { useState } from 'react';
import { 
  Play, 
  Star,
  X,
  Trophy,
  Target,
  Clock,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PremiumCourseSession from './exercises/PremiumSession';
import { UnitData, PremiumBlock } from '@/types/premium-course';

interface Props {
  unitData: UnitData;
}

export default function PremiumUnitViewer({ unitData }: Props) {
  const { course, blocks, learning_outcomes } = unitData;
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (isStarted) {
    return (
      <PremiumCourseSession 
        unitData={unitData}
        onComplete={() => {
          setIsCompleted(true);
          setIsStarted(false);
        }}
        onExit={() => setIsStarted(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="max-w-4xl mx-auto p-6 md:p-12 space-y-12 pb-32">
        {/* Unit Header / Hero */}
        <header className="space-y-8">
          <div className="flex items-center justify-between">
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <div className="bg-orange-100 px-6 py-2 rounded-2xl flex items-center gap-2 border border-orange-200">
              <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
              <span className="font-black text-orange-700 uppercase tracking-widest text-sm">Premium Course</span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-10 md:p-16 text-slate-900 shadow-2xl shadow-indigo-100 relative overflow-hidden group border-2 border-slate-100"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 bg-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em]">
                  {course.unit_id} · {course.level}
                </span>
                {isCompleted && (
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Completado
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                {course.unit_title}
              </h1>
              
              <div className="pt-8">
                <Button 
                  onClick={() => setIsStarted(true)}
                  className="w-full md:w-auto px-12 py-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] font-black text-2xl shadow-xl shadow-indigo-100 border-b-8 border-indigo-800 active:translate-y-1 transition-all flex items-center gap-4 group/btn"
                >
                  {isCompleted ? 'REPETIR UNIDAD' : 'EMPEZAR AHORA'}
                  <Play className="w-6 h-6 fill-white group-hover/btn:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Learning Outcomes */}
        {learning_outcomes && learning_outcomes.length > 0 && (
          <section className="max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-xl shadow-slate-200/50 space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">Lo que aprenderás</h2>
              </div>
              
              <ul className="space-y-4">
                {learning_outcomes.map((outcome: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform" />
                    <span className="text-slate-600 font-bold text-lg leading-snug">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>
        )}

        {/* Completion Status */}
        {isCompleted && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-amber-100 border-2 border-amber-200 rounded-[2.5rem] p-8 flex flex-col items-center text-center gap-6"
          >
            <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10 text-amber-600 fill-amber-300" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-amber-900">¡Maestría Alcanzada!</h3>
              <p className="text-amber-800 font-bold">Has completado esta unidad con éxito. Puedes repetirla para perfeccionar tu pronunciación.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
