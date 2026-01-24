'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Brain, Sparkles, Target, TrendingUp, BarChart3, Award, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

interface LevelInfo {
  level: CEFRLevel;
  name: string;
  description: string;
  color: string;
  gradient: string;
  skills: string[];
  exerciseTypes: string[];
}

const LEVELS: LevelInfo[] = [
  {
    level: 'A1',
    name: 'Principiante',
    description: 'Nivel básico - Primeros pasos en inglés',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    skills: ['Saludos básicos', 'Presente simple', 'Vocabulario cotidiano', 'Números y fechas'],
    exerciseTypes: ['Fill in the Blanks', 'Multiple Choice', 'Matching', 'Word Formation']
  },
  {
    level: 'A2',
    name: 'Elemental',
    description: 'Pre-intermedio - Comunicación simple',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-600',
    skills: ['Pasado simple', 'Comparativos', 'Presente continuo', 'Conversaciones básicas'],
    exerciseTypes: ['Fill in the Blanks', 'Multiple Choice', 'Sentence Building', 'Reading Comprehension']
  },
  {
    level: 'B1',
    name: 'Intermedio',
    description: 'Independencia en situaciones comunes',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-600',
    skills: ['Presente perfecto', 'Condicionales', 'Voz pasiva', 'Expresar opiniones'],
    exerciseTypes: ['Multiple Choice', 'Key Word Transformation', 'Sentence Building', 'Writing Analysis']
  },
  {
    level: 'B2',
    name: 'Intermedio Alto',
    description: 'Fluidez y espontaneidad en conversaciones',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-600',
    skills: ['Estructuras complejas', 'Tiempos perfectos', 'Modales avanzados', 'Discurso formal'],
    exerciseTypes: ['Key Word Transformation', 'Word Formation', 'Multiple Choice Cloze', 'Reading Comprehension']
  },
  {
    level: 'C1',
    name: 'Avanzado',
    description: 'Dominio efectivo del idioma',
    color: 'red',
    gradient: 'from-red-500 to-rose-600',
    skills: ['Expresiones idiomáticas', 'Matices lingüísticos', 'Textos complejos', 'Argumentación avanzada'],
    exerciseTypes: ['Key Word Transformation', 'Word Formation', 'Writing Analysis', 'Speaking Analysis']
  },
  {
    level: 'C2',
    name: 'Maestría',
    description: 'Dominio pleno similar a nativo',
    color: 'purple',
    gradient: 'from-purple-600 to-indigo-700',
    skills: ['Precisión extrema', 'Sutilezas culturales', 'Registro formal/informal', 'Textos académicos'],
    exerciseTypes: ['Advanced Transformation', 'Academic Writing', 'Critical Analysis', 'Pronunciation Mastery']
  }
];

export default function EjerciciosInteligentesPage() {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-full mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Ejercicios Inteligentes
              <span className="block text-yellow-300 mt-2">Generados con IA</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Práctica personalizada para todos los niveles del Marco Común Europeo de Referencia (CEFR)
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <Sparkles className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Generación Dinámica</h3>
                <p className="text-sm text-white/80">Ejercicios únicos creados con IA</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <Target className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Adaptado a tu Nivel</h3>
                <p className="text-sm text-white/80">De A1 a C2, progresión natural</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Seguimiento de Progreso</h3>
                <p className="text-sm text-white/80">Estadísticas detalladas de tu avance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Selecciona tu Nivel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el nivel CEFR que mejor se adapte a tus conocimientos actuales de inglés
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {LEVELS.map((levelInfo) => (
            <div
              key={levelInfo.level}
              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                selectedLevel === levelInfo.level
                  ? 'border-violet-500 ring-4 ring-violet-200'
                  : 'border-gray-200 hover:border-violet-300'
              }`}
              onClick={() => setSelectedLevel(levelInfo.level)}
              role="button"
              tabIndex={0}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${levelInfo.gradient} text-white p-6 rounded-t-xl`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-black">{levelInfo.level}</span>
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-1">{levelInfo.name}</h3>
                <p className="text-sm text-white/80">{levelInfo.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Habilidades Clave
                  </h4>
                  <ul className="space-y-1">
                    {levelInfo.skills.slice(0, 3).map((skill, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exercise Types */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-600" />
                    Tipos de Ejercicios
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {levelInfo.exerciseTypes.slice(0, 3).map((type, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={`/ejercicios-inteligentes/${levelInfo.level.toLowerCase()}`}
                  className={`block w-full bg-gradient-to-r ${levelInfo.gradient} text-white text-center py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                >
                  Comenzar Práctica
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-2xl p-8 md:p-12 border border-violet-200">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-violet-600 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              ¿Cómo Funciona?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div>
                <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-black mb-3">
                  1
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Selecciona tu Nivel</h4>
                <p className="text-sm text-gray-600">
                  Elige el nivel CEFR que corresponda a tus conocimientos actuales
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-black mb-3">
                  2
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Genera Ejercicios</h4>
                <p className="text-sm text-gray-600">
                  Nuestra IA crea ejercicios personalizados adaptados a tu nivel
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-black mb-3">
                  3
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Practica y Mejora</h4>
                <p className="text-sm text-gray-600">
                  Completa ejercicios, recibe feedback instantáneo y sigue tu progreso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
