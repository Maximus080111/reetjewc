import Link from 'next/link';
import { Form } from 'app/form';
import { signIn } from 'app/auth';
import { SubmitButton } from 'app/submit-button';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/25 to-cyan-400/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

      <div className="relative flex flex-1 items-center justify-center px-6 py-10">
        <Link
          href="/"
          className="absolute left-6 top-6 rounded-full bg-slate-950 border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          Back
        </Link>

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
              <h3 className="text-2xl font-semibold tracking-tight">Sign In</h3>
              <p className="text-sm text-white/70">
                Use your email and password to sign in.
              </p>
            </div>
          </div>

          <Form
            action={async (formData: FormData) => {
              'use server';
              await signIn('credentials', {
                redirectTo: '/protected',
                email: formData.get('email') as string,
                password: formData.get('password') as string,
              });
            }}
          >
            <SubmitButton>Sign in</SubmitButton>
            <p className="text-center text-sm text-slate-800">
              {"Don't have an account? "}
              <Link href="/register" className="font-semibold text-black underline">
                Sign up
              </Link>
              {' for free.'}
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
