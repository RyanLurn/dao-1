import { z } from "zod";

export const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "testing", "staging", "production"]),
  DB_FILE_PATH: z.templateLiteral([
    z.string().min(1),
    ".",
    z.enum(["db", "sqlite"]),
  ]),
});

export const env = EnvSchema.parse(process.env);
