import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curso A1 - English Practice',
  description: 'Practice unlimited English exercises at A1 level',
};

export default function A1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
