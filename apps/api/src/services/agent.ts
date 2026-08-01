import { AgentIdSchema } from "@repo/agent-schemas";
import { H3 } from "h3";

export const agentService = new H3().patch(
  "/:agentId/mode",
  async ({ context }) => {
    const parseIdResult = AgentIdSchema.safeParse(context.params?.agentId);
    if (!parseIdResult.success) {
      return {};
    }
  },
);
