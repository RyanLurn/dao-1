import { H3 } from "h3";

export const agentService = new H3().patch(
  "/:agentId/mode",
  async ({ context }) => {},
);
