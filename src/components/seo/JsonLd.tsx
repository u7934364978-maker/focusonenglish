import React from 'react';

interface JsonLdProps {
  data: any;
}

/**
 * A simple component to inject JSON-LD structured data into the page.
 */
export function JsonLd({ data }: JsonLdProps) {
  if (!data) return null;
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
