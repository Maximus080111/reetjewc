export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 font-sans text-slate-100">
      <div className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold tracking-wide text-amber-200 ring-1 ring-inset ring-amber-400/30">
              PREVIEW CHANNEL
            </span>
            <p className="hidden text-sm text-slate-300 sm:block">
              Not production — expect changes.
            </p>
          </div>
          <p className="text-xs text-slate-400">January 25, 2026</p>
        </div>
      </div>

      <main className="mx-auto flex min-h-[calc(100vh-52px)] max-w-5xl flex-col items-center justify-center px-6 py-14 text-center">
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.7)] backdrop-blur sm:p-12">
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-amber-400/70" />

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Preview channel of the website
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            This environment is for trying upcoming changes before they ship.
            Things may look unfinished, features can break, and content may reset.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm font-semibold text-slate-100">What to expect</p>
              <p className="mt-1 text-sm text-slate-300">
                In-progress UI, incomplete pages, and frequent updates.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm font-semibold text-slate-100">Good for</p>
              <p className="mt-1 text-sm text-slate-300">
                QA checks, stakeholder review, and quick demos.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm font-semibold text-slate-100">Not for</p>
              <p className="mt-1 text-sm text-slate-300">
                Final approvals, stable links, or real user traffic.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 flex w-full max-w-xl items-center justify-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="rounded-full bg-white/5 px-4 py-1 text-sm font-medium text-slate-200 ring-1 ring-inset ring-white/10">
              Preview build
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </main>
    </div>
  );
}
