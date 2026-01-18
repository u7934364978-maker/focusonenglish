import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ejercicios Inteligentes de Inglés - Todos los Niveles CEFR | Focus English',
  description: 'Practica inglés con ejercicios generados por IA adaptados a tu nivel (A1, A2, B1, B2, C1, C2). Gramática, vocabulario, lectura y más con feedback instantáneo.',
  keywords: [
    'ejercicios de inglés',
    'práctica de inglés',
    'ejercicios con IA',
    'CEFR niveles',
    'gramática inglesa',
    'vocabulario inglés',
    'aprender inglés online',
    'ejercicios interactivos',
    'A1 A2 B1 B2 C1 C2',
  ],
  openGraph: {
    title: 'Ejercicios Inteligentes de Inglés con IA',
    description: 'Ejercicios personalizados generados con IA para todos los niveles CEFR',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
