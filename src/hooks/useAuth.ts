'use client';

// ============================================
// CUSTOM HOOKS - AUTH
// Hooks personalizados para autenticación con Supabase
// ============================================

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getUser, getSession, onAuthStateChange } from '@/lib/auth-helpers';
import { getUserProfile, type UserProfile } from '@/lib/services/profile-service';
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
  const { user, isLoading: userLoading } = useUser();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      if (user) {
        const userProfile = await getUserProfile(user.id);
        setProfile(userProfile);
      }
      setLoading(false);
    };

    if (!userLoading) {
      loadProfile();
    }
  }, [user, userLoading]);

  const hasActiveSubscription = profile?.subscription_status === 'active' || profile?.subscription_status === 'trialing';

  return {
    hasActiveSubscription,
    subscriptionPlan: profile?.subscription_plan || 'free',
    loading: loading || userLoading,
    profile,
  };
}
