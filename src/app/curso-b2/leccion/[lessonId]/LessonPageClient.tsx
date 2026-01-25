'use client';

import { useRouter } from 'next/navigation';
import LessonViewer from '@/components/course/LessonViewer';
import { Lesson } from '@/lib/exercise-types';

interface LessonPageClientProps {
  lesson: Lesson;
}

export default function LessonPageClient({ lesson }: LessonPageClientProps) {
  const router = useRouter();
  
  const handleLessonComplete = (lessonId: string, score: number) => {
    // In a real app, this would save to a database
    console.log(`Lesson ${lessonId} completed with score: ${score}`);
    
    // Show completion modal
    alert(`Congratulations! You completed ${lesson.title} with a score of ${Math.round(score)}%`);
    
    // Redirect to course page
    router.push('/curso-b2');
  };

  return (
    <div>
      {/* Back Button */}
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

      {/* Lesson Content */}
      <LessonViewer lesson={lesson} onComplete={handleLessonComplete} />
    </div>
  );
}
