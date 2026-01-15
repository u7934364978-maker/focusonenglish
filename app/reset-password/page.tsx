'use client';

// ============================================
// PÁGINA: RESETEAR CONTRASEÑA
// ============================================

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setError('Token inválido o faltante');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al resetear contraseña');
      }

      setSuccess(true);

      // Redirigir a login después de 3 segundos
      setTimeout(() => {
        router.push('/login?passwordReset=true');
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Error al actualizar contraseña');
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-center">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-3xl font-bold text-gray-900">
              Token Inválido
            </h2>
            <p className="mt-4 text-gray-600">
              El enlace de recuperación es inválido o está mal formado.
            </p>
          </div>
          <Link
            href="/forgot-password"
            className="w-full block text-center bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Solicitar nuevo enlace
          </Link>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-gray-900">
              ¡Contraseña Actualizada!
            </h2>
            <p className="mt-4 text-gray-600">
              Tu contraseña ha sido actualizada correctamente.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Redirigiendo al login...
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800">
              Ya puedes iniciar sesión con tu nueva contraseña.
            </p>
          </div>

          <Link
            href="/login"
            className="w-full block text-center bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Ir al login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="text-center">
          <div className="text-6xl mb-4">🔑</div>
          <h2 className="text-3xl font-bold text-gray-900">
            Nueva Contraseña
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Ingresa tu nueva contraseña
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Nueva contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Mínimo 8 caracteres"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirmar nueva contraseña
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Repite tu nueva contraseña"
              disabled={loading}
            />
          </div>

          {/* Password Requirements */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">
              📋 Requisitos de contraseña:
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li className={password.length >= 8 ? 'text-green-600' : ''}>
                {password.length >= 8 ? '✓' : '○'} Mínimo 8 caracteres
              </li>
              <li className={password === confirmPassword && password ? 'text-green-600' : ''}>
                {password === confirmPassword && password ? '✓' : '○'} Las contraseñas coinciden
              </li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={loading || !password || !confirmPassword}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                Actualizando...
              </span>
            ) : (
              'Actualizar Contraseña'
            )}
          </button>
        </form>

        {/* Security Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2 text-sm">
            🔒 Consejos de seguridad:
          </h3>
          <ul className="text-xs text-blue-800 space-y-1">
            <li>• Usa una contraseña única y fuerte</li>
            <li>• No uses información personal (nombres, fechas)</li>
            <li>• Combina letras, números y símbolos</li>
            <li>• No compartas tu contraseña con nadie</li>
          </ul>
        </div>

        {/* Help */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            ¿Tienes problemas?{' '}
            <a href="mailto:soporte@focus-on-english.com" className="text-blue-600 hover:text-blue-500">
              Contacta a soporte
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
}
