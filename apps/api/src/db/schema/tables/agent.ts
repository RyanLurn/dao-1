import { AGENT_MODE_LIST } from "@repo/agent-schemas/constants";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { id } from "@/db/schema/helpers/id";
import { timestamps } from "@/db/schema/helpers/timestamps";
import { userId } from "@/db/schema/tables/user";

export const agentTable = sqliteTable("agents", {
  id,
  userId,
  name: text("name").notNull(),
  mode: text("mode", { enum: AGENT_MODE_LIST }).default("standby").notNull(),
  ...timestamps,
});

export const agentId = text("agent_id")
  .notNull()
  .references(() => agentTable.id, { onDelete: "cascade" });

export const agentModeTransitionTable = sqliteTable("agent_mode_transitions", {
  id,
  agentId,
  from: text("from", { enum: AGENT_MODE_LIST }).notNull(),
  to: text("to", { enum: AGENT_MODE_LIST }).notNull(),
  completedAt: integer("created_at", { mode: "timestamp_ms" }),
  ...timestamps,
});
