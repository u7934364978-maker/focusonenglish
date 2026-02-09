'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMission } from '@/context/MissionContext';
import { Sparkles, MessageCircle } from 'lucide-react';

const RESPONSES = {
  welcome: [
    "¡Hola! Soy tu mentor. Hoy vamos a romperla en esta misión.",
    "¿Listo para subir de nivel tu inglés? ¡Empecemos!",
    "I'm here to help you. Let's get that job/flight!"
  ],
  correct: [
    "¡Boom! Perfectamente ejecutado.",
    "Tu pronunciación está mejorando por segundos.",
    "¡Exacto! Tienes madera de experto.",
    "Keep it up! You're on fire! 🔥"
  ],
  incorrect: [
    "Casi lo tienes. Un pequeño tropiezo es parte del camino.",
    "No pasa nada, hasta los nativos se equivocan a veces.",
    "Inténtalo de nuevo. La clave es la persistencia.",
    "Let's try that again. You're getting closer!"
  ],
  streak: [
    "¡Increíble! Llevas una racha imparable.",
    "¡Wow! Tu cerebro está en modo 'English Master'.",
    "¡5 aciertos seguidos! Eres una máquina."
  ]
};

export default function AIMentor() {
  const { state } = useMission();
  const [message, setMessage] = useState(RESPONSES.welcome[0]);

  useEffect(() => {
    if (state.lastResult === 'correct') {
      const pool = state.streak >= 3 ? [...RESPONSES.correct, ...RESPONSES.streak] : RESPONSES.correct;
      setMessage(pool[Math.floor(Math.random() * pool.length)]);
    } else if (state.lastResult === 'incorrect') {
      setMessage(RESPONSES.incorrect[Math.floor(Math.random() * RESPONSES.incorrect.length)]);
    }
  }, [state.lastResult, state.streak]);

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-end gap-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={message}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="bg-white/90 backdrop-blur-md p-4 rounded-2xl rounded-bl-none shadow-2xl border border-coral-100 max-w-xs"
        >
          <div className="flex items-start gap-2">
            <MessageCircle className="text-coral-500 shrink-0" size={18} />
            <p className="text-slate-800 text-sm font-medium leading-relaxed">
              {message}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative group"
      >
        <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white overflow-hidden group-hover:scale-110 transition-transform">
          <Sparkles className="text-white" size={32} />
        </div>
        
        {/* Indicador de Racha */}
        {state.streak > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-black px-2 py-1 rounded-full border-2 border-white shadow-lg"
          >
            x{state.streak}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
