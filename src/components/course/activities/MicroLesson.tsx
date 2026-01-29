'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CheckCircle } from 'lucide-react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MicroLessonProps {
  content: {
    summary: string;
    body?: string;
  };
  onComplete: () => void;
}

export default function MicroLesson({ content, onComplete, vocabulary = [] }: MicroLessonProps & { vocabulary?: string[] }) {
  return (
    <Card className="max-w-2xl mx-auto border-2 border-slate-200 shadow-xl rounded-3xl overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-slate-100 p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-blue-500 rounded-xl text-white">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <CardTitle className="text-2xl font-black text-slate-900">Micro Lesson</CardTitle>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Key Concepts</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="prose prose-slate max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-lg prose-strong:text-slate-900 prose-strong:font-black">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => {
                if (typeof children === 'string') {
                  let text = children;
                  vocabulary.forEach(word => {
                    const regex = new RegExp(`\\b(${word})\\b`, 'gi');
                    text = text.replace(regex, `<mark class="bg-orange-100 px-1 rounded font-bold text-coral-700 underline decoration-coral-300 decoration-2 underline-offset-4">$1</mark>`);
                  });
                  return <p dangerouslySetInnerHTML={{ __html: text }} />;
                }
                return <p>{children}</p>;
              }
            }}
          >
            {content.body || content.summary}
          </ReactMarkdown>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex justify-end">
          <Button 
            onClick={onComplete}
            className="bg-coral-600 hover:bg-coral-700 text-white font-black px-8 py-6 rounded-2xl gap-2 shadow-lg shadow-coral-200 transition-all hover:scale-105 active:scale-95"
          >
            <CheckCircle className="w-5 h-5" />
            Finish & Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
