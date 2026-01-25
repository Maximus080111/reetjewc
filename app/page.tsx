export default function Home() {
  return (
    <div className="min-h-screen bg-[#556B2F] font-sans text-white">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="w-full rounded-2xl border border-[#8B5E3C]/40 bg-white/10 p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] backdrop-blur sm:p-12">
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#8B5E3C]" />
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Coming Soon
          </h1>
          <p className="mx-auto mt-4 max-w-prose text-pretty text-base leading-7 text-white/85 sm:text-lg">
            We’re working on something new. Check back soon.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-md items-center justify-center gap-3">
            <div className="h-px flex-1 bg-white/20" />
            <span className="rounded-full bg-[#8B5E3C]/25 px-4 py-1 text-sm font-medium tracking-wide text-white">
              Stay tuned
            </span>
            <div className="h-px flex-1 bg-white/20" />
          </div>
        </div>
      </main>
    </div>
  );
}
