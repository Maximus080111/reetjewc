import { auth, signOut } from 'app/auth';

export default async function ProtectedPage() {
  let session = await auth();
  const username =
    (session?.user as any)?.username ?? session?.user?.name ?? session?.user?.email;

  return (
    <div className="flex h-screen bg-[#66717E]">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        You are logged in as {username}
        <SignOut />
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
      <button className="bg-white text-black px-12 py-4 rounded-full mt-8" type="submit">Sign out</button>
    </form>
  );
}
