import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planes y Precios de Cursos de Inglés | Focus English',
  description: 'Compara nuestros planes de suscripción y elige el que mejor se adapte a tus necesidades. Cursos de inglés A1-C2, inglés para viajes y profesional.',
};

export default function PlanesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
