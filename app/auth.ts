import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
import { getUser } from 'app/db';
import { authConfig } from 'app/auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        let user = await getUser(email);
        if (user.length === 0) return null;
        let passwordsMatch = await compare(password, user[0].password!);
        if (!passwordsMatch) return null;

        // Never expose password hashes to the session/token.
        return {
          id: String(user[0].id),
          email: user[0].email,
          name: user[0].username ?? user[0].email,
          username: user[0].username,
        } as any;
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user }) {
      if (user) {
        const u = user as any;
        token.username = u.username ?? u.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).username = (token as any).username;
        session.user.name = ((token as any).username as string) ?? session.user.name;
      }
      return session;
    },
  },
});
