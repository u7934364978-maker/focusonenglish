import { redirect } from 'next/navigation';
import LessonClient from './LessonClient';
import { ALL_MODULES } from '@/lib/course-data-b2';

export async function generateStaticParams() {
  const lessons = ALL_MODULES.flatMap(m => m.lessons);
  return lessons.map(lesson => ({
    lessonId: lesson.id,
  }));
}

export default function LessonPage({ params }: { params: { lessonId: string } }) {
  const { lessonId } = params;
  
  const lesson = ALL_MODULES.flatMap(m => m.lessons).find(l => l.id === lessonId);

  if (!lesson) {
    redirect('/curso-b2');
  }

  return <LessonClient lesson={lesson} />;
}
