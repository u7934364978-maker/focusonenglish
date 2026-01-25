import { localCourseService } from '@/lib/services/local-course-service';
import LessonClient from './LessonClient';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    sector: string;
    level: string;
    trimester: string;
    weekId: string;
  }>;
}

export default async function ProfessionalLessonPage({ params }: Props) {
  const { sector, level, trimester, weekId } = await params;
  
  const lesson = await localCourseService.getProfessionalLesson(sector, level, trimester, weekId);

  if (!lesson) {
    notFound();
  }

  return <LessonClient lesson={lesson} sector={sector} level={level} />;
}
