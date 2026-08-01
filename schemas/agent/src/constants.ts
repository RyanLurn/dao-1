export const AGENT_MODE_LIST = ["standby", "auto", "stopped"] as const;

export const AGENT_MODE_TRANSITION_STATUS_LIST = [
  "started",
  "succeeded",
  "failed",
] as const;

export const AGENT_SERVICE_ERROR_RECORD = {
  INVALID_AGENT_ID_ERROR: {
    code: "INVALID_AGENT_ID_ERROR",
    status: {
      code: 400,
      text: "Bad Request",
    },
  },
} as const;
