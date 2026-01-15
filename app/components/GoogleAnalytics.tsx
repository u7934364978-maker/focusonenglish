'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pathname = usePathname();
  const [shouldTrack, setShouldTrack] = useState(false);

  useEffect(() => {
    // Rutas EXCLUIDAS de Google Analytics (contenido de pago)
    const excludedRoutes = [
      '/curso-a1',
      '/curso-a2', 
      '/curso-b1',
      '/curso-b2',
      '/curso-c1',
      '/curso-c2',
      '/dashboard',
      '/profile',
      '/settings',
      '/leccion',
    ];

    // Verificar si la ruta actual debe ser excluida
    const isExcluded = excludedRoutes.some(route => pathname?.startsWith(route));
    
    setShouldTrack(!isExcluded);
  }, [pathname]);

  // No cargar GA si no hay ID o si está en ruta excluida
  if (!GA_MEASUREMENT_ID || !shouldTrack) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        data-cookieconsent="statistics"
      />
      <Script id="google-analytics" strategy="afterInteractive" data-cookieconsent="statistics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
}
