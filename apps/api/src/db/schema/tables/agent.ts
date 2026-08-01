import { sqliteTable, text } from "drizzle-orm/sqlite-core";

import { id } from "@/db/schema/helpers/id";
import { timestamps } from "@/db/schema/helpers/timestamps";
import { userId } from "@/db/schema/tables/user";

export const agentTable = sqliteTable("agents", {
  id,
  userId,
  name: text("name").notNull(),
  ...timestamps,
});
