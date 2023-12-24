import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure
} from "@/server/api/trpc";
import { bulletins } from "@/lib/db/schema/bulletin";

export const callsRouter = createTRPCRouter({
    create: publicProcedure
        .input(z.object({ 
            userId: z.string(),
            year: z.number(),
            trimestre: z.number(),
            notes: z.any()
        }))
        .mutation(async ({ ctx, input }) => {

            type NewBulletin = typeof bulletins.$inferInsert
            
            const bulletin: NewBulletin = {
                user_id: input.userId,
                year: input.year,
                trimestre: input.trimestre,
                notes: input.notes,
            }

            return ctx.db.insert(bulletins).values(bulletin)
        }),
});
