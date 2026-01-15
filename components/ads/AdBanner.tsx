'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  dataFullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Componente para mostrar anuncios de Google AdSense
 * 
 * @param dataAdSlot - ID del slot de anuncio de AdSense (ej: "1234567890")
 * @param dataAdFormat - Formato del anuncio (auto, fluid, rectangle, etc.)
 * @param dataFullWidthResponsive - Si el anuncio debe ocupar todo el ancho
 * @param className - Clases CSS adicionales
 * @param style - Estilos inline adicionales
 * 
 * Uso:
 * <AdBanner 
 *   dataAdSlot="1234567890"
 *   dataAdFormat="auto"
 *   dataFullWidthResponsive={true}
 * />
 */
export default function AdBanner({
  dataAdSlot,
  dataAdFormat = 'auto',
  dataFullWidthResponsive = true,
  className = '',
  style = {},
}: AdBannerProps) {
  useEffect(() => {
    try {
      // Verificar si AdSense está disponible
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('Error loading AdSense:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
}

/**
 * Variantes predefinidas de anuncios para facilitar el uso
 */

// Banner horizontal (arriba o abajo de contenido)
export function AdBannerHorizontal({ className }: { className?: string }) {
  return (
    <AdBanner
      dataAdSlot={process.env.NEXT_PUBLIC_ADSENSE_HORIZONTAL_SLOT || ''}
      dataAdFormat="horizontal"
      dataFullWidthResponsive={true}
      className={`my-4 ${className || ''}`}
      style={{ minHeight: '90px' }}
    />
  );
}

// Banner cuadrado (sidebar)
export function AdBannerSquare({ className }: { className?: string }) {
  return (
    <AdBanner
      dataAdSlot={process.env.NEXT_PUBLIC_ADSENSE_SQUARE_SLOT || ''}
      dataAdFormat="rectangle"
      dataFullWidthResponsive={false}
      className={`my-4 ${className || ''}`}
      style={{ minHeight: '250px', minWidth: '250px' }}
    />
  );
}

// Banner vertical (sidebar)
export function AdBannerVertical({ className }: { className?: string }) {
  return (
    <AdBanner
      dataAdSlot={process.env.NEXT_PUBLIC_ADSENSE_VERTICAL_SLOT || ''}
      dataAdFormat="vertical"
      dataFullWidthResponsive={false}
      className={`my-4 ${className || ''}`}
      style={{ minHeight: '600px', minWidth: '160px' }}
    />
  );
}

// Banner auto-responsivo (recomendado)
export function AdBannerAuto({ className }: { className?: string }) {
  return (
    <AdBanner
      dataAdSlot={process.env.NEXT_PUBLIC_ADSENSE_AUTO_SLOT || ''}
      dataAdFormat="auto"
      dataFullWidthResponsive={true}
      className={`my-6 ${className || ''}`}
      style={{ minHeight: '100px' }}
    />
  );
}

// Banner entre contenido (in-feed)
export function AdBannerInFeed({ className }: { className?: string }) {
  return (
    <div className={`bg-slate-50 rounded-lg border border-slate-200 p-4 ${className || ''}`}>
      <p className="text-xs text-slate-500 mb-2 text-center">Publicidad</p>
      <AdBanner
        dataAdSlot={process.env.NEXT_PUBLIC_ADSENSE_INFEED_SLOT || ''}
        dataAdFormat="fluid"
        dataFullWidthResponsive={true}
        style={{ minHeight: '100px' }}
      />
    </div>
  );
}
