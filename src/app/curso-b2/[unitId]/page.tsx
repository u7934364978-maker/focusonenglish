import B2UnitContent from './B2UnitContent';
import B2TestFinalClient from './B2TestFinalClient';

interface Props {
  params: Promise<{ unitId: string }>;
}

export default async function B2UnitPage({ params }: Props) {
  const { unitId } = await params;

  if (unitId === 'test-final') {
    return <B2TestFinalClient />;
  }

  return <B2UnitContent />;
}
