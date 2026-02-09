import React from 'react';
import { premiumCourseServerService } from '@/lib/services/premium-course-service.server';
import PreviewClient from './PreviewClient';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    courseId: string;
    unitId: string;
  }>;
}

export default async function PreviewPage({ params }: Props) {
  const { courseId, unitId } = await params;
  const unitData = await premiumCourseServerService.getUnitData(courseId, unitId);

  if (!unitData) {
    notFound();
  }

  return <PreviewClient unitData={unitData} courseId={courseId} unitId={unitId} />;
}
