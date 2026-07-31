import { z } from "zod";

export const FileIdSchema = z.uuidv4().brand<"FileId">();
export type FileId = z.infer<typeof FileIdSchema>;

export const MIN_FILE_NAME_LENGTH = 1;
export const MAX_FILE_NAME_LENGTH = 200;
export const FileNameSchema = z
  .string()
  .normalize("NFC")
  .min(MIN_FILE_NAME_LENGTH)
  .max(MAX_FILE_NAME_LENGTH)
  .brand<"FileName">();
export type FileName = z.infer<typeof FileNameSchema>;

export const FileMetadataSchema = z.object({
  id: FileIdSchema,
  name: FileNameSchema,
});
export type FileMetadata = z.infer<typeof FileMetadataSchema>;
