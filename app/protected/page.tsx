import { auth, signOut } from 'app/auth';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProtectedPage() {
  let session = await auth();
  const username =
    (session?.user as any)?.username ?? session?.user?.name ?? session?.user?.email;

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/25 to-cyan-400/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

      <div className="relative flex flex-1 items-center justify-center px-6 py-10">

        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex flex-col items-center justify-center space-y-4 border-b border-white/10 bg-slate-950/70 px-6 py-8 text-center">
            <Image
              src="/reetjewc.png"
              alt="ReetjeWC Logo"
              width={140}
              height={140}
              priority
            />
            <div className="space-y-2">
              <p className="text-lg text-white/70">
                You are logged in as <span className="font-semibold text-white">{username}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 bg-white px-4 py-8 sm:px-16">
            <SignOut />
          </div>
        </div>
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button
        className="w-full rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-white/40"
        type="submit"
      >
        Sign out
      </button>
    </form>
  );
}
