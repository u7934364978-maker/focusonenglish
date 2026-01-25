'use client';

import { useRouter } from 'next/navigation';
import LessonViewer from '@/components/course/LessonViewer';
import { Lesson } from '@/lib/exercise-types';

interface LessonClientProps {
  lesson: Lesson;
}

export default function LessonClient({ lesson }: LessonClientProps) {
  const router = useRouter();

  const handleLessonComplete = (lessonId: string, score: number) => {
    console.log(`Lesson ${lessonId} completed with score: ${score}`);
    
    alert(`Congratulations! You completed ${lesson.title} with a score of ${Math.round(score)}%`);
    
    router.push('/curso-b2');
  };

  return (
    <div>
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={() => router.push('/curso-b2')}
            className="flex items-center gap-2 text-coral-600 hover:text-coral-700 font-semibold transition-colors"
          >
            <span>←</span>
            <span>Back to Course</span>
          </button>
        </div>
      </div>

      <LessonViewer lesson={lesson} onComplete={handleLessonComplete} />
    </div>
  );
}
