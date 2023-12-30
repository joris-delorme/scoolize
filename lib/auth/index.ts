
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
                return null;
            },
        }),
    ],
})
