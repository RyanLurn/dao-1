import type { UIMessage } from "ai";

import { jsonb, pgEnum, pgTable } from "drizzle-orm/pg-core";

import { id } from "@/schema/helpers/id";
import { timestamps } from "@/schema/helpers/timestamps";

export const MESSAGE_ROLES = ["system", "user", "assistant"] as const;
export const messageRoleEnum = pgEnum("message_role", MESSAGE_ROLES);

export const messageTable = pgTable("messages", {
  id,
  role: messageRoleEnum().notNull(),
  parts: jsonb("parts").notNull().$type<UIMessage["parts"]>(),
  ...timestamps,
});
