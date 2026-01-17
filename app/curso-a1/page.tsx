'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function A1CoursePage() {
  const router = useRouter();

  // Redirigir automáticamente a la práctica
  useEffect(() => {
    router.push('/curso-a1/practice');
  }, [router]);

  return (
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin text-7xl mb-6">🎓</div>
        <h2 className="text-3xl font-black text-gray-900 mb-4">
          Iniciando práctica A1...
        </h2>
        <p className="text-lg text-gray-600">
          Preparando ejercicios personalizados
        </p>
      </div>
    </main>
  );
}
