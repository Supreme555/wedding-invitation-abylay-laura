'use client';

import { useState, useEffect } from 'react';
import { getTimeRemaining } from '@/lib/utils';

export function useCountdown(targetDate: Date) {
  const [timeRemaining, setTimeRemaining] = useState(() =>
    getTimeRemaining(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeRemaining;
}
