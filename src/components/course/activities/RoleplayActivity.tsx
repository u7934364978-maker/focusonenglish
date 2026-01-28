'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Mic, Play, CheckCircle2 } from 'lucide-react';

interface RoleplayProps {
  content: {
    script: string[];
  };
  onComplete: () => void;
}

export default function RoleplayActivity({ content, onComplete }: RoleplayProps) {
  const [step, setStep] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const nextStep = () => {
    if (step < content.script.length - 1) {
      setStep(s => s + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="border-2 border-pink-200 rounded-3xl overflow-hidden shadow-lg">
        <CardHeader className="bg-pink-50 border-b border-pink-100 p-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-pink-100 rounded-xl">
              <MessageSquare className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold">Interactive Roleplay</CardTitle>
              <p className="text-sm text-pink-600 font-medium">Practice speaking in context</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          <div className="space-y-6">
            {content.script.map((line, idx) => (
              <div 
                key={idx}
                className={`flex gap-4 items-start transition-all duration-500 ${
                  idx > step ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  idx % 2 === 0 ? 'bg-slate-100 text-slate-600' : 'bg-pink-600 text-white'
                }`}>
                  {idx % 2 === 0 ? 'A' : 'B'}
                </div>
                <div className={`p-4 rounded-2xl max-w-[80%] ${
                  idx % 2 === 0 ? 'bg-slate-100 rounded-tl-none' : 'bg-pink-50 text-pink-900 rounded-tr-none border border-pink-100'
                }`}>
                  <p className="font-medium">{line}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <Button
                onClick={() => setIsRecording(!isRecording)}
                className={`h-16 w-16 rounded-full shadow-lg transition-all ${
                  isRecording ? 'bg-red-500 hover:bg-red-600 animate-pulse' : 'bg-slate-900 hover:bg-slate-800'
                }`}
              >
                <Mic className="w-6 h-6 text-white" />
              </Button>
              <Button
                variant="outline"
                className="h-16 w-16 rounded-full border-2 border-slate-200"
              >
                <Play className="w-6 h-6 text-slate-600" />
              </Button>
            </div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              {isRecording ? 'Recording your voice...' : 'Tap mic to practice speaking'}
            </p>
            
            <Button
              onClick={nextStep}
              className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-6 rounded-2xl w-full"
            >
              {step < content.script.length - 1 ? 'Next Line →' : 'Finish Activity'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
