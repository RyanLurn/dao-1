import { z } from "zod";

import { AGENT_SERVICE_ERROR_RECORD } from "@/constants";

export const AgentIdSchema = z.uuidv7();
export type AgentId = z.infer<typeof AgentIdSchema>;

export const InvalidAgentIdErrorResponseBodySchema = z.object({
  ok: z.literal(false),
  error: z.object({
    code: z.literal(AGENT_SERVICE_ERROR_RECORD.INVALID_AGENT_ID_ERROR.code),
    cause: z.literal("Invalid UUID"),
  }),
});
export type InvalidAgentIdErrorResponseBody = z.infer<
  typeof InvalidAgentIdErrorResponseBodySchema
>;
