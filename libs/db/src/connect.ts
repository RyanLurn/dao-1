import { drizzle } from "drizzle-orm/neon-http";

import { DbEnvSchema } from "@/env";

export function dbConnect() {
  const connectionString = DbEnvSchema.parse(
    process.env,
  ).NEON_POOLED_CONNECTION_STRING;
  return drizzle(connectionString);
}
