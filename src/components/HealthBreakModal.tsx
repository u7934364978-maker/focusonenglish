'use client';

import { useState, useEffect } from 'react';
import { X, Activity, Droplet, Brain, Heart, TrendingUp } from 'lucide-react';

interface HealthBreakModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSnooze: () => void;
}

const healthTips = [
  {
    title: "El ejercicio mejora la memoria",
    description: "Hacer ejercicio físico aumenta el flujo sanguíneo al cerebro, mejorando la memoria y la capacidad de aprendizaje hasta un 20%.",
    icon: Brain,
    color: "text-purple-500"
  },
  {
    title: "El movimiento reduce el estrés",
    description: "15 sentadillas liberan endorfinas que reducen el estrés y mejoran tu estado de ánimo, ayudándote a concentrarte mejor.",
    icon: Heart,
    color: "text-red-500"
  },
  {
    title: "La hidratación es clave",
    description: "Una deshidratación del 2% puede reducir tu capacidad cognitiva en un 30%. Beber agua mejora tu concentración y rendimiento.",
    icon: Droplet,
    color: "text-blue-500"
  },
  {
    title: "Microdescansos activos",
    description: "Tomar descansos activos cada hora mejora la retención de información y previene la fatiga mental.",
    icon: Activity,
    color: "text-green-500"
  },
  {
    title: "Oxigenación cerebral",
    description: "El ejercicio aumenta el oxígeno en tu cerebro, mejorando la velocidad de procesamiento y la claridad mental.",
    icon: TrendingUp,
    color: "text-orange-500"
  }
];

export default function HealthBreakModal({ isOpen, onClose, onSnooze }: HealthBreakModalProps) {
  const [squatCount, setSquatCount] = useState(0);
  const [isExercising, setIsExercising] = useState(false);
  const [hasCompletedSquats, setHasCompletedSquats] = useState(false);
  const [hasDrunkWater, setHasDrunkWater] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Seleccionar un consejo aleatorio cada vez que se abre
      setCurrentTip(Math.floor(Math.random() * healthTips.length));
      setSquatCount(0);
      setIsExercising(false);
      setHasCompletedSquats(false);
      setHasDrunkWater(false);
    }
  }, [isOpen]);

  const handleSquatClick = () => {
    if (squatCount < 15) {
      setSquatCount(prev => prev + 1);
      setIsExercising(true);
      
      if (squatCount + 1 === 15) {
        setHasCompletedSquats(true);
      }

      setTimeout(() => setIsExercising(false), 300);
    }
  };

  const tip = healthTips[currentTip];
  const TipIcon = tip.icon;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        {/* Header con gradiente */}
        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-8 h-8 animate-pulse" />
              <h2 className="text-2xl font-bold">¡Hora de un Descanso Activo!</h2>
            </div>
            <p className="text-white/90 text-sm">
              Llevas 60 minutos estudiando. Cuida tu cuerpo y tu mente.
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-6">
          {/* Consejo de salud */}
          <div className={`flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border-l-4 ${tip.color.replace('text-', 'border-')}`}>
            <div className={`flex-shrink-0 ${tip.color}`}>
              <TipIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                {tip.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          </div>

          {/* Contador de sentadillas */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Reto: 15 Sentadillas
              </h3>
              <span className={`text-2xl font-bold ${squatCount === 15 ? 'text-green-500' : 'text-gray-600 dark:text-gray-400'}`}>
                {squatCount}/15
              </span>
            </div>

            {/* Barra de progreso */}
            <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${(squatCount / 15) * 100}%` }}
              />
            </div>

            {/* Botón de sentadilla */}
            <button
              onClick={handleSquatClick}
              disabled={hasCompletedSquats}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
                hasCompletedSquats
                  ? 'bg-green-500 cursor-default'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-95'
              } ${isExercising ? 'scale-95' : 'scale-100'}`}
            >
              {hasCompletedSquats ? (
                <span className="flex items-center justify-center gap-2">
                  <span>✓</span> ¡Sentadillas Completadas!
                </span>
              ) : (
                <span>Clic aquí por cada sentadilla que hagas</span>
              )}
            </button>

            {hasCompletedSquats && (
              <p className="text-center text-green-600 dark:text-green-400 text-sm font-medium animate-in fade-in duration-300">
                ¡Excelente! Tu cerebro te lo agradece 🧠✨
              </p>
            )}
          </div>

          {/* Recordatorio de agua */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <Droplet className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-white">
                  No olvides hidratarte
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Bebe un vaso de agua para mantener tu cerebro funcionando al 100%
                </p>
              </div>
            </div>

            <button
              onClick={() => setHasDrunkWater(!hasDrunkWater)}
              className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                hasDrunkWater
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {hasDrunkWater ? '✓ Ya bebí agua' : 'Marcar como bebido'}
            </button>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onSnooze}
              className="flex-1 py-3 px-6 rounded-xl font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Recordar en 15 min
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 px-6 rounded-xl font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all"
            >
              Continuar estudiando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
