'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CheckCircle } from 'lucide-react';

interface MicroLessonProps {
  content: {
    summary: string;
    body?: string;
  };
  onComplete: () => void;
}

export default function MicroLesson({ content, onComplete }: MicroLessonProps) {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BookOpen className="w-5 h-5 text-blue-600" />
          </div>
          <CardTitle>Micro Lesson</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg font-medium text-slate-700 leading-relaxed">
            {content.summary}
          </p>
          {content.body && (
            <div className="mt-4 text-slate-600">
              {content.body}
            </div>
          )}
        </div>
        
        <div className="pt-6 border-t border-slate-100 flex justify-end">
          <Button 
            onClick={onComplete}
            className="bg-coral-600 hover:bg-coral-700 text-white font-bold gap-2 rounded-xl"
          >
            <CheckCircle className="w-4 h-4" />
            Mark as Completed
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
