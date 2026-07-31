import { z } from "zod";

export const UserIdSchema = z.uuidv7().brand<"UserId">();
export type UserId = z.infer<typeof UserIdSchema>;

export const USER_NAME_MIN_LENGTH = 1;
export const USER_NAME_MAX_LENGTH = 128;
export const UserNameSchema = z
  .string()
  .normalize()
  .min(USER_NAME_MIN_LENGTH)
  .max(USER_NAME_MAX_LENGTH)
  .brand<"UserName">();
export type UserName = z.infer<typeof UserNameSchema>;

export const UserSchema = z.object({
  id: UserIdSchema,
  name: UserNameSchema,
});
export type User = z.infer<typeof UserSchema>;
