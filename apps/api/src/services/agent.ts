import type { InvalidAgentIdErrorResponseBody } from "@repo/agent-schemas";

import { AgentIdSchema } from "@repo/agent-schemas";
import { AGENT_SERVICE_ERROR_RECORD } from "@repo/agent-schemas/constants";
import { H3, HTTPError } from "h3";

import { DEFAULT_RESPONSE_HEADERS } from "@/constants";

export const agentService = new H3().patch(
  "/:agentId/mode",
  async ({ context }) => {
    const parseIdResult = AgentIdSchema.safeParse(context.params?.agentId);
    if (!parseIdResult.success) {
      throw new HTTPError({
        status: AGENT_SERVICE_ERROR_RECORD.INVALID_AGENT_ID_ERROR.status.code,
        statusText:
          AGENT_SERVICE_ERROR_RECORD.INVALID_AGENT_ID_ERROR.status.text,
        headers: DEFAULT_RESPONSE_HEADERS,
        body: {
          ok: false,
          error: {
            code: "INVALID_AGENT_ID_ERROR",
            message:
              "Invalid agent id format. Please provide a UUID version 7.",
            cause: "Invalid UUID",
          },
        } satisfies InvalidAgentIdErrorResponseBody,
      });
    }
  },
);
