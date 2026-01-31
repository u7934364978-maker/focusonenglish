'use client';

import { useEffect, useState, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  getCurriculum, 
  getTopicsByCategory, 
  getRandomTopic,
  getAllTopics,
  type CEFRLevel 
} from '@/lib/cambridge-curriculum';
import { generateExercise, type Exercise } from '@/lib/exercise-generator';
import ExerciseRenderer from '@/components/ExerciseRenderer';
import { ArrowLeft, RefreshCw } from 'lucide-react';

interface PracticePageProps {
  level: CEFRLevel;
}

function PracticeContent({ level }: PracticePageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = searchParams.get('category');
  const topicId = searchParams.get('topicId');
  const isRandom = searchParams.get('random') === 'true';

  const generateNewExercise = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let topic;
      let selectedCategory;

      if (topicId) {
        // Specific topic requested
        const allTopics = getAllTopics(level);
        topic = allTopics.find((t: any) => t.id === topicId);
        if (!topic) {
          throw new Error(`Topic not found: ${topicId}`);
        }
        selectedCategory = topic.category;
      } else if (isRandom) {
        // Completely random
        topic = getRandomTopic(level);
        selectedCategory = topic.category;
      } else if (category) {
        // Specific category
        const topics = getTopicsByCategory(level, category as any);
        if (topics.length === 0) {
          throw new Error(`No topics found for category: ${category}`);
        }
        topic = topics[Math.floor(Math.random() * topics.length)];
        selectedCategory = category;
      } else {
        throw new Error('No category or random mode specified');
      }

      // Generate exercise using the AI generator
      const generatedExercise = await generateExercise({
        level,
        category: selectedCategory as any,
        topic: topic.id,
        topicName: topic.name,
        topicKeywords: topic.keywords
      });

      setExercise(generatedExercise);
    } catch (err: any) {
      console.error('Error generating exercise:', err);
      setError(err.message || 'Failed to generate exercise');
    } finally {
      setLoading(false);
    }
  }, [level, category, isRandom]);

  useEffect(() => {
    generateNewExercise();
  }, [generateNewExercise]);

  const handleBack = () => {
    router.push(`/aula/${level.toLowerCase()}`);
  };

  const handleNewExercise = () => {
    generateNewExercise();
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-7xl mb-6">🎓</div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Generating Exercise...
          </h2>
          <p className="text-lg text-gray-600">
            Creating a personalized {level} exercise
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={handleNewExercise}
              className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!exercise) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to {level}</span>
            </button>

            <button
              onClick={handleNewExercise}
              className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>New Exercise</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseRenderer 
          key={exercise.id}
          exercise={exercise} 
          onComplete={handleNewExercise} 
        />
      </div>
    </main>
  );
}

export default function PracticePage({ level }: PracticePageProps) {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-7xl mb-6">🎓</div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Loading Practice...
          </h2>
          <p className="text-lg text-gray-600">
            Preparing your exercise
          </p>
        </div>
      </main>
    }>
      <PracticeContent level={level} />
    </Suspense>
  );
}
