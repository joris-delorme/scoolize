import { date, mysqlEnum, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { createId } from '@paralleldrive/cuid2';
import { users } from "./users";
import { relations } from "drizzle-orm";

export const organisations = mysqlTable("organisations", {
	id: varchar('id', { length: 128 }).$defaultFn(() => createId()).notNull().primaryKey(),
    name: varchar('name', { length: 128 }).unique().notNull(),
    logo: text('logo'),
})

export const invitations = mysqlTable("invitations", {
	id: varchar('id', { length: 128 }).$defaultFn(() => createId()).notNull().primaryKey(),
    organisation_id: varchar('organisation_id', { length: 128 }).notNull(),
    start: date('start').notNull(),
    end: date('end').notNull(),
    first_name: varchar("first_name", { length: 255 }).notNull(),
    last_name: varchar("last_name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    role: mysqlEnum('role', ["SUPERADMIN", "ADMIN", "USER"]).default("USER").notNull(),
})

export const organisationRelations = relations(organisations, ({ many }) => ({
    users: many(users),
    invitations: many(invitations)
}))

export const invitationsRelations = relations(invitations, ({ one }) => ({
    organisations: one(organisations, {
        fields: [invitations.organisation_id],
        references: [organisations.id]
    })
}))