'use client';

// ============================================
// SUPABASE AUTH PROVIDER
// Provider de autenticación para componentes del cliente
// ============================================

import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { getUser, onAuthStateChange } from '@/lib/auth-helpers';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
