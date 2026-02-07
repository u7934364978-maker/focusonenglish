import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const TutorPrivadoClient = dynamic(() => import('./TutorPrivadoClient'));

export const metadata: Metadata = {
  title: 'Tutor Privado de Inglés con IA: Clases Personalizadas Online 24/7',
  description: 'Aprende inglés con clases particulares 100% personalizadas con IA. Mejora tu gramática, vocabulario y pronunciación a tu propio ritmo.',
};

export default function PrivateTutorPage() {
  return <TutorPrivadoClient />;
}
