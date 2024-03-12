export default function App() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-2 items-center justify-center bg-stone-950 text-neutral-50 font-mono">
      <div className="flex flex-col gap-1 text-center">
        <h3 className="text-2xl font-bold">Hello, Vite!</h3>
        <p className="text-xs">
          All the <b>TailwindCSS</b> integrations are complete; you could start
          building your app right away.
        </p>
      </div>

      <p className="text-center text-xs">
        Built with{" "}
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Vite
        </a>
        ,{" "}
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          React
        </a>
        , and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          TailwindCSS
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/mhmdrioaf"
          target="_blank"
          className="text-blue-500"
        >
          Rio Ananta
        </a>
        .
      </p>
    </main>
  );
}
