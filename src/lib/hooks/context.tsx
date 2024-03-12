import React from "react";

export type TClockContext = {
  state: {
    breakTime: number;
    sessionTime: number;
    timeLeft: number;
    isRunning: boolean;
    isSession: boolean;
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
    timeLeft: {
      increment: () => void;
      decrement: () => void;
    };
    isRunning: {
      toggle: () => void;
    };
    isSession: {
      toggle: () => void;
    };
  };
};

export const ClockContext = React.createContext<TClockContext | null>(null);

export function ClockProvider({ children }: { children: React.ReactNode }) {
  const [breakTime, setBreakTime] = React.useState(5);
  const [sessionTime, setSessionTime] = React.useState(25);
  const [timeLeft, setTimeLeft] = React.useState(25 * 60 * 1000);
  const [isRunning, setIsRunning] = React.useState(false);
  const [isSession, setIsSession] = React.useState(false);

  const breakTimeHandler = {
    increment: () => {
      setBreakTime((prev) => (prev >= 60 ? 60 : prev + 1));
    },
    decrement: () => {
      setBreakTime((prev) => (prev <= 1 ? 1 : prev - 1));
    },
  };

  const sessionTimeHandler = {
    increment: () => {
      setSessionTime((prev) => (prev >= 60 ? 60 : prev + 1));
    },
    decrement: () => {
      setSessionTime((prev) => (prev <= 1 ? 1 : prev - 1));
    },
  };

  const timeLeftHandler = {
    increment: () => {
      setTimeLeft((prev) => prev + 60 * 1000);
    },
    decrement: () => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 60 * 1000));
    },
  };

  const isRunningHandler = {
    toggle: () => {
      setIsRunning((prev) => !prev);
    },
  };

  const isSessionHandler = {
    toggle: () => {
      setIsSession((prev) => !prev);
    },
  };

  const value: TClockContext = {
    state: {
      breakTime,
      sessionTime,
      timeLeft,
      isRunning,
      isSession,
    },
    handler: {
      breakTime: breakTimeHandler,
      sessionTime: sessionTimeHandler,
      timeLeft: timeLeftHandler,
      isRunning: isRunningHandler,
      isSession: isSessionHandler,
    },
  };

  return (
    <ClockContext.Provider value={value}>{children}</ClockContext.Provider>
  );
}
