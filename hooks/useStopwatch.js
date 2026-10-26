import { useState, useEffect } from 'react';

export default function useStopwatch(isRunning) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    // Cleanup function to prevent memory leaks and double-timers
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  return seconds;
}