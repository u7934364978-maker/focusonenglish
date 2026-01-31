import { localCourseService } from '@/lib/services/local-course-service';
import LessonClient from '../LessonClient';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    level: string;
    trimester: string;
    weekId: string;
    lessonId: string;
  }>;
}

export default async function TravelLessonPage({ params }: Props) {
  const { level, trimester, weekId, lessonId } = await params;
  
  const lesson = await localCourseService.getTravelLesson(level, trimester, weekId, lessonId);

  if (!lesson) {
    notFound();
  }

  return <LessonClient lesson={lesson} level={level} />;
}
