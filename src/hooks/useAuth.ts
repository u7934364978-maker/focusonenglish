'use client';

// ============================================
// CUSTOM HOOKS - AUTH
// Hooks personalizados para autenticación con Supabase
// ============================================

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getUser, getSession, onAuthStateChange } from '@/lib/auth-helpers';
import type { User, Session } from '@supabase/supabase-js';

/**
 * Hook para proteger rutas que requieren autenticación
 */
export function useRequireAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { session } = await getSession();
      setSession(session);
      setLoading(false);

      if (!session) {
        router.push('/cuenta/login');
      }
    };

    checkAuth();

    const { data: { subscription } } = onAuthStateChange((user) => {
      if (!user) {
        router.push('/cuenta/login');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  return { session, status: loading ? 'loading' : session ? 'authenticated' : 'unauthenticated' };
}

/**
 * Hook para obtener información del usuario autenticado
 */
export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const { user } = await getUser();
      setUser(user);
      setLoading(false);
    };

    loadUser();

    const { data: { subscription } } = onAuthStateChange((newUser) => {
      setUser(newUser);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    isLoading: loading,
    isAuthenticated: !!user,
  };
}

/**
 * Hook para verificar si el usuario tiene suscripción activa
 */
export function useSubscription() {
  // TODO: Implementar lógica real con Stripe
  const hasActiveSubscription = false; // Placeholder

  return {
    hasActiveSubscription,
    subscriptionPlan: null, // Placeholder
  };
}
