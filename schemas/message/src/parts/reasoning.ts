import { z } from "zod";

import { REASONING_PART_STATE_LIST, REASONING_PART_TYPE } from "@/constants";

export const ReasoningPartSchema = z.object({
  type: z.literal(REASONING_PART_TYPE),
  text: z.string(),
  state: z.enum(REASONING_PART_STATE_LIST).optional(),
  providerMetadata: z.record(z.string(), z.any()).optional(),
});
export type ReasoningPart = z.infer<typeof ReasoningPartSchema>;
