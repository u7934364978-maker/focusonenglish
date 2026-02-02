'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Trophy, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  Briefcase, 
  Plane, 
  GraduationCap,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { updateUserProfile } from '@/lib/services/profile-service';
import { useUser } from '@/hooks/useAuth';

const STEPS = [
  {
    id: 'goal',
    title: '¿Cuál es tu objetivo principal?',
    description: 'Personalizaremos tu contenido basado en lo que realmente necesitas.',
    options: [
      { id: 'trabajo', label: 'Trabajo / Negocios', icon: Briefcase, color: 'bg-blue-500' },
      { id: 'viajes', label: 'Viajes / Ocio', icon: Plane, color: 'bg-orange-500' },
      { id: 'examenes', label: 'Exámenes Oficiales', icon: GraduationCap, color: 'bg-purple-500' },
    ]
  },
  {
    id: 'level',
    title: '¿Cuál es tu nivel actual?',
    description: 'Si no estás seguro, te recomendaremos empezar desde el principio.',
    options: [
      { id: 'A1', label: 'Principiante (A1)', description: 'Sé algunas palabras básicas' },
      { id: 'A2', label: 'Elemental (A2)', description: 'Puedo tener conversaciones simples' },
      { id: 'B1', label: 'Intermedio (B1)', description: 'Me desenvuelvo en la mayoría de situaciones' },
      { id: 'B2', label: 'Intermedio Alto (B2)', description: 'Hablo con fluidez y naturalidad' },
    ]
  },
  {
    id: 'commitment',
    title: '¿Cuánto tiempo quieres dedicarle?',
    description: 'La constancia es la clave del éxito.',
    options: [
      { id: '10', label: 'Casual', description: '10 minutos al día', icon: Clock },
      { id: '20', label: 'Regular', description: '20 minutos al día', icon: Target },
      { id: '45', label: 'Intenso', description: '45 minutos al día', icon: Trophy },
    ]
  }
];

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const handleSelect = (stepId: string, optionId: string) => {
    setSelections(prev => ({ ...prev, [stepId]: optionId }));
    if (currentStep < STEPS.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const handleFinish = async () => {
    if (!user) {
      router.push('/cuenta/login');
      return;
    }

    setIsSubmitting(true);
    try {
      await updateUserProfile(user.id, {
        language_level: selections.level,
        learning_goals: [selections.goal],
        // Additional metadata could be stored in a separate table or JSON field if needed
      });
      router.push('/dashboard');
    } catch (error) {
      console.error('Error saving onboarding data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const step = STEPS[currentStep];
  const progress = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <span>Paso {currentStep + 1} de {STEPS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-8 sm:p-12 border border-slate-100"
          >
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                {step.title}
              </h1>
              <p className="text-lg text-slate-500 font-medium">
                {step.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {step.options.map((option) => {
                const Icon = option.icon;
                const isSelected = selections[step.id] === option.id;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(step.id, option.id)}
                    className={`group relative flex items-center p-6 rounded-2xl border-2 transition-all duration-200 text-left ${
                      isSelected 
                        ? 'border-[#FF6B6B] bg-orange-50 shadow-md' 
                        : 'border-slate-100 hover:border-orange-200 hover:bg-slate-50'
                    }`}
                  >
                    {Icon && (
                      <div className={`p-3 rounded-xl mr-6 transition-colors ${
                        isSelected ? 'bg-[#FF6B6B] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-orange-100 group-hover:text-orange-500'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className={`text-lg font-black ${isSelected ? 'text-[#FF6B6B]' : 'text-slate-900'}`}>
                        {option.label}
                      </h3>
                      {option.description && (
                        <p className="text-slate-500 text-sm font-medium mt-1">
                          {option.description}
                        </p>
                      )}
                    </div>
                    {isSelected && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-[#FF6B6B]"
                      >
                        <CheckCircle2 className="w-6 h-6" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-12 flex justify-between items-center">
              <button
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 font-bold text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-0`}
              >
                <ChevronLeft className="w-5 h-5" />
                Atrás
              </button>

              {currentStep === STEPS.length - 1 && selections[step.id] && (
                <button
                  onClick={handleFinish}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-orange-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50 disabled:scale-100"
                >
                  {isSubmitting ? (
                    'Guardando...'
                  ) : (
                    <>
                      ¡Empezar ahora!
                      <Sparkles className="w-5 h-5" />
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Support text */}
        <p className="mt-8 text-center text-slate-400 text-sm font-medium">
          Podrás cambiar estas preferencias en cualquier momento desde tu perfil.
        </p>
      </div>
    </div>
  );
}
