import { sql } from "drizzle-orm";
import { beforeAll, expect, test } from "vitest";

import { dbConnect } from "@/connect";

beforeAll(() => {
  process.loadEnvFile();
});

test("dbConnect function should connect to Neon Postgres", async () => {
  const connectResult = dbConnect();
  expect.assert(connectResult.ok === true);

  const db = connectResult.data;
  await expect(db.execute(sql`select 1`)).resolves.toBeDefined();
});
