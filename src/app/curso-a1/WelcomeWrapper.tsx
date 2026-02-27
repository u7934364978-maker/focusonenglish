'use client';

import { useState, useEffect } from 'react';
import CourseWelcomeScreen from '@/components/course/CourseWelcomeScreen';

const COURSE_ID = 'a1';
const FIRST_UNIT = 'unit-1';

interface WelcomeWrapperProps {
  totalUnits: number;
}

export function WelcomeWrapper({ totalUnits }: WelcomeWrapperProps) {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const key = `course_welcome_${COURSE_ID}_shown`;
    if (!localStorage.getItem(key)) {
      setShowWelcome(true);
    }
  }, []);

  if (!showWelcome) return null;

  return (
    <CourseWelcomeScreen
      courseId={COURSE_ID}
      userId="anonymous"
      modulesCount={Math.ceil(totalUnits / 5)}
      lessonsCount={totalUnits}
      firstLessonId={FIRST_UNIT}
      firstLessonHref={`/curso-a1/${FIRST_UNIT}`}
      onDismiss={() => setShowWelcome(false)}
    />
  );
}
