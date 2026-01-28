import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/reetjewc.png"
              alt="ReetjeWC Logo"
              width={60}
              height={60}
              priority
            />
            <span className="text-lg font-semibold tracking-tight">ReetjeWC</span>
          </Link>

          <Link
            href="/login"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Sign in
          </Link>
        </div>
      </nav>

      <main className="flex flex-1">
        <section className="relative flex flex-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/25 to-cyan-400/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
          <div className="relative mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:py-24">
            <div className="mb-2 rounded-3xl">
              <Image
                src="/reetjewc.png"
                alt="ReetjeWC Logo"
                width={300}
                height={300}
                priority
              />
            </div>
            <h1 className="text-white bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
              ReetjeWC
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
              Van porseleinen troon tot nachtmerrie: review ze allemaal.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/login"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Inloggen
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
