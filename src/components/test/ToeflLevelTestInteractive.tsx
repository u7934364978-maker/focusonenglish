'use client';

import { useState } from 'react';
import { TOEFL_LEVEL_TEST_QUESTIONS, calculateToeflLevel } from '@/lib/placement/toefl-test-data';
import { type LevelResult } from '@/lib/level-test-data';
import { CheckCircle2, ArrowRight, ArrowLeft, BarChart3, Clock, Award } from 'lucide-react';
import Link from 'next/link';

export default function ToeflLevelTestInteractive() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<LevelResult | null>(null);
  const [startTime] = useState(Date.now());
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ firstName: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = TOEFL_LEVEL_TEST_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / TOEFL_LEVEL_TEST_QUESTIONS.length) * 100;
  const isLastQuestion = currentQuestionIndex === TOEFL_LEVEL_TEST_QUESTIONS.length - 1;
  const hasAnswered = answers[currentQuestion?.id] !== undefined;

  const totalPoints = TOEFL_LEVEL_TEST_QUESTIONS.reduce((acc, q) => acc + q.points, 0);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowLeadForm(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Calculate results
    let totalScore = 0;
    TOEFL_LEVEL_TEST_QUESTIONS.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        totalScore += question.points;
      }
    });
    
    const levelResult = calculateToeflLevel(totalScore, totalPoints);
    setResult(levelResult);

    // Sync with CRM
    try {
      await fetch('/api/level-test/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          score: Math.round(levelResult.percentage),
          level: levelResult.level,
          testType: 'TOEFL',
          answers
        })
      });
    } catch (error) {
      console.error('Error syncing with CRM:', error);
    }

    setIsSubmitting(false);
    setShowLeadForm(false);
    setShowResults(true);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setHasStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setResult(null);
  };

  const getTimeSpent = () => {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Start screen
  if (!hasStarted) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              Test de Nivel TOEFL iBT
            </h2>
            <p className="text-lg text-slate-600">
              Evalúa tu preparación para el TOEFL con {TOEFL_LEVEL_TEST_QUESTIONS.length} preguntas de nivel académico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-slate-900">Duración</h3>
              </div>
              <p className="text-sm text-slate-600">10-15 minutos</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-slate-900">Preguntas</h3>
              </div>
              <p className="text-sm text-slate-600">{TOEFL_LEVEL_TEST_QUESTIONS.length} académicas</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-slate-900">Niveles</h3>
              </div>
              <p className="text-sm text-slate-600">B1 hasta C1+</p>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Comenzar Test TOEFL
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Lead capture form screen
  if (showLeadForm) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              ¡Evaluación Finalizada!
            </h2>
            <p className="text-lg text-slate-600">
              Introduce tus datos para descubrir tu nivel recomendado de preparación para el TOEFL iBT.
            </p>
          </div>

          <form onSubmit={handleSubmitLead} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                required
                value={leadData.firstName}
                onChange={(e) => setLeadData(prev => ({ ...prev, firstName: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="Ej: Ana García"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={leadData.email}
                onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Analizando...' : 'Ver Resultados TOEFL'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Results screen
  if (showResults && result) {
    const correctCount = Object.keys(answers).filter(
      id => {
        const q = TOEFL_LEVEL_TEST_QUESTIONS.find(item => item.id === id);
        return q && answers[id] === q.correctAnswer;
      }
    ).length;

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className={`${result.gradient} text-white p-8 md:p-12 text-center`}>
            <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-black mb-2">
              {result.title}
            </h2>
            <p className="text-xl text-white/90 mb-6">
              {result.description}
            </p>
            <div className="flex items-center justify-center gap-8 text-white/90">
              <div>
                <div className="text-3xl font-black">{Math.round(result.percentage)}%</div>
                <div className="text-sm">Dominio</div>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div>
                <div className="text-3xl font-black">{correctCount}/{TOEFL_LEVEL_TEST_QUESTIONS.length}</div>
                <div className="text-sm">Correctas</div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-black text-slate-900 mb-6">
              🚀 Tu Plan de Preparación TOEFL
            </h3>
            <div className="space-y-3 mb-8">
              {result.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{rec}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={result.courseUrl}
                className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
              >
                Empezar Curso Preparatorio →
              </Link>
              <button
                onClick={handleRestart}
                className="flex-1 bg-white text-slate-700 border-2 border-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
              >
                Repetir Evaluación
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Test screen
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-slate-700">
            Pregunta {currentQuestionIndex + 1} de {TOEFL_LEVEL_TEST_QUESTIONS.length}
          </span>
          <span className="text-sm text-slate-600">
            Dificultad: <span className="font-bold text-orange-600">{currentQuestion.level}</span>
          </span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 mb-6">
        {currentQuestion.context && (
          <div className="mb-6 p-6 bg-slate-50 rounded-xl border border-slate-200 italic text-slate-700 leading-relaxed">
            "{currentQuestion.context}"
          </div>
        )}
        
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
          {currentQuestion.question}
        </h3>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                answers[currentQuestion.id] === index
                  ? 'border-orange-500 bg-orange-50 text-orange-900'
                  : 'border-slate-100 hover:border-orange-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span className="font-medium">{option}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                answers[currentQuestion.id] === index
                  ? 'border-orange-500 bg-orange-500 text-white'
                  : 'border-slate-300 group-hover:border-orange-300'
              }`}>
                {answers[currentQuestion.id] === index && <CheckCircle2 className="w-4 h-4" />}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="flex items-center gap-2 px-6 py-3 font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Anterior
        </button>

        <button
          onClick={handleNext}
          disabled={!hasAnswered}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all disabled:opacity-50"
        >
          {isLastQuestion ? 'Finalizar' : 'Siguiente'}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
