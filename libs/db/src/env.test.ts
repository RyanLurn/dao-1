import { describe, expect, test } from "vitest";

import { DbEnvSchema } from "@/env";

const validKey = "NEON_POOLED_CONNECTION_STRING";
const validValue =
  "postgresql://user1:AbC123dEf@ep-cool-darkness-123456-pooler.us-east-2.aws.neon.tech/dbname?sslmode=require";
const invalidValue =
  "postgresql://user1:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname?sslmode=require";

// Success case
test("DbEnvSchema should validate a valid env object", () => {
  const envObject = {
    NODE_ENV: "test",
    [validKey]: validValue,
  };

  const parseResult = DbEnvSchema.safeParse(envObject);

  expect.assert(parseResult.success === true);
  expect(parseResult.data).toHaveProperty(validKey, validValue);
});

// Failure cases
describe("DbEnvSchema should fail to validate", () => {
  test("an object without the key `NEON_POOLED_CONNECTION_STRING`", () => {
    const envObject = {
      NODE_ENV: "production",
    };

    const parseResult = DbEnvSchema.safeParse(envObject);
    expect.assert(parseResult.success === false);

    const issues = parseResult.error.issues;
    expect(issues).toHaveLength(1);

    const issue = issues[0];
    expect(issue).toMatchObject({
      code: "invalid_type",
      expected: "string",
      path: [validKey],
    });
  });

  test("an object with the right key but an invalid value", () => {
    const envObject = {
      NODE_ENV: "production",
      [validKey]: invalidValue,
    };

    const parseResult = DbEnvSchema.safeParse(envObject);
    expect.assert(parseResult.success === false);

    const issues = parseResult.error.issues;
    expect(issues).toHaveLength(1);

    const issue = issues[0];
    expect(issue).toMatchObject({
      code: "invalid_format",
      format: "template_literal",
      path: [validKey],
    });
  });
});
