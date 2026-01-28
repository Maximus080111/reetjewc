import { drizzle } from 'drizzle-orm/postgres-js';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';
import { genSaltSync, hashSync } from 'bcrypt-ts';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle
function getPostgresConnectionString(): string {
  const raw =
    process.env.POSTGRES_URL ??
    process.env.DATABASE_URL ??
    process.env.POSTGRES_URL_NON_POOLING ??
    process.env.POSTGRES_PRISMA_URL;

  if (!raw) {
    throw new Error(
      'Missing database connection string. Set POSTGRES_URL (or DATABASE_URL) in your .env file. ' +
        'Example: POSTGRES_URL=postgres://USER:PASSWORD@HOST:5432/DBNAME'
    );
  }

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(
      `Invalid database URL in POSTGRES_URL/DATABASE_URL: "${raw}". ` +
        'Expected a full URL like: postgres://USER:PASSWORD@HOST:5432/DBNAME'
    );
  }

  if (url.protocol !== 'postgres:' && url.protocol !== 'postgresql:') {
    throw new Error(
      `Invalid database URL protocol "${url.protocol}". Expected postgres:// or postgresql://`
    );
  }

  const isLocalhost =
    url.hostname === 'localhost' || url.hostname === '127.0.0.1' || url.hostname === '::1';

  // Keep local dev simple (many local Postgres installs don't use SSL).
  if (!isLocalhost && !url.searchParams.has('sslmode')) {
    url.searchParams.set('sslmode', 'require');
  }

  return url.toString();
}

const client = postgres(getPostgresConnectionString());
const db = drizzle(client);

export async function getUser(email: string) {
  const users = await ensureTableExists();
  return await db.select().from(users).where(eq(users.email, email));
}

export async function createUser(
  username: string,
  email: string,
  password: string
) {
  const users = await ensureTableExists();
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  return await db.insert(users).values({ username, email, password: hash });
}

async function ensureTableExists() {
  const result = await client`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'User'
    );`;

  if (!result[0].exists) {
    await client`
      CREATE TABLE "User" (
        id SERIAL PRIMARY KEY,
        username VARCHAR(64),
        email VARCHAR(64),
        password VARCHAR(64)
      );`;
  }

  // Keep schema in sync for existing databases
  await client`
    ALTER TABLE "User"
    ADD COLUMN IF NOT EXISTS username VARCHAR(64);
  `;

  const table = pgTable('User', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 64 }),
    email: varchar('email', { length: 64 }),
    password: varchar('password', { length: 64 }),
  });

  return table;
}
