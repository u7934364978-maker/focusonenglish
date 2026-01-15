import Script from 'next/script';

/**
 * Componente para cargar el script de Google AdSense
 * 
 * Debe ser incluido en el layout principal de la aplicación
 * Solo se carga si NEXT_PUBLIC_ADSENSE_CLIENT_ID está configurado
 * 
 * Uso en app/layout.tsx:
 * import AdSenseScript from '@/components/ads/AdSenseScript';
 * 
 * <body>
 *   <AdSenseScript />
 *   {children}
 * </body>
 */
export default function AdSenseScript() {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  // No cargar si no está configurado
  if (!adsenseClientId || adsenseClientId.includes('your_publisher_id')) {
    return null;
  }

  return (
    <>
      <Script
        id="adsense-script"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
}
