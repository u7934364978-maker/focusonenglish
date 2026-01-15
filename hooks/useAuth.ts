'use client';

// ============================================
// CUSTOM HOOKS - AUTH
// Hooks personalizados para autenticación
// ============================================

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Hook para proteger rutas que requieren autenticación
 */
export function useRequireAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // No hacer nada mientras carga

    if (!session) {
      // Si no hay sesión, redirigir a login
      router.push('/login');
    }
  }, [session, status, router]);

  return { session, status };
}

/**
 * Hook para obtener información del usuario autenticado
 */
export function useUser() {
  const { data: session, status } = useSession();

  return {
    user: session?.user,
    isLoading: status === 'loading',
    isAuthenticated: !!session,
  };
}

/**
 * Hook para verificar si el usuario tiene suscripción activa
 */
export function useSubscription() {
  const { data: session } = useSession();

  // TODO: Implementar lógica real con Stripe
  const hasActiveSubscription = false; // Placeholder

  return {
    hasActiveSubscription,
    subscriptionPlan: null, // Placeholder
  };
}
