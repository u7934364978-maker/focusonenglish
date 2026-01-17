'use client';

import { useState } from 'react';
import Link from 'next/link';

export function CourseLaunchBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Por favor, introduce un email válido');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || '¡Gracias! Te avisaremos cuando lancemos los cursos.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Hubo un error. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-coral-50 via-peach-50 to-melon-50 border-b border-coral-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Message Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-100 text-coral-700 text-sm font-bold mb-3">
              <span className="animate-pulse">🚀</span>
              Próximamente
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              ¡Gracias por visitar Focus English!
            </h3>
            <p className="text-slate-700 text-lg mb-2">
              Próximamente lanzaremos nuestros primeros cursos especializados.
            </p>
            <p className="text-slate-600">
              Mientras tanto, puedes explorar nuestro{' '}
              <Link 
                href="/blog" 
                className="text-coral-600 font-bold hover:text-coral-700 underline decoration-2 underline-offset-2"
              >
                blog con guías y recursos gratuitos
              </Link>
              .
            </p>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-auto lg:min-w-[400px]">
            {status === 'success' ? (
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">✅</div>
                <p className="text-amber-800 font-bold text-lg">
                  {message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border-2 border-coral-200 p-6">
                <label className="block mb-3">
                  <span className="text-slate-900 font-bold text-lg block mb-2">
                    📧 Avísame del lanzamiento
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    disabled={status === 'loading'}
                    required
                  />
                </label>
                
                {status === 'error' && (
                  <p className="text-red-600 text-sm mb-3 font-medium">
                    {message}
                  </p>
                )}
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-coral-600 to-peach-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Notificarme 🔔'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
