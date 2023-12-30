import { int, json, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { createId } from '@paralleldrive/cuid2';
import { users } from "./users";
import { relations } from "drizzle-orm";

export const bulletins = mysqlTable("bulletins", {
	id: varchar('id', { length: 128 }).$defaultFn(() => createId()).notNull().primaryKey(),
    year: int('year'),
    trimestre: int('trimestre'),
    notes: json('notes'),
    user_id: varchar("user_id", { length: 255 }).notNull()
})

export const bulletinRelations = relations(bulletins, ({ one }) => ({
    user: one(users, {
        fields: [bulletins.user_id],
        references: [users.id]
    })
}))
