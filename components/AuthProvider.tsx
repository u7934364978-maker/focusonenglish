'use client';

// ============================================
// NEXTAUTH PROVIDER
// Provider de sesión para componentes del cliente
// ============================================

import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
