'use client';

import React, { useState, useEffect } from 'react';
import { ExerciseGenerator } from '../../../lib/course/engine/generator';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import { ArrowLeft, ArrowRight, Home, RefreshCw, User, XCircle } from 'lucide-react';
import Link from 'next/link';
import { Exercise } from '@/lib/exercise-generator';
import { MasteryManager, StudentProfile } from '../../../lib/course/engine/mastery';

export default function EngineDebugPage() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [debugMode, setDebugMode] = useState(true);
  const [targetUnit, setTargetUnit] = useState(30);

  const userId = 'debug-user';

  const generateNewSession = (unitNum: number = targetUnit) => {
    setLoading(true);
    setCurrentIndex(0);
    const generator = new ExerciseGenerator();
    const currentProfile = MasteryManager.getProfile(userId);
    setProfile(currentProfile);
    
    // Adaptive generation with broad unit range
    const adaptiveExercises = generator.generateAdaptiveSession(currentProfile, unitNum, 15);

    setExercises(adaptiveExercises);
    setLoading(false);
  };

  const handleExerciseComplete = (result?: { success: boolean; score: number }) => {
    if (result && exercises[currentIndex]) {
      const skillId = exercises[currentIndex].topic; // We mapped this to skill.id
      const updatedProfile = MasteryManager.recordResult(userId, skillId, result.success);
      setProfile(updatedProfile);
    }

    if (currentIndex < exercises.length - 1) {
      setTimeout(() => setCurrentIndex(prev => prev + 1), 1500);
    }
  };

  useEffect(() => {
    generateNewSession();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-coral-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-600 font-bold">Generando ejercicios dinámicos...</p>
      </div>
    </div>
  );

  if (exercises.length === 0) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="text-center max-w-md">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-black text-slate-800 mb-2">Error de Generación</h2>
        <p className="text-slate-600 mb-6">No se pudieron generar ejercicios para la Unidad {targetUnit}. Verifica que existan Blueprints y Lexicon para esta unidad.</p>
        <button 
          onClick={() => generateNewSession()}
          className="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-900 transition-all"
        >
          Reintentar
        </button>
      </div>
    </div>
  );

  const currentExercise = exercises[currentIndex];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header aligned with Screenshot 2 style */}
      <nav className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Home className="w-6 h-6 text-slate-600" />
          </Link>
          <h1 className="font-black text-xl text-slate-800 uppercase tracking-tight flex items-center gap-3">
            REVIEW: ENGINE
            <span className="w-px h-6 bg-slate-200" />
            <span className="text-slate-400 font-medium text-sm">
              EJERCICIO {currentIndex + 1} DE {exercises.length}
            </span>
          </h1>
        </div>
        
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-2 mr-4">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Unit:</label>
            <select 
              value={targetUnit}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setTargetUnit(val);
                generateNewSession(val);
              }}
              className="bg-slate-100 border-none rounded-lg text-xs font-bold px-3 py-1.5 focus:ring-2 focus:ring-coral-500 outline-none cursor-pointer hover:bg-slate-200 transition-colors"
            >
              {[...Array(30)].map((_, i) => (
                <option key={i + 1} value={i + 1}>Unit {i + 1}</option>
              ))}
            </select>
          </div>
          {profile && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold mr-2 border border-blue-100">
              <User className="w-3 h-3" />
              <span>Skills: {Object.keys(profile.skills).length}</span>
            </div>
          )}
          <button 
            onClick={generateNewSession}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all mr-4 shadow-lg shadow-slate-200"
          >
            <RefreshCw className="w-3 h-3" />
            REGENERAR
          </button>

          <div className="flex gap-1">
            <button 
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="p-2 bg-slate-100 rounded-xl disabled:opacity-30 hover:bg-slate-200 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentIndex(prev => Math.min(exercises.length - 1, prev + 1))}
              disabled={currentIndex === exercises.length - 1}
              className="p-2 bg-slate-100 rounded-xl disabled:opacity-30 hover:bg-slate-200 transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-4 py-8">
        {/* Progress bar matching Screenshot 2 */}
        <div className="mb-8 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-coral-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
          />
        </div>

        {/* Exercise renderer with the new style */}
        <ExerciseRenderer 
          key={currentExercise.id}
          exercise={currentExercise}
          onComplete={handleExerciseComplete}
        />

        {debugMode && profile && profile.skills[currentExercise.topic] && (
          <div className="mt-8 p-4 bg-white rounded-xl border border-dashed border-slate-300">
            <h3 className="text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">Debug Mastery Data</h3>
            <pre className="text-[10px] text-slate-500 overflow-auto">
              {JSON.stringify(profile.skills[currentExercise.topic], null, 2)}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
