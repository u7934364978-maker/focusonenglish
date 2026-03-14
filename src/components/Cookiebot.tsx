'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Cookiebot() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const COOKIEBOT_ID = process.env.NEXT_PUBLIC_COOKIEBOT_ID || '474b1dce-7229-40d3-88c2-a2323b9a57f9';

  useEffect(() => {
    const authorizedDomains = ['focus-on-english.com', 'www.focus-on-english.com', 'localhost'];
    const isAuthorized = authorizedDomains.some((d) => window.location.hostname.includes(d));
    if (!isAuthorized) return;

    const loadAfterPageLoad = () => {
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(() => setShouldLoad(true), { timeout: 2500 });
      } else {
        setTimeout(() => setShouldLoad(true), 100);
      }
    };
    if (document.readyState === 'complete') loadAfterPageLoad();
    else window.addEventListener('load', loadAfterPageLoad, { once: true });
  }, []);

  if (!shouldLoad) return null;

  return (
    <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid={COOKIEBOT_ID} type="text/javascript" strategy="lazyOnload" />
  );
}
