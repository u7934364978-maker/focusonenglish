/**
 * Microphone Permission Utility
 * 
 * Best practices for handling microphone permissions in web applications:
 * 
 * 1. Always request permissions in response to user action
 * 2. Provide clear error messages for different error types
 * 3. Check for secure context (HTTPS)
 * 4. Handle all possible error scenarios
 * 5. Provide fallback UI when permissions are denied
 * 6. Remember user preference when possible
 */

export interface MicrophonePermissionResult {
  granted: boolean;
  error?: MicrophoneError;
  stream?: MediaStream;
}

export interface MicrophoneError {
  type: 'NotAllowedError' | 'NotFoundError' | 'NotReadableError' | 'SecurityError' | 'Other';
  message: string;
  userMessage: string; // User-friendly message in Spanish
  action?: string; // Suggested action
}

/**
 * Request microphone permission with comprehensive error handling
 */
export async function requestMicrophonePermission(): Promise<MicrophonePermissionResult> {
  // Check if we're in a secure context
  if (typeof window === 'undefined') {
    return {
      granted: false,
      error: {
        type: 'Other',
        message: 'Window is undefined (SSR)',
        userMessage: 'Error de servidor. Por favor, recarga la página.',
      },
    };
  }

  if (!window.isSecureContext) {
    return {
      granted: false,
      error: {
        type: 'SecurityError',
        message: 'Not in secure context',
        userMessage: 'Esta función solo está disponible en conexiones seguras (HTTPS).',
        action: 'Asegúrate de acceder al sitio con HTTPS.',
      },
    };
  }

  // Check if getUserMedia is supported
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return {
      granted: false,
      error: {
        type: 'Other',
        message: 'getUserMedia not supported',
        userMessage: 'Tu navegador no soporta la grabación de audio.',
        action: 'Actualiza tu navegador o usa Chrome, Firefox, o Safari.',
      },
    };
  }

  try {
    // Request microphone access with optimal constraints
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
        // Request high quality for speech recognition
        sampleRate: { ideal: 48000 },
        channelCount: { ideal: 1 },
      },
    });

    return {
      granted: true,
      stream,
    };
  } catch (error: any) {
    console.error('Microphone permission error:', error);

    // Handle specific error types
    const errorType = error.name as string;
    
    switch (errorType) {
      case 'NotAllowedError':
      case 'PermissionDeniedError':
        return {
          granted: false,
          error: {
            type: 'NotAllowedError',
            message: error.message,
            userMessage: 'Permiso de micrófono denegado.',
            action: 'Por favor, permite el acceso al micrófono en la configuración de tu navegador.',
          },
        };

      case 'NotFoundError':
      case 'DevicesNotFoundError':
        return {
          granted: false,
          error: {
            type: 'NotFoundError',
            message: error.message,
            userMessage: 'No se encontró ningún micrófono.',
            action: 'Conecta un micrófono y recarga la página.',
          },
        };

      case 'NotReadableError':
      case 'TrackStartError':
        return {
          granted: false,
          error: {
            type: 'NotReadableError',
            message: error.message,
            userMessage: 'El micrófono está siendo usado por otra aplicación.',
            action: 'Cierra otras aplicaciones que puedan estar usando el micrófono.',
          },
        };

      case 'SecurityError':
        return {
          granted: false,
          error: {
            type: 'SecurityError',
            message: error.message,
            userMessage: 'Error de seguridad al acceder al micrófono.',
            action: 'Verifica que estés usando HTTPS y que el sitio tenga permisos.',
          },
        };

      default:
        return {
          granted: false,
          error: {
            type: 'Other',
            message: error.message || 'Unknown error',
            userMessage: 'Error inesperado al acceder al micrófono.',
            action: 'Intenta recargar la página o usar otro navegador.',
          },
        };
    }
  }
}

/**
 * Check current microphone permission status without requesting
 */
export async function checkMicrophonePermission(): Promise<'granted' | 'denied' | 'prompt' | 'unsupported'> {
  if (typeof window === 'undefined' || !navigator.permissions) {
    return 'unsupported';
  }

  try {
    const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
    return result.state;
  } catch (error) {
    console.warn('Permissions API not fully supported:', error);
    return 'unsupported';
  }
}

/**
 * Get user-friendly instructions for enabling microphone
 */
export function getMicrophoneInstructions(browser?: string): string[] {
  const instructions: { [key: string]: string[] } = {
    chrome: [
      '1. Haz clic en el ícono de candado 🔒 en la barra de direcciones',
      '2. Busca "Micrófono" en la lista de permisos',
      '3. Selecciona "Permitir"',
      '4. Recarga la página',
    ],
    firefox: [
      '1. Haz clic en el ícono de candado 🔒 en la barra de direcciones',
      '2. Haz clic en "Borrar estos permisos"',
      '3. Recarga la página y vuelve a intentarlo',
    ],
    safari: [
      '1. Ve a Safari > Preferencias',
      '2. Selecciona la pestaña "Sitios web"',
      '3. Haz clic en "Micrófono" en la barra lateral',
      '4. Permite el acceso para este sitio',
    ],
    default: [
      '1. Verifica la configuración de permisos de tu navegador',
      '2. Busca el ícono de micrófono o candado en la barra de direcciones',
      '3. Permite el acceso al micrófono',
      '4. Recarga la página',
    ],
  };

  return instructions[browser?.toLowerCase() || 'default'] || instructions.default;
}

/**
 * Detect browser for specific instructions
 */
export function detectBrowser(): string {
  if (typeof window === 'undefined') return 'unknown';

  const ua = window.navigator.userAgent.toLowerCase();
  
  if (ua.includes('chrome') && !ua.includes('edg')) return 'chrome';
  if (ua.includes('firefox')) return 'firefox';
  if (ua.includes('safari') && !ua.includes('chrome')) return 'safari';
  if (ua.includes('edg')) return 'edge';
  
  return 'unknown';
}

/**
 * Release microphone stream and stop all tracks
 */
export function releaseMicrophoneStream(stream: MediaStream | null) {
  if (!stream) return;
  
  stream.getTracks().forEach(track => {
    track.stop();
  });
}
