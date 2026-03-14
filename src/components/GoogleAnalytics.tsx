'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useMemo, useEffect, useState } from 'react';

const excludedRoutes = ['/curso/ingles-a1', '/curso/ingles-b1', '/curso/ingles-c1', '/curso/ingles-c2', '/dashboard', '/profile', '/settings', '/leccion', '/certificados', '/practica'];

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pathname = usePathname();
  const [deferLoad, setDeferLoad] = useState(false);

  const shouldTrack = useMemo(() => {
    if (!pathname) return true;
    return !excludedRoutes.some((r) => pathname.startsWith(r));
  }, [pathname]);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !shouldTrack) return;
    const loadAfterPageLoad = () => {
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(() => setDeferLoad(true), { timeout: 3000 });
      } else {
        setTimeout(() => setDeferLoad(true), 200);
      }
    };
    if (document.readyState === 'complete') loadAfterPageLoad();
    else window.addEventListener('load', loadAfterPageLoad, { once: true });
  }, [GA_MEASUREMENT_ID, shouldTrack]);

  if (!GA_MEASUREMENT_ID || !shouldTrack || !deferLoad) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="lazyOnload" data-cookieconsent="statistics" />
      <Script id="google-analytics" strategy="lazyOnload" data-cookieconsent="statistics">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{page_path:window.location.pathname,anonymize_ip:true,cookie_flags:'SameSite=None;Secure'});`}
      </Script>
    </>
  );
}
