'use client';

import { useState, useEffect, useCallback } from 'react';

type PermissionState = 'prompt' | 'granted' | 'denied' | 'unsupported';

interface UseMicrophonePermissionReturn {
  permissionState: PermissionState;
  isChecking: boolean;
  requestPermission: () => Promise<boolean>;
  checkPermission: () => Promise<void>;
  hasPermission: boolean;
}

/**
 * Custom hook to manage microphone permissions
 * Implements best practices from MDN and Chrome DevRel
 * 
 * @returns Object with permission state and control functions
 */
export function useMicrophonePermission(): UseMicrophonePermissionReturn {
  const [permissionState, setPermissionState] = useState<PermissionState>('prompt');
  const [isChecking, setIsChecking] = useState(false);

  const checkPermission = useCallback(async () => {
    setIsChecking(true);
    
    try {
      // Check if Permissions API is available
      if (!('permissions' in navigator)) {
        console.warn('Permissions API not supported');
        setPermissionState('unsupported');
        setIsChecking(false);
        return;
      }

      // Query microphone permission
      const result = await navigator.permissions.query({ 
        name: 'microphone' as PermissionName 
      });
      
      setPermissionState(result.state as PermissionState);

      // Listen for changes
      result.addEventListener('change', () => {
        setPermissionState(result.state as PermissionState);
      });

    } catch (error) {
      console.error('Error checking microphone permission:', error);
      // Fallback: assume we need to prompt
      setPermissionState('prompt');
    } finally {
      setIsChecking(false);
    }
  }, []);

  const requestPermission = useCallback(async (): Promise<boolean> => {
    setIsChecking(true);

    try {
      // Request microphone access with optimal constraints
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          // Request optimal quality but allow browser to adjust
          sampleRate: { ideal: 48000 },
          channelCount: { ideal: 1 }
        }
      });

      // Permission granted!
      console.log('✅ Microphone permission granted');
      
      // Stop the stream immediately (we'll request it again when actually recording)
      stream.getTracks().forEach(track => {
        track.stop();
        console.log('🛑 Stopped microphone track:', track.label);
      });

      setPermissionState('granted');
      setIsChecking(false);
      return true;

    } catch (error: any) {
      console.error('❌ Error requesting microphone permission:', error);
      
      // Handle specific error types
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        console.log('🚫 User denied microphone permission');
        setPermissionState('denied');
      } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        console.log('🔍 No microphone device found');
        alert('No microphone found. Please connect a microphone and try again.');
      } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
        console.log('⚠️ Microphone is already in use or hardware error');
        alert('Microphone is already in use by another application or there is a hardware error.');
      } else if (error.name === 'OverconstrainedError') {
        console.log('⚙️ Microphone constraints not supported');
        alert('Your microphone does not support the required audio quality settings.');
      } else if (error.name === 'SecurityError') {
        console.log('🔒 Security error - possibly insecure context');
        alert('Microphone access requires a secure HTTPS connection.');
      } else {
        console.log('❓ Unknown error:', error.message);
        alert('Error accessing microphone. Please try again.');
      }

      setIsChecking(false);
      return false;
    }
  }, []);

  // Check permission on mount
  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  const hasPermission = permissionState === 'granted';

  return {
    permissionState,
    isChecking,
    requestPermission,
    checkPermission,
    hasPermission
  };
}

/**
 * Utility function to get available audio input devices
 */
export async function getAudioInputDevices(): Promise<MediaDeviceInfo[]> {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === 'audioinput');
  } catch (error) {
    console.error('Error enumerating audio devices:', error);
    return [];
  }
}

/**
 * Utility function to check if browser supports MediaDevices API
 */
export function isMediaDevicesSupported(): boolean {
  return !!(
    navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia
  );
}

/**
 * Utility function to check if browser supports Permissions API
 */
export function isPermissionsAPISupported(): boolean {
  return 'permissions' in navigator;
}
