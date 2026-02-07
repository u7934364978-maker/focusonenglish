import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PracticaIAPage = dynamic(() => import('./PracticaIAClient'));

export const metadata: Metadata = {
  title: 'Speaking Coach con IA: Practica Conversación en Inglés Online',
  description: 'Practica tu inglés con nuestro tutor de IA. Conversaciones reales, feedback instantáneo y misiones personalizadas para mejorar tu fluidez.',
  keywords: ['hablar ingles ia', 'speaking coach online', 'practicar ingles gratis', 'tutor ingles inteligente'],
};

export default function Page() {
  return <PracticaIAPage />;
}
