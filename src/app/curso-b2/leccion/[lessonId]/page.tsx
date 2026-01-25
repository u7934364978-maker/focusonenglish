import { courseService } from '@/lib/services/course-service';
import LessonPageClient from './LessonPageClient';
import { notFound } from 'next/navigation';

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  
  const lesson = await courseService.getLesson(lessonId);

  if (!lesson) {
    notFound();
  }

  return <LessonPageClient lesson={lesson} />;
}
