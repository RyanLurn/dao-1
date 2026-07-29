import { expect, test } from "vitest";

import { DbEnvSchema } from "@/env";

// Success case
test("DbEnvSchema should validate a valid Neon pooled connection string", () => {
  const pooledConnectionString =
    "postgresql://user1:AbC123dEf@ep-cool-darkness-123456-pooler.us-east-2.aws.neon.tech/dbname?sslmode=require";

  const parseResult = DbEnvSchema.shape.NEON_POOLED_CONNECTION_STRING.safeParse(
    pooledConnectionString,
  );

  expect.assert(parseResult.success === true);
  expect(parseResult.data).toBe(pooledConnectionString);
});
