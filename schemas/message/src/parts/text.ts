import { z } from "zod";

import { TEXT_PART_STATE_LIST, TEXT_PART_TYPE } from "@/constants";

export const TextPartSchema = z.object({
  type: z.literal(TEXT_PART_TYPE),
  text: z.string(),
  state: z.enum(TEXT_PART_STATE_LIST).optional(),
});
export type TextPart = z.infer<typeof TextPartSchema>;
