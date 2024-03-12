import React from "react";

export type TTime = {
  minutes: number;
  seconds: number;
};

export type TClockContext = {
  state: {
    breakTime: TTime;
    sessionTime: TTime;
    timeLeft: TTime;
    isRunning: boolean;
    isSession: boolean;
    timeLabel: "Session" | "Break";
  };

  handler: {
    breakTime: {
      increment: () => void;
      decrement: () => void;
    };
    sessionTime: {
      increment: () => void;
      decrement: () => void;
    };
    reset: () => void;
    start: () => void;
    pause: () => void;
  };
};

export const ClockContext = React.createContext<TClockContext | null>(null);

export function ClockProvider({ children }: { children: React.ReactNode }) {
  const [sessionTime, setSessionTime] = React.useState<TTime>({
    minutes: 25,
    seconds: 0,
  });

  const [breakTime, setBreakTime] = React.useState<TTime>({
    minutes: 5,
    seconds: 0,
  });

  const [timeLeft, setTimeLeft] = React.useState<TTime>({
    minutes: 25,
    seconds: 0,
  });

  const [isRunning, setIsRunning] = React.useState(false);
  const [isSession, setIsSession] = React.useState(false);
  const [timeLabel, setTimeLabel] = React.useState<"Session" | "Break">(
    "Session"
  );

  const audioElement = document.getElementById(
    "beep"
  ) as HTMLAudioElement | null;

  const breakTimeHandler = {
    increase: () =>
      setBreakTime((prev) => {
        if (prev.minutes < 60) {
          return { ...prev, minutes: prev.minutes + 1 };
        }
        return prev;
      }),
    decrease: () =>
      setBreakTime((prev) => {
        if (prev.minutes > 1) {
          return { ...prev, minutes: prev.minutes - 1 };
        }
        return prev;
      }),
  };

  const sessionTimeHandler = {
    increase: () =>
      setSessionTime((prev) => {
        if (prev.minutes < 60) {
          const value = { ...prev, minutes: prev.minutes + 1 };
          setTimeLeft(value);
          return value;
        }
        return prev;
      }),
    decrease: () =>
      setSessionTime((prev) => {
        if (prev.minutes > 1) {
          const value = { ...prev, minutes: prev.minutes - 1 };
          setTimeLeft(value);
          return value;
        }
        return prev;
      }),
  };

  const start = () => {
    setIsRunning(true);
    setIsSession(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTimeLabel("Session");
    setIsRunning(false);
    setIsSession(false);
    setSessionTime({ minutes: 25, seconds: 0 });
    setBreakTime({ minutes: 5, seconds: 0 });
    setTimeLeft({ minutes: 25, seconds: 0 });
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  };

  const value: TClockContext = {
    state: {
      breakTime,
      sessionTime,
      timeLeft,
      isRunning,
      isSession,
      timeLabel,
    },
    handler: {
      breakTime: {
        increment: breakTimeHandler.increase,
        decrement: breakTimeHandler.decrease,
      },
      sessionTime: {
        increment: sessionTimeHandler.increase,
        decrement: sessionTimeHandler.decrease,
      },
      reset: reset,
      start: start,
      pause: pause,
    },
  };

  const handleStartTime = React.useCallback(
    (label: "Session" | "Break", interval: number) => {
      if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        setTimeLeft(label === "Break" ? breakTime : sessionTime);
        setTimeLabel(label === "Break" ? "Break" : "Session");
        setIsSession((prev) => !prev);
        if (audioElement) {
          audioElement.play();
        }
        clearInterval(interval);
      } else {
        if (timeLeft.seconds === 0) {
          setTimeLeft((prev) => {
            return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          });
        } else {
          setTimeLeft((prev) => {
            return { ...prev, seconds: prev.seconds - 1 };
          });
        }
      }
    },
    [audioElement, breakTime, timeLeft, sessionTime]
  );

  React.useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        handleStartTime(isSession ? "Break" : "Session", interval);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [handleStartTime, isRunning, isSession]);

  return (
    <ClockContext.Provider value={value}>{children}</ClockContext.Provider>
  );
}
