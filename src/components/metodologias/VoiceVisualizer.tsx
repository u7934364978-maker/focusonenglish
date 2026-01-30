'use client'

import { motion } from 'framer-motion'

interface VoiceVisualizerProps {
  isActive: boolean
  isSpeaking: boolean
  isListening: boolean
}

export default function VoiceVisualizer({ isActive, isSpeaking, isListening }: VoiceVisualizerProps) {
  return (
    <div className="flex items-center justify-center gap-1 h-20">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-1.5 rounded-full ${
            isSpeaking 
              ? 'bg-cyan-500' 
              : isListening 
                ? 'bg-blue-500' 
                : 'bg-gray-300'
          }`}
          animate={
            isActive && (isSpeaking || isListening)
              ? {
                  height: [20, Math.random() * 60 + 20, 20],
                }
              : { height: 8 }
          }
          transition={{
            repeat: Infinity,
            duration: 0.5,
            delay: i * 0.05,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
