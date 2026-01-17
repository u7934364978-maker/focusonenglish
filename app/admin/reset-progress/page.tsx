'use client';

// ============================================
// PÁGINA DE ADMINISTRACIÓN - RESET DE PROGRESO
// ============================================

import { useState } from 'react';

export default function AdminResetPage() {
  const [userId, setUserId] = useState('');
  const [resetType, setResetType] = useState<'full' | 'progress-only' | 'stats-only'>('full');
  const [adminSecret, setAdminSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleReset = async () => {
    if (!userId || !adminSecret) {
      setError('Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/admin/reset-progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          resetType,
          adminSecret
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error reseteando progreso');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleGetInfo = async () => {
    if (!userId || !adminSecret) {
      setError('Por favor completa userId y admin secret');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(
        `/api/admin/reset-progress?userId=${encodeURIComponent(userId)}&adminSecret=${encodeURIComponent(adminSecret)}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error obteniendo información');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🔧 Administración de Progreso
          </h1>
          <p className="text-gray-600 mb-8">
            Herramienta para resetear el progreso de usuarios
          </p>

          {/* Formulario */}
          <div className="space-y-6">
            {/* User ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User ID *
              </label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="UUID del usuario"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Ejemplo: 123e4567-e89b-12d3-a456-426614174000
              </p>
            </div>

            {/* Tipo de Reset */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Reset *
              </label>
              <select
                value={resetType}
                onChange={(e) => setResetType(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                <option value="full">Full - Todo el progreso</option>
                <option value="progress-only">Progress Only - Solo lecciones y ejercicios</option>
                <option value="stats-only">Stats Only - Solo estadísticas</option>
              </select>
            </div>

            {/* Admin Secret */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Secret *
              </label>
              <input
                type="password"
                value={adminSecret}
                onChange={(e) => setAdminSecret(e.target.value)}
                placeholder="Clave de administrador"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>

            {/* Botones */}
            <div className="flex gap-4">
              <button
                onClick={handleGetInfo}
                disabled={loading}
                className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {loading ? 'Consultando...' : 'Ver Progreso Actual'}
              </button>
              
              <button
                onClick={handleReset}
                disabled={loading}
                className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {loading ? 'Reseteando...' : 'Resetear Progreso'}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-bold text-red-900 mb-1">❌ Error</h3>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Resultado */}
          {result && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-bold text-green-900 mb-2">✅ Resultado</h3>
              <pre className="text-xs text-green-800 overflow-x-auto bg-white p-3 rounded border border-green-200">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}

          {/* Información */}
          <div className="mt-8 p-4 bg-sky-50 border border-sky-200 rounded-lg">
            <h3 className="font-bold text-coral-900 mb-2">ℹ️ Información</h3>
            <ul className="text-sm text-coral-800 space-y-1">
              <li><strong>Full:</strong> Resetea todo (lecciones, ejercicios, sesiones, estadísticas)</li>
              <li><strong>Progress Only:</strong> Solo lecciones, ejercicios y sesiones</li>
              <li><strong>Stats Only:</strong> Solo estadísticas generales</li>
            </ul>
          </div>

          {/* Nota de seguridad */}
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-xs text-yellow-800">
              ⚠️ <strong>Advertencia:</strong> Esta acción es irreversible. Asegúrate de tener el User ID correcto antes de resetear.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
