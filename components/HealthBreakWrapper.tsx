'use client';

import { useStudyTimer } from '@/hooks/useStudyTimer';
import HealthBreakModal from './HealthBreakModal';
import StudyTimeDisplay from './StudyTimeDisplay';

export default function HealthBreakWrapper() {
  const { showBreakModal, closeBreakModal, snoozeBreak } = useStudyTimer();

  return (
    <>
      <StudyTimeDisplay />
      <HealthBreakModal
        isOpen={showBreakModal}
        onClose={closeBreakModal}
        onSnooze={snoozeBreak}
      />
    </>
  );
}
