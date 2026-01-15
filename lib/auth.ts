// ============================================
// NEXTAUTH CONFIGURATION
// Sistema de autenticación completo con múltiples proveedores
// ============================================

import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

// Cliente de Supabase (solo si las variables de entorno están disponibles)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export const authOptions: NextAuthOptions = {
  // Solo usar adapter si Supabase está configurado
  ...(supabase && supabaseUrl && supabaseKey ? {
    adapter: SupabaseAdapter({
      url: supabaseUrl,
      secret: supabaseKey,
    })
  } : {}),
  
  providers: [
    // Autenticación con email y contraseña
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email y contraseña son requeridos');
        }

        // Si Supabase no está configurado, retornar null
        if (!supabase) {
          console.warn('Supabase not configured, skipping authentication');
          return null;
        }

        try {
          // Buscar usuario en Supabase
          const { data: users, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', credentials.email)
            .single();

          if (error || !users) {
            throw new Error('Usuario no encontrado');
          }

          // Verificar contraseña
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            users.password_hash
          );

          if (!isPasswordValid) {
            throw new Error('Contraseña incorrecta');
          }

          // Retornar usuario
          return {
            id: users.id,
            email: users.email,
            name: users.name,
            image: users.image,
          };
        } catch (error) {
          console.error('Error en autenticación:', error);
          throw new Error('Error al iniciar sesión');
        }
      },
    }),

    // Autenticación con Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: 'select_account', // Siempre mostrar selector de cuenta
        },
      },
    }),

    // Autenticación con GitHub
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],

  // Callbacks
  callbacks: {
    // Callback de JWT
    async jwt({ token, user, account, trigger, session }) {
      // Añadir ID de usuario al token
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
      }

      // Si es una actualización del perfil
      if (trigger === 'update' && session) {
        token.name = session.name;
        token.image = session.image;
      }

      // Añadir información del proveedor
      if (account) {
        token.provider = account.provider;
        token.accessToken = account.access_token;
      }

      return token;
    },

    // Callback de sesión
    async session({ session, token }) {
      // Añadir información del token a la sesión
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.image as string;
        
        // Información adicional
        (session as any).provider = token.provider;
        (session as any).accessToken = token.accessToken;
      }

      // Obtener información adicional del usuario desde Supabase
      if (session.user?.id) {
        try {
          const { data: userData, error } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('user_id', session.user.id)
            .single();

          if (!error && userData) {
            (session as any).userProfile = userData;
          }
        } catch (error) {
          console.error('Error obteniendo perfil de usuario:', error);
        }
      }

      return session;
    },

    // Callback de redirect
    async redirect({ url, baseUrl }) {
      // Después de login, redirigir al dashboard
      if (url === '/api/auth/signin') {
        return `${baseUrl}/dashboard`;
      }

      // Si es URL relativa, usar baseUrl
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }

      // Si la URL pertenece al mismo sitio, permitir
      if (new URL(url).origin === baseUrl) {
        return url;
      }

      return baseUrl;
    },
  },

  // Páginas personalizadas
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/dashboard', // Redirigir nuevos usuarios al dashboard
  },

  // Configuración de sesión
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 días
    updateAge: 24 * 60 * 60, // Actualizar sesión cada 24 horas
  },

  // Eventos
  events: {
    async signIn({ user, account, isNewUser }) {
      console.log(`✅ Usuario inició sesión: ${user.email} (${account?.provider})`);

      // Si es un nuevo usuario, crear perfil
      if (isNewUser) {
        try {
          await supabase.from('user_profiles').insert({
            user_id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            created_at: new Date().toISOString(),
          });

          console.log(`✅ Perfil creado para nuevo usuario: ${user.email}`);
        } catch (error) {
          console.error('Error creando perfil de usuario:', error);
        }
      }
    },

    async signOut({ session, token }) {
      console.log(`👋 Usuario cerró sesión: ${session?.user?.email || token.email}`);
    },

    async createUser({ user }) {
      console.log(`✨ Nuevo usuario registrado: ${user.email}`);
    },
  },

  // Debug en desarrollo
  debug: process.env.NODE_ENV === 'development',

  // Secret para JWT
  secret: process.env.NEXTAUTH_SECRET,
};
