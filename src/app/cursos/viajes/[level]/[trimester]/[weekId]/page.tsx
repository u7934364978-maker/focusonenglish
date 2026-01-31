import { localCourseService } from '@/lib/services/local-course-service';
import LessonClient from './LessonClient';
import WeekHubClient from './WeekHubClient';
import { notFound } from 'next/navigation';
import * as fs from 'fs';
import * as path from 'path';

interface Props {
  params: Promise<{
    level: string;
    trimester: string;
    weekId: string;
  }>;
}

export default async function TravelWeekPage({ params }: Props) {
  const { level, trimester, weekId } = await params;
  
  // Normalize paths
  const normalizedLevel = level.toLowerCase();
  const normalizedTrimester = trimester.toLowerCase();
  const normalizedWeekId = weekId.toLowerCase();

  // Check if this week has redesigned interactive lessons
  const baseDir = path.resolve(process.cwd(), 'src/content/cursos/viajes', normalizedLevel, normalizedTrimester, normalizedWeekId);
  const isRedesigned = fs.existsSync(path.join(baseDir, 'lesson1.json'));

  if (isRedesigned) {
    const lesson1 = await localCourseService.getTravelLesson(level, trimester, weekId, 'lesson1');
    const lesson2 = await localCourseService.getTravelLesson(level, trimester, weekId, 'lesson2');
    const lesson3 = await localCourseService.getTravelLesson(level, trimester, weekId, 'lesson3');

    const lessons = [];
    if (lesson1) lessons.push({ id: 'lesson1', title: lesson1.title });
    if (lesson2) lessons.push({ id: 'lesson2', title: lesson2.title });
    if (lesson3) lessons.push({ id: 'lesson3', title: lesson3.title });

    return (
      <WeekHubClient 
        level={level} 
        trimester={trimester} 
        weekId={weekId}
        weekTitle={lesson1?.title ? `Semana ${weekId.replace('semana', '')}: ${lesson1.title.split(':')[0]}` : `Semana ${weekId.replace('semana', '')}`}
        lessons={lessons}
      />
    );
  }
  
  const lesson = await localCourseService.getTravelLesson(level, trimester, weekId);

  if (!lesson) {
    notFound();
  }

  return <LessonClient lesson={lesson} level={level} />;
}
