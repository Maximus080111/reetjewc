import Link from 'next/link';
import { Form } from 'app/form';
import { redirect } from 'next/navigation';
import { createUser, getUser } from 'app/db';
import { SubmitButton } from 'app/submit-button';
import Image from 'next/image';

export default function Login() {
  async function register(formData: FormData) {
    'use server';
    let username = formData.get('username') as string;
    let email = formData.get('email') as string;
    let password = formData.get('password') as string;
    let user = await getUser(email);

    if (user.length > 0) {
      return 'User already exists'; // TODO: Handle errors with useFormStatus
    } else {
      await createUser(username, email, password);
      redirect('/login');
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/25 to-cyan-400/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

      <div className="relative flex flex-1 items-center justify-center px-6 py-10">
        <Link
          href="/"
          className="absolute left-6 top-6 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 bg-slate-950/70 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
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
              <h3 className="text-2xl font-semibold tracking-tight">Sign Up</h3>
              <p className="text-sm text-white/70">
                Create an account with your username, email and password.
              </p>
            </div>
          </div>

          <Form action={register} showUsername>
            <SubmitButton>Sign Up</SubmitButton>
            <p className="text-center text-sm text-slate-800">
              {'Already have an account? '}
              <Link href="/login" className="font-semibold text-black underline">
                Sign in
              </Link>
              {' instead.'}
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
