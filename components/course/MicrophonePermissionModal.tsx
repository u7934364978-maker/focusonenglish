'use client';

import { useState, useEffect } from 'react';

interface MicrophonePermissionModalProps {
  isOpen: boolean;
  onPermissionGranted: () => void;
  onCancel: () => void;
  exerciseTitle?: string;
}

type PermissionState = 'prompt' | 'granted' | 'denied' | 'checking';

export default function MicrophonePermissionModal({
  isOpen,
  onPermissionGranted,
  onCancel,
  exerciseTitle = 'Speaking Exercise'
}: MicrophonePermissionModalProps) {
  const [permissionState, setPermissionState] = useState<PermissionState>('checking');
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    if (isOpen) {
      checkCurrentPermission();
    }
  }, [isOpen]);

  const checkCurrentPermission = async () => {
    try {
      // Check if the Permissions API is available
      if ('permissions' in navigator) {
        const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        setPermissionState(result.state as PermissionState);
        
        // If already granted, proceed immediately
        if (result.state === 'granted') {
          onPermissionGranted();
        }
        
        // Listen for permission changes
        result.onchange = () => {
          setPermissionState(result.state as PermissionState);
          if (result.state === 'granted') {
            onPermissionGranted();
          }
        };
      } else {
        // Fallback for browsers without Permissions API
        setPermissionState('prompt');
      }
    } catch (error) {
      console.error('Error checking microphone permission:', error);
      setPermissionState('prompt');
    }
  };

  const requestPermission = async () => {
    try {
      setPermissionState('checking');
      
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      
      // Permission granted! Stop the stream immediately (we'll start it again when recording)
      stream.getTracks().forEach(track => track.stop());
      
      setPermissionState('granted');
      onPermissionGranted();
      
    } catch (error: any) {
      console.error('Error requesting microphone permission:', error);
      
      // Handle different error types
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setPermissionState('denied');
      } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        alert('No microphone found. Please connect a microphone and try again.');
        setPermissionState('prompt');
      } else {
        alert('Error accessing microphone. Please try again.');
        setPermissionState('prompt');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-peach-500 p-6 rounded-t-2xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-lg">
              🎤
            </div>
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-1">Microphone Access Required</h2>
              <p className="text-orange-100">For {exerciseTitle}</p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* Permission State: Prompt */}
          {permissionState === 'prompt' && (
            <>
              {/* Why we need permission */}
              <div className="bg-gradient-to-br from-orange-50 to-peach-50 rounded-xl p-6 border-2 border-orange-200">
                <h3 className="text-lg font-bold text-coral-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  Why do we need microphone access?
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 text-xl mt-0.5">✓</span>
                    <span><strong>Record your speaking practice</strong> to evaluate your pronunciation and fluency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 text-xl mt-0.5">✓</span>
                    <span><strong>Get instant AI feedback</strong> on your grammar, vocabulary, and accent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 text-xl mt-0.5">✓</span>
                    <span><strong>Track your progress</strong> and see your improvement over time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 text-xl mt-0.5">✓</span>
                    <span><strong>Real-time transcription</strong> to see what you're saying as you speak</span>
                  </li>
                </ul>
              </div>

              {/* Privacy assurance */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-200">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🔐</span>
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-2">Your Privacy is Protected</h4>
                    <ul className="space-y-2 text-sm text-emerald-800">
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-500">•</span>
                        <span>Recordings are used only for your learning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-500">•</span>
                        <span>Audio is processed securely and never shared</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-500">•</span>
                        <span>You control when to record and can delete anytime</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={requestPermission}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl hover:from-orange-700 hover:to-amber-700 transition-all font-bold text-lg shadow-xl transform hover:scale-105"
                >
                  <span className="text-2xl">🎤</span>
                  <span>Allow Microphone Access</span>
                </button>
                <button
                  onClick={onCancel}
                  className="px-6 py-4 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition-all font-semibold"
                >
                  Cancel
                </button>
              </div>

              {/* Help link */}
              <div className="text-center pt-2">
                <button
                  onClick={() => setShowInstructions(!showInstructions)}
                  className="text-sm text-orange-600 hover:text-orange-700 underline font-medium"
                >
                  {showInstructions ? 'Hide' : 'Need help?'} Browser permission instructions
                </button>
              </div>
            </>
          )}

          {/* Permission State: Checking */}
          {permissionState === 'checking' && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-orange-200 border-t-orange-600 mb-6"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Checking microphone access...</h3>
              <p className="text-slate-600">Please wait a moment</p>
            </div>
          )}

          {/* Permission State: Denied */}
          {permissionState === 'denied' && (
            <>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">🚫</span>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">Microphone Access Denied</h3>
                    <p className="text-red-700 mb-4">
                      You've blocked microphone access. To use speaking exercises, you need to enable it in your browser settings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructions for different browsers */}
              <div className="bg-white rounded-xl p-6 border-2 border-slate-200 space-y-4">
                <h4 className="font-bold text-slate-900 text-lg mb-4">How to enable microphone access:</h4>
                
                {/* Chrome */}
                <div className="space-y-2">
                  <p className="font-bold text-slate-800 flex items-center gap-2">
                    <span>🌐</span> Google Chrome / Edge
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700 ml-6">
                    <li>Click the <strong>lock icon</strong> or <strong>camera icon</strong> in the address bar</li>
                    <li>Find "Microphone" and select <strong>"Allow"</strong></li>
                    <li>Reload this page</li>
                  </ol>
                </div>

                {/* Firefox */}
                <div className="space-y-2">
                  <p className="font-bold text-slate-800 flex items-center gap-2">
                    <span>🦊</span> Firefox
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700 ml-6">
                    <li>Click the <strong>blocked icon</strong> in the address bar</li>
                    <li>Click <strong>"Clear These Settings"</strong></li>
                    <li>Reload and allow microphone access</li>
                  </ol>
                </div>

                {/* Safari */}
                <div className="space-y-2">
                  <p className="font-bold text-slate-800 flex items-center gap-2">
                    <span>🧭</span> Safari
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700 ml-6">
                    <li>Go to <strong>Safari → Settings → Websites</strong></li>
                    <li>Select <strong>Microphone</strong></li>
                    <li>Change this website to <strong>"Allow"</strong></li>
                    <li>Reload this page</li>
                  </ol>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={checkCurrentPermission}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl hover:from-orange-700 hover:to-amber-700 transition-all font-bold shadow-lg"
                >
                  <span>🔄</span>
                  <span>Try Again</span>
                </button>
                <button
                  onClick={onCancel}
                  className="px-6 py-4 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition-all font-semibold"
                >
                  Cancel
                </button>
              </div>
            </>
          )}

          {/* Browser-specific instructions (collapsible) */}
          {showInstructions && permissionState === 'prompt' && (
            <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 space-y-4 animate-fadeIn">
              <h4 className="font-bold text-slate-900 text-lg mb-4">Browser Permission Guide:</h4>
              
              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span>🌐</span> Chrome / Edge / Brave
                  </p>
                  <p>Click "Allow" when the browser asks for microphone permission at the top of the page.</p>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span>🦊</span> Firefox
                  </p>
                  <p>Click "Share Selected Device" when prompted to choose your microphone.</p>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span>🧭</span> Safari
                  </p>
                  <p>Click "Allow" when Safari asks to use your microphone.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
