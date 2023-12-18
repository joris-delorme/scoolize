import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import * as users from "./schema/users"
import * as game from "./schema/game"
import * as calls from "./schema/calls"
import * as organisations from "./schema/organisations"

const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
})

export const db = drizzle(connection, { schema: {...users, ...organisations, ...calls, ...game} })