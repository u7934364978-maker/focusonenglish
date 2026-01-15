'use client';

import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';

interface AdControllerProps {
  children: ReactNode;
  showByDefault?: boolean;
}

/**
 * Componente que controla la visibilidad de anuncios según el plan del usuario
 * 
 * Lógica:
 * - Si el usuario tiene plan 'premium': NO muestra anuncios
 * - Si el usuario tiene plan 'with-ads': SÍ muestra anuncios
 * - Si el usuario NO está logueado: depende de showByDefault
 * 
 * @param children - Componente de anuncio a mostrar/ocultar
 * @param showByDefault - Si mostrar anuncios cuando no hay sesión (default: false)
 */
export default function AdController({ children, showByDefault = false }: AdControllerProps) {
  const { data: session, status } = useSession();

  // Mientras carga la sesión, no mostrar nada para evitar flashes
  if (status === 'loading') {
    return null;
  }

  // Usuario no logueado
  if (!session || !session.user) {
    return showByDefault ? <>{children}</> : null;
  }

  // @ts-ignore - Verificar el plan del usuario
  const userPlan = session.user?.subscriptionPlan || 'with-ads';

  // Si tiene plan premium, NO mostrar anuncios
  if (userPlan === 'premium') {
    return null;
  }

  // Si tiene plan with-ads, mostrar anuncios
  if (userPlan === 'with-ads') {
    return <>{children}</>;
  }

  // Por defecto, depende de showByDefault
  return showByDefault ? <>{children}</> : null;
}

/**
 * Hook personalizado para verificar si el usuario debe ver anuncios
 */
export function useShowAds(): boolean {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return false;
  }

  if (!session || !session.user) {
    return false; // Usuarios no logueados no ven anuncios por defecto
  }

  // @ts-ignore
  const userPlan = session.user?.subscriptionPlan || 'with-ads';

  return userPlan === 'with-ads';
}

/**
 * Componente que muestra un mensaje promocional para quitar anuncios
 */
export function AdUpgradePrompt() {
  return (
    <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200 rounded-xl p-4 my-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl">
          ✨
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-slate-900 mb-1">
            ¿Cansado de los anuncios?
          </h3>
          <p className="text-sm text-slate-600 mb-3">
            Actualiza a Premium y disfruta de una experiencia sin interrupciones, más clases en vivo y contenido exclusivo.
          </p>
          <a
            href="/planes"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-violet-700 hover:to-purple-700 transition-all"
          >
            Ver Planes Premium →
          </a>
        </div>
      </div>
    </div>
  );
}
