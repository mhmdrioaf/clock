import Clock from "./components/clock";
import ClockHandler from "./components/clockHandler";
import Container from "./components/container";
import TimerControl from "./components/timerControl";

export default function App() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-2 items-center justify-center bg-zinc-950 font-mono text-neutral-200">
      <h2 className="text-6xl font-bold text-center">25 + 5 Clock</h2>
      <Container>
        <ClockHandler />
        <Clock />
        <TimerControl />

        <audio
          src="https://assets.mixkit.co/active_storage/sfx/1084/1084.wav"
          id="beep"
          className="hidden"
        />
      </Container>

      <p className="text-sm text-center">
        Designed and developed by{" "}
        <a
          href="https://twitter.com/oirioir"
          target="_blank"
          className="font-bold underline"
        >
          Rio Ananta
        </a>
        .
      </p>
    </main>
  );
}
