'use client';

import { useState } from 'react';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    
    try {
      const response = await fetch('/api/notify-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          source: 'coming-soon-page',
          interest: 'early-access'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al registrarte');
      }

      setStatus('success');
      setMessage('¡Perfecto! Te avisaremos cuando lancemos. Revisa tu email.');
      setEmail('');
      
      // Reset después de 5 segundos
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Hubo un error. Inténtalo de nuevo.');
      
      // Reset error después de 4 segundos
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white text-4xl font-black shadow-lg">
              F
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-6">
            <span className="animate-pulse">🚀</span>
            <span>Próximamente</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Algo Increíble
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Está por Llegar
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Estamos trabajando duro para ofrecerte la mejor experiencia de aprendizaje de inglés. 
            Regístrate para ser el primero en enterarte cuando lancemos.
          </p>

          {/* Features preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
              <div className="text-3xl mb-2">✈️</div>
              <div className="text-sm font-bold text-slate-900">Inglés para Viajar</div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-4 border-2 border-violet-200">
              <div className="text-3xl mb-2">💼</div>
              <div className="text-sm font-bold text-slate-900">Inglés para Trabajar</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-200">
              <div className="text-3xl mb-2">🎓</div>
              <div className="text-sm font-bold text-slate-900">Preparación Exámenes</div>
            </div>
          </div>

          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all disabled:bg-slate-100 disabled:cursor-not-allowed text-slate-900 placeholder-slate-400"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? '...' : status === 'success' ? '✓ Enviado' : 'Notifícame'}
              </button>
            </div>
            {status === 'success' && (
              <p className="mt-3 text-sm text-green-600 font-semibold animate-pulse">{message}</p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-sm text-red-600 font-semibold">{message}</p>
            )}
          </form>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-purple-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 border-2 border-white"></div>
              </div>
              <span className="font-semibold text-slate-700">+500 personas esperando</span>
            </div>
          </div>

          {/* Sign In for existing students */}
          <div className="mt-8">
            <a
              href="/login"
              className="inline-flex items-center gap-2 px-6 py-3 text-violet-600 font-semibold hover:text-violet-700 transition-colors group"
            >
              <span>¿Ya tienes acceso?</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Additional info - Eliminado el email */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              🚀 Lanzamiento estimado: Primer trimestre 2026
            </p>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center mt-8 text-white/80 text-sm">
          © 2026 Focus English. Todos los derechos reservados.
        </p>
      </div>

      {/* Add animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
