import React from 'react';
import { notFound } from 'next/navigation';
import { B2_NEG_MODULES } from '@/lib/course-data-b2-neg';
import B2UnitSession from '@/components/course/B2UnitSession';

export default async function B2NegLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  
  // Find the lesson in our modules
  const allLessons = B2_NEG_MODULES.flatMap(m => m.lessons);
  const lesson = allLessons.find(l => l.id === lessonId);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <B2UnitSession unit={lesson} backUrl="/curso/negociaciones-b2" />
    </div>
  );
}

export async function generateStaticParams() {
  const allLessons = B2_NEG_MODULES.flatMap(m => m.lessons);
  return allLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}
