export const TEXT_PART_TYPE = "text";
export const TEXT_PART_STREAMING_STATE = "streaming";
export const TEXT_PART_DONE_STATE = "done";
export const TEXT_PART_STATE_LIST = [
  TEXT_PART_STREAMING_STATE,
  TEXT_PART_DONE_STATE,
] as const;

export const REASONING_PART_TYPE = "reasoning";
export const REASONING_PART_STREAMING_STATE = "streaming";
export const REASONING_PART_DONE_STATE = "done";
export const REASONING_PART_STATE_LIST = [
  REASONING_PART_STREAMING_STATE,
  REASONING_PART_DONE_STATE,
] as const;

export const MESSAGE_SYSTEM_ROLE = "system";
export const MESSAGE_USER_ROLE = "user";
export const MESSAGE_ASSISTANT_ROLE = "assistant";
export const MESSAGE_ROLE_LIST = [
  MESSAGE_SYSTEM_ROLE,
  MESSAGE_USER_ROLE,
  MESSAGE_ASSISTANT_ROLE,
] as const;
