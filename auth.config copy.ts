import type { NextAuthConfig } from 'next-auth';
import { users } from './lib/db/schema/users';
import { db } from './lib/db';
import { eq } from 'drizzle-orm';

export const authConfig = {
  //@ts-ignore
  adapter: DrizzleAdapter(db),
  session: { strategy: 'jwt' },
  secret: process.env.AUTH_SECRET,
  pages: { signIn: '/sign-in' },
  providers: [
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        //@ts-ignore
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const [dbUser] = await db
        .select()
        .from(users)
        .where(eq(users.email, token.email || ''))
        .limit(1);

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/app');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname.startsWith('/sign')) {
        return Response.redirect(new URL('/app', nextUrl))
      }
      return true;
    },
  },
} satisfies NextAuthConfig;