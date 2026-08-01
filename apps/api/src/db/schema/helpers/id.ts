import { text } from "drizzle-orm/sqlite-core";
import { v7 as uuidv7 } from "uuid";

export const id = text("id")
  .primaryKey()
  .$defaultFn(() => uuidv7());
