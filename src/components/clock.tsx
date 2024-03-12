import { useContext } from "react";
import { ClockContext, TClockContext } from "../lib/hooks/context";
import { convertTime } from "../lib/helper";

export default function Clock() {
  const { state } = useContext(ClockContext) as TClockContext;

  const clockBaseStyle = "w-full flex flex-col gap-2 rounded-md p-4 relative";
  const breakClockStyle =
    " bg-blue-900 text-blue-100 animate-pulse duration-10";
  const sessionClockStyle = " bg-green-900 text-green-100";

  const clockStyle =
    clockBaseStyle +
    (state.isRunning && state.timeLabel === "Session"
      ? sessionClockStyle
      : state.isRunning && state.timeLabel === "Break"
      ? breakClockStyle
      : " bg-zinc-800 text-neutral-200");

  return (
    <section id="clock-container" className={clockStyle}>
      <p
        id="timer-label"
        className="text-sm text-center absolute top-2 right-4 text-amber-500 uppercase tracking-widest"
      >
        {state.timeLabel}
      </p>

      <div className="w-full rounded-sm px-4 py-2 text-center">
        <p
          id="time-left"
          className={`text-6xl ${
            state.timeLeft.minutes < 1 ? "text-red-600" : "text-neutral-100"
          }`}
        >
          {convertTime(state.timeLeft).full}
        </p>
      </div>
    </section>
  );
}
