/**
 * Audio processing utilities for OpenAI Realtime API.
 * Handles conversion between browser Float32 and OpenAI PCM16 (Int16) format.
 */

/**
 * Converts Float32Array to Int16Array (PCM16).
 * Standard format for OpenAI Realtime API audio.
 */
export function float32ToInt16(buffer: Float32Array): Int16Array {
  const l = buffer.length;
  const out = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    const s = Math.max(-1, Math.min(1, buffer[i]));
    out[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return out;
}

/**
 * Converts Int16Array (PCM16) back to Float32Array.
 * Used for playing audio received from OpenAI.
 */
export function int16ToFloat32(buffer: Int16Array): Float32Array {
  const l = buffer.length;
  const out = new Float32Array(l);
  for (let i = 0; i < l; i++) {
    out[i] = buffer[i] / 0x8000;
  }
  return out;
}

/**
 * Converts ArrayBuffer to Base64 string.
 */
export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Converts Base64 string to Int16Array.
 */
export function base64ToInt16(base64: string): Int16Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Int16Array(bytes.buffer);
}

/**
 * Merges multiple Float32Arrays into one.
 */
export function mergeAudioChunks(chunks: Float32Array[]): Float32Array {
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const result = new Float32Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  return result;
}
