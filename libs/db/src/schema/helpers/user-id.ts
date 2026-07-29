import { uuid } from "drizzle-orm/pg-core";

import { userTable } from "@/schema/tables/user";

export const userId = uuid("user_id")
  .notNull()
  .references(() => userTable.id, { onDelete: "cascade" });
