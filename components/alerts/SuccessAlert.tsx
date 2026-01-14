'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function SuccessAlert() {
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchParams.get('registro') === 'exitoso') {
      setShow(true);
      // Auto-hide after 10 seconds
      const timer = setTimeout(() => setShow(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  if (!show) return null;

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4">
      <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-6 rounded-2xl shadow-2xl border-2 border-emerald-300 animate-slide-down">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-3xl">🎉</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-black mb-1">¡Registro Exitoso!</h3>
            <p className="text-sm text-emerald-50">
              Tu cuenta ha sido creada. Ahora puedes explorar nuestros cursos de preparación para certificaciones oficiales.
            </p>
          </div>
          <button
            onClick={() => setShow(false)}
            className="flex-shrink-0 text-white/80 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
