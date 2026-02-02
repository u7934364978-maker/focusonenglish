'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/sections/Navigation';
import LessonViewer from '@/components/course/LessonViewer';
import { 
  A1_DEMO_DAY_1, 
  A1_DEMO_DAY_2, 
  A1_DEMO_DAY_3, 
  A1_DEMO_DAY_4, 
  A1_DEMO_DAY_5, 
  A1_DEMO_DAY_6, 
  A1_DEMO_DAY_7 
} from '@/lib/a1-demo-course';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';

const lessons = [
  A1_DEMO_DAY_1,
  A1_DEMO_DAY_2,
  A1_DEMO_DAY_3,
  A1_DEMO_DAY_4,
  A1_DEMO_DAY_5,
  A1_DEMO_DAY_6,
  A1_DEMO_DAY_7
];

export default function DemoCoursePage() {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  const handleLessonComplete = (lessonId: string, score: number) => {
    if (selectedDayIndex !== null && !completedDays.includes(selectedDayIndex)) {
      setCompletedDays(prev => [...prev, selectedDayIndex]);
    }
    // Optionally show a summary or just return to the list
  };

  const currentLesson = selectedDayIndex !== null ? lessons[selectedDayIndex] : null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12 px-4 container mx-auto max-w-5xl">
        {currentLesson ? (
          <div className="space-y-4">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedDayIndex(null)}
              className="mb-4"
            >
              ← Volver al curso
            </Button>
            <LessonViewer 
              lesson={currentLesson} 
              onComplete={handleLessonComplete} 
            />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-slate-900">Curso Demo A1: 7 Días de Inglés</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Domina situaciones reales en solo una semana. Cada día incluye teoría interactiva y ejercicios prácticos.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
              {lessons.map((lesson, index) => (
                <Card 
                  key={lesson.id}
                  className={`cursor-pointer hover:shadow-md transition-all border-l-4 ${
                    completedDays.includes(index) ? 'border-l-green-500' : 'border-l-blue-500'
                  }`}
                  onClick={() => setSelectedDayIndex(index)}
                >
                  <CardHeader className="flex flex-row items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        completedDays.includes(index) ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{lesson.title}</CardTitle>
                        <p className="text-sm text-slate-500 line-clamp-1">{lesson.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {completedDays.includes(index) && (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      )}
                      <ChevronRight className="w-5 h-5 text-slate-300" />
                    </div>
                  </CardHeader>
                  <CardContent className="py-2">
                    <div className="flex gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {lesson.exercises.length + (lesson.theorySlides?.length || 0)} Actividades
                      </span>
                      <span>•</span>
                      <span>{lesson.duration} minutos</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
