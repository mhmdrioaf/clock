import { useContext } from "react";
import { ClockContext, TClockContext } from "../lib/hooks/context";
import { convertTime } from "../lib/helper";

export default function ClockHandler() {
  const { state, handler } = useContext(ClockContext) as TClockContext;

  return (
    <section
      id="clock-handler"
      className="w-full grid grid-cols-2 gap-2 select-none"
    >
      <div
        id="break-time-container"
        className="w-full px-2 py-4 flex flex-col gap-2 items-center justify-center"
      >
        <p id="break-label" className="text-2xl font-bold">
          Break Length
        </p>
        <div className="w-full inline-flex items-center justify-center gap-2">
          <button
            disabled={state.isRunning}
            id="break-decrement"
            className="bg-zinc-800/80 hover:bg-zinc-800/100 disabled:opacity-50 rounded-md px-4 py-2 text-center text-2xl font-bold"
            onClick={handler.breakTime.decrement}
          >
            -
          </button>
          <p
            id="break-length"
            className="text-lg font-bold px-4 py-2 bg-zinc-800 rounded-md overflow-hidden"
          >
            {convertTime(state.breakTime).minutes}
          </p>
          <button
            disabled={state.isRunning}
            id="break-increment"
            className="bg-zinc-800/80 hover:bg-zinc-800/100 disabled:opacity-50 rounded-md px-4 py-2 text-center text-2xl font-bold"
            onClick={handler.breakTime.increment}
          >
            +
          </button>
        </div>
      </div>

      <div
        id="session-time-container"
        className="w-full px-2 py-4 flex flex-col gap-2 items-center justify-center"
      >
        <p id="session-label" className="text-2xl font-bold">
          Session Length
        </p>
        <div className="w-full inline-flex items-center justify-center gap-2">
          <button
            disabled={state.isRunning}
            id="session-decrement"
            className="bg-zinc-800/80 hover:bg-zinc-800/100 disabled:opacity-50 rounded-md px-4 py-2 text-center text-2xl font-bold"
            onClick={handler.sessionTime.decrement}
          >
            -
          </button>
          <p
            id="session-length"
            className="text-lg font-bold px-4 py-2 bg-zinc-800 rounded-md overflow-hidden"
          >
            {convertTime(state.sessionTime).minutes}
          </p>
          <button
            disabled={state.isRunning}
            id="session-increment"
            className="bg-zinc-800/80 hover:bg-zinc-800/100 disabled:opacity-50 rounded-md px-4 py-2 text-center text-2xl font-bold"
            onClick={handler.sessionTime.increment}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}
