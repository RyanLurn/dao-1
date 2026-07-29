import { pgEnum, pgTable, text } from "drizzle-orm/pg-core";

import { id } from "@/schema/helpers/id";
import { timestamps } from "@/schema/helpers/timestamps";
import { userId } from "@/schema/helpers/user-id";

export const TASK_STATUSES = ["planned", "in-progress", "done"] as const;

export const taskStatusEnum = pgEnum("task_status", TASK_STATUSES);

export const taskTable = pgTable("tasks", {
  id,
  userId,
  name: text("name").notNull(),
  status: taskStatusEnum().default("planned").notNull(),
  ...timestamps,
});
