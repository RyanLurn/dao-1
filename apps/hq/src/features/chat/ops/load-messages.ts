import type { FlatError } from "@repo/error/types";
import type { Result } from "@repo/result/types";

import { db } from "@repo/db";
import { messageTable } from "@repo/db/schema/tables/message";
import { UnexpectedError } from "@repo/error/classes/unexpected";
import { err, ok } from "@repo/result/utils";
import { createServerFn } from "@tanstack/react-start";
import { setResponseStatus } from "@tanstack/react-start/server";

export const loadMessages = createServerFn({ strict: false }).handler(
  async (): Promise<
    Result<
      Array<typeof messageTable.$inferSelect>,
      FlatError<UnexpectedError["code"]>
    >
  > => {
    try {
      const messages = await db.select().from(messageTable);
      return ok(messages);
    } catch (error) {
      console.error(error);
      setResponseStatus(500, "Internal Server Error");
      return err(
        new UnexpectedError({
          action: "load messages",
          cause: error,
        }).serialize({ mode: "flat" }),
      );
    }
  },
);
