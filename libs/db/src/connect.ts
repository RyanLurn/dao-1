import type { NeonQueryFunction } from "@neondatabase/serverless";
import type { Result } from "@repo/result/types";
import type { EmptyRelations } from "drizzle-orm";
import type { NeonHttpDatabase } from "drizzle-orm/neon-http";

import { err, ok } from "@repo/result/utils";
import { drizzle } from "drizzle-orm/neon-http";

import { DbEnvSchema } from "@/env";
import {
  InvalidDatabaseConnectionStringError,
  MissingDatabaseConnectionStringError,
} from "@/errors";

export function dbConnect(): Result<
  NeonHttpDatabase<EmptyRelations> & {
    $client: NeonQueryFunction<false, false>;
  },
  MissingDatabaseConnectionStringError | InvalidDatabaseConnectionStringError
> {
  const parseResult = DbEnvSchema.safeParse(process.env);

  if (!parseResult.success) {
    const zodError = parseResult.error;

    const issue = zodError.issues[0];
    if (issue && issue.code === "invalid_type") {
      return err(
        new MissingDatabaseConnectionStringError({
          message:
            "Database connection string is missing from this environment.",
          cause: zodError,
        }),
      );
    }

    return err(
      new InvalidDatabaseConnectionStringError({
        message: "Database connection string is invalid.",
        cause: zodError,
      }),
    );
  }

  return ok(drizzle(parseResult.data.NEON_POOLED_CONNECTION_STRING));
}
