'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Cookiebot() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const COOKIEBOT_ID = process.env.NEXT_PUBLIC_COOKIEBOT_ID || '474b1dce-7229-40d3-88c2-a2323b9a57f9';

  useEffect(() => {
    const authorizedDomains = [
      'focus-on-english.com',
      'www.focus-on-english.com',
      'localhost'
    ];
    
    const currentHost = window.location.hostname;
    const isAuthorized = authorizedDomains.some(domain => currentHost.includes(domain));
    
    setShouldLoad(isAuthorized);
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid={COOKIEBOT_ID}
      type="text/javascript"
      strategy="afterInteractive"
    />
  );
}
