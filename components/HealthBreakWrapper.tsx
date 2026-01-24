'use client';

import { useStudyTimer } from '@/hooks/useStudyTimer';
import HealthBreakModal from './HealthBreakModal';

export default function HealthBreakWrapper() {
  const { showBreakModal, closeBreakModal, snoozeBreak } = useStudyTimer();

  return (
    <HealthBreakModal
      isOpen={showBreakModal}
      onClose={closeBreakModal}
      onSnooze={snoozeBreak}
    />
  );
}
