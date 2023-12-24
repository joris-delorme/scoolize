
import { eq } from 'drizzle-orm';
import NextAuth from 'next-auth';
import { db } from '../db';
import { users } from '../db/schema/users';
import Credentials from '@auth/core/providers/credentials';
import { z } from 'zod';
import bcryptjs from 'bcryptjs';
import { authConfig } from '@/auth.config';

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {

                console.log(credentials);
                
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                console.log("parsedCredentials", parsedCredentials.success);
                

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;

                    const user = await db.query.users.findFirst({
                        where: eq(users.email, email)
                    })

                    if (!user) return null
                    console.log("user.password", user.password);
                    if(!user.password) return user
                    const passwordsMatch = await bcryptjs.compare(password, user.password)

                    console.log("passwordsMatch", passwordsMatch);
                    
                    if (passwordsMatch) return user
                }
                return null;
            },
        }),
    ],
})
