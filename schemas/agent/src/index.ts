import { z } from "zod";

export const AgentIdSchema = z.uuidv7();
export type AgentId = z.infer<typeof AgentIdSchema>;
