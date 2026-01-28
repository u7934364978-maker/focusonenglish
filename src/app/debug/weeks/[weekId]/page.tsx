import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import WeeklyCourseViewer from '@/components/course/WeeklyCourseViewer';
import { Navigation } from '@/components/sections/Navigation';

interface Props {
  params: Promise<{
    weekId: string;
  }>;
}

export default async function WeeklyDebugPage({ params }: Props) {
  const { weekId } = await params;
  
  const filePath = path.join(process.cwd(), 'src/content/weeks', `${weekId}.json`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const weekData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <div className="py-12">
        <WeeklyCourseViewer weekData={weekData} />
      </div>
    </div>
  );
}
