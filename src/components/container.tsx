export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col gap-2 bg-zinc-700 text-neutral-200 rounded-md overflow-hidden">
      {children}
    </div>
  );
}
