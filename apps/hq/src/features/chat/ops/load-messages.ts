import { dbConnect } from "@repo/db/connect";
import { messageTable } from "@repo/db/schema/tables/message";
import { createServerFn } from "@tanstack/react-start";
import { setResponseStatus } from "@tanstack/react-start/server";

export const loadMessages = createServerFn({ strict: false }).handler(
  async () => {
    const connectResult = dbConnect();
    if (!connectResult.ok) {
      setResponseStatus(500, "Internal Server Error");
      return connectResult.error.serialize({ mode: "flat" });
    }
    const db = connectResult.data;

    const messages = await db.select().from(messageTable);
    return messages;
  },
);
