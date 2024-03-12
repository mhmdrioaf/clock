import { useContext } from "react";
import { ClockContext, TClockContext } from "../lib/hooks/context";

export default function TimerControl() {
  const { state, handler } = useContext(ClockContext) as TClockContext;

  const startButtonStyle = "uppercase text-white py-2 rounded-md";
  const startButtonColor = state.isRunning
    ? " bg-red-800/85 hover:bg-red-800/100"
    : " bg-green-800/85 hover:bg-green-800/100";

  return (
    <div className="w-full flex flex-col gap-2">
      <button
        id="start_stop"
        className={startButtonStyle + startButtonColor}
        onClick={state.isRunning ? handler.pause : handler.start}
      >
        {state.isRunning ? "Stop" : "Start"}
      </button>
      <button
        id="reset"
        className="bg-amber-800/85 py-2 hover:bg-amber-800/100 rounded-md uppercase"
        onClick={handler.reset}
      >
        Reset
      </button>
    </div>
  );
}
