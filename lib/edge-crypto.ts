/**
 * Edge Runtime Compatible Crypto Utilities
 * Replacement for Node.js crypto module using Web Crypto API
 */

/**
 * Generate a random token (replacement for crypto.randomBytes)
 * @param length - Length in bytes (default: 32)
 * @returns Hex string
 */
export function generateRandomToken(length: number = 32): string {
  const buffer = new Uint8Array(length);
  crypto.getRandomValues(buffer);
  return Array.from(buffer, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Generate a random string for IDs
 * @param length - Length of the string (default: 16)
 * @returns Random string
 */
export function generateRandomId(length: number = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const buffer = new Uint8Array(length);
  crypto.getRandomValues(buffer);
  return Array.from(buffer, byte => chars[byte % chars.length]).join('');
}

/**
 * Hash a string using SHA-256
 * @param text - Text to hash
 * @returns Hex string hash
 */
export async function sha256Hash(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Hash password using PBKDF2 (replacement for bcrypt)
 * @param password - Plain text password
 * @param salt - Optional salt (generated if not provided)
 * @returns Object with hash and salt
 */
export async function hashPassword(password: string, salt?: string): Promise<{ hash: string; salt: string }> {
  const actualSalt = salt || generateRandomToken(16);
  
  const encoder = new TextEncoder();
  const passwordData = encoder.encode(password);
  const saltData = encoder.encode(actualSalt);
  
  // Import password as key
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    passwordData,
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );
  
  // Derive bits using PBKDF2
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: saltData,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    256 // 32 bytes
  );
  
  const hashArray = Array.from(new Uint8Array(derivedBits));
  const hash = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  
  return { hash, salt: actualSalt };
}

/**
 * Verify password against hash
 * @param password - Plain text password
 * @param hash - Stored hash
 * @param salt - Stored salt
 * @returns Boolean indicating if password matches
 */
export async function verifyPassword(password: string, hash: string, salt: string): Promise<boolean> {
  const { hash: newHash } = await hashPassword(password, salt);
  return newHash === hash;
}

/**
 * Generate HMAC signature (for webhooks)
 * @param secret - Secret key
 * @param data - Data to sign
 * @returns Hex string signature
 */
export async function generateHmacSignature(secret: string, data: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const messageData = encoder.encode(data);
  
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const signature = await crypto.subtle.sign('HMAC', key, messageData);
  const signatureArray = Array.from(new Uint8Array(signature));
  return signatureArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Verify HMAC signature
 * @param secret - Secret key
 * @param data - Data to verify
 * @param signature - Signature to check against
 * @returns Boolean indicating if signature is valid
 */
export async function verifyHmacSignature(secret: string, data: string, signature: string): Promise<boolean> {
  const expectedSignature = await generateHmacSignature(secret, data);
  return expectedSignature === signature;
}

/**
 * Generate a cryptographically secure UUID v4
 * @returns UUID string
 */
export function generateUUID(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  
  // Set version (4) and variant bits
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  
  const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/**
 * Constant-time string comparison (prevents timing attacks)
 * @param a - First string
 * @param b - Second string
 * @returns Boolean indicating if strings match
 */
export function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
}
