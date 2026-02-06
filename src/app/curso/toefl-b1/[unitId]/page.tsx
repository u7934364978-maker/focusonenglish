import ToeflUnitPage from '@/components/course/ToeflUnitPage';

export default async function Page({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = await params;
  return <ToeflUnitPage level="b1" unitId={unitId} />;
}
