'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  courseInterest: string;
  currentLevel: string;
  message: string;
  acceptTerms: boolean;
}

export function SignupForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    courseInterest: '',
    currentLevel: '',
    message: '',
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al procesar el registro');
      }

      // Success! Redirect to success page
      router.push('/success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al procesar el registro');
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          Nombre Completo *
        </label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-peach-600 focus:border-transparent"
          placeholder="Juan Pérez"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-peach-600 focus:border-transparent"
          placeholder="tu@email.com"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-peach-600 focus:border-transparent"
          placeholder="+34 600 000 000"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          Curso de Interés *
        </label>
        <select
          name="courseInterest"
          required
          value={formData.courseInterest}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-peach-600 focus:border-transparent"
          disabled={isSubmitting}
        >
          <option value="">Selecciona tu nivel objetivo</option>
          <option value="beginner">Principiante (A1-A2)</option>
          <option value="intermediate">Intermedio (B1-B2)</option>
          <option value="advanced">Avanzado (C1-C2)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          Nivel Actual
        </label>
        <select
          name="currentLevel"
          value={formData.currentLevel}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-peach-600 focus:border-transparent"
          disabled={isSubmitting}
        >
          <option value="">No lo sé / Quiero hacer el test</option>
          <option value="a1">A1 - Principiante</option>
          <option value="a2">A2 - Elemental</option>
          <option value="b1">B1 - Intermedio</option>
          <option value="b2">B2 - Intermedio Alto</option>
          <option value="c1">C1 - Avanzado</option>
          <option value="c2">C2 - Maestría</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          Mensaje (Opcional)
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-peach-600 focus:border-transparent"
          placeholder="Cuéntanos sobre tus objetivos..."
          disabled={isSubmitting}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="acceptTerms"
          required
          checked={formData.acceptTerms}
          onChange={handleChange}
          className="mt-1"
          id="terms"
          disabled={isSubmitting}
        />
        <label htmlFor="terms" className="text-sm text-slate-600">
          Acepto los{' '}
          <a href="/terminos" className="text-peach-600 font-bold hover:text-peach-700" target="_blank">
            términos y condiciones
          </a>{' '}
          y la{' '}
          <a href="/privacidad" className="text-peach-600 font-bold hover:text-peach-700" target="_blank">
            política de privacidad
          </a>
          . Consiento el tratamiento de mis datos para finalidades comerciales.
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-peach-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:from-peach-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Empezar Gratis'}
      </button>
    </form>
  );
}
