import type { ZodError } from "zod";

import { BaseError } from "@repo/error/classes/base";

export class MissingDatabaseConnectionStringError extends BaseError<
  "MISSING_DATABASE_CONNECTION_STRING_ERROR",
  ZodError
> {
  readonly name = "MissingDatabaseConnectionStringError";
  readonly code = "MISSING_DATABASE_CONNECTION_STRING_ERROR";
}

export class InvalidDatabaseConnectionStringError extends BaseError<
  "INVALID_DATABASE_CONNECTION_STRING_ERROR",
  ZodError
> {
  readonly name = "InvalidDatabaseConnectionStringError";
  readonly code = "INVALID_DATABASE_CONNECTION_STRING_ERROR";
}
