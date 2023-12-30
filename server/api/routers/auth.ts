import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure
} from "@/server/api/trpc";
import bcryptjs from "bcryptjs";
import { users } from "@/lib/db/schema/users";
import { eq } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";

export const authRouter = createTRPCRouter({
    signUp: publicProcedure
        .input(z.object({ 
            first_name: z.string(),
            last_name: z.string(),
            email: z.string(),
            password: z.string(),
            organisation_id: z.string(),
            role: z.enum(["SUPERADMIN", "ADMIN", "USER"])
        }))
        .mutation(async ({ ctx, input }) => {

            const existingUserByEmail = await ctx.db.query.users.findFirst({
                where: eq(users.email, input.email)
            })

            if (existingUserByEmail) throw new Error("Cette adresse mail est déjà utilisé")
    
            const hash = await bcryptjs.hash(input.password, 10);
            console.log(hash);
            
            type NewUser = typeof users.$inferInsert
            


            const userID = createId()

            const newUser: NewUser = {
                ...input,
                id: userID,
            }
            
            await ctx.db.insert(users).values(newUser)
        }),
})
