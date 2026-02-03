import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planes y Precios | Suscripción desde €6.99',
  description: 'Elige entre nuestros planes de suscripción mensual: Plan con Publicidad por €6.99/mes o Plan Premium sin anuncios por €14.99/mes. Acceso ilimitado a todos los cursos de inglés. Sin permanencia, cancela cuando quieras.',
  keywords: [
    'planes focus english',
    'precios cursos inglés',
    'suscripción mensual inglés',
    'curso inglés barato',
    'inglés online precio',
    'plan premium inglés',
    'curso inglés 6.99',
    'curso inglés 14.99',
  ],
  openGraph: {
    title: 'Planes y Precios - Focus English',
    description: 'Suscripción mensual desde €6.99. Acceso ilimitado a todos los cursos. Sin permanencia.',
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Planes Focus English',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planes y Precios - Focus English',
    description: 'Suscripción mensual desde €6.99. Acceso ilimitado a todos los cursos.',
  },
  alternates: {
    canonical: 'https://www.focus-on-english.com/planes',
  },
};
