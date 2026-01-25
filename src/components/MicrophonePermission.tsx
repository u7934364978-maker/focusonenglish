'use client';

import { AlertCircle, Mic, RefreshCw, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { getMicrophoneInstructions, detectBrowser, type MicrophoneError } from '@/lib/utils/microphone-permission';

interface MicrophonePermissionErrorProps {
  error: MicrophoneError;
  onRetry: () => void;
  onDismiss?: () => void;
}

export function MicrophonePermissionError({ error, onRetry, onDismiss }: MicrophonePermissionErrorProps) {
  const browser = detectBrowser();
  const instructions = getMicrophoneInstructions(browser);

  const getErrorColor = (type: MicrophoneError['type']) => {
    switch (type) {
      case 'NotAllowedError':
        return 'red';
      case 'NotFoundError':
        return 'orange';
      case 'NotReadableError':
        return 'yellow';
      case 'SecurityError':
        return 'red';
      default:
        return 'gray';
    }
  };

  const color = getErrorColor(error.type);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`w-full max-w-2xl mx-auto p-6 bg-${color}-50 border-2 border-${color}-300 rounded-xl shadow-lg`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 bg-${color}-100 rounded-full`}>
          <AlertCircle className={`h-8 w-8 text-${color}-600`} />
        </div>
        <div className="flex-1">
          <h3 className={`text-xl font-bold text-${color}-900 mb-2`}>
            Error de Micrófono
          </h3>
          <p className={`text-${color}-800 font-medium`}>
            {error.userMessage}
          </p>
        </div>
      </div>

      {/* Action Suggestion */}
      {error.action && (
        <div className={`mb-4 p-4 bg-${color}-100 rounded-lg`}>
          <p className={`text-sm text-${color}-900`}>
            <strong>Qué hacer:</strong> {error.action}
          </p>
        </div>
      )}

      {/* Step-by-step Instructions */}
      {error.type === 'NotAllowedError' && (
        <div className="mb-4">
          <p className="font-semibold text-gray-900 mb-2">
            📋 Cómo habilitar el micrófono:
          </p>
          <ol className="space-y-2">
            {instructions.map((instruction, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="font-bold text-gray-500 min-w-[1.5rem]">
                  {instruction.startsWith(String(index + 1)) ? '' : `${index + 1}.`}
                </span>
                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Microphone Not Found Help */}
      {error.type === 'NotFoundError' && (
        <div className="mb-4 space-y-2">
          <p className="font-semibold text-gray-900">
            🎤 Soluciones posibles:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Conecta un micrófono externo o auriculares con micrófono</li>
            <li>Verifica que tu micrófono esté conectado correctamente</li>
            <li>Revisa la configuración de audio de tu sistema operativo</li>
            <li>Prueba con otro micrófono si tienes disponible</li>
          </ul>
        </div>
      )}

      {/* In Use Error Help */}
      {error.type === 'NotReadableError' && (
        <div className="mb-4 space-y-2">
          <p className="font-semibold text-gray-900">
            🔄 Libera el micrófono:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Cierra otras pestañas o aplicaciones que usen el micrófono</li>
            <li>Verifica que no haya videoconferencias activas (Zoom, Meet, etc.)</li>
            <li>Reinicia tu navegador si el problema persiste</li>
            <li>Revisa si alguna extensión está usando el micrófono</li>
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onRetry}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-${color}-600 hover:bg-${color}-700 text-white rounded-lg font-semibold transition-colors`}
        >
          <RefreshCw className="h-5 w-5" />
          Reintentar
        </button>

        {error.type === 'NotAllowedError' && (
          <a
            href="https://support.google.com/chrome/answer/2693767"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-semibold transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
            Más ayuda
          </a>
        )}

        {onDismiss && (
          <button
            onClick={onDismiss}
            className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-semibold transition-colors"
          >
            Cerrar
          </button>
        )}
      </div>

      {/* Technical Details (collapsed) */}
      <details className="mt-4">
        <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
          Detalles técnicos
        </summary>
        <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-700 overflow-auto">
          <p><strong>Error Type:</strong> {error.type}</p>
          <p><strong>Message:</strong> {error.message}</p>
          <p><strong>Browser:</strong> {browser}</p>
          <p><strong>HTTPS:</strong> {typeof window !== 'undefined' && window.isSecureContext ? 'Yes' : 'No'}</p>
        </div>
      </details>
    </motion.div>
  );
}

interface MicrophonePermissionPromptProps {
  onRequest: () => void;
  isRequesting: boolean;
}

export function MicrophonePermissionPrompt({ onRequest, isRequesting }: MicrophonePermissionPromptProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl shadow-lg text-center"
    >
      <div className="mb-4">
        <div className="inline-flex p-4 bg-blue-100 rounded-full mb-3">
          <Mic className="h-12 w-12 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-blue-900 mb-2">
          Permiso de Micrófono Requerido
        </h3>
        <p className="text-blue-800">
          Para completar este ejercicio de speaking, necesitamos acceso a tu micrófono para grabar tu respuesta.
        </p>
      </div>

      <div className="mb-4 p-4 bg-white rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700 text-left">
          <strong className="text-blue-900">Tu privacidad es importante:</strong>
        </p>
        <ul className="mt-2 space-y-1 text-xs text-gray-600 text-left list-disc list-inside">
          <li>Solo grabamos cuando presionas "Grabar"</li>
          <li>El audio se procesa de forma segura</li>
          <li>Puedes revocar el permiso en cualquier momento</li>
          <li>No compartimos tu audio con terceros</li>
        </ul>
      </div>

      <button
        onClick={onRequest}
        disabled={isRequesting}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-bold text-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isRequesting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
            Solicitando permiso...
          </>
        ) : (
          <>
            <Mic className="h-6 w-6" />
            Permitir Micrófono
          </>
        )}
      </button>

      <p className="mt-3 text-xs text-gray-600">
        Al hacer clic, tu navegador te pedirá permiso para usar el micrófono.
      </p>
    </motion.div>
  );
}
