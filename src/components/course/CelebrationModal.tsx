'use client';

import { useEffect, useState } from 'react';

interface CelebrationModalProps {
  show: boolean;
  score: number;
  onClose: () => void;
}

export default function CelebrationModal({ show, score, onClose }: CelebrationModalProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  
  useEffect(() => {
    if (show && score >= 70) {
      // Generate confetti particles
      const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2
      }));
      setConfetti(particles);
      
      // Play celebration sound (browser compatibility check)
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Create a simple celebration sound
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
      } catch (error) {
        console.log('Audio not supported:', error);
      }
    }
  }, [show, score]);

  if (!show) return null;

  const getMessage = () => {
    if (score >= 90) return { emoji: '🎉', title: 'Outstanding!', message: 'You crushed it!' };
    if (score >= 80) return { emoji: '🌟', title: 'Excellent!', message: 'Great work!' };
    if (score >= 70) return { emoji: '👏', title: 'Well Done!', message: 'Keep it up!' };
    if (score >= 60) return { emoji: '👍', title: 'Good Job!', message: 'You did well!' };
    return { emoji: '💪', title: 'Keep Practicing!', message: 'You can do better!' };
  };

  const { emoji, title, message } = getMessage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
      {/* Confetti Animation */}
      {score >= 70 && confetti.map(particle => (
        <div
          key={particle.id}
          className="fixed top-0 w-3 h-3 rounded-full animate-confettiFall"
          style={{
            left: `${particle.left}%`,
            backgroundColor: ['#f97316', '#fb923c', '#fdba74', '#fbbf24', '#fcd34d'][Math.floor(Math.random() * 5)],
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}

      {/* Modal Content */}
      <div className="bg-white rounded-3xl p-10 max-w-md mx-4 text-center shadow-2xl transform animate-scaleIn border-4 border-orange-300">
        <div className="text-8xl mb-4 animate-bounce">{emoji}</div>
        <h2 className="text-4xl font-black text-slate-900 mb-3">{title}</h2>
        <p className="text-xl text-slate-600 mb-6">{message}</p>
        
        {/* Score Display */}
        <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6 mb-6 border-2 border-orange-300">
          <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            {Math.round(score)}%
          </div>
          <div className="text-sm font-bold text-slate-700 mt-1">Your Score</div>
        </div>

        {/* Progress Ring */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="transform -rotate-90 w-32 h-32">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-slate-200"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${2 * Math.PI * 56 * (1 - score / 100)}`}
              className="text-orange-500 transition-all duration-1000 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-black text-slate-900">{Math.round(score)}%</span>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onClose}
          className="w-full px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-black text-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
        >
          Continue Learning →
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-confettiFall {
          animation: confettiFall linear forwards;
        }
      `}</style>
    </div>
  );
}
